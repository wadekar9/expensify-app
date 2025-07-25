import {useIsFocused} from '@react-navigation/native';
import {Str} from 'expensify-common';
import type {ForwardedRef} from 'react';
import React, {forwardRef, useCallback, useEffect, useImperativeHandle, useMemo, useRef, useState} from 'react';
import {InteractionManager, View} from 'react-native';
import DotIndicatorMessage from '@components/DotIndicatorMessage';
import FormAlertWithSubmitButton from '@components/FormAlertWithSubmitButton';
import AppleSignIn from '@components/SignInButtons/AppleSignIn';
import GoogleSignIn from '@components/SignInButtons/GoogleSignIn';
import Text from '@components/Text';
import TextInput from '@components/TextInput';
import isTextInputFocused from '@components/TextInput/BaseTextInput/isTextInputFocused';
import type {BaseTextInputRef} from '@components/TextInput/BaseTextInput/types';
import withToggleVisibilityView from '@components/withToggleVisibilityView';
import type {WithToggleVisibilityViewProps} from '@components/withToggleVisibilityView';
import useLocalize from '@hooks/useLocalize';
import useNetwork from '@hooks/useNetwork';
import useOnyx from '@hooks/useOnyx';
import usePrevious from '@hooks/usePrevious';
import useResponsiveLayout from '@hooks/useResponsiveLayout';
import useThemeStyles from '@hooks/useThemeStyles';
import {isMobileWebKit} from '@libs/Browser';
import canFocusInputOnScreenFocus from '@libs/canFocusInputOnScreenFocus';
import {getLatestErrorMessage} from '@libs/ErrorUtils';
import isInputAutoFilled from '@libs/isInputAutoFilled';
import {appendCountryCode, getPhoneNumberWithoutSpecialChars} from '@libs/LoginUtils';
import {parsePhoneNumber} from '@libs/PhoneNumber';
import StringUtils from '@libs/StringUtils';
import {isNumericWithSpecialChars} from '@libs/ValidationUtils';
import Visibility from '@libs/Visibility';
import {useLogin} from '@pages/signin/SignInLoginContext';
import {setDefaultData} from '@userActions/CloseAccount';
import {beginSignIn, clearAccountMessages, clearSignInData} from '@userActions/Session';
import CONFIG from '@src/CONFIG';
import CONST from '@src/CONST';
import type {TranslationPaths} from '@src/languages/types';
import ONYXKEYS from '@src/ONYXKEYS';
import htmlDivElementRef from '@src/types/utils/htmlDivElementRef';
import viewRef from '@src/types/utils/viewRef';
import type LoginFormProps from './types';
import type {InputHandle} from './types';

type BaseLoginFormProps = WithToggleVisibilityViewProps & LoginFormProps;

function BaseLoginForm({blurOnSubmit = false, isVisible}: BaseLoginFormProps, ref: ForwardedRef<InputHandle>) {
    const {login, setLogin} = useLogin();
    const [account] = useOnyx(ONYXKEYS.ACCOUNT, {canBeMissing: true});
    const [closeAccount] = useOnyx(ONYXKEYS.FORMS.CLOSE_ACCOUNT_FORM, {canBeMissing: true});
    const styles = useThemeStyles();
    const {isOffline} = useNetwork();
    const {translate} = useLocalize();
    const input = useRef<BaseTextInputRef | null>(null);
    const [formError, setFormError] = useState<TranslationPaths | undefined>();
    const prevIsVisible = usePrevious(isVisible);
    const firstBlurred = useRef(false);
    const isFocused = useIsFocused();
    const isLoading = useRef(false);
    const {shouldUseNarrowLayout, isInNarrowPaneModal} = useResponsiveLayout();
    const accountMessage = account?.message === 'unlinkLoginForm.successfullyUnlinkedLogin' ? translate(account.message) : (account?.message ?? '');

    /**
     * Validate the input value and set the error for formError
     */
    const validate = useCallback(
        (value: string) => {
            const loginTrim = StringUtils.removeInvisibleCharacters(value.trim());
            if (!loginTrim) {
                setFormError('common.pleaseEnterEmailOrPhoneNumber');
                return false;
            }

            const phoneLogin = appendCountryCode(getPhoneNumberWithoutSpecialChars(loginTrim));
            const parsedPhoneNumber = parsePhoneNumber(phoneLogin);

            if (!Str.isValidEmail(loginTrim) && !parsedPhoneNumber.possible) {
                if (isNumericWithSpecialChars(loginTrim)) {
                    setFormError('common.error.phoneNumber');
                } else {
                    setFormError('loginForm.error.invalidFormatEmailLogin');
                }
                return false;
            }

            setFormError(undefined);
            return true;
        },
        [setFormError],
    );

    /**
     * Handle text input and validate the text input if it is blurred
     */
    const onTextInput = useCallback(
        (text: string) => {
            setLogin(text);
            if (firstBlurred.current) {
                validate(text);
            }

            if (!!account?.errors || !!account?.message) {
                clearAccountMessages();
            }

            // Clear the "Account successfully closed" message when the user starts typing
            if (closeAccount?.success && !isInputAutoFilled(input.current)) {
                setDefaultData();
            }
        },
        [account, closeAccount, input, setLogin, validate],
    );

    function getSignInWithStyles() {
        return shouldUseNarrowLayout ? [styles.mt1] : [styles.mt5, styles.mb5];
    }

    /**
     * Check that all the form fields are valid, then trigger the submit callback
     */
    const validateAndSubmitForm = useCallback(() => {
        if (!!isOffline || !!account?.isLoading || isLoading.current) {
            return;
        }
        isLoading.current = true;

        // If account was closed and have success message in Onyx, we clear it here
        if (closeAccount?.success) {
            setDefaultData();
        }

        // For native, the single input doesn't lost focus when we click outside.
        // So we need to change firstBlurred here to make the validate function is called whenever the text input is changed after the first validation.
        if (!firstBlurred.current) {
            firstBlurred.current = true;
        }

        if (!validate(login)) {
            isLoading.current = false;
            return;
        }

        const loginTrim = StringUtils.removeInvisibleCharacters(login.trim());

        const phoneLogin = appendCountryCode(getPhoneNumberWithoutSpecialChars(loginTrim));
        const parsedPhoneNumber = parsePhoneNumber(phoneLogin);

        // Check if this login has an account associated with it or not
        beginSignIn(parsedPhoneNumber.possible && parsedPhoneNumber.number?.e164 ? parsedPhoneNumber.number.e164 : loginTrim);
    }, [login, account, closeAccount, isOffline, validate]);

    useEffect(() => {
        // Call clearAccountMessages on the login page (home route).
        // When the user is in the transition route and not yet authenticated, this component will also be mounted,
        // resetting account.isLoading will cause the app to briefly display the session expiration page.

        if (isFocused && isVisible) {
            clearAccountMessages();
        }
        if (!canFocusInputOnScreenFocus() || !input.current || !isVisible || !isFocused) {
            return;
        }
        let focusTimeout: NodeJS.Timeout;
        if (isInNarrowPaneModal) {
            focusTimeout = setTimeout(() => input.current?.focus(), CONST.ANIMATED_TRANSITION);
        } else {
            input.current.focus();
        }
        return () => clearTimeout(focusTimeout);
        // eslint-disable-next-line react-compiler/react-compiler, react-hooks/exhaustive-deps -- we just want to call this function when component is mounted
    }, []);

    useEffect(() => {
        if (account?.isLoading !== false) {
            return;
        }
        isLoading.current = false;
    }, [account?.isLoading]);

    useEffect(() => {
        if (blurOnSubmit) {
            input.current?.blur();
        }

        // Only focus the input if the form becomes visible again, to prevent the keyboard from automatically opening on touchscreen devices after signing out
        if (!input.current || prevIsVisible || !isVisible) {
            return;
        }
        input.current?.focus();
    }, [blurOnSubmit, isVisible, prevIsVisible]);

    useImperativeHandle(ref, () => ({
        isInputFocused() {
            if (!input.current) {
                return false;
            }
            return !!isTextInputFocused(input);
        },
        clearDataAndFocus(clearLogin = true) {
            if (!input.current) {
                return;
            }
            if (clearLogin) {
                clearSignInData();
            }
            input.current.focus();
        },
    }));

    const serverErrorText = useMemo(() => (account ? getLatestErrorMessage(account) : ''), [account]);
    const shouldShowServerError = !!serverErrorText && !formError;
    const isSigningWithAppleOrGoogle = useRef(false);
    const setIsSigningWithAppleOrGoogle = useCallback((isPressed: boolean) => (isSigningWithAppleOrGoogle.current = isPressed), []);

    const submitContainerRef = useRef<View | HTMLDivElement>(null);
    const handleFocus = useCallback(() => {
        if (!isMobileWebKit()) {
            return;
        }
        // On mobile WebKit browsers, when an input field gains focus, the keyboard appears and the virtual viewport is resized and scrolled to make the input field visible.
        // This occurs even when there is enough space to display both the input field and the submit button in the current view.
        // so this change to correct the scroll position when the input field gains focus.
        InteractionManager.runAfterInteractions(() => {
            htmlDivElementRef(submitContainerRef).current?.scrollIntoView?.({behavior: 'smooth', block: 'end'});
        });
    }, []);

    const handleSignIn = () => setIsSigningWithAppleOrGoogle(true);

    return (
        <>
            <View
                accessibilityLabel={translate('loginForm.loginForm')}
                style={[styles.mt3]}
            >
                <TextInput
                    ref={input}
                    label={translate('loginForm.phoneOrEmail')}
                    accessibilityLabel={translate('loginForm.phoneOrEmail')}
                    value={login}
                    returnKeyType="go"
                    autoCompleteType="username"
                    textContentType="username"
                    id="username"
                    name="username"
                    testID="username"
                    onBlur={
                        // As we have only two signin buttons (Apple/Google) other than the text input,
                        // for natives onBlur is called only when the buttons are pressed and we don't need
                        // to validate in those case as the user has opted for other signin flow.
                        () =>
                            setTimeout(() => {
                                if (isSigningWithAppleOrGoogle.current || firstBlurred.current || !Visibility.isVisible() || !Visibility.hasFocus()) {
                                    setIsSigningWithAppleOrGoogle(false);
                                    return;
                                }
                                firstBlurred.current = true;
                                validate(login);
                            }, 500)
                    }
                    onFocus={handleFocus}
                    onChangeText={onTextInput}
                    onSubmitEditing={validateAndSubmitForm}
                    autoCapitalize="none"
                    autoCorrect={false}
                    inputMode={CONST.INPUT_MODE.EMAIL}
                    errorText={formError ? translate(formError) : undefined}
                    hasError={shouldShowServerError}
                    maxLength={CONST.LOGIN_CHARACTER_LIMIT}
                />
            </View>
            {!!account?.success && <Text style={[styles.formSuccess]}>{account.success}</Text>}
            {(!!closeAccount?.success || !!account?.message) && (
                <DotIndicatorMessage
                    style={[styles.mv2]}
                    type="success"
                    // eslint-disable-next-line @typescript-eslint/naming-convention,@typescript-eslint/prefer-nullish-coalescing
                    messages={{0: closeAccount?.success ? closeAccount.success : accountMessage}}
                />
            )}
            {
                // We need to unmount the submit button when the component is not visible so that the Enter button
                // key handler gets unsubscribed
                isVisible && (
                    <View
                        style={[shouldShowServerError ? {} : styles.mt5]}
                        ref={viewRef(submitContainerRef)}
                    >
                        <FormAlertWithSubmitButton
                            buttonText={translate('common.continue')}
                            isLoading={account?.isLoading && account?.loadingForm === CONST.FORMS.LOGIN_FORM}
                            onSubmit={validateAndSubmitForm}
                            message={serverErrorText}
                            isAlertVisible={shouldShowServerError}
                            buttonStyles={[shouldShowServerError ? styles.mt3 : {}]}
                            containerStyles={[styles.mh0]}
                        />
                        {
                            // This feature has a few behavioral differences in development mode. To prevent confusion
                            // for developers about possible regressions, we won't render buttons in development mode.
                            // For more information about these differences and how to test in development mode,
                            // see`Expensify/App/contributingGuides/APPLE_GOOGLE_SIGNIN.md`
                            CONFIG.ENVIRONMENT !== CONST.ENVIRONMENT.DEV && (
                                <View style={[getSignInWithStyles()]}>
                                    <Text
                                        accessibilityElementsHidden
                                        importantForAccessibility="no-hide-descendants"
                                        style={[styles.textLabelSupporting, styles.textAlignCenter, styles.mb3, styles.mt2]}
                                    >
                                        {translate('common.signInWith')}
                                    </Text>

                                    <View style={shouldUseNarrowLayout ? styles.loginButtonRowSmallScreen : styles.loginButtonRow}>
                                        <View>
                                            <AppleSignIn
                                                onPress={handleSignIn}
                                                onPointerDown={handleSignIn}
                                            />
                                        </View>
                                        <View>
                                            <GoogleSignIn
                                                onPress={handleSignIn}
                                                onPointerDown={handleSignIn}
                                            />
                                        </View>
                                    </View>
                                </View>
                            )
                        }
                    </View>
                )
            }
        </>
    );
}

BaseLoginForm.displayName = 'BaseLoginForm';

export default withToggleVisibilityView(forwardRef(BaseLoginForm));
