/**
 * Media Repository Implementation
 * Implements IMediaRepository using Supabase data source
 */
import { IMediaRepository, MediaLimits } from '../../domain/repositories';
import { SupabaseMediaDataSource } from '../datasources';
export declare class MediaRepositoryImpl implements IMediaRepository {
    private dataSource;
    constructor(dataSource: SupabaseMediaDataSource);
    upload(file: File, userId: string): Promise<string>;
    getLimits(userId: string): Promise<MediaLimits | null>;
    canUpload(userId: string): Promise<boolean>;
    incrementUploadCount(userId: string): Promise<boolean>;
    compressImage(file: File, maxSizeMB?: number): Promise<File>;
}
