import "react-phone-input-2/lib/style.css";
interface NDARequestModalProps {
    session: any;
    onSubmit: (result: string) => void;
    isOpen?: boolean;
    onClose?: () => void;
}
declare const InvestorProfilePage: React.FC<NDARequestModalProps>;
export default InvestorProfilePage;
