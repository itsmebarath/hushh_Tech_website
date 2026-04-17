/**
 * Get Current User Use Case
 * Gets the currently authenticated user
 */
import { IUserRepository } from '../../repositories';
import { User } from '../../entities';
export declare class GetCurrentUserUseCase {
    private userRepository;
    constructor(userRepository: IUserRepository);
    execute(): Promise<User | null>;
}
