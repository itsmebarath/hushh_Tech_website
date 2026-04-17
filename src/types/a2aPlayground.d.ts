/**
 * A2A Playground Types
 *
 * Types for the Agent-to-Agent KYC Playground demo.
 * Shows two AI agents (Bank KYC Copilot + Hushh KYC Agent) collaborating.
 */
/**
 * Relying party (bank) options for demo
 */
export interface RelyingParty {
    id: string;
    name: string;
    logo?: string;
    description?: string;
}
/**
 * User identifiers to verify
 */
export interface DemoUserIdentifiers {
    fullName: string;
    phoneCountryCode: string;
    phoneNumber: string;
    country: string;
    email?: string;
    ssnLast4?: string;
}
/**
 * Scenario operation toggles
 */
export interface ScenarioOperations {
    verifyKycStatus: boolean;
    confirmKeyMatch: boolean;
    exportKycProfile: boolean;
}
/**
 * Complete scenario configuration
 */
export interface A2AScenarioConfig {
    relyingParty: RelyingParty;
    user: DemoUserIdentifiers;
    operations: ScenarioOperations;
}
/**
 * Which agent is speaking
 */
export type AgentActor = 'BANK_AGENT' | 'HUSHH_AGENT';
/**
 * Stage of the A2A conversation
 */
export type ConversationStage = 'INITIATE' | 'CHECKING' | 'ATTESTATION_FOUND' | 'KEY_VERIFY_REQUEST' | 'KEY_VERIFY_RESULT' | 'EXPORT_REQUEST' | 'EXPORT_PROGRESS' | 'EXPORT_COMPLETE' | 'BANK_CONFIRM' | 'ERROR';
/**
 * A single conversation message
 */
export interface ConversationMessage {
    id: string;
    actor: AgentActor;
    stage: ConversationStage;
    message: string;
    timestamp: Date;
    metadata?: Record<string, any>;
    isProgress?: boolean;
    progressPercent?: number;
}
/**
 * A2A Risk Band (including CRITICAL for rejected users)
 */
export type A2ARiskBand = 'LOW' | 'MEDIUM' | 'HIGH' | 'CRITICAL';
/**
 * KYC decision from the A2A flow
 */
export interface A2AKycDecision {
    status: 'PASS' | 'REVIEW' | 'NOT_FOUND' | 'FAIL';
    verifiedVia: {
        providerName: string;
        providerType: 'INTERNAL' | 'BANK' | 'KYC_VENDOR';
        lastVerifiedAt: string;
        riskBand: A2ARiskBand;
        trustScore?: number;
    };
    verifiedAttributes: string[];
}
/**
 * Normalized KYC profile for export
 */
export interface ExportedKycProfile {
    fullName: string;
    dob?: string;
    address?: {
        line1: string;
        line2?: string;
        city: string;
        state?: string;
        country: string;
        postalCode: string;
    };
    idDocument?: {
        type: string;
        country: string;
        last4: string;
    };
    phone?: {
        countryCode: string;
        number: string;
    };
    email?: string;
    kycMeta: {
        providerName: string;
        riskBand: string;
        lastVerifiedAt: string;
        trustScore?: number;
    };
}
/**
 * Data export result
 */
export interface A2AExportResult {
    exportedTo: string;
    targetUserUid: string;
    profileSchema: string;
    includedFields: string[];
    excludedFields: string[];
    profile: ExportedKycProfile;
    migrationLink?: string;
    migrationToken?: string;
}
/**
 * Audit log entry
 */
export interface A2AAuditEntry {
    hushhCheckId: string;
    loggedAt: string;
    operations: string[];
    bankId: string;
    userId: string;
}
/**
 * Complete A2A scenario result
 */
export interface A2AScenarioResult {
    success: boolean;
    kycDecision: A2AKycDecision;
    keyMatchResult?: boolean;
    exportResult?: A2AExportResult;
    audit: A2AAuditEntry;
    totalDurationMs: number;
    trustScore?: number;
    riskBand?: A2ARiskBand;
    migrationLink?: string;
    taskId?: string;
}
/**
 * Steps in the A2A playground flow
 */
export type A2APlaygroundStep = 'SETUP' | 'CONVERSATION' | 'RESULT';
/**
 * Complete state for the A2A Playground
 */
export interface A2APlaygroundState {
    step: A2APlaygroundStep;
    config: A2AScenarioConfig | null;
    messages: ConversationMessage[];
    isRunning: boolean;
    result: A2AScenarioResult | null;
    error: string | null;
}
export interface A2AScenarioSetupProps {
    onRunScenario: (config: A2AScenarioConfig) => void;
}
export interface A2AConversationProps {
    config: A2AScenarioConfig;
    messages: ConversationMessage[];
    isRunning: boolean;
    result: A2AScenarioResult | null;
    onViewResult: () => void;
}
export interface A2AResultSummaryProps {
    config: A2AScenarioConfig;
    result: A2AScenarioResult;
    messages: ConversationMessage[];
    onRunAnother: () => void;
    onViewConversation: () => void;
}
export interface A2APlaygroundContainerProps {
    defaultRelyingPartyId?: string;
}
/**
 * Available relying parties for demo
 */
export declare const DEMO_RELYING_PARTIES: RelyingParty[];
/**
 * Default scenario configuration
 */
export declare const DEFAULT_SCENARIO_CONFIG: A2AScenarioConfig;
