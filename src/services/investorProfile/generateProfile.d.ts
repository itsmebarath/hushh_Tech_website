/**
 * ⚠️ DEPRECATED - DO NOT USE THIS FILE ⚠️
 *
 * This file contains INSECURE direct OpenAI API calls from the browser.
 * It exposes the API key in the client-side bundle and Network Inspector.
 *
 * Use apiClient.ts instead, which calls the secure Supabase Edge Function.
 *
 * @deprecated This file is kept for reference only. All calls should use apiClient.ts
 */
import { InvestorProfile, InvestorProfileInput, DerivedContext } from "../../types/investorProfile";
export declare function generateInvestorProfile(input: InvestorProfileInput, context: DerivedContext): Promise<InvestorProfile>;
