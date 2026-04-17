/**
 * NDA Service
 * Handles all NDA-related API calls for the global NDA gate feature
 */
export interface NDAStatus {
    hasSignedNda: boolean;
    signedAt: string | null;
    ndaVersion: string | null;
    signerName: string | null;
}
export interface SignNDAResult {
    success: boolean;
    signedAt?: string;
    signerName?: string;
    ndaVersion?: string;
    error?: string;
}
/**
 * Check if the current user has signed the NDA
 */
export declare const checkNDAStatus: (userId: string) => Promise<NDAStatus>;
/**
 * Sign the global NDA
 */
export declare const signNDA: (signerName: string, ndaVersion?: string, pdfUrl?: string) => Promise<SignNDAResult>;
/**
 * Generate personalized NDA PDF using Cloud Run service
 */
export declare const generateNDAPdf: (metadata: Record<string, unknown>, accessToken: string) => Promise<{
    success: boolean;
    pdfUrl?: string;
    blob?: Blob;
    error?: string;
}>;
/**
 * Send NDA signed notification to manish@hushh.ai and ankit@hushh.ai
 */
export declare const sendNDANotification: (signerName: string, signerEmail: string, signedAt: string, ndaVersion: string, pdfUrl?: string, pdfBlob?: Blob, userId?: string, signerIp?: string, documentsAcknowledged?: string[]) => Promise<{
    success: boolean;
    error?: string;
}>;
/**
 * Upload signed NDA PDF to Supabase Storage
 */
export declare const uploadSignedNDA: (userId: string, pdfBlob: Blob) => Promise<{
    success: boolean;
    url?: string;
    error?: string;
}>;
declare const _default: {
    checkNDAStatus: (userId: string) => Promise<NDAStatus>;
    signNDA: (signerName: string, ndaVersion?: string, pdfUrl?: string) => Promise<SignNDAResult>;
    generateNDAPdf: (metadata: Record<string, unknown>, accessToken: string) => Promise<{
        success: boolean;
        pdfUrl?: string;
        blob?: Blob;
        error?: string;
    }>;
    sendNDANotification: (signerName: string, signerEmail: string, signedAt: string, ndaVersion: string, pdfUrl?: string, pdfBlob?: Blob, userId?: string, signerIp?: string, documentsAcknowledged?: string[]) => Promise<{
        success: boolean;
        error?: string;
    }>;
    uploadSignedNDA: (userId: string, pdfBlob: Blob) => Promise<{
        success: boolean;
        url?: string;
        error?: string;
    }>;
};
export default _default;
