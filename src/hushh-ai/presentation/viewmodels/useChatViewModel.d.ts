import { Chat } from '../../domain/entities';
import { GetChatsUseCase, CreateChatUseCase, DeleteChatUseCase } from '../../domain/usecases';
export declare function useChatViewModel(getChatsUseCase: GetChatsUseCase, createChatUseCase: CreateChatUseCase, deleteChatUseCase: DeleteChatUseCase, userId: string | null): {
    chats: Chat[];
    currentChat: Chat;
    isLoading: boolean;
    error: string;
    loadChats: () => Promise<void>;
    createChat: (title?: string) => Promise<Chat>;
    deleteChat: (chatId: string) => Promise<void>;
    selectChat: (chat: Chat) => void;
};
