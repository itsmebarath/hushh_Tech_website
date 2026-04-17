/**
 * Hushh Intelligence Service
 * Handles all Supabase operations for Intelligence product
 */
import type { HushhUser, HushhConversation, HushhMessage, MediaLimits } from '../core/types';
/**
 * Get or create Intelligence user from Supabase auth user
 */
export declare function getOrCreateIntelligenceUser(): Promise<HushhUser | null>;
/**
 * Get current Intelligence user
 */
export declare function getCurrentIntelligenceUser(): Promise<HushhUser | null>;
/**
 * Get all conversations for current user
 */
export declare function getConversations(): Promise<HushhConversation[]>;
/**
 * Create a new conversation
 */
export declare function createConversation(title?: string): Promise<HushhConversation | null>;
/**
 * Update conversation title
 */
export declare function updateConversationTitle(conversationId: string, title: string): Promise<boolean>;
/**
 * Delete a conversation
 */
export declare function deleteConversation(conversationId: string): Promise<boolean>;
/**
 * Get messages for a conversation
 */
export declare function getMessages(conversationId: string): Promise<HushhMessage[]>;
/**
 * Add a message to conversation
 */
export declare function addMessage(conversationId: string, role: 'user' | 'assistant', content: string, mediaUrls?: string[]): Promise<HushhMessage | null>;
/**
 * Get current media limits for user
 */
export declare function getMediaLimits(): Promise<MediaLimits | null>;
/**
 * Check if user can upload more media
 */
export declare function canUploadMedia(): Promise<boolean>;
/**
 * Increment upload count after successful upload
 */
export declare function incrementUploadCount(): Promise<boolean>;
/**
 * Subscribe to auth state changes
 */
export declare function onAuthStateChange(callback: (isAuthenticated: boolean) => void): () => void;
