export interface RegistrationStatus {
    isRegistered: boolean;
    hasHushhId: boolean;
    userData?: any;
}
/**
 * Check if a user has completed their profile registration.
 * Uses the Supabase client from config instead of hardcoded URLs/keys.
 * @param email - User's email to check registration status
 * @returns RegistrationStatus object indicating registration state
 */
export default function checkRegistrationStatus(email: string): Promise<RegistrationStatus>;
