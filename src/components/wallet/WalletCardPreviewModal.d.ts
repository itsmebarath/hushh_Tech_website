import type { WalletPreviewModel } from "../../services/walletPass";
interface WalletCardPreviewModalProps {
    isOpen: boolean;
    onClose: () => void;
    preview: WalletPreviewModel | null;
    appleWalletSupported: boolean;
    appleWalletSupportMessage: string;
    onAddToAppleWallet?: () => void | Promise<void>;
    isApplePassLoading?: boolean;
    googleWalletAvailable: boolean;
    googleWalletSupportMessage: string;
    onAddToGoogleWallet?: () => void | Promise<void>;
    isGooglePassLoading?: boolean;
}
export default function WalletCardPreviewModal({ isOpen, onClose, preview, appleWalletSupported, appleWalletSupportMessage, onAddToAppleWallet, isApplePassLoading, googleWalletAvailable, googleWalletSupportMessage, onAddToGoogleWallet, isGooglePassLoading, }: WalletCardPreviewModalProps): import("react/jsx-runtime").JSX.Element;
export {};
