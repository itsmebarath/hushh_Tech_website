/**
 * Keeps onboarding pages truly mobile-responsive by reserving the exact amount
 * of scroll space needed for the fixed bottom CTA/footer.
 *
 * Why: Most onboarding screens use a fixed footer (`[data-onboarding-footer]`),
 * but footer height varies per step. We measure it and set a CSS variable on
 * `.onboarding-shell` so the scrollable `main` never gets covered on small screens.
 */
export default function OnboardingShellAutoPadding(): any;
