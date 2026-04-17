import { PreferenceSeedInput, UserPreferenceProfile } from "../../types/preferences";
export interface UserPreferencesRecord {
    preferences: UserPreferenceProfile;
    user_seed: PreferenceSeedInput | null;
}
export default function fetchPreferences(userId: string): Promise<UserPreferenceProfile | null>;
export declare function fetchPreferencesWithSeed(userId: string): Promise<UserPreferencesRecord | null>;
