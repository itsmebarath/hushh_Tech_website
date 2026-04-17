import { PrivacySettings } from "../../types/investorProfile";
export declare const TOKENS: {
    readonly label: "#000000";
    readonly secondary: "#6E6E73";
    readonly tertiary: "#8E8E93";
    readonly separator: "#E5E5EA";
    readonly blue: "#0A84FF";
    readonly green: "#34C759";
    readonly red: "#FF3B30";
};
export declare function usePrivacyControlsLogic(): {
    loading: boolean;
    saving: boolean;
    privacySettings: PrivacySettings;
    handleToggle: (section: keyof PrivacySettings, field: string) => void;
    handleSave: () => Promise<void>;
    handleBackToProfile: () => void;
};
