interface DropdownItem {
    isoCode: string;
    name: string;
}
interface CityItem {
    name: string;
}
export interface LocationDropdownState {
    countries: DropdownItem[];
    states: DropdownItem[];
    cities: CityItem[];
    country: string;
    state: string;
    city: string;
    loadingStates: boolean;
    loadingCities: boolean;
    statesError: boolean;
    citiesError: boolean;
    retryStates: () => void;
    retryCities: () => void;
    setCountry: (code: string) => void;
    setState: (code: string) => void;
    setCity: (name: string) => void;
    applyDetectedLocation: (countryCode?: string, stateCode?: string, stateName?: string, cityName?: string) => void;
}
export declare function useLocationDropdowns(initialCountry?: string, initialState?: string, initialCity?: string): LocationDropdownState;
export {};
