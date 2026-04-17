export interface AIMessage {
    role: 'user' | 'assistant';
    content: string;
}
export declare class VertexAIDataSource {
    private supabaseUrl;
    private supabaseKey;
    private abortController;
    constructor(supabaseUrl: string, supabaseKey: string);
    streamResponse(message: string, chatId: string, userId?: string, mediaUrls?: string[], history?: AIMessage[]): Promise<ReadableStream<Uint8Array>>;
    cancelStream(): void;
}
