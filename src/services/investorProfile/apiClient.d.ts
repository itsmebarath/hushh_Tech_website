/**
 * Client service to call the Supabase Edge Function for investor profile generation
 */
import { InvestorProfileInput, InvestorProfile } from "../../types/investorProfile";
export interface GenerateProfileResponse {
    success: boolean;
    profile: InvestorProfile;
    error?: string;
}
/**
 * Calls the Supabase Edge Function to generate investor profile using OpenAI GPT-4o
 */
export declare function generateInvestorProfile(input: InvestorProfileInput): Promise<GenerateProfileResponse>;
