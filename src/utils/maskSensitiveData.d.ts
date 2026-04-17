/**
 * Utility functions to mask sensitive data for public profile viewing
 */
export declare function maskEmail(email: string): string;
export declare function maskPhone(phoneNumber: string, countryCode: string): string;
export interface MaskedProfileData {
    name: string;
    email: string;
    age: number;
    phone: string;
    organisation: string | null;
    slug: string;
}
export declare function maskProfileData(profileData: any): MaskedProfileData;
/**
 * Mask onboarding data for public profile display
 * Protects sensitive information - only visible in paid tier chat
 */
export declare function maskOnboardingField(fieldKey: string, value: any): string;
