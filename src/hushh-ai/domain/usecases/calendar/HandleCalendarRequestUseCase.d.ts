/**
 * Handle Calendar Request Use Case
 * Processes calendar-related natural language requests
 */
import { CalendarAPIDataSource, CalendarEvent } from '../../../data/datasources/CalendarAPIDataSource';
export declare class HandleCalendarRequestUseCase {
    private calendarDataSource;
    constructor(calendarDataSource: CalendarAPIDataSource);
    /**
     * Process a calendar request from the user
     */
    execute(message: string, userToken: string): Promise<{
        response: string;
        calendarEvent?: CalendarEvent;
    }>;
    private handleCreateEvent;
    private handleListEvents;
    private handleDeleteEvent;
}
