/**
 * User Entity
 * Pure business object with NO dependencies on React or Supabase
 */
export declare class User {
    readonly id: string;
    readonly supabaseUserId: string;
    readonly email: string;
    displayName: string | null;
    avatarUrl: string | null;
    readonly createdAt: Date;
    lastLoginAt: Date;
    totalMessages: number;
    totalChats: number;
    isActive: boolean;
    constructor(id: string, supabaseUserId: string, email: string, displayName: string | null, avatarUrl: string | null, createdAt: Date, lastLoginAt: Date, totalMessages?: number, totalChats?: number, isActive?: boolean);
    updateLastLogin(): User;
    updateProfile(displayName: string | null, avatarUrl: string | null): User;
    incrementMessageCount(): User;
    incrementChatCount(): User;
}
