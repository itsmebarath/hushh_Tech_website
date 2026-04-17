export interface SignupLogic {
    isLoading: boolean;
    isSigningIn: boolean;
    oauthError: string | null;
    oauthFallbackUrl: string | null;
    handleAppleSignIn: () => Promise<void>;
    handleGoogleSignIn: () => Promise<void>;
}
export declare const useSignupLogic: () => SignupLogic;
