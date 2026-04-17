import { type FinancialDataResponse, type ProductFetchStatus } from './plaidService';
export interface PlaidLinkState {
    step: 'idle' | 'creating_token' | 'ready' | 'linking' | 'exchanging' | 'fetching' | 'done' | 'error';
    linkToken: string | null;
    error: string | null;
    institution: {
        name: string;
        id: string;
    } | null;
    balanceStatus: ProductFetchStatus;
    assetsStatus: ProductFetchStatus;
    investmentsStatus: ProductFetchStatus;
    financialData: FinancialDataResponse | null;
    canProceed: boolean;
    productsAvailable: number;
}
export interface UsePlaidLinkReturn extends PlaidLinkState {
    openPlaidLink: () => void;
    retry: () => void;
    isReady: boolean;
    open: () => void;
}
export declare const usePlaidLinkHook: (userId: string, userEmail?: string) => UsePlaidLinkReturn;
export default usePlaidLinkHook;
