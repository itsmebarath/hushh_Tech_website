/**
 * Location Service
 * Handles GPS-based and IP-based location detection.
 * Uses Permissions API to check geolocation state before requesting.
 * Falls back to IP geolocation when GPS is unavailable.
 */
import { LocationData, LocationCacheRecord, LocationCacheSource, Country, State, City, LocationDetectionResult, Coordinates, GeoPermissionState } from './types';
/**
 * LocationService - Centralized service for all location-related API calls.
 * Supports GPS detection with browser permission popup + IP-based fallback.
 */
export declare class LocationService {
    private abortController;
    private getDeviceTimezone;
    private normalizeDialCode;
    private getDialCodeForCountry;
    getDialCodeForIsoCountry(countryCode: string): string;
    private parseIsoSubdivisionCode;
    private toCacheSource;
    private createLocationCacheRecord;
    private buildLocationFromOnboardingRow;
    private buildCacheRecordFromOnboardingRow;
    readSharedLocationCache(userId: string): Promise<LocationCacheRecord | null>;
    writeSharedLocationCache(userId: string, record: LocationCacheRecord): Promise<void>;
    hasLocationChanged(previous: LocationCacheRecord | null, next: LocationCacheRecord): boolean;
    /** Cancel any pending requests */
    cancel(): void;
    /**
     * Check current geolocation permission state.
     * Returns: 'granted' | 'denied' | 'prompt' | 'unavailable'
     */
    checkPermissionState(): Promise<GeoPermissionState>;
    /**
     * Get current GPS coordinates from browser.
     * This triggers the browser's native permission popup.
     */
    getGpsCoordinates(options?: PositionOptions): Promise<Coordinates>;
    /**
     * Get location from IP address (fallback method).
     * Works everywhere - no permissions needed.
     */
    getLocationByIp(): Promise<LocationData>;
    /**
     * Call geocode API to convert GPS coordinates to address.
     * Uses Google Geocoding API via Supabase Edge Function.
     */
    geocodeCoordinates(coords: Coordinates): Promise<LocationData>;
    /**
     * Main location detection method.
     * Flow:
     * 1. Check permission state
     * 2. If GPS available → request GPS → geocode → return
     * 3. If GPS denied/unavailable → fall back to IP geolocation
     */
    detectLocation(): Promise<LocationDetectionResult>;
    /**
     * Fetch all countries for dropdown
     */
    fetchCountries(): Promise<Country[]>;
    /**
     * Fetch states for a specific country
     */
    fetchStates(countryCode: string): Promise<State[]>;
    /**
     * Fetch cities for a specific state in a country
     */
    fetchCities(countryCode: string, stateCode: string): Promise<City[]>;
    /**
     * Save GPS location data to onboarding_data table
     */
    saveLocationToOnboarding(userId: string, locationData: LocationData, source?: LocationCacheSource): Promise<LocationCacheRecord>;
    /**
     * Get cached GPS location data from onboarding_data
     */
    getCachedLocation(userId: string): Promise<LocationData | null>;
    refreshStep4Location(userId: string): Promise<{
        cached: LocationCacheRecord | null;
        fresh: LocationCacheRecord | null;
        changed: boolean;
    }>;
    /**
     * Check if location is already cached
     */
    hasLocationCached(userId: string): Promise<boolean>;
    /** Map country name to ISO code */
    mapCountryToIsoCode(countryName: string): string;
    /** Map ISO code to country name */
    mapIsoCodeToCountry(isoCode: string): string;
    /**
     * Find matching state in list (by code or name)
     */
    findMatchingState(states: State[], gpsState: string, gpsStateCode?: string): State | null;
    /**
     * Find matching city in list
     */
    findMatchingCity(cities: City[], gpsCity: string): City | null;
    /**
     * Parse formatted address into address lines
     */
    parseFormattedAddress(formattedAddress: string, locationData: LocationData): {
        line1: string;
        line2: string;
    };
    normalizeDetectedAddress(locationData: LocationData): import("./addressNormalization.js").NormalizedDetectedAddress;
}
export declare const locationService: LocationService;
export * from './types';
