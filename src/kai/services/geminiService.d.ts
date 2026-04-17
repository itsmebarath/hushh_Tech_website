/**
 * kai - Financial Intelligence Agent
 * Gemini Live API Service for real-time voice/video financial intelligence
 */
import { UserPersona, GeminiServiceConfig } from '../types';
/**
 * GeminiService - Handles real-time voice/video communication with Gemini AI
 */
export declare class GeminiService {
    private ai;
    private config;
    private inputAudioContext;
    private outputAudioContext;
    private stream;
    private nextStartTime;
    private sources;
    private videoIntervalId;
    private analyser;
    private gainNode;
    private session;
    constructor(config: GeminiServiceConfig);
    /**
     * Connect to Gemini Live API with specified persona
     */
    connect(persona?: UserPersona): Promise<void>;
    /**
     * Generate system prompt based on user persona
     */
    private getSystemPrompt;
    /**
     * Request a news update for a specific ticker
     */
    requestNewsUpdate(ticker: string): void;
    private initiateVisualGreeting;
    private sendTextTrigger;
    private captureFrame;
    private startAudioInputStream;
    private startVideoInputStream;
    private handleServerMessage;
    private startVisualizerLoop;
    disconnect(): Promise<void>;
    private cleanup;
}
