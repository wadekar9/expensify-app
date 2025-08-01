import {CONST as COMMON_CONST} from 'expensify-common';
import type {OnboardingCompanySize, OnboardingTask} from '@libs/actions/Welcome/OnboardingFlow';
import CONST from '@src/CONST';
import type OriginalMessage from '@src/types/onyx/OriginalMessage';
import type en from './en';
import type {
    AccountOwnerParams,
    ActionsAreCurrentlyRestricted,
    AddedOrDeletedPolicyReportFieldParams,
    AddedPolicyApprovalRuleParams,
    AddEmployeeParams,
    AddOrDeletePolicyCustomUnitRateParams,
    AddressLineParams,
    AdminCanceledRequestParams,
    AirlineParams,
    AlreadySignedInParams,
    ApprovalWorkflowErrorParams,
    ApprovedAmountParams,
    AssignCardParams,
    AssignedCardParams,
    AssigneeParams,
    AuthenticationErrorParams,
    AutoPayApprovedReportsLimitErrorParams,
    BadgeFreeTrialParams,
    BankAccountLastFourParams,
    BeginningOfChatHistoryAdminRoomPartOneParams,
    BeginningOfChatHistoryAnnounceRoomPartOneParams,
    BeginningOfChatHistoryDomainRoomPartOneParams,
    BillingBannerCardAuthenticationRequiredParams,
    BillingBannerCardExpiredParams,
    BillingBannerCardOnDisputeParams,
    BillingBannerDisputePendingParams,
    BillingBannerInsufficientFundsParams,
    BillingBannerOwnerAmountOwedOverdueParams,
    BillingBannerSubtitleWithDateParams,
    BusinessBankAccountParams,
    BusinessTaxIDParams,
    CanceledRequestParams,
    CardEndingParams,
    CardInfoParams,
    CardNextPaymentParams,
    CategoryNameParams,
    ChangeFieldParams,
    ChangeOwnerDuplicateSubscriptionParams,
    ChangeOwnerHasFailedSettlementsParams,
    ChangeOwnerSubscriptionParams,
    ChangeReportPolicyParams,
    ChangeTypeParams,
    CharacterLengthLimitParams,
    CharacterLimitParams,
    ChatWithAccountManagerParams,
    CompanyCardBankName,
    CompanyCardFeedNameParams,
    CompanyNameParams,
    ConfirmThatParams,
    ConnectionNameParams,
    ConnectionParams,
    ContactMethodParams,
    ContactMethodsRouteParams,
    CreateExpensesParams,
    CurrencyCodeParams,
    CurrencyInputDisabledTextParams,
    CustomersOrJobsLabelParams,
    CustomUnitRateParams,
    DateParams,
    DateShouldBeAfterParams,
    DateShouldBeBeforeParams,
    DefaultAmountParams,
    DefaultVendorDescriptionParams,
    DelegateRoleParams,
    DelegateSubmitParams,
    DelegatorParams,
    DeleteActionParams,
    DeleteConfirmationParams,
    DeleteTransactionParams,
    DemotedFromWorkspaceParams,
    DidSplitAmountMessageParams,
    DuplicateTransactionParams,
    EarlyDiscountSubtitleParams,
    EarlyDiscountTitleParams,
    EditActionParams,
    EditDestinationSubtitleParams,
    ElectronicFundsParams,
    EmployeeInviteMessageParams,
    EnterMagicCodeParams,
    ExportAgainModalDescriptionParams,
    ExportedToIntegrationParams,
    ExportIntegrationSelectedParams,
    FeatureNameParams,
    FileLimitParams,
    FileTypeParams,
    FiltersAmountBetweenParams,
    FlightLayoverParams,
    FlightParams,
    FormattedMaxLengthParams,
    GoBackMessageParams,
    ImportedTagsMessageParams,
    ImportedTypesParams,
    ImportFieldParams,
    ImportMembersSuccessfulDescriptionParams,
    ImportPerDiemRatesSuccessfulDescriptionParams,
    ImportTagsSuccessfulDescriptionParams,
    IncorrectZipFormatParams,
    InstantSummaryParams,
    IntacctMappingTitleParams,
    IntegrationExportParams,
    IntegrationSyncFailedParams,
    InvalidPropertyParams,
    InvalidValueParams,
    IssueVirtualCardParams,
    LastSyncAccountingParams,
    LastSyncDateParams,
    LeftWorkspaceParams,
    LocalTimeParams,
    LoggedInAsParams,
    LogSizeParams,
    ManagerApprovedAmountParams,
    ManagerApprovedParams,
    MarkedReimbursedParams,
    MarkReimbursedFromIntegrationParams,
    MissingPropertyParams,
    MovedFromPersonalSpaceParams,
    MovedFromReportParams,
    MovedTransactionParams,
    NeedCategoryForExportToIntegrationParams,
    NewWorkspaceNameParams,
    NoLongerHaveAccessParams,
    NotAllowedExtensionParams,
    NotYouParams,
    OOOEventSummaryFullDayParams,
    OOOEventSummaryPartialDayParams,
    OptionalParam,
    OurEmailProviderParams,
    OwnerOwesAmountParams,
    PaidElsewhereParams,
    PaidWithExpensifyParams,
    ParentNavigationSummaryParams,
    PayerOwesAmountParams,
    PayerOwesParams,
    PayerPaidAmountParams,
    PayerPaidParams,
    PayerSettledParams,
    PaySomeoneParams,
    PolicyAddedReportFieldOptionParams,
    PolicyDisabledReportFieldAllOptionsParams,
    PolicyDisabledReportFieldOptionParams,
    PolicyExpenseChatNameParams,
    RailTicketParams,
    ReconciliationWorksParams,
    RemovedFromApprovalWorkflowParams,
    RemovedTheRequestParams,
    RemoveMemberPromptParams,
    RemoveMembersWarningPrompt,
    RenamedRoomActionParams,
    RenamedWorkspaceNameActionParams,
    ReportArchiveReasonsClosedParams,
    ReportArchiveReasonsInvoiceReceiverPolicyDeletedParams,
    ReportArchiveReasonsMergedParams,
    ReportArchiveReasonsRemovedFromPolicyParams,
    ReportPolicyNameParams,
    RequestAmountParams,
    RequestCountParams,
    RequestedAmountMessageParams,
    RequiredFieldParams,
    ResolutionConstraintsParams,
    ReviewParams,
    RoleNamesParams,
    RoomNameReservedErrorParams,
    RoomRenamedToParams,
    SecondaryLoginParams,
    SetTheDistanceMerchantParams,
    SetTheRequestParams,
    SettledAfterAddedBankAccountParams,
    SettleExpensifyCardParams,
    SettlementDateParams,
    ShareParams,
    SignUpNewFaceCodeParams,
    SizeExceededParams,
    SplitAmountParams,
    SplitExpenseEditTitleParams,
    SplitExpenseSubtitleParams,
    SpreadCategoriesParams,
    SpreadFieldNameParams,
    SpreadSheetColumnParams,
    StatementTitleParams,
    StepCounterParams,
    StripePaidParams,
    SubmitsToParams,
    SubmittedToVacationDelegateParams,
    SubscriptionCommitmentParams,
    SubscriptionSettingsRenewsOnParams,
    SubscriptionSettingsSaveUpToParams,
    SubscriptionSettingsSummaryParams,
    SubscriptionSizeParams,
    SyncStageNameConnectionsParams,
    TaskCreatedActionParams,
    TaxAmountParams,
    TermsParams,
    ThreadRequestReportNameParams,
    ThreadSentMoneyReportNameParams,
    TotalAmountGreaterOrLessThanOriginalParams,
    ToValidateLoginParams,
    TransferParams,
    TravelTypeParams,
    TrialStartedTitleParams,
    UnapproveWithIntegrationWarningParams,
    UnshareParams,
    UntilTimeParams,
    UpdatedCustomFieldParams,
    UpdatedPolicyApprovalRuleParams,
    UpdatedPolicyAuditRateParams,
    UpdatedPolicyCategoryDescriptionHintTypeParams,
    UpdatedPolicyCategoryExpenseLimitTypeParams,
    UpdatedPolicyCategoryGLCodeParams,
    UpdatedPolicyCategoryMaxAmountNoReceiptParams,
    UpdatedPolicyCategoryMaxExpenseAmountParams,
    UpdatedPolicyCategoryNameParams,
    UpdatedPolicyCategoryParams,
    UpdatedPolicyCurrencyParams,
    UpdatedPolicyCustomUnitRateParams,
    UpdatedPolicyCustomUnitTaxClaimablePercentageParams,
    UpdatedPolicyCustomUnitTaxRateExternalIDParams,
    UpdatedPolicyDescriptionParams,
    UpdatedPolicyFieldWithNewAndOldValueParams,
    UpdatedPolicyFieldWithValueParam,
    UpdatedPolicyFrequencyParams,
    UpdatedPolicyManualApprovalThresholdParams,
    UpdatedPolicyPreventSelfApprovalParams,
    UpdatedPolicyReportFieldDefaultValueParams,
    UpdatedPolicyTagFieldParams,
    UpdatedPolicyTagNameParams,
    UpdatedPolicyTagParams,
    UpdatedTheDistanceMerchantParams,
    UpdatedTheRequestParams,
    UpdatePolicyCustomUnitParams,
    UpdatePolicyCustomUnitTaxEnabledParams,
    UpdateRoleParams,
    UsePlusButtonParams,
    UserIsAlreadyMemberParams,
    UserSplitParams,
    VacationDelegateParams,
    ViolationsAutoReportedRejectedExpenseParams,
    ViolationsCashExpenseWithNoReceiptParams,
    ViolationsConversionSurchargeParams,
    ViolationsCustomRulesParams,
    ViolationsInvoiceMarkupParams,
    ViolationsMaxAgeParams,
    ViolationsMissingTagParams,
    ViolationsModifiedAmountParams,
    ViolationsOverAutoApprovalLimitParams,
    ViolationsOverCategoryLimitParams,
    ViolationsOverLimitParams,
    ViolationsPerDayLimitParams,
    ViolationsProhibitedExpenseParams,
    ViolationsReceiptRequiredParams,
    ViolationsRterParams,
    ViolationsTagOutOfPolicyParams,
    ViolationsTaxOutOfPolicyParams,
    WaitingOnBankAccountParams,
    WalletProgramParams,
    WelcomeEnterMagicCodeParams,
    WelcomeToRoomParams,
    WeSentYouMagicSignInLinkParams,
    WorkEmailMergingBlockedParams,
    WorkEmailResendCodeParams,
    WorkspaceLockedPlanTypeParams,
    WorkspaceMemberList,
    WorkspaceOwnerWillNeedToAddOrUpdatePaymentCardParams,
    WorkspaceRouteParams,
    WorkspaceYouMayJoin,
    YourPlanPriceParams,
    YourPlanPriceValueParams,
    ZipCodeExampleFormatParams,
} from './params';
import type {TranslationDeepObject} from './types';

/* eslint-disable max-len */
const translations = {
    common: {
        count: 'Contar',
        cancel: 'Cancelar',
        dismiss: 'Descartar',
        yes: 'Sí',
        no: 'No',
        ok: 'OK',
        notNow: 'Ahora no',
        learnMore: 'Más información.',
        buttonConfirm: 'Ok, entendido',
        name: 'Nombre',
        attachment: 'Archivo adjunto',
        attachments: 'Archivos adjuntos',
        from: 'De',
        to: 'A',
        in: 'En',
        optional: 'Opcional',
        new: 'Nuevo',
        center: 'Centrar',
        search: 'Buscar',
        reports: 'Informes',
        find: 'Encontrar',
        searchWithThreeDots: 'Buscar...',
        select: 'Seleccionar',
        deselect: 'Deseleccionar',
        selectMultiple: 'Seleccionar varios',
        next: 'Siguiente',
        create: 'Crear',
        previous: 'Anterior',
        goBack: 'Volver',
        add: 'Añadir',
        resend: 'Reenviar',
        save: 'Guardar',
        saveChanges: 'Guardar cambios',
        submit: 'Enviar',
        rotate: 'Rotar',
        zoom: 'Zoom',
        password: 'Contraseña',
        magicCode: 'Código mágico',
        twoFactorCode: 'Autenticación de dos factores',
        workspaces: 'Espacios de trabajo',
        inbox: 'Recibidos',
        group: 'Grupo',
        profile: 'Perfil',
        referral: 'Remisión',
        payments: 'Pagos',
        approvals: 'Aprobaciones',
        wallet: 'Billetera',
        preferences: 'Preferencias',
        view: 'Ver',
        review: (reviewParams?: ReviewParams) => `Revisar${reviewParams?.amount ? ` ${reviewParams?.amount}` : ''}`,
        not: 'No',
        privacyPolicy: 'la Política de Privacidad de Expensify',
        addCardTermsOfService: 'Términos de Servicio',
        perPerson: 'por persona',
        signIn: 'Conectarse',
        signInWithGoogle: 'Iniciar sesión con Google',
        signInWithApple: 'Iniciar sesión con Apple',
        signInWith: 'Iniciar sesión con',
        continue: 'Continuar',
        firstName: 'Nombre',
        lastName: 'Apellidos',
        scanning: 'Escaneando',
        phone: 'Teléfono',
        phoneNumber: 'Número de teléfono',
        phoneNumberPlaceholder: '(xxx) xxx-xxxx',
        email: 'Correo electrónico',
        and: 'y',
        or: 'o',
        details: 'Detalles',
        privacy: 'Privacidad',
        hidden: 'Oculto',
        visible: 'Visible',
        delete: 'Eliminar',
        archived: 'archivado',
        contacts: 'Contactos',
        recents: 'Recientes',
        close: 'Cerrar',
        download: 'Descargar',
        downloading: 'Descargando',
        uploading: 'Subiendo',
        pin: 'Fijar',
        unPin: 'Desfijar',
        back: 'Volver',
        saveAndContinue: 'Guardar y continuar',
        settings: 'Configuración',
        termsOfService: 'Términos de Servicio',
        members: 'Miembros',
        invite: 'Invitar',
        here: 'aquí',
        date: 'Fecha',
        dob: 'Fecha de nacimiento',
        currentYear: 'Año actual',
        currentMonth: 'Mes actual',
        ssnLast4: 'Últimos 4 dígitos de tu SSN',
        ssnFull9: 'Los 9 dígitos del SSN',
        addressLine: ({lineNumber}: AddressLineParams) => `Dirección línea ${lineNumber}`,
        personalAddress: 'Dirección física personal',
        companyAddress: 'Dirección física de la empresa',
        noPO: 'Nada de apartados de correos ni direcciones de envío, por favor.',
        city: 'Ciudad',
        state: 'Estado',
        streetAddress: 'Dirección',
        stateOrProvince: 'Estado / Provincia',
        country: 'País',
        zip: 'Código postal',
        zipPostCode: 'Código postal',
        whatThis: '¿Qué es esto?',
        iAcceptThe: 'Acepto los ',
        remove: 'Eliminar',
        admin: 'Administrador',
        owner: 'Dueño',
        dateFormat: 'AAAA-MM-DD',
        send: 'Enviar',
        na: 'N/A',
        noResultsFound: 'No se han encontrado resultados',
        noResultsFoundMatching: ({searchString}: {searchString: string}) => `No se encontraron resultados que coincidan con "${searchString}"`,
        recentDestinations: 'Destinos recientes',
        timePrefix: 'Son las',
        conjunctionFor: 'para',
        todayAt: 'Hoy a las',
        tomorrowAt: 'Mañana a las',
        yesterdayAt: 'Ayer a las',
        conjunctionAt: 'a',
        conjunctionTo: 'a',
        genericErrorMessage: 'Ups... algo no ha ido bien y la acción no se ha podido completar. Por favor, inténtalo más tarde.',
        percentage: 'Porcentaje',
        error: {
            invalidAmount: 'Importe no válido',
            acceptTerms: 'Debes aceptar los Términos de Servicio para continuar',
            phoneNumber: `Introduce un teléfono válido, incluyendo el código del país (p. ej. ${CONST.EXAMPLE_PHONE_NUMBER})`,
            fieldRequired: 'Este campo es obligatorio',
            requestModified: 'Esta solicitud está siendo modificada por otro miembro',
            characterLimitExceedCounter: ({length, limit}: CharacterLengthLimitParams) => `Se superó el límite de caracteres (${length}/${limit})`,
            dateInvalid: 'Por favor, selecciona una fecha válida',
            invalidDateShouldBeFuture: 'Por favor, elige una fecha igual o posterior a hoy',
            invalidTimeShouldBeFuture: 'Por favor, elige una hora al menos un minuto en el futuro',
            invalidCharacter: 'Carácter invalido',
            enterMerchant: 'Introduce un comerciante',
            enterAmount: 'Introduce un importe',
            enterDate: 'Introduce una fecha',
            missingMerchantName: 'Falta el nombre del comerciante',
            missingAmount: 'Falta el importe',
            missingDate: 'Falta la fecha',
            invalidTimeRange: 'Por favor, introduce una hora entre 1 y 12 (por ejemplo, 2:30 PM)',
            pleaseCompleteForm: 'Por favor complete el formulario de arriba para continuar',
            pleaseSelectOne: 'Seleccione una de las opciones',
            invalidRateError: 'Por favor, introduce una tarifa válida',
            lowRateError: 'La tarifa debe ser mayor que 0',
            email: 'Por favor, introduzca una dirección de correo electrónico válida',
            login: 'Se produjo un error al iniciar sesión. Por favor intente nuevamente.',
        },
        comma: 'la coma',
        semicolon: 'el punto y coma',
        please: 'Por favor',
        rename: 'Renombrar',
        skip: 'Saltarse',
        contactUs: 'contáctenos',
        pleaseEnterEmailOrPhoneNumber: 'Por favor, escribe un correo electrónico o número de teléfono',
        fixTheErrors: 'corrige los errores',
        inTheFormBeforeContinuing: 'en el formulario antes de continuar',
        confirm: 'Confirmar',
        reset: 'Restablecer',
        done: 'Listo',
        more: 'Más',
        debitCard: 'Tarjeta de débito',
        bankAccount: 'Cuenta bancaria',
        personalBankAccount: 'Cuenta bancaria personal',
        businessBankAccount: 'Cuenta bancaria comercial',
        join: 'Unirse',
        leave: 'Salir',
        decline: 'Rechazar',
        transferBalance: 'Transferencia de saldo',
        cantFindAddress: '¿No encuentras tu dirección? ',
        enterManually: 'Introducir manualmente',
        message: 'Chatear con ',
        leaveThread: 'Salir del hilo',
        you: 'Tú',
        youAfterPreposition: 'ti',
        your: 'tu',
        conciergeHelp: 'Por favor, contacta con Concierge para obtener ayuda.',
        youAppearToBeOffline: 'Parece que estás desconectado.',
        thisFeatureRequiresInternet: 'Esta función requiere una conexión a Internet activa.',
        attachmentWillBeAvailableOnceBackOnline: 'El archivo adjunto estará disponible cuando vuelvas a estar en línea.',
        errorOccurredWhileTryingToPlayVideo: 'Se produjo un error al intentar reproducir este video.',
        areYouSure: '¿Estás seguro?',
        verify: 'Verifique',
        yesContinue: 'Sí, continuar',
        websiteExample: 'p. ej. https://www.expensify.com',
        zipCodeExampleFormat: ({zipSampleFormat}: ZipCodeExampleFormatParams) => (zipSampleFormat ? `p. ej. ${zipSampleFormat}` : ''),
        description: 'Descripción',
        title: 'Título',
        assignee: 'Asignado a',
        createdBy: 'Creado por',
        with: 'con',
        shareCode: 'Compartir código',
        share: 'Compartir',
        per: 'por',
        mi: 'milla',
        km: 'kilómetro',
        copied: '¡Copiado!',
        someone: 'Alguien',
        total: 'Total',
        edit: 'Editar',
        letsDoThis: '¡Hagámoslo!',
        letsStart: 'Empecemos',
        showMore: 'Mostrar más',
        merchant: 'Comerciante',
        category: 'Categoría',
        report: 'Informe',
        billable: 'Facturable',
        nonBillable: 'No facturable',
        tag: 'Etiqueta',
        receipt: 'Recibo',
        verified: 'Verificado',
        replace: 'Sustituir',
        distance: 'Distancia',
        mile: 'milla',
        miles: 'millas',
        kilometer: 'kilómetro',
        kilometers: 'kilómetros',
        recent: 'Reciente',
        all: 'Todo',
        am: 'AM',
        pm: 'PM',
        tbd: 'Por determinar',
        selectCurrency: 'Selecciona una moneda',
        card: 'Tarjeta',
        whyDoWeAskForThis: '¿Por qué pedimos esto?',
        required: 'Obligatorio',
        showing: 'Mostrando',
        of: 'de',
        default: 'Predeterminado',
        update: 'Actualizar',
        member: 'Miembro',
        success: 'Éxito',
        auditor: 'Auditor',
        role: 'Role',
        currency: 'Divisa',
        rate: 'Tarifa',
        emptyLHN: {
            title: 'Woohoo! Todo al día.',
            subtitleText1: 'Encuentra un chat usando el botón',
            subtitleText2: 'o crea algo usando el botón',
            subtitleText3: '.',
        },
        businessName: 'Nombre de la empresa',
        clear: 'Borrar',
        type: 'Tipo',
        action: 'Acción',
        expenses: 'Gastos',
        tax: 'Impuesto',
        shared: 'Compartidos',
        drafts: 'Borradores',
        finished: 'Finalizados',
        upgrade: 'Mejora',
        downgradeWorkspace: 'Desmejora tu espacio de trabajo',
        companyID: 'Empresa ID',
        userID: 'Usuario ID',
        disable: 'Deshabilitar',
        export: 'Exportar',
        initialValue: 'Valor inicial',
        currentDate: 'Fecha actual',
        value: 'Valor',
        downloadFailedTitle: 'Error en la descarga',
        downloadFailedDescription: 'No se pudo completar la descarga. Por favor, inténtalo más tarde.',
        filterLogs: 'Registros de filtrado',
        network: 'La red',
        reportID: 'ID del informe',
        longID: 'ID largo',
        bankAccounts: 'Cuentas bancarias',
        chooseFile: 'Elegir archivo',
        chooseFiles: 'Elegir archivos',
        dropTitle: 'Suéltalo',
        dropMessage: 'Suelta tu archivo aquí',
        enabled: 'Habilitado',
        disabled: 'Desactivada',
        ignore: 'Ignorar',
        import: 'Importar',
        offlinePrompt: 'No puedes realizar esta acción ahora mismo.',
        outstanding: 'Pendiente',
        chats: 'Chats',
        tasks: 'Tareas',
        unread: 'No leído',
        sent: 'Enviado',
        links: 'Enlaces',
        days: 'días',
        address: 'Dirección',
        hourAbbreviation: 'h',
        minuteAbbreviation: 'm',
        chatWithAccountManager: ({accountManagerDisplayName}: ChatWithAccountManagerParams) => `¿Necesitas algo específico? Habla con tu gerente de cuenta, ${accountManagerDisplayName}.`,
        chatNow: 'Chatear ahora',
        workEmail: 'correo electrónico de trabajo',
        destination: 'Destino',
        subrate: 'Subtasa',
        perDiem: 'Per diem',
        validate: 'Validar',
        downloadAsPDF: 'Descargar como PDF',
        downloadAsCSV: 'Descargar como CSV',
        help: 'Ayuda',
        expenseReports: 'Informes de Gastos',
        rateOutOfPolicy: 'Tasa fuera de póliza',
        reimbursable: 'Reembolsable',
        editYourProfile: 'Edita tu perfil',
        comments: 'Comentarios',
        sharedIn: 'Compartido en',
        unreported: 'No reportado',
        explore: 'Explorar',
        todo: 'Tereas',
        invoice: 'Factura',
        expense: 'Gasto',
        chat: 'Chat',
        task: 'Tarea',
        trip: 'Viaje',
        apply: 'Aplicar',
        status: 'Estado',
        on: 'El',
        before: 'Antes',
        after: 'Después',
        reschedule: 'Reprogramar',
        general: 'General',
        workspacesTabTitle: 'Espacios',
        getTheApp: 'Descarga la app',
        scanReceiptsOnTheGo: 'Escanea recibos desde tu teléfono',
        headsUp: '¡Atención!',
    },
    supportalNoAccess: {
        title: 'No tan rápido',
        description: 'No estás autorizado para realizar esta acción mientras estás conectado como soporte.',
    },
    lockedAccount: {
        title: 'Cuenta Bloqueada',
        description: 'No puedes completar esta acción porque esta cuenta ha sido bloqueada. Para obtener más información, escribe a concierge@expensify.com.',
    },
    connectionComplete: {
        title: 'Conexión completa',
        supportingText: 'Ya puedes cerrar esta página y volver a la App de Expensify.',
    },
    location: {
        useCurrent: 'Usar ubicación actual',
        notFound: 'No pudimos encontrar tu ubicación. Inténtalo de nuevo o introduce una dirección manualmente.',
        permissionDenied: 'Parece que has denegado el permiso a tu ubicación.',
        please: 'Por favor,',
        allowPermission: 'habilita el permiso de ubicación en la configuración',
        tryAgain: 'e inténtalo de nuevo.',
    },
    contact: {
        importContacts: 'Importar contactos',
        importContactsTitle: 'Importa tus contactos',
        importContactsText: 'Importa contactos desde tu teléfono para que tus personas favoritas siempre estén a un toque de distancia.',
        importContactsExplanation: 'para que tus personas favoritas estén siempre a un toque de distancia.',
        importContactsNativeText: '¡Solo un paso más! Danos luz verde para importar tus contactos.',
    },
    anonymousReportFooter: {
        logoTagline: 'Únete a la discusión.',
    },
    attachmentPicker: {
        cameraPermissionRequired: 'Permiso para acceder a la cámara',
        expensifyDoesNotHaveAccessToCamera: 'Expensify no puede tomar fotos sin acceso a la cámara. Haz click en configuración para actualizar los permisos.',
        attachmentError: 'Error al adjuntar archivo',
        errorWhileSelectingAttachment: 'Se ha producido un error al seleccionar un archivo adjunto. Por favor, inténtalo de nuevo.',
        errorWhileSelectingCorruptedAttachment: 'Se ha producido un error al seleccionar un archivo adjunto corrupto. Por favor, inténtalo con otro archivo.',
        takePhoto: 'Hacer una foto',
        chooseFromGallery: 'Elegir de la galería',
        chooseDocument: 'Elegir un archivo',
        attachmentTooLarge: 'Archivo adjunto demasiado grande',
        sizeExceeded: 'El archivo adjunto supera el límite de 24 MB.',
        sizeExceededWithLimit: ({maxUploadSizeInMB}: SizeExceededParams) => `El archivo adjunto supera el límite de ${maxUploadSizeInMB} MB.`,
        attachmentTooSmall: 'Archivo adjunto demasiado pequeño',
        sizeNotMet: 'El archivo adjunto debe ser más grande que 240 bytes.',
        wrongFileType: 'Tipo de archivo inválido',
        notAllowedExtension: 'Este tipo de archivo no es compatible',
        folderNotAllowedMessage: 'Subir una carpeta no está permitido. Prueba con otro archivo.',
        protectedPDFNotSupported: 'Los PDFs con contraseña no son compatibles',
        attachmentImageResized: 'Se ha cambiado el tamaño de esta imagen para obtener una vista previa. Descargar para resolución completa.',
        attachmentImageTooLarge: 'Esta imagen es demasiado grande para obtener una vista previa antes de subirla.',
        tooManyFiles: ({fileLimit}: FileLimitParams) => `Solamente puedes suber ${fileLimit} archivos a la vez.`,
        sizeExceededWithValue: ({maxUploadSizeInMB}: SizeExceededParams) => `El archivo supera los ${maxUploadSizeInMB} MB. Por favor, vuelve a intentarlo.`,
        someFilesCantBeUploaded: 'Algunos archivos no se pueden subir',
        sizeLimitExceeded: ({maxUploadSizeInMB}: SizeExceededParams) => `Los archivos deben ser menores a ${maxUploadSizeInMB} MB. Los archivos más grandes no se subirán.`,
        maxFileLimitExceeded: 'Puedes subir hasta 30 recibos a la vez. Los extras no se subirán.',
        unsupportedFileType: ({fileType}: FileTypeParams) => `${fileType} archivos no son compatibles. Solo se subirán los archivos compatibles.`,
        learnMoreAboutSupportedFiles: 'Obtén más información sobre los formatos compatibles.',
        passwordProtected: 'Los PDFs con contraseña no son compatibles. Solo se subirán los archivos compatibles',
    },
    dropzone: {
        addAttachments: 'Añadir archivos adjuntos',
        addReceipt: 'Añadir recibo',
        scanReceipts: 'Escanear recibos',
        replaceReceipt: 'Reemplazar recibo',
    },
    filePicker: {
        fileError: 'Error de archivo',
        errorWhileSelectingFile: 'An error occurred while selecting an file. Please try again.',
    },
    avatarCropModal: {
        title: 'Editar foto',
        description: 'Arrastra, haz zoom y rota tu imagen para que quede como te gusta.',
    },
    composer: {
        noExtensionFoundForMimeType: 'No se encontró una extension para este tipo de contenido',
        problemGettingImageYouPasted: 'Ha ocurrido un problema al obtener la imagen que has pegado',
        commentExceededMaxLength: ({formattedMaxLength}: FormattedMaxLengthParams) => `El comentario debe tener máximo ${formattedMaxLength} caracteres.`,
        taskTitleExceededMaxLength: ({formattedMaxLength}: FormattedMaxLengthParams) => `La longitud máxima del título de una tarea es de ${formattedMaxLength} caracteres.`,
    },
    baseUpdateAppModal: {
        updateApp: 'Actualizar app',
        updatePrompt: 'Existe una nueva versión de esta aplicación.\nActualiza ahora or reinicia la aplicación más tarde para recibir la última versión.',
    },
    deeplinkWrapper: {
        launching: 'Cargando Expensify',
        expired: 'Tu sesión ha expirado.',
        signIn: 'Por favor, inicia sesión de nuevo.',
        redirectedToDesktopApp: 'Te hemos redirigido a la aplicación de escritorio.',
        youCanAlso: 'También puedes',
        openLinkInBrowser: 'abrir este enlace en tu navegador',
        loggedInAs: ({email}: LoggedInAsParams) =>
            `Has iniciado sesión como ${email}. Haz clic en "Abrir enlace" en el aviso para iniciar sesión en la aplicación de escritorio con esta cuenta.`,
        doNotSeePrompt: '¿No ves el aviso?',
        tryAgain: 'Inténtalo de nuevo',
        or: ', o',
        continueInWeb: 'continuar en la web',
    },
    validateCodeModal: {
        successfulSignInTitle: 'Abracadabra,\n¡sesión iniciada!',
        successfulSignInDescription: 'Vuelve a la pestaña original para continuar.',
        title: 'Aquí está tu código mágico',
        or: ', ¡o',
        doNotShare: '¡No compartas tu código con nadie.\nExpensify nunca te lo pedirá.',
        description: 'Por favor, introduce el código utilizando el dispositivo\nen el que se solicitó originalmente',
        signInHere: 'simplemente inicia sesión aquí',
        expiredCodeTitle: 'Código mágico caducado',
        expiredCodeDescription: 'Vuelve al dispositivo original y solicita un código nuevo',
        successfulNewCodeRequest: 'Código solicitado. Por favor, comprueba tu dispositivo.',
        tfaRequiredTitle: 'Se requiere autenticación\nde dos factores',
        tfaRequiredDescription: 'Por favor, introduce el código de autenticación de dos factores\ndonde estás intentando iniciar sesión.',
        requestOneHere: 'solicite uno aquí.',
    },
    moneyRequestConfirmationList: {
        paidBy: 'Pagado por',
        whatsItFor: '¿Para qué es?',
    },
    selectionList: {
        nameEmailOrPhoneNumber: 'Nombre, correo electrónico o número de teléfono',
        findMember: 'Encuentra un miembro',
        searchForSomeone: 'Busca a alguien',
    },
    emptyList: {
        [CONST.IOU.TYPE.CREATE]: {
            title: 'Presenta un gasto, recomienda a tu jefe',
            subtitleText: '¿Quieres que tu jefe también use Expensify? Simplemente envíale un gasto y nosotros nos encargaremos del resto.',
        },
    },
    videoChatButtonAndMenu: {
        tooltip: 'Programar una llamada',
    },
    hello: 'Hola',
    phoneCountryCode: '34',
    welcomeText: {
        getStarted: 'Comience a continuación.',
        anotherLoginPageIsOpen: 'Otra página de inicio de sesión está abierta.',
        anotherLoginPageIsOpenExplanation: 'Ha abierto la página de inicio de sesión en una pestaña separada. Inicie sesión desde esa pestaña específica.',
        welcome: '¡Bienvenido!',
        welcomeWithoutExclamation: 'Bienvenido',
        phrase2: 'El dinero habla. Y ahora que chat y pagos están en un mismo lugar, es también fácil.',
        phrase3: 'Tus pagos llegan tan rápido como tus mensajes.',
        enterPassword: 'Por favor, introduce tu contraseña',
        welcomeNewFace: ({login}: SignUpNewFaceCodeParams) => `${login}, siempre es genial ver una cara nueva por aquí!`,
        welcomeEnterMagicCode: ({login}: WelcomeEnterMagicCodeParams) => `Por favor, introduce el código mágico enviado a ${login}. Debería llegar en un par de minutos.`,
    },
    login: {
        hero: {
            header: 'Viajes y gastos, a la velocidad del chat',
            body: 'Bienvenido a la próxima generación de Expensify, donde tus viajes y gastos avanzan más rápido con la ayuda de un chat contextual en tiempo real.',
        },
    },
    thirdPartySignIn: {
        alreadySignedIn: ({email}: AlreadySignedInParams) => `Ya has iniciado sesión con ${email}.`,
        goBackMessage: ({provider}: GoBackMessageParams) => `No quieres iniciar sesión con ${provider}?`,
        continueWithMyCurrentSession: 'Continuar con mi sesión actual',
        redirectToDesktopMessage: 'Lo redirigiremos a la aplicación de escritorio una vez que termine de iniciar sesión.',
        signInAgreementMessage: 'Al iniciar sesión, aceptas las',
        termsOfService: 'Términos de servicio',
        privacy: 'Privacidad',
    },
    samlSignIn: {
        welcomeSAMLEnabled: 'Continua iniciando sesión con el inicio de sesión único:',
        orContinueWithMagicCode: 'También puedes iniciar sesión con un código mágico',
        useSingleSignOn: 'Usar el inicio de sesión único',
        useMagicCode: 'Usar código mágico',
        launching: 'Cargando...',
        oneMoment: 'Un momento mientras te redirigimos al portal de inicio de sesión único de tu empresa.',
    },
    reportActionCompose: {
        dropToUpload: 'Suelta el archivo aquí para compartirlo',
        sendAttachment: 'Enviar adjunto',
        addAttachment: 'Añadir archivo adjunto',
        writeSomething: 'Escribe algo...',
        blockedFromConcierge: 'Comunicación no permitida',
        fileUploadFailed: 'Subida fallida. El archivo no es compatible.',
        localTime: ({user, time}: LocalTimeParams) => `Son las ${time} para ${user}`,
        edited: '(editado)',
        emoji: 'Emoji',
        collapse: 'Colapsar',
        expand: 'Expandir',
    },
    reportActionContextMenu: {
        copyToClipboard: 'Copiar al portapapeles',
        copied: '¡Copiado!',
        copyLink: 'Copiar enlace',
        copyURLToClipboard: 'Copiar URL al portapapeles',
        copyEmailToClipboard: 'Copiar correo electrónico al portapapeles',
        markAsUnread: 'Marcar como no leído',
        markAsRead: 'Marcar como leído',
        editAction: ({action}: EditActionParams) => `Editar ${action?.actionName === CONST.REPORT.ACTIONS.TYPE.IOU ? 'gasto' : 'comentario'}`,
        deleteAction: ({action}: DeleteActionParams) => `Eliminar ${action?.actionName === CONST.REPORT.ACTIONS.TYPE.IOU ? 'gasto' : 'comentario'}`,
        deleteConfirmation: ({action}: DeleteConfirmationParams) =>
            `¿Estás seguro de que quieres eliminar este ${action?.actionName === CONST.REPORT.ACTIONS.TYPE.IOU ? 'gasto' : 'comentario'}?`,
        onlyVisible: 'Visible sólo para',
        replyInThread: 'Responder en el hilo',
        joinThread: 'Unirse al hilo',
        leaveThread: 'Dejar hilo',
        copyOnyxData: 'Copiar datos de Onyx',
        flagAsOffensive: 'Marcar como ofensivo',
        menu: 'Menú',
    },
    emojiReactions: {
        addReactionTooltip: 'Añadir una reacción',
        reactedWith: 'reaccionó con',
    },
    reportActionsView: {
        beginningOfArchivedRoomPartOne: 'Te perdiste la fiesta en ',
        beginningOfArchivedRoomPartTwo: ', no hay nada que ver aquí.',
        beginningOfChatHistoryDomainRoomPartOne: ({domainRoom}: BeginningOfChatHistoryDomainRoomPartOneParams) =>
            `Este chat es con todos los miembros de Expensify en el dominio ${domainRoom}.`,
        beginningOfChatHistoryDomainRoomPartTwo: ' Úsalo para chatear con colegas, compartir consejos y hacer preguntas.',
        beginningOfChatHistoryAdminRoomPartOneFirst: 'Este chat es con los administradores del espacio de trabajo',
        beginningOfChatHistoryAdminRoomWorkspaceName: ({workspaceName}: BeginningOfChatHistoryAdminRoomPartOneParams) => ` ${workspaceName}`,
        beginningOfChatHistoryAdminRoomPartOneLast: '.',
        beginningOfChatHistoryAdminRoomPartTwo: ' Úsalo para hablar sobre la configuración del espacio de trabajo y más.',
        beginningOfChatHistoryAnnounceRoomPartOne: ({workspaceName}: BeginningOfChatHistoryAnnounceRoomPartOneParams) => `Este chat es con todos en ${workspaceName}.`,
        beginningOfChatHistoryAnnounceRoomPartTwo: ` Úsalo para hablar sobre la configuración del espacio de trabajo y más.`,
        beginningOfChatHistoryUserRoomPartOne: 'ste chat es para todo lo relacionado con ',
        beginningOfChatHistoryUserRoomPartTwo: ' Fue creado por.',
        beginningOfChatHistoryInvoiceRoomPartOne: `Este chat es para facturas entre `,
        beginningOfChatHistoryInvoiceRoomPartTwo: `. Usa el botón + para enviar una factura.`,
        beginningOfChatHistory: 'Este chat es con ',
        beginningOfChatHistoryPolicyExpenseChatPartOne: 'Aquí es donde ',
        beginningOfChatHistoryPolicyExpenseChatPartTwo: ' enviará los gastos al espacio de trabajo ',
        beginningOfChatHistoryPolicyExpenseChatPartThree: '. Solo usa el botón +.',
        beginningOfChatHistorySelfDM: 'Este es tu espacio personal. Úsalo para notas, tareas, borradores y recordatorios.',
        beginningOfChatHistorySystemDM: '¡Bienvenido! Vamos a configurar tu cuenta.',
        chatWithAccountManager: 'Chatea con tu gestor de cuenta aquí',
        sayHello: '¡Saluda!',
        yourSpace: 'Tu espacio',
        welcomeToRoom: ({roomName}: WelcomeToRoomParams) => `¡Bienvenido a ${roomName}!`,
        usePlusButton: ({additionalText}: UsePlusButtonParams) => ` Usa el botón + para ${additionalText} un gasto`,
        askConcierge: ' Haz preguntas y obtén soporte en tiempo real las 24/7.',
        conciergeSupport: 'Soporte 24/7',
        create: 'crear',
        iouTypes: {
            pay: 'pagar',
            split: 'dividir',
            submit: 'presentar',
            track: 'rastrear',
            invoice: 'facturar',
        },
    },
    adminOnlyCanPost: 'Solo los administradores pueden enviar mensajes en esta sala.',
    reportAction: {
        asCopilot: 'como copiloto de',
    },
    mentionSuggestions: {
        hereAlternateText: 'Notificar a todos en esta conversación',
    },
    newMessages: 'Mensajes nuevos',
    youHaveBeenBanned: 'Nota: Se te ha prohibido comunicarte en este canal',
    reportTypingIndicator: {
        isTyping: 'está escribiendo...',
        areTyping: 'están escribiendo...',
        multipleMembers: 'Varios miembros',
    },
    reportArchiveReasons: {
        [CONST.REPORT.ARCHIVE_REASON.DEFAULT]: 'Esta sala de chat ha sido eliminada.',
        [CONST.REPORT.ARCHIVE_REASON.ACCOUNT_CLOSED]: ({displayName}: ReportArchiveReasonsClosedParams) => `Este chat está desactivado porque ${displayName} ha cerrado tu cuenta.`,
        [CONST.REPORT.ARCHIVE_REASON.ACCOUNT_MERGED]: ({displayName, oldDisplayName}: ReportArchiveReasonsMergedParams) =>
            `Este chat está desactivado porque ${oldDisplayName} ha combinado tu cuenta con ${displayName}`,
        [CONST.REPORT.ARCHIVE_REASON.REMOVED_FROM_POLICY]: ({displayName, policyName, shouldUseYou = false}: ReportArchiveReasonsRemovedFromPolicyParams) =>
            shouldUseYou
                ? `Este chat ya no está activo porque <strong>tu</strong> ya no eres miembro del espacio de trabajo ${policyName}.`
                : `Este chat está desactivado porque ${displayName} ha dejado de ser miembro del espacio de trabajo ${policyName}.`,
        [CONST.REPORT.ARCHIVE_REASON.POLICY_DELETED]: ({policyName}: ReportArchiveReasonsInvoiceReceiverPolicyDeletedParams) =>
            `Este chat está desactivado porque el espacio de trabajo ${policyName} se ha eliminado.`,
        [CONST.REPORT.ARCHIVE_REASON.INVOICE_RECEIVER_POLICY_DELETED]: ({policyName}: ReportArchiveReasonsInvoiceReceiverPolicyDeletedParams) =>
            `Este chat está desactivado porque el espacio de trabajo ${policyName} se ha eliminado.`,
        [CONST.REPORT.ARCHIVE_REASON.BOOKING_END_DATE_HAS_PASSED]: 'Esta reserva está archivada.',
    },
    writeCapabilityPage: {
        label: 'Quién puede postear',
        writeCapability: {
            all: 'Todos los miembros',
            admins: 'Solo administradores',
        },
    },
    sidebarScreen: {
        buttonFind: 'Encuentre algo...',
        buttonMySettings: 'Mi configuración',
        fabNewChat: 'Iniciar chat',
        fabNewChatExplained: 'Iniciar chat (Acción flotante)',
        chatPinned: 'Chat fijado',
        draftedMessage: 'Mensaje borrador',
        listOfChatMessages: 'Lista de mensajes del chat',
        listOfChats: 'lista de chats',
        saveTheWorld: 'Salvar el mundo',
        tooltip: '¡Comienza aquí!',
        redirectToExpensifyClassicModal: {
            title: 'Próximamente',
            description: 'Estamos ajustando algunos detalles de New Expensify para adaptarla a tu configuración específica. Mientras tanto, dirígete a Expensify Classic.',
        },
    },
    allSettingsScreen: {
        subscription: 'Suscripcion',
        domains: 'Dominios',
    },
    tabSelector: {
        chat: 'Chat',
        room: 'Sala',
        distance: 'Distancia',
        manual: 'Manual',
        scan: 'Escanear',
    },
    spreadsheet: {
        upload: 'Importar',
        import: 'Importar hoja de cálculo',
        dragAndDrop: 'Arrastra y suelta un archivo de hoja de cálculo aquí',
        dragAndDropMultiLevelTag: `<muted-link>Arrastra y suelta un archivo de hoja de cálculo aquí, o elige un archivo a continuación. <a href="${CONST.IMPORT_SPREADSHEET.MULTI_LEVEL_TAGS_ARTICLE_LINK}">Aprende más</a> sobre los formatos de archivo soportados.</muted-link>`,
        chooseSpreadsheet: 'Elige un archivo de hoja de cálculo para importar. Los formatos soportados son .csv, .txt, .xls y .xlsx.',
        chooseSpreadsheetMultiLevelTag: `<muted-link>Elige un archivo de hoja de cálculo para importar. <a href="${CONST.IMPORT_SPREADSHEET.MULTI_LEVEL_TAGS_ARTICLE_LINK}">Aprende más</a> sobre los formatos de archivo soportados.</muted-link>`,
        fileContainsHeader: 'El archivo contiene encabezados',
        column: ({name}: SpreadSheetColumnParams) => `Columna ${name}`,
        fieldNotMapped: ({fieldName}: SpreadFieldNameParams) => `¡Vaya! Un campo obligatorio ("${fieldName}") no ha sido mapeado. Por favor, revisa e inténtalo de nuevo.`,
        singleFieldMultipleColumns: ({fieldName}: SpreadFieldNameParams) => `¡Vaya! Has mapeado un solo campo ("${fieldName}") a varias columnas. Por favor, revisa e inténtalo de nuevo.`,
        emptyMappedField: ({fieldName}: SpreadFieldNameParams) => `¡Vaya! El campo ("${fieldName}") contiene uno o más valores vacíos. Por favor, revísalo e inténtalo de nuevo.`,
        importFailedTitle: 'Fallo en la importación',
        importFailedDescription: 'Por favor, asegúrate de que todos los campos estén llenos correctamente e inténtalo de nuevo. Si el problema persiste, por favor contacta a Concierge.',
        importCategoriesSuccessfulDescription: ({categories}: SpreadCategoriesParams) => (categories > 1 ? `Se han agregado ${categories} categorías.` : 'Se ha agregado 1 categoría.'),
        importMembersSuccessfulDescription: ({added, updated}: ImportMembersSuccessfulDescriptionParams) => {
            if (!added && !updated) {
                return 'No se han añadido ni actualizado miembros.';
            }

            if (added && updated) {
                const getPluralSuffix = (count: number) => (count > 1 ? 's' : '');
                return `${added} miembro${getPluralSuffix(added)} añadido${getPluralSuffix(added)}, ${updated} miembro${getPluralSuffix(updated)} actualizado${getPluralSuffix(updated)}.`;
            }

            if (updated) {
                return updated > 1 ? `${updated} miembros han sido actualizados.` : '1 miembro ha sido actualizado.';
            }

            return added > 1 ? `Se han agregado ${added} miembros` : 'Se ha agregado 1 miembro.';
        },
        importTagsSuccessfulDescription: ({tags}: ImportTagsSuccessfulDescriptionParams) => (tags > 1 ? `Se han agregado ${tags} etiquetas.` : 'Se ha agregado 1 etiqueta.'),
        importMultiLevelTagsSuccessfulDescription: 'Etiquetas de nivel múltiple han sido agregadas.',
        importPerDiemRatesSuccessfulDescription: ({rates}: ImportPerDiemRatesSuccessfulDescriptionParams) =>
            rates > 1 ? `Se han añadido ${rates} tasas de per diem.` : 'Se ha añadido 1 tasa de per diem.',
        importSuccessfulTitle: 'Importar categorías',
        importDescription: 'Elige qué campos mapear desde tu hoja de cálculo haciendo clic en el menú desplegable junto a cada columna importada a continuación.',
        sizeNotMet: 'El archivo adjunto debe ser más grande que 0 bytes.',
        invalidFileMessage:
            'El archivo que subiste está vacío o contiene datos no válidos. Asegúrate de que el archivo esté correctamente formateado y contenga la información necesaria antes de volver a subirlo.',
        importSpreadsheet: 'Importar hoja de cálculo',
        downloadCSV: 'Descargar CSV',
    },
    receipt: {
        upload: 'Subir recibo',
        uploadMultiple: 'Subir recibos',
        dragReceiptBeforeEmail: 'Arrastra un recibo a esta página, reenvíalo a ',
        dragReceiptsBeforeEmail: 'Arrastra recibos a esta página, reenvíalos a ',
        dragReceiptAfterEmail: ' o elije un archivo para subir a continuación.',
        dragReceiptsAfterEmail: ' o elije archivos para subir a continuación.',
        chooseReceipt: 'Elige un recibo para subir o reenvía un recibo a ',
        chooseReceipts: 'Elige recibos para subir o reenvía recibos a ',
        takePhoto: 'Haz una foto',
        cameraAccess: 'Se requiere acceso a la cámara para hacer fotos de los recibos.',
        deniedCameraAccess: 'No se ha concedido el acceso a la cámara, siga ',
        deniedCameraAccessInstructions: 'estas instrucciones',
        cameraErrorTitle: 'Error en la cámara',
        locationAccessTitle: 'Permitir acceso a la ubicación',
        locationAccessMessage: 'El acceso a la ubicación nos ayuda a mantener tu zona horaria y moneda precisas dondequiera que vayas.',
        locationErrorTitle: 'Permitir acceso a la ubicación',
        locationErrorMessage: 'El acceso a la ubicación nos ayuda a mantener tu zona horaria y moneda precisas dondequiera que vayas.',
        allowLocationFromSetting: `El acceso a la ubicación nos ayuda a mantener tu zona horaria y moneda precisas dondequiera que estés. Por favor, permite el acceso a la ubicación en la configuración de permisos de tu dispositivo.`,
        cameraErrorMessage: 'Se ha producido un error al hacer una foto. Por favor, inténtalo de nuevo.',
        dropTitle: 'Suéltalo',
        dropMessage: 'Suelta tu archivo aquí',
        flash: 'flash',
        multiScan: 'escaneo múltiple',
        shutter: 'obturador',
        gallery: 'galería',
        deleteReceipt: 'Eliminar recibo',
        deleteConfirmation: '¿Estás seguro de que quieres borrar este recibo?',
        addReceipt: 'Añadir recibo',
        scanFailed: 'El recibo no pudo ser escaneado, ya que falta el comerciante, la fecha o el monto.',
    },
    quickAction: {
        scanReceipt: 'Escanear recibo',
        recordDistance: 'Gasto de distancia',
        requestMoney: 'Crear gasto',
        perDiem: 'Crear dietas',
        splitBill: 'Dividir gasto',
        splitScan: 'Dividir recibo',
        splitDistance: 'Dividir distancia',
        paySomeone: ({name}: PaySomeoneParams = {}) => `Pagar a ${name ?? 'alguien'}`,
        assignTask: 'Assignar tarea',
        header: 'Acción rápida',
        noLongerHaveReportAccess: 'Ya no tienes acceso al destino previo de esta acción rápida. Escoge uno nuevo a continuación.',
        updateDestination: 'Actualiza el destino',
        createReport: 'Crear informe',
    },
    iou: {
        amount: 'Importe',
        taxAmount: 'Importe del impuesto',
        taxRate: 'Tasa de impuesto',
        approve: ({formattedAmount}: {formattedAmount?: string} = {}) => (formattedAmount ? `Aprobar ${formattedAmount}` : 'Aprobar'),
        approved: 'Aprobado',
        cash: 'Efectivo',
        card: 'Tarjeta',
        original: 'Original',
        split: 'Dividir',
        splitExpense: 'Dividir gasto',
        splitExpenseSubtitle: ({amount, merchant}: SplitExpenseSubtitleParams) => `${amount} de ${merchant}`,
        addSplit: 'Añadir división',
        totalAmountGreaterThanOriginal: ({amount}: TotalAmountGreaterOrLessThanOriginalParams) => `El importe total es ${amount} mayor que el gasto original.`,
        totalAmountLessThanOriginal: ({amount}: TotalAmountGreaterOrLessThanOriginalParams) => `El importe total es ${amount} menor que el gasto original.`,
        splitExpenseZeroAmount: 'Por favor, introduce un importe válido antes de continuar.',
        splitExpenseEditTitle: ({amount, merchant}: SplitExpenseEditTitleParams) => `Editar ${amount} para ${merchant}`,
        removeSplit: 'Eliminar división',
        addExpense: 'Agregar gasto',
        expense: 'Gasto',
        categorize: 'Categorizar',
        share: 'Compartir',
        participants: 'Participantes',
        createExpense: 'Crear gasto',
        trackDistance: 'Gasto de distancia',
        createExpenses: ({expensesNumber}: CreateExpensesParams) => `Crear ${expensesNumber} gastos`,
        paySomeone: ({name}: PaySomeoneParams = {}) => `Pagar a ${name ?? 'alguien'}`,
        chooseRecipient: 'Elige destinatario',
        createExpenseWithAmount: ({amount}: {amount: string}) => `Crear un gasto de ${amount}`,
        confirmDetails: 'Confirma los detalles',
        pay: 'Pagar',
        cancelPayment: 'Cancelar el pago',
        cancelPaymentConfirmation: '¿Estás seguro de que quieres cancelar este pago?',
        viewDetails: 'Ver detalles',
        pending: 'Pendiente',
        canceled: 'Canceló',
        posted: 'Contabilizado',
        deleteReceipt: 'Eliminar recibo',
        pendingMatch: 'Pendiente de coincidencia',
        pendingMatchWithCreditCard: 'Recibo pendiente de adjuntar con la transacción de la tarjeta',
        pendingMatchWithCreditCardDescription: 'Recibo pendiente de adjuntar con la transacción de la tarjeta. Márcalo como efectivo para cancelar.',
        markAsCash: 'Marcar como efectivo',
        routePending: 'Ruta pendiente...',
        deletedTransaction: ({amount, merchant}: DeleteTransactionParams) => `eliminó un gasto de este informe, ${merchant} - ${amount}`,
        movedFromReport: ({reportName}: MovedFromReportParams) => `movió un gasto${reportName ? ` desde ${reportName}` : ''}`,
        movedTransaction: ({reportUrl, reportName}: MovedTransactionParams) => `movió este gasto${reportName ? ` a <a href="${reportUrl}">${reportName}</a>` : ''}`,
        unreportedTransaction: 'movió este gasto a tu espacio personal',
        receiptIssuesFound: () => ({
            one: 'Problema encontrado',
            other: 'Problemas encontrados',
        }),
        fieldPending: 'Pendiente...',
        receiptScanning: () => ({
            one: 'Escaneando recibo...',
            other: 'Escaneando recibos...',
        }),
        scanMultipleReceipts: 'Escanea varios recibos',
        scanMultipleReceiptsDescription: 'Tome fotos de todos sus recibos a la vez y confirme los detalles usted mismo o deje que SmartScan se encargue.',
        receiptScanInProgress: 'Escaneado de recibo en proceso',
        receiptScanInProgressDescription: 'Escaneado de recibo en proceso. Vuelve a comprobarlo más tarde o introduce los detalles ahora.',
        duplicateTransaction: ({isSubmitted}: DuplicateTransactionParams) =>
            !isSubmitted
                ? 'Se han identificado posibles gastos duplicados. Revisa los duplicados para habilitar el envío.'
                : 'Se han identificado posibles gastos duplicados. Revisa los duplicados para habilitar la aprobación.',
        defaultRate: 'Tasa predeterminada',
        receiptMissingDetails: 'Recibo con campos vacíos',
        missingAmount: 'Falta importe',
        missingMerchant: 'Falta comerciante',
        receiptStatusTitle: 'Escaneando…',
        receiptStatusText: 'Solo tú puedes ver este recibo cuando se está escaneando. Vuelve más tarde o introduce los detalles ahora.',
        receiptScanningFailed: 'El escaneo de recibo ha fallado. Introduce los detalles manualmente.',
        transactionPendingDescription: 'Transacción pendiente. Puede tardar unos días en contabilizarse.',
        companyInfo: 'Información de la empresa',
        companyInfoDescription: 'Necesitamos algunos detalles más antes de que pueda enviar su primera factura.',
        yourCompanyName: 'Nombre de su empresa',
        yourCompanyWebsite: 'Sitio web de su empresa',
        yourCompanyWebsiteNote: 'Si no tiene un sitio web, puede proporcionar el perfil de LinkedIn o de las redes sociales de su empresa.',
        invalidDomainError: 'Ha introducido un dominio no válido. Para continuar, introduzca un dominio válido.',
        publicDomainError: 'Ha introducido un dominio público. Para continuar, introduzca un dominio privado.',
        // TODO: This key should be deprecated. More details: https://github.com/Expensify/App/pull/59653#discussion_r2028653252
        expenseCountWithStatus: ({scanningReceipts = 0, pendingReceipts = 0}: RequestCountParams) => {
            const statusText: string[] = [];
            if (scanningReceipts > 0) {
                statusText.push(`${scanningReceipts} escaneando`);
            }
            if (pendingReceipts > 0) {
                statusText.push(`${pendingReceipts} pendiente`);
            }
            return {
                one: statusText.length > 0 ? `1 gasto (${statusText.join(', ')})` : `1 gasto`,
                other: (count: number) => (statusText.length > 0 ? `${count} gastos (${statusText.join(', ')})` : `${count} gastos`),
            };
        },
        expenseCount: () => {
            return {
                one: '1 gasto',
                other: (count: number) => `${count} gastos`,
            };
        },
        deleteExpense: () => ({
            one: 'Eliminar gasto',
            other: 'Eliminar gastos',
        }),
        deleteConfirmation: () => ({
            one: '¿Estás seguro de que quieres eliminar esta solicitud?',
            other: '¿Estás seguro de que quieres eliminar estas solicitudes?',
        }),
        deleteReport: 'Eliminar informe',
        deleteReportConfirmation: '¿Estás seguro de que quieres eliminar este informe?',
        settledExpensify: 'Pagado',
        done: 'Listo',
        settledElsewhere: 'Pagado de otra forma',
        individual: 'Individual',
        business: 'Empresa',
        settleExpensify: ({formattedAmount}: SettleExpensifyCardParams) => (formattedAmount ? `Pagar ${formattedAmount} con Expensify` : `Pagar con Expensify`),
        settlePersonal: ({formattedAmount}: SettleExpensifyCardParams) => (formattedAmount ? `Pago ${formattedAmount} como individuo` : `Pago con cuenta personal`),
        settleWallet: ({formattedAmount}: SettleExpensifyCardParams) => (formattedAmount ? `Pagar ${formattedAmount} con billetera` : `con billetera`),
        settlePayment: ({formattedAmount}: SettleExpensifyCardParams) => `Pagar ${formattedAmount}`,
        settleBusiness: ({formattedAmount}: SettleExpensifyCardParams) => (formattedAmount ? `Pagar ${formattedAmount} como negocio` : `Pago con cuenta empresarial`),
        payElsewhere: ({formattedAmount}: SettleExpensifyCardParams) => (formattedAmount ? `Marcar ${formattedAmount} como pagado` : `Marcar como pagado`),
        settleInvoicePersonal: ({amount, last4Digits}: BusinessBankAccountParams) => (amount ? `Pagado ${amount} con cuenta personal ${last4Digits}` : `Pagado con cuenta personal`),
        settleInvoiceBusiness: ({amount, last4Digits}: BusinessBankAccountParams) => (amount ? `Pagado ${amount} con cuenta de empresa ${last4Digits}` : `Pagado con cuenta de empresa`),
        payWithPolicy: ({formattedAmount, policyName}: SettleExpensifyCardParams & {policyName: string}) =>
            formattedAmount ? `Pay ${formattedAmount} via ${policyName}` : `Pay via ${policyName}`,
        businessBankAccount: ({amount, last4Digits}: BusinessBankAccountParams) =>
            amount ? `Pagó ${amount} con la cuenta bancaria ${last4Digits}.` : `Pagó con la cuenta bancaria ${last4Digits}`,
        automaticallyPaidWithBusinessBankAccount: ({amount, last4Digits}: BusinessBankAccountParams) =>
            `pagado ${amount ? `${amount} ` : ''}con la cuenta bancaria terminada en ${last4Digits} vía <a href="${CONST.CONFIGURE_EXPENSE_REPORT_RULES_HELP_URL}">reglas del espacio de trabajo</a>`,
        invoicePersonalBank: ({lastFour}: BankAccountLastFourParams) => `Cuenta personal • ${lastFour}`,
        invoiceBusinessBank: ({lastFour}: BankAccountLastFourParams) => `Cuenta de empresa • ${lastFour}`,
        nextStep: 'Pasos siguientes',
        finished: 'Finalizado',
        sendInvoice: ({amount}: RequestAmountParams) => `Enviar factura de ${amount}`,
        submitAmount: ({amount}: RequestAmountParams) => `Solicitar ${amount}`,
        expenseAmount: ({formattedAmount, comment}: RequestedAmountMessageParams) => `${formattedAmount}${comment ? ` para ${comment}` : ''}`,
        submitted: `enviado`,
        automaticallySubmitted: `envió mediante <a href="${CONST.SELECT_WORKFLOWS_HELP_URL}">retrasar envíos</a>`,
        trackedAmount: ({formattedAmount, comment}: RequestedAmountMessageParams) => `realizó un seguimiento de ${formattedAmount}${comment ? ` para ${comment}` : ''}`,
        splitAmount: ({amount}: SplitAmountParams) => `dividir ${amount}`,
        didSplitAmount: ({formattedAmount, comment}: DidSplitAmountMessageParams) => `dividió ${formattedAmount}${comment ? ` para ${comment}` : ''}`,
        yourSplit: ({amount}: UserSplitParams) => `Tu parte ${amount}`,
        payerOwesAmount: ({payer, amount, comment}: PayerOwesAmountParams) => `${payer} debe ${amount}${comment ? ` para ${comment}` : ''}`,
        payerOwes: ({payer}: PayerOwesParams) => `${payer} debe: `,
        payerPaidAmount: ({payer, amount}: PayerPaidAmountParams) => `${payer ? `${payer} ` : ''}pagó ${amount}`,
        payerPaid: ({payer}: PayerPaidParams) => `${payer} pagó: `,
        payerSpentAmount: ({payer, amount}: PayerPaidAmountParams) => `${payer} gastó ${amount}`,
        payerSpent: ({payer}: PayerPaidParams) => `${payer} gastó: `,
        managerApproved: ({manager}: ManagerApprovedParams) => `${manager} aprobó:`,
        managerApprovedAmount: ({manager, amount}: ManagerApprovedAmountParams) => `${manager} aprobó ${amount}`,
        payerSettled: ({amount}: PayerSettledParams) => `pagó ${amount}`,
        payerSettledWithMissingBankAccount: ({amount}: PayerSettledParams) => `pagó ${amount}. Agrega una cuenta bancaria para recibir tu pago.`,
        automaticallyApproved: `aprobó mediante <a href="${CONST.CONFIGURE_EXPENSE_REPORT_RULES_HELP_URL}">reglas del espacio de trabajo</a>`,
        approvedAmount: ({amount}: ApprovedAmountParams) => `aprobó ${amount}`,
        approvedMessage: `aprobado`,
        unapproved: `no aprobado`,
        automaticallyForwarded: `aprobó mediante <a href="${CONST.CONFIGURE_EXPENSE_REPORT_RULES_HELP_URL}">reglas del espacio de trabajo</a>`,
        forwarded: `aprobó`,
        rejectedThisReport: 'rechazó este informe',
        waitingOnBankAccount: ({submitterDisplayName}: WaitingOnBankAccountParams) => `inició el pago, pero está esperando a que ${submitterDisplayName} añada una cuenta bancaria.`,
        adminCanceledRequest: ({manager}: AdminCanceledRequestParams) => `${manager ? `${manager}: ` : ''}canceló el pago`,
        canceledRequest: ({amount, submitterDisplayName}: CanceledRequestParams) =>
            `canceló el pago  ${amount}, porque ${submitterDisplayName} no habilitó tu Billetera Expensify en un plazo de 30 días.`,
        settledAfterAddedBankAccount: ({submitterDisplayName, amount}: SettledAfterAddedBankAccountParams) =>
            `${submitterDisplayName} añadió una cuenta bancaria. El pago de ${amount} se ha realizado.`,
        paidElsewhere: ({payer}: PaidElsewhereParams = {}) => `${payer ? `${payer} ` : ''}marcó como pagado`,
        paidWithExpensify: ({payer}: PaidWithExpensifyParams = {}) => `${payer ? `${payer} ` : ''}pagó con la billetera`,
        automaticallyPaidWithExpensify: ({payer}: PaidWithExpensifyParams = {}) =>
            `${payer ? `${payer} ` : ''}pagó con Expensify via <a href="${CONST.CONFIGURE_EXPENSE_REPORT_RULES_HELP_URL}">reglas del espacio de trabajo</a>`,
        noReimbursableExpenses: 'El importe de este informe no es válido',
        pendingConversionMessage: 'El total se actualizará cuando estés online',
        changedTheExpense: 'cambió el gasto',
        setTheRequest: ({valueName, newValueToDisplay}: SetTheRequestParams) =>
            `${valueName === 'comerciante' || valueName === 'importe' || valueName === 'gasto' ? 'el' : 'la'} ${valueName} a ${newValueToDisplay}`,
        setTheDistanceMerchant: ({translatedChangedField, newMerchant, newAmountToDisplay}: SetTheDistanceMerchantParams) =>
            `estableció la ${translatedChangedField} a ${newMerchant}, lo que estableció el importe a ${newAmountToDisplay}`,
        removedTheRequest: ({valueName, oldValueToDisplay}: RemovedTheRequestParams) =>
            `${valueName === 'comerciante' || valueName === 'importe' || valueName === 'gasto' ? 'el' : 'la'} ${valueName} (previamente ${oldValueToDisplay})`,
        updatedTheRequest: ({valueName, newValueToDisplay, oldValueToDisplay}: UpdatedTheRequestParams) =>
            `${valueName === 'comerciante' || valueName === 'importe' || valueName === 'gasto' ? 'el' : 'la'} ${valueName} a ${newValueToDisplay} (previamente ${oldValueToDisplay})`,
        updatedTheDistanceMerchant: ({translatedChangedField, newMerchant, oldMerchant, newAmountToDisplay, oldAmountToDisplay}: UpdatedTheDistanceMerchantParams) =>
            `cambió la ${translatedChangedField} a ${newMerchant} (previamente ${oldMerchant}), lo que cambió el importe a ${newAmountToDisplay} (previamente ${oldAmountToDisplay})`,
        threadExpenseReportName: ({formattedAmount, comment}: ThreadRequestReportNameParams) => `${comment ? `${formattedAmount} para ${comment}` : `Gasto de ${formattedAmount}`}`,
        invoiceReportName: ({linkedReportID}: OriginalMessage<typeof CONST.REPORT.ACTIONS.TYPE.REPORT_PREVIEW>) => `Informe de facturación #${linkedReportID}`,
        threadPaySomeoneReportName: ({formattedAmount, comment}: ThreadSentMoneyReportNameParams) => `${formattedAmount} enviado${comment ? ` para ${comment}` : ''}`,
        movedFromPersonalSpace: ({workspaceName, reportName}: MovedFromPersonalSpaceParams) => `movió el gasto desde su espacio personal a ${workspaceName ?? `un chat con ${reportName}`}`,
        movedToPersonalSpace: 'movió el gasto a su espacio personal',
        tagSelection: 'Selecciona una etiqueta para organizar mejor tus gastos.',
        categorySelection: 'Selecciona una categoría para organizar mejor tus gastos.',
        error: {
            invalidCategoryLength: 'La longitud de la categoría escogida excede el máximo permitido (255). Por favor, escoge otra categoría o acorta la categoría primero.',
            invalidTagLength: 'La longitud de la etiqueta escogida excede el máximo permitido (255). Por favor, escoge otra etiqueta o acorta la etiqueta primero.',
            invalidAmount: 'Por favor, ingresa un importe válido antes de continuar',
            invalidIntegerAmount: 'Por favor, introduce una cantidad entera en dólares antes de continuar',
            invalidTaxAmount: ({amount}: RequestAmountParams) => `El importe máximo del impuesto es ${amount}`,
            invalidSplit: 'La suma de las partes debe ser igual al importe total',
            invalidSplitParticipants: 'Introduce un importe superior a cero para al menos dos participantes',
            invalidSplitYourself: 'Por favor, introduce una cantidad diferente de cero para tu parte',
            noParticipantSelected: 'Por favor, selecciona un participante',
            other: 'Error inesperado. Por favor, inténtalo más tarde.',
            genericHoldExpenseFailureMessage: 'Error inesperado al retener el gasto. Por favor, inténtalo de nuevo más tarde.',
            genericUnholdExpenseFailureMessage: 'Error inesperado al desbloquear el gasto. Por favor, inténtalo de nuevo más tarde.',
            genericCreateFailureMessage: 'Error inesperado al enviar este gasto. Por favor, inténtalo más tarde.',
            genericCreateInvoiceFailureMessage: 'Error inesperado al enviar la factura. Por favor, inténtalo de nuevo más tarde.',
            receiptDeleteFailureError: 'Error inesperado al borrar este recibo. Por favor, vuelve a intentarlo más tarde.',
            receiptFailureMessage: 'Hubo un error al cargar tu recibo. Por favor, ',
            receiptFailureMessageShort: 'Hubo un error al cargar tu recibo.',
            tryAgainMessage: 'inténtalo de nuevo ',
            saveFileMessage: ' guarda el recibo',
            uploadLaterMessage: ' para cargarlo más tarde.',
            genericDeleteFailureMessage: 'Error inesperado al eliminar este gasto. Por favor, inténtalo más tarde.',
            genericEditFailureMessage: 'Error inesperado al editar este gasto. Por favor, inténtalo más tarde.',
            genericSmartscanFailureMessage: 'La transacción tiene campos vacíos',
            duplicateWaypointsErrorMessage: 'Por favor, elimina los puntos de ruta duplicados',
            atLeastTwoDifferentWaypoints: 'Por favor, introduce al menos dos direcciones diferentes',
            splitExpenseMultipleParticipantsErrorMessage: 'Solo puedes dividir un gasto entre un único espacio de trabajo o con miembros individuales. Por favor, actualiza tu selección.',
            invalidMerchant: 'Por favor, introduce un comerciante válido',
            atLeastOneAttendee: 'Debe seleccionarse al menos un asistente',
            invalidQuantity: 'Por favor, introduce una cantidad válida',
            quantityGreaterThanZero: 'La cantidad debe ser mayor que cero',
            invalidSubrateLength: 'Debe haber al menos una subtasa',
            invalidRate: 'Tasa no válida para este espacio de trabajo. Por favor, selecciona una tasa disponible en el espacio de trabajo.',
        },
        dismissReceiptError: 'Descartar error',
        dismissReceiptErrorConfirmation: '¡Atención! Descartar este error eliminará completamente tu recibo cargado. ¿Estás seguro?',
        waitingOnEnabledWallet: ({submitterDisplayName}: WaitingOnBankAccountParams) => `inició el pago, pero no se procesará hasta que ${submitterDisplayName} active su billetera`,
        enableWallet: 'Habilitar billetera',
        holdExpense: 'Retener gasto',
        unholdExpense: 'Desbloquear gasto',
        moveUnreportedExpense: 'Mover gasto no reportado',
        addUnreportedExpense: 'Añadir gasto no reportado',
        createNewExpense: 'Crear nuevo gasto',
        selectUnreportedExpense: 'Selecciona al menos un gasto para agregar al informe.',
        emptyStateUnreportedExpenseTitle: 'No hay gastos no reportados',
        emptyStateUnreportedExpenseSubtitle: 'Parece que no tienes gastos no reportados. Puedes crear uno a continuación.',
        addUnreportedExpenseConfirm: 'Añadir al informe',
        heldExpense: 'retuvo este gasto',
        unheldExpense: 'desbloqueó este gasto',
        explainHold: 'Explica la razón para retener esta solicitud.',
        undoClose: 'Deshacer cierre',
        reopened: 'reabrir',
        reopenReport: 'Reabrir informe',
        reopenExportedReportConfirmation: ({connectionName}: {connectionName: string}) =>
            `Este informe ya ha sido exportado a ${connectionName}. Cambiarlo puede provocar discrepancias en los datos. ¿Estás seguro de que deseas reabrir este informe?`,
        reason: 'Razón',
        undoSubmit: 'Deshacer envío',
        retracted: 'retirado',
        holdReasonRequired: 'Se requiere una razón para retener.',
        expenseWasPutOnHold: 'Este gasto está retenido',
        expenseOnHold: 'Este gasto está retenido. Revisa los comentarios para saber como proceder.',
        expensesOnHold: 'Todos los gastos están retenidos. Revisa los comentarios para saber como proceder.',
        expenseDuplicate: 'Este gasto tiene detalles similares a otro. Por favor, revisa los duplicados para continuar.',
        someDuplicatesArePaid: 'Algunos de estos duplicados ya han sido aprobados o pagados.',
        reviewDuplicates: 'Revisar duplicados',
        keepAll: 'Mantener todos',
        confirmApprove: 'Confirmar importe a aprobar',
        confirmApprovalAmount: 'Aprueba sólo los gastos conformes, o aprueba todo el informe.',
        confirmApprovalAllHoldAmount: () => ({
            one: 'Este gasto está retenido. ¿Quieres aprobarlo de todos modos?',
            other: 'Estos gastos están retenidos. ¿Quieres aprobarlos de todos modos?',
        }),
        confirmPay: 'Confirmar importe de pago',
        confirmPayAmount: 'Paga lo que no está retenido, o paga el informe completo.',
        confirmPayAllHoldAmount: () => ({
            one: 'Este gasto está retenido. ¿Quieres pagarlo de todos modos?',
            other: 'Estos gastos están retenidos. ¿Quieres pagarlos de todos modos?',
        }),
        payOnly: 'Solo pagar',
        approveOnly: 'Solo aprobar',
        hold: 'Retener',
        unhold: 'Desbloquear',
        holdEducationalTitle: 'Esta solicitud está',
        holdEducationalText: 'retenida',
        whatIsHoldExplain: 'Retener es como "pausar" un gasto para solicitar más detalles antes de aprobarlo o pagarlo.',
        holdIsLeftBehind: 'Los gastos retenidos se trasladan a otro informe tras su aprobación o pago.',
        unholdWhenReady: 'Los aprobadores pueden desbloquear los gastos cuando estén listos para su aprobación o pago.',
        changePolicyEducational: {
            title: '¡Has movido este informe!',
            description: 'Revisa cuidadosamente estos elementos, que tienden a cambiar al trasladar informes a un nuevo espacio de trabajo.',
            reCategorize: '<strong>Vuelve a categorizar los gastos</strong> para cumplir con las reglas del espacio de trabajo.',
            workflows: 'Este informe ahora puede estar sujeto a un <strong>flujo de aprobación</strong> diferente.',
        },
        changeWorkspace: 'Cambiar espacio de trabajo',
        set: 'estableció',
        changed: 'cambió',
        removed: 'eliminó',
        transactionPending: 'Transacción pendiente.',
        chooseARate: 'Selecciona una tasa de reembolso por milla o kilómetro para el espacio de trabajo',
        unapprove: 'Desaprobar',
        unapproveReport: 'Anular la aprobación del informe',
        headsUp: 'Atención!',
        unapproveWithIntegrationWarning: ({accountingIntegration}: UnapproveWithIntegrationWarningParams) =>
            `Este informe ya se ha exportado a ${accountingIntegration}. Modificarlo puede provocar discrepancias en los datos. ¿Estás seguro de que deseas cancelar la aprobación de este informe?`,
        reimbursable: 'reembolsable',
        nonReimbursable: 'no reembolsable',
        bookingPending: 'Esta reserva está pendiente',
        bookingPendingDescription: 'Esta reserva está pendiente porque aún no se ha pagado.',
        bookingArchived: 'Esta reserva está archivada',
        bookingArchivedDescription: 'Esta reserva está archivada porque la fecha del viaje ha pasado. Agregue un gasto por el monto final si es necesario.',
        attendees: 'Asistentes',
        whoIsYourAccountant: '¿Quién es tu contador?',
        paymentComplete: 'Pago completo',
        time: 'Tiempo',
        startDate: 'Fecha de inicio',
        endDate: 'Fecha de finalización',
        startTime: 'Hora de inicio',
        endTime: 'Hora de finalización',
        deleteSubrate: 'Eliminar subtasa',
        deleteSubrateConfirmation: '¿Estás seguro de que deseas eliminar esta subtasa?',
        quantity: 'Cantidad',
        subrateSelection: 'Selecciona una subtasa e introduce una cantidad.',
        qty: 'Cant',
        firstDayText: () => ({
            one: `Primer día: 1 hora`,
            other: (count: number) => `Primer día: ${count} horas`,
        }),
        lastDayText: () => ({
            one: `Último día: 1 hora`,
            other: (count: number) => `Último día: ${count} horas`,
        }),
        tripLengthText: () => ({
            one: `Viaje: 1 día completo`,
            other: (count: number) => `Viaje: ${count} días completos`,
        }),
        dates: 'Fechas',
        rates: 'Tasas',
        submitsTo: ({name}: SubmitsToParams) => `Se envía a ${name}`,
        moveExpenses: () => ({one: 'Mover gasto', other: 'Mover gastos'}),
    },
    share: {
        shareToExpensify: 'Compartir para Expensify',
        messageInputLabel: 'Mensaje',
    },
    notificationPreferencesPage: {
        header: 'Preferencias de avisos',
        label: 'Avisar sobre nuevos mensajes',
        notificationPreferences: {
            always: 'Inmediatamente',
            daily: 'Cada día',
            mute: 'Nunca',
            hidden: 'Oculto',
        },
    },
    loginField: {
        numberHasNotBeenValidated: 'El número no está validado todavía. Haz click en el botón para reenviar el enlace de confirmación via SMS.',
        emailHasNotBeenValidated: 'El correo electrónico no está validado todavía. Haz click en el botón para reenviar el enlace de confirmación via correo electrónico.',
    },
    avatarWithImagePicker: {
        uploadPhoto: 'Subir foto',
        removePhoto: 'Eliminar foto',
        editImage: 'Editar foto',
        viewPhoto: 'Ver foto',
        imageUploadFailed: 'Error al cargar la imagen',
        deleteWorkspaceError: 'Lo sentimos, hubo un problema eliminando el avatar de tu espacio de trabajo',
        sizeExceeded: ({maxUploadSizeInMB}: SizeExceededParams) => `La imagen supera el tamaño máximo de ${maxUploadSizeInMB} MB.`,
        resolutionConstraints: ({minHeightInPx, minWidthInPx, maxHeightInPx, maxWidthInPx}: ResolutionConstraintsParams) =>
            `Por favor, elige una imagen más grande que ${minHeightInPx}x${minWidthInPx} píxeles y más pequeña que ${maxHeightInPx}x${maxWidthInPx} píxeles.`,
        notAllowedExtension: ({allowedExtensions}: NotAllowedExtensionParams) => `La foto de perfil debe ser de uno de los siguientes tipos: ${allowedExtensions.join(', ')}.`,
    },
    modal: {
        backdropLabel: 'Fondo del Modal',
    },
    profilePage: {
        profile: 'Perfil',
        preferredPronouns: 'Pronombres preferidos',
        selectYourPronouns: 'Selecciona tus pronombres',
        selfSelectYourPronoun: 'Auto-selecciona tu pronombre',
        emailAddress: 'Dirección de correo electrónico',
        setMyTimezoneAutomatically: 'Configura mi zona horaria automáticamente',
        timezone: 'Zona horaria',
        invalidFileMessage: 'Archivo inválido. Pruebe con una imagen diferente.',
        avatarUploadFailureMessage: 'No se pudo subir el avatar. Por favor, inténtalo de nuevo.',
        online: 'En línea',
        offline: 'Desconectado',
        syncing: 'Sincronizando',
        profileAvatar: 'Perfil avatar',
        publicSection: {
            title: 'Público',
            subtitle: 'Estos detalles se muestran en tu perfil público, a disposición de los demás.',
        },
        privateSection: {
            title: 'Privado',
            subtitle: 'Estos detalles se utilizan para viajes y pagos. Nunca se mostrarán en tu perfil público.',
        },
    },
    securityPage: {
        title: 'Opciones de seguridad',
        subtitle: 'Activa la autenticación de dos factores para mantener tu cuenta segura.',
        goToSecurity: 'Volver a la página de seguridad',
    },
    shareCodePage: {
        title: 'Tu código',
        subtitle: 'Invita a miembros a Expensify compartiendo tu código QR personal o enlace de invitación.',
    },
    pronounsPage: {
        pronouns: 'Pronombres',
        isShownOnProfile: 'Tus pronombres se muestran en tu perfil.',
        placeholderText: 'Buscar para ver opciones',
    },
    contacts: {
        contactMethod: 'Método de contacto',
        contactMethods: 'Métodos de contacto',
        featureRequiresValidate: 'Esta función requiere que valides tu cuenta.',
        validateAccount: 'Valida tu cuenta',
        helpTextBeforeEmail: 'Añade más formas de que la gente te encuentre y reenvía los recibos a ',
        helpTextAfterEmail: ' desde varias direcciones de correo electrónico.',
        pleaseVerify: 'Por favor, verifica este método de contacto',
        getInTouch: 'Utilizaremos este método de contacto cuando necesitemos contactarte.',
        enterMagicCode: ({contactMethod}: EnterMagicCodeParams) => `Por favor, introduce el código mágico enviado a ${contactMethod}. Debería llegar en un par de minutos.`,
        setAsDefault: 'Establecer como predeterminado',
        yourDefaultContactMethod:
            'Este es tu método de contacto predeterminado. Antes de poder eliminarlo, tendrás que elegir otro método de contacto y haz clic en "Establecer como predeterminado".',
        removeContactMethod: 'Eliminar método de contacto',
        removeAreYouSure: '¿Estás seguro de que quieres eliminar este método de contacto? Esta acción no se puede deshacer.',
        failedNewContact: 'Se ha producido un error al añadir este método de contacto.',
        genericFailureMessages: {
            requestContactMethodValidateCode: 'No se ha podido enviar un nuevo código mágico. Espera un rato y vuelve a intentarlo.',
            validateSecondaryLogin: 'Código mágico incorrecto o no válido. Inténtalo de nuevo o solicita otro código.',
            deleteContactMethod: 'No se ha podido eliminar este método de contacto. Por favor, contacta con Concierge para obtener ayuda.',
            setDefaultContactMethod: 'No se pudo establecer un nuevo método de contacto predeterminado. Por favor contacta con Concierge para obtener ayuda.',
            addContactMethod: 'Se ha producido un error al añadir este método de contacto. Por favor, contacta con Concierge para obtener ayuda.',
            enteredMethodIsAlreadySubmitted: 'El método de contacto ingresado ya existe',
            passwordRequired: 'Se requiere contraseña',
            contactMethodRequired: 'Se requiere método de contacto',
            invalidContactMethod: 'Método de contacto no válido',
        },
        newContactMethod: 'Nuevo método de contacto',
        goBackContactMethods: 'Volver a métodos de contacto',
    },
    pronouns: {
        coCos: 'Co / Cos',
        eEyEmEir: 'E / Ey / Em / Eir',
        faeFaer: 'Fae / Faer',
        heHimHis: 'Él',
        heHimHisTheyThemTheirs: 'Él / Ellos',
        sheHerHers: 'Ella',
        sheHerHersTheyThemTheirs: 'Ella / Ellos',
        merMers: 'Mer / Mers',
        neNirNirs: 'Ne / Nir / Nirs',
        neeNerNers: 'Nee / Ner / Ners',
        perPers: 'Per / Pers',
        theyThemTheirs: 'Ellos',
        thonThons: 'Thon / Thons',
        veVerVis: 'Ve / Ver / Vis',
        viVir: 'Vi / Vir',
        xeXemXyr: 'Xe / Xem / Xyr',
        zeZieZirHir: 'Ze / Zie / Zir / Hir',
        zeHirHirs: 'Ze / Hir',
        callMeByMyName: 'Llámame por mi nombre',
    },
    displayNamePage: {
        headerTitle: 'Nombre',
        isShownOnProfile: 'Este nombre es visible en tu perfil.',
    },
    timezonePage: {
        timezone: 'Zona horaria',
        isShownOnProfile: 'Tu zona horaria se muestra en tu perfil.',
        getLocationAutomatically: 'Detecta tu ubicación automáticamente',
    },
    updateRequiredView: {
        updateRequired: 'Actualización requerida',
        pleaseInstall: 'Por favor, actualiza a la última versión de New Expensify',
        pleaseInstallExpensifyClassic: 'Por favor, instala la última versión de Expensify',
        toGetLatestChanges: 'Para móvil o escritorio, descarga e instala la última versión. Para la web, actualiza tu navegador.',
        newAppNotAvailable: 'La App New Expensify ya no está disponible.',
    },
    initialSettingsPage: {
        about: 'Acerca de',
        aboutPage: {
            description: 'New Expensify está creada por una comunidad de desarrolladores de código abierto de todo el mundo. Ayúdanos a construir el futuro de Expensify.',
            appDownloadLinks: 'Enlaces para descargar la App',
            viewKeyboardShortcuts: 'Ver atajos de teclado',
            viewTheCode: 'Ver código',
            viewOpenJobs: 'Ver trabajos disponibles',
            reportABug: 'Reportar un error',
            troubleshoot: 'Solución de problemas',
        },
        appDownloadLinks: {
            android: {
                label: 'Android',
            },
            ios: {
                label: 'iOS',
            },
            desktop: {
                label: 'macOS',
            },
        },
        troubleshoot: {
            clearCacheAndRestart: 'Borrar caché y reiniciar',
            viewConsole: 'Ver la consola de depuración',
            debugConsole: 'Consola de depuración',
            description: 'Utilice las herramientas que aparecen a continuación para solucionar los problemas de Expensify. Si tiene algún problema, por favor',
            submitBug: 'envíe un informe de error',
            confirmResetDescription: 'Todos los borradores no enviados se perderán, pero el resto de tus datos estarán a salvo.',
            resetAndRefresh: 'Restablecer y actualizar',
            clientSideLogging: 'Registro a nivel cliente',
            noLogsToShare: 'No hay logs que compartir',
            useProfiling: 'Usar el trazado',
            profileTrace: 'Traza de ejecución',
            results: 'Resultados',
            releaseOptions: 'Opciones de publicación',
            testingPreferences: 'Preferencias para Tests',
            useStagingServer: 'Usar servidor "staging"',
            forceOffline: 'Forzar desconexión',
            simulatePoorConnection: 'Simular una conexión a internet deficiente',
            simulateFailingNetworkRequests: 'Simular fallos en solicitudes de red',
            authenticationStatus: 'Estado de autenticación',
            deviceCredentials: 'Credenciales del dispositivo',
            invalidate: 'Invalidar',
            destroy: 'Destruir',
            maskExportOnyxStateData: 'Enmascare los datos frágiles del miembro mientras exporta el estado Onyx',
            exportOnyxState: 'Exportar estado Onyx',
            importOnyxState: 'Importar estado Onyx',
            testCrash: 'Prueba de fallo',
            resetToOriginalState: 'Restablecer al estado original',
            usingImportedState: 'Estás utilizando el estado importado. Pulsa aquí para borrarlo.',
            debugMode: 'Modo depuración',
            invalidFile: 'Archivo inválido',
            invalidFileDescription: 'El archivo que ests intentando importar no es válido. Por favor, inténtalo de nuevo.',
            invalidateWithDelay: 'Invalidar con retraso',
            recordTroubleshootData: 'Registrar datos de resolución de problemas',
        },
        debugConsole: {
            saveLog: 'Guardar registro',
            shareLog: 'Compartir registro',
            enterCommand: 'Introducir comando',
            execute: 'Ejecutar',
            noLogsAvailable: 'No hay registros disponibles',
            logSizeTooLarge: ({size}: LogSizeParams) => `El tamaño del registro excede el límite de ${size} MB. Utilice "Guardar registro" para descargar el archivo de registro.`,
            logs: 'Logs',
            viewConsole: 'Ver consola',
        },
        security: 'Seguridad',
        restoreStashed: 'Restablecer login guardado',
        signOut: 'Desconectar',
        signOutConfirmationText: 'Si cierras sesión perderás los cambios hechos mientras estabas desconectado',
        versionLetter: 'v',
        readTheTermsAndPrivacy: {
            phrase1: 'Leer los',
            phrase2: 'Términos de Servicio',
            phrase3: 'y',
            phrase4: 'Privacidad',
        },
        help: 'Ayuda',
        whatIsNew: 'Qué hay de nuevo',
        accountSettings: 'Configuración de la cuenta',
        account: 'Cuenta',
        general: 'General',
    },
    closeAccountPage: {
        closeAccount: 'Cerrar cuenta',
        reasonForLeavingPrompt: '¡Lamentamos verte partir! ¿Serías tan amable de decirnos por qué, para que podamos mejorar?',
        enterMessageHere: 'Escribe aquí tu mensaje',
        closeAccountWarning: 'Una vez cerrada tu cuenta no se puede revertir.',
        closeAccountPermanentlyDeleteData: '¿Estás seguro de que quieres eliminar tu cuenta? Esta acción eliminará permanentemente toda la información de cualquier gasto pendiente.',
        enterDefaultContactToConfirm: 'Por favor, escribe tu método de contacto predeterminado para confirmar que deseas eliminar tu cuenta. Tu método de contacto predeterminado es:',
        enterDefaultContact: 'Tu método de contacto predeterminado',
        defaultContact: 'Método de contacto predeterminado:',
        enterYourDefaultContactMethod: 'Por favor, introduce tu método de contacto predeterminado para cerrar tu cuenta.',
    },
    mergeAccountsPage: {
        mergeAccount: 'Fusionar cuentas',
        accountDetails: {
            accountToMergeInto: `Introduce la cuenta en la que deseas fusionar `,
            notReversibleConsent: 'Entiendo que esto no es reversible',
        },
        accountValidate: {
            confirmMerge: '¿Estás seguro de que deseas fusionar cuentas?',
            lossOfUnsubmittedData: `Fusionar tus cuentas es irreversible y resultará en la pérdida de cualquier gasto no enviado de `,
            enterMagicCode: `Para continuar, por favor introduce el código mágico enviado a `,
            errors: {
                incorrectMagicCode: 'Código mágico incorrecto o no válido. Inténtalo de nuevo o solicita otro código.',
                fallback: 'Ha ocurrido un error. Por favor, inténtalo mas tarde.',
            },
        },
        mergeSuccess: {
            accountsMerged: '¡Cuentas fusionadas!',
            successfullyMergedAllData: {
                beforeFirstEmail: 'Has fusionado exitosamente todos los datos de ',
                beforeSecondEmail: ' en ',
                afterSecondEmail: '. De ahora en adelante, puedes usar cualquiera de los inicios de sesión para esta cuenta.',
            },
        },
        mergePendingSAML: {
            weAreWorkingOnIt: 'Estamos trabajando en ello',
            limitedSupport: 'Todavía no es posible fusionar cuentas en New Expensify. Por favor, realiza esta acción en Expensify Classic en su lugar',
            reachOutForHelp: {
                beforeLink: '¡No dudes en ',
                linkText: 'comunicarte con Concierge',
                afterLink: ' si tienes alguna pregunta!',
            },
            goToExpensifyClassic: 'Dirígete a Expensify Classic',
        },
        mergeFailureSAMLDomainControl: {
            beforeFirstEmail: 'No puedes fusionar ',
            beforeDomain: ' porque está controlado por ',
            afterDomain: '. Póngase ',
            linkText: 'en contacto con Concierge',
            afterLink: ' si necesita ayuda.',
        },
        mergeFailureSAMLAccount: {
            beforeEmail: 'No puedes fusionar ',
            afterEmail: ' en otras cuentas porque tu administrador de dominio la ha establecido como tu inicio de sesión principal. Por favor, fusiona otras cuentas en esta en su lugar.',
        },
        mergeFailure2FA: {
            oldAccount2FAEnabled: {
                beforeFirstEmail: 'No puedes fusionar cuentas porque ',
                beforeSecondEmail: ' tiene habilitada la autenticación de dos factores (2FA). Por favor, deshabilita 2FA para ',
                afterSecondEmail: ' e inténtalo nuevamente.',
            },
            learnMore: 'Aprende más sobre cómo fusionar cuentas.',
        },
        mergeFailureAccountLocked: {
            beforeEmail: 'No puedes fusionar ',
            afterEmail: ' porque está bloqueado. Póngase ',
            linkText: 'en contacto con Concierge',
            afterLink: ` si necesita ayuda.`,
        },
        mergeFailureUncreatedAccount: {
            noExpensifyAccount: {
                beforeEmail: 'No puedes fusionar cuentas porque ',
                afterEmail: ' no tiene una cuenta de Expensify.',
            },
            addContactMethod: {
                beforeLink: 'Por favor, ',
                linkText: 'añádela como método de contacto',
                afterLink: ' en su lugar.',
            },
        },
        mergeFailureSmartScannerAccount: {
            beforeEmail: 'No puedes fusionar ',
            afterEmail: ' en otras cuentas. Por favor, fusiona otras cuentas en esta en su lugar.',
        },
        mergeFailureInvoicedAccount: {
            beforeEmail: 'No puedes fusionar ',
            afterEmail: ' en otras cuentas porque es el propietario de facturación de una cuenta facturada. Por favor, fusiona otras cuentas en esta en su lugar.',
        },
        mergeFailureTooManyAttempts: {
            heading: 'Inténtalo de nuevo más tarde',
            description: 'Hubo demasiados intentos de fusionar cuentas. Por favor, inténtalo de nuevo más tarde.',
        },
        mergeFailureUnvalidatedAccount: {
            description: 'No puedes fusionarte con otras cuentas porque no está validada. Por favor, valida la cuenta e inténtalo de nuevo.',
        },
        mergeFailureSelfMerge: {
            description: 'No puedes combinar una cuenta consigo misma.',
        },
        mergeFailureGenericHeading: 'No se pueden fusionar cuentas',
    },
    lockAccountPage: {
        reportSuspiciousActivity: 'Informar de actividad sospechosa',
        lockAccount: 'Bloquear cuenta',
        unlockAccount: 'Desbloquear cuenta',
        compromisedDescription:
            '¿Notas algo extraño en tu cuenta? Informarlo bloqueará tu cuenta de inmediato, detendrá nuevas transacciones con la Tarjeta Expensify y evitará cualquier cambio en la cuenta.',
        domainAdminsDescription: 'Para administradores de dominio: Esto también detiene toda la actividad de la Tarjeta Expensify y las acciones administrativas en tus dominios.',
        areYouSure: '¿Estás seguro de que deseas bloquear tu cuenta de Expensify?',
        ourTeamWill: 'Nuestro equipo investigará y eliminará cualquier acceso no autorizado. Para recuperar el acceso, tendrás que trabajar con Concierge.',
    },
    failedToLockAccountPage: {
        failedToLockAccount: 'No se pudo bloquear la cuenta',
        failedToLockAccountDescription: 'No pudimos bloquear tu cuenta. Por favor, chatea con Concierge para resolver este problema.',
        chatWithConcierge: 'Chatear con Concierge',
    },
    unlockAccountPage: {
        accountLocked: 'Cuenta bloqueada',
        yourAccountIsLocked: 'Tu cuenta está bloqueada',
        chatToConciergeToUnlock: 'Chatea con Concierge para resolver los problemas de seguridad y desbloquear tu cuenta.',
        chatWithConcierge: 'Chatear con Concierge',
    },
    passwordPage: {
        changePassword: 'Cambiar contraseña',
        changingYourPasswordPrompt: 'El cambio de contraseña va a afectar tanto a la cuenta de Expensify.com como la de New Expensify.',
        currentPassword: 'Contraseña actual',
        newPassword: 'Nueva contraseña',
        newPasswordPrompt: 'La nueva contraseña debe ser diferente de la antigua y contener al menos 8 caracteres, 1 letra mayúscula, 1 letra minúscula y 1 número.',
    },
    twoFactorAuth: {
        headerTitle: 'Autenticación de dos factores',
        twoFactorAuthEnabled: 'Autenticación de dos factores habilitada',
        whatIsTwoFactorAuth:
            'La autenticación de dos factores (2FA) ayuda a mantener tu cuenta segura. Al iniciar sesión, deberás ingresar un código generado por tu aplicación de autenticación preferida.',
        disableTwoFactorAuth: 'Deshabilitar la autenticación de dos factores',
        explainProcessToRemove: 'Para deshabilitar la autenticación de dos factores (2FA), por favor introduce un código válido de tu aplicación de autenticación.',
        disabled: 'La autenticación de dos factores está ahora deshabilitada',
        noAuthenticatorApp: 'Ya no necesitarás una aplicación de autenticación para iniciar sesión en Expensify.',
        stepCodes: 'Códigos de recuperación',
        keepCodesSafe: '¡Guarda los códigos de recuperación en un lugar seguro!',
        codesLoseAccess:
            'Si pierdes el acceso a tu aplicación de autenticación y no tienes estos códigos, perderás el acceso a tu cuenta. \n\nNota: Configurar la autenticación de dos factores cerrará la sesión de todas las demás sesiones activas.',
        errorStepCodes: 'Copia o descarga los códigos antes de continuar',
        stepVerify: 'Verificar',
        scanCode: 'Escanea el código QR usando tu',
        authenticatorApp: 'aplicación de autenticación',
        addKey: 'O añade esta clave secreta a tu aplicación de autenticación:',
        enterCode: 'Luego introduce el código de seis dígitos generado por tu aplicación de autenticación.',
        stepSuccess: 'Finalizado',
        enabled: 'La autenticación de dos factores habilitada',
        congrats: '¡Felicidades! Ahora tienes esa seguridad adicional.',
        copy: 'Copiar',
        disable: 'Deshabilitar',
        enableTwoFactorAuth: 'Activar la autenticación de dos factores',
        pleaseEnableTwoFactorAuth: 'Activa la autenticación de dos factores.',
        twoFactorAuthIsRequiredDescription: 'Por razones de seguridad, Xero requiere la autenticación de dos factores para conectar la integración.',
        twoFactorAuthIsRequiredForAdminsHeader: 'Autenticación de dos factores requerida',
        twoFactorAuthIsRequiredForAdminsTitle: 'Por favor, habilita la autenticación de dos factores',
        twoFactorAuthIsRequiredForAdminsDescription:
            'Tu conexión de contabilidad con Xero requiere el uso de autenticación de dos factores. Por favor, habilítala para seguir usando Expensify.',
        twoFactorAuthCannotDisable: 'No se puede desactivar la autenticación de dos factores (2FA)',
        twoFactorAuthRequired: 'La autenticación de dos factores (2FA) es obligatoria para tu conexión a Xero y no se puede desactivar.',
    },
    recoveryCodeForm: {
        error: {
            pleaseFillRecoveryCode: 'Por favor, introduce tu código de recuperación',
            incorrectRecoveryCode: 'Código de recuperación incorrecto. Por favor, inténtalo de nuevo.',
        },
        useRecoveryCode: 'Usar código de recuperación',
        recoveryCode: 'Código de recuperación',
        use2fa: 'Usar autenticación de dos factores',
    },
    twoFactorAuthForm: {
        error: {
            pleaseFillTwoFactorAuth: 'Por favor, introduce tu código de autenticación de dos factores',
            incorrect2fa: 'Código de autenticación de dos factores incorrecto. Por favor, inténtalo de nuevo.',
        },
    },
    passwordConfirmationScreen: {
        passwordUpdated: '¡Contraseña actualizada!',
        allSet: 'Todo está listo. Guarda tu contraseña en un lugar seguro.',
    },
    privateNotes: {
        title: 'Notas privadas',
        personalNoteMessage: 'Guarda notas sobre este chat aquí. Usted es la única persona que puede añadir, editar o ver estas notas.',
        sharedNoteMessage: 'Guarda notas sobre este chat aquí. Los empleados de Expensify y otros miembros del dominio team.expensify.com pueden ver estas notas.',
        composerLabel: 'Notas',
        myNote: 'Mi nota',
        error: {
            genericFailureMessage: 'Las notas privadas no han podido ser guardadas',
        },
    },
    billingCurrency: {
        error: {
            securityCode: 'Por favor, introduce un código de seguridad válido',
        },
        securityCode: 'Código de seguridad',
        changePaymentCurrency: 'Cambiar moneda de facturación',
        changeBillingCurrency: 'Cambiar la moneda de pago',
        paymentCurrency: 'Moneda de pago',
        paymentCurrencyDescription: 'Selecciona una moneda estándar a la que se deben convertir todos los gastos personales',
        note: 'Nota: Cambiar tu moneda de pago puede afectar cuánto pagarás por Expensify. Consulta nuestra',
        noteLink: 'página de precios',
        noteDetails: 'para conocer todos los detalles.',
    },
    addDebitCardPage: {
        addADebitCard: 'Añadir una tarjeta de débito',
        nameOnCard: 'Nombre en la tarjeta',
        debitCardNumber: 'Número de la tarjeta de débito',
        expiration: 'Fecha de vencimiento',
        expirationDate: 'MMAA',
        cvv: 'CVV',
        billingAddress: 'Dirección de envio',
        growlMessageOnSave: 'Tu tarteja de débito se añadió correctamente',
        expensifyPassword: 'Contraseña de Expensify',
        error: {
            invalidName: 'El nombre sólo puede incluir letras',
            addressZipCode: 'Por favor, introduce un código postal válido',
            debitCardNumber: 'Por favor, introduce un número de tarjeta de débito válido',
            expirationDate: 'Por favor, selecciona una fecha de vencimiento válida',
            securityCode: 'Por favor, introduce un código de seguridad válido',
            addressStreet: 'Por favor, introduce una dirección de facturación válida que no sea un apartado postal',
            addressState: 'Por favor, selecciona un estado',
            addressCity: 'Por favor, introduce una ciudad',
            genericFailureMessage: 'Se ha producido un error al añadir tu tarjeta. Por favor, vuelva a intentarlo.',
            password: 'Por favor, introduce tu contraseña de Expensify',
        },
    },
    addPaymentCardPage: {
        addAPaymentCard: 'Añade tarjeta de pago',
        nameOnCard: 'Nombre en la tarjeta',
        paymentCardNumber: 'Número de la tarjeta',
        expiration: 'Fecha de vencimiento',
        expirationDate: 'MMAA',
        cvv: 'CVV',
        billingAddress: 'Dirección de envio',
        growlMessageOnSave: 'Tu tarjeta de pago se añadió correctamente',
        expensifyPassword: 'Contraseña de Expensify',
        error: {
            invalidName: 'El nombre sólo puede incluir letras',
            addressZipCode: 'Por favor, introduce un código postal válido',
            paymentCardNumber: 'Por favor, introduce un número de tarjeta de pago válido',
            expirationDate: 'Por favor, selecciona una fecha de vencimiento válida',
            securityCode: 'Por favor, introduce un código de seguridad válido',
            addressStreet: 'Por favor, introduce una dirección de facturación válida que no sea un apartado postal',
            addressState: 'Por favor, selecciona un estado',
            addressCity: 'Por favor, introduce una ciudad',
            genericFailureMessage: 'Se ha producido un error al añadir tu tarjeta. Por favor, vuelva a intentarlo.',
            password: 'Por favor, introduce tu contraseña de Expensify',
        },
    },
    walletPage: {
        balance: 'Saldo',
        paymentMethodsTitle: 'Métodos de pago',
        setDefaultConfirmation: 'Marcar como método de pago predeterminado',
        setDefaultSuccess: 'Método de pago configurado',
        deleteAccount: 'Eliminar cuenta',
        deleteConfirmation: '¿Estás seguro de que quieres eliminar esta cuenta?',
        error: {
            notOwnerOfBankAccount: 'Se ha producido un error al establecer esta cuenta bancaria como método de pago predeterminado',
            invalidBankAccount: 'Esta cuenta bancaria está temporalmente suspendida',
            notOwnerOfFund: 'Se ha producido un error al establecer esta tarjeta de crédito como método de pago predeterminado',
            setDefaultFailure: 'No se ha podido configurar el método de pago',
        },
        addBankAccountFailure: 'Ocurrió un error inesperado al intentar añadir la cuenta bancaria. Inténtalo de nuevo.',
        getPaidFaster: 'Cobra más rápido',
        addPaymentMethod: 'Añade un método de pago para enviar y recibir pagos directamente en la aplicación.',
        getPaidBackFaster: 'Recibe tus pagos más rápido',
        secureAccessToYourMoney: 'Acceso seguro a tu dinero',
        receiveMoney: 'Recibe dinero en tu moneda local',
        expensifyWallet: 'Billetera Expensify (Beta)',
        sendAndReceiveMoney: 'Envía y recibe dinero desde tu Billetera Expensify. Solo cuentas bancarias de EE. UU.',
        enableWallet: 'Habilitar billetera',
        addBankAccountToSendAndReceive: 'Recibe el reembolso de los gastos que envíes a un espacio de trabajo.',
        addBankAccount: 'Añadir cuenta bancaria',
        addDebitOrCreditCard: 'Añadir tarjeta de débito o crédito',
        assignedCards: 'Tarjetas asignadas',
        assignedCardsDescription: 'Son tarjetas asignadas por un administrador del espacio de trabajo para gestionar los gastos de la empresa.',
        expensifyCard: 'Tarjeta Expensify',
        walletActivationPending: 'Estamos revisando tu información. Por favor, vuelve en unos minutos.',
        walletActivationFailed: 'Lamentablemente, no podemos activar tu billetera en este momento. Chatea con Concierge para obtener más ayuda.',
        addYourBankAccount: 'Añadir tu cuenta bancaria',
        addBankAccountBody: 'Conectemos tu cuenta bancaria a Expensify para que sea más fácil que nunca enviar y recibir pagos directamente en la aplicación.',
        chooseYourBankAccount: 'Elige tu cuenta bancaria',
        chooseAccountBody: 'Asegúrese de elegir el adecuado.',
        confirmYourBankAccount: 'Confirma tu cuenta bancaria',
    },
    cardPage: {
        expensifyCard: 'Tarjeta Expensify',
        expensifyTravelCard: 'Tarjeta Expensify de Viaje',
        availableSpend: 'Límite restante',
        smartLimit: {
            name: 'Límite inteligente',
            title: ({formattedLimit}: ViolationsOverLimitParams) => `Puedes gastar hasta ${formattedLimit} en esta tarjeta al mes. El límite se restablecerá el primer día del mes.`,
        },
        fixedLimit: {
            name: 'Límite fijo',
            title: ({formattedLimit}: ViolationsOverLimitParams) => `Puedes gastar hasta ${formattedLimit} en esta tarjeta, luego se desactivará.`,
        },
        monthlyLimit: {
            name: 'Límite mensual',
            title: ({formattedLimit}: ViolationsOverLimitParams) => `Puedes gastar hasta ${formattedLimit} en esta tarjeta y el límite se restablecerá a medida que se aprueben tus gastos.`,
        },
        virtualCardNumber: 'Número de la tarjeta virtual',
        travelCardCvv: 'CVV de la tarjeta de viaje',
        physicalCardNumber: 'Número de la tarjeta física',
        getPhysicalCard: 'Obtener tarjeta física',
        reportFraud: 'Reportar fraude con la tarjeta virtual',
        reportTravelFraud: 'Reportar fraude con la tarjeta de viaje',
        reviewTransaction: 'Revisar transacción',
        suspiciousBannerTitle: 'Transacción sospechosa',
        suspiciousBannerDescription: 'Hemos detectado una transacción sospechosa en la tarjeta. Haz click abajo para revisarla.',
        cardLocked: 'La tarjeta está temporalmente bloqueada mientras nuestro equipo revisa la cuenta de tu empresa.',
        cardDetails: {
            cardNumber: 'Número de tarjeta virtual',
            expiration: 'Expiración',
            cvv: 'CVV',
            address: 'Dirección',
            revealDetails: 'Revelar detalles',
            revealCvv: 'Revelar CVV',
            copyCardNumber: 'Copiar número de la tarjeta',
            updateAddress: 'Actualizar dirección',
        },
        cardAddedToWallet: ({platform}: {platform: 'Google' | 'Apple'}) => `Añadida a ${platform} Wallet`,
        cardDetailsLoadingFailure: 'Se ha producido un error al cargar los datos de la tarjeta. Comprueba tu conexión a Internet e inténtalo de nuevo.',
        validateCardTitle: 'Asegurémonos de que eres tú',
        enterMagicCode: ({contactMethod}: EnterMagicCodeParams) =>
            `Introduzca el código mágico enviado a ${contactMethod} para ver los datos de su tarjeta. Debería llegar en un par de minutos.`,
    },
    workflowsPage: {
        workflowTitle: 'Gasto',
        workflowDescription: 'Configure un flujo de trabajo desde el momento en que se produce el gasto, incluida la aprobación y el pago',
        delaySubmissionTitle: 'Retrasar envíos',
        delaySubmissionDescription: 'Elige una frecuencia para enviar los gastos, o dejalo desactivado para recibir actualizaciones en tiempo real sobre los gastos.',
        submissionFrequency: 'Frecuencia de envíos',
        submissionFrequencyDateOfMonth: 'Fecha del mes',
        addApprovalsTitle: 'Aprobaciones',
        addApprovalButton: 'Añadir flujo de aprobación',
        addApprovalTip: 'Este flujo de trabajo por defecto se aplica a todos los miembros, a menos que exista un flujo de trabajo más específico.',
        approver: 'Aprobador',
        connectBankAccount: 'Conectar cuenta bancaria',
        addApprovalsDescription: 'Requiere una aprobación adicional antes de autorizar un pago.',
        makeOrTrackPaymentsTitle: 'Realizar o seguir pagos',
        makeOrTrackPaymentsDescription: 'Añade un pagador autorizado para los pagos realizados en Expensify o realiza un seguimiento de los pagos realizados en otro lugar.',
        editor: {
            submissionFrequency: 'Elige cuánto tiempo Expensify debe esperar antes de compartir los gastos sin errores.',
        },
        frequencyDescription: 'Elige la frecuencia de presentación automática de gastos, o preséntalos manualmente',
        frequencies: {
            instant: 'Instante',
            weekly: 'Semanal',
            monthly: 'Mensual',
            twiceAMonth: 'Dos veces al mes',
            byTrip: 'Por viaje',
            manually: 'Manualmente',
            daily: 'Diaria',
            lastDayOfMonth: 'Último día del mes',
            lastBusinessDayOfMonth: 'Último día hábil del mes',
            ordinals: {
                one: 'º',
                two: 'º',
                few: 'º',
                other: 'º',
                /* eslint-disable @typescript-eslint/naming-convention */
                '1': 'Primero',
                '2': 'Segundo',
                '3': 'Tercero',
                '4': 'Cuarto',
                '5': 'Quinto',
                '6': 'Sexto',
                '7': 'Séptimo',
                '8': 'Octavo',
                '9': 'Noveno',
                '10': 'Décimo',
                /* eslint-enable @typescript-eslint/naming-convention */
            },
        },
        approverInMultipleWorkflows: 'Este miembro ya pertenece a otro flujo de aprobación. Cualquier actualización aquí se reflejará allí también.',
        approverCircularReference: ({name1, name2}: ApprovalWorkflowErrorParams) =>
            `<strong>${name1}</strong> ya aprueba informes a <strong>${name2}</strong>. Por favor, elige un aprobador diferente para evitar un flujo de trabajo circular.`,
        emptyContent: {
            title: 'No hay miembros para mostrar',
            expensesFromSubtitle: 'Todos los miembros del espacio de trabajo ya pertenecen a un flujo de aprobación existente.',
            approverSubtitle: 'Todos los aprobadores pertenecen a un flujo de trabajo existente.',
        },
    },
    workflowsDelayedSubmissionPage: {
        autoReportingErrorMessage: 'El parámetro de envío retrasado no pudo ser cambiado. Por favor, inténtelo de nuevo o contacte al soporte.',
        autoReportingFrequencyErrorMessage: 'La frecuencia de envío no pudo ser cambiada. Por favor, inténtelo de nuevo o contacte al soporte.',
        monthlyOffsetErrorMessage: 'La frecuencia mensual no pudo ser cambiada. Por favor, inténtelo de nuevo o contacte al soporte.',
    },
    workflowsCreateApprovalsPage: {
        title: 'Confirmar',
        header: 'Agrega más aprobadores y confirma.',
        additionalApprover: 'Añadir aprobador',
        submitButton: 'Añadir flujo de trabajo',
    },
    workflowsEditApprovalsPage: {
        title: 'Edicion flujo de aprobación',
        deleteTitle: 'Eliminar flujo de trabajo de aprobación',
        deletePrompt: '¿Estás seguro de que quieres eliminar este flujo de trabajo de aprobación? Todos los miembros pasarán a usar el flujo de trabajo predeterminado.',
    },
    workflowsExpensesFromPage: {
        title: 'Gastos de',
        header: 'Cuando los siguientes miembros presenten gastos:',
    },
    workflowsApproverPage: {
        genericErrorMessage: 'El aprobador no pudo ser cambiado. Por favor, inténtelo de nuevo o contacte al soporte.',
        header: 'Enviar a este miembro para su aprobación:',
    },
    workflowsPayerPage: {
        title: 'Pagador autorizado',
        genericErrorMessage: 'El pagador autorizado no se pudo cambiar. Por favor, inténtalo mas tarde.',
        admins: 'Administradores',
        payer: 'Pagador',
        paymentAccount: 'Cuenta de pago',
    },
    reportFraudPage: {
        title: 'Reportar fraude con la tarjeta virtual',
        description:
            'Si los datos de tu tarjeta virtual han sido robados o se han visto comprometidos, desactivaremos permanentemente la tarjeta actual y le proporcionaremos una tarjeta virtual y un número nuevo.',
        deactivateCard: 'Desactivar tarjeta',
        reportVirtualCardFraud: 'Reportar fraude con la tarjeta virtual',
    },
    reportFraudConfirmationPage: {
        title: 'Fraude con tarjeta reportado',
        description: 'Hemos desactivado permanentemente tu tarjeta existente. Cuando vuelvas a ver los detalles de tu tarjeta, tendrás una nueva tarjeta virtual disponible.',
        buttonText: 'Entendido, ¡gracias!',
    },
    activateCardPage: {
        activateCard: 'Activar tarjeta',
        pleaseEnterLastFour: 'Introduce los cuatro últimos dígitos de la tarjeta.',
        activatePhysicalCard: 'Activar tarjeta física',
        error: {
            thatDidNotMatch: 'Los 4 últimos dígitos de tu tarjeta no coinciden. Por favor, inténtalo de nuevo.',
            throttled:
                'Has introducido incorrectamente los 4 últimos dígitos de tu tarjeta Expensify demasiadas veces. Si estás seguro de que los números son correctos, ponte en contacto con Concierge para solucionarlo. De lo contrario, inténtalo de nuevo más tarde.',
        },
    },
    getPhysicalCard: {
        header: 'Obtener tarjeta física',
        nameMessage: 'Introduce tu nombre y apellido como aparecerá en tu tarjeta.',
        legalName: 'Nombre completo',
        legalFirstName: 'Nombre legal',
        legalLastName: 'Apellidos legales',
        phoneMessage: 'Introduce tu número de teléfono.',
        phoneNumber: 'Número de teléfono',
        address: 'Dirección',
        addressMessage: 'Introduce tu dirección de envío.',
        streetAddress: 'Calle de dirección',
        city: 'Ciudad',
        state: 'Estado',
        zipPostcode: 'Código postal',
        country: 'País',
        confirmMessage: 'Por favor confirma tus datos.',
        estimatedDeliveryMessage: 'Tu tarjeta física llegará en 2-3 días laborales.',
        next: 'Siguiente',
        getPhysicalCard: 'Obtener tarjeta física',
        shipCard: 'Enviar tarjeta',
    },
    transferAmountPage: {
        transfer: ({amount}: TransferParams) => `Transferir${amount ? ` ${amount}` : ''}`,
        instant: 'Instante',
        instantSummary: ({rate, minAmount}: InstantSummaryParams) => `Tarifa del ${rate}% (${minAmount} mínimo)`,
        ach: '1-3 días laborales',
        achSummary: 'Sin cargo',
        whichAccount: '¿Qué cuenta?',
        fee: 'Tarifa',
        transferSuccess: '¡Transferencia exitosa!',
        transferDetailBankAccount: 'Tu dinero debería llegar en 1-3 días laborables.',
        transferDetailDebitCard: 'Tu dinero debería llegar de inmediato.',
        failedTransfer: 'Tu saldo no se ha acreditado completamente. Por favor, transfiere los fondos a una cuenta bancaria.',
        notHereSubTitle: 'Por favor, transfiere el saldo desde la página de billetera',
        goToWallet: 'Ir a billetera',
    },
    chooseTransferAccountPage: {
        chooseAccount: 'Elegir cuenta',
    },
    paymentMethodList: {
        addPaymentMethod: 'Añadir método de pago',
        addNewDebitCard: 'Añadir nueva tarjeta de débito',
        addNewBankAccount: 'Añadir nueva cuenta de banco',
        accountLastFour: 'Terminada en',
        cardLastFour: 'Tarjeta terminada en',
        addFirstPaymentMethod: 'Añade un método de pago para enviar y recibir pagos directamente desde la aplicación.',
        defaultPaymentMethod: 'Predeterminado',
        bankAccountLastFour: ({lastFour}: BankAccountLastFourParams) => `Cuenta bancaria • ${lastFour}`,
    },
    preferencesPage: {
        appSection: {
            title: 'Preferencias de la aplicación',
        },
        testSection: {
            title: 'Preferencias para tests',
            subtitle: 'Ajustes para ayudar a depurar y probar la aplicación en “staging”.',
        },
        receiveRelevantFeatureUpdatesAndExpensifyNews: 'Recibir noticias sobre Expensify y actualizaciones del producto',
        muteAllSounds: 'Silenciar todos los sonidos de Expensify',
    },
    priorityModePage: {
        priorityMode: 'Modo prioridad',
        explainerText:
            'Elige #concentración si deseas enfocarte sólo en los chats no leídos y en los anclados, o mostrarlo todo con los chats más recientes y los anclados en la parte superior.',
        priorityModes: {
            default: {
                label: 'Más recientes',
                description: 'Mostrar todos los chats ordenados desde el más reciente',
            },
            gsd: {
                label: '#concentración',
                description: 'Mostrar sólo los no leídos ordenados alfabéticamente',
            },
        },
    },
    reportDetailsPage: {
        inWorkspace: ({policyName}: ReportPolicyNameParams) => `en ${policyName}`,
        generatingPDF: 'Creando PDF',
        waitForPDF: 'Por favor, espera mientras creamos el PDF',
        errorPDF: 'Ocurrió un error al crear el PDF',
        generatedPDF: 'Tu informe PDF ha sido creado!',
    },
    reportDescriptionPage: {
        roomDescription: 'Descripción de la sala de chat',
        roomDescriptionOptional: 'Descripción de la sala de chat (opcional)',
        explainerText: 'Establece una descripción personalizada para la sala de chat.',
    },
    groupChat: {
        lastMemberTitle: '¡Atención!',
        lastMemberWarning: 'Ya que eres la última persona aquí, si te vas, este chat quedará inaccesible para todos los miembros. ¿Estás seguro de que quieres salir del chat?',
        defaultReportName: ({displayName}: ReportArchiveReasonsClosedParams) => `Chat de grupo de ${displayName}`,
    },
    languagePage: {
        language: 'Idioma',
        aiGenerated: 'Las traducciones para este idioma se generan automáticamente y pueden contener errores.',
    },
    themePage: {
        theme: 'Tema',
        themes: {
            dark: {
                label: 'Oscuro',
            },
            light: {
                label: 'Claro',
            },
            system: {
                label: 'Utiliza los ajustes del dispositivo',
            },
        },
        chooseThemeBelowOrSync: 'Elige un tema a continuación o sincronízalo con los ajustes de tu dispositivo.',
    },
    termsOfUse: {
        phrase1: 'Al iniciar sesión, estás accediendo a los',
        phrase2: 'Términos de Servicio',
        phrase3: 'y',
        phrase4: 'Privacidad',
        phrase5: `El envío de dinero es brindado por ${CONST.WALLET.PROGRAM_ISSUERS.EXPENSIFY_PAYMENTS} (NMLS ID:2017010) de conformidad con sus`,
        phrase6: 'licencias',
    },
    validateCodeForm: {
        magicCodeNotReceived: '¿No recibiste un código mágico?',
        enterAuthenticatorCode: 'Por favor, introduce el código de autenticador',
        enterRecoveryCode: 'Por favor, introduce tu código de recuperación',
        requiredWhen2FAEnabled: 'Obligatorio cuando A2F está habilitado',
        requestNewCode: 'Pedir un código nuevo en ',
        requestNewCodeAfterErrorOccurred: 'Solicitar un nuevo código',
        error: {
            pleaseFillMagicCode: 'Por favor, introduce el código mágico.',
            incorrectMagicCode: 'Código mágico incorrecto o no válido. Inténtalo de nuevo o solicita otro código.',
            pleaseFillTwoFactorAuth: 'Por favor, introduce tu código de autenticación de dos factores.',
        },
    },
    passwordForm: {
        pleaseFillOutAllFields: 'Por favor, completa todos los campos',
        pleaseFillPassword: 'Por favor, introduce tu contraseña',
        pleaseFillTwoFactorAuth: 'Por favor, introduce tu código 2 factores',
        enterYourTwoFactorAuthenticationCodeToContinue: 'Introduce el código de autenticación de dos factores para continuar',
        forgot: '¿Has olvidado la contraseña?',
        requiredWhen2FAEnabled: 'Obligatorio cuando A2F está habilitado',
        error: {
            incorrectPassword: 'Contraseña incorrecta. Por favor, inténtalo de nuevo.',
            incorrectLoginOrPassword: 'Usuario o contraseña incorrectos. Por favor, inténtalo de nuevo.',
            incorrect2fa: 'Código de autenticación de dos factores incorrecto. Por favor, inténtalo de nuevo.',
            twoFactorAuthenticationEnabled: 'Tienes autenticación de 2 factores activada en esta cuenta. Por favor, conéctate usando tu correo electrónico o número de teléfono.',
            invalidLoginOrPassword: 'Usuario o clave incorrectos. Por favor, inténtalo de nuevo o restablece la contraseña.',
            unableToResetPassword:
                'No se pudo cambiar tu clave. Probablemente porque el enlace para restablecer la contrasenña ha expirado. Te hemos enviado un nuevo enlace. Comprueba tu bandeja de entrada y carpeta de Spam.',
            noAccess: 'No tienes acceso a esta aplicación. Por favor, añade tu usuario de GitHub para acceder.',
            accountLocked: 'Tu cuenta ha sido bloqueada tras varios intentos fallidos. Por favor, inténtalo de nuevo dentro de una hora.',
            fallback: 'Ha ocurrido un error. Por favor, inténtalo mas tarde.',
        },
    },
    loginForm: {
        phoneOrEmail: 'Número de teléfono o correo electrónico',
        error: {
            invalidFormatEmailLogin: 'El correo electrónico introducido no es válido. Corrígelo e inténtalo de nuevo.',
        },
        cannotGetAccountDetails: 'No se pudieron cargar los detalles de tu cuenta. Por favor, intenta iniciar sesión de nuevo.',
        loginForm: 'Formulario de inicio de sesión',
        notYou: ({user}: NotYouParams) => `¿No eres ${user}?`,
    },
    onboarding: {
        welcome: '¡Bienvenido!',
        welcomeSignOffTitle: '¡Es un placer conocerte!',
        welcomeSignOffTitleManageTeam: 'Una vez que termines las tareas anteriores, podemos explorar más funcionalidades como flujos de aprobación y reglas.',
        explanationModal: {
            title: 'Bienvenido a Expensify',
            description: 'Una aplicación para gestionar en un chat todos los gastos de tu empresa y personales. Inténtalo y dinos qué te parece. ¡Hay mucho más por venir!',
            secondaryDescription: 'Para volver a Expensify Classic, simplemente haz click en tu foto de perfil > Ir a Expensify Classic.',
        },
        welcomeVideo: {
            title: 'Bienvenido a Expensify',
            description: 'Una aplicación para gestionar todos tus gastos de empresa y personales en un chat. Pensada para tu empresa, tu equipo y tus amigos.',
        },
        getStarted: 'Comenzar',
        whatsYourName: '¿Cómo te llamas?',
        peopleYouMayKnow: 'Las personas que tal vez conozcas ya están aquí. Verifica tu correo electrónico para unirte a ellos.',
        workspaceMemberList: ({employeeCount, policyOwner}: WorkspaceMemberList) => `${employeeCount} miembro${employeeCount > 1 ? 's' : ''} • ${policyOwner}`,
        workspaceYouMayJoin: ({domain, email}: WorkspaceYouMayJoin) => `Alguien de ${domain} ya ha creado un espacio de trabajo. Por favor, introduce el código mágico enviado a ${email}.`,
        joinAWorkspace: 'Unirse a un espacio de trabajo',
        listOfWorkspaces: 'Aquí está la lista de espacios de trabajo a los que puedes unirte. No te preocupes, siempre puedes unirte a ellos más tarde si lo prefieres.',
        whereYouWork: '¿Dónde trabajas?',
        errorSelection: 'Selecciona una opción para continuar',
        purpose: {
            title: '¿Qué quieres hacer hoy?',
            errorContinue: 'Por favor, haz click en continuar para configurar tu cuenta',
            errorBackButton: 'Por favor, finaliza las preguntas de configuración para empezar a utilizar la aplicación',
            [CONST.ONBOARDING_CHOICES.EMPLOYER]: 'Cobrar de mi empresa',
            [CONST.ONBOARDING_CHOICES.MANAGE_TEAM]: 'Gestionar los gastos de mi equipo',
            [CONST.ONBOARDING_CHOICES.PERSONAL_SPEND]: 'Controlar y presupuestar gastos',
            [CONST.ONBOARDING_CHOICES.CHAT_SPLIT]: 'Chatea y divide gastos con tus amigos',
            [CONST.ONBOARDING_CHOICES.LOOKING_AROUND]: 'Algo más',
        },
        employees: {
            title: '¿Cuántos empleados tienes?',
            [CONST.ONBOARDING_COMPANY_SIZE.MICRO]: '1-10 empleados',
            [CONST.ONBOARDING_COMPANY_SIZE.SMALL]: '11-50 empleados',
            [CONST.ONBOARDING_COMPANY_SIZE.MEDIUM_SMALL]: '51-100 empleados',
            [CONST.ONBOARDING_COMPANY_SIZE.MEDIUM]: '101-1,000 empleados',
            [CONST.ONBOARDING_COMPANY_SIZE.LARGE]: 'Más de 1,000 empleados',
        },
        accounting: {
            title: '¿Utilizas algún software de contabilidad?',
            none: 'Ninguno',
        },
        error: {
            requiredFirstName: 'Introduce tu nombre para continuar',
        },
        workEmail: {
            title: 'Cuál es tu correo electrónico de trabajo',
            subtitle: 'Expensify funciona mejor cuando conectas tu correo electrónico de trabajo.',
            explanationModal: {
                descriptionOne: 'Reenvía a receipts@expensify.com para escanear',
                descriptionTwo: 'Únete a tus compañeros de trabajo que ya están usando Expensify',
                descriptionThree: 'Disfruta de una experiencia más personalizada',
            },
            addWorkEmail: 'Añadir correo electrónico de trabajo',
        },
        workEmailValidation: {
            title: 'Verifica tu correo electrónico de trabajo',
            magicCodeSent: ({workEmail}: WorkEmailResendCodeParams) => `Por favor, introduce el código mágico enviado a ${workEmail}. Debería llegar en uno o dos minutos.`,
        },
        workEmailValidationError: {
            publicEmail: 'Por favor, introduce un correo electrónico laboral válido de un dominio privado, por ejemplo: mitch@company.com',
            offline: 'No pudimos añadir tu correo electrónico laboral porque parece que estás sin conexión.',
        },
        mergeBlockScreen: {
            title: 'No se pudo añadir el correo electrónico de trabajo',
            subtitle: ({workEmail}: WorkEmailMergingBlockedParams) =>
                `No pudimos añadir ${workEmail}. Por favor, inténtalo de nuevo más tarde en Configuración o chatea con Concierge para obtener ayuda.`,
        },
        tasks: {
            testDriveAdminTask: {
                title: ({testDriveURL}) => `Haz una [prueba](${testDriveURL})`,
                description: ({testDriveURL}) => `[Haz un recorrido rápido por el producto](${testDriveURL}) para ver por qué Expensify es la forma más rápida de gestionar tus gastos.`,
            },
            testDriveEmployeeTask: {
                title: ({testDriveURL}) => `Haz una [prueba](${testDriveURL})`,
                description: ({testDriveURL}) => `Haz una [prueba](${testDriveURL}) y consigue *3 meses gratis de Expensify para tu equipo!*`,
            },
            createTestDriveAdminWorkspaceTask: {
                title: ({workspaceConfirmationLink}) => `[Crea](${workspaceConfirmationLink}) un espacio de trabajo`,
                description: 'Crea un espacio de trabajo y configura los ajustes con la ayuda de tu especialista asignado.',
            },
            createWorkspaceTask: {
                title: ({workspaceSettingsLink}) => `Crea un [espacio de trabajo](${workspaceSettingsLink})`,
                description: ({workspaceSettingsLink}) =>
                    '*Crea un espacio de trabajo* para organizar gastos, escanear recibos, chatear y más.\n\n' +
                    '1. Haz clic en *Espacios de trabajo* > *Nuevo espacio de trabajo*.\n\n' +
                    `*¡Tu nuevo espacio de trabajo está listo!* [Échale un vistazo](${workspaceSettingsLink}).`,
            },
            setupCategoriesTask: {
                title: ({workspaceCategoriesLink}) => `Configura [categorías](${workspaceCategoriesLink})`,
                description: ({workspaceCategoriesLink}) =>
                    '*Configura categorías* para que tu equipo pueda clasificar los gastos y facilitar los informes.\n\n' +
                    '1. Haz clic en *Espacios de trabajo*.\n' +
                    '3. Selecciona tu espacio de trabajo.\n' +
                    '4. Haz clic en *Categorías*.\n' +
                    '5. Desactiva cualquier categoría que no necesites.\n' +
                    '6. Añade tus propias categorías en la esquina superior derecha.\n\n' +
                    `[Ir a la configuración de categorías del espacio de trabajo](${workspaceCategoriesLink}).\n\n` +
                    `![Configura categorías](${CONST.CLOUDFRONT_URL}/videos/walkthrough-categories-v2.mp4)`,
            },
            combinedTrackSubmitExpenseTask: {
                title: 'Envía un gasto',
                description:
                    '*Envía un gasto* introduciendo una cantidad o escaneando un recibo.\n\n' +
                    '1. Haz clic en el botón verde *+*.\n' +
                    '2. Elige *Crear gasto*.\n' +
                    '3. Introduce una cantidad o escanea un recibo.\n' +
                    '4. Añade el correo o teléfono de tu jefe.\n' +
                    '5. Haz clic en *Crear*.\n\n' +
                    '¡Y listo!',
            },
            adminSubmitExpenseTask: {
                title: 'Envía un gasto',
                description:
                    '*Envía un gasto* introduciendo una cantidad o escaneando un recibo.\n\n' +
                    '1. Haz clic en el botón verde *+*.\n' +
                    '2. Elige *Crear gasto*.\n' +
                    '3. Introduce una cantidad o escanea un recibo.\n' +
                    '4. Confirma los detalles.\n' +
                    '5. Haz clic en *Crear*.\n\n' +
                    '¡Y listo!',
            },
            trackExpenseTask: {
                title: 'Organiza un gasto',
                description:
                    '*Organiza un gasto* en cualquier moneda, tengas recibo o no.\n\n' +
                    '1. Haz clic en el botón verde *+*.\n' +
                    '2. Elige *Crear gasto*.\n' +
                    '3. Introduce una cantidad o escanea un recibo.\n' +
                    '4. Elige tu espacio *personal*.\n' +
                    '5. Haz clic en *Crear*.\n\n' +
                    '¡Y listo! Sí, así de fácil.',
            },
            addAccountingIntegrationTask: {
                title: ({integrationName, workspaceAccountingLink}) =>
                    `Conéctate${integrationName === CONST.ONBOARDING_ACCOUNTING_MAPPING.other ? '' : ' a'} [${integrationName === CONST.ONBOARDING_ACCOUNTING_MAPPING.other ? 'tu' : ''} ${integrationName}](${workspaceAccountingLink})`,

                description: ({integrationName, workspaceAccountingLink}) =>
                    `Conéctate ${integrationName === CONST.ONBOARDING_ACCOUNTING_MAPPING.other ? 'tu' : 'a'} ${integrationName} para la clasificación y sincronización automática de gastos, lo que facilita el cierre de fin de mes.\n` +
                    '\n' +
                    '1. Haz clic en *Espacios de trabajo*.\n' +
                    '2. Selecciona tu espacio de trabajo.\n' +
                    '3. Haz clic en *Contabilidad*.\n' +
                    `4. Busca ${integrationName}.\n` +
                    '5. Haz clic en *Conectar*.\n' +
                    '\n' +
                    `${
                        integrationName && CONST.connectionsVideoPaths[integrationName]
                            ? `[Ir a contabilidad](${workspaceAccountingLink}).\n\n![Conéctate a ${integrationName}](${CONST.CLOUDFRONT_URL}/${CONST.connectionsVideoPaths[integrationName]})`
                            : `[Ir a contabilidad](${workspaceAccountingLink}).`
                    }`,
            },
            connectCorporateCardTask: {
                title: ({corporateCardLink}) => `Conecta [tu tarjeta corporativa](${corporateCardLink})`,
                description: ({corporateCardLink}) =>
                    'Conecta tu tarjeta corporativa para importar y clasificar gastos automáticamente.\n\n' +
                    '1. Haz clic en *Espacios de trabajo*.\n' +
                    '2. Selecciona tu espacio de trabajo.\n' +
                    '3. Haz clic en *Tarjetas corporativas*.\n' +
                    '4. Sigue las instrucciones para conectar tu tarjeta.\n\n' +
                    `[Ir a conectar mis tarjetas corporativas](${corporateCardLink}).`,
            },
            inviteTeamTask: {
                title: ({workspaceMembersLink}) => `Invita a [tu equipo](${workspaceMembersLink})`,
                description: ({workspaceMembersLink}) =>
                    '*Invita a tu equipo* a Expensify para que empiecen a organizar gastos hoy mismo.\n\n' +
                    '1. Haz clic en *Espacios de trabajo*.\n' +
                    '3. Selecciona tu espacio de trabajo.\n' +
                    '4. Haz clic en *Miembros* > *Invitar miembro*.\n' +
                    '5. Introduce correos o teléfonos.\n' +
                    '6. Añade un mensaje personalizado si lo deseas.\n\n' +
                    `[Ir a miembros del espacio de trabajo](${workspaceMembersLink}).\n\n` +
                    `![Invita a tu equipo](${CONST.CLOUDFRONT_URL}/videos/walkthrough-invite_members-v2.mp4)`,
            },
            setupCategoriesAndTags: {
                title: ({workspaceCategoriesLink, workspaceMoreFeaturesLink}) => `Configura [categorías](${workspaceCategoriesLink}) y [etiquetas](${workspaceMoreFeaturesLink})`,
                description: ({workspaceCategoriesLink, workspaceAccountingLink}) =>
                    '*Configura categorías y etiquetas* para que tu equipo pueda clasificar los gastos fácilmente.\n\n' +
                    `Impórtalas automáticamente al [conectarte con tu software contable](${workspaceAccountingLink}), o configúralas manualmente en tu [configuración del espacio de trabajo](${workspaceCategoriesLink}).`,
            },
            setupTagsTask: {
                title: ({workspaceMoreFeaturesLink}) => `Configura [etiquetas](${workspaceMoreFeaturesLink})`,
                description: ({workspaceMoreFeaturesLink}) =>
                    'Usa etiquetas para añadir detalles como proyectos, clientes, ubicaciones y departamentos. Si necesitas múltiples niveles, puedes mejorar al plan Controlar.\n\n' +
                    '1. Haz clic en *Espacios de trabajo*.\n' +
                    '3. Selecciona tu espacio de trabajo.\n' +
                    '4. Haz clic en *Más funciones*.\n' +
                    '5. Habilita *Etiquetas*.\n' +
                    '6. Navega a *Etiquetas* en el editor del espacio.\n' +
                    '7. Haz clic en *+ Añadir etiqueta* para crear la tuya.\n\n' +
                    `[Ir a más funciones](${workspaceMoreFeaturesLink}).\n\n` +
                    `![Configura etiquetas](${CONST.CLOUDFRONT_URL}/videos/walkthrough-tags-v2.mp4)`,
            },
            inviteAccountantTask: {
                title: ({workspaceMembersLink}) => `Invita a tu [contador](${workspaceMembersLink})`,
                description: ({workspaceMembersLink}) =>
                    '*Invita a tu contador* para que colabore en tu espacio de trabajo y gestione los gastos de tu negocio.\n' +
                    '\n' +
                    '1. Haz clic en *Espacios de trabajo*.\n' +
                    '2. Selecciona tu espacio de trabajo.\n' +
                    '3. Haz clic en *Miembros*.\n' +
                    '4. Haz clic en *Invitar miembro*.\n' +
                    '5. Introduce la dirección de correo electrónico de tu contador.\n' +
                    '\n' +
                    `[Invita a tu contador ahora](${workspaceMembersLink}).`,
            },
            startChatTask: {
                title: 'Inicia un chat',
                description:
                    '*Inicia un chat* con cualquier persona usando su correo o número.\n\n' +
                    '1. Haz clic en el botón verde *+*.\n' +
                    '2. Elige *Iniciar chat*.\n' +
                    '3. Introduce un correo o teléfono.\n\n' +
                    'Si aún no usan Expensify, se les invitará automáticamente.\n\n' +
                    'Cada chat también se convierte en un correo o mensaje de texto al que pueden responder directamente.',
            },
            splitExpenseTask: {
                title: 'Divide un gasto',
                description:
                    '*Divide gastos* con una o más personas.\n\n' +
                    '1. Haz clic en el botón verde *+*.\n' +
                    '2. Elige *Iniciar chat*.\n' +
                    '3. Introduce correos o teléfonos.\n' +
                    '4. Haz clic en el botón gris *+* en el chat > *Dividir gasto*.\n' +
                    '5. Crea el gasto seleccionando *Manual*, *Escanear* o *Distancia*.\n\n' +
                    'Puedes añadir más detalles si quieres, o simplemente enviarlo. ¡Vamos a que te reembolsen!',
            },
            reviewWorkspaceSettingsTask: {
                title: ({workspaceSettingsLink}) => `Revisa tu [configuración del espacio de trabajo](${workspaceSettingsLink})`,
                description: ({workspaceSettingsLink}) =>
                    'Así es como puedes revisar y actualizar la configuración de tu espacio de trabajo:\n' +
                    '1. Haz clic en la pestaña de configuración.\n' +
                    '2. Haz clic en *Espacios de trabajo* > [Tu espacio de trabajo].\n' +
                    `[Ir a tu espacio de trabajo](${workspaceSettingsLink}). Lo rastrearemos en la sala #admins.`,
            },
            createReportTask: {
                title: 'Crea tu primer informe',
                description:
                    'Así es como puedes crear un informe:\n' +
                    '\n' +
                    '1. Haz clic en el botón verde *+*.\n' +
                    '2. Elige *Crear informe*.\n' +
                    '3. Haz clic en *Añadir gasto*.\n' +
                    '4. Añade tu primer gasto.\n' +
                    '\n' +
                    '¡Y listo!',
            },
        } satisfies Record<string, Pick<OnboardingTask, 'title' | 'description'>>,
        testDrive: {
            name: ({testDriveURL}: {testDriveURL?: string}) => (testDriveURL ? `Haz una [prueba](${testDriveURL})` : 'Haz una prueba'),
            embeddedDemoIframeTitle: 'Prueba',
            employeeFakeReceipt: {
                description: '¡Mi recibo de prueba!',
            },
        },
        messages: {
            onboardingEmployerOrSubmitMessage: 'Que te reembolsen es tan fácil como enviar un mensaje. Repasemos lo básico.',
            onboardingPersonalSpendMessage: 'Aquí tienes cómo organizar tus gastos en unos pocos clics.',
            onboardingMangeTeamMessage: ({onboardingCompanySize}: {onboardingCompanySize?: OnboardingCompanySize}) =>
                `Aquí tienes una lista de tareas recomendadas para una empresa de tu tamaño${onboardingCompanySize ? ` con ${onboardingCompanySize} remitentes` : ':'}`,
            onboardingTrackWorkspaceMessage:
                '# Vamos a configurarte\n👋 ¡Estoy aquí para ayudarte! Para comenzar, he personalizado la configuración de tu espacio de trabajo para propietarios únicos y negocios similares. Puedes ajustar tu espacio de trabajo haciendo clic en el enlace de abajo.\n\nAsí es como puedes organizar tus gastos en unos pocos clics:',
            onboardingChatSplitMessage: 'Dividir cuentas con amigos es tan fácil como enviar un mensaje. Así se hace.',
            onboardingAdminMessage: 'Aprende a gestionar el espacio de tu equipo como administrador y enviar tus propios gastos.',
            onboardingLookingAroundMessage:
                'Expensify es conocido por gastos, viajes y gestión de tarjetas corporativas, pero hacemos mucho más. Dime qué te interesa y te ayudaré a empezar.',
            onboardingTestDriveReceiverMessage: '*¡Tienes 3 meses gratis! Empieza abajo.*',
        },
        workspace: {
            title: 'Mantente organizado con un espacio de trabajo',
            subtitle: 'Desbloquea herramientas potentes para simplificar la gestión de tus gastos, todo en un solo lugar. Con un espacio de trabajo, puedes:',
            explanationModal: {
                descriptionOne: 'Organiza recibos',
                descriptionTwo: 'Clasifica y etiqueta gastos',
                descriptionThree: 'Crea y comparte informes',
            },
            price: 'Pruébalo gratis durante 30 días y luego mejora por solo <strong>$5/mes</strong>.',
            createWorkspace: 'Crear espacio de trabajo',
        },
        confirmWorkspace: {
            title: 'Confirmar espacio de trabajo',
            subtitle: 'Crea un espacio de trabajo para organizar recibos, reembolsar gastos, gestionar viajes, crear informes y más, todo a la velocidad del chat.',
        },
        inviteMembers: {
            title: 'Invita a miembros',
            subtitle: 'Añade a tu equipo o invita a tu contador. ¡Cuantos más, mejor!',
        },
    },
    featureTraining: {
        doNotShowAgain: 'No muestres esto otra vez',
    },
    personalDetails: {
        error: {
            containsReservedWord: 'El nombre no puede contener las palabras Expensify o Concierge',
            hasInvalidCharacter: 'El nombre no puede contener una coma o un punto y coma',
            requiredFirstName: 'El nombre no puede estar vacío',
        },
    },
    privatePersonalDetails: {
        enterLegalName: '¿Cuál es tu nombre legal?',
        enterDateOfBirth: '¿Cuál es tu fecha de nacimiento?',
        enterAddress: '¿Cuál es tu dirección?',
        enterPhoneNumber: '¿Cuál es tu número de teléfono?',
        personalDetails: 'Datos personales',
        privateDataMessage: 'Estos detalles se utilizan para viajes y pagos. Nunca se mostrarán en tu perfil público.',
        legalName: 'Nombre completo',
        legalFirstName: 'Nombre legal',
        legalLastName: 'Apellidos legales',
        address: 'Dirección',
        error: {
            dateShouldBeBefore: ({dateString}: DateShouldBeBeforeParams) => `La fecha debe ser anterior a ${dateString}`,
            dateShouldBeAfter: ({dateString}: DateShouldBeAfterParams) => `La fecha debe ser posterior a ${dateString}`,
            incorrectZipFormat: ({zipFormat}: IncorrectZipFormatParams = {}) => `Formato de código postal incorrecto.${zipFormat ? ` Formato aceptable: ${zipFormat}` : ''}`,
            hasInvalidCharacter: 'El nombre sólo puede incluir caracteres latinos',
            invalidPhoneNumber: `Asegúrese de que el número de teléfono sean válidos (p. ej. ${CONST.EXAMPLE_PHONE_NUMBER})`,
        },
    },
    resendValidationForm: {
        linkHasBeenResent: 'El enlace se ha reenviado',
        weSentYouMagicSignInLink: ({login, loginType}: WeSentYouMagicSignInLinkParams) =>
            `Te he enviado un hiperenlace mágico para iniciar sesión a ${login}. Por favor, revisa tu ${loginType}`,
        resendLink: 'Reenviar enlace',
    },
    unlinkLoginForm: {
        toValidateLogin: ({primaryLogin, secondaryLogin}: ToValidateLoginParams) =>
            `Para validar ${secondaryLogin}, reenvía el código mágico desde la Configuración de la cuenta de ${primaryLogin}.`,
        noLongerHaveAccess: ({primaryLogin}: NoLongerHaveAccessParams) => `Si ya no tienes acceso a ${primaryLogin} por favor, desvincula las cuentas.`,
        unlink: 'Desvincular',
        linkSent: '¡Enlace enviado!',
        successfullyUnlinkedLogin: '¡Nombre de usuario secundario desvinculado correctamente!',
    },
    emailDeliveryFailurePage: {
        ourEmailProvider: ({login}: OurEmailProviderParams) =>
            `Nuestro proveedor de correo electrónico ha suspendido temporalmente los correos electrónicos a ${login} debido a problemas de entrega. Para desbloquear el inicio de sesión, sigue estos pasos:`,
        confirmThat: ({login}: ConfirmThatParams) => `Confirma que ${login} está escrito correctamente y que es una dirección de correo electrónico real que puede recibir correos. `,
        emailAliases:
            'Los alias de correo electrónico como "expenses@domain.com" deben tener acceso a tu propia bandeja de entrada de correo electrónico para que sea un inicio de sesión válido de Expensify.',
        ensureYourEmailClient: 'Asegúrese de que tu cliente de correo electrónico permita correos electrónicos de expensify.com. ',
        youCanFindDirections: 'Puedes encontrar instrucciones sobre cómo completar este paso ',
        helpConfigure: ', pero es posible que necesites que el departamento de informática te ayude a configurar los ajustes de correo electrónico.',
        onceTheAbove: 'Una vez completados los pasos anteriores, ponte en contacto con ',
        toUnblock: ' para desbloquear el inicio de sesión.',
    },
    smsDeliveryFailurePage: {
        smsDeliveryFailureMessage: ({login}: OurEmailProviderParams) =>
            `No hemos podido entregar mensajes SMS a ${login}, así que lo hemos suspendido temporalmente. Por favor, intenta validar tu número:`,
        validationSuccess: '¡Tu número ha sido validado! Haz clic abajo para enviar un nuevo código mágico de inicio de sesión.',
        validationFailed: ({timeData}: {timeData?: {days?: number; hours?: number; minutes?: number} | null}) => {
            if (!timeData) {
                return 'Por favor, espera un momento antes de intentarlo de nuevo.';
            }

            const timeParts = [];
            if (timeData.days) {
                timeParts.push(`${timeData.days} ${timeData.days === 1 ? 'día' : 'días'}`);
            }

            if (timeData.hours) {
                timeParts.push(`${timeData.hours} ${timeData.hours === 1 ? 'hora' : 'horas'}`);
            }

            if (timeData.minutes) {
                timeParts.push(`${timeData.minutes} ${timeData.minutes === 1 ? 'minuto' : 'minutos'}`);
            }

            let timeText = '';
            if (timeParts.length === 1) {
                timeText = timeParts.at(0) ?? '';
            } else if (timeParts.length === 2) {
                timeText = `${timeParts.at(0)} y ${timeParts.at(1)}`;
            } else if (timeParts.length === 3) {
                timeText = `${timeParts.at(0)}, ${timeParts.at(1)}, y ${timeParts.at(2)}`;
            }

            return `¡Un momento! Debes esperar ${timeText} antes de intentar validar tu número nuevamente.`;
        },
    },
    welcomeSignUpForm: {
        join: 'Unirse',
    },
    detailsPage: {
        localTime: 'Hora local',
    },
    newChatPage: {
        startGroup: 'Crear grupo',
        addToGroup: 'Añadir al grupo',
    },
    yearPickerPage: {
        year: 'Año',
        selectYear: 'Por favor, selecciona un año',
    },
    focusModeUpdateModal: {
        title: '¡Bienvenido al modo #concentración!',
        prompt: 'Mantente al tanto de todo viendo sólo los chats no leídos o los que necesitan tu atención. No te preocupes, puedes cambiar el ajuste en cualquier momento desde la ',
        settings: 'configuración',
    },
    notFound: {
        chatYouLookingForCannotBeFound: 'El chat que estás buscando no se pudo encontrar.',
        getMeOutOfHere: 'Sácame de aquí',
        iouReportNotFound: 'Los detalles del pago que estás buscando no se pudieron encontrar.',
        notHere: 'Hmm… no está aquí',
        pageNotFound: 'Ups, no deberías estar aquí',
        noAccess: 'Es posible que este chat o gasto haya sido eliminado o que no tengas acceso a él. \n\nPara cualquier consulta, contáctanos a través de concierge@expensify.com',
        goBackHome: 'Volver a la página principal',
    },
    errorPage: {
        title: ({isBreakLine}: {isBreakLine: boolean}) => `Ups... ${isBreakLine ? '\n' : ''}Algo no ha ido bien`,
        subtitle: 'No se ha podido completar la acción. Por favor, inténtalo más tarde.',
    },
    setPasswordPage: {
        enterPassword: 'Escribe una contraseña',
        setPassword: 'Configura tu contraseña',
        newPasswordPrompt: 'La contraseña debe tener al menos 8 caracteres, 1 letra mayúscula, 1 letra minúscula y 1 número.',
        passwordFormTitle: '¡Bienvenido de vuelta a New Expensify! Por favor, elige una contraseña.',
        passwordNotSet: 'No se pudo cambiar tu clave. Te hemos enviado un nuevo enlace para que intentes cambiar la clave nuevamente.',
        setPasswordLinkInvalid: 'El enlace para configurar tu contraseña ha expirado. Te hemos enviado un nuevo enlace a tu correo.',
        validateAccount: 'Verificar cuenta',
    },
    statusPage: {
        status: 'Estado',
        statusExplanation: 'Añade un emoji para que tus colegas y amigos puedan saber fácilmente qué está pasando. ¡También puedes añadir un mensaje opcionalmente!',
        today: 'Hoy',
        clearStatus: 'Borrar estado',
        save: 'Guardar',
        message: 'Mensaje',
        timePeriods: {
            never: 'Nunca',
            thirtyMinutes: '30 minutos',
            oneHour: '1 hora',
            afterToday: 'Hoy',
            afterWeek: 'Una semana',
            custom: 'Personalizado',
        },
        untilTomorrow: 'Hasta mañana',
        untilTime: ({time}: UntilTimeParams) => {
            // Check for HH:MM AM/PM format and starts with '01:'
            if (CONST.REGEX.TIME_STARTS_01.test(time)) {
                return `Hasta la ${time}`;
            }
            // Check for any HH:MM AM/PM format not starting with '01:'
            if (CONST.REGEX.TIME_FORMAT.test(time)) {
                return `Hasta las ${time}`;
            }
            // Check for date-time format like "06-29 11:30 AM"
            if (CONST.REGEX.DATE_TIME_FORMAT.test(time)) {
                return `Hasta el día ${time}`;
            }
            // Default case
            return `Hasta ${time}`;
        },
        date: 'Fecha',
        time: 'Hora',
        clearAfter: 'Borrar después',
        whenClearStatus: '¿Cuándo deberíamos borrar tu estado?',
        vacationDelegate: 'Delegado de vacaciones',
        setVacationDelegate: 'Configura un delegado de vacaciones para aprobar informes en tu nombre mientras estás fuera de la oficina.',
        vacationDelegateError: 'Hubo un error al actualizar tu delegado de vacaciones.',
        asVacationDelegate: ({nameOrEmail: managerName}: VacationDelegateParams) => `como delegado de vacaciones de ${managerName}`,
        toAsVacationDelegate: ({submittedToName, vacationDelegateName}: SubmittedToVacationDelegateParams) => `a ${submittedToName} como delegado de vacaciones de ${vacationDelegateName}`,
        vacationDelegateWarning: ({nameOrEmail}: VacationDelegateParams) =>
            `Está asignando a ${nameOrEmail} como su delegado de vacaciones. Aún no está en todos sus espacios de trabajo. Si decide continuar, se enviará un correo electrónico a todos los administradores de sus espacios de trabajo para agregarlo.`,
    },
    stepCounter: ({step, total, text}: StepCounterParams) => {
        let result = `Paso ${step}`;

        if (total) {
            result = `${result} de ${total}`;
        }

        if (text) {
            result = `${result}: ${text}`;
        }
        return result;
    },
    bankAccount: {
        bankInfo: 'Información bancaria',
        confirmBankInfo: 'Confirmar información bancaria',
        manuallyAdd: '¿Cuáles son los detalles de tu cuenta bancaria comercial?',
        letsDoubleCheck: 'Verifiquemos que todo esté correcto.',
        accountEnding: 'Cuenta terminada en',
        thisBankAccount: 'Esta cuenta bancaria se utilizará para pagos comerciales en tu espacio de trabajo',
        accountNumber: 'Número de cuenta',
        routingNumber: 'Número de ruta',
        chooseAnAccountBelow: 'Elige una cuenta a continuación',
        addBankAccount: 'Añadir cuenta bancaria',
        chooseAnAccount: 'Elige una cuenta',
        connectOnlineWithPlaid: 'Inicia sesión en tu banco',
        connectManually: 'Conectar manualmente',
        desktopConnection: 'Para conectarse con Chase, Wells Fargo, Capital One o Bank of America, haz clic aquí para completar este proceso en un navegador.',
        yourDataIsSecure: 'Tus datos están seguros',
        toGetStarted: 'Conecta una cuenta bancaria para reembolsar gastos, emitir Tarjetas Expensify, y cobrar y pagar facturas todo desde un mismo lugar.',
        plaidBodyCopy: 'Ofrezca a sus empleados una forma más sencilla de pagar - y recuperar - los gastos de la empresa.',
        checkHelpLine: 'Tus números de ruta y de cuenta se pueden encontrar en un cheque de la cuenta bancaria.',
        hasPhoneLoginError: ({contactMethodRoute}: ContactMethodParams) =>
            `Para añadir una cuenta bancaria verificada, <a href="${contactMethodRoute}">asegúrate de que tu nombre de usuario principal sea un correo electrónico válido</a> y vuelve a intentarlo. Puedes añadir tu número de teléfono como nombre de usuario secundario.`,
        hasBeenThrottledError: 'Se ha producido un error al intentar añadir tu cuenta bancaria. Por favor, espera unos minutos e inténtalo de nuevo.',
        hasCurrencyError: ({workspaceRoute}: WorkspaceRouteParams) =>
            `¡Ups! Parece que la moneda de tu espacio de trabajo no está configurada en USD. Para continuar, ve a <a href="${workspaceRoute}">la configuración del área de trabajo</a>, configúrala en USD e inténtalo nuevamente.`,
        error: {
            youNeedToSelectAnOption: 'Debes seleccionar una opción para continuar',
            noBankAccountAvailable: 'Lo sentimos, no hay ninguna cuenta bancaria disponible',
            noBankAccountSelected: 'Por favor, elige una cuenta bancaria',
            taxID: 'Por favor, introduce un número de identificación fiscal válido',
            website: 'Por favor, introduce un sitio web válido',
            zipCode: `Formato de código postal incorrecto. Formato aceptable: ${CONST.COUNTRY_ZIP_REGEX_DATA.US.samples}.`,
            phoneNumber: 'Por favor, introduce un teléfono válido',
            email: 'Por favor, introduce una dirección de correo electrónico válida',
            companyName: 'Por favor, introduce un nombre comercial legal válido',
            addressCity: 'Por favor, introduce una ciudad válida',
            addressStreet: 'Por favor, introduce una dirección válida que no sea un apartado postal',
            addressState: 'Por favor, selecciona un estado',
            incorporationDateFuture: 'La fecha de incorporación no puede ser futura',
            incorporationState: 'Por favor, selecciona una estado válido',
            industryCode: 'Por favor, introduce un código de clasificación de industria válido',
            restrictedBusiness: 'Por favor, confirma que la empresa no está en la lista de negocios restringidos',
            routingNumber: 'Por favor, introduce un número de ruta válido',
            accountNumber: 'Por favor, introduce un número de cuenta válido',
            routingAndAccountNumberCannotBeSame: 'Los números de ruta y de cuenta no pueden ser iguales',
            companyType: 'Por favor, selecciona un tipo de compañía válido',
            tooManyAttempts:
                'Debido a la gran cantidad de intentos de inicio de sesión, esta opción ha sido desactivada temporalmente durante 24 horas. Por favor, inténtalo de nuevo más tarde.',
            address: 'Por favor, introduce una dirección válida',
            dob: 'Por favor, selecciona una fecha de nacimiento válida',
            age: 'Debe ser mayor de 18 años',
            ssnLast4: 'Por favor, introduce los últimos 4 dígitos del número de seguridad social',
            firstName: 'Por favor, introduce el nombre',
            lastName: 'Por favor, introduce los apellidos',
            noDefaultDepositAccountOrDebitCardAvailable: 'Por favor, añade una cuenta bancaria para depósitos o una tarjeta de débito',
            validationAmounts: 'Los importes de validación que introduciste son incorrectos. Por favor, comprueba tu cuenta bancaria e inténtalo de nuevo.',
            fullName: 'Por favor, introduce un nombre completo válido',
            ownershipPercentage: 'Por favor, ingrese un número de porcentaje válido',
        },
    },
    addPersonalBankAccount: {
        countrySelectionStepHeader: '¿Dónde está ubicada tu cuenta bancaria?',
        accountDetailsStepHeader: '¿Cuáles son los detalles de tu cuenta?',
        accountTypeStepHeader: '¿Qué tipo de cuenta es esta?',
        bankInformationStepHeader: '¿Cuáles son los detalles de tu banco?',
        accountHolderInformationStepHeader: '¿Cuáles son los detalles del titular de la cuenta?',
        howDoWeProtectYourData: '¿Cómo protegemos tus datos?',
        currencyHeader: '¿Cuál es la moneda de tu cuenta bancaria?',
        confirmationStepHeader: 'Verifica tu información.',
        confirmationStepSubHeader: 'Verifica dos veces los detalles a continuación y marca la casilla de términos para confirmar.',
    },
    addPersonalBankAccountPage: {
        enterPassword: 'Escribe tu contraseña de Expensify',
        alreadyAdded: 'Esta cuenta ya ha sido añadida.',
        chooseAccountLabel: 'Cuenta',
        successTitle: '¡Cuenta bancaria personal añadida!',
        successMessage: 'Enhorabuena, tu cuenta bancaria está lista para recibir reembolsos.',
    },
    attachmentView: {
        unknownFilename: 'Archivo desconocido',
        passwordRequired: 'Por favor, introduce tu contraseña',
        passwordIncorrect: 'Contraseña incorrecta. Por favor, inténtalo de nuevo.',
        failedToLoadPDF: 'Se ha producido un error al intentar cargar el PDF',
        pdfPasswordForm: {
            title: 'PDF protegido con contraseña',
            infoText: 'Este PDF esta protegido con contraseña.',
            beforeLinkText: 'Por favor',
            linkText: 'introduce la contraseña',
            afterLinkText: 'para verlo.',
            formLabel: 'Ver PDF',
        },
        attachmentNotFound: 'Archivo adjunto no encontrado',
    },
    messages: {
        errorMessageInvalidPhone: `Por favor, introduce un número de teléfono válido sin paréntesis o guiones. Si reside fuera de Estados Unidos, por favor incluye el prefijo internacional (p. ej. ${CONST.EXAMPLE_PHONE_NUMBER}).`,
        errorMessageInvalidEmail: 'Correo electrónico inválido',
        userIsAlreadyMember: ({login, name}: UserIsAlreadyMemberParams) => `${login} ya es miembro de ${name}`,
    },
    onfidoStep: {
        acceptTerms: 'Al continuar con la solicitud para activar tu Billetera Expensify, confirma que ha leído, comprende y acepta ',
        facialScan: 'Política y lanzamiento de la exploración facial de Onfido',
        tryAgain: 'Intentar otra vez',
        verifyIdentity: 'Verificar identidad',
        letsVerifyIdentity: '¡Vamos a verificar tu identidad!',
        butFirst: 'Pero primero, lo aburrido. Lee la jerga legal en el siguiente paso y haz clic en "Aceptar" cuando estés listo.',
        genericError: 'Se ha producido un error al procesar este paso. Inténtalo de nuevo.',
        cameraPermissionsNotGranted: 'Permiso para acceder a la cámara',
        cameraRequestMessage: 'Necesitamos acceso a tu cámara para completar la verificación de tu cuenta de banco. Por favor habilita los permisos en Configuración > New Expensify.',
        microphonePermissionsNotGranted: 'Permiso para acceder al micrófono',
        microphoneRequestMessage: 'Necesitamos acceso a tu micrófono para completar la verificación de tu cuenta de banco. Por favor habilita los permisos en Configuración > New Expensify.',
        originalDocumentNeeded: 'Por favor, sube una imagen original de tu identificación en lugar de una captura de pantalla o imagen escaneada.',
        documentNeedsBetterQuality:
            'Parece que tu identificación esta dañado o le faltan características de seguridad. Por favor, sube una imagen de tu documento sin daños y que se vea completamente.',
        imageNeedsBetterQuality: 'Hay un problema con la calidad de la imagen de tu identificación. Por favor, sube una nueva imagen donde el identificación se vea con claridad.',
        selfieIssue: 'Hay un problema con tu selfie/video. Por favor, sube un nuevo selfie/video grabado en el momento',
        selfieNotMatching: 'Tu selfie/video no concuerda con tu identificación. Por favor, sube un nuevo selfie/video donde se vea tu cara con claridad.',
        selfieNotLive: 'Tu selfie/video no parece ser un selfie/video en vivo. Por favor, sube un selfie/video a tiempo real.',
    },
    additionalDetailsStep: {
        headerTitle: 'Detalles adicionales',
        helpText: 'Necesitamos confirmar la siguiente información antes de que puedas enviar y recibir dinero desde tu billetera.',
        helpTextIdologyQuestions: 'Tenemos que preguntarte unas preguntas más para terminar de verificar tu identidad',
        helpLink: 'Obtén más información sobre por qué necesitamos esto.',
        legalFirstNameLabel: 'Primer nombre legal',
        legalMiddleNameLabel: 'Segundo nombre legal',
        legalLastNameLabel: 'Apellidos legales',
        selectAnswer: 'Selecciona una respuesta',
        ssnFull9Error: 'Por favor, introduce los 9 dígitos de un número de seguridad social válido',
        needSSNFull9: 'Estamos teniendo problemas para verificar tu número de seguridad social. Introduce los 9 dígitos del número de seguridad social.',
        weCouldNotVerify: 'No se pudo verificar',
        pleaseFixIt: 'Corrige esta información antes de continuar.',
        failedKYCTextBefore: 'No se ha podido verificar correctamente tu identidad. Vuelve a intentarlo más tarde o comunicate con ',
        failedKYCTextAfter: ' si tienes alguna pregunta.',
    },
    termsStep: {
        headerTitle: 'Condiciones y tarifas',
        headerTitleRefactor: 'Tarifas y condiciones',
        haveReadAndAgree: 'He leído y acepto recibir ',
        electronicDisclosures: 'divulgaciones electrónicas',
        agreeToThe: 'Estoy de acuerdo con el ',
        walletAgreement: 'Acuerdo de la billetera',
        enablePayments: 'Habilitar pagos',
        monthlyFee: 'Cuota mensual',
        inactivity: 'Inactividad',
        noOverdraftOrCredit: 'Sin función de sobregiro/crédito',
        electronicFundsWithdrawal: 'Retiro electrónico de fondos',
        standard: 'Estándar',
        reviewTheFees: 'Echa un vistazo a algunas de las tarifas.',
        checkTheBoxes: 'Por favor, marca las siguientes casillas.',
        agreeToTerms: 'Debes aceptar los términos y condiciones para continuar.',
        shortTermsForm: {
            expensifyPaymentsAccount: ({walletProgram}: WalletProgramParams) => `La Billetera Expensify es emitida por ${walletProgram}.`,
            perPurchase: 'Por compra',
            atmWithdrawal: 'Retiro en cajeros automáticos',
            cashReload: 'Recarga de efectivo',
            inNetwork: 'en la red',
            outOfNetwork: 'fuera de la red',
            atmBalanceInquiry: 'Consulta de saldo en cajeros automáticos',
            inOrOutOfNetwork: '(dentro o fuera de la red)',
            customerService: 'Servicio al cliente',
            automatedOrLive: '(agente automatizado o en vivo)',
            afterTwelveMonths: '(después de 12 meses sin transacciones)',
            weChargeOneFee: 'Cobramos otro tipo de tarifa. Es:',
            fdicInsurance: 'Tus fondos pueden acogerse al seguro de la FDIC.',
            generalInfo: 'Para obtener información general sobre cuentas de prepago, visite',
            conditionsDetails: 'Encuentra detalles y condiciones para todas las tarifas y servicios visitando',
            conditionsPhone: 'o llamando al +1 833-400-0904.',
            instant: '(instantáneo)',
            electronicFundsInstantFeeMin: ({amount}: TermsParams) => `(mínimo ${amount})`,
        },
        longTermsForm: {
            listOfAllFees: 'Una lista de todas las tarifas de la Billetera Expensify',
            typeOfFeeHeader: 'Todas las tarifas',
            feeAmountHeader: 'Cantidad',
            moreDetailsHeader: 'Descripción',
            openingAccountTitle: 'Abrir una cuenta',
            openingAccountDetails: 'No hay tarifa para abrir una cuenta.',
            monthlyFeeDetails: 'No hay tarifa mensual.',
            customerServiceTitle: 'Servicio al cliente',
            customerServiceDetails: 'No hay tarifas de servicio al cliente.',
            inactivityDetails: 'No hay tarifa de inactividad.',
            sendingFundsTitle: 'Enviar fondos a otro titular de cuenta',
            sendingFundsDetails: 'No se aplica ningún cargo por enviar fondos a otro titular de cuenta utilizando tu saldo cuenta bancaria o tarjeta de débito',
            electronicFundsStandardDetails:
                'No hay cargo por transferir fondos desde tu Billetera Expensify ' +
                'a tu cuenta bancaria utilizando la opción estándar. Esta transferencia generalmente se completa en' +
                '1-3 días laborables.',
            electronicFundsInstantDetails: ({percentage, amount}: ElectronicFundsParams) =>
                'Hay una tarifa para transferir fondos desde tu Billetera Expensify a ' +
                'la tarjeta de débito vinculada utilizando la opción de transferencia instantánea. Esta transferencia ' +
                `generalmente se completa dentro de varios minutos. La tarifa es el ${percentage}% del importe de la ` +
                `transferencia (con una tarifa mínima de ${amount}). `,
            fdicInsuranceBancorp: ({amount}: TermsParams) =>
                'Tus fondos pueden acogerse al seguro de la FDIC. Tus fondos se mantendrán o serán ' +
                `transferidos a ${CONST.WALLET.PROGRAM_ISSUERS.BANCORP_BANK}, una institución asegurada por la FDIC. Una vez allí, tus fondos ` +
                `están asegurados hasta ${amount} por la FDIC en caso de que ${CONST.WALLET.PROGRAM_ISSUERS.BANCORP_BANK} quiebre, si se cumplen ` +
                `los requisitos específicos del seguro de depósitos y tu tarjeta está registrada. Ver`,
            fdicInsuranceBancorp2: 'para más detalles.',
            contactExpensifyPayments: `Comunícate con ${CONST.WALLET.PROGRAM_ISSUERS.EXPENSIFY_PAYMENTS} llamando al + 1833-400-0904, o por correo electrónico a`,
            contactExpensifyPayments2: 'o inicie sesión en',
            generalInformation: 'Para obtener información general sobre cuentas de prepago, visite',
            generalInformation2: 'Si tienes alguna queja sobre una cuenta de prepago, llama al Consumer Financial Oficina de Protección al 1-855-411-2372 o visita',
            printerFriendlyView: 'Ver versión para imprimir',
            automated: 'Automatizado',
            liveAgent: 'Agente en vivo',
            instant: 'Instantáneo',
            electronicFundsInstantFeeMin: ({amount}: TermsParams) => `Mínimo ${amount}`,
        },
    },
    activateStep: {
        headerTitle: 'Habilitar pagos',
        activatedTitle: '¡Billetera  activada!',
        activatedMessage: 'Felicidades, tu billetera está configurada y lista para hacer pagos.',
        checkBackLaterTitle: 'Un momento...',
        checkBackLaterMessage: 'Todavía estamos revisando tu información. Por favor, vuelve más tarde.',
        continueToPayment: 'Continuar al pago',
        continueToTransfer: 'Continuar a la transferencia',
    },
    companyStep: {
        headerTitle: 'Información de la empresa',
        subtitle: '¡Ya casi estamos! Por motivos de seguridad, necesitamos confirmar la siguiente información:',
        legalBusinessName: 'Nombre comercial legal',
        companyWebsite: 'Página web de la empresa',
        taxIDNumber: 'Número de identificación fiscal',
        taxIDNumberPlaceholder: '9 dígitos',
        companyType: 'Tipo de empresa',
        incorporationDate: 'Fecha de incorporación',
        incorporationState: 'Estado de incorporación',
        industryClassificationCode: 'Código de clasificación industrial',
        confirmCompanyIsNot: 'Confirmo que esta empresa no está en el',
        listOfRestrictedBusinesses: 'lista de negocios restringidos',
        incorporationDatePlaceholder: 'Fecha de inicio (aaaa-mm-dd)',
        incorporationTypes: {
            LLC: 'LLC',
            CORPORATION: 'Corp',
            PARTNERSHIP: 'Sociedad',
            COOPERATIVE: 'Cooperativa',
            SOLE_PROPRIETORSHIP: 'Propietario único',
            OTHER: 'Otra',
        },
        industryClassification: '¿A qué categoría pertenece el negocio?',
        industryClassificationCodePlaceholder: 'Buscar código de clasificación industrial',
    },
    requestorStep: {
        headerTitle: 'Información personal',
        learnMore: 'Más información',
        isMyDataSafe: '¿Están seguros mis datos?',
    },
    personalInfoStep: {
        personalInfo: 'Información Personal',
        enterYourLegalFirstAndLast: '¿Cuál es tu nombre legal?',
        legalFirstName: 'Nombre',
        legalLastName: 'Apellidos',
        legalName: 'Nombre legal',
        enterYourDateOfBirth: '¿Cuál es tu fecha de nacimiento?',
        enterTheLast4: '¿Cuáles son los últimos 4 dígitos de tu número de la seguridad social?',
        dontWorry: 'No te preocupes, no hacemos verificaciones de crédito personales.',
        last4SSN: 'Últimos 4 dígitos de tu SSN',
        enterYourAddress: '¿Cuál es tu dirección?',
        address: 'Dirección',
        letsDoubleCheck: 'Revisemos que todo esté bien',
        byAddingThisBankAccount: 'Añadiendo esta cuenta bancaria, confirmas que has leído, entendido y aceptado',
        whatsYourLegalName: '¿Cuál es tu nombre legal?',
        whatsYourDOB: '¿Cuál es tu fecha de nacimiento?',
        whatsYourAddress: '¿Cuál es tu dirección?',
        whatsYourSSN: '¿Cuáles son los últimos 4 dígitos de tu número de la seguridad social?',
        noPersonalChecks: 'No te preocupes, no hacemos verificaciones de crédito personales.',
        whatsYourPhoneNumber: '¿Cuál es tu número de teléfono?',
        weNeedThisToVerify: 'Necesitamos esto para verificar tu billetera.',
    },
    businessInfoStep: {
        businessInfo: 'Información de la empresa',
        enterTheNameOfYourBusiness: '¿Cuál es el nombre de tu empresa?',
        businessName: 'Nombre de la empresa',
        enterYourCompanyTaxIdNumber: '¿Cuál es el número de identificación fiscal?',
        taxIDNumber: 'Número de identificación fiscal',
        taxIDNumberPlaceholder: '9 dígitos',
        enterYourCompanyWebsite: '¿Cuál es la página web de tu empresa?',
        companyWebsite: 'Página web de la empresa',
        enterYourCompanyPhoneNumber: '¿Cuál es el número de teléfono de tu empresa?',
        enterYourCompanyAddress: '¿Cuál es la dirección de tu empresa?',
        selectYourCompanyType: '¿Cuál es el tipo de empresa?',
        companyType: 'Tipo de empresa',
        incorporationType: {
            LLC: 'SRL',
            CORPORATION: 'Corporación',
            PARTNERSHIP: 'Sociedad',
            COOPERATIVE: 'Cooperativa',
            SOLE_PROPRIETORSHIP: 'Empresa individual',
            OTHER: 'Otros',
        },
        selectYourCompanyIncorporationDate: '¿Cuál es la fecha de constitución de la empresa?',
        incorporationDate: 'Fecha de constitución',
        incorporationDatePlaceholder: 'Fecha de inicio (yyyy-mm-dd)',
        incorporationState: 'Estado en el que se constituyó',
        pleaseSelectTheStateYourCompanyWasIncorporatedIn: '¿Cuál es el estado en el que se constituyó la empresa?',
        letsDoubleCheck: 'Verifiquemos que todo esté correcto',
        companyAddress: 'Dirección de la empresa',
        listOfRestrictedBusinesses: 'lista de negocios restringidos',
        confirmCompanyIsNot: 'Confirmo que esta empresa no está en la',
        businessInfoTitle: 'Información del negocio',
        legalBusinessName: 'Nombre legal de la empresa',
        whatsTheBusinessName: '¿Cuál es el nombre de la empresa?',
        whatsTheBusinessAddress: '¿Cuál es la dirección de la empresa?',
        whatsTheBusinessContactInformation: '¿Cuál es la información de contacto de la empresa?',
        whatsTheBusinessRegistrationNumber: '¿Cuál es el número de registro de la empresa?',
        whatsTheBusinessTaxIDEIN: ({country}: BusinessTaxIDParams) => {
            switch (country) {
                case CONST.COUNTRY.US:
                    return '¿Cuál es el Número de Identificación del Empleador (EIN)?';
                case CONST.COUNTRY.CA:
                    return '¿Cuál es el Número de Empresa (BN)?';
                case CONST.COUNTRY.GB:
                    return '¿Cuál es el Número de Registro de IVA (VRN)?';
                case CONST.COUNTRY.AU:
                    return '¿Cuál es el Número de Empresa Australiano (ABN)?';
                default:
                    return '¿Cuál es el número de IVA de la UE?';
            }
        },
        whatsThisNumber: '¿Qué es este número?',
        whereWasTheBusinessIncorporated: '¿Dónde se constituyó la empresa?',
        whatTypeOfBusinessIsIt: '¿Qué tipo de empresa es?',
        whatsTheBusinessAnnualPayment: '¿Cuál es el volumen anual de pagos de la empresa?',
        whatsYourExpectedAverageReimbursements: '¿Cuál es el monto promedio esperado de reembolso?',
        registrationNumber: 'Número de registro',
        taxIDEIN: ({country}: BusinessTaxIDParams) => {
            switch (country) {
                case CONST.COUNTRY.US:
                    return 'EIN';
                case CONST.COUNTRY.CA:
                    return 'BN';
                case CONST.COUNTRY.GB:
                    return 'VRN';
                case CONST.COUNTRY.AU:
                    return 'ABN';
                default:
                    return 'EU VAT';
            }
        },
        businessAddress: 'Dirección de la empresa',
        businessType: 'Tipo de empresa',
        incorporation: 'Constitución',
        incorporationCountry: 'País de constitución',
        incorporationTypeName: 'Tipo de constitución',
        businessCategory: 'Categoría de la empresa',
        annualPaymentVolume: 'Volumen anual de pagos',
        annualPaymentVolumeInCurrency: ({currencyCode}: CurrencyCodeParams) => `Volumen anual de pagos en ${currencyCode}`,
        averageReimbursementAmount: 'Monto promedio de reembolso',
        averageReimbursementAmountInCurrency: ({currencyCode}: CurrencyCodeParams) => `Monto promedio de reembolso en ${currencyCode}`,
        selectIncorporationType: 'Seleccione tipo de constitución',
        selectBusinessCategory: 'Seleccione categoría de la empresa',
        selectAnnualPaymentVolume: 'Seleccione volumen anual de pagos',
        selectIncorporationCountry: 'Seleccione país de constitución',
        selectIncorporationState: 'Seleccione estado de constitución',
        selectAverageReimbursement: 'Selecciona el monto promedio de reembolso',
        findIncorporationType: 'Buscar tipo de constitución',
        findBusinessCategory: 'Buscar categoría de la empresa',
        findAnnualPaymentVolume: 'Buscar volumen anual de pagos',
        findIncorporationState: 'Buscar estado de constitución',
        findAverageReimbursement: 'Encuentra el monto promedio de reembolso',
        error: {
            registrationNumber: 'Por favor, proporciona un número de registro válido',
            taxIDEIN: ({country}: BusinessTaxIDParams) => {
                switch (country) {
                    case CONST.COUNTRY.US:
                        return 'Por favor, proporcione un Número de Identificación del Empleador (EIN) válido';
                    case CONST.COUNTRY.CA:
                        return 'Por favor, proporcione un Número de Empresa (BN) válido';
                    case CONST.COUNTRY.GB:
                        return 'Por favor, proporcione un Número de Registro de IVA (VRN) válido';
                    case CONST.COUNTRY.AU:
                        return 'Por favor, proporcione un Número de Empresa Australiano (ABN) válido';
                    default:
                        return 'Por favor, proporcione un número de IVA de la UE válido';
                }
            },
        },
    },
    beneficialOwnerInfoStep: {
        doYouOwn25percent: '¿Posees el 25% o más de',
        doAnyIndividualOwn25percent: '¿Alguna persona posee el 25% o más de',
        areThereMoreIndividualsWhoOwn25percent: '¿Hay más personas que posean el 25% o más de',
        regulationRequiresUsToVerifyTheIdentity: 'La ley nos exige verificar la identidad de cualquier persona que posea más del 25% de la empresa.',
        companyOwner: 'Dueño de la empresa',
        enterLegalFirstAndLastName: '¿Cuál es el nombre legal del dueño?',
        legalFirstName: 'Nombre legal',
        legalLastName: 'Apellidos legales',
        enterTheDateOfBirthOfTheOwner: '¿Cuál es la fecha de nacimiento del dueño?',
        enterTheLast4: '¿Cuáles son los últimos 4 dígitos del número de la seguridad social del dueño?',
        last4SSN: 'Últimos 4 dígitos del número de la seguridad social',
        dontWorry: 'No te preocupes, ¡no realizamos verificaciones de crédito personales!',
        enterTheOwnersAddress: '¿Cuál es la dirección del dueño?',
        letsDoubleCheck: 'Vamos a verificar que todo esté correcto.',
        legalName: 'Nombre legal',
        address: 'Dirección',
        byAddingThisBankAccount: 'Al añadir esta cuenta bancaria, confirmas que has leído, comprendido y aceptado',
        owners: 'Dueños',
    },
    ownershipInfoStep: {
        ownerInfo: 'Información del propietario',
        businessOwner: 'Propietario del negocio',
        signerInfo: 'Información del firmante',
        doYouOwn: ({companyName}: CompanyNameParams) => `¿Posee el 25% o más de ${companyName}?`,
        doesAnyoneOwn: ({companyName}: CompanyNameParams) => `¿Alguien posee el 25% o más de ${companyName}?`,
        regulationsRequire: 'Las regulaciones requieren que verifiquemos la identidad de cualquier persona que posea más del 25% del negocio.',
        legalFirstName: 'Nombre legal',
        legalLastName: 'Apellido legal',
        whatsTheOwnersName: '¿Cuál es el nombre legal del propietario?',
        whatsYourName: '¿Cuál es su nombre legal?',
        whatPercentage: '¿Qué porcentaje del negocio pertenece al propietario?',
        whatsYoursPercentage: '¿Qué porcentaje del negocio posee?',
        ownership: 'Propiedad',
        whatsTheOwnersDOB: '¿Cuál es la fecha de nacimiento del propietario?',
        whatsYourDOB: '¿Cuál es su fecha de nacimiento?',
        whatsTheOwnersAddress: '¿Cuál es la dirección del propietario?',
        whatsYourAddress: '¿Cuál es su dirección?',
        whatAreTheLast: '¿Cuáles son los últimos 4 dígitos del número de seguro social del propietario?',
        whatsYourLast: '¿Cuáles son los últimos 4 dígitos de su número de seguro social?',
        dontWorry: 'No se preocupe, ¡no realizamos ninguna verificación de crédito personal!',
        last4: 'Últimos 4 del SSN',
        whyDoWeAsk: '¿Por qué solicitamos esto?',
        letsDoubleCheck: 'Verifiquemos que todo esté correcto.',
        legalName: 'Nombre legal',
        ownershipPercentage: 'Porcentaje de propiedad',
        areThereOther: ({companyName}: CompanyNameParams) => `¿Hay otras personas que posean el 25% o más de ${companyName}?`,
        owners: 'Propietarios',
        addCertified: 'Agregue un organigrama certificado que muestre los propietarios beneficiarios',
        regulationRequiresChart: 'La regulación nos exige recopilar una copia certificada del organigrama que muestre a cada persona o entidad que posea el 25% o más del negocio.',
        uploadEntity: 'Subir organigrama de propiedad de la entidad',
        noteEntity: 'Nota: El organigrama de propiedad de la entidad debe estar firmado por su contador, asesor legal o notariado.',
        certified: 'Organigrama certificado de propiedad de la entidad',
        selectCountry: 'Seleccionar país',
        findCountry: 'Buscar país',
        address: 'Dirección',
        chooseFile: 'Elige archivo',
        uploadDocuments: 'Sube documentación adicional',
        pleaseUpload:
            'Por favor, sube la documentación adicional a continuación para ayudarnos a verificar tu identidad como propietario directo o indirecto del 25% o más de la entidad empresarial.',
        acceptedFiles: 'Formatos de archivo aceptados: PDF, PNG, JPEG. El tamaño total del archivo para cada sección no puede superar los 5 MB.',
        proofOfBeneficialOwner: 'Prueba del propietario beneficiario',
        proofOfBeneficialOwnerDescription:
            'Por favor, proporciona una declaración firmada y un organigrama de un contador público, notario o abogado que verifique la propiedad del 25% o más del negocio. Debe estar fechado dentro de los últimos tres meses e incluir el número de licencia del firmante.',
        copyOfID: 'Copia de la identificación del propietario beneficiario',
        copyOfIDDescription: 'Ejemplos: Pasaporte, licencia de conducir, etc.',
        proofOfAddress: 'Prueba de la dirección del propietario beneficiario',
        proofOfAddressDescription: 'Ejemplos: Factura de servicios, contrato de alquiler, etc.',
        codiceFiscale: 'Codice fiscale/ID fiscal',
        codiceFiscaleDescription:
            'Por favor, sube un video de una visita al sitio o una llamada grabada con el oficial firmante. El oficial debe proporcionar: nombre completo, fecha de nacimiento, nombre de la empresa, número de registro, número de código fiscal, dirección registrada, naturaleza del negocio y propósito de la cuenta.',
    },
    validationStep: {
        headerTitle: 'Validar cuenta bancaria',
        buttonText: 'Finalizar configuración',
        maxAttemptsReached: 'Se ha inhabilitado la validación de esta cuenta bancaria debido a demasiados intentos incorrectos.',
        description: 'Enviaremos tres (3) pequeñas transacciones a tu cuenta bancaria a nombre de "Expensify, Inc. Validation" dentro de los próximos 1-2 días laborables.',
        descriptionCTA: 'Introduce el importe de cada transacción en los campos siguientes. Ejemplo: 1.51.',
        reviewingInfo: '¡Gracias! Estamos revisando tu información y nos comunicaremos contigo en breve. Consulta el chat con Concierge ',
        forNextStep: ' para conocer los próximos pasos para terminar de configurar tu cuenta bancaria.',
        letsChatCTA: 'Sí, vamos a chatear',
        letsChatText: '¡Ya casi estamos! Necesitamos tu ayuda para verificar unos últimos datos a través del chat. ¿Estás listo?',
        letsChatTitle: '¡Vamos a chatear!',
        enable2FATitle: 'Evita fraudes, activa la autenticación de dos factores!',
        enable2FAText: 'Tu seguridad es importante para nosotros. Por favor, configura ahora la autenticación de dos factores para añadir una capa adicional de protección a tu cuenta.',
        secureYourAccount: 'Asegura tu cuenta',
    },
    beneficialOwnersStep: {
        additionalInformation: 'Información adicional',
        checkAllThatApply: 'Marca todos los que apliquen, en caso de que ninguno aplique dejar en blanco.',
        iOwnMoreThan25Percent: 'Soy dueño de mas de 25% de ',
        someoneOwnsMoreThan25Percent: 'Otra persona es dueña de mas de 25% de ',
        additionalOwner: 'Beneficiario efectivo adicional',
        removeOwner: 'Eliminar este beneficiario efectivo',
        addAnotherIndividual: 'Añadir otra persona que es dueña de mas de 25% de ',
        agreement: 'Acuerdo:',
        termsAndConditions: 'Términos y condiciones',
        certifyTrueAndAccurate: 'Certifico que la información dada es correcta',
        error: {
            certify: 'Debe certificar que la información es verdadera y precisa',
        },
    },
    completeVerificationStep: {
        completeVerification: 'Completar la verificación',
        confirmAgreements: 'Por favor, confirma los acuerdos siguientes.',
        certifyTrueAndAccurate: 'Certifico que la información dada es verdadera y precisa',
        certifyTrueAndAccurateError: 'Por favor, certifica que la información es verdadera y exacta',
        isAuthorizedToUseBankAccount: 'Estoy autorizado para usar la cuenta bancaria de mi empresa para gastos de empresa',
        isAuthorizedToUseBankAccountError: 'Debes ser el responsable oficial con autorización para operar la cuenta bancaria de la empresa',
        termsAndConditions: 'Términos y Condiciones',
    },
    connectBankAccountStep: {
        connectBankAccount: 'Conectar cuenta bancaria',
        finishButtonText: 'Finalizar configuración',
        validateYourBankAccount: 'Valida tu cuenta bancaria',
        validateButtonText: 'Validar',
        validationInputLabel: 'Transacción',
        maxAttemptsReached: 'La validación de esta cuenta bancaria se ha desactivado debido a demasiados intentos incorrectos.',
        description: 'Enviaremos tres (3) pequeñas transacciones a tu cuenta bancaria a nombre de "Expensify, Inc. Validation" dentro de los próximos 1-2 días laborables.',
        descriptionCTA: 'Introduce el importe de cada transacción en los campos siguientes. Ejemplo: 1.51.',
        reviewingInfo: '¡Gracias! Estamos revisando tu información y nos comunicaremos contigo en breve. Consulta el chat con Concierge ',
        forNextSteps: ' para conocer los próximos pasos para terminar de configurar tu cuenta bancaria.',
        letsChatCTA: 'Sí, vamos a chatear',
        letsChatText: '¡Ya casi estamos! Necesitamos tu ayuda para verificar unos últimos datos a través del chat. ¿Estás listo?',
        letsChatTitle: '¡Vamos a chatear!',
        enable2FATitle: '¡Evita fraudes, activa la autenticación de dos factores!',
        enable2FAText: 'Tu seguridad es importante para nosotros. Por favor, configura ahora la autenticación de dos factores para añadir una capa adicional de protección a tu cuenta.',
        secureYourAccount: 'Asegura tu cuenta',
    },
    countryStep: {
        confirmBusinessBank: 'Confirmar moneda y país de la cuenta bancaria comercial',
        confirmCurrency: 'Confirmar moneda y país',
        yourBusiness: 'La moneda de su cuenta bancaria comercial debe coincidir con la moneda de su espacio de trabajo.',
        youCanChange: 'Puede cambiar la moneda de su espacio de trabajo en su',
        findCountry: 'Encontrar país',
        selectCountry: 'Seleccione su país',
    },
    bankInfoStep: {
        whatAreYour: '¿Cuáles son los detalles de tu cuenta bancaria comercial?',
        letsDoubleCheck: 'Verifiquemos que todo esté bien.',
        thisBankAccount: 'Esta cuenta bancaria se utilizará para pagos comerciales en tu espacio de trabajo.',
        accountNumber: 'Número de cuenta',
        accountHolderNameDescription: 'Nombre completo del firmante autorizado',
    },
    signerInfoStep: {
        signerInfo: 'Información del firmante',
        areYouDirector: ({companyName}: CompanyNameParams) => `¿Es usted director o alto funcionario de ${companyName}?`,
        regulationRequiresUs: 'La regulación requiere que verifiquemos si el firmante tiene la autoridad para realizar esta acción en nombre de la empresa.',
        whatsYourName: '¿Cuál es tu nombre legal?',
        fullName: 'Nombre legal completo',
        whatsYourJobTitle: '¿Cuál es tu puesto de trabajo?',
        jobTitle: 'Título profesional',
        whatsYourDOB: '¿Cual es tu fecha de nacimiento?',
        uploadID: 'Subir documento de identidad y prueba de domicilio',
        personalAddress: 'Prueba de domicilio personal (por ejemplo, factura de servicios públicos)',
        letsDoubleCheck: 'Vamos a verificar que todo esté correcto.',
        legalName: 'Nombre legal',
        proofOf: 'Comprobante de domicilio personal',
        enterOneEmail: ({companyName}: CompanyNameParams) => `Introduce el correo electrónico del director o alto funcionario en ${companyName}`,
        regulationRequiresOneMoreDirector: 'El reglamento exige que haya otro director o funcionario superior como firmante.',
        hangTight: 'Espera un momento...',
        enterTwoEmails: ({companyName}: CompanyNameParams) => `Introduce los correos electrónicos de dos directores o altos funcionarios en ${companyName}`,
        sendReminder: 'Enviar un recordatorio',
        chooseFile: 'Seleccionar archivo',
        weAreWaiting: 'Estamos esperando que otros verifiquen sus identidades como directores o altos funcionarios de la empresa.',
        id: 'Copia de identificación',
        proofOfDirectors: 'Prueba de director(es)',
        proofOfDirectorsDescription: 'Ejemplos: Perfil Corporativo de Oncorp o Registro Comercial.',
        codiceFiscale: 'Codice Fiscale',
        codiceFiscaleDescription: 'Codice Fiscale para firmantes, usuarios autorizados y beneficiarios finales.',
        PDSandFSG: 'Documentación de divulgación PDS + FSG',
        PDSandFSGDescription:
            'Nuestra colaboración con Corpay utiliza una conexión API para aprovechar su amplia red de socios bancarios internacionales y facilitar los reembolsos globales en Expensify. Según la normativa australiana, te proporcionamos la Guía de Servicios Financieros (FSG) y el Documento de Divulgación del Producto (PDS) de Corpay.\n\nPor favor, lee detenidamente los documentos FSG y PDS, ya que contienen información completa e importante sobre los productos y servicios que ofrece Corpay. Conserva estos documentos para futuras consultas.',
        pleaseUpload: 'Sube documentación adicional a continuación para ayudarnos a verificar tu identidad como director o alto ejecutivo de la entidad comercial.',
    },
    agreementsStep: {
        agreements: 'Acuerdos',
        pleaseConfirm: 'Por favor confirme los acuerdos a continuación',
        regulationRequiresUs: 'La normativa requiere que verifiquemos la identidad de cualquier individuo que posea más del 25% del negocio.',
        iAmAuthorized: 'Estoy autorizado para usar la cuenta bancaria para gastos del negocio.',
        iCertify: 'Certifico que la información proporcionada es verdadera y correcta.',
        termsAndConditions: 'términos y condiciones',
        accept: 'Agregar y aceptar cuenta bancaria',
        iConsentToThe: 'Doy mi consentimiento para el',
        privacyNotice: 'aviso de privacidad',
        error: {
            authorized: 'Debe ser un funcionario controlador con autorización para operar la cuenta bancaria comercial',
            certify: 'Por favor certifique que la información es verdadera y exacta',
            consent: 'Por favor, acepte el aviso de privacidad',
        },
    },
    finishStep: {
        connect: 'Conectar cuenta bancaria',
        letsFinish: '¡Terminemos en el chat!',
        thanksFor:
            'Gracias por esos detalles. Un agente de soporte dedicado revisará ahora tu información. Nos pondremos en contacto si necesitamos algo más de tu parte, pero mientras tanto, no dudes en comunicarte con nosotros si tienes alguna pregunta.',
        iHaveA: 'Tengo una pregunta',
        enable2FA: 'Habilite la autenticación de dos factores (2FA) para prevenir fraudes',
        weTake: 'Nos tomamos su seguridad en serio. Por favor, configure 2FA ahora para agregar una capa adicional de protección a su cuenta.',
        secure: 'Asegure su cuenta',
    },
    reimbursementAccountLoadingAnimation: {
        oneMoment: 'Un momento',
        explanationLine: 'Estamos verificando tu información y podrás continuar con los siguientes pasos en unos momentos.',
    },
    session: {
        offlineMessageRetry: 'Parece que estás desconectado. Por favor, comprueba tu conexión e inténtalo de nuevo.',
    },
    travel: {
        header: 'Reservar viajes',
        title: 'Viaja de forma inteligente',
        subtitle: 'Utiliza Expensify Travel para obtener las mejores ofertas de viaje y gestionar todos los gastos de tu negocio en un solo lugar.',
        features: {
            saveMoney: 'Ahorra dinero en tus reservas',
            alerts: 'Obtén actualizaciones y alertas en tiempo real',
        },
        bookTravel: 'Reservar viajes',
        bookDemo: 'Pedir demostración',
        bookADemo: 'Reserva una demo',
        toLearnMore: ' para obtener más información.',
        termsAndConditions: {
            header: 'Antes de continuar...',
            title: 'Términos y condiciones de Expensify Travel',
            subtitle: 'Por favor, acepta los ',
            termsAndConditions: 'términos y condiciones',
            travelTermsAndConditions: 'términos y condiciones',
            agree: 'Acepto los ',
            error: 'Debes aceptar los términos y condiciones de Expensify Travel para continuar',
            defaultWorkspaceError:
                'Debes establecer un espacio de trabajo predeterminado para habilitar Expensify Travel. Ve a Configuración > Espacios de trabajo > haz clic en los tres puntos verticales junto a un espacio de trabajo > Establecer como espacio de trabajo predeterminado y luego inténtalo de nuevo.',
        },
        flight: 'Vuelo',
        flightDetails: {
            passenger: 'Pasajero',
            layover: ({layover}: FlightLayoverParams) => `<muted-text-label>Tienes una <strong>escala de ${layover}</strong> antes de este vuelo</muted-text-label>`,
            takeOff: 'Despegue',
            landing: 'Aterrizaje',
            seat: 'Asiento',
            class: 'Clase de cabina',
            recordLocator: 'Localizador de la reserva',
            cabinClasses: {
                unknown: 'Desconocido',
                economy: 'Económica',
                premiumEconomy: 'Económica Premium',
                business: 'Ejecutiva',
                first: 'Primera',
            },
        },
        hotel: 'Hotel',
        hotelDetails: {
            guest: 'Cliente',
            checkIn: 'Entrada',
            checkOut: 'Salida',
            roomType: 'Tipo de habitación',
            cancellation: 'Política de cancelación',
            cancellationUntil: 'Cancelación gratuita hasta el',
            confirmation: 'Número de confirmación',
            cancellationPolicies: {
                unknown: 'Desconocido',
                nonRefundable: 'No reembolsable',
                freeCancellationUntil: 'Cancelación gratuita hasta',
                partiallyRefundable: 'Parcialmente reembolsable',
            },
        },
        car: 'Auto',
        carDetails: {
            rentalCar: 'Coche de alquiler',
            pickUp: 'Recogida',
            dropOff: 'Devolución',
            driver: 'Conductor',
            carType: 'Tipo de coche',
            cancellation: 'Política de cancelación',
            cancellationUntil: 'Cancelación gratuita hasta el',
            freeCancellation: 'Cancelación gratuita',
            confirmation: 'Número de confirmación',
        },
        train: 'Tren',
        trainDetails: {
            passenger: 'Pasajero',
            departs: 'Sale',
            arrives: 'Llega',
            coachNumber: 'Número de vagón',
            seat: 'Asiento',
            fareDetails: 'Detalles de la tarifa',
            confirmation: 'Número de confirmación',
        },
        viewTrip: 'Ver viaje',
        modifyTrip: 'Modificar viaje',
        tripSupport: 'Soporte de Viaje',
        tripDetails: 'Detalles del viaje',
        viewTripDetails: 'Ver detalles del viaje',
        trip: 'Viaje',
        trips: 'Viajes',
        tripSummary: 'Resumen del viaje',
        departs: 'Sale',
        errorMessage: 'Ha ocurrido un error. Por favor, inténtalo mas tarde.',
        phoneError: {
            phrase1: 'Para reservar viajes,',
            link: 'añade una dirección de correo electrónico de trabajo',
            phrase2: '.',
        },
        domainSelector: {
            title: 'Dominio',
            subtitle: 'Elige un dominio para configurar Expensify Travel.',
            recommended: 'Recomendado',
        },
        domainPermissionInfo: {
            title: 'Dominio',
            restrictionPrefix: `No tienes permiso para habilitar Expensify Travel para el dominio`,
            restrictionSuffix: `Tendrás que pedir a alguien de ese dominio que habilite Travel por ti.`,
            accountantInvitationPrefix: `Si eres contador, considera unirte al`,
            accountantInvitationLink: `programa de contadores ExpensifyApproved!`,
            accountantInvitationSuffix: `para habilitar Travel para este dominio.`,
        },
        publicDomainError: {
            title: 'Comienza con Expensify Travel',
            message: 'Tendrás que usar tu correo electrónico laboral (por ejemplo, nombre@empresa.com) con Expensify Travel, no tu correo personal (por ejemplo, nombre@gmail.com).',
        },
        blockedFeatureModal: {
            title: 'Expensify Travel ha sido deshabilitado',
            message: 'Tu administrador ha desactivado Expensify Travel. Por favor, sigue la política de reservas de tu empresa para organizar tus viajes.',
        },
        verifyCompany: {
            title: 'Estamos revisando tu solicitud...',
            message: `Estamos realizando algunas comprobaciones para verificar que tu cuenta esté lista para Expensify Travel. ¡Nos pondremos en contacto contigo en breve!`,
        },
        updates: {
            bookingTicketed: ({airlineCode, origin, destination, startDate, confirmationID = ''}: FlightParams) =>
                `Tu vuelo ${airlineCode} (${origin} → ${destination}) para el ${startDate} ha sido reservado. Código de confirmación: ${confirmationID}`,
            ticketVoided: ({airlineCode, origin, destination, startDate}: FlightParams) =>
                `Tu billete para el vuelo ${airlineCode} (${origin} → ${destination}) del ${startDate} ha sido anulado.`,
            ticketRefunded: ({airlineCode, origin, destination, startDate}: FlightParams) =>
                `Tu billete para el vuelo ${airlineCode} (${origin} → ${destination}) del ${startDate} ha sido reembolsado o cambiado.`,
            flightCancelled: ({airlineCode, origin, destination, startDate}: FlightParams) =>
                `Tu vuelo ${airlineCode} (${origin} → ${destination}) del ${startDate} ha sido cancelado por la aerolínea.`,
            flightScheduleChangePending: ({airlineCode}: AirlineParams) => `La aerolínea ha propuesto un cambio de horario para el vuelo ${airlineCode}; estamos esperando la confirmación.`,
            flightScheduleChangeClosed: ({airlineCode, startDate}: AirlineParams) => `Cambio de horario confirmado: el vuelo ${airlineCode} ahora sale a las ${startDate}.`,
            flightUpdated: ({airlineCode, origin, destination, startDate}: FlightParams) => `Tu vuelo ${airlineCode} (${origin} → ${destination}) del ${startDate} ha sido actualizado.`,
            flightCabinChanged: ({airlineCode, cabinClass}: AirlineParams) => `Tu clase de cabina ha sido actualizada a ${cabinClass} en el vuelo ${airlineCode}.`,
            flightSeatConfirmed: ({airlineCode}: AirlineParams) => `Tu asignación de asiento en el vuelo ${airlineCode} ha sido confirmada.`,
            flightSeatChanged: ({airlineCode}: AirlineParams) => `Tu asignación de asiento en el vuelo ${airlineCode} ha sido modificada.`,
            flightSeatCancelled: ({airlineCode}: AirlineParams) => `Tu asignación de asiento en el vuelo ${airlineCode} fue eliminada.`,
            paymentDeclined: 'El pago de tu reserva aérea ha fallado. Por favor, inténtalo de nuevo.',
            bookingCancelledByTraveler: ({type, id = ''}: TravelTypeParams) => `Cancelaste tu reserva de ${type} ${id}.`,
            bookingCancelledByVendor: ({type, id = ''}: TravelTypeParams) => `El proveedor canceló tu reserva de ${type} ${id}.`,
            bookingRebooked: ({type, id = ''}: TravelTypeParams) => `Tu reserva de ${type} fue reprogramada. Nuevo número de confirmación: ${id}.`,
            bookingUpdated: ({type}: TravelTypeParams) => `Tu reserva de ${type} fue actualizada. Revisa los nuevos detalles en el itinerario.`,
            railTicketRefund: ({origin, destination, startDate}: RailTicketParams) =>
                `Tu billete de tren de ${origin} a ${destination} para el ${startDate} ha sido reembolsado. Se procesará un crédito.`,
            railTicketExchange: ({origin, destination, startDate}: RailTicketParams) => `Tu billete de tren de ${origin} a ${destination} para el ${startDate} ha sido cambiado.`,
            railTicketUpdate: ({origin, destination, startDate}: RailTicketParams) => `Tu billete de tren de ${origin} a ${destination} para el ${startDate} ha sido actualizado.`,
            defaultUpdate: ({type}: TravelTypeParams) => `Tu reserva de ${type} fue actualizada.`,
        },
    },
    workspace: {
        common: {
            card: 'Tarjetas',
            expensifyCard: 'Tarjeta Expensify',
            companyCards: 'Tarjetas de empresa',
            workflows: 'Flujos de trabajo',
            workspace: 'Espacio de trabajo',
            findWorkspace: 'Encontrar espacio de trabajo',
            edit: 'Editar espacio de trabajo',
            enabled: 'Activada',
            disabled: 'Desactivada',
            everyone: 'Todos',
            delete: 'Eliminar espacio de trabajo',
            settings: 'Configuración',
            reimburse: 'Reembolsos',
            categories: 'Categorías',
            tags: 'Etiquetas',
            customField1: 'Campo personalizado 1',
            customField2: 'Campo personalizado 2',
            customFieldHint: 'Añade una codificación personalizada que se aplique a todos los gastos de este miembro.',
            reportFields: 'Campos de informe',
            reportTitle: 'El título del informe.',
            taxes: 'Impuestos',
            bills: 'Pagar facturas',
            invoices: 'Facturas',
            travel: 'Viajes',
            members: 'Miembros',
            accounting: 'Contabilidad',
            rules: 'Reglas',
            plan: 'Plan',
            profile: 'Resumen',
            bankAccount: 'Cuenta bancaria',
            displayedAs: 'Mostrado como',
            connectBankAccount: 'Conectar cuenta bancaria',
            testTransactions: 'Transacciones de prueba',
            issueAndManageCards: 'Emitir y gestionar tarjetas',
            reconcileCards: 'Reconciliar tarjetas',
            selected: () => ({
                one: '1 seleccionado',
                other: (count: number) => `${count} seleccionados`,
            }),
            settlementFrequency: 'Frecuencia de liquidación',
            setAsDefault: 'Establecer como espacio de trabajo predeterminado',
            defaultNote: `Los recibos enviados a ${CONST.EMAIL.RECEIPTS} aparecerán en este espacio de trabajo.`,
            deleteConfirmation: '¿Estás seguro de que quieres eliminar este espacio de trabajo?',
            deleteWithCardsConfirmation: '¿Estás seguro de que quieres eliminar este espacio de trabajo? Se eliminarán todos los datos de las tarjetas y las tarjetas asignadas.',
            unavailable: 'Espacio de trabajo no disponible',
            memberNotFound: 'Miembro no encontrado. Para invitar a un nuevo miembro al espacio de trabajo, por favor, utiliza el botón invitar que está arriba.',
            notAuthorized: `No tienes acceso a esta página. Si estás intentando unirte a este espacio de trabajo, pide al dueño del espacio de trabajo que te añada como miembro. ¿Necesitas algo más? Comunícate con ${CONST.EMAIL.CONCIERGE}`,
            goToWorkspace: 'Ir al espacio de trabajo',
            goToWorkspaces: 'Ir a espacios de trabajo',
            clearFilter: 'Borrar filtro',
            workspaceName: 'Nombre del espacio de trabajo',
            workspaceOwner: 'Dueño',
            workspaceType: 'Tipo de espacio de trabajo',
            workspaceAvatar: 'Espacio de trabajo avatar',
            mustBeOnlineToViewMembers: 'Debes estar en línea para poder ver los miembros de este espacio de trabajo.',
            moreFeatures: 'Más características',
            requested: 'Solicitado',
            distanceRates: 'Tasas de distancia',
            defaultDescription: 'Un solo lugar para todos tus recibos y gastos.',
            descriptionHint: 'Comparte información sobre este espacio de trabajo con todos los miembros.',
            welcomeNote: `Por favor, utiliza Expensify para enviar tus recibos para reembolso, ¡gracias!`,
            subscription: 'Suscripción',
            markAsEntered: 'Marcar como introducido manualmente',
            markAsExported: 'Marcar como exportado manualmente',
            exportIntegrationSelected: ({connectionName}: ExportIntegrationSelectedParams) => `Exportar a  ${CONST.POLICY.CONNECTIONS.NAME_USER_FRIENDLY[connectionName]}`,
            letsDoubleCheck: 'Verifiquemos que todo esté correcto',
            reportField: 'Campo del informe',
            lineItemLevel: 'Nivel de partida',
            reportLevel: 'Nivel de informe',
            appliedOnExport: 'No se importa en Expensify, se aplica en la exportación',
            shareNote: {
                header: 'Comparte tu espacio de trabajo con otros miembros',
                content: {
                    firstPart:
                        'Comparte este código QR o copia el enlace de abajo para facilitar que los miembros soliciten acceso a tu espacio de trabajo. Todas las solicitudes para unirse al espacio de trabajo aparecerán en la sala',
                    secondPart: 'para tu revisión.',
                },
            },
            connectTo: ({connectionName}: ConnectionNameParams) => `Conéctate a ${CONST.POLICY.CONNECTIONS.NAME_USER_FRIENDLY[connectionName]}`,
            createNewConnection: 'Crear una nueva conexión',
            reuseExistingConnection: 'Reutilizar la conexión existente',
            existingConnections: 'Conexiones existentes',
            existingConnectionsDescription: ({connectionName}: ConnectionNameParams) =>
                `Como ya te has conectado a ${CONST.POLICY.CONNECTIONS.NAME_USER_FRIENDLY[connectionName]} antes, puedes optar por reutilizar una conexión existente o crear una nueva.`,
            lastSyncDate: ({connectionName, formattedDate}: LastSyncDateParams) => `${connectionName} - Última sincronización ${formattedDate}`,
            topLevel: 'Nivel superior',
            authenticationError: ({connectionName}: AuthenticationErrorParams) => `No se puede conectar a ${connectionName} debido a un error de autenticación`,
            learnMore: 'Más información.',
            memberAlternateText: 'Los miembros pueden presentar y aprobar informes.',
            adminAlternateText: 'Los administradores tienen acceso total para editar todos los informes y la configuración del área de trabajo.',
            auditorAlternateText: 'Los auditores pueden ver y comentar los informes.',
            roleName: ({role}: OptionalParam<RoleNamesParams> = {}) => {
                switch (role) {
                    case CONST.POLICY.ROLE.ADMIN:
                        return 'Administrador';
                    case CONST.POLICY.ROLE.AUDITOR:
                        return 'Auditor';
                    case CONST.POLICY.ROLE.USER:
                        return 'Miembro';
                    default:
                        return 'Miembro';
                }
            },
            frequency: {
                manual: 'Manualmente',
                instant: 'Instantáneo',
                immediate: 'Diaria',
                trip: 'Por viaje',
                weekly: 'Semanal',
                semimonthly: 'Dos veces al mes',
                monthly: 'Mensual',
            },
            planType: 'Tipo de plan',
            submitExpense: 'Envía tus gastos a continuación:',
            defaultCategory: 'Categoría predeterminada',
            viewTransactions: 'Ver transacciones',
            policyExpenseChatName: ({displayName}: PolicyExpenseChatNameParams) => `${displayName}'s gastos`,
        },
        perDiem: {
            subtitle: 'Establece las tasas per diem para controlar los gastos diarios de los empleados. ',
            amount: 'Cantidad',
            deleteRates: () => ({
                one: 'Eliminar tasa',
                other: 'Eliminar tasas',
            }),
            deletePerDiemRate: 'Eliminar tasa per diem',
            findPerDiemRate: 'Encontrar tasa per diem',
            areYouSureDelete: () => ({
                one: '¿Estás seguro de que quieres eliminar esta tasa?',
                other: '¿Estás seguro de que quieres eliminar estas tasas?',
            }),
            emptyList: {
                title: 'Per diem',
                subtitle: 'Establece dietas per diem para controlar el gasto diario de los empleados. Importa las tarifas desde una hoja de cálculo para comenzar.',
            },
            errors: {
                existingRateError: ({rate}: CustomUnitRateParams) => `Ya existe una tasa con el valor ${rate}`,
            },
            importPerDiemRates: 'Importar tasas de per diem',
            editPerDiemRate: 'Editar la tasa de per diem',
            editPerDiemRates: 'Editar las tasas de per diem',
            editDestinationSubtitle: ({destination}: EditDestinationSubtitleParams) => `Actualizar este destino lo modificará para todas las subtasas per diem de ${destination}.`,
            editCurrencySubtitle: ({destination}: EditDestinationSubtitleParams) => `Actualizar esta moneda la modificará para todas las subtasas per diem de ${destination}.`,
        },
        qbd: {
            exportOutOfPocketExpensesDescription: 'Establezca cómo se exportan los gastos de bolsillo a QuickBooks Desktop.',
            exportOutOfPocketExpensesCheckToggle: 'Marcar los cheques como “imprimir más tarde”',
            exportDescription: 'Configura cómo se exportan los datos de Expensify a QuickBooks Desktop.',
            date: 'Fecha de exportación',
            exportInvoices: 'Exportar facturas a',
            exportExpensifyCard: 'Exportar las transacciones de la tarjeta Expensify como',
            account: 'Cuenta',
            accountDescription: 'Elige dónde contabilizar los asientos contables.',
            accountsPayable: 'Cuentas por pagar',
            accountsPayableDescription: 'Elige dónde crear las facturas de proveedores.',
            bankAccount: 'Cuenta bancaria',
            notConfigured: 'No configurado',
            bankAccountDescription: 'Elige desde dónde enviar los cheques.',
            creditCardAccount: 'Cuenta de la tarjeta de crédito',
            exportDate: {
                label: 'Fecha de exportación',
                description: 'Usa esta fecha al exportar informes a QuickBooks Desktop.',
                values: {
                    [CONST.QUICKBOOKS_EXPORT_DATE.LAST_EXPENSE]: {
                        label: 'Fecha del último gasto',
                        description: 'Fecha del gasto más reciente en el informe.',
                    },
                    [CONST.QUICKBOOKS_EXPORT_DATE.REPORT_EXPORTED]: {
                        label: 'Fecha de exportación',
                        description: 'Fecha de exportación del informe a QuickBooks Desktop.',
                    },
                    [CONST.QUICKBOOKS_EXPORT_DATE.REPORT_SUBMITTED]: {
                        label: 'Fecha de envío',
                        description: 'Fecha en la que el informe se envió para aprobación.',
                    },
                },
            },
            exportCheckDescription: 'Crearemos un cheque desglosado para cada informe de Expensify y lo enviaremos desde la cuenta bancaria a continuación.',
            exportJournalEntryDescription: 'Crearemos una entrada contable desglosada para cada informe de Expensify y lo contabilizaremos en la cuenta a continuación.',
            exportVendorBillDescription:
                'Crearemos una factura de proveedor desglosada para cada informe de Expensify y la añadiremos a la cuenta a continuación. Si este periodo está cerrado, lo contabilizaremos el 1º del siguiente periodo abierto.',
            deepDiveExpensifyCard: 'Las transacciones de la Tarjeta Expensify se exportarán automáticamente a una "Cuenta de Responsabilidad de la Tarjeta Expensify" creada con',
            deepDiveExpensifyCardIntegration: 'nuestra integración.',
            outOfPocketTaxEnabledDescription:
                'QuickBooks Desktop no admite impuestos en las exportaciones de asientos contables. Como tienes impuestos habilitados en tu espacio de trabajo, esta opción de exportación no está disponible.',
            outOfPocketTaxEnabledError: 'Los asientos contables no están disponibles cuando los impuestos están habilitados. Por favor, selecciona otra opción de exportación.',
            accounts: {
                [CONST.QUICKBOOKS_DESKTOP_NON_REIMBURSABLE_EXPORT_ACCOUNT_TYPE.CREDIT_CARD]: 'Tarjeta de crédito',
                [CONST.QUICKBOOKS_DESKTOP_REIMBURSABLE_ACCOUNT_TYPE.VENDOR_BILL]: 'Factura del proveedor',
                [CONST.QUICKBOOKS_DESKTOP_REIMBURSABLE_ACCOUNT_TYPE.JOURNAL_ENTRY]: 'Asiento contable',
                [CONST.QUICKBOOKS_DESKTOP_REIMBURSABLE_ACCOUNT_TYPE.CHECK]: 'Cheque',

                [`${CONST.QUICKBOOKS_DESKTOP_NON_REIMBURSABLE_EXPORT_ACCOUNT_TYPE.CHECK}Description`]:
                    'Crearemos un cheque desglosado para cada informe de Expensify y lo enviaremos desde la cuenta bancaria a continuación.',
                [`${CONST.QUICKBOOKS_DESKTOP_NON_REIMBURSABLE_EXPORT_ACCOUNT_TYPE.CREDIT_CARD}Description`]:
                    "Automáticamente relacionaremos el nombre del comerciante de la transacción con tarjeta de crédito con cualquier proveedor correspondiente en QuickBooks. Si no existen proveedores, crearemos un proveedor asociado 'Credit Card Misc.'.",
                [`${CONST.QUICKBOOKS_DESKTOP_REIMBURSABLE_ACCOUNT_TYPE.VENDOR_BILL}Description`]:
                    'Crearemos una factura de proveedor desglosada para cada informe de Expensify con la fecha del último gasto, y la añadiremos a la cuenta a continuación. Si este periodo está cerrado, lo contabilizaremos el 1º del siguiente periodo abierto.',

                [`${CONST.QUICKBOOKS_DESKTOP_NON_REIMBURSABLE_EXPORT_ACCOUNT_TYPE.CREDIT_CARD}AccountDescription`]: 'Elige dónde exportar las transacciones con tarjeta de crédito.',
                [`${CONST.QUICKBOOKS_DESKTOP_REIMBURSABLE_ACCOUNT_TYPE.VENDOR_BILL}AccountDescription`]:
                    'Selecciona el proveedor que se aplicará a todas las transacciones con tarjeta de crédito.',
                [`${CONST.QUICKBOOKS_DESKTOP_REIMBURSABLE_ACCOUNT_TYPE.CHECK}AccountDescription`]: 'Elige desde dónde enviar los cheques.',

                [`${CONST.QUICKBOOKS_DESKTOP_REIMBURSABLE_ACCOUNT_TYPE.VENDOR_BILL}Error`]:
                    'Las facturas de proveedores no están disponibles cuando las ubicaciones están habilitadas. Por favor, selecciona otra opción de exportación.',
                [`${CONST.QUICKBOOKS_DESKTOP_REIMBURSABLE_ACCOUNT_TYPE.CHECK}Error`]:
                    'Los cheques no están disponibles cuando las ubicaciones están habilitadas. Por favor, selecciona otra opción de exportación.',
                [`${CONST.QUICKBOOKS_DESKTOP_REIMBURSABLE_ACCOUNT_TYPE.JOURNAL_ENTRY}Error`]:
                    'Los asientos contables no están disponibles cuando los impuestos están habilitados. Por favor, selecciona otra opción de exportación.',
            },
            noAccountsFound: 'No se encontraron cuentas',
            noAccountsFoundDescription: 'Añade la cuenta en QuickBooks Desktop y sincroniza de nuevo la conexión',
            qbdSetup: 'Configuración de QuickBooks Desktop',
            requiredSetupDevice: {
                title: 'No se puede conectar desde este dispositivo',
                body1: 'Deberás configurar esta conexión desde la computadora que hospeda tu archivo de empresa de QuickBooks Desktop.',
                body2: 'Una vez que estés conectado, podrás sincronizar y exportar desde cualquier lugar.',
            },
            setupPage: {
                title: 'Abre este enlace para conectar',
                body: 'Para completar la configuración, abre el siguiente enlace en la computadora donde se está ejecutando QuickBooks Desktop.',
                setupErrorTitle: '¡Ups! Ha ocurrido un error',
                setupErrorBody1: 'La conexión con QuickBooks Desktop no está funcionando en este momento. Por favor, inténtalo de nuevo más tarde o',
                setupErrorBody2: 'si el problema persiste.',
                setupErrorBodyContactConcierge: 'contacta con Concierge',
            },
            importDescription: 'Elige que configuraciónes de codificación son importadas desde QuickBooks Desktop a Expensify.',
            classes: 'Clases',
            items: 'Artículos',
            customers: 'Clientes/proyectos',
            exportCompanyCardsDescription: 'Establece cómo se exportan las compras con tarjeta de empresa a QuickBooks Desktop.',
            defaultVendorDescription: 'Establece un proveedor predeterminado que se aplicará a todas las transacciones con tarjeta de crédito al momento de exportarlas.',
            accountsDescription: 'Tu plan de cuentas de QuickBooks Desktop se importará a Expensify como categorías.',
            accountsSwitchTitle: 'Elige importar cuentas nuevas como categorías activadas o desactivadas.',
            accountsSwitchDescription: 'Las categorías activas estarán disponibles para ser escogidas cuando se crea un gasto.',
            classesDescription: 'Elige cómo gestionar las clases de QuickBooks Desktop en Expensify.',
            tagsDisplayedAsDescription: 'Nivel de partida',
            reportFieldsDisplayedAsDescription: 'Nivel de informe',
            customersDescription: 'Elige cómo gestionar los clientes/proyectos de QuickBooks Desktop en Expensify.',
            advancedConfig: {
                autoSyncDescription: 'Expensify se sincronizará automáticamente con QuickBooks Desktop todos los días.',
                createEntities: 'Crear entidades automáticamente',
                createEntitiesDescription: 'Expensify creará automáticamente proveedores en QuickBooks Desktop si aún no existen.',
            },
            itemsDescription: 'Elige cómo gestionar los elementos de QuickBooks Desktop en Expensify.',
        },
        qbo: {
            connectedTo: 'Conectado a',
            importDescription: 'Elige que configuraciónes de codificación son importadas desde QuickBooks Online a Expensify.',
            classes: 'Clases',
            locations: 'Lugares',
            customers: 'Clientes/proyectos',
            accountsDescription: 'Tu plan de cuentas de QuickBooks Online se importará a Expensify como categorías.',
            accountsSwitchTitle: 'Elige importar cuentas nuevas como categorías activadas o desactivadas.',
            accountsSwitchDescription: 'Las categorías activas estarán disponibles para ser escogidas cuando se crea un gasto.',
            classesDescription: 'Elige cómo gestionar las clases de QuickBooks Online en Expensify.',
            customersDescription: 'Elige cómo gestionar los clientes/proyectos de QuickBooks Online en Expensify.',
            locationsDescription: 'Elige cómo gestionar los lugares de QuickBooks Online en Expensify.',
            locationsLineItemsRestrictionDescription:
                'QuickBooks Online no admite Ubicaciones a nivel de línea para cheques o facturas de proveedores. Si deseas tener ubicaciones a nivel de línea, asegúrate de estar usando asientos contables y gastos con tarjetas de crédito/débito.',
            taxesDescription: 'Elige cómo gestionar los impuestos de QuickBooks Online en Expensify.',
            taxesJournalEntrySwitchNote: 'QuickBooks Online no permite impuestos en los asientos contables. Por favor, cambia la opción de exportación a factura de proveedor o cheque.',
            exportInvoices: 'Exportar facturas a',
            exportDescription: 'Configura cómo se exportan los datos de Expensify a QuickBooks Online.',
            date: 'Fecha de exportación',
            deepDiveExpensifyCard: 'Las transacciones de la Tarjeta Expensify se exportan automáticamente a una "Cuenta de Responsabilidad de la Tarjeta Expensify" creada con',
            deepDiveExpensifyCardIntegration: 'nuestra integración.',
            exportExpensifyCard: 'Exportar las transacciones de las tarjetas Expensify como',
            exportDate: {
                label: 'Fecha de exportación',
                description: 'Usa esta fecha al exportar informe a QuickBooks Online.',
                values: {
                    [CONST.QUICKBOOKS_EXPORT_DATE.LAST_EXPENSE]: {
                        label: 'Fecha del último gasto',
                        description: 'Fecha del gasto mas reciente en el informe.',
                    },
                    [CONST.QUICKBOOKS_EXPORT_DATE.REPORT_EXPORTED]: {
                        label: 'Fecha de exportación',
                        description: 'Fecha de exportación del informe a QuickBooks Online.',
                    },
                    [CONST.QUICKBOOKS_EXPORT_DATE.REPORT_SUBMITTED]: {
                        label: 'Fecha de envío',
                        description: 'Fecha en la que el informe se envió para tu aprobación.',
                    },
                },
            },
            receivable: 'Cuentas por cobrar', // This is an account name that will come directly from QBO, so I don't know why we need a translation for it. It should take whatever the name of the account is in QBO. Leaving this note for CS.
            archive: 'Archivo de cuentas por cobrar', // This is an account name that will come directly from QBO, so I don't know why we need a translation for it. It should take whatever the name of the account is in QBO. Leaving this note for CS.
            exportInvoicesDescription: 'Usa esta cuenta al exportar facturas a QuickBooks Online.',
            exportCompanyCardsDescription: 'Establece cómo se exportan las compras con tarjeta de empresa a QuickBooks Online.',
            account: 'Cuenta',
            accountDescription: 'Elige dónde contabilizar los asientos contables.',
            vendor: 'Proveedor',
            defaultVendorDescription: 'Establece un proveedor predeterminado que se aplicará a todas las transacciones con tarjeta de crédito al momento de exportarlas.',
            accountsPayable: 'Cuentas por pagar',
            accountsPayableDescription: 'Elige dónde crear las facturas de proveedores.',
            bankAccount: 'Cuenta bancaria',
            notConfigured: 'No configurado',
            bankAccountDescription: 'Elige desde dónde enviar los cheques.',
            creditCardAccount: 'Cuenta de la tarjeta de crédito',
            companyCardsLocationEnabledDescription:
                'QuickBooks Online no permite lugares en las exportaciones de facturas de proveedores. Como tienes activadas los lugares en tu espacio de trabajo, esta opción de exportación no está disponible.',
            exportOutOfPocketExpensesDescription: 'Establezca cómo se exportan los gastos de bolsillo a QuickBooks Online.',
            exportCheckDescription: 'Crearemos un cheque desglosado para cada informe de Expensify y lo enviaremos desde la cuenta bancaria a continuación.',
            exportJournalEntryDescription: 'Crearemos una entrada contable desglosada para cada informe de Expensify y lo contabilizaremos en la cuenta a continuación.',
            exportVendorBillDescription:
                'Crearemos una factura de proveedor desglosada para cada informe de Expensify y la añadiremos a la cuenta a continuación. Si este periodo está cerrado, lo contabilizaremos en el día 1 del siguiente periodo abierto.',
            outOfPocketTaxEnabledDescription:
                'QuickBooks Online no permite impuestos en las exportaciones de entradas a los asientos contables. Como tienes los impuestos activados en tu espacio de trabajo, esta opción de exportación no está disponible.',
            outOfPocketTaxEnabledError: 'La anotacion en el diario no está disponible cuando los impuestos están activados. Por favor, selecciona otra opción de exportación diferente.',

            advancedConfig: {
                autoSyncDescription: 'Expensify se sincronizará automáticamente con QuickBooks Online todos los días.',
                inviteEmployees: 'Invitar empleados',
                inviteEmployeesDescription: 'Importe los registros de los empleados de QuickBooks Online e invítelos a este espacio de trabajo.',
                createEntities: 'Crear entidades automáticamente',
                createEntitiesDescription: 'Expensify creará automáticamente proveedores en QuickBooks Online si aún no existen, y creará automáticamente clientes al exportar facturas.',
                reimbursedReportsDescription:
                    'Cada vez que se pague un informe utilizando Expensify ACH, se creará el correspondiente pago de la factura en la cuenta de QuickBooks Online indicadas a continuación.',
                qboBillPaymentAccount: 'Cuenta de pago de las facturas de QuickBooks',
                qboInvoiceCollectionAccount: 'Cuenta de cobro de las facturas QuickBooks',
                accountSelectDescription: 'Elige desde dónde pagar las facturas y crearemos el pago en QuickBooks Online.',
                invoiceAccountSelectorDescription: 'Elige dónde recibir los pagos de facturas y crearemos el pago en QuickBooks Online.',
            },
            accounts: {
                [CONST.QUICKBOOKS_NON_REIMBURSABLE_EXPORT_ACCOUNT_TYPE.DEBIT_CARD]: 'Tarjeta de débito',
                [CONST.QUICKBOOKS_NON_REIMBURSABLE_EXPORT_ACCOUNT_TYPE.CREDIT_CARD]: 'Tarjeta de crédito',
                [CONST.QUICKBOOKS_REIMBURSABLE_ACCOUNT_TYPE.VENDOR_BILL]: 'Factura del proveedor',
                [CONST.QUICKBOOKS_REIMBURSABLE_ACCOUNT_TYPE.JOURNAL_ENTRY]: 'Asiento contable',
                [CONST.QUICKBOOKS_REIMBURSABLE_ACCOUNT_TYPE.CHECK]: 'Cheque',

                [`${CONST.QUICKBOOKS_NON_REIMBURSABLE_EXPORT_ACCOUNT_TYPE.DEBIT_CARD}Description`]:
                    "Automáticamente relacionaremos el nombre del comerciante de la transacción con tarjeta de débito con cualquier proveedor correspondiente en QuickBooks. Si no existen proveedores, crearemos un proveedor asociado 'Debit Card Misc.'.",
                [`${CONST.QUICKBOOKS_NON_REIMBURSABLE_EXPORT_ACCOUNT_TYPE.CREDIT_CARD}Description`]:
                    "Automáticamente relacionaremos el nombre del comerciante de la transacción con tarjeta de crédito con cualquier proveedor correspondiente en QuickBooks. Si no existen proveedores, crearemos un proveedor asociado 'Credit Card Misc.'.",
                [`${CONST.QUICKBOOKS_REIMBURSABLE_ACCOUNT_TYPE.VENDOR_BILL}Description`]:
                    'Crearemos una factura de proveedor desglosada para cada informe de Expensify con la fecha del último gasto, y la añadiremos a la cuenta a continuación. Si este periodo está cerrado, lo contabilizaremos en el día 1 del siguiente periodo abierto.',

                [`${CONST.QUICKBOOKS_NON_REIMBURSABLE_EXPORT_ACCOUNT_TYPE.DEBIT_CARD}AccountDescription`]: 'Elige dónde exportar las transacciones con tarjeta de débito.',
                [`${CONST.QUICKBOOKS_NON_REIMBURSABLE_EXPORT_ACCOUNT_TYPE.CREDIT_CARD}AccountDescription`]: 'Elige dónde exportar las transacciones con tarjeta de crédito.',
                [`${CONST.QUICKBOOKS_REIMBURSABLE_ACCOUNT_TYPE.VENDOR_BILL}AccountDescription`]: 'Selecciona el proveedor que se aplicará a todas las transacciones con tarjeta de crédito.',

                [`${CONST.QUICKBOOKS_REIMBURSABLE_ACCOUNT_TYPE.VENDOR_BILL}Error`]:
                    'Las facturas de proveedores no están disponibles cuando las ubicaciones están habilitadas. Por favor, selecciona otra opción de exportación diferente.',
                [`${CONST.QUICKBOOKS_REIMBURSABLE_ACCOUNT_TYPE.CHECK}Error`]:
                    'La verificación no está disponible cuando las ubicaciones están habilitadas. Por favor, selecciona otra opción de exportación diferente.',
                [`${CONST.QUICKBOOKS_REIMBURSABLE_ACCOUNT_TYPE.JOURNAL_ENTRY}Error`]:
                    'El asiento de diario no está disponible cuando los impuestos están habilitados. Por favor, selecciona otra opción de exportación diferente.',
            },
            exportDestinationAccountsMisconfigurationError: {
                [CONST.QUICKBOOKS_REIMBURSABLE_ACCOUNT_TYPE.VENDOR_BILL]: 'Elige una cuenta válida para la exportación de facturas de proveedor',
                [CONST.QUICKBOOKS_REIMBURSABLE_ACCOUNT_TYPE.JOURNAL_ENTRY]: 'Elige una cuenta válida para la exportación de asientos contables',
                [CONST.QUICKBOOKS_REIMBURSABLE_ACCOUNT_TYPE.CHECK]: 'Elige una cuenta válida para la exportación de cheques',
            },
            exportDestinationSetupAccountsInfo: {
                [CONST.QUICKBOOKS_REIMBURSABLE_ACCOUNT_TYPE.VENDOR_BILL]: 'Para usar la exportación de facturas de proveedor, configura una cuenta receptora de pagos en QuickBooks Online',
                [CONST.QUICKBOOKS_REIMBURSABLE_ACCOUNT_TYPE.JOURNAL_ENTRY]: 'Para usar la exportación de asientos contables, configura una cuenta contable en QuickBooks Online',
                [CONST.QUICKBOOKS_REIMBURSABLE_ACCOUNT_TYPE.CHECK]: 'Para usar la exportación de cheques, configura una cuenta bancaria en QuickBooks Online',
            },
            noAccountsFound: 'No se ha encontrado ninguna cuenta',
            noAccountsFoundDescription: 'Añade la cuenta en QuickBooks Online y sincroniza de nuevo la conexión.',
            accountingMethods: {
                label: 'Cuándo Exportar',
                description: 'Elige cuándo exportar los gastos:',
                values: {
                    [COMMON_CONST.INTEGRATIONS.ACCOUNTING_METHOD.ACCRUAL]: 'Devengo',
                    [COMMON_CONST.INTEGRATIONS.ACCOUNTING_METHOD.CASH]: 'Efectivo',
                },
                alternateText: {
                    [COMMON_CONST.INTEGRATIONS.ACCOUNTING_METHOD.ACCRUAL]: 'Los gastos por cuenta propia se exportarán cuando estén aprobados definitivamente',
                    [COMMON_CONST.INTEGRATIONS.ACCOUNTING_METHOD.CASH]: 'Los gastos por cuenta propia se exportarán cuando estén pagados',
                },
            },
        },
        workspaceList: {
            joinNow: 'Únete ahora',
            askToJoin: 'Pedir unirse',
        },
        xero: {
            organization: 'Organización Xero',
            organizationDescription: 'Seleccione la organización en Xero desde la que está importando los datos.',
            importDescription: 'Elija qué configuraciones de codificación se importan de Xero a Expensify.',
            accountsDescription: 'Tu plan de cuentas de Xero se importará a Expensify como categorías.',
            accountsSwitchTitle: 'Elige importar cuentas nuevas como categorías activadas o desactivadas.',
            accountsSwitchDescription: 'Las categorías activas estarán disponibles para ser escogidas cuando se crea un gasto.',
            trackingCategories: 'Categorías de seguimiento',
            trackingCategoriesDescription: 'Elige cómo gestionar categorías de seguimiento de Xero en Expensify.',
            mapTrackingCategoryTo: ({categoryName}: CategoryNameParams) => `Asignar ${categoryName} de Xero a`,
            mapTrackingCategoryToDescription: ({categoryName}: CategoryNameParams) => `Elige dónde mapear ${categoryName} al exportar a Xero.`,
            customers: 'Volver a facturar a los clientes',
            customersDescription:
                'Elige si quieres volver a facturar a los clientes en Expensify. Tus contactos de clientes de Xero se pueden etiquetar como gastos, y se exportarán a Xero como una factura de venta.',
            taxesDescription: 'Elige cómo gestionar los impuestos de Xero en Expensify.',
            notImported: 'No importado',
            notConfigured: 'No configurado',
            trackingCategoriesOptions: {
                [CONST.XERO_CONFIG.TRACKING_CATEGORY_OPTIONS.DEFAULT]: 'Contacto de Xero por defecto',
                [CONST.XERO_CONFIG.TRACKING_CATEGORY_OPTIONS.TAG]: 'Etiquetas',
                [CONST.XERO_CONFIG.TRACKING_CATEGORY_OPTIONS.REPORT_FIELD]: 'Campos de informes',
            },
            exportDescription: 'Configura cómo se exportan los datos de Expensify a Xero.',
            purchaseBill: 'Factura de compra',
            exportDeepDiveCompanyCard:
                'Cada gasto exportado se contabiliza como una transacción bancaria en la cuenta bancaria de Xero que selecciones a continuación. Las fechas de las transacciones coincidirán con las fechas de el extracto bancario.',
            bankTransactions: 'Transacciones bancarias',
            xeroBankAccount: 'Cuenta bancaria de Xero',
            xeroBankAccountDescription: 'Elige dónde se contabilizarán los gastos como transacciones bancarias.',
            exportExpensesDescription: 'Los informes se exportarán como una factura de compra utilizando la fecha y el estado que seleccione a continuación',
            purchaseBillDate: 'Fecha de la factura de compra',
            exportInvoices: 'Exportar facturas como',
            salesInvoice: 'Factura de venta',
            exportInvoicesDescription: 'Las facturas de venta siempre muestran la fecha en la que se envió la factura.',
            advancedConfig: {
                autoSyncDescription: 'Expensify se sincronizará automáticamente con Xero todos los días.',
                purchaseBillStatusTitle: 'Estado de la factura de compra',
                reimbursedReportsDescription:
                    'Cada vez que se pague un informe utilizando Expensify ACH, se creará el correspondiente pago de la factura en la cuenta de Xero indicadas a continuación.',
                xeroBillPaymentAccount: 'Cuenta de pago de las facturas de Xero',
                xeroInvoiceCollectionAccount: 'Cuenta de cobro de las facturas Xero',
                xeroBillPaymentAccountDescription: 'Elige desde dónde pagar las facturas y crearemos el pago en Xero.',
                invoiceAccountSelectorDescription: 'Elige dónde recibir los pagos de facturas y crearemos el pago en Xero.',
            },
            exportDate: {
                label: 'Fecha de la factura de compra',
                description: 'Usa esta fecha al exportar el informe a Xero.',
                values: {
                    [CONST.XERO_EXPORT_DATE.LAST_EXPENSE]: {
                        label: 'Fecha del último gasto',
                        description: 'Fecha del gasto mas reciente en el informe.',
                    },
                    [CONST.XERO_EXPORT_DATE.REPORT_EXPORTED]: {
                        label: 'Fecha de exportación',
                        description: 'Fecha de exportación del informe a Xero.',
                    },
                    [CONST.XERO_EXPORT_DATE.REPORT_SUBMITTED]: {
                        label: 'Fecha de envío',
                        description: 'Fecha en la que el informe se envió para su aprobación.',
                    },
                },
            },
            invoiceStatus: {
                label: 'Estado de la factura de compra',
                description: 'Usa este estado al exportar facturas de compra a Xero.',
                values: {
                    [CONST.XERO_CONFIG.INVOICE_STATUS.DRAFT]: 'Borrador',
                    [CONST.XERO_CONFIG.INVOICE_STATUS.AWAITING_APPROVAL]: 'Pendiente de aprobación',
                    [CONST.XERO_CONFIG.INVOICE_STATUS.AWAITING_PAYMENT]: 'Pendiente de pago',
                },
            },
            noAccountsFound: 'No se ha encontrado ninguna cuenta',
            noAccountsFoundDescription: 'Añade la cuenta en Xero y sincroniza de nuevo la conexión',
        },

        sageIntacct: {
            preferredExporter: 'Exportador preferido',
            taxSolution: 'Solución fiscal',
            notConfigured: 'No configurado',
            exportDate: {
                label: 'Fecha de exportación',
                description: 'Utilice esta fecha cuando exporte informes a Sage Intacct.',
                values: {
                    [CONST.SAGE_INTACCT_EXPORT_DATE.LAST_EXPENSE]: {
                        label: 'Fecha del último gasto',
                        description: 'Fecha del gasto más reciente del informe.',
                    },
                    [CONST.SAGE_INTACCT_EXPORT_DATE.EXPORTED]: {
                        label: 'Fecha de exportación',
                        description: 'Fecha en la que se exportó el informe a Sage Intacct.',
                    },
                    [CONST.SAGE_INTACCT_EXPORT_DATE.SUBMITTED]: {
                        label: 'Fecha de envío',
                        description: 'Fecha de presentación del informe para su aprobación.',
                    },
                },
            },
            reimbursableExpenses: {
                description: 'Establece cómo se exportan los gastos por cuenta propia a Sage Intacct.',
                values: {
                    [CONST.SAGE_INTACCT_REIMBURSABLE_EXPENSE_TYPE.EXPENSE_REPORT]: 'Informes de gastos',
                    [CONST.SAGE_INTACCT_REIMBURSABLE_EXPENSE_TYPE.VENDOR_BILL]: 'Facturas de proveedores',
                },
            },
            nonReimbursableExpenses: {
                description: 'Establece cómo se exportan las compras con tarjeta de empresa a Sage Intacct.',
                values: {
                    [CONST.SAGE_INTACCT_NON_REIMBURSABLE_EXPENSE_TYPE.CREDIT_CARD_CHARGE]: 'Tarjetas de crédito',
                    [CONST.SAGE_INTACCT_NON_REIMBURSABLE_EXPENSE_TYPE.VENDOR_BILL]: 'Facturas de proveedores',
                },
            },
            creditCardAccount: 'Cuenta de tarjeta de crédito',
            defaultVendor: 'Proveedor por defecto',
            defaultVendorDescription: ({isReimbursable}: DefaultVendorDescriptionParams) =>
                `Establezca un proveedor predeterminado que se aplicará a los gastos ${isReimbursable ? '' : 'no '}reembolsables que no tienen un proveedor coincidente en Sage Intacct.`,
            exportDescription: 'Configure cómo se exportan los datos de Expensify a Sage Intacct.',
            exportPreferredExporterNote:
                'El exportador preferido puede ser cualquier administrador del área de trabajo, pero también debe ser un administrador del dominio si establece diferentes cuentas de exportación para tarjetas de empresa individuales en Configuración del dominio.',
            exportPreferredExporterSubNote: 'Una vez configurado, el exportador preferido verá los informes para exportar en su cuenta.',
            noAccountsFound: 'No se ha encontrado ninguna cuenta',
            noAccountsFoundDescription: 'Añade la cuenta en Sage Intacct y sincroniza de nuevo la conexión',
            autoSync: 'Sincronización automática',
            autoSyncDescription: 'Sincronice Sage Intacct y Expensify automáticamente, todos los días.',
            inviteEmployees: 'Invitar a los empleados',
            inviteEmployeesDescription:
                'Importe los registros de empleados de Sage Intacct e invite a los empleados a este espacio de trabajo. Su flujo de trabajo de aprobación será por defecto la aprobación del gerente y se puede configurar aún más en la página Miembros.',
            syncReimbursedReports: 'Sincronizar informes reembolsados',
            syncReimbursedReportsDescription:
                'Cuando un informe se reembolsa utilizando Expensify ACH, la factura de compra correspondiente se creará en la cuenta de Sage Intacct a continuación.',
            paymentAccount: 'Cuenta de pago Sage Intacct',
        },
        netsuite: {
            subsidiary: 'Subsidiaria',
            subsidiarySelectDescription: 'Elige la subsidiaria de NetSuite de la que deseas importar datos.',
            exportDescription: 'Configura cómo se exportan los datos de Expensify a NetSuite.',
            exportInvoices: 'Exportar facturas a',
            journalEntriesTaxPostingAccount: 'Cuenta de registro de impuestos de asientos contables',
            journalEntriesProvTaxPostingAccount: 'Cuenta de registro de impuestos provinciales de asientos contables',
            foreignCurrencyAmount: 'Exportar importe en moneda extranjera',
            exportToNextOpenPeriod: 'Exportar al siguiente período abierto',
            nonReimbursableJournalPostingAccount: 'Cuenta de registro de diario no reembolsable',
            reimbursableJournalPostingAccount: 'Cuenta de registro de diario reembolsable',
            journalPostingPreference: {
                label: 'Preferencia de registro de asientos contables',
                values: {
                    [CONST.NETSUITE_JOURNAL_POSTING_PREFERENCE.JOURNALS_POSTING_INDIVIDUAL_LINE]: 'Entrada única y detallada para cada informe',
                    [CONST.NETSUITE_JOURNAL_POSTING_PREFERENCE.JOURNALS_POSTING_TOTAL_LINE]: 'Entrada única para cada gasto individual',
                },
            },
            invoiceItem: {
                label: 'Artículo de la factura',
                values: {
                    [CONST.NETSUITE_INVOICE_ITEM_PREFERENCE.CREATE]: {
                        label: 'Crear uno para mí',
                        description: "Crearemos un 'Artículo de línea de factura de Expensify' para ti al exportar (si aún no existe).",
                    },
                    [CONST.NETSUITE_INVOICE_ITEM_PREFERENCE.SELECT]: {
                        label: 'Seleccionar existente',
                        description: 'Asociaremos las facturas de Expensify al artículo seleccionado a continuación.',
                    },
                },
            },
            exportDate: {
                label: 'Fecha de exportación',
                description: 'Usa esta fecha al exportar informe a NetSuite.',
                values: {
                    [CONST.NETSUITE_EXPORT_DATE.LAST_EXPENSE]: {
                        label: 'Fecha del último gasto',
                        description: 'Fecha del gasto mas reciente en el informe.',
                    },
                    [CONST.NETSUITE_EXPORT_DATE.EXPORTED]: {
                        label: 'Fecha de exportación',
                        description: 'Fecha de exportación del informe a NetSuite.',
                    },
                    [CONST.NETSUITE_EXPORT_DATE.SUBMITTED]: {
                        label: 'Fecha de envío',
                        description: 'Fecha en la que el informe se envió para su aprobación.',
                    },
                },
            },
            exportDestination: {
                values: {
                    [CONST.NETSUITE_EXPORT_DESTINATION.EXPENSE_REPORT]: {
                        label: 'Informes de gastos',
                        reimbursableDescription: 'Los gastos reembolsables se exportarán como informes de gastos a NetSuite.',
                        nonReimbursableDescription: 'Los gastos no reembolsables se exportarán como informes de gastos a NetSuite.',
                    },
                    [CONST.NETSUITE_EXPORT_DESTINATION.VENDOR_BILL]: {
                        label: 'Facturas de proveedores',
                        reimbursableDescription:
                            'Los gastos reembolsables se exportarán como facturas pagaderas al proveedor especificado en NetSuite.\n' +
                            '\n' +
                            'Si deseas establecer un proveedor específico para cada tarjeta, ve a *Configuraciones > Dominios > Tarjetas de Empresa*.',
                        nonReimbursableDescription:
                            'Los gastos no reembolsables se exportarán como facturas pagaderas al proveedor especificado en NetSuite.\n' +
                            '\n' +
                            'Si deseas establecer un proveedor específico para cada tarjeta, ve a *Configuraciones > Dominios > Tarjetas de Empresa*.',
                    },
                    [CONST.NETSUITE_EXPORT_DESTINATION.JOURNAL_ENTRY]: {
                        label: 'Asientos contables',
                        reimbursableDescription:
                            'Los gastos reembolsables se exportarán como asientos contables a la cuenta especificada en NetSuite.\n' +
                            '\n' +
                            'Si deseas establecer un proveedor específico para cada tarjeta, ve a *Configuraciones > Dominios > Tarjetas de Empresa*.',
                        nonReimbursableDescription:
                            'Los gastos no reembolsables se exportarán como asientos contables a la cuenta especificada en NetSuite.\n' +
                            '\n' +
                            'Si deseas establecer un proveedor específico para cada tarjeta, ve a *Configuraciones > Dominios > Tarjetas de Empresa*.',
                    },
                },
            },
            advancedConfig: {
                autoSyncDescription: 'Expensify se sincronizará automáticamente con NetSuite todos los días.',
                reimbursedReportsDescription:
                    'Cada vez que se pague un informe utilizando Expensify ACH, se creará el correspondiente pago de la factura en la cuenta de NetSuite indicadas a continuación.',
                reimbursementsAccount: 'Cuenta de reembolsos',
                reimbursementsAccountDescription: 'Elija la cuenta bancaria que utilizará para los reembolsos y crearemos el pago asociado en NetSuite.',
                collectionsAccount: 'Cuenta de cobros',
                collectionsAccountDescription: 'Una vez que una factura se marca como pagada en Expensify y se exporta a NetSuite, aparecerá contra la cuenta de abajo.',
                approvalAccount: 'Cuenta de aprobación de cuentas por pagar',
                approvalAccountDescription:
                    'Elija la cuenta con la que se aprobarán las transacciones en NetSuite. Si está sincronizando informes reembolsados, esta es también la cuenta con la que se crearán los pagos de facturas.',
                defaultApprovalAccount: 'Preferencia predeterminada de NetSuite',
                inviteEmployees: 'Invitar empleados y establecer aprobaciones',
                inviteEmployeesDescription:
                    'Importar registros de empleados de NetSuite e invitar a empleados a este espacio de trabajo. Su flujo de trabajo de aprobación será por defecto la aprobación del gerente y se puede configurar más en la página *Miembros*.',
                autoCreateEntities: 'Crear automáticamente empleados/proveedores',
                enableCategories: 'Activar categorías recién importadas',
                customFormID: 'ID de formulario personalizado',
                customFormIDDescription:
                    'Por defecto, Expensify creará entradas utilizando el formulario de transacción preferido configurado en NetSuite. Alternativamente, tienes la opción de designar un formulario de transacción específico para ser utilizado.',
                customFormIDReimbursable: 'Gasto reembolsable',
                customFormIDNonReimbursable: 'Gasto no reembolsable',
                exportReportsTo: {
                    label: 'Nivel de aprobación del informe de gastos',
                    description:
                        'Una vez aprobado un informe de gastos en Expensify y exportado a NetSuite, puede establecer un nivel adicional de aprobación en NetSuite antes de su contabilización.',
                    values: {
                        [CONST.NETSUITE_REPORTS_APPROVAL_LEVEL.REPORTS_APPROVED_NONE]: 'Preferencia predeterminada de NetSuite',
                        [CONST.NETSUITE_REPORTS_APPROVAL_LEVEL.REPORTS_SUPERVISOR_APPROVED]: 'Solo aprobado por el supervisor',
                        [CONST.NETSUITE_REPORTS_APPROVAL_LEVEL.REPORTS_ACCOUNTING_APPROVED]: 'Solo aprobado por contabilidad',
                        [CONST.NETSUITE_REPORTS_APPROVAL_LEVEL.REPORTS_APPROVED_BOTH]: 'Aprobado por supervisor y contabilidad',
                    },
                },
                accountingMethods: {
                    label: 'Cuándo Exportar',
                    description: 'Elige cuándo exportar los gastos:',
                    values: {
                        [COMMON_CONST.INTEGRATIONS.ACCOUNTING_METHOD.ACCRUAL]: 'Devengo',
                        [COMMON_CONST.INTEGRATIONS.ACCOUNTING_METHOD.CASH]: 'Efectivo',
                    },
                    alternateText: {
                        [COMMON_CONST.INTEGRATIONS.ACCOUNTING_METHOD.ACCRUAL]: 'Los gastos por cuenta propia se exportarán cuando estén aprobados definitivamente',
                        [COMMON_CONST.INTEGRATIONS.ACCOUNTING_METHOD.CASH]: 'Los gastos por cuenta propia se exportarán cuando estén pagados',
                    },
                },
                exportVendorBillsTo: {
                    label: 'Nivel de aprobación de facturas de proveedores',
                    description:
                        'Una vez aprobada una factura de proveedor en Expensify y exportada a NetSuite, puede establecer un nivel adicional de aprobación en NetSuite antes de su contabilización.',
                    values: {
                        [CONST.NETSUITE_VENDOR_BILLS_APPROVAL_LEVEL.VENDOR_BILLS_APPROVED_NONE]: 'Preferencia predeterminada de NetSuite',
                        [CONST.NETSUITE_VENDOR_BILLS_APPROVAL_LEVEL.VENDOR_BILLS_APPROVAL_PENDING]: 'Aprobación pendiente',
                        [CONST.NETSUITE_VENDOR_BILLS_APPROVAL_LEVEL.VENDOR_BILLS_APPROVED]: 'Aprobado para publicación',
                    },
                },
                exportJournalsTo: {
                    label: 'Nivel de aprobación de asientos contables',
                    description: 'Una vez aprobado un asiento en Expensify y exportado a NetSuite, puede establecer un nivel adicional de aprobación en NetSuite antes de contabilizarlo.',
                    values: {
                        [CONST.NETSUITE_JOURNALS_APPROVAL_LEVEL.JOURNALS_APPROVED_NONE]: 'Preferencia predeterminada de NetSuite',
                        [CONST.NETSUITE_JOURNALS_APPROVAL_LEVEL.JOURNALS_APPROVAL_PENDING]: 'Aprobación pendiente',
                        [CONST.NETSUITE_JOURNALS_APPROVAL_LEVEL.JOURNALS_APPROVED]: 'Aprobado para publicación',
                    },
                },
                error: {
                    customFormID: 'Introduzca un ID numérico válido para el formulario personalizado',
                },
            },
            noAccountsFound: 'No se han encontrado cuentas',
            noAccountsFoundDescription: 'Añade la cuenta en NetSuite y sincroniza la conexión de nuevo',
            noVendorsFound: 'No se han encontrado proveedores',
            noVendorsFoundDescription: 'Añade proveedores en NetSuite y sincroniza la conexión de nuevo',
            noItemsFound: 'No se han encontrado artículos de factura',
            noItemsFoundDescription: 'Añade artículos de factura en NetSuite y sincroniza la conexión de nuevo',
            noSubsidiariesFound: 'No se ha encontrado subsidiarias',
            noSubsidiariesFoundDescription: 'Añade la subsidiaria en NetSuite y sincroniza de nuevo la conexión',
            tokenInput: {
                title: 'Netsuite configuración',
                formSteps: {
                    installBundle: {
                        title: 'Instala el paquete de Expensify',
                        description: 'En NetSuite, ir a *Personalización > SuiteBundler > Buscar e Instalar Paquetes* > busca "Expensify" > instala el paquete.',
                    },
                    enableTokenAuthentication: {
                        title: 'Habilitar la autenticación basada en token',
                        description: 'En NetSuite, ir a *Configuración > Empresa > Habilitar Funciones > SuiteCloud* > activar *autenticación basada en token*.',
                    },
                    enableSoapServices: {
                        title: 'Habilitar servicios web SOAP',
                        description: 'En NetSuite, ir a *Configuración > Empresa > Habilitar funciones > SuiteCloud* > habilitar *Servicios Web SOAP*.',
                    },
                    createAccessToken: {
                        title: 'Crear un token de acceso',
                        description:
                            'En NetSuite, ir a *Configuración > Usuarios/Roles > Tokens de Acceso* > crear un token de acceso para la aplicación "Expensify" y tambiém para el rol de "Integración Expensify" o "Administrador".\n\n*Importante:* Asegúrese de guardar el ID y el secreto del Token en este paso. Los necesitará para el siguiente paso.',
                    },
                    enterCredentials: {
                        title: 'Ingresa tus credenciales de NetSuite',
                        formInputs: {
                            netSuiteAccountID: 'ID de Cuenta NetSuite',
                            netSuiteTokenID: 'ID de Token',
                            netSuiteTokenSecret: 'Secreto de Token',
                        },
                        netSuiteAccountIDDescription: 'En NetSuite, ir a *Configuración > Integración > Preferencias de Servicios Web SOAP*.',
                    },
                },
            },
            import: {
                expenseCategories: 'Categorías de gastos',
                expenseCategoriesDescription: 'Las categorías de gastos de NetSuite se importan a Expensify como categorías.',
                crossSubsidiaryCustomers: 'Clientes/proyectos entre subsidiaria',
                importFields: {
                    departments: {
                        title: 'Departamentos',
                        subtitle: 'Elige cómo manejar los *departamentos* de NetSuite en Expensify.',
                    },
                    classes: {
                        title: 'Clases',
                        subtitle: 'Elige cómo manejar las *clases* en Expensify.',
                    },
                    locations: {
                        title: 'Ubicaciones',
                        subtitle: 'Elija cómo manejar *ubicaciones* en Expensify.',
                    },
                },
                customersOrJobs: {
                    title: 'Clientes/proyectos',
                    subtitle: 'Elija cómo manejar los *clientes* y *proyectos* de NetSuite en Expensify.',
                    importCustomers: 'Importar clientes',
                    importJobs: 'Importar proyectos',
                    customers: 'clientes',
                    jobs: 'proyectos',
                    label: ({importFields, importType}: CustomersOrJobsLabelParams) => `${importFields.join(' y ')}, ${importType}`,
                },
                importTaxDescription: 'Importar grupos de impuestos desde NetSuite.',
                importCustomFields: {
                    chooseOptionBelow: 'Elija una de las opciones siguientes:',
                    label: ({importedTypes}: ImportedTypesParams) => `Importados como ${importedTypes.join(' y ')}`,
                    requiredFieldError: ({fieldName}: RequiredFieldParams) => `Por favor, introduzca el ${fieldName}`,
                    customSegments: {
                        title: 'Segmentos/registros personalizados',
                        addText: 'Añadir segmento/registro personalizado',
                        recordTitle: 'Segmento/registro personalizado',
                        helpLink: CONST.NETSUITE_IMPORT.HELP_LINKS.CUSTOM_SEGMENTS,
                        helpLinkText: 'Ver instrucciones detalladas',
                        helpText: ' sobre la configuración de segmentos/registros personalizado.',
                        emptyTitle: 'Añadir un segmento personalizado o un registro personalizado',
                        fields: {
                            segmentName: 'Name',
                            internalID: 'Identificación interna',
                            scriptID: 'ID de guión',
                            mapping: 'Mostrado como',
                            customRecordScriptID: 'ID de columna de transacción',
                        },
                        removeTitle: 'Eliminar segmento/registro personalizado',
                        removePrompt: '¿Está seguro de que desea eliminar este segmento/registro personalizado?',
                        addForm: {
                            customSegmentName: 'nombre de segmento personalizado',
                            customRecordName: 'nombre de registro personalizado',
                            segmentTitle: 'Segmento personalizado',
                            customSegmentAddTitle: 'Añadir segmento personalizado',
                            customRecordAddTitle: 'Añadir registro personalizado',
                            recordTitle: 'Registro personalizado',
                            segmentRecordType: '¿Desea añadir un segmento personalizado o un registro personalizado?',
                            customSegmentNameTitle: '¿Cuál es el nombre del segmento personalizado?',
                            customRecordNameTitle: '¿Cuál es el nombre del registro personalizado?',
                            customSegmentNameFooter: `Puede encontrar los nombres de los segmentos personalizados en NetSuite en la página *Personalizaciones > Vínculos, registros y campos > Segmentos personalizados*.\nn_Para obtener instrucciones más detalladas, [visite nuestro sitio de ayuda](${CONST.NETSUITE_IMPORT.HELP_LINKS.CUSTOM_SEGMENTS})_.`,
                            customRecordNameFooter: `Puede encontrar nombres de registros personalizados en NetSuite introduciendo el "Campo de columna de transacción" en la búsqueda global.\nn_Para obtener instrucciones más detalladas, [visite nuestro sitio de ayuda](${CONST.NETSUITE_IMPORT.HELP_LINKS.CUSTOM_SEGMENTS})_.`,
                            customSegmentInternalIDTitle: '¿Cuál es la identificación interna?',
                            customSegmentInternalIDFooter: `En primer lugar, asegúrese de que ha habilitado los ID internos en NetSuite en *Inicio > Establecer preferencias > Mostrar ID interno*. *Personalización > Listas, registros y campos > Segmentos personalizados*.\n2. Haga clic en un segmento personalizado. Haga clic en un segmento personalizado. Haga clic en el hipervínculo situado junto a *Tipo de registro personalizado*.\n4. Para obtener instrucciones más detalladas, [visite nuestro sitio de ayuda](${CONST.NETSUITE_IMPORT.HELP_LINKS.CUSTOM_LISTS})_.`,
                            customRecordInternalIDFooter: `Puede encontrar IDs internos de registros personalizados en NetSuite siguiendo estos pasos:\n\n1. Introduzca "Campos de línea de transacción" en la búsqueda global. Haga clic en un registro personalizado. Para obtener instrucciones más detalladas, [visite nuestro sitio de ayuda](${CONST.NETSUITE_IMPORT.HELP_LINKS.CUSTOM_SEGMENTS})_.`,
                            customSegmentScriptIDTitle: '¿Cuál es el ID del guión?',
                            customSegmentScriptIDFooter: `Puede encontrar IDs de script de segmentos personalizados en NetSuite en: \n\n1. *Personalización > Listas, Registros y Campos > Segmentos Personalizados*.\n2. Haga clic en un segmento personalizado. a. Si desea mostrar el segmento personalizado como una *etiqueta* (a nivel de partida) en Expensify, haga clic en la subpestaña *Columnas de transacción* y utilice el *ID de campo*. b. Si desea mostrar el segmento personalizado como una *etiqueta* (a nivel de partida) en Expensify, haga clic en la subpestaña *Columnas de transacción* y utilice el *ID de campo*. Si desea mostrar el segmento personalizado como un *campo de informe* (a nivel de informe) en Expensify, haga clic en la subpestaña *Transacciones* y utilice el *ID de campo*. Para obtener instrucciones más detalladas, [visite nuestro sitio de ayuda](${CONST.NETSUITE_IMPORT.HELP_LINKS.CUSTOM_LISTS})_.`,
                            customRecordScriptIDTitle: '¿Cuál es el ID de columna de la transacción?',
                            customRecordScriptIDFooter: `Puede encontrar IDs de script de registro personalizados en NetSuite en:\n\n1. Introduzca "Campos de línea de transacción" en la búsqueda global.\n2. Haga clic en un registro personalizado.\n3. Para obtener instrucciones más detalladas, [visite nuestro sitio de ayuda](${CONST.NETSUITE_IMPORT.HELP_LINKS.CUSTOM_SEGMENTS})_.`,
                            customSegmentMappingTitle: '¿Cómo debería mostrarse este segmento personalizado en Expensify?',
                            customRecordMappingTitle: '¿Cómo debería mostrarse este registro de segmento personalizado en Expensify?',
                        },
                        errors: {
                            uniqueFieldError: ({fieldName}: RequiredFieldParams) => `Ya existe un segmento/registro personalizado con este ${fieldName?.toLowerCase()}`,
                        },
                    },
                    customLists: {
                        title: 'Listas personalizadas',
                        addText: 'Añadir lista personalizada',
                        recordTitle: 'Lista personalizado',
                        helpLink: CONST.NETSUITE_IMPORT.HELP_LINKS.CUSTOM_LISTS,
                        helpLinkText: 'Ver instrucciones detalladas',
                        helpText: ' sobre cómo configurar listas personalizada.',
                        emptyTitle: 'Añadir una lista personalizado',
                        fields: {
                            listName: 'Nombre',
                            internalID: 'Identificación interna',
                            transactionFieldID: 'ID del campo de transacción',
                            mapping: 'Mostrado como',
                        },
                        removeTitle: 'Eliminar lista personalizado',
                        removePrompt: '¿Está seguro de que desea eliminar esta lista personalizado?',
                        addForm: {
                            listNameTitle: 'Elija una lista personalizada',
                            transactionFieldIDTitle: '¿Cuál es el ID del campo de transacción?',
                            transactionFieldIDFooter: `Puede encontrar los ID de campo de transacción en NetSuite siguiendo estos pasos:\n\n1. Introduzca "Campos de línea de transacción" en búsqueda global. Introduzca "Campos de línea de transacción" en la búsqueda global.\n2. Haga clic en una lista personalizada.\n3. Para obtener instrucciones más detalladas, [visite nuestro sitio de ayuda](${CONST.NETSUITE_IMPORT.HELP_LINKS.CUSTOM_LISTS})_.`,
                            mappingTitle: '¿Cómo debería mostrarse esta lista personalizada en Expensify?',
                        },
                        errors: {
                            uniqueTransactionFieldIDError: `Ya existe una lista personalizada con este ID de campo de transacción`,
                        },
                    },
                },
                importTypes: {
                    [CONST.INTEGRATION_ENTITY_MAP_TYPES.NETSUITE_DEFAULT]: {
                        label: 'Predeterminado del empleado NetSuite',
                        description: 'No importado a Expensify, aplicado en exportación',
                        footerContent: ({importField}: ImportFieldParams) =>
                            `Si usa ${importField} en NetSuite, aplicaremos el conjunto predeterminado en el registro del empleado al exportarlo a Informe de gastos o Entrada de diario.`,
                    },
                    [CONST.INTEGRATION_ENTITY_MAP_TYPES.TAG]: {
                        label: 'Etiquetas',
                        description: 'Nivel de línea de pedido',
                        footerContent: ({importField}: ImportFieldParams) => `Se podrán seleccionar ${importField} para cada gasto individual en el informe de un empleado.`,
                    },
                    [CONST.INTEGRATION_ENTITY_MAP_TYPES.REPORT_FIELD]: {
                        label: 'Campos de informe',
                        description: 'Nivel de informe',
                        footerContent: ({importField}: ImportFieldParams) => `La selección de ${importField} se aplicará a todos los gastos en el informe de un empleado.`,
                    },
                },
            },
        },
        intacct: {
            sageIntacctSetup: 'Sage Intacct configuración',
            prerequisitesTitle: 'Antes de conectar...',
            downloadExpensifyPackage: 'Descargar el paquete Expensify para Sage Intacct',
            followSteps: 'Siga los pasos de nuestras instrucciones Cómo: Instrucciones para conectarse a Sage Intacct',
            enterCredentials: 'Introduzca sus credenciales de Sage Intacct',
            entity: 'Entidad',
            employeeDefault: 'Sage Intacct empleado por defecto',
            employeeDefaultDescription: 'El departamento por defecto del empleado se aplicará a sus gastos en Sage Intacct si existe.',
            displayedAsTagDescription: 'Se podrá seleccionar el departamento para cada gasto individual en el informe de un empleado.',
            displayedAsReportFieldDescription: 'La selección de departamento se aplicará a todos los gastos que figuren en el informe de un empleado.',
            toggleImportTitleFirstPart: 'Elija cómo gestionar Sage Intacct ',
            toggleImportTitleSecondPart: ' en Expensify.',
            expenseTypes: 'Tipos de gastos',
            expenseTypesDescription: 'Los tipos de gastos de Sage Intacct se importan a Expensify como categorías.',
            accountTypesDescription: 'Su plan de cuentas de Sage Intacct se importará a Expensify como categorías.',
            importTaxDescription: 'Importar el tipo impositivo de compra desde Sage Intacct.',
            userDefinedDimensions: 'Dimensiones definidas por el usuario',
            addUserDefinedDimension: 'Añadir dimensión definida por el usuario',
            integrationName: 'Nombre de la integración',
            dimensionExists: 'Ya existe una dimensión con ese nombre.',
            removeDimension: 'Eliminar dimensión definida por el usuario',
            removeDimensionPrompt: 'Está seguro de que desea eliminar esta dimensión definida por el usuario?',
            userDefinedDimension: 'Dimensión definida por el usuario',
            addAUserDefinedDimension: 'Añadir una dimensión definida por el usuario',
            detailedInstructionsLink: 'Ver instrucciones detalladas',
            detailedInstructionsRestOfSentence: ' para añadir dimensiones definidas por el usuario.',
            userDimensionsAdded: () => ({
                one: '1 UDD añadido',
                other: (count: number) => `${count} UDDs añadido`,
            }),
            mappingTitle: ({mappingName}: IntacctMappingTitleParams) => {
                switch (mappingName) {
                    case CONST.SAGE_INTACCT_CONFIG.MAPPINGS.DEPARTMENTS:
                        return 'departamentos';
                    case CONST.SAGE_INTACCT_CONFIG.MAPPINGS.CLASSES:
                        return 'clases';
                    case CONST.SAGE_INTACCT_CONFIG.MAPPINGS.LOCATIONS:
                        return 'lugares';
                    case CONST.SAGE_INTACCT_CONFIG.MAPPINGS.CUSTOMERS:
                        return 'clientes';
                    case CONST.SAGE_INTACCT_CONFIG.MAPPINGS.PROJECTS:
                        return 'proyectos (empleos)';
                    default:
                        return 'asignaciones';
                }
            },
        },
        type: {
            free: 'Gratis',
            control: 'Controlar',
            collect: 'Recopilar',
        },
        companyCards: {
            addCards: 'Añadir tarjetas',
            selectCards: 'Seleccionar tarjetas',
            addNewCard: {
                other: 'Otros',
                cardProviders: {
                    gl1025: 'Tarjetas de empresa American Express',
                    cdf: 'Tarjetas comerciales Mastercard',
                    vcf: 'Tarjetas comerciales Visa',
                    stripe: 'Tarjetas comerciales Stripe',
                },
                yourCardProvider: `¿Quién es su proveedor de tarjetas?`,
                whoIsYourBankAccount: '¿Cuál es tu banco?',
                whereIsYourBankLocated: '¿Dónde está ubicado tu banco?',
                howDoYouWantToConnect: '¿Cómo deseas conectarte a tu banco?',
                learnMoreAboutOptions: {
                    text: 'Obtén más información sobre estas ',
                    linkText: 'opciones.',
                },
                commercialFeedDetails: 'Requiere configuración con tu banco. Esto suele ser utilizado por empresas más grandes y a menudo es la mejor opción si calificas.',
                commercialFeedPlaidDetails: 'Requiere configurarlo con tu banco, pero te guiaremos. Esto suele estar limitado a empresas más grandes.',
                directFeedDetails: 'El enfoque más simple. Conéctate de inmediato usando tus credenciales maestras. Este método es el más común.',
                enableFeed: {
                    title: ({provider}: GoBackMessageParams) => `Habilita tu feed ${provider}`,
                    heading:
                        'Tenemos una integración directa con el emisor de su tarjeta y podemos importar los datos de sus transacciones a Expensify de forma rápida y precisa.\n\nPara empezar, simplemente:',
                    visa: 'Contamos con integraciones globales con Visa, aunque la elegibilidad varía según el banco y el programa de la tarjeta.\n\nTPara empezar, simplemente:',
                    mastercard: 'Contamos con integraciones globales con Mastercard, aunque la elegibilidad varía según el banco y el programa de la tarjeta.\n\nPara empezar, simplemente:',
                    vcf: `1. Visite [este artículo de ayuda](${CONST.COMPANY_CARDS_VISA_COMMERCIAL_CARD_HELP}) para obtener instrucciones detalladas sobre cómo configurar sus tarjetas comerciales Visa.\n\n2. [Póngase en contacto con su banco](${CONST.COMPANY_CARDS_VISA_COMMERCIAL_CARD_HELP}) para comprobar que admiten un feed personalizado para su programa, y pídales que lo activen.\n\n3. *Una vez que el feed esté habilitado y tengas sus datos, pasa a la siguiente pantalla.*`,
                    gl1025: `1. Visite [este artículo de ayuda](${CONST.COMPANY_CARDS_AMEX_COMMERCIAL_CARD_HELP}) para saber si American Express puede habilitar un feed personalizado para su programa.\n\n2. Una vez activada la alimentación, Amex le enviará una carta de producción.\n\n3. *Una vez que tenga la información de alimentación, continúe con la siguiente pantalla.*`,
                    cdf: `1. Visite [este artículo de ayuda](${CONST.COMPANY_CARDS_MASTERCARD_COMMERCIAL_CARDS}) para obtener instrucciones detalladas sobre cómo configurar sus tarjetas comerciales Mastercard.\n\n 2. [Póngase en contacto con su banco](${CONST.COMPANY_CARDS_MASTERCARD_COMMERCIAL_CARDS}) para verificar que admiten un feed personalizado para su programa, y pídales que lo habiliten.\n\n3. *Una vez que el feed esté habilitado y tengas sus datos, pasa a la siguiente pantalla.*`,
                    stripe: `1. Visita el Panel de Stripe y ve a [Configuraciones](${CONST.COMPANY_CARDS_STRIPE_HELP}).\n\n2. En Integraciones de Productos, haz clic en Habilitar junto a Expensify.\n\n3. Una vez que la fuente esté habilitada, haz clic en Enviar abajo y comenzaremos a añadirla.`,
                },
                whatBankIssuesCard: '¿Qué banco emite estas tarjetas?',
                enterNameOfBank: 'Introduzca el nombre del banco',
                feedDetails: {
                    vcf: {
                        title: '¿Cuáles son los datos de alimentación de Visa?',
                        processorLabel: 'ID del procesador',
                        bankLabel: 'Identificación de la institución financiera (banco)',
                        companyLabel: 'Empresa ID',
                        helpLabel: '¿Dónde encuentro estos IDs?',
                    },
                    gl1025: {
                        title: `¿Cuál es el nombre del archivo de entrega de Amex?`,
                        fileNameLabel: 'Nombre del archivo de entrega',
                        helpLabel: '¿Dónde encuentro el nombre del archivo de entrega?',
                    },
                    cdf: {
                        title: `¿Cuál es el identificador de distribución de Mastercard?`,
                        distributionLabel: 'ID de distribución',
                        helpLabel: '¿Dónde encuentro el ID de distribución?',
                    },
                },
                amexCorporate: 'Seleccione esto si el frente de sus tarjetas dice “Corporativa”',
                amexBusiness: 'Seleccione esta opción si el frente de sus tarjetas dice “Negocios”',
                amexPersonal: 'Selecciona esta opción si tus tarjetas son personales',
                error: {
                    pleaseSelectProvider: 'Seleccione un proveedor de tarjetas antes de continuar',
                    pleaseSelectBankAccount: 'Seleccione una cuenta bancaria antes de continuar',
                    pleaseSelectBank: 'Seleccione una bancaria antes de continuar',
                    pleaseSelectCountry: 'Seleccione un país antes de continuar',
                    pleaseSelectFeedType: 'Seleccione un tipo de pienso antes de continuar',
                },
            },
            statementCloseDate: {
                [CONST.COMPANY_CARDS.STATEMENT_CLOSE_DATE.LAST_DAY_OF_MONTH]: 'Último día del mes',
                [CONST.COMPANY_CARDS.STATEMENT_CLOSE_DATE.LAST_BUSINESS_DAY_OF_MONTH]: 'Último día hábil del mes',
                [CONST.COMPANY_CARDS.STATEMENT_CLOSE_DATE.CUSTOM_DAY_OF_MONTH]: 'Día personalizado del mes',
            },
            assignCard: 'Asignar tarjeta',
            findCard: 'Encontrar tarjeta',
            cardNumber: 'Número de la tarjeta',
            commercialFeed: 'Fuente comercial',
            feedName: ({feedName}: CompanyCardFeedNameParams) => `Tarjetas ${feedName}`,
            directFeed: 'Fuente directa',
            whoNeedsCardAssigned: '¿Quién necesita una tarjeta?',
            chooseCard: 'Elige una tarjeta',
            chooseCardFor: ({assignee, feed}: AssignCardParams) => `Elige una tarjeta para ${assignee} del feed de tarjetas ${feed}.`,
            noActiveCards: 'No hay tarjetas activas en este feed',
            somethingMightBeBroken: 'O algo podría estar roto. De cualquier manera, si tienes alguna pregunta,',
            contactConcierge: 'contacta a Concierge',
            chooseTransactionStartDate: 'Elige una fecha de inicio de transacciones',
            startDateDescription: 'Importaremos todas las transacciones desde esta fecha en adelante. Si no se especifica una fecha, iremos tan atrás como lo permita tu banco.',
            fromTheBeginning: 'Desde el principio',
            customStartDate: 'Fecha de inicio personalizada',
            customCloseDate: 'Fecha de cierre personalizada',
            letsDoubleCheck: 'Verifiquemos que todo esté bien.',
            confirmationDescription: 'Comenzaremos a importar transacciones inmediatamente.',
            cardholder: 'Titular de la tarjeta',
            card: 'Tarjeta',
            cardName: 'Nombre de la tarjeta',
            brokenConnectionErrorFirstPart: `La conexión de la fuente de tarjetas está rota. Por favor, `,
            brokenConnectionErrorLink: 'inicia sesión en tu banco ',
            brokenConnectionErrorSecondPart: 'para que podamos restablecer la conexión.',
            assignedCard: ({assignee, link}: AssignedCardParams) => `ha asignado a ${assignee} una ${link}! Las transacciones importadas aparecerán en este chat.`,
            companyCard: 'tarjeta de empresa',
            chooseCardFeed: 'Elige feed de tarjetas',
            ukRegulation:
                'Expensify, Inc. es un agente de Plaid Financial Ltd., una institución de pago autorizada y regulada por la Financial Conduct Authority conforme al Reglamento de Servicios de Pago de 2017 (Número de Referencia de la Firma: 804718). Plaid te proporciona servicios regulados de información de cuentas a través de Expensify Limited como su agente.',
        },
        expensifyCard: {
            issueAndManageCards: 'Emitir y gestionar Tarjetas Expensify',
            getStartedIssuing: 'Empieza emitiendo tu primera tarjeta virtual o física.',
            verificationInProgress: 'Verificación en curso...',
            verifyingTheDetails: 'Estamos verificando algunos detalles. Concierge te avisará cuando las tarjetas de Expensify estén listas para emitirse.',
            disclaimer:
                'La tarjeta comercial Expensify Visa® es emitida por The Bancorp Bank, N.A., miembro de la FDIC, en virtud de una licencia de Visa U.S.A. Inc. y no puede utilizarse en todos los comercios que aceptan tarjetas Visa. Apple® y el logotipo de Apple® son marcas comerciales de Apple Inc. registradas en EE.UU. y otros países. App Store es una marca de servicio de Apple Inc. Google Play y el logotipo de Google Play son marcas comerciales de Google LLC.',
            issueCard: 'Emitir tarjeta',
            findCard: 'Encontrar tarjeta',
            newCard: 'Nueva tarjeta',
            name: 'Nombre',
            lastFour: '4 últimos',
            limit: 'Limite',
            currentBalance: 'Saldo actual',
            currentBalanceDescription:
                'El saldo actual es la suma de todas las transacciones contabilizadas con la Tarjeta Expensify que se han producido desde la última fecha de liquidación.',
            balanceWillBeSettledOn: ({settlementDate}: SettlementDateParams) => `El saldo se liquidará el ${settlementDate}.`,
            settleBalance: 'Liquidar saldo',
            cardLimit: 'Límite de la tarjeta',
            remainingLimit: 'Límite restante',
            requestLimitIncrease: 'Solicitar aumento de límite',
            remainingLimitDescription:
                'A la hora de calcular tu límite restante, tenemos en cuenta una serie de factores: su antigüedad como cliente, la información relacionada con tu negocio que nos facilitaste al darte de alta y el efectivo disponible en tu cuenta bancaria comercial. Tu límite restante puede fluctuar a diario.',
            earnedCashback: 'Reembolso',
            earnedCashbackDescription: 'El saldo de devolución se basa en el gasto mensual realizado con la tarjeta Expensify en tu espacio de trabajo.',
            issueNewCard: 'Emitir nueva tarjeta',
            finishSetup: 'Terminar configuración',
            chooseBankAccount: 'Elegir cuenta bancaria',
            chooseExistingBank: 'Elige una cuenta bancaria comercial existente para pagar el saldo de su Tarjeta Expensify o añade una nueva cuenta bancaria.',
            accountEndingIn: 'Cuenta terminada en',
            addNewBankAccount: 'Añadir nueva cuenta bancaria',
            settlementAccount: 'Cuenta de liquidación',
            settlementAccountDescription: 'Elige una cuenta para pagar el saldo de tu Tarjeta Expensify.',
            settlementAccountInfoPt1: 'Asegúrate de que esta cuenta coincide con tu',
            settlementAccountInfoPt2: 'para que Reconciliación Continua funcione correctamente.',
            reconciliationAccount: 'Cuenta de conciliación',
            settlementFrequency: 'Frecuencia de liquidación',
            settlementFrequencyDescription: 'Elige con qué frecuencia pagarás el saldo de tu Tarjeta Expensify',
            settlementFrequencyInfo:
                'Si deseas cambiar a la liquidación mensual, deberás conectar tu cuenta bancaria a través de Plaid y tener un historial de saldo positivo en los últimos 90 días.',
            frequency: {
                daily: 'Cada día',
                monthly: 'Mensual',
            },
            cardDetails: 'Datos de la tarjeta',
            virtual: 'Virtual',
            physical: 'Física',
            deactivate: 'Desactivar tarjeta',
            changeCardLimit: 'Modificar el límite de la tarjeta',
            changeLimit: 'Modificar límite',
            smartLimitWarning: ({limit}: CharacterLimitParams) =>
                `Si cambias el límite de esta tarjeta a ${limit}, las nuevas transacciones serán rechazadas hasta que apruebes antiguos gastos de la tarjeta.`,
            monthlyLimitWarning: ({limit}: CharacterLimitParams) => `Si cambias el límite de esta tarjeta a ${limit}, las nuevas transacciones serán rechazadas hasta el próximo mes.`,
            fixedLimitWarning: ({limit}: CharacterLimitParams) => `Si cambias el límite de esta tarjeta a ${limit}, se rechazarán las nuevas transacciones.`,
            changeCardLimitType: 'Modificar el tipo de límite de la tarjeta',
            changeLimitType: 'Modificar el tipo de límite',
            changeCardSmartLimitTypeWarning: ({limit}: CharacterLimitParams) =>
                `Si cambias el tipo de límite de esta tarjeta a Límite inteligente, las nuevas transacciones serán rechazadas porque ya se ha alcanzado el límite de ${limit} no aprobado.`,
            changeCardMonthlyLimitTypeWarning: ({limit}: CharacterLimitParams) =>
                `Si cambias el tipo de límite de esta tarjeta a Mensual, las nuevas transacciones serán rechazadas porque ya se ha alcanzado el límite de ${limit} mensual.`,
            addShippingDetails: 'Añadir detalles de envío',
            issuedCard: ({assignee}: AssigneeParams) => `emitió a ${assignee} una Tarjeta Expensify. La tarjeta llegará en 2-3 días laborables.`,
            issuedCardNoShippingDetails: ({assignee}: AssigneeParams) => `emitió a ${assignee} una Tarjeta Expensify. La tarjeta se enviará una vez que se agreguen los detalles de envío.`,
            issuedCardVirtual: ({assignee, link}: IssueVirtualCardParams) => `emitió a ${assignee} una ${link} virtual. La tarjeta puede utilizarse inmediatamente.`,
            addedShippingDetails: ({assignee}: AssigneeParams) => `${assignee} agregó los detalles de envío. La Tarjeta Expensify llegará en 2-3 días hábiles.`,
            verifyingHeader: 'Verificando',
            bankAccountVerifiedHeader: 'Cuenta bancaria verificada',
            verifyingBankAccount: 'Verificando cuenta bancaria...',
            verifyingBankAccountDescription: 'Por favor, espere mientras confirmamos que esta cuenta se puede utilizar para emitir tarjetas Expensify.',
            bankAccountVerified: '¡Cuenta bancaria verificada!',
            bankAccountVerifiedDescription: 'Ahora puedes emitir tarjetas de Expensify para los miembros de tu espacio de trabajo.',
            oneMoreStep: 'Un paso más',
            oneMoreStepDescription: 'Parece que tenemos que verificar manualmente tu cuenta bancaria. Dirígete a Concierge, donde te esperan las instrucciones.',
            gotIt: 'Entendido',
            goToConcierge: 'Ir a Concierge',
        },
        categories: {
            deleteCategories: 'Eliminar categorías',
            deleteCategoriesPrompt: '¿Estás seguro de que quieres eliminar estas categorías?',
            deleteCategory: 'Eliminar categoría',
            deleteCategoryPrompt: '¿Estás seguro de que quieres eliminar esta categoría?',
            disableCategories: 'Desactivar categorías',
            disableCategory: 'Desactivar categoría',
            enableCategories: 'Activar categorías',
            enableCategory: 'Activar categoría',
            defaultSpendCategories: 'Categorías de gasto predeterminadas',
            spendCategoriesDescription: 'Personaliza cómo se categorizan los gastos de los comerciantes para las transacciones con tarjeta de crédito y los recibos escaneados.',
            deleteFailureMessage: 'Se ha producido un error al intentar eliminar la categoría. Por favor, inténtalo más tarde.',
            categoryName: 'Nombre de la categoría',
            requiresCategory: 'Los miembros deben clasificar todos los gastos',
            needCategoryForExportToIntegration: ({connectionName}: NeedCategoryForExportToIntegrationParams) =>
                `Todos los gastos deben estar categorizados para poder exportar a ${connectionName}.`,
            subtitle: 'Obtén una visión general de dónde te gastas el dinero. Utiliza las categorías predeterminadas o añade las tuyas propias.',
            emptyCategories: {
                title: 'No has creado ninguna categoría',
                subtitle: 'Añade una categoría para organizar tu gasto.',
            },
            emptyCategoriesWithAccounting: {
                subtitle1: 'Tus categorías se están importando actualmente desde una conexión de contabilidad. Dirígete a ',
                subtitle2: 'contabilidad',
                subtitle3: ' para hacer cualquier cambio.',
            },
            updateFailureMessage: 'Se ha producido un error al intentar eliminar la categoría. Por favor, inténtalo más tarde.',
            createFailureMessage: 'Se ha producido un error al intentar crear la categoría. Por favor, inténtalo más tarde.',
            addCategory: 'Añadir categoría',
            editCategory: 'Editar categoría',
            editCategories: 'Editar categorías',
            findCategory: 'Encontrar categoría',
            categoryRequiredError: 'Lo nombre de la categoría es obligatorio',
            existingCategoryError: 'Ya existe una categoría con este nombre',
            invalidCategoryName: 'Lo nombre de la categoría es invalido',
            importedFromAccountingSoftware: 'Categorías importadas desde',
            payrollCode: 'Código de nómina',
            updatePayrollCodeFailureMessage: 'Se produjo un error al actualizar el código de nómina, por favor intente nuevamente',
            glCode: 'Código de Libro Mayor',
            updateGLCodeFailureMessage: 'Se produjo un error al actualizar el código de Libro Mayor. Inténtelo nuevamente.',
            importCategories: 'Importar categorías',
            cannotDeleteOrDisableAllCategories: {
                title: 'No se pueden eliminar ni deshabilitar todas las categorías',
                description: `Debe quedar al menos una categoría habilitada porque tu espacio de trabajo requiere categorías.`,
            },
        },
        moreFeatures: {
            subtitle: 'Utiliza los botones de abajo para activar más funciones a medida que creces. Cada función aparecerá en el menú de navegación para una mayor personalización.',
            spendSection: {
                title: 'Gasto',
                subtitle: 'Habilita otras funcionalidades que ayudan a aumentar tu equipo.',
            },
            manageSection: {
                title: 'Gestionar',
                subtitle: 'Añade controles que ayudan a mantener los gastos dentro del presupuesto.',
            },
            earnSection: {
                title: 'Gane',
                subtitle: 'Agiliza tus ingresos y recibe pagos más rápido.',
            },
            organizeSection: {
                title: 'Organizar',
                subtitle: 'Agrupa y analiza el gasto, registra cada impuesto pagado.',
            },
            integrateSection: {
                title: 'Integrar',
                subtitle: 'Conecta Expensify a otros productos financieros populares.',
            },
            distanceRates: {
                title: 'Tasas de distancia',
                subtitle: 'Añade, actualiza y haz cumplir las tasas.',
            },
            perDiem: {
                title: 'Per diem',
                subtitle: 'Establece las tasas per diem para controlar los gastos diarios de los empleados.',
            },
            expensifyCard: {
                title: 'Tarjeta Expensify',
                subtitle: 'Obtén información y control sobre tus gastos.',
                disableCardTitle: 'Deshabilitar la Tarjeta Expensify',
                disableCardPrompt: 'No puedes deshabilitar la Tarjeta Expensify porque ya está en uso. Por favor, contacta con Concierge para conocer los pasos a seguir.',
                disableCardButton: 'Chatear con Concierge',
                feed: {
                    title: 'Consigue la Tarjeta Expensify',
                    subTitle: 'Simplifica los gastos de tu empresa y ahorra hasta un 50 % en tu factura de Expensify, además:',
                    features: {
                        cashBack: 'Devolución de dinero en cada compra en Estados Unidos',
                        unlimited: 'Un número ilimitado de tarjetas virtuales',
                        spend: 'Controles de gastos y límites personalizados',
                    },
                    ctaTitle: 'Emitir nueva tarjeta',
                },
            },
            companyCards: {
                title: 'Tarjetas de empresa',
                subtitle: 'Importar gastos de las tarjetas de empresa existentes.',
                feed: {
                    title: 'Importar tarjetas de empresa',
                    features: {
                        support: 'Compatibilidad con los principales proveedores de tarjetas',
                        assignCards: 'Asignar tarjetas a todo el equipo',
                        automaticImport: 'Importación automática de transacciones',
                    },
                },
                disableCardTitle: 'Deshabilitar tarjetas de empresa',
                disableCardPrompt: 'No puedes deshabilitar las tarjetas de empresa porque esta función está en uso. Por favor, contacta a Concierge para los próximos pasos.',
                disableCardButton: 'Chatear con Concierge',
                cardDetails: 'Datos de la tarjeta',
                cardNumber: 'Número de la tarjeta',
                cardholder: 'Titular de la tarjeta',
                cardName: 'Nombre de la tarjeta',
                integrationExport: ({integration, type}: IntegrationExportParams) =>
                    integration && type ? `Exportación a ${integration} ${type.toLowerCase()}` : `Exportación a ${integration}`,
                integrationExportTitleFirstPart: ({integration}: IntegrationExportParams) => `Seleccione la cuenta ${integration} donde se deben exportar las transacciones.`,
                integrationExportTitleLinkPart: 'opción de exportación',
                integrationExportTitlePart: 'Seleccione una cuenta diferente',
                integrationExportTitleSecondPart: 'para cambiar las cuentas disponibles.',
                lastUpdated: 'Última actualización',
                transactionStartDate: 'Fecha de inicio de transacciones',
                updateCard: 'Actualizar tarjeta',
                unassignCard: 'Desasignar tarjeta',
                unassign: 'Desasignar',
                unassignCardDescription: 'Desasignar esta tarjeta eliminará todas las transacciones en informes en borrador de la cuenta del titular.',
                assignCard: 'Asignar tarjeta',
                cardFeedName: 'Nombre del feed de tarjeta',
                cardFeedNameDescription: 'Dale al feed de tarjeta un nombre único para que puedas distinguirlo de los demás.',
                cardFeedTransaction: 'Eliminar transacciones',
                cardFeedTransactionDescription: 'Elige si los titulares de tarjetas pueden eliminar transacciones de tarjetas. Las nuevas transacciones seguirán estas reglas.',
                cardFeedRestrictDeletingTransaction: 'Restringir eliminación de transacciones',
                cardFeedAllowDeletingTransaction: 'Permitir eliminación de transacciones',
                removeCardFeed: 'Quitar la alimentación de tarjetas',
                removeCardFeedTitle: ({feedName}: CompanyCardFeedNameParams) => `Eliminar el feed de ${feedName}`,
                removeCardFeedDescription: '¿Estás seguro de que deseas eliminar esta fuente de tarjetas? Esto anulará la asignación de todas las tarjetas.',
                error: {
                    feedNameRequired: 'Se requiere el nombre de la fuente de la tarjeta',
                    statementCloseDateRequired: 'Por favor, selecciona una fecha de cierre del estado de cuenta.',
                },
                corporate: 'Restringir eliminación de transacciones',
                personal: 'Permitir eliminación de transacciones',
                setFeedNameDescription: 'Dale al feed de tarjeta un nombre único para que puedas distinguirlo de los demás',
                setTransactionLiabilityDescription:
                    'Cuando está habilitada, los titulares de tarjetas pueden eliminar transacciones con tarjeta. Las transacciones nuevas seguirán esta regla.',
                emptyAddedFeedTitle: 'Asignar tarjetas de empresa',
                emptyAddedFeedDescription: 'Comienza asignando tu primera tarjeta a un miembro.',
                pendingFeedTitle: `Estamos revisando tu solicitud...`,
                pendingFeedDescription: `Actualmente estamos revisando los detalles de tu feed. Una vez hecho esto, nos pondremos en contacto contigo a través de`,
                pendingBankTitle: 'Comprueba la ventana de tu navegador',
                pendingBankDescription: ({bankName}: CompanyCardBankName) => `Conéctese a ${bankName} a través de la ventana del navegador que acaba de abrir. Si no se abrió, `,
                pendingBankLink: 'por favor haga clic aquí',
                giveItNameInstruction: 'Nombra la tarjeta para distingirla de las demás.',
                updating: 'Actualizando...',
                noAccountsFound: 'No se han encontrado cuentas',
                defaultCard: 'Tarjeta predeterminada',
                downgradeTitle: 'No se puede degradar el espacio de trabajo',
                downgradeSubTitleFirstPart: `No es posible cambiar a una versión inferior de este espacio de trabajo porque hay varias fuentes de tarjetas conectadas (excluidas las tarjetas Expensify). Por favor`,
                downgradeSubTitleMiddlePart: 'mantenga solo una tarjeta',
                downgradeSubTitleLastPart: 'para continuar.',
                noAccountsFoundDescription: ({connection}: ConnectionParams) => `Añade la cuenta en ${connection} y sincroniza la conexión de nuevo`,
                expensifyCardBannerTitle: 'Obtén la Tarjeta Expensify',
                expensifyCardBannerSubtitle:
                    'Disfruta de una devolución en cada compra en Estados Unidos, hasta un 50% de descuento en tu factura de Expensify, tarjetas virtuales ilimitadas y mucho más.',
                expensifyCardBannerLearnMoreButton: 'Más información',
                statementCloseDateTitle: 'Fecha de cierre del estado de cuenta',
                statementCloseDateDescription: 'Indícanos cuándo cierra el estado de cuenta de tu tarjeta y crearemos uno correspondiente en Expensify.',
            },
            workflows: {
                title: 'Flujos de trabajo',
                subtitle: 'Configura cómo se aprueba y paga los gastos.',
                disableApprovalPrompt:
                    'Las Tarjetas Expensify de este espacio de trabajo dependen actualmente de la aprobación para definir sus Límites Inteligentes. Por favor, modifica los tipos de límite de cualquier Tarjeta Expensify con Límites Inteligentes antes de deshabilitar las aprobaciones.',
            },
            invoices: {
                title: 'Facturas',
                subtitle: 'Enviar y recibir facturas.',
            },
            categories: {
                title: 'Categorías',
                subtitle: 'Monitoriza y organiza los gastos.',
            },
            tags: {
                title: 'Etiquetas',
                subtitle: 'Clasifica costes y rastrea gastos facturables.',
            },
            taxes: {
                title: 'Impuestos',
                subtitle: 'Documenta y reclama los impuestos aplicables.',
            },
            reportFields: {
                title: 'Campos de informes',
                subtitle: 'Configura campos personalizados para los gastos.',
            },
            connections: {
                title: 'Contabilidad',
                subtitle: 'Sincroniza tu plan de cuentas y otras opciones.',
            },
            connectionsWarningModal: {
                featureEnabledTitle: 'No tan rápido...',
                featureEnabledText: 'Para activar o desactivar esta función, cambia la configuración de importación contable.',
                disconnectText: 'Para desactivar la contabilidad, desconecta tu conexión contable del espacio de trabajo.',
                manageSettings: 'Gestionar la configuración',
            },
            workflowWarningModal: {
                featureEnabledTitle: 'No tan rápido...',
                featureEnabledText:
                    'Las Tarjetas Expensify de este espacio de trabajo dependen actualmente de la aprobación para definir sus Límites Inteligentes.\n\nPor favor, modifica los tipos de límite de cualquier Tarjeta Expensify con Límites Inteligentes antes de deshabilitar las flujos de trabajo.',
                confirmText: 'Ir a Tarjeta Expensify',
            },
            rules: {
                title: 'Reglas',
                subtitle: 'Solicita recibos, resalta gastos de alto importe y mucho más.',
            },
        },
        reportFields: {
            addField: 'Añadir campo',
            delete: 'Eliminar campo',
            deleteFields: 'Eliminar campos',
            findReportField: 'Encontrar campo del informe',
            deleteConfirmation: '¿Está seguro de que desea eliminar este campo del informe?',
            deleteFieldsConfirmation: '¿Está seguro de que desea eliminar estos campos del informe?',
            emptyReportFields: {
                title: 'No has creado ningún campo de informe',
                subtitle: 'Añade un campo personalizado (texto, fecha o desplegable) que aparezca en los informes.',
            },
            subtitle: 'Los campos de informe se aplican a todos los gastos y pueden ser útiles cuando quieras solicitar información adicional.',
            disableReportFields: 'Desactivar campos de informe',
            disableReportFieldsConfirmation: 'Estás seguro? Se eliminarán los campos de texto y fecha y se desactivarán las listas.',
            importedFromAccountingSoftware: 'Campos de informes importadas desde',
            textType: 'Texto',
            dateType: 'Fecha',
            dropdownType: 'Lista',
            textAlternateText: 'Añade un campo para introducir texto libre.',
            dateAlternateText: 'Añade un calendario para la selección de fechas.',
            dropdownAlternateText: 'Añade una lista de opciones para elegir.',
            nameInputSubtitle: 'Elige un nombre para el campo del informe.',
            typeInputSubtitle: 'Elige qué tipo de campo de informe utilizar.',
            initialValueInputSubtitle: 'Ingresa un valor inicial para mostrar en el campo del informe.',
            listValuesInputSubtitle: 'Estos valores aparecerán en el desplegable del campo de tu informe. Los miembros pueden seleccionar los valores habilitados.',
            listInputSubtitle: 'Estos valores aparecerán en la lista de campos de tu informe. Los miembros pueden seleccionar los valores habilitados.',
            deleteValue: 'Eliminar valor',
            deleteValues: 'Eliminar valores',
            disableValue: 'Desactivar valor',
            disableValues: 'Desactivar valores',
            enableValue: 'Habilitar valor',
            enableValues: 'Habilitar valores',
            emptyReportFieldsValues: {
                title: 'No has creado ningún valor en la lista',
                subtitle: 'Añade valores personalizados para que aparezcan en los informes.',
            },
            deleteValuePrompt: '¿Estás seguro de que quieres eliminar este valor de la lista?',
            deleteValuesPrompt: '¿Estás seguro de que quieres eliminar estos valores de la lista?',
            listValueRequiredError: 'Ingresa un nombre para el valor de la lista',
            existingListValueError: 'Ya existe un valor en la lista con este nombre',
            editValue: 'Editar valor',
            listValues: 'Valores de la lista',
            addValue: 'Añade valor',
            existingReportFieldNameError: 'Ya existe un campo de informe con este nombre',
            reportFieldNameRequiredError: 'Ingresa un nombre de campo de informe',
            reportFieldTypeRequiredError: 'Elige un tipo de campo de informe',
            reportFieldInitialValueRequiredError: 'Elige un valor inicial de campo de informe',
            genericFailureMessage: 'Se ha producido un error al actualizar el campo de informe. Por favor, inténtalo de nuevo.',
        },
        tags: {
            tagName: 'Nombre de etiqueta',
            requiresTag: 'Los miembros deben etiquetar todos los gastos',
            trackBillable: 'Permitir marcar gastos como facturables',
            customTagName: 'Nombre de etiqueta personalizada',
            enableTag: 'Habilitar etiqueta',
            enableTags: 'Habilitar etiquetas',
            requireTag: 'Requerir etiqueta',
            requireTags: 'Requerir etiquetas',
            notRequireTags: 'No requerir etiquetas',
            disableTag: 'Desactivar etiqueta',
            disableTags: 'Desactivar etiquetas',
            addTag: 'Añadir etiqueta',
            editTag: 'Editar etiqueta',
            editTags: 'Editar etiquetas',
            findTag: 'Encontrar etiquetas',
            subtitle: 'Las etiquetas añaden formas más detalladas de clasificar los costos.',
            dependentMultiLevelTagsSubtitle: {
                phrase1: ' Estás usando ',
                phrase2: 'etiquetas dependientes',
                phrase3: '. Puedes ',
                phrase4: 'reimportar una hoja de cálculo',
                phrase5: ' para actualizar tus etiquetas.',
            },
            emptyTags: {
                title: 'No has creado ninguna etiqueta',
                subtitle: 'Añade una etiqueta para realizar el seguimiento de proyectos, ubicaciones, departamentos y otros.',
                subtitle1: 'Importa una hoja de cálculo para añadir etiquetas y organizar proyectos, ubicaciones, departamentos y más.',
                subtitle2: ' Obtén más información',
                subtitle3: ' sobre cómo dar formato a los archivos de etiquetas.',
            },
            emptyTagsWithAccounting: {
                subtitle1: 'Tus etiquetas se están importando actualmente desde una conexión de contabilidad. Dirígete a ',
                subtitle2: 'contabilidad',
                subtitle3: ' para hacer cualquier cambio.',
            },
            deleteTag: 'Eliminar etiqueta',
            deleteTags: 'Eliminar etiquetas',
            deleteTagConfirmation: '¿Estás seguro de que quieres eliminar esta etiqueta?',
            deleteTagsConfirmation: '¿Estás seguro de que quieres eliminar estas etiquetas?',
            deleteFailureMessage: 'Se ha producido un error al intentar eliminar la etiqueta. Por favor, inténtalo más tarde.',
            tagRequiredError: 'Lo nombre de la etiqueta es obligatorio',
            existingTagError: 'Ya existe una etiqueta con este nombre',
            invalidTagNameError: 'El nombre de la etiqueta no puede ser 0. Por favor, elige un valor diferente.',
            genericFailureMessage: 'Se ha producido un error al actualizar la etiqueta. Por favor, inténtelo nuevamente.',
            importedFromAccountingSoftware: 'Etiquetas importadas desde',
            glCode: 'Código de Libro Mayor',
            updateGLCodeFailureMessage: 'Se produjo un error al actualizar el código de Libro Mayor. Por favor, inténtelo nuevamente.',
            tagRules: 'Reglas de etiquetas',
            approverDescription: 'Aprobador',
            importTags: 'Importar categorías',
            importTagsSupportingText: 'Clasifica tus gastos con un tipo de etiqueta o con varios.',
            configureMultiLevelTags: 'Configura etiquetas multinivel',
            importMultiLevelTagsSupportingText: `Aquí tienes una vista previa de tus etiquetas. Si todo se ve bien, haz clic abajo para importarlas.`,
            importMultiLevelTags: {
                firstRowTitle: 'La primera fila es el título de cada lista de etiquetas',
                independentTags: 'Estas son etiquetas independientes',
                glAdjacentColumn: 'Hay un código GL en la columna adyacente',
            },
            tagLevel: {
                singleLevel: 'Nivel único de etiquetas',
                multiLevel: 'Etiquetas multinivel',
            },
            switchSingleToMultiLevelTagWarning: {
                title: 'Cambiar niveles de etiquetas',
                prompt1: 'Cambiar el nivel de etiquetas eliminará todas las etiquetas actuales.',
                prompt2: ' Te recomendamos primero',
                prompt3: ' descargar una copia de seguridad',
                prompt4: ' exportando tus etiquetas.',
                prompt5: ' Aprende más',
                prompt6: ' sobre los niveles de etiquetas.',
            },

            importedTagsMessage: ({columnCounts}: ImportedTagsMessageParams) =>
                `Hemos encontrado *${columnCounts} columnas* en su hoja de cálculo. Seleccione *Nombre* junto a la columna que contiene los nombres de las etiquetas. También puede seleccionar *Habilitado* junto a la columna que establece el estado de la etiqueta.`,
            cannotDeleteOrDisableAllTags: {
                title: 'No se pueden eliminar ni deshabilitar todas las etiquetas',
                description: `Debe quedar al menos una etiqueta habilitada porque tu espacio de trabajo requiere etiquetas.`,
            },
            cannotMakeAllTagsOptional: {
                title: 'No se pueden hacer opcionales todas las etiquetas',
                description: `Debe haber al menos una etiqueta obligatoria porque la configuración de tu espacio de trabajo requiere etiquetas.`,
            },
            tagCount: () => ({
                one: '1 etiqueta',
                other: (count: number) => `${count} etiquetas`,
            }),
        },
        taxes: {
            subtitle: 'Añade nombres, tasas y establezca valores por defecto para los impuestos.',
            addRate: 'Añadir tasa',
            workspaceDefault: 'Moneda por defecto del espacio de trabajo',
            foreignDefault: 'Moneda extranjera por defecto',
            customTaxName: 'Nombre del impuesto',
            value: 'Valor',
            taxRate: 'Tasa de impuesto',
            findTaxRate: 'Encontrar tasa de impuesto',
            taxReclaimableOn: 'Impuesto recuperable en',
            error: {
                taxRateAlreadyExists: 'Ya existe un impuesto con este nombre',
                taxCodeAlreadyExists: 'Ya existe un código de impuesto con este nombre',
                customNameRequired: 'El nombre del impuesto es obligatorio',
                valuePercentageRange: 'Por favor, introduce un porcentaje entre 0 y 100',
                deleteFailureMessage: 'Se ha producido un error al intentar eliminar la tasa de impuesto. Por favor, inténtalo más tarde.',
                updateFailureMessage: 'Se ha producido un error al intentar modificar la tasa de impuesto. Por favor, inténtalo más tarde.',
                createFailureMessage: 'Se ha producido un error al intentar crear la tasa de impuesto. Por favor, inténtalo más tarde.',
                updateTaxClaimableFailureMessage: 'La porción recuperable debe ser menor al monto del importe por distancia',
            },
            deleteTaxConfirmation: '¿Estás seguro de que quieres eliminar este impuesto?',
            deleteMultipleTaxConfirmation: ({taxAmount}: TaxAmountParams) => `¿Estás seguro de que quieres eliminar ${taxAmount} impuestos?`,
            actions: {
                delete: 'Eliminar tasa',
                deleteMultiple: 'Eliminar tasas',
                enable: 'Activar tasa',
                disable: 'Desactivar tasa',
                enableTaxRates: () => ({
                    one: 'Activar tasa',
                    other: 'Activar tasas',
                }),
                disableTaxRates: () => ({
                    one: 'Desactivar tasa',
                    other: 'Desactivar tasas',
                }),
            },
            importedFromAccountingSoftware: 'Impuestos importadas desde',
            taxCode: 'Código de impuesto',
            updateTaxCodeFailureMessage: 'Se produjo un error al actualizar el código tributario, inténtelo nuevamente',
        },
        emptyWorkspace: {
            title: 'Crea un espacio de trabajo',
            subtitle: 'Crea un espacio de trabajo para organizar recibos, reembolsar gastos, gestionar viajes, enviar facturas y mucho más, todo a la velocidad del chat.',
            createAWorkspaceCTA: 'Comenzar',
            features: {
                trackAndCollect: 'Organiza recibos',
                reimbursements: 'Reembolsa a los empleados',
                companyCards: 'Gestiona tarjetas de la empresa',
            },
            notFound: 'No se encontró ningún espacio de trabajo',
            description: 'Las salas son un gran lugar para discutir y trabajar con varias personas. Para comenzar a colaborar, cree o únase a un espacio de trabajo',
        },
        new: {
            newWorkspace: 'Nuevo espacio de trabajo',
            getTheExpensifyCardAndMore: 'Consigue la Tarjeta Expensify y más',
            confirmWorkspace: 'Confirmar espacio de trabajo',
            myGroupWorkspace: ({workspaceNumber}: {workspaceNumber?: number}) => `Mi Espacio de Trabajo en Grupo${workspaceNumber ? ` ${workspaceNumber}` : ''}`,
            workspaceName: ({userName, workspaceNumber}: NewWorkspaceNameParams) => `Espacio de trabajo${workspaceNumber ? ` ${workspaceNumber}` : ''} de ${userName}`,
        },
        people: {
            genericFailureMessage: 'Se ha producido un error al intentar eliminar a un miembro del espacio de trabajo. Por favor, inténtalo más tarde.',
            removeMembersPrompt: ({memberName}: {memberName: string}) => ({
                one: `¿Estás seguro de que deseas eliminar ${memberName}`,
                other: '¿Estás seguro de que deseas eliminar a estos miembros?',
            }),
            removeMembersWarningPrompt: ({memberName, ownerName}: RemoveMembersWarningPrompt) =>
                `${memberName} es un aprobador en este espacio de trabajo. Cuando lo elimine de este espacio de trabajo, los sustituiremos en el flujo de trabajo de aprobación por el propietario del espacio de trabajo, ${ownerName}`,
            removeMembersTitle: () => ({
                one: 'Eliminar miembro',
                other: 'Eliminar miembros',
            }),
            findMember: 'Encontrar miembro',
            removeWorkspaceMemberButtonTitle: 'Eliminar del espacio de trabajo',
            removeGroupMemberButtonTitle: 'Eliminar del grupo',
            removeRoomMemberButtonTitle: 'Eliminar del chat',
            removeMemberPrompt: ({memberName}: RemoveMemberPromptParams) => `¿Estás seguro de que deseas eliminar a ${memberName}?`,
            removeMemberTitle: 'Eliminar miembro',
            transferOwner: 'Transferir la propiedad',
            makeMember: 'Hacer miembro',
            makeAdmin: 'Hacer administrador',
            makeAuditor: 'Hacer auditor',
            selectAll: 'Seleccionar todo',
            error: {
                genericAdd: 'Ha ocurrido un problema al añadir el miembro al espacio de trabajo',
                cannotRemove: 'No puedes eliminarte ni a ti mismo ni al dueño del espacio de trabajo',
                genericRemove: 'Ha ocurrido un problema al eliminar al miembro del espacio de trabajo',
            },
            addedWithPrimary: 'Se agregaron algunos miembros con sus nombres de usuario principales.',
            invitedBySecondaryLogin: ({secondaryLogin}: SecondaryLoginParams) => `Agregado por nombre de usuario secundario ${secondaryLogin}.`,
            membersListTitle: 'Directorio de todos los miembros del espacio de trabajo.',
            importMembers: 'Importar miembros',
        },
        accounting: {
            settings: 'configuración',
            title: 'Conexiones',
            subtitle: 'Conecta a tu sistema de contabilidad para codificar transacciones con tu plan de cuentas, auto-cotejar pagos, y mantener tus finanzas sincronizadas.',
            qbo: 'QuickBooks Online',
            qbd: 'QuickBooks Desktop',
            xero: 'Xero',
            netsuite: 'NetSuite',
            intacct: 'Sage Intacct',
            sap: 'SAP',
            oracle: 'Oracle',
            microsoftDynamics: 'Microsoft Dynamics',
            talkYourOnboardingSpecialist: 'Chatea con tu especialista asignado.',
            talkYourAccountManager: 'Chatea con tu gestor de cuenta.',
            talkToConcierge: 'Chatear con Concierge.',
            needAnotherAccounting: '¿Necesitas otro software de contabilidad? ',
            connectionName: ({connectionName}: ConnectionNameParams) => {
                switch (connectionName) {
                    case CONST.POLICY.CONNECTIONS.NAME.QBO:
                        return 'QuickBooks Online';
                    case CONST.POLICY.CONNECTIONS.NAME.XERO:
                        return 'Xero';
                    case CONST.POLICY.CONNECTIONS.NAME.NETSUITE:
                        return 'NetSuite';
                    case CONST.POLICY.CONNECTIONS.NAME.SAGE_INTACCT:
                        return 'Sage Intacct';
                    default: {
                        return '';
                    }
                }
            },
            errorODIntegration: 'Hay un error con una conexión que se ha configurado en Expensify Classic. ',
            goToODToFix: 'Ve a Expensify Classic para solucionar este problema.',
            goToODToSettings: 'Ve a Expensify Classic para gestionar tus configuraciones.',
            setup: 'Configurar',
            lastSync: ({relativeDate}: LastSyncAccountingParams) => `Recién sincronizado ${relativeDate}`,
            notSync: 'No sincronizado',
            import: 'Importar',
            export: 'Exportar',
            advanced: 'Avanzado',
            other: 'Otro',
            syncNow: 'Sincronizar ahora',
            disconnect: 'Desconectar',
            reinstall: 'Reinstalar el conector',
            disconnectTitle: ({connectionName}: OptionalParam<ConnectionNameParams> = {}) => {
                const integrationName =
                    connectionName && CONST.POLICY.CONNECTIONS.NAME_USER_FRIENDLY[connectionName] ? CONST.POLICY.CONNECTIONS.NAME_USER_FRIENDLY[connectionName] : 'integración';
                return `Desconectar ${integrationName}`;
            },
            connectTitle: ({connectionName}: ConnectionNameParams) => `Conectar ${CONST.POLICY.CONNECTIONS.NAME_USER_FRIENDLY[connectionName] ?? 'accounting integration'}`,
            syncError: ({connectionName}: OptionalParam<ConnectionNameParams> = {}) => {
                switch (connectionName) {
                    case CONST.POLICY.CONNECTIONS.NAME.QBO:
                        return 'No se puede conectar a QuickBooks Online';
                    case CONST.POLICY.CONNECTIONS.NAME.XERO:
                        return 'No se puede conectar a Xero';
                    case CONST.POLICY.CONNECTIONS.NAME.NETSUITE:
                        return 'No se puede conectar a NetSuite';
                    case CONST.POLICY.CONNECTIONS.NAME.QBD:
                        return 'No se puede conectar a QuickBooks Desktop';
                    default: {
                        return 'No se ha podido conectar a la integración';
                    }
                }
            },
            accounts: 'Plan de cuentas',
            taxes: 'Impuestos',
            imported: 'Importado',
            notImported: 'No importado',
            importAsCategory: 'Importado como categorías',
            importTypes: {
                [CONST.INTEGRATION_ENTITY_MAP_TYPES.IMPORTED]: 'Importado',
                [CONST.INTEGRATION_ENTITY_MAP_TYPES.TAG]: 'Importado como etiquetas',
                [CONST.INTEGRATION_ENTITY_MAP_TYPES.DEFAULT]: 'Importado',
                [CONST.INTEGRATION_ENTITY_MAP_TYPES.NOT_IMPORTED]: 'No importado',
                [CONST.INTEGRATION_ENTITY_MAP_TYPES.NONE]: 'No importado',
                [CONST.INTEGRATION_ENTITY_MAP_TYPES.REPORT_FIELD]: 'Importado como campos de informe',
                [CONST.INTEGRATION_ENTITY_MAP_TYPES.NETSUITE_DEFAULT]: 'Predeterminado del empleado NetSuite',
            },
            disconnectPrompt: ({connectionName}: OptionalParam<ConnectionNameParams> = {}) => {
                const integrationName =
                    connectionName && CONST.POLICY.CONNECTIONS.NAME_USER_FRIENDLY[connectionName] ? CONST.POLICY.CONNECTIONS.NAME_USER_FRIENDLY[connectionName] : 'integración';
                return `¿Estás seguro de que quieres desconectar ${integrationName}?`;
            },
            connectPrompt: ({connectionName}: ConnectionNameParams) =>
                `¿Estás seguro de que quieres conectar a ${
                    CONST.POLICY.CONNECTIONS.NAME_USER_FRIENDLY[connectionName] ?? 'esta integración contable'
                }? Esto eliminará cualquier conexión contable existente.`,
            enterCredentials: 'Ingresa tus credenciales',
            connections: {
                syncStageName: ({stage}: SyncStageNameConnectionsParams) => {
                    switch (stage) {
                        case 'quickbooksOnlineImportCustomers':
                        case 'quickbooksDesktopImportCustomers':
                            return 'Importando clientes';
                        case 'quickbooksOnlineImportEmployees':
                        case 'netSuiteSyncImportEmployees':
                        case 'intacctImportEmployees':
                        case 'quickbooksDesktopImportEmployees':
                            return 'Importando empleados';
                        case 'quickbooksOnlineImportAccounts':
                        case 'quickbooksDesktopImportAccounts':
                            return 'Importando cuentas';
                        case 'quickbooksOnlineImportClasses':
                        case 'quickbooksDesktopImportClasses':
                            return 'Importando clases';
                        case 'quickbooksOnlineImportLocations':
                            return 'Importando localidades';
                        case 'quickbooksOnlineImportProcessing':
                            return 'Procesando datos importados';
                        case 'quickbooksOnlineSyncBillPayments':
                        case 'intacctImportSyncBillPayments':
                            return 'Sincronizando reportes reembolsados y facturas pagadas';
                        case 'quickbooksOnlineSyncTaxCodes':
                            return 'Importando tipos de impuestos';
                        case 'quickbooksOnlineCheckConnection':
                            return 'Revisando conexión a QuickBooks Online';
                        case 'quickbooksOnlineImportMain':
                            return 'Importando datos desde QuickBooks Online';
                        case 'startingImportXero':
                            return 'Importando datos desde Xero';
                        case 'startingImportQBO':
                            return 'Importando datos desde QuickBooks Online';
                        case 'startingImportQBD':
                        case 'quickbooksDesktopImportMore':
                            return 'Importando datos desde QuickBooks Desktop';
                        case 'quickbooksDesktopImportTitle':
                            return 'Importando título';
                        case 'quickbooksDesktopImportApproveCertificate':
                            return 'Importando certificado de aprobación';
                        case 'quickbooksDesktopImportDimensions':
                            return 'Importando dimensiones';
                        case 'quickbooksDesktopImportSavePolicy':
                            return 'Importando política de guardado';
                        case 'quickbooksDesktopWebConnectorReminder':
                            return 'Aún sincronizando datos con QuickBooks... Por favor, asegúrate de que el Conector Web esté en funcionamiento';
                        case 'quickbooksOnlineSyncTitle':
                            return 'Sincronizando datos desde QuickBooks Online';
                        case 'quickbooksOnlineSyncLoadData':
                        case 'xeroSyncStep':
                        case 'intacctImportData':
                            return 'Cargando datos';
                        case 'quickbooksOnlineSyncApplyCategories':
                            return 'Actualizando categorías';
                        case 'quickbooksOnlineSyncApplyCustomers':
                            return 'Actualizando clientes/proyectos';
                        case 'quickbooksOnlineSyncApplyEmployees':
                            return 'Actualizando empleados';
                        case 'quickbooksOnlineSyncApplyClassesLocations':
                            return 'Actualizando clases';
                        case 'jobDone':
                            return 'Esperando a que se carguen los datos importados';
                        case 'xeroSyncImportChartOfAccounts':
                            return 'Sincronizando plan de cuentas';
                        case 'xeroSyncImportCategories':
                            return 'Sincronizando categorias';
                        case 'xeroSyncImportCustomers':
                            return 'Sincronizando clientes';
                        case 'xeroSyncXeroReimbursedReports':
                            return 'Marcar los informes de Expensify como reembolsados';
                        case 'xeroSyncExpensifyReimbursedReports':
                            return 'Marcar facturas y recibos de Xero como pagados';
                        case 'xeroSyncImportTrackingCategories':
                            return 'Sincronizando categorías de seguimiento';
                        case 'xeroSyncImportBankAccounts':
                            return 'Sincronizando cuentas bancarias';
                        case 'xeroSyncImportTaxRates':
                            return 'Sincronizando las tasas de impuesto';
                        case 'xeroCheckConnection':
                            return 'Comprobando la conexión a Xero';
                        case 'xeroSyncTitle':
                            return 'Sincronizando los datos de Xero';
                        case 'netSuiteSyncConnection':
                            return 'Iniciando conexión a NetSuite';
                        case 'netSuiteSyncCustomers':
                            return 'Importando clientes';
                        case 'netSuiteSyncInitData':
                            return 'Recuperando datos de NetSuite';
                        case 'netSuiteSyncImportTaxes':
                            return 'Importando impuestos';
                        case 'netSuiteSyncImportItems':
                            return 'Importando artículos';
                        case 'netSuiteSyncData':
                            return 'Importando datos a Expensify';
                        case 'netSuiteSyncAccounts':
                            return 'Sincronizando cuentas';
                        case 'netSuiteSyncCurrencies':
                            return 'Sincronizando divisas';
                        case 'netSuiteSyncCategories':
                            return 'Sincronizando categorías';
                        case 'netSuiteSyncReportFields':
                            return 'Importando datos como campos de informe de Expensify';
                        case 'netSuiteSyncTags':
                            return 'Importando datos como etiquetas de Expensify';
                        case 'netSuiteSyncUpdateConnectionData':
                            return 'Actualizando información de conexión';
                        case 'netSuiteSyncNetSuiteReimbursedReports':
                            return 'Marcando informes de Expensify como reembolsados';
                        case 'netSuiteSyncImportCustomLists':
                            return 'Importando listas personalizadas';
                        case 'netSuiteSyncImportSubsidiaries':
                            return 'Importando subsidiarias';
                        case 'netSuiteSyncImportVendors':
                        case 'quickbooksDesktopImportVendors':
                            return 'Importando proveedores';
                        case 'netSuiteSyncExpensifyReimbursedReports':
                            return 'Marcando facturas y recibos de NetSuite como pagados';
                        case 'netSuiteImportVendorsTitle':
                            return 'Importando proveedores';
                        case 'netSuiteImportCustomListsTitle':
                            return 'Importando listas personalizadas';
                        case 'intacctCheckConnection':
                            return 'Comprobando la conexión a Sage Intacct';
                        case 'intacctImportDimensions':
                            return 'Importando dimensiones';
                        case 'intacctImportTitle':
                            return 'Importando datos desde Sage Intacct';
                        default: {
                            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
                            return `Translation missing for stage: ${stage}`;
                        }
                    }
                },
            },
            preferredExporter: 'Exportador preferido',
            exportPreferredExporterNote:
                'Puede ser cualquier administrador del espacio de trabajo, pero debe ser un administrador de dominio si configura diferentes cuentas de exportación para tarjetas de empresa individuales en la configuración del dominio.',
            exportPreferredExporterSubNote: 'Una vez configurado, el exportador preferido verá los informes para exportar en tu cuenta.',
            exportAs: 'Exportar cómo',
            exportOutOfPocket: ' Exportar gastos por cuenta propia como',
            exportCompanyCard: 'Exportar gastos de la tarjeta de empresa como',
            exportDate: 'Fecha de exportación',
            defaultVendor: 'Proveedor predeterminado',
            autoSync: 'Autosincronización',
            autoSyncDescription: 'Sincroniza NetSuite y Expensify automáticamente, todos los días. Exporta el informe finalizado en tiempo real',
            reimbursedReports: 'Sincronizar informes reembolsados',
            cardReconciliation: 'Conciliación de tarjetas',
            reconciliationAccount: 'Cuenta de conciliación',
            continuousReconciliation: 'Conciliación continua',
            saveHoursOnReconciliation:
                'Ahorra horas de conciliación en cada período contable haciendo que Expensify concilie continuamente los extractos y liquidaciones de la Tarjeta Expensify en tu nombre.',
            enableContinuousReconciliation: 'Para activar la Conciliación Continua, activa la ',
            chooseReconciliationAccount: {
                chooseBankAccount: 'Elige la cuenta bancaria con la que se conciliarán los pagos de tu Tarjeta Expensify.',
                accountMatches: 'Asegúrate de que esta cuenta coincide con ',
                settlementAccount: 'la cuenta de liquidación de tu Tarjeta Expensify ',
                reconciliationWorks: ({lastFourPAN}: ReconciliationWorksParams) => `(que termina en ${lastFourPAN}) para que la conciliación continua funcione correctamente.`,
            },
        },
        card: {
            issueCard: 'Emitir tarjeta',
            getStartedIssuing: 'Empieza emitiendo tu primera tarjeta virtual o física.',
            issueNewCard: {
                whoNeedsCard: '¿Quién necesita una tarjeta?',
                findMember: 'Buscar miembro',
                chooseCardType: 'Elegir un tipo de tarjeta',
                physicalCard: 'Tarjeta física',
                physicalCardDescription: 'Ideal para los consumidores habituales',
                virtualCard: 'Tarjeta virtual',
                virtualCardDescription: 'Instantáneo y flexible',
                chooseLimitType: 'Elegir un tipo de límite',
                smartLimit: 'Límite inteligente',
                smartLimitDescription: 'Gasta hasta una determinada cantidad antes de requerir aprobación',
                monthly: 'Mensual',
                monthlyDescription: 'Gasta hasta una determinada cantidad al mes',
                fixedAmount: 'Cantidad fija',
                fixedAmountDescription: 'Gasta hasta una determinada cantidad una vez',
                cardLimitError: 'Por favor, introduce un monto menor a $21,474,836',
                setLimit: 'Establecer un límite',
                giveItName: 'Dale un nombre',
                giveItNameInstruction: 'Hazlo lo suficientemente único para distinguirla de otras tarjetas. ¡Los casos de uso específicos son aún mejores!',
                cardName: 'Nombre de la tarjeta',
                letsDoubleCheck: 'Vuelve a comprobar que todo parece correcto. ',
                willBeReady: 'Esta tarjeta estará lista para su uso inmediato.',
                cardholder: 'Titular de la tarjeta',
                cardType: 'Tipo de tarjeta',
                limit: 'Limite',
                limitType: 'Tipo de limite',
                name: 'Nombre',
            },
            deactivateCardModal: {
                deactivate: 'Desactivar',
                deactivateCard: 'Desactivar tarjeta',
                deactivateConfirmation: 'Al desactivar esta tarjeta, se rechazarán todas las transacciones futuras y no se podrá deshacer.',
            },
        },

        export: {
            notReadyHeading: 'No está listo para exportar',
            notReadyDescription:
                'Los borradores o informes de gastos pendientes no se pueden exportar al sistema contabilidad. Por favor, apruebe o pague estos gastos antes de exportarlos.',
        },
        invoices: {
            sendInvoice: 'Enviar factura',
            sendFrom: 'Enviar desde',
            invoicingDetails: 'Detalles de facturación',
            invoicingDetailsDescription: 'Esta información aparecerá en tus facturas.',
            companyName: 'Nombre de la empresa',
            companyWebsite: 'Sitio web de la empresa',
            paymentMethods: {
                personal: 'Personal',
                business: 'Empresas',
                chooseInvoiceMethod: 'Elija un método de pago:',
                addBankAccount: 'Añadir cuenta bancaria',
                payingAsIndividual: 'Pago individual',
                payingAsBusiness: 'Pagar como una empresa',
            },
            invoiceBalance: 'Saldo de la factura',
            invoiceBalanceSubtitle: 'Este es tu saldo actual de la recaudación de pagos de facturas. Se transferirá automáticamente a tu cuenta bancaria si has agregado una.',
            bankAccountsSubtitle: 'Agrega una cuenta bancaria para hacer y recibir pagos de facturas.',
        },
        invite: {
            member: 'Invitar miembros',
            members: 'Invitar miembros',
            invitePeople: 'Invitar nuevos miembros',
            genericFailureMessage: 'Se ha producido un error al invitar al miembro al espacio de trabajo. Vuelva a intentarlo.',
            pleaseEnterValidLogin: `Asegúrese de que el correo electrónico o el número de teléfono sean válidos (p. ej. ${CONST.EXAMPLE_PHONE_NUMBER}).`,
            user: 'miembro',
            users: 'miembros',
            invited: 'invitó',
            removed: 'eliminó',
            to: 'a',
            from: 'de',
        },
        inviteMessage: {
            confirmDetails: 'Confirma los detalles',
            inviteMessagePrompt: '¡Añadir un mensaje para hacer tu invitación destacar!',
            personalMessagePrompt: 'Mensaje',
            inviteNoMembersError: 'Por favor, selecciona al menos un miembro a invitar.',
            genericFailureMessage: 'Se ha producido un error al invitar al miembro al espacio de trabajo. Por favor, vuelva a intentarlo.',
            joinRequest: ({user, workspaceName}: {user: string; workspaceName: string}) => `${user} solicitó unirse al espacio de trabajo ${workspaceName}`,
        },
        distanceRates: {
            oopsNotSoFast: 'Ups! No tan rápido...',
            workspaceNeeds: 'Un espacio de trabajo necesita al menos una tasa de distancia activa.',
            distance: 'Distancia',
            centrallyManage: 'Gestiona centralizadamente las tasas, elige si contabilizar en millas o kilómetros, y define una categoría por defecto',
            rate: 'Tasa',
            addRate: 'Agregar tasa',
            findRate: 'Encontrar tasa',
            trackTax: 'Impuesto de seguimiento',
            deleteRates: () => ({
                one: 'Eliminar tasa',
                other: 'Eliminar tasas',
            }),
            enableRates: () => ({
                one: 'Activar tasa',
                other: 'Activar tasas',
            }),
            disableRates: () => ({
                one: 'Desactivar tasa',
                other: 'Desactivar tasas',
            }),
            enableRate: 'Activar tasa',
            status: 'Estado',
            unit: 'Unidad',
            taxFeatureNotEnabledMessage: 'Los impuestos deben estar activados en el área de trabajo para poder utilizar esta función. Dirígete a ',
            changePromptMessage: ' para hacer ese cambio.',
            deleteDistanceRate: 'Eliminar tasa de distancia',
            areYouSureDelete: () => ({
                one: '¿Estás seguro de que quieres eliminar esta tasa?',
                other: '¿Estás seguro de que quieres eliminar estas tasas?',
            }),
        },
        editor: {
            nameInputLabel: 'Nombre',
            descriptionInputLabel: 'Descripción',
            typeInputLabel: 'Tipo',
            initialValueInputLabel: 'Valor inicial',
            nameInputHelpText: 'Este es el nombre que verás en tu espacio de trabajo.',
            nameIsRequiredError: 'Debes definir un nombre para tu espacio de trabajo',
            currencyInputLabel: 'Moneda por defecto',
            currencyInputHelpText: 'Todas los gastos en este espacio de trabajo serán convertidos a esta moneda.',
            currencyInputDisabledText: ({currency}: CurrencyInputDisabledTextParams) =>
                `La moneda predeterminada no se puede cambiar porque este espacio de trabajo está vinculado a una cuenta bancaria en ${currency}.`,
            save: 'Guardar',
            genericFailureMessage: 'Se ha producido un error al guardar el espacio de trabajo. Por favor, inténtalo de nuevo.',
            avatarUploadFailureMessage: 'No se pudo subir el avatar. Por favor, inténtalo de nuevo.',
            addressContext: 'Se requiere una dirección para habilitar Expensify Travel. Por favor, introduce una dirección asociada con tu negocio.',
        },
        bankAccount: {
            continueWithSetup: 'Continuar con la configuración',
            youAreAlmostDone: 'Casi has acabado de configurar tu cuenta bancaria, que te permitirá emitir tarjetas corporativas, reembolsar gastos y cobrar pagar facturas.',
            streamlinePayments: 'Optimiza pagos',
            connectBankAccountNote: 'Nota: No se pueden usar cuentas bancarias personales para realizar pagos en los espacios de trabajo.',
            oneMoreThing: '¡Una cosa más!',
            allSet: '¡Todo listo!',
            accountDescriptionWithCards: 'Esta cuenta bancaria se utilizará para emitir tarjetas corporativas, reembolsar gastos y cobrar y pagar facturas.',
            letsFinishInChat: '¡Continuemos en el chat!',
            finishInChat: 'Continuemos en el chat',
            almostDone: '¡Casi listo!',
            disconnectBankAccount: 'Desconectar cuenta bancaria',
            startOver: 'Empezar de nuevo',
            updateDetails: 'Actualizar detalles',
            yesDisconnectMyBankAccount: 'Sí, desconecta mi cuenta bancaria',
            yesStartOver: 'Sí, empezar de nuevo',
            disconnectYour: 'Desconecta tu cuenta bancaria de ',
            bankAccountAnyTransactions: '. Los reembolsos pendientes serán completados sin problemas.',
            clearProgress: 'Empezar de nuevo descartará lo completado hasta ahora.',
            areYouSure: '¿Estás seguro?',
            workspaceCurrency: 'Moneda del espacio de trabajo',
            updateCurrencyPrompt:
                'Parece que tu espacio de trabajo está configurado actualmente en una moneda diferente a USD. Por favor, haz clic en el botón de abajo para actualizar tu moneda a USD ahora.',
            updateToUSD: 'Actualizar a USD',
            updateWorkspaceCurrency: 'Actualizar la moneda del espacio de trabajo',
            workspaceCurrencyNotSupported: 'Moneda del espacio de trabajo no soportada',
            yourWorkspace: 'Tu espacio de trabajo está configurado en una moneda no soportada. Consulta la',
            listOfSupportedCurrencies: 'lista de monedas soportadas',
        },
        changeOwner: {
            changeOwnerPageTitle: 'Transferir la propiedad',
            addPaymentCardTitle: 'Ingrese tu tarjeta de pago para transferir la propiedad',
            addPaymentCardButtonText: 'Aceptar términos y agregar tarjeta de pago',
            addPaymentCardReadAndAcceptTextPart1: 'Lea y acepte',
            addPaymentCardReadAndAcceptTextPart2: 'para agregar tu tarjeta',
            addPaymentCardTerms: 'los términos',
            addPaymentCardPrivacy: 'la política de privacidad',
            addPaymentCardAnd: 'y',
            addPaymentCardPciCompliant: 'PCI-DSS obediente',
            addPaymentCardBankLevelEncrypt: 'Cifrado a nivel bancario',
            addPaymentCardRedundant: 'Infraestructura redundante',
            addPaymentCardLearnMore: 'Conozca más sobre nuestra',
            addPaymentCardSecurity: 'seguridad',
            amountOwedTitle: 'Saldo pendiente',
            amountOwedButtonText: 'OK',
            amountOwedText: 'Esta cuenta tiene un saldo pendiente de un mes anterior.\n\n¿Quiere liquidar el saldo y hacerse cargo de la facturación de este espacio de trabajo?',
            ownerOwesAmountTitle: 'Saldo pendiente',
            ownerOwesAmountButtonText: 'Transferir saldo',
            ownerOwesAmountText: ({email, amount}: OwnerOwesAmountParams) =>
                `La cuenta propietaria de este espacio de trabajo (${email}) tiene un saldo pendiente de un mes anterior.\n\n¿Desea transferir este monto (${amount}) para hacerse cargo de la facturación de este espacio de trabajo? tu tarjeta de pago se cargará inmediatamente.`,
            subscriptionTitle: 'Asumir la suscripción anual',
            subscriptionButtonText: 'Transferir suscripción',
            subscriptionText: ({usersCount, finalCount}: ChangeOwnerSubscriptionParams) =>
                `Al hacerse cargo de este espacio de trabajo se fusionará tu suscripción anual asociada con tu suscripción actual. Esto aumentará el tamaño de tu suscripción en ${usersCount} miembros, lo que hará que tu nuevo tamaño de suscripción sea ${finalCount}. ¿Te gustaria continuar?`,
            duplicateSubscriptionTitle: 'Alerta de suscripción duplicada',
            duplicateSubscriptionButtonText: 'Continuar',
            duplicateSubscriptionText: ({email, workspaceName}: ChangeOwnerDuplicateSubscriptionParams) =>
                `Parece que estás intentando hacerte cargo de la facturación de los espacios de trabajo de ${email}, pero para hacerlo, primero debes ser administrador de todos sus espacios de trabajo.\n\nHaz clic en "Continuar" si solo quieres tomar sobrefacturación para el espacio de trabajo ${workspaceName}.\n\nSi desea hacerse cargo de la facturación de toda tu suscripción, pídales que lo agreguen como administrador a todos sus espacios de trabajo antes de hacerse cargo de la facturación.`,
            hasFailedSettlementsTitle: 'No se puede transferir la propiedad',
            hasFailedSettlementsButtonText: 'Entiendo',
            hasFailedSettlementsText: ({email}: ChangeOwnerHasFailedSettlementsParams) =>
                `No puede hacerse cargo de la facturación porque ${email} tiene una liquidación vencida de la tarjeta Expensify. Avíseles que se comuniquen con concierge@expensify.com para resolver el problema. Luego, podrá hacerse cargo de la facturación de este espacio de trabajo.`,
            failedToClearBalanceTitle: 'Fallo al liquidar el saldo',
            failedToClearBalanceButtonText: 'OK',
            failedToClearBalanceText: 'No hemos podido liquidar el saldo, por favor, inténtalo más tarde.',
            successTitle: '¡Guau! Todo listo.',
            successDescription: 'Ahora eres el propietario de este espacio de trabajo.',
            errorTitle: '¡Ups! No tan rapido...',
            errorDescriptionPartOne: 'Hubo un problema al transferir la propiedad de este espacio de trabajo. Inténtalo de nuevo, o',
            errorDescriptionPartTwo: 'contacta con Concierge',
            errorDescriptionPartThree: 'por ayuda.',
        },

        exportAgainModal: {
            title: '¡Cuidado!',
            description: ({reportName, connectionName}: ExportAgainModalDescriptionParams) =>
                `Los siguientes informes ya se han exportado a ${CONST.POLICY.CONNECTIONS.NAME_USER_FRIENDLY[connectionName]}:\n\n${reportName}\n\n¿Estás seguro de que deseas exportarlos de nuevo?`,
            confirmText: 'Sí, exportar de nuevo',
            cancelText: 'Cancelar',
        },
        planTypePage: {
            planTypes: {
                team: {
                    label: 'Recopilar',
                    description: 'Para equipos que buscan automatizar sus procesos.',
                },
                corporate: {
                    label: 'Controlar',
                    description: 'Para organizaciones con requisitos avanzados.',
                },
            },
            description: 'Elige el plan adecuado para ti. Para ver una lista detallada de funciones y precios, consulta nuestra',
            subscriptionLink: 'página de ayuda sobre tipos de planes y precios',
            lockedPlanDescription: ({count, annualSubscriptionEndDate}: WorkspaceLockedPlanTypeParams) => ({
                one: `Tienes un compromiso anual de 1 miembro activo en el plan Controlar hasta el ${annualSubscriptionEndDate}. Puedes cambiar a una suscripción de pago por uso y desmejorar al plan Recopilar a partir del ${annualSubscriptionEndDate} desactivando la renovación automática en`,
                other: `Tienes un compromiso anual de ${count} miembros activos en el plan Controlar hasta el ${annualSubscriptionEndDate}. Puedes cambiar a una suscripción de pago por uso y desmejorar al plan Recopilar a partir del ${annualSubscriptionEndDate} desactivando la renovación automática en`,
            }),
            subscriptions: 'Suscripciones',
        },
        upgrade: {
            reportFields: {
                title: 'Los campos',
                description: `Los campos de informe permiten especificar detalles a nivel de cabecera, distintos de las etiquetas que pertenecen a los gastos en partidas individuales. Estos detalles pueden incluir nombres de proyectos específicos, información sobre viajes de negocios, ubicaciones, etc.`,
                onlyAvailableOnPlan: 'Los campos de informe sólo están disponibles en el plan Controlar, a partir de ',
            },
            [CONST.POLICY.CONNECTIONS.NAME.NETSUITE]: {
                title: 'NetSuite',
                description: `Disfruta de la sincronización automática y reduce las entradas manuales con la integración Expensify + NetSuite. Obtén información financiera en profundidad y en tiempo real con la compatibilidad nativa y personalizada con segmentos, incluida la asignación de proyectos y clientes.`,
                onlyAvailableOnPlan: 'Nuestra integración NetSuite sólo está disponible en el plan Controlar, a partir de ',
            },
            [CONST.POLICY.CONNECTIONS.NAME.SAGE_INTACCT]: {
                title: 'Sage Intacct',
                description: `Disfruta de una sincronización automatizada y reduce las entradas manuales con la integración Expensify + Sage Intacct. Obtén información financiera en profundidad y en tiempo real con dimensiones definidas por el usuario, así como codificación de gastos por departamento, clase, ubicación, cliente y proyecto (trabajo).`,
                onlyAvailableOnPlan: 'Nuestra integración Sage Intacct sólo está disponible en el plan Controlar, a partir de ',
            },
            [CONST.POLICY.CONNECTIONS.NAME.QBD]: {
                title: 'QuickBooks Desktop',
                description: `Disfruta de la sincronización automática y reduce las entradas manuales con la integración de Expensify + QuickBooks Desktop. Obtén la máxima eficiencia con una conexión bidireccional en tiempo real y la codificación de gastos por clase, artículo, cliente y proyecto.`,
                onlyAvailableOnPlan: 'Nuestra integración con QuickBooks Desktop solo está disponible en el plan Controlar, que comienza en ',
            },
            [CONST.UPGRADE_FEATURE_INTRO_MAPPING.approvals.id]: {
                title: 'Aprobaciones anticipadas',
                description: `Si quieres añadir más niveles de aprobación, o simplemente asegurarte de que los gastos más importantes reciben otro vistazo, no hay problema. Las aprobaciones avanzadas ayudan a realizar las comprobaciones adecuadas a cada nivel para mantener los gastos de tu equipo bajo control.`,
                onlyAvailableOnPlan: 'Las aprobaciones avanzadas sólo están disponibles en el plan Controlar, con precios desde ',
            },
            categories: {
                title: 'Categorías',
                description: `Las categorías te ayudan a organizar mejor los gastos y a llevar un seguimiento de en qué estás gastando tu dinero. Utiliza nuestra lista de categorías sugeridas o crea las tuyas propias.`,
                onlyAvailableOnPlan: 'Las categorías están disponibles en el plan Recopilar, a partir de ',
            },
            glCodes: {
                title: 'Códigos de libro mayor',
                description: `Añada códigos de libro mayor a sus categorías para exportar fácilmente los gastos a sus sistemas de contabilidad y nómina.`,
                onlyAvailableOnPlan: 'Los códigos de libro mayor solo están disponibles en el plan Controlar, a partir de ',
            },
            glAndPayrollCodes: {
                title: 'Códigos de libro mayor y nómina',
                description: `Añada códigos de libro mayor y nómina a sus categorías para exportar fácilmente los gastos a sus sistemas de contabilidad y nómina.`,
                onlyAvailableOnPlan: 'Los códigos de libro mayor y nómina solo están disponibles en el plan Controlar, a partir de ',
            },
            taxCodes: {
                title: 'Código de impuesto',
                description: `Añada código de impuesto mayor a sus categorías para exportar fácilmente los gastos a sus sistemas de contabilidad y nómina.`,
                onlyAvailableOnPlan: 'Los código de impuesto mayor solo están disponibles en el plan Controlar, a partir de ',
            },
            companyCards: {
                title: 'Tarjetas de empresa ilimitadas',
                description: `¿Necesita agregar más canales de tarjetas? Desbloquee tarjetas de empresa ilimitadas para sincronizar transacciones de todos los principales emisores de tarjetas.`,
                onlyAvailableOnPlan: 'Esto solo está disponible en el plan Control, a partir de ',
            },
            rules: {
                title: 'Reglas',
                description: `Las reglas se ejecutan en segundo plano y mantienen tus gastos bajo control para que no tengas que preocuparte por los detalles pequeños.\n\nExige detalles de los gastos, como recibos y descripciones, establece límites y valores predeterminados, y automatiza las aprobaciones y los pagos, todo en un mismo lugar.`,
                onlyAvailableOnPlan: 'Las reglas están disponibles solo en el plan Controlar, que comienza en ',
            },
            perDiem: {
                title: 'Per diem',
                description:
                    'Las dietas per diem (ej.: $100 por día para comidas) son una excelente forma de mantener los gastos diarios predecibles y ajustados a las políticas de la empresa, especialmente si tus empleados viajan por negocios. Disfruta de funciones como tasas personalizadas, categorías por defecto y detalles más específicos como destinos y subtasas.',
                onlyAvailableOnPlan: 'Las dietas per diem solo están disponibles en el plan Control, a partir de ',
            },
            travel: {
                title: 'Viajes',
                description:
                    'Expensify Travel es una nueva plataforma corporativa de reserva y gestión de viajes que permite a los miembros reservar alojamientos, vuelos, transporte y mucho más.',
                onlyAvailableOnPlan: 'Los viajes están disponibles en el plan Recopilar, a partir de ',
            },
            multiLevelTags: {
                title: 'Etiquetas multinivel',
                description:
                    'Las etiquetas multinivel te ayudan a llevar un control más preciso de los gastos. Asigna múltiples etiquetas a cada partida, como departamento, cliente o centro de costos, para capturar el contexto completo de cada gasto. Esto permite informes más detallados, flujos de aprobación y exportaciones contables.',
                onlyAvailableOnPlan: 'Las etiquetas multinivel solo están disponibles en el plan Control, a partir de ',
            },
            note: {
                upgradeWorkspace: 'Mejore su espacio de trabajo para acceder a esta función, o',
                learnMore: 'más información',
                aboutOurPlans: 'sobre nuestros planes y precios.',
            },
            pricing: {
                perActiveMember: 'por miembro activo al mes.',
                perMember: 'por miembro al mes.',
            },
            upgradeToUnlock: 'Desbloquear esta función',
            completed: {
                headline: 'Has mejorado tu espacio de trabajo.',
                categorizeMessage: `Has actualizado con éxito a un espacio de trabajo en el plan Recopilar. ¡Ahora puedes categorizar tus gastos!`,
                travelMessage: 'Has mejorado con éxito a un espacio de trabajo en el plan Recopilar. ¡Ahora puedes comenzar a reservar y gestionar viajes!',
                successMessage: ({policyName}: ReportPolicyNameParams) => `Has actualizado con éxito ${policyName} al plan Controlar.`,
                viewSubscription: 'Ver su suscripción',
                moreDetails: 'para obtener más información.',
                gotIt: 'Entendido, gracias.',
            },
            commonFeatures: {
                title: 'Mejorar al plan Controlar',
                note: 'Desbloquea nuestras funciones más potentes, incluyendo:',
                benefits: {
                    startsAt: 'El plan Controlar comienza desde ',
                    perMember: 'por miembro activo al mes.',
                    learnMore: 'Más información',
                    pricing: 'sobre nuestros planes y precios.',
                    benefit1: 'Conexiones avanzadas de contabilidad (NetSuite, Sage Intacct y más)',
                    benefit2: 'Reglas inteligentes de gastos',
                    benefit3: 'Flujos de aprobación de varios niveles',
                    benefit4: 'Controles de seguridad mejorados',
                    toUpgrade: 'Para mejorar, haz clic en',
                    selectWorkspace: 'selecciona un espacio de trabajo y cambia el tipo de plan a',
                },
            },
        },
        downgrade: {
            commonFeatures: {
                title: 'Desmejorar al plan Recopilar',
                note: 'Si desmejoras, perderás acceso a estas funciones y más:',
                benefits: {
                    note: 'Para una comparación completa de nuestros planes, consulta nuestra',
                    pricingPage: 'página de precios',
                    confirm: '¿Estás seguro de que deseas desmejorar y eliminar tus configuraciones?',
                    warning: 'Esto no se puede deshacer.',
                    benefit1: 'Conexiones de contabilidad (excepto QuickBooks Online y Xero)',
                    benefit2: 'Reglas inteligentes de gastos',
                    benefit3: 'Flujos de aprobación de varios niveles',
                    benefit4: 'Controles de seguridad mejorados',
                    headsUp: '¡Atención!',
                    multiWorkspaceNote:
                        'Tendrás que bajar de categoría todos tus espacios de trabajo antes de tu primer pago mensual para comenzar una suscripción con la tasa del plan Recopilar. Haz clic en',
                    selectStep: '> selecciona cada espacio de trabajo > cambia el tipo de plan a',
                },
            },
            completed: {
                headline: 'Tu espacio de trabajo ha sido bajado de categoría',
                description: 'Tienes otros espacios de trabajo en el plan Controlar. Para facturarte con la tasa del plan Recopilar, debes bajar de categoría todos los espacios de trabajo.',
                gotIt: 'Entendido, gracias.',
            },
        },
        payAndDowngrade: {
            title: 'Pagar y bajar de categoría',
            headline: 'Tu pago final',
            description1: 'Tu factura final por esta suscripción será',
            description2: ({date}: DateParams) => `Consulta el desglose a continuación para ${date}:`,
            subscription:
                '¡Atención! Esta acción finalizará tu suscripción a Expensify, eliminará este espacio de trabajo y eliminará a todos los miembros del espacio de trabajo. Si deseas conservar este espacio de trabajo y solo eliminarte a ti mismo, haz que otro administrador tome el control de la facturación primero.',
            genericFailureMessage: 'Ocurrió un error al pagar tu factura. Por favor, inténtalo de nuevo.',
        },
        restrictedAction: {
            restricted: 'Restringido',
            actionsAreCurrentlyRestricted: ({workspaceName}: ActionsAreCurrentlyRestricted) => `Las acciones en el espacio de trabajo ${workspaceName} están actualmente restringidas`,
            workspaceOwnerWillNeedToAddOrUpdatePaymentCard: ({workspaceOwnerName}: WorkspaceOwnerWillNeedToAddOrUpdatePaymentCardParams) =>
                `El propietario del espacio de trabajo, ${workspaceOwnerName} tendrá que añadir o actualizar la tarjeta de pago registrada para desbloquear nueva actividad en el espacio de trabajo.`,
            youWillNeedToAddOrUpdatePaymentCard: 'Debes añadir o actualizar la tarjeta de pago registrada para desbloquear nueva actividad en el espacio de trabajo.',
            addPaymentCardToUnlock: 'Añade una tarjeta para desbloquearlo!',
            addPaymentCardToContinueUsingWorkspace: 'Añade una tarjeta de pago para seguir utilizando este espacio de trabajo',
            pleaseReachOutToYourWorkspaceAdmin: 'Si tienes alguna pregunta, ponte en contacto con el administrador de su espacio de trabajo.',
            chatWithYourAdmin: 'Chatea con tu administrador',
            chatInAdmins: 'Chatea en #admins',
            addPaymentCard: 'Agregar tarjeta de pago',
        },
        rules: {
            individualExpenseRules: {
                title: 'Gastos',
                subtitle: 'Establece controles y valores predeterminados para gastos individuales. También puedes crear reglas para',
                receiptRequiredAmount: 'Cantidad requerida para los recibos',
                receiptRequiredAmountDescription: 'Exige recibos cuando los gastos superen este importe, a menos que lo anule una regla de categoría.',
                maxExpenseAmount: 'Importe máximo del gasto',
                maxExpenseAmountDescription: 'Marca los gastos que superen este importe, a menos que una regla de categoría lo anule.',
                maxAge: 'Antigüedad máxima',
                maxExpenseAge: 'Antigüedad máxima de los gastos',
                maxExpenseAgeDescription: 'Marca los gastos de más de un número determinado de días.',
                maxExpenseAgeDays: () => ({
                    one: '1 día',
                    other: (count: number) => `${count} días`,
                }),
                billableDefault: 'Valor predeterminado facturable',
                billableDefaultDescription: 'Elige si los gastos en efectivo y con tarjeta de crédito deben ser facturables por defecto. Los gastos facturables se activan o desactivan en',
                billable: 'Facturable',
                billableDescription: 'Los gastos se vuelven a facturar a los clientes en la mayoría de los casos',
                nonBillable: 'No facturable',
                nonBillableDescription: 'Los gastos se vuelven a facturar a los clientes en ocasiones',
                eReceipts: 'Recibos electrónicos',
                eReceiptsHint: 'Los recibos electrónicos se crean automáticamente',
                eReceiptsHintLink: 'para la mayoría de las transacciones en USD',
                attendeeTracking: 'Seguimiento de asistentes',
                attendeeTrackingHint: 'Haz un seguimiento del coste por persona para cada gasto.',
                prohibitedDefaultDescription:
                    'Marque cualquier recibo donde aparezcan alcohol, apuestas u otros artículos restringidos. Los gastos con recibos que incluyan estos conceptos requerirán una revisión manual.',
                prohibitedExpenses: 'Gastos prohibidos',
                alcohol: 'Alcohol',
                hotelIncidentals: 'Gastos adicionales de hotel',
                gambling: 'Juegos de apuestas',
                tobacco: 'Tabaco',
                adultEntertainment: 'Entretenimiento para adultos',
            },
            expenseReportRules: {
                examples: 'Ejemplos:',
                title: 'Informes de gastos',
                subtitle: 'Automatiza el cumplimiento, la aprobación y el pago de los informes de gastos.',
                customReportNamesSubtitle: 'Personaliza los títulos de los informes usando nuestras amplias fórmulas.',
                customNameTitle: 'Título de informe predeterminado',
                customNameDescription: 'Elige un nombre personalizado para los informes de gastos usando nuestras ',
                customNameDescriptionLink: 'fórmulas variadas',
                customNameInputLabel: 'Nombre',
                customNameEmailPhoneExample: 'Correo electrónico o teléfono del miembro: {report:submit:from}',
                customNameStartDateExample: 'Fecha de inicio del informe: {report:startdate}',
                customNameWorkspaceNameExample: 'Nombre del espacio de trabajo: {report:workspacename}',
                customNameReportIDExample: 'ID del informe: {report:id}',
                customNameTotalExample: 'Total: {report:total}.',
                preventMembersFromChangingCustomNamesTitle: 'Evitar que los miembros cambien los nombres personalizados de los informes',
                preventSelfApprovalsTitle: 'Evitar autoaprobaciones',
                preventSelfApprovalsSubtitle: 'Evita que los miembros del espacio de trabajo aprueben sus propios informes de gastos.',
                autoApproveCompliantReportsTitle: 'Aprobación automática de informes conformes',
                autoApproveCompliantReportsSubtitle: 'Configura qué informes de gastos pueden aprobarse de forma automática.',
                autoApproveReportsUnderTitle: 'Aprobar automáticamente informes por debajo de',
                autoApproveReportsUnderDescription: 'Los informes de gastos totalmente conformes por debajo de esta cantidad se aprobarán automáticamente.',
                randomReportAuditTitle: 'Auditoría aleatoria de informes',
                randomReportAuditDescription: 'Requiere que algunos informes sean aprobados manualmente, incluso si son elegibles para la aprobación automática.',
                autoPayApprovedReportsTitle: 'Pago automático de informes aprobados',
                autoPayApprovedReportsSubtitle: 'Configura qué informes de gastos pueden pagarse de forma automática.',
                autoPayApprovedReportsLimitError: ({currency}: AutoPayApprovedReportsLimitErrorParams = {}) => `Por favor, introduce un monto menor a ${currency ?? ''}20,000`,
                autoPayApprovedReportsLockedSubtitle: 'Ve a más funciones y habilita flujos de trabajo, luego agrega pagos para desbloquear esta función.',
                autoPayReportsUnderTitle: 'Pagar automáticamente informes por debajo de',
                autoPayReportsUnderDescription: 'Los informes de gastos totalmente conformes por debajo de esta cantidad se pagarán automáticamente.',
                unlockFeatureGoToSubtitle: 'Ir a',
                unlockFeatureEnableWorkflowsSubtitle: ({featureName}: FeatureNameParams) => `y habilita flujos de trabajo, luego agrega ${featureName} para desbloquear esta función.`,
                enableFeatureSubtitle: ({featureName}: FeatureNameParams) => `y habilita ${featureName} para desbloquear esta función.`,
            },
            categoryRules: {
                title: 'Reglas de categoría',
                approver: 'Aprobador',
                requireDescription: 'Requerir descripción',
                descriptionHint: 'Sugerencia de descripción',
                descriptionHintDescription: ({categoryName}: CategoryNameParams) =>
                    `Recuerda a los empleados que deben proporcionar información adicional para los gastos de “${categoryName}”. Esta sugerencia aparece en el campo de descripción en los gastos.`,
                descriptionHintLabel: 'Sugerencia',
                descriptionHintSubtitle: 'Consejo: ¡Cuanto más corta, mejor!',
                maxAmount: 'Importe máximo',
                flagAmountsOver: 'Señala importes superiores a',
                flagAmountsOverDescription: ({categoryName}: CategoryNameParams) => `Aplica a la categoría “${categoryName}”.`,
                flagAmountsOverSubtitle: 'Esto anula el importe máximo para todos los gastos.',
                expenseLimitTypes: {
                    expense: 'Gasto individual',
                    expenseSubtitle: 'Señala importes de gastos por categoría. Esta regla anula la regla general del espacio de trabajo para el importe máximo de gastos.',
                    daily: 'Total por categoría',
                    dailySubtitle: 'Marcar el gasto total por categoría en cada informe de gastos.',
                },
                requireReceiptsOver: 'Requerir recibos para importes superiores a',
                requireReceiptsOverList: {
                    default: ({defaultAmount}: DefaultAmountParams) => `${defaultAmount} ${CONST.DOT_SEPARATOR} Predeterminado`,
                    never: 'Nunca requerir recibos',
                    always: 'Requerir recibos siempre',
                },
                defaultTaxRate: 'Tasa de impuesto predeterminada',
                goTo: 'Ve a',
                andEnableWorkflows: 'y habilita los flujos de trabajo, luego añade aprobaciones para desbloquear esta función.',
            },
            customRules: {
                title: 'Reglas personalizadas',
                subtitle: 'Descripción',
                description: 'Introduzca reglas personalizadas para los informes de gastos',
            },
        },
    },
    getAssistancePage: {
        title: 'Obtener ayuda',
        subtitle: '¡Estamos aquí para ayudarte!',
        description: 'Elige una de las siguientes opciones:',
        chatWithConcierge: 'Chatear con Concierge',
        scheduleSetupCall: 'Concertar una llamada',
        scheduleACall: 'Programar llamada',
        questionMarkButtonTooltip: 'Obtén ayuda de nuestro equipo',
        exploreHelpDocs: 'Explorar la documentación de ayuda',
        registerForWebinar: 'Registrarse para el seminario web',
        onboardingHelp: 'Ayuda de incorporación',
    },
    emojiPicker: {
        skinTonePickerLabel: 'Elige el tono de piel por defecto',
        headers: {
            frequentlyUsed: 'Usado frecuentemente',
            smileysAndEmotion: 'Emoticonos y emociones',
            peopleAndBody: 'Personas y Cuerpo',
            animalsAndNature: 'Animales y naturaleza',
            foodAndDrink: 'Alimentos y bebidas',
            travelAndPlaces: 'Viajes y lugares',
            activities: 'Actividades',
            objects: 'Objetos',
            symbols: 'Símbolos',
            flags: 'Banderas',
        },
    },
    newRoomPage: {
        newRoom: 'Nueva sala de chat',
        groupName: 'Nombre del grupo',
        roomName: 'Nombre de la sala',
        visibility: 'Visibilidad',
        restrictedDescription: 'Sólo las personas en tu espacio de trabajo pueden encontrar esta sala',
        privateDescription: 'Sólo las personas que están invitadas a esta sala pueden encontrarla',
        publicDescription: 'Cualquier persona puede unirse a esta sala',
        // eslint-disable-next-line @typescript-eslint/naming-convention
        public_announceDescription: 'Cualquier persona puede unirse a esta sala',
        createRoom: 'Crea una sala de chat',
        roomAlreadyExistsError: 'Ya existe una sala con este nombre',
        roomNameReservedError: ({reservedName}: RoomNameReservedErrorParams) =>
            `${reservedName} es el nombre una sala por defecto de todos los espacios de trabajo. Por favor, elige otro nombre.`,
        roomNameInvalidError: 'Los nombres de las salas solo pueden contener minúsculas, números y guiones',
        pleaseEnterRoomName: 'Por favor, escribe el nombre de una sala',
        pleaseSelectWorkspace: 'Por favor, selecciona un espacio de trabajo',
        renamedRoomAction: ({oldName, newName, actorName, isExpenseReport}: RenamedRoomActionParams) => {
            const actor = actorName ? `${actorName} ` : '';
            return isExpenseReport ? `${actor}cambió el nombre a "${newName}" (previamente "${oldName}")` : `${actor}cambió el nombre de la sala a "${newName}" (previamente "${oldName}")`;
        },
        roomRenamedTo: ({newName}: RoomRenamedToParams) => `Sala renombrada a ${newName}`,
        social: 'social',
        selectAWorkspace: 'Seleccionar un espacio de trabajo',
        growlMessageOnRenameError: 'No se ha podido cambiar el nombre del espacio de trabajo. Por favor, comprueba tu conexión e inténtalo de nuevo.',
        visibilityOptions: {
            restricted: 'Espacio de trabajo', // the translation for "restricted" visibility is actually workspace. This is so we can display restricted visibility rooms as "workspace" without having to change what's stored.
            private: 'Privada',
            public: 'Público',
            // eslint-disable-next-line @typescript-eslint/naming-convention
            public_announce: 'Anuncio Público',
        },
    },
    workspaceApprovalModes: {
        submitAndClose: 'Enviar y Cerrar',
        submitAndApprove: 'Enviar y Aprobar',
        advanced: 'AVANZADO',
        dynamicExternal: 'DINÁMICO_EXTERNO',
        smartReport: 'INFORME_INTELIGENTE',
        billcom: 'BILLCOM',
    },
    workspaceActions: {
        addApprovalRule: ({approverEmail, approverName, field, name}: AddedPolicyApprovalRuleParams) =>
            `añadió a ${approverName} (${approverEmail}) como aprobador para la ${field} "${name}"`,
        deleteApprovalRule: ({approverEmail, approverName, field, name}: AddedPolicyApprovalRuleParams) =>
            `eliminó a ${approverName} (${approverEmail}) como aprobador para la ${field} "${name}"`,
        updateApprovalRule: ({field, name, newApproverEmail, newApproverName, oldApproverEmail, oldApproverName}: UpdatedPolicyApprovalRuleParams) => {
            const formatApprover = (displayName?: string, email?: string) => (displayName ? `${displayName} (${email})` : email);

            return `cambió el aprobador para la ${field} "${name}" a ${formatApprover(newApproverName, newApproverEmail)} (previamente ${formatApprover(oldApproverName, oldApproverEmail)})`;
        },
        addCategory: ({categoryName}: UpdatedPolicyCategoryParams) => `añadió la categoría "${categoryName}""`,
        deleteCategory: ({categoryName}: UpdatedPolicyCategoryParams) => `eliminó la categoría "${categoryName}"`,
        updateCategory: ({oldValue, categoryName}: UpdatedPolicyCategoryParams) => `${oldValue ? 'deshabilitó' : 'habilitó'} la categoría "${categoryName}"`,
        updatedDescriptionHint: ({categoryName, oldValue, newValue}: UpdatedPolicyCategoryDescriptionHintTypeParams) => {
            if (!newValue) {
                return `eliminó la sugerencia de descripción "${oldValue}" de la categoría "${categoryName}"`;
            }

            return !oldValue
                ? `añadió la sugerencia de descripción "${newValue}" a la categoría "${categoryName}"`
                : `cambió la sugerencia de descripción de la categoría "${categoryName}" a “${newValue}” (anteriormente “${oldValue}”)`;
        },
        updateCategoryPayrollCode: ({oldValue, categoryName, newValue}: UpdatedPolicyCategoryGLCodeParams) => {
            if (!oldValue) {
                return `añadió el código de nómina "${newValue}" a la categoría "${categoryName}"`;
            }
            if (!newValue && oldValue) {
                return `eliminó el código de nómina "${oldValue}" de la categoría "${categoryName}"`;
            }
            return `cambió el código de nómina de la categoría "${categoryName}" a “${newValue}” (previamente “${oldValue}”)`;
        },
        updateCategoryGLCode: ({oldValue, categoryName, newValue}: UpdatedPolicyCategoryGLCodeParams) => {
            if (!oldValue) {
                return `añadió el código GL "${newValue}" a la categoría "${categoryName}"`;
            }
            if (!newValue && oldValue) {
                return `eliminó el código GL "${oldValue}" de la categoría "${categoryName}"`;
            }
            return `cambió el código GL de la categoría “${categoryName}” a “${newValue}” (previamente “${oldValue}”)`;
        },
        updateAreCommentsRequired: ({oldValue, categoryName}: UpdatedPolicyCategoryParams) => {
            return `cambió la descripción de la categoría "${categoryName}" a ${!oldValue ? 'requerida' : 'no requerida'} (previamente ${!oldValue ? 'no requerida' : 'requerida'})`;
        },
        updateCategoryMaxExpenseAmount: ({categoryName, oldAmount, newAmount}: UpdatedPolicyCategoryMaxExpenseAmountParams) => {
            if (newAmount && !oldAmount) {
                return `añadió un importe máximo de ${newAmount} a la categoría "${categoryName}"`;
            }
            if (oldAmount && !newAmount) {
                return `eliminó el importe máximo de ${oldAmount} de la categoría "${categoryName}"`;
            }
            return `cambió el importe máximo de la categoría "${categoryName}" a ${newAmount} (previamente ${oldAmount})`;
        },
        updateCategoryExpenseLimitType: ({categoryName, oldValue, newValue}: UpdatedPolicyCategoryExpenseLimitTypeParams) => {
            if (!oldValue) {
                return `añadió un tipo de límite de ${newValue} a la categoría "${categoryName}"`;
            }
            return `actualizó la categoría "${categoryName}" cambiando el Tipo de Límite a ${newValue} (previamente "${oldValue}")`;
        },
        updateCategoryMaxAmountNoReceipt: ({categoryName, oldValue, newValue}: UpdatedPolicyCategoryMaxAmountNoReceiptParams) => {
            if (!oldValue) {
                return `actualizó la categoría "${categoryName}" cambiando Recibos a ${newValue}`;
            }
            return `cambió la categoría "${categoryName}" a ${newValue} (previamente ${oldValue})`;
        },
        setCategoryName: ({oldName, newName}: UpdatedPolicyCategoryNameParams) => `renombró la categoría "${oldName}" a "${newName}"`,
        updateTagListName: ({oldName, newName}: UpdatedPolicyCategoryNameParams) => `cambió el nombre de la lista de etiquetas a "${newName}" (previamente "${oldName}")`,
        addTag: ({tagListName, tagName}: UpdatedPolicyTagParams) => `añadió la etiqueta "${tagName}" a la lista "${tagListName}"`,
        updateTagName: ({tagListName, newName, oldName}: UpdatedPolicyTagNameParams) => `actualizó la lista de etiquetas "${tagListName}" cambiando la etiqueta "${oldName}" a "${newName}"`,
        updateTagEnabled: ({tagListName, tagName, enabled}: UpdatedPolicyTagParams) => `${enabled ? 'habilitó' : 'deshabilitó'} la etiqueta "${tagName}" en la lista "${tagListName}"`,
        deleteTag: ({tagListName, tagName}: UpdatedPolicyTagParams) => `eliminó la etiqueta "${tagName}" de la lista "${tagListName}"`,
        deleteMultipleTags: ({count, tagListName}: UpdatedPolicyTagParams) => `eliminó "${count}" etiquetas de la lista "${tagListName}"`,
        updateTag: ({tagListName, newValue, tagName, updatedField, oldValue}: UpdatedPolicyTagFieldParams) => {
            if (oldValue) {
                return `actualizó la etiqueta "${tagName}" en la lista "${tagListName}" cambiando el ${updatedField} a "${newValue}" (previamente "${oldValue}")`;
            }
            return `actualizó la etiqueta "${tagName}" en la lista "${tagListName}" añadiendo un ${updatedField} de "${newValue}"`;
        },
        updateCustomUnit: ({customUnitName, newValue, oldValue, updatedField}: UpdatePolicyCustomUnitParams) =>
            `cambió el ${customUnitName} ${updatedField} a "${newValue}" (previamente "${oldValue}")`,
        updateCustomUnitTaxEnabled: ({newValue}: UpdatePolicyCustomUnitTaxEnabledParams) => `${newValue ? 'habilitó' : 'deshabilitó'} el seguimiento de impuestos en tasas de distancia`,
        addCustomUnitRate: ({customUnitName, rateName}: AddOrDeletePolicyCustomUnitRateParams) => `añadió una nueva tasa de "${rateName}" para "${customUnitName}"`,
        updatedCustomUnitRate: ({customUnitName, customUnitRateName, newValue, oldValue, updatedField}: UpdatedPolicyCustomUnitRateParams) =>
            `cambió la tasa de ${customUnitName} ${updatedField} "${customUnitRateName}" a "${newValue}" (previamente "${oldValue}")`,
        updatedCustomUnitTaxRateExternalID: ({customUnitRateName, newValue, newTaxPercentage, oldTaxPercentage, oldValue}: UpdatedPolicyCustomUnitTaxRateExternalIDParams) => {
            if (oldTaxPercentage && oldValue) {
                return `cambió la tasa de impuesto en la tasa por distancia "${customUnitRateName}" a "${newValue} (${newTaxPercentage})" (previamente "${oldValue} (${oldTaxPercentage})")`;
            }
            return `añadió la tasa de impuesto "${newValue} (${newTaxPercentage})" a la tasa de distancia "${customUnitRateName}"`;
        },
        updatedCustomUnitTaxClaimablePercentage: ({customUnitRateName, newValue, oldValue}: UpdatedPolicyCustomUnitTaxClaimablePercentageParams) => {
            if (oldValue) {
                return `cambió la parte recuperable de impuestos en la tasa por distancia "${customUnitRateName}" a "${newValue}" (previamente "${oldValue}")`;
            }
            return `añadió una parte recuperable de impuestos de "${newValue}" a la tasa por distancia "${customUnitRateName}`;
        },
        deleteCustomUnitRate: ({customUnitName, rateName}: AddOrDeletePolicyCustomUnitRateParams) => `eliminó la tasa "${rateName}" de "${customUnitName}"`,
        addedReportField: ({fieldType, fieldName}: AddedOrDeletedPolicyReportFieldParams) => `añadió el campo de informe ${fieldType} "${fieldName}"`,
        updateReportFieldDefaultValue: ({defaultValue, fieldName}: UpdatedPolicyReportFieldDefaultValueParams) =>
            `estableció el valor predeterminado del campo de informe "${fieldName}" en "${defaultValue}"`,
        addedReportFieldOption: ({fieldName, optionName}: PolicyAddedReportFieldOptionParams) => `añadió la opción "${optionName}" al campo de informe "${fieldName}"`,
        removedReportFieldOption: ({fieldName, optionName}: PolicyAddedReportFieldOptionParams) => `eliminó la opción "${optionName}" del campo de informe "${fieldName}"`,
        updateReportFieldOptionDisabled: ({fieldName, optionName, optionEnabled}: PolicyDisabledReportFieldOptionParams) =>
            `${optionEnabled ? 'habilitó' : 'deshabilitó'} la opción "${optionName}" para el campo de informe "${fieldName}"`,
        updateReportFieldAllOptionsDisabled: ({fieldName, optionName, allEnabled, toggledOptionsCount}: PolicyDisabledReportFieldAllOptionsParams) => {
            if (toggledOptionsCount && toggledOptionsCount > 1) {
                return `${allEnabled ? 'habilitó' : 'deshabilitó'} todas las opciones para el campo de informe "${fieldName}"`;
            }
            return `${allEnabled ? 'habilitó' : 'deshabilitó'} la opción "${optionName}" para el campo de informe "${fieldName}", haciendo que todas las opciones queden ${
                allEnabled ? 'habilitadas' : 'deshabilitadas'
            }`;
        },
        deleteReportField: ({fieldType, fieldName}: AddedOrDeletedPolicyReportFieldParams) => `eliminó el campo de informe ${fieldType} "${fieldName}"`,
        preventSelfApproval: ({oldValue, newValue}: UpdatedPolicyPreventSelfApprovalParams) =>
            `actualizó "Evitar la autoaprobación" a "${newValue === 'true' ? 'Habilitada' : 'Deshabilitada'}" (previamente "${oldValue === 'true' ? 'Habilitada' : 'Deshabilitada'}")`,
        updateMaxExpenseAmountNoReceipt: ({oldValue, newValue}: UpdatedPolicyFieldWithNewAndOldValueParams) =>
            `cambió el monto máximo de gasto requerido sin recibo a ${newValue} (previamente ${oldValue})`,
        updateMaxExpenseAmount: ({oldValue, newValue}: UpdatedPolicyFieldWithNewAndOldValueParams) =>
            `cambió el monto máximo de gasto para violaciones a ${newValue} (previamente ${oldValue})`,
        updateMaxExpenseAge: ({oldValue, newValue}: UpdatedPolicyFieldWithNewAndOldValueParams) =>
            `actualizó "Antigüedad máxima de gastos (días)" a "${newValue}" (previamente "${oldValue === 'false' ? CONST.POLICY.DEFAULT_MAX_EXPENSE_AGE : oldValue}")`,
        updateDefaultBillable: ({oldValue, newValue}: UpdatedPolicyFieldWithNewAndOldValueParams) =>
            `actualizó "Volver a facturar gastos a clientes" a "${newValue}" (previamente "${oldValue}")`,
        updateMonthlyOffset: ({oldValue, newValue}: UpdatedPolicyFieldWithNewAndOldValueParams) => {
            if (!oldValue) {
                return `establecer la fecha de envío del informe mensual a "${newValue}"`;
            }
            return `actualizar la fecha de envío del informe mensual a "${newValue}" (previamente "${oldValue}")`;
        },
        updateDefaultTitleEnforced: ({value}: UpdatedPolicyFieldWithValueParam) => `cambió "Requerir título predeterminado de informe" a ${value ? 'activado' : 'desactivado'}`,
        updateWorkspaceDescription: ({newDescription, oldDescription}: UpdatedPolicyDescriptionParams) =>
            !oldDescription
                ? `estableció la descripción de este espacio de trabajo como "${newDescription}"`
                : `actualizó la descripción de este espacio de trabajo a "${newDescription}" (previamente "${oldDescription}")`,
        renamedWorkspaceNameAction: ({oldName, newName}: RenamedWorkspaceNameActionParams) => `actualizó el nombre de este espacio de trabajo a "${newName}" (previamente "${oldName}")`,
        removedFromApprovalWorkflow: ({submittersNames}: RemovedFromApprovalWorkflowParams) => {
            let joinedNames = '';
            if (submittersNames.length === 1) {
                joinedNames = submittersNames.at(0) ?? '';
            } else if (submittersNames.length === 2) {
                joinedNames = submittersNames.join(' y ');
            } else if (submittersNames.length > 2) {
                joinedNames = `${submittersNames.slice(0, submittersNames.length - 1).join(', ')} y ${submittersNames.at(-1)}`;
            }
            return {
                one: `te eliminó del flujo de trabajo de aprobaciones y del chat de gastos de ${joinedNames}. Los informes enviados anteriormente seguirán estando disponibles para su aprobación en tu bandeja de entrada.`,
                other: `te eliminó de los flujos de trabajo de aprobaciones y de los chats de gastos de ${joinedNames}. Los informes enviados anteriormente seguirán estando disponibles para su aprobación en tu bandeja de entrada.`,
            };
        },
        demotedFromWorkspace: ({policyName, oldRole}: DemotedFromWorkspaceParams) =>
            `cambió tu rol en ${policyName} de ${oldRole} a miembro. Te eliminamos de todos los chats de gastos, excepto el suyo.`,
        updatedWorkspaceCurrencyAction: ({oldCurrency, newCurrency}: UpdatedPolicyCurrencyParams) => `actualizó la moneda predeterminada a ${newCurrency} (previamente ${oldCurrency})`,
        updatedWorkspaceFrequencyAction: ({oldFrequency, newFrequency}: UpdatedPolicyFrequencyParams) =>
            `actualizó la frecuencia de generación automática de informes a "${newFrequency}" (previamente "${oldFrequency}")`,
        updateApprovalMode: ({newValue, oldValue}: ChangeFieldParams) => `actualizó el modo de aprobación a "${newValue}" (previamente "${oldValue}")`,
        upgradedWorkspace: 'mejoró este espacio de trabajo al plan Controlar',
        downgradedWorkspace: 'bajó de categoría este espacio de trabajo al plan Recopilar',
        updatedAuditRate: ({oldAuditRate, newAuditRate}: UpdatedPolicyAuditRateParams) =>
            `cambió la tasa de informes enviados aleatoriamente para aprobación manual a ${Math.round(newAuditRate * 100)}% (previamente ${Math.round(oldAuditRate * 100)}%)`,
        updatedManualApprovalThreshold: ({oldLimit, newLimit}: UpdatedPolicyManualApprovalThresholdParams) =>
            `cambió el límite de aprobación manual para todos los gastos a ${newLimit} (previamente ${oldLimit})`,
    },
    roomMembersPage: {
        memberNotFound: 'Miembro no encontrado.',
        useInviteButton: 'Para invitar a un nuevo miembro al chat, por favor, utiliza el botón invitar que está más arriba.',
        notAuthorized: `No tienes acceso a esta página. Si estás intentando unirte a esta sala, pide a un miembro de la sala que te añada. ¿Necesitas algo más? Comunícate con ${CONST.EMAIL.CONCIERGE}`,
        removeMembersPrompt: ({memberName}: {memberName: string}) => ({
            one: `¿Estás seguro de que quieres eliminar ${memberName} de la sala de chat?`,
            other: '¿Estás seguro de que quieres eliminar a los miembros seleccionados de la sala de chat?',
        }),
        error: {
            genericAdd: 'Hubo un problema al añadir este miembro a la sala de chat',
        },
    },
    newTaskPage: {
        assignTask: 'Asignar tarea',
        assignMe: 'Asignar a mí mismo',
        confirmTask: 'Confirmar tarea',
        confirmError: 'Por favor, introduce un título y selecciona un destino de tarea',
        descriptionOptional: 'Descripción (opcional)',
        pleaseEnterTaskName: 'Por favor, introduce un título',
        pleaseEnterTaskDestination: 'Por favor, selecciona dónde deseas compartir esta tarea',
    },
    task: {
        task: 'Tarea',
        title: 'Título',
        description: 'Descripción',
        assignee: 'Miembro asignado',
        completed: 'Completada',
        action: 'Completar',
        messages: {
            created: ({title}: TaskCreatedActionParams) => `tarea para ${title}`,
            completed: 'marcada como completa',
            canceled: 'tarea eliminada',
            reopened: 'marcada como incompleta',
            error: 'No tiene permiso para realizar la acción solicitada',
        },
        markAsComplete: 'Marcar como completada',
        markAsIncomplete: 'Marcar como incompleta',
        assigneeError: 'Se ha producido un error al asignar esta tarea. Por favor, inténtalo con otro miembro.',
        genericCreateTaskFailureMessage: 'Error inesperado al crear la tarea. Por favor, inténtalo más tarde.',
        deleteTask: 'Eliminar tarea',
        deleteConfirmation: '¿Estás seguro de que quieres eliminar esta tarea?',
    },
    statementPage: {
        title: ({year, monthName}: StatementTitleParams) => `Estado de cuenta de ${monthName} ${year}`,
    },
    keyboardShortcutsPage: {
        title: 'Atajos de teclado',
        subtitle: 'Ahorra tiempo con estos atajos de teclado:',
        shortcuts: {
            openShortcutDialog: 'Abre el cuadro de diálogo de métodos abreviados de teclado',
            markAllMessagesAsRead: 'Marcar todos los mensajes como leídos',
            escape: 'Diálogos de escape',
            search: 'Abrir diálogo de búsqueda',
            newChat: 'Nueva pantalla de chat',
            copy: 'Copiar comentario',
            openDebug: 'Abrir el diálogo de preferencias de pruebas',
        },
    },
    guides: {
        screenShare: 'Compartir pantalla',
        screenShareRequest: 'Expensify te está invitando a compartir la pantalla',
    },
    search: {
        resultsAreLimited: 'Los resultados de búsqueda están limitados.',
        viewResults: 'Ver resultados',
        resetFilters: 'Restablecer filtros',
        searchResults: {
            emptyResults: {
                title: 'No hay nada que ver aquí',
                subtitle: 'Intenta ajustar tus criterios de búsqueda o crear algo con el botón verde +.',
            },
            emptyExpenseResults: {
                title: 'Aún no has creado ningún gasto',
                subtitle: 'Crea un gasto o haz una prueba por Expensify para aprender más.',
                subtitleWithOnlyCreateButton: 'Usa el botón verde de abajo para crear un gasto.',
            },
            emptyReportResults: {
                title: 'Aún no has creado ningún informe',
                subtitle: 'Crea un informe o haz una prueba de Expensify para aprender más.',
                subtitleWithOnlyCreateButton: 'Usa el botón verde de abajo para crear un informe.',
            },
            emptyInvoiceResults: {
                title: 'Aún no has creado \nninguna factura',
                subtitle: 'Envía una factura o haz una prueba por Expensify para aprender más.',
                subtitleWithOnlyCreateButton: 'Usa el botón verde de abajo para enviar una factura.',
            },
            emptyTripResults: {
                title: 'No tienes viajes',
                subtitle: 'Reserva tu primer viaje a continuación.',
                buttonText: 'Reserva un viaje',
            },
            emptySubmitResults: {
                title: 'No hay gastos para enviar',
                subtitle: 'Todo despejado. ¡Date una vuelta de victoria!',
                buttonText: 'Crear informe',
            },
            emptyApproveResults: {
                title: 'No hay gastos para aprobar',
                subtitle: 'Cero gastos. Máxima relajación. ¡Bien hecho!',
            },
            emptyPayResults: {
                title: 'No hay gastos para pagar',
                subtitle: '¡Felicidades! Has cruzado la línea de meta.',
            },
            emptyExportResults: {
                title: 'No hay gastos para exportar',
                subtitle: 'Es hora de relajarse, buen trabajo.',
            },
            emptyUnapprovedResults: {
                title: 'No hay gastos para aprobar',
                subtitle: 'Cero gastos. Máxima relajación. ¡Bien hecho!',
            },
        },
        unapproved: 'No aprobado',
        unapprovedCash: 'Efectivo no aprobado',
        unapprovedCompanyCards: 'Tarjetas de empresa no aprobadas',
        saveSearch: 'Guardar búsqueda',
        savedSearchesMenuItemTitle: 'Guardadas',
        searchName: 'Nombre de la búsqueda',
        deleteSavedSearch: 'Eliminar búsqueda guardada',
        deleteSavedSearchConfirm: '¿Estás seguro de que quieres eliminar esta búsqueda?',
        groupedExpenses: 'gastos agrupados',
        bulkActions: {
            approve: 'Aprobar',
            pay: 'Pagar',
            delete: 'Eliminar',
            hold: 'Retener',
            unhold: 'Desbloquear',
            noOptionsAvailable: 'No hay opciones disponibles para el grupo de gastos seleccionado.',
        },
        filtersHeader: 'Filtros',
        filters: {
            date: {
                before: ({date}: OptionalParam<DateParams> = {}) => `Antes de ${date ?? ''}`,
                after: ({date}: OptionalParam<DateParams> = {}) => `Después de ${date ?? ''}`,
                on: ({date}: OptionalParam<DateParams> = {}) => `En ${date ?? ''}`,
                presets: {
                    [CONST.SEARCH.DATE_PRESETS.NEVER]: 'Nunca',
                    [CONST.SEARCH.DATE_PRESETS.LAST_MONTH]: 'El mes pasado',
                    [CONST.SEARCH.DATE_PRESETS.LAST_STATEMENT]: 'Último extracto',
                },
            },
            status: 'Estado',
            keyword: 'Palabra clave',
            hasKeywords: 'Tiene palabras clave',
            currency: 'Divisa',
            link: 'Enlace',
            pinned: 'Fijado',
            unread: 'No leído',
            completed: 'Completadas',
            card: {
                expensify: 'Expensify',
                individualCards: 'Tarjetas individuales',
                closedCards: 'Tarjetas cerradas',
                cardFeeds: 'Flujos de tarjetas',
                cardFeedName: ({cardFeedBankName, cardFeedLabel}: {cardFeedBankName: string; cardFeedLabel?: string}) =>
                    `Todo ${cardFeedBankName}${cardFeedLabel ? ` - ${cardFeedLabel}` : ''}`,
                cardFeedNameCSV: ({cardFeedLabel}: {cardFeedLabel?: string}) => `Todas las Tarjetas Importadas desde CSV${cardFeedLabel ? ` - ${cardFeedLabel}` : ''}`,
            },
            amount: {
                lessThan: ({amount}: OptionalParam<RequestAmountParams> = {}) => `Menos de ${amount ?? ''}`,
                greaterThan: ({amount}: OptionalParam<RequestAmountParams> = {}) => `Más que ${amount ?? ''}`,
                between: ({greaterThan, lessThan}: FiltersAmountBetweenParams) => `Entre ${greaterThan} y ${lessThan}`,
            },
            current: 'Actual',
            past: 'Anterior',
            submitted: 'Fecha de envío',
            approved: 'Fecha de aprobación',
            paid: 'Fecha de pago',
            exported: 'Fecha de exportación',
            posted: 'Fecha de contabilización',
            billable: 'Facturable',
            reimbursable: 'Reembolsable',
            groupBy: {
                reports: 'Informe',
                members: 'Miembro',
                cards: 'Tarjeta',
            },
            feed: 'Feed',
        },
        groupBy: 'Agrupar por',
        moneyRequestReport: {
            emptyStateTitle: 'Este informe no tiene gastos.',
            emptyStateSubtitle: 'Puedes añadir gastos a este informe usando el botón de arriba.',
        },
        noCategory: 'Sin categoría',
        noTag: 'Sin etiqueta',
        expenseType: 'Tipo de gasto',
        recentSearches: 'Búsquedas recientes',
        recentChats: 'Chats recientes',
        searchIn: 'Buscar en',
        searchPlaceholder: 'Busca algo',
        suggestions: 'Sugerencias',
        exportSearchResults: {
            title: 'Crear exportación',
            description: '¡Wow, esos son muchos elementos! Los agruparemos y Concierge te enviará un archivo en breve.',
        },
        exportAll: {
            selectAllMatchingItems: 'Seleccionar todos los elementos coincidentes',
            allMatchingItemsSelected: 'Todos los elementos coincidentes seleccionados',
        },
    },
    genericErrorPage: {
        title: '¡Oh-oh, algo salió mal!',
        body: {
            helpTextMobile: 'Intenta cerrar y volver a abrir la aplicación o cambiar a la',
            helpTextWeb: 'web.',
            helpTextConcierge: 'Si el problema persiste, comunícate con',
        },
        refresh: 'Actualizar',
    },
    fileDownload: {
        success: {
            title: '¡Descargado!',
            message: 'Archivo descargado correctamente',
            qrMessage:
                'Busca la copia de tu código QR en la carpeta de fotos o descargas. Consejo: Añádelo a una presentación para que el público pueda escanearlo y conectar contigo directamente.',
        },
        generalError: {
            title: 'Error en la descarga',
            message: 'No se puede descargar el archivo adjunto',
        },
        permissionError: {
            title: 'Permiso para acceder al almacenamiento',
            message: 'Expensify no puede guardar los archivos adjuntos sin permiso para acceder al almacenamiento. Haz click en configuración para actualizar los permisos.',
        },
    },
    desktopApplicationMenu: {
        mainMenu: 'New Expensify',
        about: 'Sobre New Expensify',
        update: 'Actualizar New Expensify',
        checkForUpdates: 'Buscar actualizaciones',
        toggleDevTools: 'Ver herramientas de desarrollo',
        viewShortcuts: 'Ver atajos de teclado',
        services: 'Servicios',
        hide: 'Ocultar New Expensify',
        hideOthers: 'Ocultar otros',
        showAll: 'Mostrar todos',
        quit: 'Salir de New Expensify',
        fileMenu: 'Archivo',
        closeWindow: 'Cerrar ventana',
        editMenu: 'Editar',
        undo: 'Deshacer',
        redo: 'Rehacer',
        cut: 'Cortar',
        copy: 'Copiar',
        paste: 'Pegar',
        pasteAndMatchStyle: 'Pegar adaptando el estilo',
        pasteAsPlainText: 'Pegar como texto sin formato',
        delete: 'Eliminar',
        selectAll: 'Seleccionar todo',
        speechSubmenu: 'Voz',
        startSpeaking: 'Empezar a hablar',
        stopSpeaking: 'Dejar de Hablar',
        viewMenu: 'Ver',
        reload: 'Cargar de nuevo',
        forceReload: 'Forzar recarga',
        resetZoom: 'Tamaño real',
        zoomIn: 'Acercar',
        zoomOut: 'Alejar',
        togglefullscreen: 'Alternar pantalla completa',
        historyMenu: 'Historial',
        back: 'Atrás',
        forward: 'Adelante',
        windowMenu: 'Ventana',
        minimize: 'Minimizar',
        zoom: 'Zoom',
        front: 'Traer todo al frente',
        helpMenu: 'Ayuda',
        learnMore: 'Más información',
        documentation: 'Documentación',
        communityDiscussions: 'Debates de la comunidad',
        searchIssues: 'Buscar problemas',
    },
    historyMenu: {
        forward: 'Adelante',
        back: 'Atrás',
    },
    checkForUpdatesModal: {
        available: {
            title: 'Actualización disponible',
            message: ({isSilentUpdating}: {isSilentUpdating: boolean}) =>
                `La nueva versión estará disponible dentro de poco.${isSilentUpdating ? ' Te notificaremos cuando esté lista.' : ''}`,
            soundsGood: 'Suena bien',
        },
        notAvailable: {
            title: 'Actualización no disponible',
            message: '¡No existe ninguna actualización disponible! Inténtalo de nuevo más tarde.',
            okay: 'Vale',
        },
        error: {
            title: 'Comprobación fallida',
            message: 'No hemos podido comprobar si existe una actualización. ¡Inténtalo de nuevo más tarde!.',
        },
    },
    report: {
        newReport: {
            createReport: 'Crear informe',
            chooseWorkspace: 'Elige un espacio de trabajo para este informe.',
        },
        genericCreateReportFailureMessage: 'Error inesperado al crear el chat. Por favor, inténtalo más tarde.',
        genericAddCommentFailureMessage: 'Error inesperado al añadir el comentario. Por favor, inténtalo más tarde.',
        genericUpdateReportFieldFailureMessage: 'Error inesperado al actualizar el campo. Por favor, inténtalo más tarde.',
        genericUpdateReportNameEditFailureMessage: 'Error inesperado al cambiar el nombre del informe. Por favor, intentarlo más tarde.',
        noActivityYet: 'Sin actividad todavía',
        actions: {
            type: {
                changeField: ({oldValue, newValue, fieldName}: ChangeFieldParams) => `cambió ${fieldName} de ${oldValue} a ${newValue}`,
                changeFieldEmpty: ({newValue, fieldName}: ChangeFieldParams) => `cambió ${fieldName} a ${newValue}`,
                changeReportPolicy: ({fromPolicyName, toPolicyName}: ChangeReportPolicyParams) =>
                    `cambió el espacio de trabajo a ${toPolicyName}${fromPolicyName ? ` (previamente ${fromPolicyName})` : ''}`,
                changeType: ({oldType, newType}: ChangeTypeParams) => `cambió type de ${oldType} a ${newType}`,
                delegateSubmit: ({delegateUser, originalManager}: DelegateSubmitParams) => `envié este informe a ${delegateUser} ya que ${originalManager} está de vacaciones`,
                exportedToCSV: `exportado a CSV`,
                exportedToIntegration: {
                    automatic: ({label}: ExportedToIntegrationParams) => `exportado a ${label}`,
                    automaticActionOne: ({label}: ExportedToIntegrationParams) => `exportado a ${label} mediante`,
                    automaticActionTwo: 'configuración contable',
                    manual: ({label}: ExportedToIntegrationParams) => `marcó este informe como exportado manualmente a ${label}.`,
                    automaticActionThree: 'y creó un registro con éxito para',
                    reimburseableLink: 'Exportar gastos por cuenta propia como',
                    nonReimbursableLink: 'gastos de la tarjeta de empresa',
                    pending: ({label}: ExportedToIntegrationParams) => `comenzó a exportar este informe a ${label}...`,
                },
                integrationsMessage: ({label, errorMessage, linkText, linkURL}: IntegrationSyncFailedParams) =>
                    `no se pudo exportar este informe a ${label} ("${errorMessage} ${linkText ? `<a href="${linkURL}">${linkText}</a>` : ''}")`,
                managerAttachReceipt: `agregó un recibo`,
                managerDetachReceipt: `quitó un recibo`,
                markedReimbursed: ({amount, currency}: MarkedReimbursedParams) => `pagó ${currency}${amount} en otro lugar`,
                markedReimbursedFromIntegration: ({amount, currency}: MarkReimbursedFromIntegrationParams) => `pagó ${currency}${amount} mediante integración`,
                outdatedBankAccount: `no se pudo procesar el pago debido a un problema con la cuenta bancaria del pagador`,
                reimbursementACHBounce: `no se pudo procesar el pago porque el pagador no tiene fondos suficientes`,
                reimbursementACHCancelled: `canceled the payment`,
                reimbursementAccountChanged: `no se pudo procesar el pago porque el pagador cambió de cuenta bancaria`,
                reimbursementDelayed: `procesó el pago pero se retrasó entre 1 y 2 días hábiles más`,
                selectedForRandomAudit: `seleccionado al azar para revisión`,
                selectedForRandomAuditMarkdown: `[seleccionado al azar](https://help.expensify.com/articles/expensify-classic/reports/Set-a-random-report-audit-schedule) para revisión`,
                share: ({to}: ShareParams) => `miembro invitado ${to}`,
                unshare: ({to}: UnshareParams) => `miembro eliminado ${to}`,
                stripePaid: ({amount, currency}: StripePaidParams) => `pagado ${currency}${amount}`,
                takeControl: `tomó el control`,
                integrationSyncFailed: ({label, errorMessage, workspaceAccountingLink}: IntegrationSyncFailedParams) =>
                    `hubo un problema al sincronizar con ${label}${errorMessage ? ` ("${errorMessage}")` : ''}. Por favor, soluciona el problema en la <a href="${workspaceAccountingLink}">configuración del espacio de trabajo</a>.`,
                addEmployee: ({email, role}: AddEmployeeParams) => `agregó a ${email} como ${role}`,
                updateRole: ({email, currentRole, newRole}: UpdateRoleParams) => `actualizó el rol ${email} a ${newRole} (previamente ${currentRole})`,
                updatedCustomField1: ({email, previousValue, newValue}: UpdatedCustomFieldParams) => {
                    if (!newValue) {
                        return `eliminó el campo personalizado 1 de ${email} (previamente "${previousValue}")`;
                    }

                    return !previousValue
                        ? `añadió "${newValue}" al campo personalizado 1 de ${email}`
                        : `cambió el campo personalizado 1 de ${email} a "${newValue}" (previamente "${previousValue}")`;
                },
                updatedCustomField2: ({email, previousValue, newValue}: UpdatedCustomFieldParams) => {
                    if (!newValue) {
                        return `eliminó el campo personalizado 2 de ${email} (previamente "${previousValue}")`;
                    }

                    return !previousValue
                        ? `añadió "${newValue}" al campo personalizado 2 de ${email}`
                        : `cambió el campo personalizado 2 de ${email} a "${newValue}" (previamente "${previousValue}")`;
                },
                leftWorkspace: ({nameOrEmail}: LeftWorkspaceParams) => `${nameOrEmail} salió del espacio de trabajo`,
                removeMember: ({email, role}: AddEmployeeParams) => `eliminado ${role} ${email}`,
                removedConnection: ({connectionName}: ConnectionNameParams) => `eliminó la conexión a ${CONST.POLICY.CONNECTIONS.NAME_USER_FRIENDLY[connectionName]}`,
                addedConnection: ({connectionName}: ConnectionNameParams) => `se conectó a ${CONST.POLICY.CONNECTIONS.NAME_USER_FRIENDLY[connectionName]}`,
                leftTheChat: 'salió del chat',
            },
        },
    },
    chronos: {
        oooEventSummaryFullDay: ({summary, dayCount, date}: OOOEventSummaryFullDayParams) => `${summary} por ${dayCount} ${dayCount === 1 ? 'día' : 'días'} hasta el ${date}`,
        oooEventSummaryPartialDay: ({summary, timePeriod, date}: OOOEventSummaryPartialDayParams) => `${summary} de ${timePeriod} del ${date}`,
    },
    footer: {
        features: 'Características',
        expenseManagement: 'Gestión de Gastos',
        spendManagement: 'Control de Gastos',
        expenseReports: 'Informes de Gastos',
        companyCreditCard: 'Tarjeta de Crédito Corporativa',
        receiptScanningApp: 'Aplicación de Escaneado de Recibos',
        billPay: 'Pago de Facturas',
        invoicing: 'Facturación',
        CPACard: 'Tarjeta Para Contables',
        payroll: 'Nómina',
        travel: 'Viajes',
        resources: 'Recursos',
        expensifyApproved: 'ExpensifyApproved!',
        pressKit: 'Kit de Prensa',
        support: 'Soporte',
        expensifyHelp: 'ExpensifyHelp',
        terms: 'Términos de Servicio',
        privacy: 'Privacidad',
        learnMore: 'Más Información',
        aboutExpensify: 'Acerca de Expensify',
        blog: 'Blog',
        jobs: 'Empleo',
        expensifyOrg: 'Expensify.org',
        investorRelations: 'Relaciones Con Los Inversores',
        getStarted: 'Comenzar',
        createAccount: 'Crear Una Cuenta Nueva',
        logIn: 'Conectarse',
    },
    allStates: {
        AK: {
            stateISO: 'AK',
            stateName: 'Alaska',
        },
        AL: {
            stateISO: 'AL',
            stateName: 'Alabama',
        },
        AR: {
            stateISO: 'AR',
            stateName: 'Arkansas',
        },
        AZ: {
            stateISO: 'AZ',
            stateName: 'Arizona',
        },
        CA: {
            stateISO: 'CA',
            stateName: 'California',
        },
        CO: {
            stateISO: 'CO',
            stateName: 'Colorado',
        },
        CT: {
            stateISO: 'CT',
            stateName: 'Connecticut',
        },
        DE: {
            stateISO: 'DE',
            stateName: 'Delaware',
        },
        FL: {
            stateISO: 'FL',
            stateName: 'Florida',
        },
        GA: {
            stateISO: 'GA',
            stateName: 'Georgia',
        },
        HI: {
            stateISO: 'HI',
            stateName: 'Hawái',
        },
        IA: {
            stateISO: 'IA',
            stateName: 'Iowa',
        },
        ID: {
            stateISO: 'ID',
            stateName: 'Idaho',
        },
        IL: {
            stateISO: 'IL',
            stateName: 'Illinois',
        },
        IN: {
            stateISO: 'IN',
            stateName: 'Indiana',
        },
        KS: {
            stateISO: 'KS',
            stateName: 'Kansas',
        },
        KY: {
            stateISO: 'KY',
            stateName: 'Kentucky',
        },
        LA: {
            stateISO: 'LA',
            stateName: 'Luisiana',
        },
        MA: {
            stateISO: 'MA',
            stateName: 'Massachusetts',
        },
        MD: {
            stateISO: 'MD',
            stateName: 'Maryland',
        },
        ME: {
            stateISO: 'ME',
            stateName: 'Maine',
        },
        MI: {
            stateISO: 'MI',
            stateName: 'Míchigan',
        },
        MN: {
            stateISO: 'MN',
            stateName: 'Minnesota',
        },
        MO: {
            stateISO: 'MO',
            stateName: 'Misuri',
        },
        MS: {
            stateISO: 'MS',
            stateName: 'Misisipi',
        },
        MT: {
            stateISO: 'MT',
            stateName: 'Montana',
        },
        NC: {
            stateISO: 'NC',
            stateName: 'Carolina del Norte',
        },
        ND: {
            stateISO: 'ND',
            stateName: 'Dakota del Norte',
        },
        NE: {
            stateISO: 'NE',
            stateName: 'Nebraska',
        },
        NH: {
            stateISO: 'NH',
            stateName: 'Nuevo Hampshire',
        },
        NJ: {
            stateISO: 'NJ',
            stateName: 'Nueva Jersey',
        },
        NM: {
            stateISO: 'NM',
            stateName: 'Nuevo México',
        },
        NV: {
            stateISO: 'NV',
            stateName: 'Nevada',
        },
        NY: {
            stateISO: 'NY',
            stateName: 'Nueva York',
        },
        OH: {
            stateISO: 'OH',
            stateName: 'Ohio',
        },
        OK: {
            stateISO: 'OK',
            stateName: 'Oklahoma',
        },
        OR: {
            stateISO: 'OR',
            stateName: 'Oregón',
        },
        PA: {
            stateISO: 'PA',
            stateName: 'Pensilvania',
        },
        PR: {
            stateISO: 'PR',
            stateName: 'Puerto Rico',
        },
        RI: {
            stateISO: 'RI',
            stateName: 'Rhode Island',
        },
        SC: {
            stateISO: 'SC',
            stateName: 'Carolina del Sur',
        },
        SD: {
            stateISO: 'SD',
            stateName: 'Dakota del Sur',
        },
        TN: {
            stateISO: 'TN',
            stateName: 'Tennessee',
        },
        TX: {
            stateISO: 'TX',
            stateName: 'Texas',
        },
        UT: {
            stateISO: 'UT',
            stateName: 'Utah',
        },
        VA: {
            stateISO: 'VA',
            stateName: 'Virginia',
        },
        VT: {
            stateISO: 'VT',
            stateName: 'Vermont',
        },
        WA: {
            stateISO: 'WA',
            stateName: 'Washington',
        },
        WI: {
            stateISO: 'WI',
            stateName: 'Wisconsin',
        },
        WV: {
            stateISO: 'WV',
            stateName: 'Virginia Occidental',
        },
        WY: {
            stateISO: 'WY',
            stateName: 'Wyoming',
        },
        DC: {
            stateISO: 'DC',
            stateName: 'Distrito de Columbia',
        },
    },
    allCountries: {
        AF: 'Afganistán',
        AL: 'Albania',
        DE: 'Alemania',
        AD: 'Andorra',
        AO: 'Angola',
        AI: 'Anguila',
        AQ: 'Antártida',
        AG: 'Antigua y Barbuda',
        SA: 'Arabia Saudita',
        DZ: 'Argelia',
        AR: 'Argentina',
        AM: 'Armenia',
        AW: 'Aruba',
        AU: 'Australia',
        AT: 'Austria',
        AZ: 'Azerbaiyán',
        BS: 'Bahamas',
        BH: 'Bahrein',
        BD: 'Bangladesh',
        BB: 'Barbados',
        BE: 'Bélgica',
        BZ: 'Belice',
        BJ: 'Benin',
        BT: 'Bhután',
        BY: 'Bielorrusia',
        MM: 'Birmania',
        BO: 'Bolivia',
        BQ: 'Bonaire, San Eustaquio y Saba',
        BA: 'Bosnia y Herzegovina',
        BW: 'Botsuana',
        BR: 'Brazil',
        BN: 'Brunéi',
        BG: 'Bulgaria',
        BF: 'Burkina Faso',
        BI: 'Burundi',
        CV: 'Cabo Verde',
        KH: 'Camboya',
        CM: 'Camerún',
        CA: 'Canadá',
        TD: 'Chad',
        CL: 'Chile',
        CN: 'China',
        CY: 'Chipre',
        VA: 'Ciudad del Vaticano',
        CO: 'Colombia',
        KM: 'Comoras',
        KP: 'Corea del Norte',
        KR: 'Corea del Sur',
        CI: 'Costa de Marfil',
        CR: 'Costa Rica',
        HR: 'Croacia',
        CU: 'Cuba',
        CW: 'Curazao',
        DK: 'Dinamarca',
        DM: 'Dominica',
        EC: 'Ecuador',
        EG: 'Egipto',
        SV: 'El Salvador',
        AE: 'Emiratos Árabes Unidos',
        ER: 'Eritrea',
        SK: 'Eslovaquia',
        SI: 'Eslovenia',
        ES: 'España',
        US: 'Estados Unidos de América',
        EE: 'Estonia',
        ET: 'Etiopía',
        PH: 'Filipinas',
        FI: 'Finlandia',
        FJ: 'Fiyi',
        FR: 'Francia',
        GA: 'Gabón',
        GM: 'Gambia',
        GE: 'Georgia',
        GH: 'Ghana',
        GI: 'Gibraltar',
        GD: 'Granada',
        GR: 'Greece',
        GL: 'Groenlandia',
        GP: 'Guadeloupe',
        GU: 'Guam',
        GT: 'Guatemala',
        GF: 'Guayana Francesa',
        GG: 'Guernsey',
        GN: 'Guinea',
        GQ: 'Guinea Ecuatorial',
        GW: 'Guinea-Bissau',
        GY: 'Guyana',
        HT: 'Haiti',
        HN: 'Honduras',
        HK: 'Hong Kong',
        HU: 'Hungría',
        IN: 'India',
        ID: 'Indonesia',
        IQ: 'Irak',
        IR: 'Irán',
        IE: 'Irlanda',
        AC: 'Isla Ascensión',
        IM: 'Isla de Man',
        CX: 'Isla de Navidad',
        NF: 'Isla Norfolk',
        IS: 'Islandia',
        BM: 'Islas Bermudas',
        KY: 'Islas Caimán',
        CC: 'Islas Cocos (Keeling)',
        CK: 'Islas Cook',
        AX: 'Islas de Åland',
        FO: 'Islas Feroe',
        GS: 'Islas Georgias del Sur y Sandwich del Sur',
        MV: 'Islas Maldivas',
        FK: 'Islas Malvinas',
        MP: 'Islas Marianas del Norte',
        MH: 'Islas Marshall',
        PN: 'Islas Pitcairn',
        SB: 'Islas Salomón',
        TC: 'Islas Turcas y Caicos',
        UM: 'Islas Ultramarinas Menores de Estados Unidos',
        VG: 'Islas Vírgenes Británicas',
        VI: 'Islas Vírgenes de los Estados Unidos',
        IL: 'Israel',
        IT: 'Italia',
        JM: 'Jamaica',
        JP: 'Japón',
        JE: 'Jersey',
        JO: 'Jordania',
        KZ: 'Kazajistán',
        KE: 'Kenia',
        KG: 'Kirguistán',
        KI: 'Kiribati',
        XK: 'Kosovo',
        KW: 'Kuwait',
        LA: 'Laos',
        LS: 'Lesoto',
        LV: 'Letonia',
        LB: 'Líbano',
        LR: 'Liberia',
        LY: 'Libia',
        LI: 'Liechtenstein',
        LT: 'Lituania',
        LU: 'Luxemburgo',
        MO: 'Macao',
        MK: 'Macedônia',
        MG: 'Madagascar',
        MY: 'Malasia',
        MW: 'Malawi',
        ML: 'Mali',
        MT: 'Malta',
        MA: 'Marruecos',
        MQ: 'Martinica',
        MR: 'Mauritania',
        MU: 'Mauritius',
        YT: 'Mayotte',
        MX: 'México',
        FM: 'Micronesia',
        MD: 'Moldavia',
        MC: 'Mónaco',
        MN: 'Mongolia',
        ME: 'Montenegro',
        MS: 'Montserrat',
        MZ: 'Mozambique',
        NA: 'Namibia',
        NR: 'Nauru',
        NP: 'Nepal',
        NI: 'Nicaragua',
        NE: 'Niger',
        NG: 'Nigeria',
        NU: 'Niue',
        NO: 'Noruega',
        NC: 'Nueva Caledonia',
        NZ: 'Nueva Zealand',
        OM: 'Omán',
        NL: 'Países Bajos',
        PK: 'Pakistán',
        PW: 'Palau',
        PS: 'Palestina',
        PA: 'Panamá',
        PG: 'Papúa Nueva Guinea',
        PY: 'Paraguay',
        PE: 'Perú',
        PF: 'Polinesia Francesa',
        PL: 'Polonia',
        PT: 'Portugal',
        PR: 'Puerto Rico',
        QA: 'Qatar',
        GB: 'Reino Unido',
        CF: 'República Centroafricana',
        CZ: 'República Checa',
        SS: 'República de Sudán del Sur',
        CG: 'República del Congo',
        CD: 'República Democrática del Congo',
        DO: 'República Dominicana',
        RE: 'Reunión',
        RW: 'Ruanda',
        RO: 'Rumanía',
        RU: 'Rusia',
        EH: 'Sahara Occidental',
        WS: 'Samoa',
        AS: 'Samoa Americana',
        BL: 'San Bartolomé',
        KN: 'San Cristóbal y Nieves',
        SM: 'San Marino',
        MF: 'San Martín (Francia)',
        PM: 'San Pedro y Miquelón',
        VC: 'San Vicente y las Granadinas',
        SH: 'Santa Elena',
        LC: 'Santa Lucía',
        ST: 'Santo Tomé y Príncipe',
        SN: 'Senegal',
        RS: 'Serbia',
        SC: 'Seychelles',
        SL: 'Sierra Leona',
        SG: 'Singapur',
        SX: 'Sint Maarten',
        SY: 'Siria',
        SO: 'Somalia',
        LK: 'Sri Lanka',
        ZA: 'Sudáfrica',
        SD: 'Sudán',
        SE: 'Suecia',
        CH: 'Suiza',
        SR: 'Surinám',
        SJ: 'Svalbard y Jan Mayen',
        SZ: 'Swazilandia',
        TH: 'Tailandia',
        TW: 'Taiwán',
        TZ: 'Tanzania',
        TJ: 'Tayikistán',
        IO: 'Territorio Británico del Océano Índico',
        TF: 'Territorios Australes y Antárticas Franceses',
        TL: 'Timor Oriental',
        TG: 'Togo',
        TK: 'Tokelau',
        TO: 'Tonga',
        TT: 'Trinidad y Tobago',
        TA: 'Tristán de Acuña',
        TN: 'Tunez',
        TM: 'Turkmenistán',
        TR: 'Turquía',
        TV: 'Tuvalu',
        UA: 'Ucrania',
        UG: 'Uganda',
        UY: 'Uruguay',
        UZ: 'Uzbekistan',
        VU: 'Vanuatu',
        VE: 'Venezuela',
        VN: 'Vietnam',
        WF: 'Wallis y Futuna',
        YE: 'Yemen',
        DJ: 'Yibuti',
        ZM: 'Zambia',
        ZW: 'Zimbabue',
    },
    accessibilityHints: {
        navigateToChatsList: 'Vuelve a la lista de chats',
        chatWelcomeMessage: 'Mensaje de bienvenida al chat',
        navigatesToChat: 'Navega a un chat',
        newMessageLineIndicator: 'Indicador de nueva línea de mensaje',
        chatMessage: 'mensaje de chat',
        lastChatMessagePreview: 'Vista previa del último mensaje del chat',
        workspaceName: 'Nombre del espacio de trabajo',
        chatUserDisplayNames: 'Nombres de los miembros del chat',
        scrollToNewestMessages: 'Desplázate a los mensajes más recientes',
        preStyledText: 'texto preestilizado',
        viewAttachment: 'Ver archivo adjunto',
    },
    parentReportAction: {
        deletedReport: 'Informe eliminado',
        deletedMessage: 'Mensaje eliminado',
        deletedExpense: 'Gasto eliminado',
        reversedTransaction: 'Transacción anulada',
        deletedTask: 'Tarea eliminada',
        hiddenMessage: 'Mensaje oculto',
    },
    threads: {
        thread: 'Hilo',
        replies: 'Respuestas',
        reply: 'Respuesta',
        from: 'De',
        in: 'en',
        parentNavigationSummary: ({reportName, workspaceName}: ParentNavigationSummaryParams) => `De ${reportName}${workspaceName ? ` en ${workspaceName}` : ''}`,
    },
    qrCodes: {
        copy: 'Copiar URL',
        copied: '¡Copiado!',
    },
    actionableMentionWhisperOptions: {
        invite: 'Invitar',
        nothing: 'No hacer nada',
    },
    actionableMentionJoinWorkspaceOptions: {
        accept: 'Aceptar',
        decline: 'Rechazar',
    },
    actionableMentionTrackExpense: {
        submit: 'Pedirle a alguien que lo pague',
        categorize: 'Categorizarlo',
        share: 'Compartirlo con mi contador',
        nothing: 'Por ahora, nada',
    },
    moderation: {
        flagDescription: 'Todos los mensajes marcados se enviarán a un moderador para tu revisión.',
        chooseAReason: 'Elige abajo un motivo para reportarlo:',
        spam: 'Spam',
        spamDescription: 'Publicidad no solicitada',
        inconsiderate: 'Desconsiderado',
        inconsiderateDescription: 'Frase insultante o irrespetuosa, con intenciones cuestionables',
        intimidation: 'Intimidación',
        intimidationDescription: 'Persigue agresivamente una agenda sobre objeciones válidas',
        bullying: 'Bullying',
        bullyingDescription: 'Se dirige a un individuo para obtener obediencia',
        harassment: 'Acoso',
        harassmentDescription: 'Comportamiento racista, misógino u otro comportamiento discriminatorio',
        assault: 'Agresion',
        assaultDescription: 'Ataque emocional específicamente dirigido con la intención de hacer daño',
        flaggedContent: 'Este mensaje ha sido marcado por violar las reglas de nuestra comunidad y el contenido se ha ocultado.',
        hideMessage: 'Ocultar mensaje',
        revealMessage: 'Revelar mensaje',
        levelOneResult: 'Envía una advertencia anónima y el mensaje es reportado para revisión.',
        levelTwoResult: 'Mensaje ocultado en el canal, más advertencia anónima y mensaje reportado para revisión.',
        levelThreeResult: 'Mensaje eliminado del canal, más advertencia anónima y mensaje reportado para revisión.',
    },
    teachersUnitePage: {
        teachersUnite: 'Profesores Unidos',
        joinExpensifyOrg: 'Únete a Expensify.org para eliminar la injusticia en todo el mundo y ayuda a los profesores a dividir sus gastos para las aulas más necesitadas.',
        iKnowATeacher: 'Yo conozco a un profesor',
        iAmATeacher: 'Soy profesor',
        getInTouch: '¡Excelente! Por favor, comparte tu información para que podamos ponernos en contacto con ellos.',
        introSchoolPrincipal: 'Introducción al director del colegio',
        schoolPrincipalVerifyExpense:
            'Expensify.org divide el coste del material escolar esencial para que los estudiantes de familias con bajos ingresos puedan tener una mejor experiencia de aprendizaje. Se pedirá a tu director que verifique tus gastos.',
        principalFirstName: 'Nombre del director',
        principalLastName: 'Apellido del director',
        principalWorkEmail: 'Correo electrónico de trabajo del director',
        updateYourEmail: 'Actualiza tu dirección de correo electrónico',
        updateEmail: 'Actualización de la dirección de correo electrónico',
        schoolMailAsDefault: ({contactMethodsRoute}: ContactMethodsRouteParams) =>
            `Antes de seguir adelante, asegúrate de establecer el correo electrónico de tu colegio como método de contacto predeterminado. Puede hacerlo en Configuración > Perfil > <a href="${contactMethodsRoute}">Métodos de contacto</a>.`,
        error: {
            enterPhoneEmail: 'Ingrese un correo electrónico o número de teléfono válido',
            enterEmail: 'Introduce un correo electrónico',
            enterValidEmail: 'Introduzca un correo electrónico válido',
            tryDifferentEmail: 'Por favor intenta con un correo electrónico diferente',
        },
    },
    cardTransactions: {
        notActivated: 'No activado',
        outOfPocket: 'Gastos por cuenta propia',
        companySpend: 'Gastos de empresa',
    },
    distance: {
        addStop: 'Añadir parada',
        deleteWaypoint: 'Eliminar punto de ruta',
        deleteWaypointConfirmation: '¿Estás seguro de que quieres eliminar este punto de ruta?',
        address: 'Dirección',
        waypointDescription: {
            start: 'Comienzo',
            stop: 'Parada',
        },
        mapPending: {
            title: 'Mapa pendiente',
            subtitle: 'El mapa se generará cuando vuelvas a estar en línea',
            onlineSubtitle: 'Un momento mientras configuramos el mapa',
            errorTitle: 'Mapa error',
            errorSubtitle: 'No se pudo cargar el mapa. Por favor, inténtalo de nuevo.',
        },
        error: {
            selectSuggestedAddress: 'Por favor, selecciona una dirección sugerida o usa la ubicación actual',
        },
    },
    reportCardLostOrDamaged: {
        screenTitle: 'Notificar la pérdida o deterioro de la tarjeta',
        nextButtonLabel: 'Siguiente',
        reasonTitle: '¿Por qué necesitas una tarjeta nueva?',
        cardDamaged: 'Mi tarjeta está dañada',
        cardLostOrStolen: 'He perdido o me han robado la tarjeta',
        confirmAddressTitle: 'Por favor, confirma la dirección postal de tu nueva tarjeta.',
        cardDamagedInfo: 'La nueva tarjeta te llegará en 2-3 días laborables. La tarjeta actual seguirá funcionando hasta que actives la nueva.',
        cardLostOrStolenInfo: 'La tarjeta actual se desactivará permanentemente en cuanto realices el pedido. La mayoría de las tarjetas llegan en pocos días laborables.',
        address: 'Dirección',
        deactivateCardButton: 'Desactivar tarjeta',
        shipNewCardButton: 'Enviar tarjeta nueva',
        addressError: 'La dirección es obligatoria',
        reasonError: 'Se requiere justificación',
        successTitle: '¡Tu nueva tarjeta está en camino!',
        successDescription: 'Tendrás que activarla cuando llegue en unos días hábiles. Mientras tanto, puedes usar una tarjeta virtual.',
    },
    eReceipt: {
        guaranteed: 'eRecibo garantizado',
        transactionDate: 'Fecha de transacción',
    },
    referralProgram: {
        [CONST.REFERRAL_PROGRAM.CONTENT_TYPES.START_CHAT]: {
            buttonText1: 'Inicia un chat y ',
            buttonText2: 'recomienda a un amigo',
            header: 'Inicia un chat, recomienda a un amigo',
            body: '¿Quieres que tus amigos también usen Expensify? Simplemente inicia un chat con ellos y nosotros nos encargaremos del resto.',
        },
        [CONST.REFERRAL_PROGRAM.CONTENT_TYPES.SUBMIT_EXPENSE]: {
            buttonText1: 'Presenta un gasto, ',
            buttonText2: 'recomienda a tu jefe',
            header: 'Envía un gasto, recomienda a tu jefe',
            body: '¿Quieres que tu jefe también use Expensify? Simplemente envíale un gasto y nosotros nos encargaremos del resto.',
        },
        [CONST.REFERRAL_PROGRAM.CONTENT_TYPES.REFER_FRIEND]: {
            header: 'Recomienda a un amigo',
            body: '¿Quieres que tus amigos también usen Expensify? Simplemente chatea, paga o divide un gasto con ellos y nosotros nos encargaremos del resto. ¡O simplemente comparte tu enlace de invitación!',
        },
        [CONST.REFERRAL_PROGRAM.CONTENT_TYPES.SHARE_CODE]: {
            buttonText: 'Recomienda a un amigo',
            header: 'Recomienda a un amigo',
            body: '¿Quieres que tus amigos también usen Expensify? Simplemente chatea, paga o divide un gasto con ellos y nosotros nos encargaremos del resto. ¡O simplemente comparte tu enlace de invitación!',
        },
        copyReferralLink: 'Copiar enlace de invitación',
    },
    systemChatFooterMessage: {
        [CONST.INTRO_CHOICES.MANAGE_TEAM]: {
            phrase1: 'Chatea con tu especialista asignado en ',
            phrase2: ' para obtener ayuda',
        },
        default: {
            phrase1: 'Envía un correo electrónico a ',
            phrase2: ' para obtener ayuda con la configuración',
        },
    },
    violations: {
        allTagLevelsRequired: 'Todas las etiquetas son obligatorias',
        autoReportedRejectedExpense: ({rejectedBy, rejectReason}: ViolationsAutoReportedRejectedExpenseParams) => `${rejectedBy} rechazó la solicitud y comentó "${rejectReason}"`,
        billableExpense: 'La opción facturable ya no es válida',
        cashExpenseWithNoReceipt: ({formattedLimit}: ViolationsCashExpenseWithNoReceiptParams = {}) => `Recibo obligatorio para cantidades mayores de ${formattedLimit}`,
        categoryOutOfPolicy: 'La categoría ya no es válida',
        conversionSurcharge: ({surcharge}: ViolationsConversionSurchargeParams) => `${surcharge}% de recargo aplicado`,
        customUnitOutOfPolicy: 'Tasa inválida para este espacio de trabajo',
        duplicatedTransaction: 'Posible duplicado',
        fieldRequired: 'Los campos del informe son obligatorios',
        futureDate: 'Fecha futura no permitida',
        invoiceMarkup: ({invoiceMarkup}: ViolationsInvoiceMarkupParams) => `Incrementado un ${invoiceMarkup}%`,
        maxAge: ({maxAge}: ViolationsMaxAgeParams) => `Fecha de más de ${maxAge} días`,
        missingCategory: 'Falta categoría',
        missingComment: 'Descripción obligatoria para la categoría seleccionada',
        missingTag: ({tagName}: ViolationsMissingTagParams = {}) => `Falta ${tagName ?? 'etiqueta'}`,
        modifiedAmount: ({type, displayPercentVariance}: ViolationsModifiedAmountParams) => {
            switch (type) {
                case 'distance':
                    return 'Importe difiere del calculado basado en distancia';
                case 'card':
                    return 'Importe mayor al de la transacción de la tarjeta';
                default:
                    if (displayPercentVariance) {
                        return `Importe ${displayPercentVariance}% mayor al del recibo escaneado`;
                    }
                    return 'Importe mayor al del recibo escaneado';
            }
        },
        modifiedDate: 'Fecha difiere del recibo escaneado',
        nonExpensiworksExpense: 'Gasto no proviene de Expensiworks',
        overAutoApprovalLimit: ({formattedLimit}: ViolationsOverAutoApprovalLimitParams) =>
            `Importe supera el límite de aprobación automática${formattedLimit ? ` de ${formattedLimit}` : ''}`,
        overCategoryLimit: ({formattedLimit}: ViolationsOverCategoryLimitParams) => `Importe supera el límite para la categoría${formattedLimit ? ` de ${formattedLimit}/persona` : ''}`,
        overLimit: ({formattedLimit}: ViolationsOverLimitParams) => `Importe supera el límite${formattedLimit ? ` de ${formattedLimit}/persona` : ''}`,
        overLimitAttendee: ({formattedLimit}: ViolationsOverLimitParams) => `Importe supera el límite${formattedLimit ? ` de ${formattedLimit}/persona` : ''}`,
        perDayLimit: ({formattedLimit}: ViolationsPerDayLimitParams) => `Importe supera el límite diario de la categoría${formattedLimit ? ` de ${formattedLimit}/persona` : ''}`,
        receiptNotSmartScanned:
            'Detalles del gasto y recibo añadidos manualmente. Por favor, verifica los detalles. <a href="https://help.expensify.com/articles/expensify-classic/reports/Automatic-Receipt-Audit">Aprende más</a> sobre la auditoría automática para todos los recibos.',
        receiptRequired: ({formattedLimit, category}: ViolationsReceiptRequiredParams) => {
            let message = 'Recibo obligatorio';
            if (formattedLimit ?? category) {
                message += ' para importes sobre';
                if (formattedLimit) {
                    message += ` ${formattedLimit}`;
                }
                if (category) {
                    message += ' el límite de la categoría';
                }
            }
            return message;
        },
        prohibitedExpense: ({prohibitedExpenseType}: ViolationsProhibitedExpenseParams) => {
            const preMessage = 'Gasto prohibido:';
            switch (prohibitedExpenseType) {
                case 'alcohol':
                    return `${preMessage} alcohol`;
                case 'gambling':
                    return `${preMessage} juegos de apuestas`;
                case 'tobacco':
                    return `${preMessage} tabaco`;
                case 'adultEntertainment':
                    return `${preMessage} entretenimiento para adultos`;
                case 'hotelIncidentals':
                    return `${preMessage} gastos adicionales de hotel`;
                default:
                    return `${preMessage}${prohibitedExpenseType}`;
            }
        },
        customRules: ({message}: ViolationsCustomRulesParams) => message,
        reviewRequired: 'Revisión requerida',
        rter: ({brokenBankConnection, isAdmin, email, isTransactionOlderThan7Days, member, rterType}: ViolationsRterParams) => {
            if (rterType === CONST.RTER_VIOLATION_TYPES.BROKEN_CARD_CONNECTION_530) {
                return 'No se puede emparejar automáticamente el recibo debido a una conexión bancaria interrumpida.';
            }
            if (brokenBankConnection || rterType === CONST.RTER_VIOLATION_TYPES.BROKEN_CARD_CONNECTION) {
                return isAdmin
                    ? `No se puede adjuntar recibo debido a un problema con la conexión a tu banco que ${email} necesita arreglar`
                    : 'No se puede adjuntar recibo debido a un problema con la conexión a tu banco que necesitas arreglar';
            }
            if (!isTransactionOlderThan7Days) {
                return isAdmin
                    ? `Pide a ${member} que marque la transacción como efectivo o espera 7 días e inténtalo de nuevo`
                    : 'Esperando a adjuntar automáticamente la transacción de tarjeta de crédito';
            }
            return '';
        },
        brokenConnection530Error: 'Recibo pendiente debido a una conexión bancaria rota',
        adminBrokenConnectionError: 'Recibo pendiente debido a una conexión bancaria rota. Por favor, resuélvelo en ',
        memberBrokenConnectionError: 'Recibo pendiente debido a una conexión bancaria rota. Por favor, pide a un administrador del espacio de trabajo que lo resuelva.',
        markAsCashToIgnore: 'Márcalo como efectivo para ignorar y solicitar el pago.',
        smartscanFailed: ({canEdit = true}) => `No se pudo escanear el recibo.${canEdit ? ' Introduce los datos manualmente.' : ''}`,
        receiptGeneratedWithAI: 'Posible recibo generado por IA',
        someTagLevelsRequired: ({tagName}: ViolationsTagOutOfPolicyParams = {}) => `Falta ${tagName ?? 'Tag'}`,
        tagOutOfPolicy: ({tagName}: ViolationsTagOutOfPolicyParams = {}) => `La etiqueta ${tagName ? `${tagName} ` : ''}ya no es válida`,
        taxAmountChanged: 'El importe del impuesto fue modificado',
        taxOutOfPolicy: ({taxName}: ViolationsTaxOutOfPolicyParams = {}) => `${taxName ?? 'El impuesto'} ya no es válido`,
        taxRateChanged: 'La tasa de impuesto fue modificada',
        taxRequired: 'Falta la tasa de impuesto',
        none: 'Ninguno',
        taxCodeToKeep: 'Elige qué tasa de impuesto quieres conservar',
        tagToKeep: 'Elige qué etiqueta quieres conservar',
        isTransactionReimbursable: 'Elige si la transacción es reembolsable',
        merchantToKeep: 'Elige qué comerciante quieres conservar',
        descriptionToKeep: 'Elige qué descripción quieres conservar',
        categoryToKeep: 'Elige qué categoría quieres conservar',
        isTransactionBillable: 'Elige si la transacción es facturable',
        keepThisOne: 'Mantener éste',
        confirmDetails: 'Confirma los detalles que conservas',
        confirmDuplicatesInfo: 'Los duplicados que no conserves se guardarán para que el usuario los elimine',
        hold: 'Este gasto está retenido',
        resolvedDuplicates: 'resolvió el duplicado',
    },
    reportViolations: {
        [CONST.REPORT_VIOLATIONS.FIELD_REQUIRED]: ({fieldName}: RequiredFieldParams) => `${fieldName} es obligatorio`,
    },
    violationDismissal: {
        rter: {
            manual: 'marcó el recibo como pagado en efectivo',
        },
        duplicatedTransaction: {
            manual: 'resolvió el duplicado',
        },
    },
    videoPlayer: {
        play: 'Reproducir',
        pause: 'Pausar',
        fullscreen: 'Pantalla completa',
        playbackSpeed: 'Velocidad',
        expand: 'Expandir',
        mute: 'Silenciar',
        unmute: 'Activar sonido',
        normal: 'Normal',
    },
    exitSurvey: {
        header: 'Antes de irte',
        reasonPage: {
            title: 'Dinos por qué te vas',
            subtitle: 'Antes de irte, por favor dinos por qué te gustaría cambiarte a Expensify Classic.',
        },
        reasons: {
            [CONST.EXIT_SURVEY.REASONS.FEATURE_NOT_AVAILABLE]: 'Necesito una función que sólo está disponible en Expensify Classic.',
            [CONST.EXIT_SURVEY.REASONS.DONT_UNDERSTAND]: 'No entiendo cómo usar New Expensify.',
            [CONST.EXIT_SURVEY.REASONS.PREFER_CLASSIC]: 'Entiendo cómo usar New Expensify, pero prefiero Expensify Classic.',
        },
        prompts: {
            [CONST.EXIT_SURVEY.REASONS.FEATURE_NOT_AVAILABLE]: '¿Qué función necesitas que no esté disponible en New Expensify?',
            [CONST.EXIT_SURVEY.REASONS.DONT_UNDERSTAND]: '¿Qué estás tratando de hacer?',
            [CONST.EXIT_SURVEY.REASONS.PREFER_CLASSIC]: '¿Por qué prefieres Expensify Classic?',
        },
        responsePlaceholder: 'Tu respuesta',
        thankYou: '¡Gracias por tus comentarios!',
        thankYouSubtitle: 'Sus respuestas nos ayudarán a crear un mejor producto para hacer las cosas bien. ¡Muchas gracias!',
        goToExpensifyClassic: 'Cambiar a Expensify Classic',
        offlineTitle: 'Parece que estás atrapado aquí...',
        offline:
            'Parece que estás desconectado. Desafortunadamente, Expensify Classic no funciona sin conexión, pero New Expensify sí. Si prefieres utilizar Expensify Classic, inténtalo de nuevo cuando tengas conexión a internet.',
        quickTip: 'Consejo rápido...',
        quickTipSubTitle: 'Puedes ir directamente a Expensify Classic visitando expensify.com. Márcalo como favorito para tener un acceso directo fácil.',
        bookACall: 'Reservar una llamada',
        noThanks: 'No, gracias',
        bookACallTitle: '¿Desea hablar con un responsable de producto?',
        benefits: {
            [CONST.EXIT_SURVEY.BENEFIT.CHATTING_DIRECTLY]: 'Chat directo sobre gastos e informes',
            [CONST.EXIT_SURVEY.BENEFIT.EVERYTHING_MOBILE]: 'Posibilidad de hacerlo todo desde el móvil',
            [CONST.EXIT_SURVEY.BENEFIT.TRAVEL_EXPENSE]: 'Viajes y gastos a la velocidad del chat',
        },
        bookACallTextTop: 'Al cambiar a Expensify Classic, se perderá:',
        bookACallTextBottom: 'Nos encantaría hablar con usted para entender por qué. Puede concertar una llamada con uno de nuestros jefes de producto para hablar de sus necesidades.',
        takeMeToExpensifyClassic: 'Llévame a Expensify Classic',
    },
    listBoundary: {
        errorMessage: 'Se ha producido un error al cargar más mensajes',
        tryAgain: 'Inténtalo de nuevo',
    },
    systemMessage: {
        mergedWithCashTransaction: 'encontró un recibo para esta transacción',
    },
    subscription: {
        authenticatePaymentCard: 'Autenticar tarjeta de pago',
        mobileReducedFunctionalityMessage: 'No puedes hacer cambios en tu suscripción en la aplicación móvil.',
        badge: {
            freeTrial: ({numOfDays}: BadgeFreeTrialParams) => `Prueba gratuita: ${numOfDays === 1 ? `queda 1 día` : `quedan ${numOfDays} días`}`,
        },
        billingBanner: {
            policyOwnerAmountOwed: {
                title: 'Tu información de pago está desactualizada',
                subtitle: ({date}: BillingBannerSubtitleWithDateParams) => `Actualiza tu tarjeta de pago antes del ${date} para continuar utilizando todas tus herramientas favoritas`,
            },
            policyOwnerAmountOwedOverdue: {
                title: 'No se pudo procesar tu pago',
                subtitle: ({date, purchaseAmountOwed}: BillingBannerOwnerAmountOwedOverdueParams) =>
                    date && purchaseAmountOwed
                        ? `No se ha podido procesar tu cargo de ${purchaseAmountOwed} del día ${date}. Por favor, añade una tarjeta de pago para saldar la cantidad adeudada.`
                        : 'Por favor, añade una tarjeta de pago para saldar la cantidad adeudada.',
            },
            policyOwnerUnderInvoicing: {
                title: 'Tu información de pago está desactualizada',
                subtitle: ({date}: BillingBannerSubtitleWithDateParams) => `Tu pago está vencido. Por favor, paga tu factura antes del ${date} para evitar la interrupción del servicio.`,
            },
            policyOwnerUnderInvoicingOverdue: {
                title: 'Tu información de pago está desactualizada',
                subtitle: 'Tu pago está vencido. Por favor, paga tu factura.',
            },
            billingDisputePending: {
                title: 'No se ha podido realizar el cobro a tu tarjeta',
                subtitle: ({amountOwed, cardEnding}: BillingBannerDisputePendingParams) =>
                    `Has impugnado el cargo ${amountOwed} en la tarjeta terminada en ${cardEnding}. Tu cuenta estará bloqueada hasta que se resuelva la disputa con tu banco.`,
            },
            cardAuthenticationRequired: {
                title: 'No se ha podido realizar el cobro a tu tarjeta',
                subtitle: ({cardEnding}: BillingBannerCardAuthenticationRequiredParams) =>
                    `Tu tarjeta de pago no ha sido autenticada completamente. Por favor, completa el proceso de autenticación para activar tu tarjeta de pago que termina en ${cardEnding}.`,
            },
            insufficientFunds: {
                title: 'No se ha podido realizar el cobro a tu tarjeta',
                subtitle: ({amountOwed}: BillingBannerInsufficientFundsParams) =>
                    `Tu tarjeta de pago fue rechazada por falta de fondos. Vuelve a intentarlo o añade una nueva tarjeta de pago para liquidar tu saldo pendiente de ${amountOwed}.`,
            },
            cardExpired: {
                title: 'No se ha podido realizar el cobro a tu tarjeta',
                subtitle: ({amountOwed}: BillingBannerCardExpiredParams) =>
                    `Tu tarjeta de pago ha expirado. Por favor, añade una nueva tarjeta de pago para liquidar tu saldo pendiente de ${amountOwed}.`,
            },
            cardExpireSoon: {
                title: 'Tu tarjeta caducará pronto',
                subtitle:
                    'Tu tarjeta de pago caducará a finales de este mes. Haz clic en el menú de tres puntos que aparece a continuación para actualizarla y continuar utilizando todas tus herramientas favoritas.',
            },
            retryBillingSuccess: {
                title: 'Éxito!',
                subtitle: 'Tu tarjeta fue facturada correctamente.',
            },
            retryBillingError: {
                title: 'No se ha podido realizar el cobro a tu tarjeta',
                subtitle:
                    'Antes de volver a intentarlo, llama directamente a tu banco para que autorice los cargos de Expensify y elimine las retenciones. De lo contrario, añade una tarjeta de pago diferente.',
            },
            cardOnDispute: ({amountOwed, cardEnding}: BillingBannerCardOnDisputeParams) =>
                `Has impugnado el cargo ${amountOwed} en la tarjeta terminada en ${cardEnding}. Tu cuenta estará bloqueada hasta que se resuelva la disputa con tu banco.`,
            preTrial: {
                title: 'Iniciar una prueba gratuita',
                subtitleStart: 'El próximo paso es ',
                subtitleLink: 'completar la configuración ',
                subtitleEnd: 'para que tu equipo pueda empezar a enviar gastos.',
            },
            trialStarted: {
                title: ({numOfDays}: TrialStartedTitleParams) => `Prueba gratuita: ¡${numOfDays === 1 ? `queda 1 día` : `quedan ${numOfDays} días`}!`,
                subtitle: 'Añade una tarjeta de pago para seguir utilizando tus funciones favoritas.',
            },
            trialEnded: {
                title: 'Tu prueba gratuita ha terminado',
                subtitle: 'Añade una tarjeta de pago para seguir utilizando tus funciones favoritas.',
            },
            earlyDiscount: {
                claimOffer: 'Solicitar oferta',
                noThanks: 'No, gracias',
                subscriptionPageTitle: ({discountType}: EarlyDiscountTitleParams) =>
                    `<strong>¡${discountType}% de descuento en tu primer año!</strong> ¡Solo añade una tarjeta de pago y comienza una suscripción anual!`,
                onboardingChatTitle: ({discountType}: EarlyDiscountTitleParams) => `Oferta por tiempo limitado: ¡${discountType}% de descuento en tu primer año!`,
                subtitle: ({days, hours, minutes, seconds}: EarlyDiscountSubtitleParams) => `Solicítala en ${days > 0 ? `${days}d : ` : ''}${hours}h : ${minutes}m : ${seconds}s`,
            },
        },
        cardSection: {
            title: 'Pago',
            subtitle: 'Añade una tarjeta para pagar tu suscripción a Expensify.',
            addCardButton: 'Añade tarjeta de pago',
            cardNextPayment: ({nextPaymentDate}: CardNextPaymentParams) => `Tu próxima fecha de pago es ${nextPaymentDate}.`,
            cardEnding: ({cardNumber}: CardEndingParams) => `Tarjeta terminada en ${cardNumber}`,
            cardInfo: ({name, expiration, currency}: CardInfoParams) => `Nombre: ${name}, Expiración: ${expiration}, Moneda: ${currency}`,
            changeCard: 'Cambiar tarjeta de pago',
            changeCurrency: 'Cambiar moneda de pago',
            cardNotFound: 'No se ha añadido ninguna tarjeta de pago',
            retryPaymentButton: 'Reintentar el pago',
            authenticatePayment: 'Autenticar el pago',
            requestRefund: 'Solicitar reembolso',
            requestRefundModal: {
                full: 'Obtener un reembolso es fácil, simplemente baja tu cuenta de categoría antes de la próxima fecha de facturación y recibirás un reembolso. <br /> <br /> Atención: Bajar tu cuenta de categoría significa que tu(s) espacio(s) de trabajo será(n) eliminado(s). Esta acción no se puede deshacer, pero siempre puedes crear un nuevo espacio de trabajo si cambias de opinión.',
                confirm: 'Eliminar y bajar de categoría',
            },
            viewPaymentHistory: 'Ver historial de pagos',
        },
        yourPlan: {
            title: 'Tu plan',
            exploreAllPlans: 'Explorar todos los planes',
            customPricing: 'Precios personalizados',
            asLowAs: ({price}: YourPlanPriceValueParams) => `desde ${price} por miembro activo/mes`,
            pricePerMemberMonth: ({price}: YourPlanPriceValueParams) => `${price} por miembro/mes`,
            pricePerMemberPerMonth: ({price}: YourPlanPriceValueParams) => `${price} por miembro por mes`,
            perMemberMonth: 'por miembro/mes',
            collect: {
                title: 'Recopilar',
                description: 'El plan para pequeñas empresas que te ofrece gestión de gastos, viajes y chat.',
                priceAnnual: ({lower, upper}: YourPlanPriceParams) => `Desde ${lower}/miembro activo con la Tarjeta Expensify, ${upper}/miembro activo sin la Tarjeta Expensify.`,
                pricePayPerUse: ({lower, upper}: YourPlanPriceParams) => `Desde ${lower}/miembro activo con la Tarjeta Expensify, ${upper}/miembro activo sin la Tarjeta Expensify.`,
                benefit1: 'Escaneo de recibos',
                benefit2: 'Reembolsos',
                benefit3: 'Gestión de tarjetas corporativas',
                benefit4: 'Aprobaciones de gastos y viajes',
                benefit5: 'Reservas y reglas de viaje',
                benefit6: 'Integraciones con QuickBooks/Xero',
                benefit7: 'Chat sobre gastos, reportes y salas',
                benefit8: 'Soporte con IA y asistencia humana',
            },
            control: {
                title: 'Controlar',
                description: 'Gastos, viajes y chat para empresas más grandes.',
                priceAnnual: ({lower, upper}: YourPlanPriceParams) => `Desde ${lower}/miembro activo con la Tarjeta Expensify, ${upper}/miembro activo sin la Tarjeta Expensify.`,
                pricePayPerUse: ({lower, upper}: YourPlanPriceParams) => `Desde ${lower}/miembro activo con la Tarjeta Expensify, ${upper}/miembro activo sin la Tarjeta Expensify.`,
                benefit1: 'Todo lo incluido en el plan Collect',
                benefit2: 'Flujos de aprobación multinivel',
                benefit3: 'Reglas de gastos personalizadas',
                benefit4: 'Integraciones con ERP (NetSuite, Sage Intacct, Oracle)',
                benefit5: 'Integraciones con RR. HH. (Workday, Certinia)',
                benefit6: 'SAML/SSO',
                benefit7: 'Informes y análisis personalizados',
                benefit8: 'Presupuestación',
            },
            thisIsYourCurrentPlan: 'Este es tu plan actual',
            downgrade: 'Reducir a Collect',
            upgrade: 'Actualizar a Control',
            addMembers: 'Agregar miembros',
            saveWithExpensifyTitle: 'Ahorra con la Tarjeta Expensify',
            saveWithExpensifyDescription: 'Utiliza nuestra calculadora de ahorro para ver cómo el reembolso en efectivo de la Tarjeta Expensify puede reducir tu factura de Expensify',
            saveWithExpensifyButton: 'Más información',
        },
        compareModal: {
            comparePlans: 'Comparar planes',
            unlockTheFeatures: 'Desbloquea las funciones que necesitas con el plan adecuado para ti. ',
            viewOurPricing: 'Consulta nuestra página de precios',
            forACompleteFeatureBreakdown: ' para ver un desglose completo de las funciones de cada uno de nuestros planes.',
        },
        details: {
            title: 'Datos de suscripción',
            annual: 'Suscripción anual',
            taxExempt: 'Solicitar estado de exención de impuestos',
            taxExemptEnabled: 'Exento de impuestos',
            taxExemptStatus: 'Estado de exención de impuestos',
            payPerUse: 'Pago por uso',
            subscriptionSize: 'Tamaño de suscripción',
            headsUp:
                'Atención: Si no estableces ahora el tamaño de tu suscripción, lo haremos automáticamente con el número de suscriptores activos del primer mes. A partir de ese momento, estarás suscrito para pagar al menos por ese número de afiliados durante los 12 meses siguientes. Puedes aumentar el tamaño de tu suscripción en cualquier momento, pero no puedes reducirlo hasta que finalice tu suscripción.',
            zeroCommitment: 'Compromiso cero con la tarifa de suscripción anual reducida',
        },
        subscriptionSize: {
            title: 'Tamaño de suscripción',
            yourSize: 'El tamaño de tu suscripción es el número de plazas abiertas que puede ocupar cualquier miembro activo en un mes determinado.',
            eachMonth:
                'Cada mes, tu suscripción cubre hasta el número de miembros activos establecido anteriormente. Cada vez que aumentes el tamaño de tu suscripción, iniciarás una nueva suscripción de 12 meses con ese nuevo tamaño.',
            note: 'Nota: Un miembro activo es cualquiera que haya creado, editado, enviado, aprobado, reembolsado, o exportado datos de gastos vinculados al espacio de trabajo de tu empresa.',
            confirmDetails: 'Confirma los datos de tu nueva suscripción anual:',
            subscriptionSize: 'Tamaño de suscripción',
            activeMembers: ({size}: SubscriptionSizeParams) => `${size} miembros activos/mes`,
            subscriptionRenews: 'Renovación de la suscripción',
            youCantDowngrade: 'No puedes bajar de categoría durante tu suscripción anual.',
            youAlreadyCommitted: ({size, date}: SubscriptionCommitmentParams) =>
                `Ya se ha comprometido a un tamaño de suscripción anual de ${size} miembros activos al mes hasta el ${date}. Puede cambiar a una suscripción de pago por uso en ${date} desactivando la auto-renovación.`,
            error: {
                size: 'Por favor ingrese un tamaño de suscripción valido',
                sameSize: 'Por favor, introduce un número diferente al de tu subscripción actual',
            },
        },
        paymentCard: {
            addPaymentCard: 'Añade tarjeta de pago',
            enterPaymentCardDetails: 'Introduce los datos de tu tarjeta de pago',
            security: 'Expensify es PCI-DSS obediente, utiliza cifrado a nivel bancario, y emplea infraestructura redundante para proteger tus datos.',
            learnMoreAboutSecurity: 'Obtén más información sobre nuestra seguridad.',
        },
        subscriptionSettings: {
            title: 'Configuración de suscripción',
            summary: ({subscriptionType, subscriptionSize, autoRenew, autoIncrease}: SubscriptionSettingsSummaryParams) =>
                `Tipo de suscripción: ${subscriptionType}, Tamaño de suscripción: ${subscriptionSize}, Renovación automática: ${autoRenew}, Aumento automático de asientos anuales: ${autoIncrease}`,
            none: 'ninguno',
            on: 'activado',
            off: 'desactivado',
            annual: 'Anual',
            autoRenew: 'Auto-renovación',
            autoIncrease: 'Auto-incremento',
            saveUpTo: ({amountWithCurrency}: SubscriptionSettingsSaveUpToParams) => `Ahorre hasta ${amountWithCurrency} al mes por miembro activo`,
            automaticallyIncrease:
                'Aumenta automáticamente tus plazas anuales para dar lugar a los miembros activos que superen el tamaño de tu suscripción. Nota: Esto ampliará la fecha de finalización de tu suscripción anual.',
            disableAutoRenew: 'Desactivar auto-renovación',
            helpUsImprove: 'Ayúdanos a mejorar Expensify',
            whatsMainReason: '¿Cuál es la razón principal por la que deseas desactivar la auto-renovación?',
            renewsOn: ({date}: SubscriptionSettingsRenewsOnParams) => `Se renovará el ${date}.`,
            pricingConfiguration: 'El precio depende de la configuración. Para obtener el precio más bajo, elige una suscripción anual y obtén la Tarjeta Expensify.',
            learnMore: {
                part1: 'Obtén más información en nuestra ',
                pricingPage: 'página de precios',
                part2: ' o chatea con nuestro equipo en tu ',
                adminsRoom: 'sala #admins.',
            },
            estimatedPrice: 'Precio estimado',
            changesBasedOn: 'Esto varía según el uso de tu Tarjeta Expensify y las opciones de suscripción que elijas a continuación.',
        },
        requestEarlyCancellation: {
            title: 'Solicitar cancelación anticipada',
            subtitle: '¿Cuál es la razón principal por la que solicitas la cancelación anticipada?',
            subscriptionCanceled: {
                title: 'Suscripción cancelada',
                subtitle: 'Tu suscripción anual ha sido cancelada.',
                info: 'Ya puedes seguir utilizando tu(s) espacio(s) de trabajo en la modalidad de pago por uso.',
                preventFutureActivity: {
                    part1: 'Si quieres evitar actividad y cargos futuros, debes ',
                    link: 'eliminar tu(s) espacio(s) de trabajo.',
                    part2: ' Ten en cuenta que cuando elimines tu(s) espacio(s) de trabajo, se te cobrará cualquier actividad pendienteque se haya incurrido durante el mes en curso.',
                },
            },
            requestSubmitted: {
                title: 'Solicitud enviada',
                subtitle: {
                    part1: 'Gracias por hacernos saber que deseas cancelar tu suscripción. Estamos revisando tu solicitud y nos comunicaremos contigo en breve a través de tu chat con ',
                    link: 'Concierge',
                    part2: '.',
                },
            },
            acknowledgement: `Al solicitar la cancelación anticipada, reconozco y acepto que Expensify no tiene ninguna obligación de conceder dicha solicitud en virtud de las <a href=${CONST.OLD_DOT_PUBLIC_URLS.TERMS_URL}>Condiciones de Servicio</a> de Expensify u otro acuerdo de servicios aplicable entre Expensify y yo, y que Expensify se reserva el derecho exclusivo a conceder dicha solicitud.`,
        },
    },
    feedbackSurvey: {
        tooLimited: 'Hay que mejorar la funcionalidad',
        tooExpensive: 'Demasiado caro',
        inadequateSupport: 'Atención al cliente inadecuada',
        businessClosing: 'Cierre, reducción, o adquisición de la empresa',
        additionalInfoTitle: '¿A qué software está migrando y por qué?',
        additionalInfoInputLabel: 'Tu respuesta',
    },
    roomChangeLog: {
        updateRoomDescription: 'establece la descripción de la sala a:',
        clearRoomDescription: 'la descripción de la habitación ha sido borrada',
    },
    delegate: {
        switchAccount: 'Cambiar de cuenta:',
        copilotDelegatedAccess: 'Copilot: Acceso delegado',
        copilotDelegatedAccessDescription: 'Permitir que otros miembros accedan a tu cuenta.',
        addCopilot: 'Agregar copiloto',
        membersCanAccessYourAccount: 'Estos miembros pueden acceder a tu cuenta:',
        youCanAccessTheseAccounts: 'Puedes acceder a estas cuentas a través del conmutador de cuentas:',
        role: ({role}: OptionalParam<DelegateRoleParams> = {}) => {
            switch (role) {
                case CONST.DELEGATE_ROLE.ALL:
                    return 'Completo';
                case CONST.DELEGATE_ROLE.SUBMITTER:
                    return 'Limitado';
                default:
                    return '';
            }
        },
        genericError: '¡Ups! Ha ocurrido un error. Por favor, inténtalo de nuevo.',
        onBehalfOfMessage: ({delegator}: DelegatorParams) => `en nombre de ${delegator}`,
        accessLevel: 'Nivel de acceso',
        confirmCopilot: 'Confirma tu copiloto a continuación.',
        accessLevelDescription: 'Elige un nivel de acceso a continuación. Tanto el acceso Completo como el Limitado permiten a los copilotos ver todas las conversaciones y gastos.',
        roleDescription: ({role}: OptionalParam<DelegateRoleParams> = {}) => {
            switch (role) {
                case CONST.DELEGATE_ROLE.ALL:
                    return 'Permite a otro miembro realizar todas las acciones en tu cuenta, en tu nombre. Incluye chat, presentaciones, aprobaciones, pagos, actualizaciones de configuración y más.';
                case CONST.DELEGATE_ROLE.SUBMITTER:
                    return 'Permite a otro miembro realizar la mayoría de las acciones en tu cuenta, en tu nombre. Excluye aprobaciones, pagos, rechazos y retenciones.';
                default:
                    return '';
            }
        },
        removeCopilot: 'Eliminar copiloto',
        removeCopilotConfirmation: '¿Estás seguro de que quieres eliminar este copiloto?',
        changeAccessLevel: 'Cambiar nivel de acceso',
        makeSureItIsYou: 'Vamos a asegurarnos de que eres tú',
        enterMagicCode: ({contactMethod}: EnterMagicCodeParams) =>
            `Por favor, introduce el código mágico enviado a ${contactMethod} para agregar un copiloto. Debería llegar en un par de minutos.`,
        enterMagicCodeUpdate: ({contactMethod}: EnterMagicCodeParams) =>
            `Por favor, introduce el código mágico enviado a ${contactMethod} para actualizar el nivel de acceso de tu copiloto.`,
        notAllowed: 'No tan rápido...',
        noAccessMessage: 'Como copiloto, no tienes acceso a esta página. ¡Lo sentimos!',
        notAllowedMessageStart: `Como`,
        notAllowedMessageHyperLinked: ' copiloto',
        notAllowedMessageEnd: ({accountOwnerEmail}: AccountOwnerParams) => ` de ${accountOwnerEmail}, no tienes permiso para realizar esta acción. ¡Lo siento!`,
        copilotAccess: 'Acceso a Copilot',
    },
    debug: {
        debug: 'Depuración',
        details: 'Detalles',
        JSON: 'JSON',
        reportActions: 'Acciones',
        reportActionPreview: 'Previa',
        nothingToPreview: 'Nada que previsualizar',
        editJson: 'Editar JSON:',
        preview: 'Previa:',
        missingProperty: ({propertyName}: MissingPropertyParams) => `Falta ${propertyName}`,
        invalidProperty: ({propertyName, expectedType}: InvalidPropertyParams) => `Propiedad inválida: ${propertyName} - Esperado: ${expectedType}`,
        invalidValue: ({expectedValues}: InvalidValueParams) => `Valor inválido - Esperado: ${expectedValues}`,
        missingValue: 'Valor en falta',
        createReportAction: 'Crear acción de informe',
        reportAction: 'Acciones del informe',
        report: 'Informe',
        transaction: 'Transacción',
        violations: 'Violaciones',
        transactionViolation: 'Violación de transacción',
        hint: 'Los cambios de datos no se enviarán al backend',
        textFields: 'Campos de texto',
        numberFields: 'Campos numéricos',
        booleanFields: 'Campos booleanos',
        constantFields: 'Campos constantes',
        dateTimeFields: 'Campos de fecha y hora',
        date: 'Fecha',
        time: 'Hora',
        none: 'Ninguno',
        visibleInLHN: 'Visible en LHN',
        GBR: 'GBR',
        RBR: 'RBR',
        true: 'verdadero',
        false: 'falso',
        viewReport: 'Ver Informe',
        viewTransaction: 'Ver transacción',
        createTransactionViolation: 'Crear infracción de transacción',
        reasonVisibleInLHN: {
            hasDraftComment: 'Tiene comentario en borrador',
            hasGBR: 'Tiene GBR',
            hasRBR: 'Tiene RBR',
            pinnedByUser: 'Fijado por el miembro',
            hasIOUViolations: 'Tiene violaciones de IOU',
            hasAddWorkspaceRoomErrors: 'Tiene errores al agregar sala de espacio de trabajo',
            isUnread: 'No leído (modo de enfoque)',
            isArchived: 'Archivado (modo más reciente)',
            isSelfDM: 'Es un mensaje directo propio',
            isFocused: 'Está temporalmente enfocado',
        },
        reasonGBR: {
            hasJoinRequest: 'Tiene solicitud de unión (sala de administrador)',
            isUnreadWithMention: 'No leído con mención',
            isWaitingForAssigneeToCompleteAction: 'Esperando a que el asignado complete la acción',
            hasChildReportAwaitingAction: 'Informe secundario pendiente de acción',
            hasMissingInvoiceBankAccount: 'Falta la cuenta bancaria de la factura',
        },
        reasonRBR: {
            hasErrors: 'Tiene errores en los datos o las acciones del informe',
            hasViolations: 'Tiene violaciones',
            hasTransactionThreadViolations: 'Tiene violaciones de hilo de transacciones',
        },
        indicatorStatus: {
            theresAReportAwaitingAction: 'Hay un informe pendiente de acción',
            theresAReportWithErrors: 'Hay un informe con errores',
            theresAWorkspaceWithCustomUnitsErrors: 'Hay un espacio de trabajo con errores en las unidades personalizadas',
            theresAProblemWithAWorkspaceMember: 'Hay un problema con un miembro del espacio de trabajo',
            theresAProblemWithAWorkspaceQBOExport: 'Hubo un problema con la configuración de exportación de la conexión del espacio de trabajo.',
            theresAProblemWithAContactMethod: 'Hay un problema con un método de contacto',
            aContactMethodRequiresVerification: 'Un método de contacto requiere verificación',
            theresAProblemWithAPaymentMethod: 'Hay un problema con un método de pago',
            theresAProblemWithAWorkspace: 'Hay un problema con un espacio de trabajo',
            theresAProblemWithYourReimbursementAccount: 'Hay un problema con tu cuenta de reembolso',
            theresABillingProblemWithYourSubscription: 'Hay un problema de facturación con tu suscripción',
            yourSubscriptionHasBeenSuccessfullyRenewed: 'Tu suscripción se ha renovado con éxito',
            theresWasAProblemDuringAWorkspaceConnectionSync: 'Hubo un problema durante la sincronización de la conexión del espacio de trabajo',
            theresAProblemWithYourWallet: 'Hay un problema con tu billetera',
            theresAProblemWithYourWalletTerms: 'Hay un problema con los términos de tu billetera',
        },
    },
    emptySearchView: {
        takeATestDrive: 'Haz una prueba',
    },
    migratedUserWelcomeModal: {
        title: 'Viajes y gastos, a la velocidad del chat',
        subtitle: 'New Expensify tiene la misma excelente automatización, pero ahora con una colaboración increíble:',
        confirmText: 'Vamos!',
        features: {
            chat: '<strong>Chatea directamente en cualquier gasto</strong>, informe o espacio de trabajo',
            scanReceipt: '<strong>Escanea recibos</strong> y obtén reembolsos',
            crossPlatform: 'Haz <strong>todo</strong> desde tu teléfono o navegador',
        },
    },
    productTrainingTooltip: {
        // TODO: CONCIERGE_LHN_GBR tooltip will be replaced by a tooltip in the #admins room
        // https://github.com/Expensify/App/issues/57045#issuecomment-2701455668
        conciergeLHNGBR: {
            part1: '¡Comienza',
            part2: ' aquí!',
        },
        saveSearchTooltip: {
            part1: 'Renombra tus búsquedas guardadas',
            part2: ' aquí',
        },
        bottomNavInboxTooltip: {
            part1: 'Revisa lo que ',
            part2: 'necesita tu atención',
            part3: '\ny ',
            part4: 'chatea sobre los gastos.',
        },
        workspaceChatTooltip: {
            part1: 'Chatea con ',
            part2: 'los aprobadores',
        },
        globalCreateTooltip: {
            part1: 'Crea gastos',
            part2: ', empieza a chatear',
            part3: '\ny más.',
            part4: ' ¡Pruébalo!',
        },
        GBRRBRChat: {
            part1: 'Verás 🟢 en ',
            part2: 'acciones a realizar',
            part3: ',\ny 🔴 en ',
            part4: 'elementos para revisar.',
        },
        accountSwitcher: {
            part1: 'Accede a tus ',
            part2: 'cuentas copiloto',
            part3: ' aquí',
        },
        expenseReportsFilter: {
            part1: '¡Bienvenido! Aquí encontrarás todos los',
            part2: '\ninformes de tu empresa',
            part3: '.',
        },
        scanTestTooltip: {
            part1: '¡Escanea nuestro recibo de prueba',
            part2: ' para ver cómo funciona!',
            part3: '¡Elige a',
            part4: ' nuestro gerente',
            part5: ' de prueba para probarlo!',
            part6: 'Ahora,',
            part7: ' envía tu gasto y',
            part8: '\n¡observa cómo ocurre la magia!',
            tryItOut: 'Prueba esto',
            noThanks: 'No, gracias',
        },
        outstandingFilter: {
            part1: 'Filtra los gastos\nque ',
            part2: 'necesitan aprobación',
        },
        scanTestDriveTooltip: {
            part1: '¡Envía este recibo para\n',
            part2: 'completar la prueba!',
        },
    },
    discardChangesConfirmation: {
        title: '¿Descartar cambios?',
        body: '¿Estás seguro de que quieres descartar los cambios que hiciste?',
        confirmText: 'Descartar cambios',
    },
    scheduledCall: {
        book: {
            title: 'Programar llamada',
            description: 'Encuentra un horario que funcione para ti.',
            slots: 'Horarios disponibles para el ',
        },
        confirmation: {
            title: 'Confirmar llamada',
            description: 'Asegúrate de que los detalles a continuación sean correctos. Una vez que confirmes la llamada, enviaremos una invitación con más información.',
            setupSpecialist: 'Tu especialista asignado',
            meetingLength: 'Duración de la reunión',
            dateTime: 'Fecha y hora',
            minutes: '30 minutos',
        },
        callScheduled: 'Llamada programada',
    },
    autoSubmitModal: {
        title: '¡Todo claro y enviado!',
        description: 'Se han solucionado todas las advertencias e infracciones, así que:',
        submittedExpensesTitle: 'Estos gastos han sido enviados',
        submittedExpensesDescription: 'Estos gastos se han enviado a tu aprobador pero aún se pueden editar hasta que sean aprobados.',
        pendingExpensesTitle: 'Los gastos pendientes se han movido',
        pendingExpensesDescription: 'Todo gasto de tarjeta pendiente se ha movido a un informe separado hasta que sea contabilizado.',
    },
    testDrive: {
        quickAction: {
            takeATwoMinuteTestDrive: 'Haz una prueba de 2 minutos',
        },
        modal: {
            title: 'Haz una prueba con nosotros',
            description: 'Haz un recorrido rápido por el producto para ponerte al día rápidamente. ¡No se requieren paradas!',
            confirmText: 'Iniciar prueba',
            helpText: 'Saltar',
            employee: {
                description:
                    '<muted-text>Consigue <strong>3 meses gratis</strong>  de Expensify para tu equipo. Solo introduce el correo electrónico de tu jefe abajo para enviarle un gasto escaneado de prueba.</muted-text>',
                email: 'Introduce el correo electrónico de tu jefe',
                error: 'Ese miembro es propietario de un espacio de trabajo, por favor introduce un nuevo miembro para probar.',
            },
        },
        banner: {
            currentlyTestDrivingExpensify: 'Actualmente estás probando Expensify',
            readyForTheRealThing: '¿Listo para la versión real?',
            getStarted: 'Comenzar',
        },
        employeeInviteMessage: ({name}: EmployeeInviteMessageParams) =>
            `# ${name} te invitó a probar Expensify\n\n¡Hola! Acabo de conseguirnos *3 meses gratis* para probar Expensify, la forma más rápida de gestionar gastos.\n\nAquí tienes un *recibo de prueba* para mostrarte cómo funciona:`,
    },
};

export default translations satisfies TranslationDeepObject<typeof en>;
