import { type LocationData } from '../location';
export interface OnboardingPrefillValues {
    citizenship_country: string;
    residence_country: string;
    phone_number: string;
    phone_country_code: string;
    legal_first_name: string;
    legal_last_name: string;
    address_line_1: string;
    address_line_2: string;
    city: string;
    state: string;
    zip_code: string;
    address_country: string;
}
export interface OnboardingPrefillSources {
    onboardingData?: Partial<OnboardingPrefillValues> | null;
    plaidIdentity?: unknown;
    oauthMetadata?: Record<string, unknown> | null;
    enrichedProfile?: Partial<OnboardingPrefillValues> | null;
    locationData?: Partial<LocationData> | null;
}
export interface ResolvedOnboardingPrefill {
    values: Partial<OnboardingPrefillValues>;
    sources: Partial<Record<keyof OnboardingPrefillValues, string>>;
    completeness: number;
}
export declare const resolveOnboardingPrefill: (sources: OnboardingPrefillSources) => ResolvedOnboardingPrefill;
export declare const deriveBankCountry: ({ addressCountry, residenceCountry, savedBankCountry, }: {
    addressCountry?: string | null;
    residenceCountry?: string | null;
    savedBankCountry?: string | null;
}) => string;
