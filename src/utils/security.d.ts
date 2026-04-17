export declare const DEFAULT_AUTH_REDIRECT = "/hushh-user-profile";
/**
 * Only allow same-origin, app-internal redirects.
 * External URLs, protocol-relative URLs, and malformed values fall back.
 */
export declare function sanitizeInternalRedirect(value: string | null | undefined, fallback?: string): string;
