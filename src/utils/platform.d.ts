/**
 * Platform detection utilities for the web app.
 */
export declare function isNativeApp(): boolean;
export declare function isIOS(): boolean;
export declare function isAndroid(): boolean;
export declare function isWeb(): boolean;
export declare function getPlatform(): 'ios' | 'android' | 'web';
export declare function getBaseUrl(): string;
/**
 * Get the OAuth redirect URL for the current platform
 */
export declare function getOAuthRedirectUrl(): string;
export declare function getDeepLinkScheme(): string;
export declare function getDeepLinkAuthUrl(): string;
