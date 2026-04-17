/**
 * Chat Repository Implementation
 * Implements IChatRepository using Supabase data source
 */
import { IChatRepository } from '../../domain/repositories';
import { Chat } from '../../domain/entities';
import { SupabaseChatDataSource } from '../datasources';
export declare class ChatRepositoryImpl implements IChatRepository {
    private dataSource;
    constructor(dataSource: SupabaseChatDataSource);
    getAll(userId: string, limit?: number): Promise<Chat[]>;
    getById(chatId: string): Promise<Chat | null>;
    create(userId: string, title?: string): Promise<Chat>;
    updateTitle(chatId: string, title: string): Promise<Chat | null>;
    delete(chatId: string): Promise<boolean>;
    search(userId: string, query: string): Promise<Chat[]>;
}
