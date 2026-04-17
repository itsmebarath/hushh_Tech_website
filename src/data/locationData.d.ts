/**
 * Location data service for country/state/city selection.
 *
 * Architecture:
 * - Countries: static list (no server call needed, instant)
 * - States & Cities: fetched from Supabase Edge Function `get-locations`
 *   which runs `country-state-city` server-side (safe from iOS stack overflow)
 * - All fetches are async → non-blocking, never on main thread
 * - Fallback to countriesnow.space API if edge function fails
 */
export interface CountryItem {
    isoCode: string;
    name: string;
}
export interface StateItem {
    isoCode: string;
    name: string;
}
export interface CityItem {
    name: string;
}
/** Get all countries (static, instant, no network call). */
export declare const getAllCountries: () => CountryItem[];
/** Get country name by ISO code. */
export declare const getCountryName: (isoCode: string) => string;
/**
 * Fetch states for a country from the Supabase Edge Function.
 * The edge function uses `country-state-city` server-side (safe from iOS issues).
 * Falls back to countriesnow.space API on failure.
 */
export declare const getStatesOfCountry: (countryIsoCode: string) => Promise<StateItem[]>;
/**
 * Fetch cities for a state from the Supabase Edge Function.
 * Falls back to countriesnow.space API on failure.
 */
export declare const getCitiesOfState: (countryIsoCode: string, stateCode: string) => Promise<CityItem[]>;
