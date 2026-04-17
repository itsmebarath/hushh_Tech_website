/**
 * Base error class for Hushh AI
 * All custom errors should extend this class
 */
export declare class HushhAIError extends Error {
    code: string;
    userMessage: string;
    retryable: boolean;
    constructor(message: string, code: string, userMessage: string, retryable?: boolean);
}
