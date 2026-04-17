/**
 * kai - Financial Intelligence Agent
 * Type definitions for the kai module
 */
export declare enum ConnectionState {
    DISCONNECTED = "DISCONNECTED",
    CONNECTING = "CONNECTING",
    CONNECTED = "CONNECTED",
    ERROR = "ERROR"
}
export interface AudioVisualizerState {
    volume: number;
    frequencyData: Uint8Array;
}
export type UserPersona = 'Everyday Investor' | 'Active Trader' | 'Professional Advisor';
export interface Scenario {
    name: string;
    outcome: string;
    price_impact: string;
    probability: string;
}
export interface DecisionCardData {
    recommendation: string;
    confidence: number;
    fundamental_insight: string;
    sentiment_insight: string;
    valuation_insight: string;
    debate_digest: string;
    evidence: string[];
    reliability_score: number;
    risk_alignment: string;
    target_persona: string;
    ticker_symbol?: string;
    current_price?: string;
    price_change_percentage?: string;
    scenarios?: Scenario[];
    compliance_stub?: string;
}
export interface GeminiServiceConfig {
    onConnectionStateChange: (state: ConnectionState) => void;
    onVolumeChange: (volume: number) => void;
    onAudioData: (freqData: Uint8Array) => void;
    onStatusChange: (text: string) => void;
    onDecisionCard: (data: DecisionCardData) => void;
    videoElement: HTMLVideoElement;
}
export interface PersonaConfig {
    id: UserPersona;
    name: string;
    description: string;
    icon: string;
    color: string;
}
