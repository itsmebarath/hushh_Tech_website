export declare const APPLE_WALLET_SUPPORT_MESSAGE = "Available on iPhone in Wallet-supported browsers.";
export declare const GOOGLE_WALLET_SUPPORT_MESSAGE = "Google Wallet is temporarily unavailable while we finish the wallet issuer setup.";
export interface WalletPassInput {
    name: string;
    email?: string | null;
    organisation?: string | null;
    slug?: string | null;
    userId?: string | null;
    investmentAmount?: number | null;
}
export interface WalletPreviewModel {
    badgeText: string;
    title: string;
    holderName: string;
    organizationName: string;
    membershipId: string;
    investmentClass: string;
    email: string;
    qrValue: string;
    profileUrl: string | null;
}
export interface GoogleWalletAvailability {
    available: boolean;
    message: string;
    provider: "local" | "upstream" | "none";
}
interface WalletPassResult {
    blob: Blob;
    filename: string;
}
interface GoogleWalletResult {
    saveUrl?: string;
    blob?: Blob;
    filename?: string;
}
interface AppleWalletSupportInput {
    userAgent?: string;
    platform?: string;
    maxTouchPoints?: number;
}
export declare const buildGoldPassPayload: (input: WalletPassInput) => any;
export declare const buildGoldPassPreviewModel: (input: WalletPassInput) => WalletPreviewModel;
export declare const isAppleWalletSupported: (input?: AppleWalletSupportInput) => boolean;
export declare function fetchGoogleWalletAvailability(options?: {
    force?: boolean;
}): Promise<GoogleWalletAvailability>;
export declare function requestHushhGoldPass(input: WalletPassInput): Promise<WalletPassResult>;
export declare function downloadHushhGoldPass(input: WalletPassInput): Promise<void>;
export declare function requestGoogleWalletPass(input: WalletPassInput): Promise<GoogleWalletResult>;
export declare function launchGoogleWalletPass(input: WalletPassInput): Promise<void>;
export {};
