/**
 * Get Chats Use Case
 * Retrieves all chats for a user
 */
import { IChatRepository } from '../../repositories';
import { Chat } from '../../entities';
export declare class GetChatsUseCase {
    private chatRepository;
    constructor(chatRepository: IChatRepository);
    execute(userId: string, limit?: number): Promise<Chat[]>;
}
