import React from 'react';
export interface KYCResult {
    status: 'PASS' | 'REVIEW' | 'FAIL' | 'NOT_FOUND' | 'EXPIRED' | 'CONSENT_DENIED';
    riskBand?: 'LOW' | 'MEDIUM' | 'HIGH';
    riskScore?: number;
    verifiedAttributes?: string[];
    verificationLevel?: string;
    attestationAge?: number;
    missingRequirements?: string[];
    additionalInfo?: string;
    timestamp: string;
    providerName?: string;
}
interface KYCResultCardProps {
    result: KYCResult;
    bankName?: string;
}
declare const KYCResultCard: React.FC<KYCResultCardProps>;
export default KYCResultCard;
