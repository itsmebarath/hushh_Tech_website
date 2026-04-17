/**
 * Hushh Intelligence - Core Types
 * All TypeScript types for the Intelligence product
 */
export interface HushhUser {
    id: string;
    supabaseUserId: string;
    email: string;
    displayName: string | null;
    avatarUrl: string | null;
    createdAt: Date;
    lastLoginAt: Date;
    totalMessages: number;
    totalConversations: number;
    isActive: boolean;
}
export interface UserSession {
    user: HushhUser | null;
    isLoading: boolean;
    isAuthenticated: boolean;
}
export interface HushhConversation {
    id: string;
    userId: string;
    title: string;
    createdAt: Date;
    updatedAt: Date;
}
export interface ConversationWithMessages extends HushhConversation {
    messages: HushhMessage[];
}
export type MessageRole = 'user' | 'assistant';
export interface HushhMessage {
    id: string;
    conversationId: string;
    role: MessageRole;
    content: string;
    mediaUrls: string[];
    createdAt: Date;
}
export interface StreamingMessage {
    content: string;
    isComplete: boolean;
}
export interface MediaFile {
    id: string;
    fileName: string;
    fileType: string;
    fileSize: number;
    url: string;
    thumbnailUrl?: string;
    uploadedAt: Date;
}
export interface MediaUploadProgress {
    fileName: string;
    progress: number;
    status: 'pending' | 'uploading' | 'completed' | 'failed';
    error?: string;
}
export interface MediaLimits {
    dailyUploads: number;
    maxDailyUploads: number;
    remainingUploads: number;
    lastReset: Date;
}
export interface HushhAIRequest {
    message: string;
    conversationId?: string;
    mediaUrls?: string[];
    systemPrompt?: string;
}
export interface HushhAIResponse {
    content: string;
    conversationId: string;
    messageId: string;
}
export interface HushhAIStreamChunk {
    text: string;
    isComplete: boolean;
    error?: string;
}
export interface HushhAPIError {
    code: string;
    message: string;
    details?: Record<string, unknown>;
}
export interface ChatUIState {
    isTyping: boolean;
    isSending: boolean;
    isStreaming: boolean;
    error: string | null;
}
export interface SidebarState {
    isOpen: boolean;
    isLoading: boolean;
    conversations: HushhConversation[];
}
export declare const HUSHH_THEME: {
    readonly colors: {
        readonly background: "#FAF9F7";
        readonly backgroundSecondary: "#F5F4F2";
        readonly surface: "#FFFFFF";
        readonly surfaceHover: "#F7F6F4";
        readonly textPrimary: "#1A1A1A";
        readonly textSecondary: "#6B6B6B";
        readonly textMuted: "#9B9B9B";
        readonly userBubble: "#F1F0EE";
        readonly assistantBubble: "#FFFFFF";
        readonly accent: "#D97706";
        readonly accentHover: "#B45309";
        readonly border: "#E5E5E5";
        readonly borderLight: "#EBEBEB";
        readonly success: "#10B981";
        readonly error: "#EF4444";
        readonly warning: "#F59E0B";
    };
    readonly fonts: {
        readonly primary: "Manrope, system-ui, sans-serif";
        readonly mono: "ui-monospace, monospace";
    };
    readonly spacing: {
        readonly xs: "4px";
        readonly sm: "8px";
        readonly md: "16px";
        readonly lg: "24px";
        readonly xl: "32px";
    };
    readonly borderRadius: {
        readonly sm: "8px";
        readonly md: "12px";
        readonly lg: "16px";
        readonly full: "9999px";
    };
};
export declare const HUSHH_BRANDING: {
    readonly productName: "Hushh Intelligence";
    readonly aiName: "Hushh";
    readonly tagline: "Your Free AI Assistant";
    readonly messages: {
        readonly thinking: "Hushh is thinking...";
        readonly welcome: "Hi! I'm Hushh, your AI assistant. How can I help you today?";
        readonly error: "Hushh couldn't respond. Please try again.";
        readonly uploadLimit: "Daily upload limit reached. Try again tomorrow!";
    };
    readonly internal: {
        readonly modelName: "gemini-2.0-flash-001";
        readonly fallbackModel: "gemini-1.5-pro";
        readonly provider: "vertex-ai";
    };
};
export declare const HUSHH_LIMITS: {
    readonly media: {
        readonly maxDailyUploads: 20;
        readonly maxFileSizeMB: 10;
        readonly maxImageSizeMB: 10;
        readonly maxDocSizeMB: 20;
        readonly maxVideoSizeMB: 50;
        readonly maxVideoDurationSec: 120;
    };
    readonly conversation: {
        readonly maxHistoryMessages: 50;
        readonly maxMessageLength: 32000;
        readonly paginationLimit: 20;
    };
    readonly chat: {
        readonly isUnlimited: true;
    };
};
export declare const SUPPORTED_FILE_TYPES: {
    readonly images: readonly ["image/jpeg", "image/png", "image/webp", "image/gif", "image/heic", "image/bmp"];
    readonly documents: readonly ["application/pdf", "text/plain", "application/vnd.openxmlformats-officedocument.wordprocessingml.document", "application/msword"];
    readonly videos: readonly ["video/mp4", "video/webm", "video/quicktime"];
};
export declare function isImageFile(mimeType: string): boolean;
export declare function isDocumentFile(mimeType: string): boolean;
export declare function isVideoFile(mimeType: string): boolean;
export declare function isSupportedFile(mimeType: string): boolean;
