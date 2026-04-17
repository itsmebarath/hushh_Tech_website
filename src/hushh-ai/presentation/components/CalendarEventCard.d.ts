import React from 'react';
interface CalendarEvent {
    id: string;
    summary: string;
    description?: string;
    startTime: string;
    endTime: string;
    location?: string;
    htmlLink?: string;
}
interface CalendarEventCardProps {
    event: CalendarEvent;
}
export declare const CalendarEventCard: React.FC<CalendarEventCardProps>;
export {};
