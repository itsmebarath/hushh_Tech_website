import { InvestorProfileInput } from "../../types/investorProfile";
interface InvestorProfileFormProps {
    onSubmit: (data: InvestorProfileInput) => Promise<void>;
    isLoading?: boolean;
    initialData?: {
        name: string;
        email: string;
    } | null;
}
export declare function InvestorProfileForm({ onSubmit, isLoading, initialData }: InvestorProfileFormProps): import("react/jsx-runtime").JSX.Element;
export {};
