import React from "react";
import { type AuthSessionSnapshot, type OAuthProvider, type OAuthStartResult } from "./session";
interface AuthSessionContextValue extends AuthSessionSnapshot {
    startOAuth: (provider: OAuthProvider) => Promise<OAuthStartResult>;
    signOut: () => Promise<void>;
    revalidateSession: () => Promise<AuthSessionSnapshot>;
    handleAccountDeleted: () => Promise<void>;
}
export declare const AuthSessionProvider: React.FC<{
    children: React.ReactNode;
}>;
export declare function useAuthSession(): AuthSessionContextValue;
export {};
