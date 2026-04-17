import type { Session, SupabaseClient, User } from "@supabase/supabase-js";
export type AuthSessionStatus = "booting" | "authenticated" | "anonymous" | "invalidated";
export type AuthSessionReason = "signed_out" | "expired" | "deleted" | "invalid_session";
export type OAuthProvider = "google" | "apple";
export type OAuthStartFailureReason = "missing_client" | "unsupported_host" | "provider_error" | "missing_authorize_url";
export type OAuthStartResult = {
    ok: true;
    provider: OAuthProvider;
    redirectTo: string;
} | {
    ok: false;
    provider: OAuthProvider;
    reason: OAuthStartFailureReason;
    message: string;
    redirectTo?: string;
};
export interface AuthSessionSnapshot {
    status: AuthSessionStatus;
    session: Session | null;
    user: User | null;
    reason?: AuthSessionReason;
}
export interface AuthBroadcastEvent {
    at: number;
    reason: AuthSessionReason;
}
export declare const AUTH_EVENT_STORAGE_KEY = "hushh_auth_event";
export declare function clearLegacyAuthStorage(): void;
export declare function buildOAuthRedirectTo(provider: OAuthProvider, search?: string, callbackUrl?: string): {
    redirectTo: string;
    queryParams: {
        access_type: string;
        prompt: string;
    };
    scopes?: undefined;
} | {
    redirectTo: string;
    scopes: string;
    queryParams?: undefined;
};
export declare function startUnifiedOAuth(provider: OAuthProvider, client?: SupabaseClient | undefined): Promise<OAuthStartResult>;
export declare function getAuthInvalidationReason(error?: {
    message?: string;
    status?: number;
} | null): AuthSessionReason;
export declare function validateSessionCandidate(client: SupabaseClient | undefined, session: Session | null): Promise<AuthSessionSnapshot>;
/**
 * Soft revalidation — reads session from localStorage only, no network call.
 * Used for focus/visibility events where we just need to confirm the session
 * still exists locally. Supabase's autoRefreshToken handles token renewal
 * automatically in the background.
 */
export declare function getLocalSession(client?: SupabaseClient | undefined): Promise<AuthSessionSnapshot>;
/**
 * Full revalidation — reads session from localStorage AND validates with
 * a server-side getUser() call. Used for initial boot and auth state changes.
 */
export declare function getValidatedSession(client?: SupabaseClient | undefined): Promise<AuthSessionSnapshot>;
export declare function getAuthenticatedSession(client?: SupabaseClient | undefined, errorMessage?: string): Promise<Session>;
export declare function clearSupabaseSession(client?: SupabaseClient | undefined): Promise<void>;
export declare function broadcastAuthEvent(reason: AuthSessionReason): void;
export declare function parseAuthBroadcastEvent(rawValue: string | null): AuthBroadcastEvent | null;
