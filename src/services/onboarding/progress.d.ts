import type { SupabaseClient } from "@supabase/supabase-js";
import { type FinancialLinkStatus } from "./flow";
export interface OnboardingProgressRecord {
    current_step: number | null;
    is_completed: boolean;
    financial_link_status: FinancialLinkStatus;
}
export declare function fetchOnboardingProgress(client: SupabaseClient, userId: string): Promise<OnboardingProgressRecord | null>;
export declare function fetchResolvedOnboardingProgress(client: SupabaseClient, userId: string): Promise<OnboardingProgressRecord | null>;
