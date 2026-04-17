export default function emailLogin(email: string, password: string): Promise<"error" | "email_not_verified" | {
    user: import("@supabase/auth-js").User;
    session: import("@supabase/auth-js").Session;
    weakPassword?: import("@supabase/auth-js").WeakPassword;
}>;
