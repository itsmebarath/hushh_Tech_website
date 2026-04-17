/**
 * Date formatter utility functions for consistent date formatting across the application
 */
/**
 * Returns a day number with appropriate ordinal suffix
 * @param day The day number
 * @returns The day with ordinal suffix (e.g., 1st, 2nd, 3rd, 4th)
 */
export declare const getDayWithOrdinal: (day: number) => string;
/**
 * Month names in abbreviated format
 */
export declare const MONTH_NAMES_SHORT: string[];
/**
 * Month names in full format
 */
export declare const MONTH_NAMES_FULL: string[];
/**
 * Parses a date string specifically in the DD/MM/YYYY format used by the API
 * Also handles ISO format YYYY-MM-DD for backward compatibility
 *
 * @param dateString The date string to parse (expected format: "15/4/2025" or "15/4/2025 00:50")
 * @returns A Date object or null if parsing fails
 */
export declare const parseDate: (dateString: string) => Date | null;
/**
 * Formats a date string to "7th Apr '25" format
 * @param dateString The date string to format (expected format: "15/4/2025")
 * @returns Formatted date string
 */
export declare const formatShortDate: (dateString: string) => string;
/**
 * Formats a date string to "7th April 2025" format
 * @param dateString The date string to format (expected format: "15/4/2025")
 * @returns Formatted date string
 */
export declare const formatLongDate: (dateString: string) => string;
