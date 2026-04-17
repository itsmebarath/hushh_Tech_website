/**
 * AI Repository Implementation
 * Implements IAIRepository using Vertex AI data source
 */
import { IAIRepository, AIMessage } from '../../domain/repositories';
import { VertexAIDataSource } from '../datasources';
export declare class AIRepositoryImpl implements IAIRepository {
    private dataSource;
    constructor(dataSource: VertexAIDataSource);
    streamResponse(message: string, chatId: string, userId?: string, mediaUrls?: string[], history?: AIMessage[]): Promise<ReadableStream<Uint8Array>>;
    cancelStream(): void;
}
