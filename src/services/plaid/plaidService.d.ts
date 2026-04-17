/**
 * Plaid Service — Clean API calls to Supabase Edge Functions
 *
 * Simple, no-frills service. All sensitive operations happen server-side.
 */
export type ProductFetchStatus = 'idle' | 'loading' | 'success' | 'unavailable' | 'error' | 'pending';
export interface ProductResult {
    available: boolean;
    data: any | null;
    error: string | null;
    reason: 'not_supported' | 'error' | null;
}
export interface FinancialDataResponse {
    status: 'complete' | 'partial' | 'failed';
    balance: ProductResult;
    assets: ProductResult;
    investments: ProductResult;
    identity: ProductResult;
    authNumbers: ProductResult;
    identityMatch: ProductResult;
    summary: {
        products_available: number;
        products_total: number;
        can_proceed: boolean;
    };
}
/** Create a Plaid Link token (supports OAuth redirect/resume) */
export declare const createLinkToken: (userId: string, userEmail?: string, redirectUri?: string, receivedRedirectUri?: string) => Promise<{
    link_token: string;
    expiration: string;
}>;
/** Exchange public token for access token */
export declare const exchangeToken: (publicToken: string, userId: string, institutionName?: string, institutionId?: string) => Promise<{
    access_token: string;
    item_id: string;
}>;
/** Fetch auth numbers (account number, routing number, account type) from Plaid */
export declare const fetchAuthNumbers: (accessToken: string) => Promise<{
    accounts: Array<{
        account_id: string;
        name: string;
        subtype: string;
        type: string;
    }>;
    numbers: {
        ach: Array<{
            account: string;
            routing: string;
            wire_routing: string;
            account_id: string;
        }>;
    };
}>;
/** Match user identity against bank account owner data */
export declare const fetchIdentityMatch: (accessToken: string, userData?: {
    legal_name?: string;
    phone_number?: string;
    email_address?: string;
    address?: any;
}) => Promise<ProductResult>;
/** Fetch all 6 products in parallel */
export declare const fetchAllFinancialData: (accessToken: string, userId: string) => Promise<FinancialDataResponse>;
/** Check asset report status */
export declare const checkAssetReport: (assetReportToken: string, userId: string) => Promise<{
    status: "complete" | "pending";
    data?: any;
}>;
/** Save financial data to Supabase */
export declare const saveFinancialDataToSupabase: (userId: string, data: FinancialDataResponse, institutionName?: string, institutionId?: string, itemId?: string, accessToken?: string) => Promise<void>;
export declare const formatCurrency: (amount: number | null | undefined, currency?: string) => string;
export declare const getHeaderTitle: (count: number) => string;
export declare const getProductStatus: (product: ProductResult) => ProductFetchStatus;
/** Prepare an Item for Signal Transaction Scores (call after token exchange) */
export declare const signalPrepare: (accessToken: string) => Promise<any>;
/** Evaluate ACH transaction return risk */
export declare const signalEvaluate: (params: {
    accessToken: string;
    accountId: string;
    clientTransactionId: string;
    amount: number;
    clientUserId?: string;
    isRecurring?: boolean;
    defaultPaymentMethod?: "SAME_DAY_ACH" | "STANDARD_ACH" | "MULTIPLE_PAYMENT_METHODS";
    rulesetKey?: string;
    user?: {
        name?: {
            given_name?: string;
            family_name?: string;
        };
        phone_number?: string;
        email_address?: string;
        address?: any;
    };
    device?: {
        ip_address?: string;
        user_agent?: string;
    };
}) => Promise<{
    scores: {
        customer_initiated_return_risk: {
            score: number;
            risk_tier: number;
        };
        bank_initiated_return_risk: {
            score: number;
            risk_tier: number;
        };
    };
    core_attributes: Record<string, any>;
    ruleset?: {
        ruleset_key: string;
        result: "ACCEPT" | "REROUTE" | "REVIEW";
        triggered_rule_details?: any;
    };
    warnings: any[];
    request_id: string;
}>;
/** Report whether you initiated an ACH transaction */
export declare const signalDecisionReport: (params: {
    clientTransactionId: string;
    initiated: boolean;
    decisionOutcome?: "APPROVE" | "REVIEW" | "REJECT" | "TAKE_OTHER_RISK_MEASURES" | "NOT_EVALUATED";
    paymentMethod?: "SAME_DAY_ACH" | "STANDARD_ACH" | "MULTIPLE_PAYMENT_METHODS";
    daysFundsOnHold?: number;
    amountInstantlyAvailable?: number;
}) => Promise<{
    request_id: string;
}>;
/** Report a return for an ACH transaction */
export declare const signalReturnReport: (params: {
    clientTransactionId: string;
    returnCode: string;
    returnedAt?: string;
}) => Promise<{
    request_id: string;
}>;
export interface SandboxTestResult {
    success: boolean;
    item_id: string;
    institution: {
        name: string;
        id: string;
    };
    products: {
        balance: {
            available: boolean;
            accounts: number;
            error: string | null;
        };
        investments: {
            available: boolean;
            holdings: number;
            error: string | null;
        };
        assets: {
            available: boolean;
            token: string | null;
            error: string | null;
        };
    };
    summary: {
        products_available: number;
        products_total: number;
        status: string;
        saved_to_db: boolean;
    };
}
/**
 * Create a sandbox test Item (bypasses Plaid Link UI).
 * Uses /sandbox/public_token/create → exchange → fetch all → save.
 * SANDBOX ONLY.
 */
export declare const createSandboxTestItem: (userId: string, institutionId?: string) => Promise<SandboxTestResult>;
