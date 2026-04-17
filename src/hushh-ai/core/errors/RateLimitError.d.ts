/**
 * Rate limit error - Too many requests
 * These errors should show countdown timer
 */
import { HushhAIError } from './HushhAIError';
export declare class RateLimitError extends HushhAIError {
    retryAfter: number;
    constructor(retryAfter: number, // Seconds until retry
    message?: string);
}
