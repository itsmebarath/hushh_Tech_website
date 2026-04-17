import type { UIAccountType } from '../../../types/onboarding';
import { ACCOUNT_TYPE_OPTIONS } from '../../../types/onboarding';
export declare const CURRENT_STEP = 5;
export declare const TOTAL_STEPS = 9;
export declare const PROGRESS_PCT: number;
export interface DialCodeOption {
    code: string;
    country: string;
    iso: string;
}
export declare const resolveStep4CachedDialCode: ({ savedPhoneCode, cachedLocation, }: {
    savedPhoneCode?: string | null;
    cachedLocation?: {
        phoneDialCode?: string | null;
        countryCode?: string | null;
    } | null;
}) => {
    dialCode: string;
    countryIso: string;
};
export declare const PHONE_DIAL_CODES: DialCodeOption[];
export { ACCOUNT_TYPE_OPTIONS };
export type { UIAccountType };
export declare function useStep5Logic(): {
    selectedAccountType: UIAccountType;
    setSelectedAccountType: import("react").Dispatch<import("react").SetStateAction<UIAccountType>>;
    phoneNumber: string;
    countryCode: string;
    selectedDialCountryIso: string;
    isAutoDetectingDialCode: boolean;
    isLoading: boolean;
    showDialPicker: boolean;
    setShowDialPicker: import("react").Dispatch<import("react").SetStateAction<boolean>>;
    isFooterVisible: boolean;
    isValidPhone: boolean;
    canContinue: boolean;
    selectedDialOption: DialCodeOption;
    formatPhoneNumber: (value: string) => string;
    isPreFilledFromBank: boolean;
    handlePhoneChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleContinue: () => Promise<void>;
    handleBack: () => void;
    handleSkip: () => void;
    handleSelectDialCode: (option: DialCodeOption) => void;
};
