export interface ProductUsageMetadata {
    device?: 'mobile' | 'tablet' | 'desktop';
    platform?: 'web' | 'ios' | 'android';
    referrer?: string;
    userAgent?: string;
    screenSize?: string;
}
export interface ProductUsageRecord {
    id: string;
    user_id: string;
    product_name: string;
    first_access_at: string;
    last_access_at: string;
    access_count: number;
    metadata: ProductUsageMetadata;
    created_at: string;
    updated_at: string;
}
/**
 * Track product usage for the authenticated user
 * Uses Supabase RPC function for upsert with access_count increment
 *
 * @param productName - The product identifier (e.g., 'hushh-ai', 'kyc', 'investor-profile')
 * @param additionalMetadata - Optional additional metadata to store
 * @returns The updated/created usage record, or null if not authenticated
 */
export declare function trackProductUsage(productName: string, additionalMetadata?: Partial<ProductUsageMetadata>): Promise<ProductUsageRecord | null>;
/**
 * Get all product usage records for the current user
 */
export declare function getUserProductUsage(): Promise<ProductUsageRecord[]>;
/**
 * Get product usage for a specific product
 */
export declare function getProductUsage(productName: string): Promise<ProductUsageRecord | null>;
export declare const PRODUCTS: {
    readonly HUSHH_AI: "hushh-ai";
    readonly KYC: "kyc";
    readonly INVESTOR_PROFILE: "investor-profile";
    readonly ONBOARDING: "onboarding";
    readonly COMMUNITY: "community";
    readonly RECEIPT_GENERATOR: "receipt-generator";
};
export type ProductName = typeof PRODUCTS[keyof typeof PRODUCTS];
