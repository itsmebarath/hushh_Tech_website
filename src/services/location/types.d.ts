/**
 * Location Service Types
 * Centralized type definitions for location-related APIs
 */
export interface LocationData {
    country: string;
    countryCode: string;
    state: string;
    stateCode: string;
    city: string;
    postalCode: string;
    phoneDialCode: string;
    timezone: string;
    formattedAddress: string;
    latitude: number;
    longitude: number;
}
export type LocationCacheSource = 'gps' | 'ip';
export interface LocationCacheRecord {
    data: LocationData;
    source: LocationCacheSource;
    detectedAt: string;
    lastCheckedAt: string;
    signature: string;
}
export interface Country {
    isoCode: string;
    name: string;
}
export interface State {
    isoCode: string;
    name: string;
}
export interface City {
    name: string;
}
export interface GeocodeApiResponse {
    success: boolean;
    data?: LocationData;
    error?: string;
}
export interface LocationsApiResponse<T> {
    data?: T[];
    error?: string;
}
export type LocationLoadingState = 'idle' | 'detecting-gps' | 'loading-countries' | 'loading-states' | 'loading-cities' | 'ready' | 'error';
export interface LocationDetectionResult {
    source: 'cached' | 'detected' | 'ip-detected' | 'failed' | 'denied';
    data: LocationData | null;
    error?: string;
}
export type GeoPermissionState = 'granted' | 'denied' | 'prompt' | 'unavailable';
export interface Coordinates {
    latitude: number;
    longitude: number;
}
export declare const COUNTRY_CODE_TO_NAME: Record<string, string>;
export declare const COUNTRY_NAME_TO_CODE: Record<string, string>;
