import type { AuthChangeEvent, Session } from '@supabase/supabase-js';
interface AuthSubscription {
    unsubscribe: () => void;
}
export interface SignNDASessionClient {
    auth: {
        getSession: () => Promise<{
            data: {
                session: Session | null;
            };
        }>;
        onAuthStateChange: (callback: (event: AuthChangeEvent, session: Session | null) => void) => {
            data: {
                subscription: AuthSubscription;
            };
        };
    };
}
export type SignNDASessionSource = 'current_session' | 'auth_event' | 'timeout' | 'missing_client' | 'error';
export interface SignNDASessionResolution {
    session: Session | null;
    source: SignNDASessionSource;
    error?: Error;
}
export declare const SIGN_NDA_SESSION_TIMEOUT_MS = 1500;
export declare function resolveSignNDASession(client: SignNDASessionClient | undefined, timeoutMs?: number): Promise<SignNDASessionResolution>;
export {};
