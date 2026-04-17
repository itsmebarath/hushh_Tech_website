/**
 * Chat Entity
 * Pure business object with NO dependencies on React or Supabase
 */
export declare class Chat {
    readonly id: string;
    readonly userId: string;
    title: string;
    readonly createdAt: Date;
    updatedAt: Date;
    messageCount: number;
    constructor(id: string, userId: string, title: string, createdAt: Date, updatedAt: Date, messageCount?: number);
    updateTitle(newTitle: string): Chat;
    incrementMessageCount(): Chat;
    isOwnedBy(userId: string): boolean;
}
