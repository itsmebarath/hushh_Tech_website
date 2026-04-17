export declare const PROD_AUTH_ORIGIN = "https://hushhtech.com";
export declare const UAT_AUTH_ORIGIN = "https://uat.hushhtech.com";
export declare const SUPPORTED_PUBLIC_AUTH_ORIGINS: readonly ["https://hushhtech.com", "https://uat.hushhtech.com"];
export declare const SUPPORTED_LOCAL_AUTH_ORIGINS: readonly ["http://localhost:3000", "http://localhost:5173"];
export declare function normalizeOAuthRedirectUrl(value: string | null | undefined, fallback?: string): string;
export declare function getCanonicalAuthOrigin(configuredRedirectUrl: string | null | undefined, fallbackOrigin?: string): string;
export declare function isSupportedOAuthOrigin(origin: string, configuredRedirectUrl: string | null | undefined): boolean;
export declare function getOAuthCallbackUrl(currentOrigin: string, configuredRedirectUrl: string | null | undefined): string;
export declare function buildCanonicalAuthEntryUrl(pathname: string, search: string, configuredRedirectUrl: string | null | undefined, fallback?: string): string;
export declare function redirectToUrl(url: string): void;
export interface OAuthHostResolution {
    canonicalEntryUrl: string;
    canonicalOrigin: string;
    callbackUrl: string;
    supported: boolean;
}
export declare function resolveOAuthHost(pathname: string, search: string, configuredRedirectUrl: string | null | undefined, currentOrigin: string): OAuthHostResolution;
