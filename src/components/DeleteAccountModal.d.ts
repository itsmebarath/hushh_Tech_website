interface DeleteAccountModalProps {
    isOpen: boolean;
    onClose: () => void;
    onAccountDeleted: () => void;
}
/**
 * Delete Account Modal — Glassmorphism design matching Step 4 location modal.
 * Playfair Display headings, black/white buttons, frosted overlay.
 * Backend logic is preserved — only UI is redesigned.
 */
declare const DeleteAccountModal: ({ isOpen, onClose, onAccountDeleted, }: DeleteAccountModalProps) => import("react/jsx-runtime").JSX.Element;
export default DeleteAccountModal;
