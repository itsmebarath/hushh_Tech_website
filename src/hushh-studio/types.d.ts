/**
 * Hushh Studio - FREE AI Video Generation
 * Type definitions for Google Veo 3.1 API integration
 */
export type GenerationMode = 'text-to-video' | 'image-to-video' | 'extend-video';
export type AspectRatio = '16:9' | '9:16';
export type Resolution = '720p' | '1080p' | '4k';
export type Duration = 4 | 6 | 8;
export type GenerationStatus = 'idle' | 'generating' | 'polling' | 'completed' | 'error';
export interface VideoSettings {
    aspectRatio: AspectRatio;
    resolution: Resolution;
    duration: Duration;
    enableNativeAudio: boolean;
}
export interface VideoGenerationRequest {
    mode: GenerationMode;
    prompt: string;
    settings: VideoSettings;
    sourceImage?: string;
    sourceVideo?: string;
}
export interface GeneratedVideo {
    id: string;
    videoUrl: string;
    thumbnailUrl?: string;
    prompt: string;
    settings: VideoSettings;
    createdAt: Date;
    duration: number;
}
export interface VeoOperationResponse {
    done: boolean;
    name?: string;
    response?: {
        generatedVideos: {
            video: {
                uri: string;
                mimeType: string;
            };
        }[];
    };
    error?: {
        code: number;
        message: string;
    };
}
export interface GenerationProgress {
    status: GenerationStatus;
    progress: number;
    message: string;
    pollingAttempts: number;
    estimatedTimeRemaining?: number;
}
export interface GalleryItem {
    id: string;
    video: GeneratedVideo;
    isSelected: boolean;
}
export interface StudioError {
    code: string;
    message: string;
    retryable: boolean;
}
export declare const DEFAULT_VIDEO_SETTINGS: VideoSettings;
export declare const MAX_POLLING_ATTEMPTS = 60;
export declare const SAMPLE_PROMPTS: string[];
