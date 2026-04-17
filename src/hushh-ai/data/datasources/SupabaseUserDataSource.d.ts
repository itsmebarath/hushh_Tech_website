/**
 * Supabase User Data Source
 * Handles all Supabase operations for users
 */
import { SupabaseClient } from '@supabase/supabase-js';
import { UserDTO } from '../models/UserDTO';
export declare class SupabaseUserDataSource {
    private supabase;
    constructor(supabase: SupabaseClient);
    getCurrent(): Promise<UserDTO | null>;
    getOrCreate(): Promise<UserDTO | null>;
    updateProfile(userId: string, displayName?: string, avatarUrl?: string): Promise<UserDTO | null>;
    updateLastLogin(userId: string): Promise<void>;
    isAuthenticated(): Promise<boolean>;
}
