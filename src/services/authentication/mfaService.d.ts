/**
 * MFA Service for Supabase TOTP Authentication
 * Provides complete Multi-Factor Authentication functionality
 */
/**
 * Enrolls a new MFA factor for the current user
 * @returns {Promise<{data: {id: string, totp: {qr_code: string, secret: string, uri: string}} | null, error: any}>}
 */
export declare const enrollMFA: () => Promise<{
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
/**
 * Verifies the MFA enrollment with the user's first OTP code
 * @param {string} factorId - The factor ID from enrollment
 * @param {string} code - The 6-digit OTP code from authenticator app
 * @returns {Promise<{data: any, error: any}>}
 */
export declare const verifyMFAEnrollment: (factorId: string, code: string) => Promise<{
    data: import("@supabase/auth-js").AuthMFAVerifyResponseData;
    error: any;
} | {
    data: any;
    error: any;
}>;
/**
 * Creates an MFA challenge for sign-in verification
 * @param {string} factorId - The factor ID to challenge
 * @returns {Promise<{data: {id: string} | null, error: any}>}
 */
export declare const challengeMFA: (factorId: string) => Promise<{
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
/**
 * Verifies an MFA challenge with the provided OTP code
 * @param {string} factorId - The factor ID
 * @param {string} challengeId - The challenge ID from challengeMFA
 * @param {string} code - The 6-digit OTP code
 * @returns {Promise<{data: any, error: any}>}
 */
export declare const verifyMFAChallenge: (factorId: string, challengeId: string, code: string) => Promise<{
    data: import("@supabase/auth-js").AuthMFAVerifyResponseData;
    error: any;
} | {
    data: any;
    error: any;
}>;
/**
 * Unenrolls an MFA factor
 * @param {string} factorId - The factor ID to unenroll
 * @returns {Promise<{data: any, error: any}>}
 */
export declare const unenrollMFA: (factorId: string) => Promise<{
    data: {
        id: string;
    };
    error: any;
} | {
    data: any;
    error: any;
}>;
/**
 * Gets all enrolled MFA factors for the current user
 * @returns {Promise<{data: any[], error: any}>}
 */
export declare const getMFAFactors: () => Promise<{
    data: import("@supabase/auth-js").Factor<"webauthn" | "phone" | "totp", "verified" | "unverified">[];
    error: any;
} | {
    data: any;
    error: any;
}>;
/**
 * Gets the current authentication assurance level
 * @returns {Promise<{data: {currentLevel: string, nextLevel: string, currentAuthenticationMethods: any[]} | null, error: any}>}
 */
export declare const getAssuranceLevel: () => Promise<{
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
/**
 * Checks if the user has MFA enrolled
 * @returns {Promise<boolean>}
 */
export declare const hasMFAEnrolled: () => Promise<boolean>;
/**
 * Gets the verified MFA factors (status: 'verified')
 * @returns {Promise<{data: any[], error: any}>}
 */
export declare const getVerifiedMFAFactors: () => Promise<{
    data: any[];
    error: any;
} | {
    data: any;
    error: any;
}>;
declare const mfaService: {
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
export default mfaService;
