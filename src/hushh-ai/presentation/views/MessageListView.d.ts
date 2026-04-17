/**
 * Message List View Component - MOBILE FIRST
 * Displays the list of messages in a chat
 * Optimized for mobile with better padding and spacing
 */
import React from 'react';
import { Message } from '../../domain/entities';
interface MessageListViewProps {
    messages: Message[];
    streamingContent: string;
    isStreaming: boolean;
    isSending: boolean;
    error: string | null;
    currentChatId: string | null;
}
export declare const MessageListView: React.FC<MessageListViewProps>;
export {};
