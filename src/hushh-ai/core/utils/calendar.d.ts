/**
 * Calendar-related keywords for intent detection
 */
export declare const CALENDAR_KEYWORDS: string[];
/**
 * Check if a message contains calendar-related intent
 */
export declare function isCalendarIntent(message: string): boolean;
/**
 * Get the user's Google OAuth token from Supabase session
 */
export declare function getUserGoogleToken(): Promise<string | null>;
