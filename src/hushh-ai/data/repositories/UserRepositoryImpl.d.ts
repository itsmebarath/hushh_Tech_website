/**
 * User Repository Implementation
 * Implements IUserRepository using Supabase data source
 */
import { IUserRepository } from '../../domain/repositories';
import { User } from '../../domain/entities';
import { SupabaseUserDataSource } from '../datasources';
export declare class UserRepositoryImpl implements IUserRepository {
    private dataSource;
    constructor(dataSource: SupabaseUserDataSource);
    getCurrent(): Promise<User | null>;
    getOrCreate(): Promise<User | null>;
    updateProfile(userId: string, displayName?: string, avatarUrl?: string): Promise<User | null>;
    updateLastLogin(userId: string): Promise<void>;
    isAuthenticated(): Promise<boolean>;
}
