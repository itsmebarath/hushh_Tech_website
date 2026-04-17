import { GetChatsUseCase, CreateChatUseCase, DeleteChatUseCase, GetMessagesUseCase, SendMessageUseCase, SaveAIResponseUseCase, GetCurrentUserUseCase, UploadMediaUseCase, HandleCalendarRequestUseCase } from '../domain/usecases';
export declare class HushhAIContainer {
    private static instance;
    private supabase;
    private chatDataSource;
    private messageDataSource;
    private userDataSource;
    private mediaDataSource;
    private aiDataSource;
    private calendarDataSource;
    private chatRepository;
    private messageRepository;
    private userRepository;
    private mediaRepository;
    private aiRepository;
    getChatsUseCase: GetChatsUseCase;
    createChatUseCase: CreateChatUseCase;
    deleteChatUseCase: DeleteChatUseCase;
    getMessagesUseCase: GetMessagesUseCase;
    sendMessageUseCase: SendMessageUseCase;
    saveAIResponseUseCase: SaveAIResponseUseCase;
    getCurrentUserUseCase: GetCurrentUserUseCase;
    uploadMediaUseCase: UploadMediaUseCase;
    handleCalendarRequestUseCase: HandleCalendarRequestUseCase;
    private constructor();
    static getInstance(): HushhAIContainer;
    isAuthenticated(): Promise<boolean>;
    getMediaLimits(userId: string): Promise<import("../domain/repositories").MediaLimits>;
}
