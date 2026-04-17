export type VerificationResult = 'verified' | 'processing' | 'requires_input' | 'failed' | 'loading';
export declare function useVerifyCompleteLogic(): {
    result: VerificationResult;
    pollingCount: number;
    handleContinue: () => void;
    handleRetry: () => void;
};
