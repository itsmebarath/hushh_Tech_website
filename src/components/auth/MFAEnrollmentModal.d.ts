import React from 'react';
interface MFAEnrollmentModalProps {
    isOpen: boolean;
    onClose: () => void;
    onSuccess?: (data: any) => void;
}
declare const MFAEnrollmentModal: React.FC<MFAEnrollmentModalProps>;
export default MFAEnrollmentModal;
