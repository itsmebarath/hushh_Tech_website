/**
 * Delete Chat Use Case
 * Deletes a chat
 */
import { IChatRepository } from '../../repositories';
export declare class DeleteChatUseCase {
    private chatRepository;
    constructor(chatRepository: IChatRepository);
    execute(chatId: string): Promise<boolean>;
}
