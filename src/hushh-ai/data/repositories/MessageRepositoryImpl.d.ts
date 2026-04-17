/**
 * Message Repository Implementation
 * Implements IMessageRepository using Supabase data source
 */
import { IMessageRepository } from '../../domain/repositories';
import { Message, MessageRole, MessageMetadata } from '../../domain/entities';
import { SupabaseMessageDataSource } from '../datasources';
export declare class MessageRepositoryImpl implements IMessageRepository {
    private dataSource;
    constructor(dataSource: SupabaseMessageDataSource);
    getAll(chatId: string, limit?: number): Promise<Message[]>;
    getById(messageId: string): Promise<Message | null>;
    add(chatId: string, role: MessageRole, content: string, mediaUrls?: string[], metadata?: MessageMetadata): Promise<Message>;
    delete(messageId: string): Promise<boolean>;
    search(chatId: string, query: string): Promise<Message[]>;
}
