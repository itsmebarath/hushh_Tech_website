import { InvestorProfile } from "../../types/investorProfile";
export interface InvestorProfileData {
    user_id: string;
    name: string;
    email: string;
    age: number;
    phone_country_code: string;
    phone_number: string;
    organisation: string | null;
    investor_profile: InvestorProfile;
    confirmed_at: string;
}
export interface ConfidencePill {
    label: string;
    color: string;
    bg: string;
    border: string;
}
export declare function pillForConfidence(confidence: number): ConfidencePill;
export declare function useViewPreferencesLogic(): {
    loading: boolean;
    profileData: InvestorProfileData;
    profileUrl: string;
    handleShareProfile: () => void;
    handleCopyLink: () => void;
    handleNavigateToProfile: () => void;
};
