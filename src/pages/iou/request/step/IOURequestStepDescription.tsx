import lodashIsEmpty from 'lodash/isEmpty';
import React, {useCallback, useMemo, useRef} from 'react';
import {View} from 'react-native';
import type {OnyxEntry} from 'react-native-onyx';
import FormProvider from '@components/Form/FormProvider';
import InputWrapper from '@components/Form/InputWrapper';
import type {FormInputErrors, FormOnyxValues} from '@components/Form/types';
import TextInput from '@components/TextInput';
import useAutoFocusInput from '@hooks/useAutoFocusInput';
import useLocalize from '@hooks/useLocalize';
import useOnyx from '@hooks/useOnyx';
import usePolicy from '@hooks/usePolicy';
import useThemeStyles from '@hooks/useThemeStyles';
import {addErrorMessage} from '@libs/ErrorUtils';
import {shouldUseTransactionDraft} from '@libs/IOUUtils';
import Navigation from '@libs/Navigation/Navigation';
import Parser from '@libs/Parser';
import {getPersonalPolicy} from '@libs/PolicyUtils';
import {isMoneyRequestAction} from '@libs/ReportActionsUtils';
import {canEditMoneyRequest} from '@libs/ReportUtils';
import {areRequiredFieldsEmpty} from '@libs/TransactionUtils';
import variables from '@styles/variables';
import {setDraftSplitTransaction, setMoneyRequestDescription, updateMoneyRequestDescription} from '@userActions/IOU';
import CONST from '@src/CONST';
import ONYXKEYS from '@src/ONYXKEYS';
import type SCREENS from '@src/SCREENS';
import INPUT_IDS from '@src/types/form/MoneyRequestDescriptionForm';
import type * as OnyxTypes from '@src/types/onyx';
import DiscardChangesConfirmation from './DiscardChangesConfirmation';
import StepScreenWrapper from './StepScreenWrapper';
import withFullTransactionOrNotFound from './withFullTransactionOrNotFound';
import type {WithWritableReportOrNotFoundProps} from './withWritableReportOrNotFound';
import withWritableReportOrNotFound from './withWritableReportOrNotFound';

type IOURequestStepDescriptionProps = WithWritableReportOrNotFoundProps<typeof SCREENS.MONEY_REQUEST.STEP_DESCRIPTION> & {
    /** Holds data related to Expense view state, rather than the underlying Expense data. */
    transaction: OnyxEntry<OnyxTypes.Transaction>;
};

function IOURequestStepDescription({
    route: {
        params: {action, iouType, reportID, backTo, reportActionID, transactionID},
    },
    transaction,
    report,
}: IOURequestStepDescriptionProps) {
    const policy = usePolicy(report?.policyID);
    const [splitDraftTransaction] = useOnyx(`${ONYXKEYS.COLLECTION.SPLIT_TRANSACTION_DRAFT}${transactionID}`, {canBeMissing: true});
    const [policyCategories] = useOnyx(`${ONYXKEYS.COLLECTION.POLICY_CATEGORIES}${report?.policyID}`, {canBeMissing: true});
    const [policyTags] = useOnyx(`${ONYXKEYS.COLLECTION.POLICY_TAGS}${report?.policyID}`, {canBeMissing: true});
    const reportActionsReportID = useMemo(() => {
        let actionsReportID;
        if (action === CONST.IOU.ACTION.EDIT) {
            actionsReportID = iouType === CONST.IOU.TYPE.SPLIT ? report?.reportID : report?.parentReportID;
        }
        return actionsReportID;
    }, [action, iouType, report?.reportID, report?.parentReportID]);
    const [reportAction] = useOnyx(`${ONYXKEYS.COLLECTION.REPORT_ACTIONS}${reportActionsReportID}`, {
        canEvict: false,
        // eslint-disable-next-line @typescript-eslint/prefer-nullish-coalescing
        selector: (reportActions) => reportActions?.[report?.parentReportActionID || reportActionID],
        canBeMissing: true,
    });
    const [session] = useOnyx(ONYXKEYS.SESSION, {canBeMissing: false});
    const styles = useThemeStyles();
    const {translate} = useLocalize();
    const {inputCallbackRef} = useAutoFocusInput(true);
    const isEditing = action === CONST.IOU.ACTION.EDIT;
    // In the split flow, when editing we use SPLIT_TRANSACTION_DRAFT to save draft value
    const isEditingSplit = (iouType === CONST.IOU.TYPE.SPLIT || iouType === CONST.IOU.TYPE.SPLIT_EXPENSE) && isEditing;
    const isTransactionDraft = shouldUseTransactionDraft(action, iouType);

    const currentDescriptionInMarkdown = useMemo(() => {
        if (!isTransactionDraft || iouType === CONST.IOU.TYPE.SPLIT_EXPENSE) {
            return Parser.htmlToMarkdown(isEditingSplit && !lodashIsEmpty(splitDraftTransaction) ? (splitDraftTransaction?.comment?.comment ?? '') : (transaction?.comment?.comment ?? ''));
        }
        return isEditingSplit && !lodashIsEmpty(splitDraftTransaction) ? (splitDraftTransaction?.comment?.comment ?? '') : (transaction?.comment?.comment ?? '');
    }, [isTransactionDraft, iouType, isEditingSplit, splitDraftTransaction, transaction?.comment?.comment]);

    const descriptionRef = useRef(currentDescriptionInMarkdown);
    const isSavedRef = useRef(false);

    /**
     * @returns - An object containing the errors for each inputID
     */
    const validate = useCallback(
        (values: FormOnyxValues<typeof ONYXKEYS.FORMS.MONEY_REQUEST_DESCRIPTION_FORM>): FormInputErrors<typeof ONYXKEYS.FORMS.MONEY_REQUEST_DESCRIPTION_FORM> => {
            const errors = {};

            if (values.moneyRequestComment.length > CONST.DESCRIPTION_LIMIT) {
                addErrorMessage(
                    errors,
                    'moneyRequestComment',
                    translate('common.error.characterLimitExceedCounter', {length: values.moneyRequestComment.length, limit: CONST.DESCRIPTION_LIMIT}),
                );
            }

            return errors;
        },
        [translate],
    );

    const navigateBack = () => {
        Navigation.goBack(backTo);
    };

    const updateDescriptionRef = (value: string) => {
        descriptionRef.current = value;
    };

    const updateComment = (value: FormOnyxValues<typeof ONYXKEYS.FORMS.MONEY_REQUEST_DESCRIPTION_FORM>) => {
        if (!transaction?.transactionID) {
            return;
        }

        isSavedRef.current = true;
        const newComment = value.moneyRequestComment.trim();

        // Only update comment if it has changed
        if (newComment === currentDescriptionInMarkdown) {
            navigateBack();
            return;
        }

        // In the split flow, when editing we use SPLIT_TRANSACTION_DRAFT to save draft value
        if (isEditingSplit) {
            setDraftSplitTransaction(transaction?.transactionID, {comment: newComment});
            navigateBack();
            return;
        }

        setMoneyRequestDescription(transaction?.transactionID, newComment, isTransactionDraft);

        if (action === CONST.IOU.ACTION.EDIT) {
            updateMoneyRequestDescription(transaction?.transactionID, reportID, newComment, policy, policyTags, policyCategories);
        }

        navigateBack();
    };

    const isSplitBill = iouType === CONST.IOU.TYPE.SPLIT;
    const isSplitExpense = iouType === CONST.IOU.TYPE.SPLIT_EXPENSE;
    const canEditSplitBill = isSplitBill && reportAction && session?.accountID === reportAction.actorAccountID && areRequiredFieldsEmpty(transaction);
    const canEditSplitExpense = isSplitExpense && !!transaction;

    // eslint-disable-next-line rulesdir/no-negated-variables
    let shouldShowNotFoundPage = false;

    if (isEditing) {
        if (isSplitBill) {
            shouldShowNotFoundPage = !canEditSplitBill;
        } else if (isSplitExpense) {
            shouldShowNotFoundPage = !canEditSplitExpense;
        } else {
            shouldShowNotFoundPage = !isMoneyRequestAction(reportAction) || !canEditMoneyRequest(reportAction);
        }
    }

    const isReportInGroupPolicy = !!report?.policyID && report.policyID !== CONST.POLICY.ID_FAKE && getPersonalPolicy()?.id !== report.policyID;
    const getDescriptionHint = () => {
        return transaction?.category && policyCategories ? (policyCategories[transaction?.category]?.commentHint ?? '') : '';
    };

    return (
        <StepScreenWrapper
            headerTitle={translate('common.description')}
            onBackButtonPress={navigateBack}
            shouldShowWrapper
            testID={IOURequestStepDescription.displayName}
            shouldShowNotFoundPage={shouldShowNotFoundPage}
        >
            <FormProvider
                style={[styles.flexGrow1, styles.ph5]}
                formID={ONYXKEYS.FORMS.MONEY_REQUEST_DESCRIPTION_FORM}
                onSubmit={updateComment}
                validate={validate}
                submitButtonText={translate('common.save')}
                enabledWhenOffline
                shouldHideFixErrorsAlert
            >
                <View style={styles.mb4}>
                    <InputWrapper
                        valueType="string"
                        InputComponent={TextInput}
                        inputID={INPUT_IDS.MONEY_REQUEST_COMMENT}
                        name={INPUT_IDS.MONEY_REQUEST_COMMENT}
                        defaultValue={currentDescriptionInMarkdown}
                        onValueChange={updateDescriptionRef}
                        label={translate('moneyRequestConfirmationList.whatsItFor')}
                        accessibilityLabel={translate('moneyRequestConfirmationList.whatsItFor')}
                        role={CONST.ROLE.PRESENTATION}
                        autoGrowHeight
                        maxAutoGrowHeight={variables.textInputAutoGrowMaxHeight}
                        shouldSubmitForm
                        type="markdown"
                        excludedMarkdownStyles={!isReportInGroupPolicy ? ['mentionReport'] : []}
                        ref={inputCallbackRef}
                        hint={getDescriptionHint()}
                    />
                </View>
            </FormProvider>
            <DiscardChangesConfirmation
                getHasUnsavedChanges={() => {
                    if (isSavedRef.current) {
                        return false;
                    }
                    return descriptionRef.current !== currentDescriptionInMarkdown;
                }}
            />
        </StepScreenWrapper>
    );
}

IOURequestStepDescription.displayName = 'IOURequestStepDescription';

// eslint-disable-next-line rulesdir/no-negated-variables
const IOURequestStepDescriptionWithFullTransactionOrNotFound = withFullTransactionOrNotFound(IOURequestStepDescription);
// eslint-disable-next-line rulesdir/no-negated-variables
const IOURequestStepDescriptionWithWritableReportOrNotFound = withWritableReportOrNotFound(IOURequestStepDescriptionWithFullTransactionOrNotFound);

export default IOURequestStepDescriptionWithWritableReportOrNotFound;
