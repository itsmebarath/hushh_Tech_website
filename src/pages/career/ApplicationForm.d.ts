import 'react-phone-input-2/lib/style.css';
interface ApplicationFormProps {
    jobTitle: string;
    jobLocation: string;
    onClose: () => void;
}
declare const ApplicationForm: ({ jobTitle, jobLocation, onClose }: ApplicationFormProps) => import("react/jsx-runtime").JSX.Element;
export default ApplicationForm;
