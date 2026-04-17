interface ChatPaymentModalProps {
    isOpen: boolean;
    onClose: () => void;
    onPayment: () => void;
    isProcessing?: boolean;
}
export declare function ChatPaymentModal({ isOpen, onClose, onPayment, isProcessing }: ChatPaymentModalProps): import("react/jsx-runtime").JSX.Element;
export {};
