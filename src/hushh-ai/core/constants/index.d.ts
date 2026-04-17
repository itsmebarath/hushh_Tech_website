/**
 * Hushh AI - Constants
 * Theme, Branding, and Limits
 */
export declare const THEME: {
    readonly colors: {
        readonly background: "#FAF9F7";
        readonly backgroundSecondary: "#F5F4F2";
        readonly surface: "#FFFFFF";
        readonly surfaceHover: "#F7F6F4";
        readonly textPrimary: "#1A1A1A";
        readonly textSecondary: "#6B6B6B";
        readonly textMuted: "#9B9B9B";
        readonly textPlaceholder: "#AAAAAA";
        readonly userBubble: "#F1F0EE";
        readonly assistantBubble: "#FFFFFF";
        readonly accent: "#D97706";
        readonly accentHover: "#B45309";
        readonly accentLight: "#FEF3C7";
        readonly border: "#E5E5E5";
        readonly borderLight: "#EBEBEB";
        readonly borderFocus: "#D97706";
        readonly success: "#10B981";
        readonly error: "#EF4444";
        readonly warning: "#F59E0B";
        readonly info: "#3B82F6";
        readonly sidebarBg: "#FAFAF9";
        readonly sidebarHover: "#F3F3F2";
        readonly sidebarActive: "#EDEDE9";
    };
    readonly fonts: {
        readonly primary: "'Manrope', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif";
        readonly mono: "'SF Mono', 'Monaco', 'Inconsolata', 'Roboto Mono', monospace";
    };
    readonly fontSizes: {
        readonly xs: "12px";
        readonly sm: "14px";
        readonly md: "16px";
        readonly lg: "18px";
        readonly xl: "20px";
        readonly xxl: "24px";
    };
    readonly fontWeights: {
        readonly normal: 400;
        readonly medium: 500;
        readonly semibold: 600;
        readonly bold: 700;
    };
    readonly spacing: {
        readonly xs: "4px";
        readonly sm: "8px";
        readonly md: "16px";
        readonly lg: "24px";
        readonly xl: "32px";
        readonly xxl: "48px";
    };
    readonly borderRadius: {
        readonly sm: "8px";
        readonly md: "12px";
        readonly lg: "16px";
        readonly xl: "20px";
        readonly full: "9999px";
    };
    readonly shadows: {
        readonly sm: "0 1px 2px rgba(0, 0, 0, 0.05)";
        readonly md: "0 4px 6px rgba(0, 0, 0, 0.05)";
        readonly lg: "0 10px 15px rgba(0, 0, 0, 0.1)";
    };
    readonly transitions: {
        readonly fast: "150ms ease";
        readonly normal: "200ms ease";
        readonly slow: "300ms ease";
    };
};
export declare const BRANDING: {
    readonly productName: "Hushh AI";
    readonly aiName: "Hushh";
    readonly tagline: "Your thoughtful AI companion";
    readonly messages: {
        readonly thinking: "Hushh is thinking...";
        readonly welcome: "Hello! I'm Hushh, here to help you. What would you like to chat about?";
        readonly error: "Hushh couldn't respond. Please try again.";
        readonly uploadLimit: "Daily upload limit reached. Try again tomorrow!";
        readonly newChat: "New Chat";
    };
    readonly placeholders: {
        readonly input: "Message Hushh...";
        readonly searchChats: "Search chats...";
    };
    readonly internal: {
        readonly modelName: "gemini-2.0-flash-001";
        readonly fallbackModel: "gemini-1.5-pro";
        readonly provider: "vertex-ai";
        readonly gcpProject: "hushone-app";
        readonly gcpLocation: "us-central1";
    };
};
export declare const LIMITS: {
    readonly media: {
        readonly maxDailyUploads: 20;
        readonly maxFileSizeMB: 10;
        readonly maxImageSizeMB: 10;
        readonly maxDocSizeMB: 20;
        readonly maxVideoSizeMB: 50;
        readonly maxVideoDurationSec: 120;
    };
    readonly chat: {
        readonly maxHistoryMessages: 50;
        readonly maxMessageLength: 32000;
        readonly paginationLimit: 20;
        readonly isUnlimited: true;
    };
    readonly sidebar: {
        readonly maxChatsToShow: 100;
    };
};
export declare const SUPPORTED_FILES: {
    readonly images: readonly ["image/jpeg", "image/png", "image/webp", "image/gif", "image/heic"];
    readonly documents: readonly ["application/pdf", "text/plain", "application/vnd.openxmlformats-officedocument.wordprocessingml.document"];
    readonly videos: readonly ["video/mp4", "video/webm", "video/quicktime"];
};
export declare const API: {
    readonly chat: "/functions/v1/hushh-ai-chat";
    readonly upload: "/storage/v1/object/hushh-ai-media";
};
export declare const ROUTES: {
    readonly home: "/hushh-ai";
    readonly chat: "/hushh-ai/chat";
    readonly chatById: (id: string) => string;
    readonly login: "/login";
};
