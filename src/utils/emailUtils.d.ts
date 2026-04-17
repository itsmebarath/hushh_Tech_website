/**
 * Email Utilities — Apple Private Relay Detection & Resolution
 *
 * Apple's "Hide My Email" gives users a relay address like:
 * abc123@privaterelay.appleid.com
 *
 * This utility helps detect and handle these relay addresses
 * across the app (NDA, notifications, profile, etc.)
 */
/** Check if an email is an Apple Private Relay address */
export declare const isPrivateRelayEmail: (email?: string | null) => boolean;
/**
 * Get the best available email for a Supabase user.
 * Priority: user_metadata.real_email > user.email
 */
export declare const getEffectiveEmail: (user: {
    email?: string | null;
    user_metadata?: Record<string, unknown>;
}) => string;
/**
 * Check if the email prefix is a garbage hash (Apple relay style).
 * Apple relay emails have random prefixes like "dxkf83jd" — not real names.
 */
export declare const isGarbageEmailPrefix: (email?: string | null) => boolean;
