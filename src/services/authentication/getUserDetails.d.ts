/**
 * Get the current user's session details using the Supabase client.
 * Uses supabase.auth.getSession() instead of hardcoded localStorage keys
 * to ensure compatibility regardless of which Supabase project is configured.
 */
export default function getUserDetails(setUserDetails: Function | null): Promise<{
    data: any;
}>;
