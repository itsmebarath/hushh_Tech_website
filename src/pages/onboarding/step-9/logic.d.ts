export interface ShareClassInfo {
    id: string;
    name: string;
    unitPrice: number;
    color: string;
    bgColor: string;
    borderColor: string;
    iconType: 'diamond' | 'star' | 'verified';
}
export declare const SHARE_CLASSES: ShareClassInfo[];
export declare const COUNTRIES: {
    code: string;
    name: string;
}[];
export interface PlaidAccount {
    accountId: string;
    name: string;
    mask: string;
    subtype: string;
    achAccount: string;
    achRouting: string;
}
export declare const formatCurrency: (amount: number) => string;
export declare const validateBankName: (value: string) => string | null;
export declare const validateAccountHolderName: (value: string) => string | null;
export declare const validateAccountNumber: (value: string) => string | null;
export declare const validateConfirmAccountNumber: (value: string, original: string) => string | null;
export declare const validateBankCountry: (value: string) => string | null;
export declare const validateRoutingNumber: (value: string, country: string) => string | null;
export interface TouchedFields {
    bankName: boolean;
    accountHolderName: boolean;
    accountNumber: boolean;
    confirmAccountNumber: boolean;
    routingNumber: boolean;
    bankCountry: boolean;
    bankCity: boolean;
}
export interface Step13Logic {
    loading: boolean;
    pageLoading: boolean;
    error: string | null;
    isFooterVisible: boolean;
    autoFillMessage: string | null;
    plaidAccounts: PlaidAccount[];
    selectedAccountIdx: number;
    plaidInstitutionName: string;
    bankName: string;
    accountHolderName: string;
    accountNumber: string;
    confirmAccountNumber: string;
    routingNumber: string;
    bankCity: string;
    bankCountry: string;
    accountType: 'checking' | 'savings';
    selectedOnboardingAccountType: string;
    formattedOnboardingAccountType: string;
    touched: TouchedFields;
    shareUnits: {
        class_a_units: number;
        class_b_units: number;
        class_c_units: number;
    };
    totalInvestment: number;
    hasAnyUnits: boolean;
    bankNameError: string | null;
    accountHolderNameError: string | null;
    accountNumberError: string | null;
    confirmAccountNumberError: string | null;
    routingNumberError: string | null;
    isFormValid: () => boolean;
    getUnits: (classId: string) => number;
    handleBlur: (field: keyof TouchedFields) => void;
    handleBack: () => void;
    handleSkip: () => Promise<void>;
    handleContinue: () => Promise<void>;
    setBankName: (v: string) => void;
    setAccountHolderName: (v: string) => void;
    setAccountNumber: (v: string) => void;
    setConfirmAccountNumber: (v: string) => void;
    setRoutingNumber: (v: string) => void;
    setBankCity: (v: string) => void;
    setAccountType: (v: 'checking' | 'savings') => void;
    setSelectedAccountIdx: (v: number) => void;
    applyAccountSelection: (account: PlaidAccount) => void;
    userModifiedFields: React.MutableRefObject<Set<string>>;
}
export declare const useStep13Logic: () => Step13Logic;
