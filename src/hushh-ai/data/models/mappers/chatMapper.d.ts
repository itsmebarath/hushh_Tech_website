/**
 * Chat Mapper
 * Converts between DTO and Domain Entity
 */
import { Chat } from '../../../domain/entities';
import { ChatDTO } from '../ChatDTO';
export declare function toDomain(dto: ChatDTO): Chat;
export declare function toDTO(chat: Chat): ChatDTO;
