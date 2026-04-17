import { InvestorProfileInput, InvestorProfileRecord, InvestorProfile, PublicInvestorProfileRecord } from "../../types/investorProfile";
/**
 * Create a new investor profile for the authenticated user
 *
 * Flow:
 * 1. Get authenticated user
 * 2. Check if profile already exists
 * 3. Call Supabase Edge Function to generate AI-powered investor profile
 * 4. Save to Supabase investor_profiles table
 * 5. Return complete profile record
 *
 * SECURITY: AI generation now happens in Supabase Edge Function with secure API key storage
 */
export declare function createInvestorProfile(input: InvestorProfileInput): Promise<InvestorProfileRecord>;
/**
 * Update an existing investor profile
 * Allows user to edit AI-generated fields or any other data
 */
export declare function updateInvestorProfile(updates: {
    name?: string;
    email?: string;
    age?: number;
    phone_country_code?: string;
    phone_number?: string;
    organisation?: string;
    investor_profile?: Partial<InvestorProfile>;
    user_confirmed?: boolean;
}): Promise<InvestorProfileRecord>;
/**
 * Fetch the investor profile for the authenticated user
 */
export declare function fetchInvestorProfile(): Promise<InvestorProfileRecord | null>;
/**
 * Delete the investor profile for the authenticated user
 */
export declare function deleteInvestorProfile(): Promise<void>;
/**
 * Fetch a public investor profile by slug (no authentication required)
 * Used for public profile pages through a secure server-side projection
 */
export declare function fetchPublicInvestorProfileBySlug(slug: string): Promise<PublicInvestorProfileRecord>;
/**
 * Regenerate the slug for the authenticated user's profile
 * Useful if user wants to change their public URL for privacy
 */
export declare function regenerateProfileSlug(): Promise<string>;
/**
 * Toggle the public visibility of the authenticated user's profile
 */
export declare function toggleProfileVisibility(isPublic: boolean): Promise<void>;
