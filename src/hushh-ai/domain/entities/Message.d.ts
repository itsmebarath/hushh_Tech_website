/**
 * Message Entity
 * Pure business object with NO dependencies on React or Supabase
 */
export type MessageRole = 'user' | 'assistant';
export interface CalendarEventMetadata {
    id: string;
    summary: string;
    startTime: string;
    endTime: string;
    description?: string;
    location?: string;
    meetLink?: string;
    attendees?: string[];
}
export interface MessageMetadata {
    calendarEvent?: CalendarEventMetadata;
    [key: string]: unknown;
}
export declare class Message {
    readonly id: string;
    readonly chatId: string;
    readonly role: MessageRole;
    readonly content: string;
    readonly mediaUrls: string[];
    readonly createdAt: Date;
    readonly metadata?: MessageMetadata;
    constructor(id: string, chatId: string, role: MessageRole, content: string, mediaUrls: string[], createdAt: Date, metadata?: MessageMetadata);
    isFromUser(): boolean;
    isFromAssistant(): boolean;
    hasMedia(): boolean;
    hasCalendarEvent(): boolean;
    getWordCount(): number;
    getCharacterCount(): number;
}
