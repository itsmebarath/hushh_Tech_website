import enrichPreferences from "./enrichPreferences";
import fetchPreferences, { fetchPreferencesWithSeed } from "./fetchPreferences";
import savePreferencesToSupabase from "./savePreferences";
declare const preferencesService: {
    enrichPreferences: typeof enrichPreferences;
    fetchPreferences: typeof fetchPreferences;
    fetchPreferencesWithSeed: typeof fetchPreferencesWithSeed;
    savePreferencesToSupabase: typeof savePreferencesToSupabase;
};
export default preferencesService;
export { enrichPreferences, fetchPreferences, fetchPreferencesWithSeed, savePreferencesToSupabase };
