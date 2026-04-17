/**
 * kai - Financial Intelligence Agent
 * Audio utilities for PCM audio processing and playback
 */
export declare const PCM_SAMPLE_RATE = 16000;
export declare const AUDIO_PLAYBACK_RATE = 24000;
/**
 * Creates a PCM blob from input audio data
 * Converts Float32Array to 16-bit PCM format
 */
export declare const createPcmBlob: (inputData: Float32Array) => {
    mimeType: string;
    data: string;
};
/**
 * Converts base64 string to Uint8Array
 */
export declare const base64ToUint8Array: (base64: string) => Uint8Array;
/**
 * Decodes audio data from Uint8Array to AudioBuffer
 * Converts 16-bit PCM to Float32 format for Web Audio API
 */
export declare const decodeAudioData: (audioData: Uint8Array, audioContext: AudioContext, sampleRate: number) => Promise<AudioBuffer>;
/**
 * Concatenates multiple Uint8Arrays into a single array
 */
export declare const concatenateUint8Arrays: (arrays: Uint8Array[]) => Uint8Array;
/**
 * Creates an audio visualizer analyzer node
 */
export declare const createAudioAnalyzer: (audioContext: AudioContext) => AnalyserNode;
/**
 * Gets normalized volume from analyzer (0-1 range)
 */
export declare const getVolumeFromAnalyzer: (analyser: AnalyserNode) => number;
