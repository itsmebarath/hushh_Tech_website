/**
 * Hushh Studio - useVideoGeneration Hook
 * Custom hook for managing video generation state
 */
import { VideoSettings, GeneratedVideo, GenerationProgress } from '../types';
interface UseVideoGenerationReturn {
    isGenerating: boolean;
    progress: GenerationProgress;
    currentVideo: GeneratedVideo | null;
    gallery: GeneratedVideo[];
    settings: VideoSettings;
    error: string | null;
    generateFromText: (prompt: string) => Promise<void>;
    generateFromImage: (prompt: string, imageBase64: string) => Promise<void>;
    extendVideo: (video: GeneratedVideo, prompt: string) => Promise<void>;
    updateSettings: (settings: Partial<VideoSettings>) => void;
    removeFromGallery: (id: string) => void;
    clearError: () => void;
    reset: () => void;
}
export declare const useVideoGeneration: () => UseVideoGenerationReturn;
export default useVideoGeneration;
