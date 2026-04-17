import { PreferenceSeedInput, UserPreferenceProfile } from "../../types/preferences";
export interface SavePreferencesResult {
    success: boolean;
    error?: string;
}
export default function savePreferencesToSupabase(userId: string, preferences: UserPreferenceProfile, seed?: PreferenceSeedInput): Promise<SavePreferencesResult>;
