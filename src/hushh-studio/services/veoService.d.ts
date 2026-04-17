/**
 * Hushh Studio - Veo 3.1 API Service
 * Handles video generation using Google's Veo 3.1 model via Vertex AI
 *
 * Uses Supabase Edge Function proxy for GCP paid billing access
 */
import { VideoSettings, GeneratedVideo, GenerationProgress } from '../types';
/**
 * VeoService - Handles all Veo 3.1 API operations via Edge Function
 */
export declare class VeoService {
    private isInitialized;
    constructor();
    /**
     * Check if service is properly initialized
     */
    isReady(): boolean;
    /**
     * Call the Veo Edge Function
     */
    private callVeoApi;
    /**
     * Generate video from text prompt
     */
    generateVideoFromText(prompt: string, settings: VideoSettings, onProgress: (progress: GenerationProgress) => void): Promise<GeneratedVideo>;
    /**
     * Generate video from image (Image-to-Video)
     * Note: Image upload requires additional implementation
     */
    generateVideoFromImage(prompt: string, imageBase64: string, settings: VideoSettings, onProgress: (progress: GenerationProgress) => void): Promise<GeneratedVideo>;
    /**
     * Extend an existing video by 7 seconds
     */
    extendVideo(videoUrl: string, prompt: string, settings: VideoSettings, onProgress: (progress: GenerationProgress) => void): Promise<GeneratedVideo>;
    /**
     * Cancel an ongoing operation (if supported)
     */
    cancelOperation(operationName: string): Promise<void>;
}
export declare const getVeoService: () => VeoService;
export default VeoService;
