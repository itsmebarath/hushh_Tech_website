/**
 * Network Worth Score (NWS) Calculator
 *
 * Calculates a score 0–100 from Plaid financial data.
 * Pure math — no API calls, no AI.
 *
 * Breakdown (100 points total):
 *   Liquidity Score       (20 pts) — checking + savings balances
 *   Investment Score      (25 pts) — investment holdings value
 *   Asset Depth           (20 pts) — total assets from balances
 *   Diversification       (15 pts) — variety of account types
 *   Identity Confidence   (10 pts) — Plaid identity match scores
 *   Account Health        (10 pts) — available vs current ratio
 */
export interface NWSInput {
    balanceData: any | null;
    investmentsData: any | null;
    identityMatchData: any | null;
}
export interface NWSResult {
    score: number;
    breakdown: NWSBreakdown;
    grade: 'A+' | 'A' | 'B+' | 'B' | 'C+' | 'C' | 'D' | 'F';
    label: string;
}
export interface NWSBreakdown {
    liquidity: number;
    investments: number;
    assetDepth: number;
    diversification: number;
    identityConfidence: number;
    accountHealth: number;
}
/**
 * Calculate Network Worth Score from Plaid financial data.
 * Returns score 0–100 with breakdown.
 */
export declare function calculateNWS(input: NWSInput): NWSResult;
/**
 * Calculate NWS from raw Supabase user_financial_data row.
 * Convenience wrapper that extracts the right fields.
 */
export declare function calculateNWSFromDB(financialRow: any): NWSResult;
