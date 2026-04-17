interface NDARequestModalProps {
    isOpen: boolean;
    onClose: () => void;
    session: any;
    onSubmit: (result: string) => void;
}
declare const NDARequestModal: React.FC<NDARequestModalProps>;
export default NDARequestModal;
