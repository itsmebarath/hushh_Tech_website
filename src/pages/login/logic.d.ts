export interface LoginLogic {
    isLoading: boolean;
    isSigningIn: boolean;
    bootTimedOut: boolean;
    oauthError: string | null;
    oauthFallbackUrl: string | null;
    handleAppleSignIn: () => Promise<void>;
    handleGoogleSignIn: () => Promise<void>;
}
export declare const useLoginLogic: () => LoginLogic;
