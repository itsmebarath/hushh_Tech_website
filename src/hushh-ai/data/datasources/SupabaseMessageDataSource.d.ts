/**
 * Supabase Message Data Source
 * Handles all Supabase operations for messages
 */
import { SupabaseClient } from '@supabase/supabase-js';
import { MessageDTO } from '../models/MessageDTO';
export declare class SupabaseMessageDataSource {
    private supabase;
    constructor(supabase: SupabaseClient);
    getAll(chatId: string, limit?: number): Promise<MessageDTO[]>;
    getById(messageId: string): Promise<MessageDTO | null>;
    add(chatId: string, role: 'user' | 'assistant', content: string, mediaUrls?: string[], metadata?: Record<string, unknown>): Promise<MessageDTO>;
    delete(messageId: string): Promise<boolean>;
}
