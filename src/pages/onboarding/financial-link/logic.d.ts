import { formatCurrency } from '../../../services/plaid/plaidService';
export { formatCurrency };
export declare const useFinancialLinkLogic: () => {
    userId: string;
    userEmail: string;
    isReady: boolean;
    plaidStep: "error" | "done" | "idle" | "creating_token" | "ready" | "linking" | "exchanging" | "fetching";
    institution: {
        name: string;
        id: string;
    };
    isDone: boolean;
    canProceed: boolean;
    isProcessing: boolean;
    isButtonDisabled: boolean;
    buttonText: string;
    error: string;
    verificationRows: {
        icon: string;
        title: string;
        subtitle: string;
        status: import("../../../services/plaid/plaidService").ProductFetchStatus;
    }[];
    allAccounts: any;
    accountGroups: Record<string, any[]>;
    totalBalance: any;
    identityInfo: {
        names: any;
        emails: unknown[];
        phones: unknown[];
        addresses: any;
    };
    investmentHoldings: any;
    handleButtonClick: () => Promise<void>;
    handleSkip: () => Promise<void>;
    openPlaidLink: () => void;
    retry: () => void;
};
