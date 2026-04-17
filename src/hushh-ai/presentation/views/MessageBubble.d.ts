/**
 * Message Bubble Component
 * Displays a single message (user or assistant)
 */
import React from 'react';
import { Message } from '../../domain/entities';
interface MessageBubbleProps {
    message: Message;
    isStreaming?: boolean;
}
export declare const MessageBubble: React.MemoExoticComponent<({ message, isStreaming }: MessageBubbleProps) => import("react/jsx-runtime").JSX.Element>;
export {};
