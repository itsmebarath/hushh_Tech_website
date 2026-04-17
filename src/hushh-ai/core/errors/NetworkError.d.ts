/**
 * Network error - Connection issues, timeouts, etc.
 * These errors are retryable by default
 */
import { HushhAIError } from './HushhAIError';
export declare class NetworkError extends HushhAIError {
    constructor(message: string, userMessage?: string);
}
