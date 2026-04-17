export type AccessStatus = string;
export interface NdaMetadataResponse {
    metadata?: Record<string, unknown>;
    message?: string;
    status?: string;
}
interface RequestFileAccessParams {
    investorType: string;
    metadata: string;
}
export declare function checkAccessStatus(accessToken: string): Promise<string>;
export declare function getNdaMetadata(accessToken: string): Promise<NdaMetadataResponse>;
export declare function acceptNda(accessToken: string): Promise<string>;
export declare function requestFileAccess(accessToken: string, params: RequestFileAccessParams): Promise<string>;
export declare function generateNdaPdfBlob(accessToken: string, metadata: Record<string, unknown>): Promise<Blob>;
export {};
