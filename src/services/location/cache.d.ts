import type { LocationCacheRecord, LocationData } from './types';
export declare const getLocationCacheKey: (userId: string) => string;
export declare const buildLocationSignature: (location: Partial<LocationData>) => string;
export declare const readLocationCache: (userId: string) => Promise<LocationCacheRecord | null>;
export declare const writeLocationCache: (userId: string, record: LocationCacheRecord) => Promise<void>;
