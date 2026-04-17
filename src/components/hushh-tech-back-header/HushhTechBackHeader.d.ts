/**
 * HushhTechBackHeader — Reusable sticky header with back button
 * Left: square back arrow button.
 * Right: configurable — "label" (e.g. FAQs) OR "hamburger" (black ≡ opens nav drawer).
 *
 * Usage:
 *   <HushhTechBackHeader onBackClick={() => navigate(-1)} rightLabel="FAQs" />
 *   <HushhTechBackHeader onBackClick={() => navigate(-1)} rightType="hamburger" />
 *   <HushhTechBackHeader onBackClick={() => navigate(-1)} showRightButton={false} />
 */
import React from "react";
interface HushhTechBackHeaderProps {
    /** Callback when back arrow is clicked */
    onBackClick?: () => void;
    /** Right button type: "label" shows text, "hamburger" shows ≡ icon */
    rightType?: "label" | "hamburger";
    /** Label for the right-side button (only used when rightType="label") */
    rightLabel?: string;
    /** Callback when right button is clicked (only used when rightType="label") */
    onRightClick?: () => void;
    /** Whether to show the right button (default: true) */
    showRightButton?: boolean;
    /** Extra classes on the root container */
    className?: string;
}
declare const HushhTechBackHeader: React.FC<HushhTechBackHeaderProps>;
export default HushhTechBackHeader;
