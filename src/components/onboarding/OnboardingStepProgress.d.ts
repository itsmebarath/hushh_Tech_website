export declare function OnboardingStepProgress({ currentStep, totalSteps, heading, displayStep, visibleSteps, }: OnboardingStepProgressProps): import("react/jsx-runtime").JSX.Element;
interface OnboardingStepProgressProps {
    currentStep: number;
    totalSteps?: number;
    heading?: string;
    displayStep?: number;
    visibleSteps?: number[] | number;
}
export {};
