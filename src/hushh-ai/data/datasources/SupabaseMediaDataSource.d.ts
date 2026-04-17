/**
 * Supabase Media Data Source
 * Handles file uploads and media limits
 */
import { SupabaseClient } from '@supabase/supabase-js';
export interface MediaLimitsDTO {
    user_id: string;
    daily_uploads: number;
    last_reset: string;
}
export declare class SupabaseMediaDataSource {
    private supabase;
    constructor(supabase: SupabaseClient);
    upload(file: File, userId: string): Promise<string>;
    getLimits(userId: string): Promise<MediaLimitsDTO | null>;
    incrementUploadCount(userId: string): Promise<boolean>;
    compressImage(file: File, maxSizeMB?: number): Promise<File>;
}
