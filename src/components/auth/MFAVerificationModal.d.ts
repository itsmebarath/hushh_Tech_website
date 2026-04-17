import React from 'react';
interface MFAVerificationModalProps {
    isOpen: boolean;
    onClose: () => void;
    onSuccess?: (data: any) => void;
    factorId: string;
    challengeId?: string;
}
declare const MFAVerificationModal: React.FC<MFAVerificationModalProps>;
export default MFAVerificationModal;
