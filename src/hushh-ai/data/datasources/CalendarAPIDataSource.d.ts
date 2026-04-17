/**
 * Calendar API Data Source
 * Client to communicate with deployed Hushh Calendar API
 */
export interface CalendarEvent {
    id: string;
    summary: string;
    startTime: string;
    endTime: string;
    description?: string;
    location?: string;
    meetLink?: string;
    attendees?: string[];
}
export interface ParseResult {
    intent: 'create_event' | 'list_events' | 'delete_event' | 'update_event';
    confidence: number;
    params: {
        summary?: string;
        startTime?: string;
        endTime?: string;
        description?: string;
        attendees?: string[];
        timeMin?: string;
        timeMax?: string;
        eventId?: string;
    };
}
export declare class CalendarAPIDataSource {
    private apiUrl;
    private apiKey;
    /**
     * Parse natural language text into calendar intent
     */
    parseNaturalLanguage(text: string, userToken: string, timezone?: string): Promise<ParseResult>;
    /**
     * Create a calendar event
     */
    createEvent(eventData: {
        summary: string;
        startTime: string;
        endTime: string;
        description?: string;
        attendees?: string[];
        location?: string;
        createMeet?: boolean;
    }, userToken: string): Promise<CalendarEvent>;
    /**
     * List calendar events
     */
    listEvents(params: {
        timeMin?: string;
        timeMax?: string;
        maxResults?: number;
    }, userToken: string): Promise<CalendarEvent[]>;
    /**
     * Delete a calendar event
     */
    deleteEvent(eventId: string, userToken: string): Promise<void>;
}
export declare const calendarAPIDataSource: CalendarAPIDataSource;
