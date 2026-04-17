/**
 * Validation error - Invalid user input
 * These errors are NOT retryable
 */
import { HushhAIError } from './HushhAIError';
export declare class ValidationError extends HushhAIError {
    constructor(field: string, message: string);
}
