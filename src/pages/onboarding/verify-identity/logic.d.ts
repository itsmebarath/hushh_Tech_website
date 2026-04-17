export interface OnboardingData {
    legal_first_name?: string;
    legal_last_name?: string;
    email?: string;
    phone_number?: string;
    phone_country_code?: string;
    is_identity_verified?: boolean;
    identity_verified_at?: string;
}
export interface VerificationStatus {
    status: 'not_started' | 'pending' | 'processing' | 'verified' | 'requires_input' | 'failed';
    document_verified: boolean;
    selfie_verified: boolean;
    email_verified: boolean;
    phone_verified: boolean;
}
export declare function useVerifyIdentityLogic(): {
    loading: boolean;
    startingVerification: boolean;
    onboardingData: OnboardingData;
    verificationStatus: VerificationStatus;
    startVerification: () => Promise<void>;
    skipVerification: () => Promise<void>;
    goBack: () => void;
};
