/**
 * Conversation Generator for A2A Playground
 *
 * FULL A2A PROTOCOL IMPLEMENTATION
 * Uses the new kyc-agent-a2a-protocol API that follows
 * the Agent-to-Agent (A2A) Protocol by Google/Linux Foundation.
 *
 * @see https://a2a-protocol.org/latest/
 */
import type { A2AScenarioConfig, A2AScenarioResult, ConversationMessage } from '../../types/a2aPlayground';
/**
 * Generate a complete A2A conversation using the A2A Protocol API
 * Streams messages with realistic delays for animation
 */
export declare const generateA2AConversation: (config: A2AScenarioConfig, onMessage: (message: ConversationMessage) => void, isAborted: () => boolean) => Promise<{
    messages: ConversationMessage[];
    result: A2AScenarioResult;
}>;
/**
 * Generate a "NOT_FOUND" scenario (fallback if API fails)
 */
export declare const generateNotFoundConversation: (config: A2AScenarioConfig, onMessage: (message: ConversationMessage) => void, isAborted: () => boolean) => Promise<{
    messages: ConversationMessage[];
    result: A2AScenarioResult;
}>;
