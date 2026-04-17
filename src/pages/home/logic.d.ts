import { Session } from "@supabase/supabase-js";
export interface OnboardingStatus {
    hasProfile: boolean;
    isCompleted: boolean;
    currentStep: number;
    financialLinkStatus: "pending" | "completed" | "skipped";
    loading: boolean;
}
export interface PrimaryCTA {
    text: string;
    action: () => void;
    loading: boolean;
}
export interface HomeLogic {
    session: Session | null;
    primaryCTA: PrimaryCTA;
    onNavigate: (path: string) => void;
}
export declare const useHomeLogic: () => HomeLogic;
