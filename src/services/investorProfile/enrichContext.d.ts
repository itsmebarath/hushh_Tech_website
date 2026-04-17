import { DerivedContext, InvestorProfileInput } from "../../types/investorProfile";
/**
 * Enriches user input with derived context
 * - Phone number → Country, Region, Currency
 * - Email → Personal/Corporate, Company domain
 * - Age → Life stage bucket
 * - Organisation → Org type inference
 */
export declare function enrichContext(input: InvestorProfileInput): Promise<DerivedContext>;
/** Plaid financial context for AI profile intelligence */
export interface PlaidFinancialContext {
    nws_score: number;
    nws_tier: string;
    total_cash_balance: number;
    total_investment_value: number;
    num_accounts: number;
    account_types: string[];
    primary_institution: string | null;
    address_city: string | null;
    address_state: string | null;
    address_country: string | null;
    identity_verification_score: number | null;
}
/**
 * Fetches Plaid financial data + calculates NWS score.
 * Returns null if user has no Plaid data linked.
 */
export declare function enrichWithPlaidData(userId: string): Promise<PlaidFinancialContext | null>;
