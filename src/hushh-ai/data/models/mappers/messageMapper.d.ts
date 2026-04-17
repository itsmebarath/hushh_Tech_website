/**
 * Message Mapper
 * Converts between DTO and Domain Entity
 */
import { Message } from '../../../domain/entities';
import { MessageDTO } from '../MessageDTO';
export declare function toDomain(dto: MessageDTO): Message;
export declare function toDTO(message: Message): MessageDTO;
