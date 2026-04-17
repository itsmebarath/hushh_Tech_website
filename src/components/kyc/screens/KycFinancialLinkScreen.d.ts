import React from 'react';
import type { FinancialVerificationResult } from '../../../types/kyc';
export interface KycFinancialLinkScreenProps {
    userId: string;
    userEmail?: string;
    onContinue: (result: FinancialVerificationResult) => void;
    onSkip?: () => void;
    bankName?: string;
}
declare const KycFinancialLinkScreen: React.FC<KycFinancialLinkScreenProps>;
export default KycFinancialLinkScreen;
