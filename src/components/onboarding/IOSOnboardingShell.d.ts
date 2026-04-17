/**
 * IOSOnboardingShell - Reusable iOS-first wrapper for all onboarding steps
 *
 * Features:
 * - iOS Status Bar with time, battery, signal
 * - Large Title Navigation (collapsible on scroll)
 * - Progress indicator
 * - Swipe-back gesture support
 * - Safe area insets for notch/Dynamic Island
 * - SF Pro fonts and exact iOS colors
 */
import React from 'react';
interface IOSOnboardingShellProps {
    children: React.ReactNode;
    currentStep: number;
    totalSteps: number;
    title: string;
    subtitle?: string;
    onBack?: () => void;
    onSkip?: () => void;
    showProgress?: boolean;
}
export declare const IOSOnboardingShell: React.FC<IOSOnboardingShellProps>;
export default IOSOnboardingShell;
