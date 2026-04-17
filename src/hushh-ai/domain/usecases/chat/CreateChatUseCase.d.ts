/**
 * Create Chat Use Case
 * Creates a new chat for a user
 */
import { IChatRepository } from '../../repositories';
import { Chat } from '../../entities';
export declare class CreateChatUseCase {
    private chatRepository;
    constructor(chatRepository: IChatRepository);
    execute(userId: string, title?: string): Promise<Chat>;
}
