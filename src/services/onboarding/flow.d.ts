export declare const FINANCIAL_LINK_ROUTE: "/onboarding/financial-link";
export type FinancialLinkStatus = 'pending' | 'completed' | 'skipped';
declare const TOTAL_VISIBLE_ONBOARDING_STEPS = 9;
declare const CANONICAL_STEP_ROUTE_BY_DISPLAY_STEP: {
    readonly 1: "/onboarding/step-1";
    readonly 2: "/onboarding/step-2";
    readonly 3: "/onboarding/step-3";
    readonly 4: "/onboarding/step-4";
    readonly 5: "/onboarding/step-5";
    readonly 6: "/onboarding/step-6";
    readonly 7: "/onboarding/step-7";
    readonly 8: "/onboarding/step-8";
    readonly 9: "/onboarding/step-9";
};
export type CanonicalOnboardingRoute = (typeof CANONICAL_STEP_ROUTE_BY_DISPLAY_STEP)[keyof typeof CANONICAL_STEP_ROUTE_BY_DISPLAY_STEP];
export type CanonicalIncompleteOnboardingRoute = typeof FINANCIAL_LINK_ROUTE | CanonicalOnboardingRoute;
export declare const CANONICAL_ONBOARDING_ROUTES: CanonicalOnboardingRoute[];
export declare const getCanonicalOnboardingRoute: (currentStep: number) => CanonicalOnboardingRoute;
export declare const normalizeFinancialLinkStatus: (value: unknown, fallback?: FinancialLinkStatus) => FinancialLinkStatus;
export declare const resolveFinancialLinkStatus: (onboardingStatus: unknown, financialDataStatus?: unknown) => FinancialLinkStatus;
export declare const hasClearedFinancialLink: (value: unknown) => boolean;
export declare const getCanonicalIncompleteOnboardingRoute: () => typeof FINANCIAL_LINK_ROUTE;
export declare const getFinancialLinkContinuationRoute: (currentStep: number) => CanonicalOnboardingRoute;
export declare const normalizeLegacyOnboardingRedirectTarget: (target: string) => string;
export declare const getOnboardingDisplayMeta: (routeOrStep: string | number) => {
    route: CanonicalOnboardingRoute;
    displayStep: number;
    totalSteps: number;
};
export declare const getContinueOnboardingCta: (currentStep: number) => {
    route: CanonicalOnboardingRoute;
    text: string;
};
export { TOTAL_VISIBLE_ONBOARDING_STEPS };
