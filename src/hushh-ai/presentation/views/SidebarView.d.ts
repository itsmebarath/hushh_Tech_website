/**
 * Sidebar View Component - MOBILE FIRST
 * Displays chat list and controls
 * Overlay on mobile, side panel on desktop
 */
import React from 'react';
import { Chat } from '../../domain/entities';
import { MediaLimits } from '../../domain/repositories';
interface SidebarViewProps {
    isOpen: boolean;
    isMobile: boolean;
    chats: Chat[];
    currentChatId: string | null;
    mediaLimits: MediaLimits | null;
    onToggle: () => void;
    onNewChat: () => void;
    onSelectChat: (chat: Chat) => void;
    onDeleteChat: (chatId: string, e: React.MouseEvent) => void;
}
export declare const SidebarView: React.FC<SidebarViewProps>;
export {};
