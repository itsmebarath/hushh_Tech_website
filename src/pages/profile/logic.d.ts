export declare function useProfileLogic(): {
    session: import("@supabase/auth-js").Session;
    ndaApproved: boolean;
    onboardingStatus: {
        hasProfile: boolean;
        isCompleted: boolean;
        currentStep: number;
        financialLinkStatus: "pending" | "completed" | "skipped";
        loading: boolean;
    };
    primaryCTA: {
        text: string;
        action: () => void;
    };
    handleDiscoverFundA: () => void;
};
