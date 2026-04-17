/**
 * Send Message Use Case
 * Sends a user message and gets AI response
 */
import { IMessageRepository, IAIRepository } from '../../repositories';
import { Message } from '../../entities';
export interface SendMessageResult {
    userMessage: Message;
    aiResponseStream: ReadableStream<Uint8Array>;
}
export declare class SendMessageUseCase {
    private messageRepository;
    private aiRepository;
    constructor(messageRepository: IMessageRepository, aiRepository: IAIRepository);
    execute(chatId: string, content: string, userId?: string, mediaUrls?: string[]): Promise<SendMessageResult>;
    cancel(): void;
}
