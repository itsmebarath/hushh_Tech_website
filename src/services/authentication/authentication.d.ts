import getUserDetails from "./getUserDetails";
import googleSignIn from "./googleSignIn";
import signOut from "./signOut";
import getAccessToken from "./getAccessToken";
import isLoggedIn from "./isLoggedIn";
import getFullName from "./getFullName";
import getSession from "./getSession";
import emailLogin from "./emailLogin";
import appleSignIn from "./appleSignIn";
declare const authentication: {
    googleSignIn: typeof googleSignIn;
    appleSignIn: typeof appleSignIn;
    getUserDetails: typeof getUserDetails;
    signOut: typeof signOut;
    getAccessToken: typeof getAccessToken;
    isLoggedIn: typeof isLoggedIn;
    getFullName: typeof getFullName;
    getSession: typeof getSession;
    emailLogin: typeof emailLogin;
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
export default authentication;
