/**
 * Supabase Chat Data Source
 * Handles all Supabase operations for chats
 */
import { SupabaseClient } from '@supabase/supabase-js';
import { ChatDTO } from '../models/ChatDTO';
export declare class SupabaseChatDataSource {
    private supabase;
    constructor(supabase: SupabaseClient);
    getAll(userId: string, limit?: number): Promise<ChatDTO[]>;
    getById(chatId: string): Promise<ChatDTO | null>;
    create(userId: string, title?: string): Promise<ChatDTO>;
    updateTitle(chatId: string, title: string): Promise<ChatDTO | null>;
    delete(chatId: string): Promise<boolean>;
}
