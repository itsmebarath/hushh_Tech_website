import { InvestorProfile, InvestorProfileRecord } from "../../types/investorProfile";
interface InvestorProfileReviewProps {
    profile: InvestorProfileRecord;
    onConfirm: (updates: Partial<InvestorProfile>) => Promise<void>;
    isLoading?: boolean;
}
export declare function InvestorProfileReview({ profile, onConfirm, isLoading, }: InvestorProfileReviewProps): import("react/jsx-runtime").JSX.Element;
export {};
