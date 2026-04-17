import React from "react";
interface NDADocumentModalProps {
    isOpen: boolean;
    onClose: () => void;
    ndaMetadata: any;
    session: any;
    onAccept: () => void;
}
declare const NDADocumentModal: React.FC<NDADocumentModalProps>;
export default NDADocumentModal;
