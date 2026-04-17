/**
 * KYC A2A Network - TypeScript Types
 *
 * Types for the 5-screen KYC UX flow and API contracts.
 */
/**
 * Request payload for /check endpoint
 */
export interface KycCheckRequest {
    relyingPartyId: string;
    consentToken: string;
    identifiers: {
        fullName: string;
        dob: string;
        country: string;
        idType: string;
        idNumber: string;
        email?: string;
        phone?: string;
    };
}
/**
 * KYC check status returned by the API
 */
export type KycStatus = 'PASS' | 'REVIEW' | 'NOT_FOUND' | 'FAIL' | 'CONSENT_INVALID' | 'EXPIRED';
/**
 * Risk band levels
 */
export type RiskBand = 'LOW' | 'MEDIUM' | 'HIGH';
/**
 * Verification levels
 */
export type VerificationLevel = 'basic' | 'standard' | 'enhanced' | 'premium';
/**
 * Provider information for verified KYC
 */
export interface VerifiedVia {
    providerName: string;
    providerType: 'INTERNAL' | 'BANK' | 'KYC_VENDOR' | 'GOVERNMENT';
    lastVerifiedAt: string;
    riskBand: RiskBand;
    riskScore?: number;
    verificationLevel?: VerificationLevel;
    country?: string;
}
/**
 * Agent conversation step for the detail view
 */
export interface AgentStep {
    actor: 'BANK_AGENT' | 'HUSHH_AGENT';
    message: string;
    stage: 'CONSENT_VALIDATION' | 'ATTESTATION_SEARCH' | 'POLICY_EVAL' | 'DECISION';
}
/**
 * Response from /check endpoint
 */
export interface KycCheckResponse {
    status: KycStatus;
    verifiedVia?: VerifiedVia;
    additionalRequirements?: string[];
    reasonCode?: 'NO_ATTESTATION' | 'EXPIRED' | 'RISK_TOO_HIGH' | 'PROVIDER_NOT_TRUSTED' | 'POLICY_MISMATCH' | 'CONSENT_INVALID' | 'NETWORK_ERROR';
    message?: string;
    steps?: AgentStep[];
    checkId?: string;
    timestamp?: string;
    latencyMs?: number;
}
/**
 * Steps in the KYC flow
 */
export type FlowStep = 'FINANCIAL_LINK' | 'INTRO' | 'DETAILS_CONSENT' | 'AGENTS_COLLAB' | 'RESULT_PASS' | 'RESULT_REVIEW' | 'RESULT_FULL' | 'ERROR';
/**
 * Financial verification result stored in state
 */
export interface FinancialVerificationResult {
    verified: boolean;
    productsAvailable: number;
    institutionName?: string;
    institutionId?: string;
    balanceAvailable: boolean;
    assetsAvailable: boolean;
    investmentsAvailable: boolean;
    timestamp: string;
}
/**
 * Complete flow state for the KYC UI
 */
export interface KycFlowState {
    step: FlowStep;
    isLoading: boolean;
    error?: string | null;
    request?: KycCheckRequest | null;
    response?: KycCheckResponse | null;
    showDetailModal: boolean;
    /** Gate: financial verification must be done before KYC */
    financialVerified: boolean;
    /** Financial verification result data */
    financialData?: FinancialVerificationResult | null;
}
/**
 * Form data collected on the Details screen
 */
export interface KycFormData {
    fullName: string;
    dob: string;
    country: string;
    idType: string;
    idNumber: string;
    email: string;
    phone: string;
    consentChecked: boolean;
}
/**
 * Props for KycIntroScreen
 */
export interface KycIntroScreenProps {
    onContinue: () => void;
    bankName?: string;
}
/**
 * Props for KycDetailsConsentScreen
 */
export interface KycDetailsConsentScreenProps {
    onSubmit: (request: KycCheckRequest) => void;
    bankName?: string;
    relyingPartyId: string;
    isLoading?: boolean;
}
/**
 * Props for KycAgentsCollabScreen
 */
export interface KycAgentsCollabScreenProps {
    isLoading: boolean;
    bankName?: string;
    steps?: AgentStep[];
}
/**
 * Props for KycResultPassScreen
 */
export interface KycResultPassScreenProps {
    response: KycCheckResponse;
    bankName?: string;
    onContinue: () => void;
    onViewDetails: () => void;
}
/**
 * Props for KycResultReviewScreen
 */
export interface KycResultReviewScreenProps {
    response: KycCheckResponse;
    bankName?: string;
    onUploadDoc: () => void;
    onViewDetails: () => void;
}
/**
 * Props for KycResultFullKycScreen
 */
export interface KycResultFullKycScreenProps {
    response?: KycCheckResponse;
    bankName?: string;
    onStartFullKyc: () => void;
}
/**
 * Props for KycAgentDetailModal
 */
export interface KycAgentDetailModalProps {
    isOpen: boolean;
    onClose: () => void;
    response?: KycCheckResponse;
    bankName?: string;
}
/**
 * Props for KycFinancialLinkScreen
 */
export interface KycFinancialLinkScreenProps {
    userId: string;
    userEmail?: string;
    /** Called with financial verification result when user clicks Continue */
    onContinue: (result: FinancialVerificationResult) => void;
    bankName?: string;
}
/**
 * Props for KycFlowContainer
 */
export interface KycFlowContainerProps {
    relyingPartyId?: string;
    bankName?: string;
    /** User ID for Plaid financial verification (pre-KYC step) */
    userId?: string;
    /** User email for Plaid Link UX improvement */
    userEmail?: string;
    onComplete?: (response: KycCheckResponse) => void;
    onStartFullKyc?: () => void;
}
/**
 * Map additional requirements codes to human-readable text
 */
export declare const REQUIREMENT_LABELS: Record<string, string>;
/**
 * Map reason codes to human-readable text
 */
export declare const REASON_LABELS: Record<string, string>;
/**
 * ID type options for the form
 */
export declare const ID_TYPE_OPTIONS: {
    value: string;
    label: string;
}[];
/**
 * Country options for the form
 */
export declare const COUNTRY_OPTIONS: {
    value: string;
    label: string;
}[];
/**
 * Generate synthetic agent steps based on response status
 */
export declare function generateSyntheticSteps(response: KycCheckResponse, bankName?: string): AgentStep[];
