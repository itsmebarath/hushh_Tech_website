/**
 * Get Messages Use Case
 * Retrieves all messages for a chat
 */
import { IMessageRepository } from '../../repositories';
import { Message } from '../../entities';
export declare class GetMessagesUseCase {
    private messageRepository;
    constructor(messageRepository: IMessageRepository);
    execute(chatId: string, limit?: number): Promise<Message[]>;
}
