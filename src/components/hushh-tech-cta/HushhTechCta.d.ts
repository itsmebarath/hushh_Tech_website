/**
 * HushhTechCta — Reusable CTA button component
 * Two variants: BLACK (filled) and WHITE (outlined)
 * Rounded, tall buttons matching the premium Hushh design.
 *
 * Usage:
 *   <HushhTechCta variant={HushhTechCtaVariant.BLACK} onClick={handleClick}>
 *     Complete Your Profile <span className="material-symbols-outlined">arrow_forward</span>
 *   </HushhTechCta>
 */
import React from "react";
/** Enum for CTA button variants */
export declare enum HushhTechCtaVariant {
    BLACK = "black",
    WHITE = "white"
}
interface HushhTechCtaProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    /** Visual variant — BLACK (filled) or WHITE (outlined) */
    variant: HushhTechCtaVariant;
    /** Button content */
    children: React.ReactNode;
}
declare const HushhTechCta: React.FC<HushhTechCtaProps>;
export default HushhTechCta;
