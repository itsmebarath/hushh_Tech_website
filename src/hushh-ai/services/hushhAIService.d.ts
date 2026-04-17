/**
 * Hushh AI Service
 * All database operations for Hushh AI
 */
import type { HushhAIUser, HushhChat, HushhMessage, MediaLimits, MessageMetadata } from '../core/types';
/**
 * Get or create Hushh AI user
 */
export declare function getOrCreateUser(): Promise<HushhAIUser | null>;
/**
 * Get current user
 */
export declare function getCurrentUser(): Promise<HushhAIUser | null>;
/**
 * Get all chats for current user
 */
export declare function getChats(): Promise<HushhChat[]>;
/**
 * Get single chat by ID
 */
export declare function getChatById(chatId: string): Promise<HushhChat | null>;
/**
 * Create new chat
 */
export declare function createChat(title?: string): Promise<HushhChat | null>;
/**
 * Update chat title
 */
export declare function updateChatTitle(chatId: string, title: string): Promise<boolean>;
/**
 * Delete chat
 */
export declare function deleteChat(chatId: string): Promise<boolean>;
/**
 * Get messages for a chat
 */
export declare function getMessages(chatId: string): Promise<HushhMessage[]>;
/**
 * Add message to chat
 */
export declare function addMessage(chatId: string, role: 'user' | 'assistant', content: string, mediaUrls?: string[], metadata?: MessageMetadata): Promise<HushhMessage | null>;
/**
 * Get media limits for current user
 */
export declare function getMediaLimits(): Promise<MediaLimits | null>;
/**
 * Check if user can upload more media
 */
export declare function canUploadMedia(): Promise<boolean>;
/**
 * Increment upload count
 */
export declare function incrementUploadCount(): Promise<boolean>;
/**
 * Upload media file
 */
export declare function uploadMedia(file: File): Promise<string | null>;
/**
 * Check if user is authenticated
 */
export declare function isAuthenticated(): Promise<boolean>;
/**
 * Subscribe to auth changes
 */
export declare function onAuthChange(callback: (isLoggedIn: boolean) => void): () => void;
/**
 * Sign out current user
 */
export declare function signOut(): Promise<boolean>;
/**
 * Get user email and avatar
 */
export declare function getUserProfile(): Promise<{
    email: string;
    displayName: string | null;
    avatarUrl: string | null;
} | null>;
