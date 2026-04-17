import { Message } from '../../domain/entities';
import { GetMessagesUseCase, SendMessageUseCase, SaveAIResponseUseCase, UploadMediaUseCase, HandleCalendarRequestUseCase } from '../../domain/usecases';
export interface MessageState {
    isTyping: boolean;
    isSending: boolean;
    isStreaming: boolean;
    streamingContent: string;
    error: string | null;
}
export declare function useMessageViewModel(getMessagesUseCase: GetMessagesUseCase, sendMessageUseCase: SendMessageUseCase, saveAIResponseUseCase: SaveAIResponseUseCase, uploadMediaUseCase: UploadMediaUseCase, handleCalendarRequestUseCase: HandleCalendarRequestUseCase, userId: string | null): {
    messages: Message[];
    state: MessageState;
    loadMessages: (chatId: string) => Promise<void>;
    sendMessage: (chatId: string, content: string, mediaFiles?: File[]) => Promise<void>;
    cancelStream: () => void;
};
