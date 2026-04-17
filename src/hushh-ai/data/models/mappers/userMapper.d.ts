/**
 * User Mapper
 * Converts between DTO and Domain Entity
 */
import { User } from '../../../domain/entities';
import { UserDTO } from '../UserDTO';
export declare function toDomain(dto: UserDTO): User;
export declare function toDTO(user: User): UserDTO;
