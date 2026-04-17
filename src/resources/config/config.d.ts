import { SupabaseClient } from "@supabase/supabase-js";
export interface ClientEnvConfig {
    VITE_SUPABASE_URL?: string;
    VITE_SUPABASE_ANON_KEY?: string;
    VITE_SUPABASE_REDIRECT_URL?: string;
    VITE_PLAID_REDIRECT_URI?: string;
    VITE_NDA_GENERATION_URL?: string;
}
interface Config {
    SUPABASE_URL: string;
    SUPABASE_ANON_KEY: string;
    redirect_url: string;
    supabaseClient?: SupabaseClient;
}
export declare function buildClientConfig(env: ClientEnvConfig, fallbackRedirectUrl?: string): Omit<Config, "supabaseClient">;
export declare function createSupabaseClient(baseConfig: Pick<Config, "SUPABASE_URL" | "SUPABASE_ANON_KEY">): SupabaseClient | undefined;
declare const config: Config;
export default config;
