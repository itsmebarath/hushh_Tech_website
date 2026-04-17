import React from 'react';
interface TrustGaugeProps {
    score: number;
    riskBand?: 'LOW' | 'MEDIUM' | 'HIGH' | 'CRITICAL';
    label?: string;
    showAnimation?: boolean;
}
/**
 * TrustGauge - Animated trust score visualization
 * Displays a progress bar with color gradient and risk band indicator
 */
export declare const TrustGauge: React.FC<TrustGaugeProps>;
/**
 * Mini trust indicator - Compact version for lists
 */
export declare const TrustIndicator: React.FC<{
    score: number;
}>;
/**
 * Animated score counter
 */
export declare const ScoreCounter: React.FC<{
    value: number;
    prefix?: string;
    suffix?: string;
    duration?: number;
}>;
export default TrustGauge;
