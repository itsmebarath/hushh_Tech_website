export declare const DISPLAY_STEP: number;
export declare const TOTAL_STEPS: number;
export declare const PROGRESS_PCT: number;
export declare function useStep7Logic(): {
    firstName: string;
    lastName: string;
    isLoading: boolean;
    error: string;
    isFooterVisible: boolean;
    isValid: boolean;
    isPreFilledFromBank: boolean;
    handleFirstNameChange: (value: string) => void;
    handleLastNameChange: (value: string) => void;
    handleContinue: () => Promise<void>;
    handleBack: () => void;
    handleSkip: () => Promise<void>;
};
