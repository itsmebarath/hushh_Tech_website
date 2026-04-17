/**
 * Message Bubble with Markdown and Code Highlighting
 * Renders AI responses with proper formatting
 */
import React from 'react';
interface MessageBubbleMarkdownProps {
    content: string;
    isUser: boolean;
    isStreaming?: boolean;
}
export declare const MessageBubbleMarkdown: React.MemoExoticComponent<({ content, isUser, isStreaming, }: MessageBubbleMarkdownProps) => import("react/jsx-runtime").JSX.Element>;
export {};
