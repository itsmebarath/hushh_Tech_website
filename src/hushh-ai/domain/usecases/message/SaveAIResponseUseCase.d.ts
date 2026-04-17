/**
 * Save AI Response Use Case
 * Saves the AI response after streaming is complete
 */
import { IMessageRepository } from '../../repositories';
import { Message, MessageMetadata } from '../../entities';
export declare class SaveAIResponseUseCase {
    private messageRepository;
    constructor(messageRepository: IMessageRepository);
    execute(chatId: string, content: string, metadata?: MessageMetadata): Promise<Message>;
}
