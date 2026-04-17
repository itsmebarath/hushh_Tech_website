import * as reportService from "./reportService";
declare const services: {
    authentication: {
        googleSignIn: typeof import("./authentication/googleSignIn").default;
        appleSignIn: typeof import("./authentication/appleSignIn").default;
        getUserDetails: typeof import("./authentication/getUserDetails").default;
        signOut: typeof import("./authentication/signOut").default;
        getAccessToken: typeof import("./authentication/getAccessToken").default;
        isLoggedIn: typeof import("./authentication/isLoggedIn").default;
        getFullName: typeof import("./authentication/getFullName").default;
        getSession: typeof import("./authentication/getSession").default;
        emailLogin: typeof import("./authentication/emailLogin").default;
        mfa: {
            enrollMFA: () => Promise<{
                data: {
                    id: string;
                    type: "totp";
                    friendly_name?: string;
                } & {
                    totp: {
                        qr_code: string;
                        secret: string;
                        uri: string;
                    };
                };
                error: any;
            } | {
                data: any;
                error: any;
            }>;
            verifyMFAEnrollment: (factorId: string, code: string) => Promise<{
                data: import("@supabase/auth-js").AuthMFAVerifyResponseData;
                error: any;
            } | {
                data: any;
                error: any;
            }>;
            challengeMFA: (factorId: string) => Promise<{
                data: {
                    id: string;
                    type: "totp";
                    expires_at: number;
                };
                error: any;
            } | {
                data: any;
                error: any;
            }>;
            verifyMFAChallenge: (factorId: string, challengeId: string, code: string) => Promise<{
                data: import("@supabase/auth-js").AuthMFAVerifyResponseData;
                error: any;
            } | {
                data: any;
                error: any;
            }>;
            unenrollMFA: (factorId: string) => Promise<{
                data: {
                    id: string;
                };
                error: any;
            } | {
                data: any;
                error: any;
            }>;
            getMFAFactors: () => Promise<{
                data: import("@supabase/auth-js").Factor<"webauthn" | "phone" | "totp", "verified" | "unverified">[];
                error: any;
            } | {
                data: any;
                error: any;
            }>;
            getAssuranceLevel: () => Promise<{
                data: {
                    currentLevel: import("@supabase/auth-js").AuthenticatorAssuranceLevels | null;
                    nextLevel: import("@supabase/auth-js").AuthenticatorAssuranceLevels | null;
                    currentAuthenticationMethods: import("@supabase/auth-js").AMREntry[] | string[];
                };
                error: any;
            } | {
                data: any;
                error: any;
            }>;
            hasMFAEnrolled: () => Promise<boolean>;
            getVerifiedMFAFactors: () => Promise<{
                data: any[];
                error: any;
            } | {
                data: any;
                error: any;
            }>;
        };
    };
    reports: typeof reportService;
    preferences: {
        enrichPreferences: typeof import("./preferences").enrichPreferences;
        fetchPreferences: typeof import("./preferences").fetchPreferences;
        fetchPreferencesWithSeed: typeof import("./preferences").fetchPreferencesWithSeed;
        savePreferencesToSupabase: typeof import("./preferences").savePreferencesToSupabase;
    };
};
export default services;
