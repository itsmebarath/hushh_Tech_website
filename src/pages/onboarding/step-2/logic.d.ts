import type { ReferralSource } from '../../../types/onboarding';
export declare const CURRENT_STEP = 2;
export declare const TOTAL_STEPS = 9;
export declare const PROGRESS_PCT: number;
export interface ReferralOption {
    value: ReferralSource;
    label: string;
    icon: string;
    iconBg: string;
    iconColor: string;
}
export declare const REFERRAL_OPTIONS: ReferralOption[];
export interface Step2Logic {
    selectedSource: ReferralSource | null;
    isLoading: boolean;
    isFooterVisible: boolean;
    setSelectedSource: (s: ReferralSource) => void;
    handleContinue: () => Promise<void>;
    handleSkip: () => Promise<void>;
    handleBack: () => void;
}
export declare const useStep2Logic: () => Step2Logic;
