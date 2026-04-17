import { type LocationData } from '../../../services/location';
export declare const CURRENT_STEP = 4;
export declare const TOTAL_STEPS = 9;
export declare const PROGRESS_PCT: number;
export declare const countries: string[];
export type LocationStatus = 'detecting' | 'success' | 'ip-success' | 'denied' | 'failed' | 'manual' | null;
export interface Step3AddressFields {
    addressLine1: string;
    addressLine2: string;
    zipCode: string;
    city: string;
    state: string;
    addressCountry: string;
}
export interface Step3FormState extends Step3AddressFields {
    citizenshipCountry: string;
    residenceCountry: string;
}
export interface Step3ManualOverrides {
    citizenshipCountry: boolean;
    residenceCountry: boolean;
    addressLine1: boolean;
    addressLine2: boolean;
    zipCode: boolean;
}
export declare const validateAddress: (v: string) => "Address is required" | "Address is too short" | "Address is too long" | "Please enter a valid address";
export declare const validateRequired: (v: string, label: string) => string;
export declare const validateZip: (v: string) => "ZIP / postal code is required" | "Enter a valid postal code";
export declare const getTrustedStep4Countries: (onboardingData: {
    citizenship_country?: string | null;
    residence_country?: string | null;
    current_step?: number | null;
} | null | undefined) => {
    citizenship_country?: string;
    residence_country?: string;
};
export declare const resolveDetectedLocationForStep3: (locationData: LocationData, availableCountries?: string[]) => {
    matchedCountry: string;
    normalizedAddress: {
        addressLine1: string;
        addressLine2: string;
        zipCode: string;
        city: string;
        state: string;
        addressCountry: string;
    };
    detectedLocation: string;
};
export declare const buildStep3AutofillPatch: ({ current, manual, locationData, availableCountries, }: {
    current: Step3FormState;
    manual: Step3ManualOverrides;
    locationData: LocationData;
    availableCountries?: string[];
}) => Partial<Step3FormState>;
export declare const buildStep3SavePayload: ({ citizenshipCountry, residenceCountry, addressLine1, addressLine2, zipCode, city, state, addressCountry, currentStep, }: Step3FormState & {
    currentStep?: number;
}) => Record<string, unknown>;
export declare function useCombinedLocationLogic(): {
    citizenshipCountry: string;
    residenceCountry: string;
    handleCitizenshipChange: (value: string) => void;
    handleResidenceChange: (value: string) => void;
    addressLine1: string;
    addressLine2: string;
    handleAddressLine2Change: (value: string) => void;
    zipCode: string;
    handleAddressLine1Change: (value: string) => void;
    handleZipCodeChange: (value: string) => void;
    handleBlur: (field: string, value: string) => void;
    touched: Record<string, boolean>;
    errors: Record<string, string>;
    error: string;
    isDetectingLocation: boolean;
    locationDetected: boolean;
    locationStatus: LocationStatus;
    detectedLocation: string;
    showPermissionHelp: boolean;
    setShowPermissionHelp: import("react").Dispatch<import("react").SetStateAction<boolean>>;
    showLocationModal: boolean;
    isAutoFilling: boolean;
    detectionStatus: string;
    handleAllowLocation: () => Promise<void>;
    handleDontAllow: () => void;
    handleRetry: () => Promise<void>;
    handleDetectClick: () => Promise<void>;
    handleContinue: () => Promise<void>;
    handleBack: () => void;
    handleSkip: () => Promise<void>;
    isLoading: boolean;
    isFooterVisible: boolean;
    canContinue: boolean;
    isErrorStatus: boolean;
    isSuccessStatus: boolean;
};
