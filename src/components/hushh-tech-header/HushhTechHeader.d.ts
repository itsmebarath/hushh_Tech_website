/**
 * HushhTechHeader — Fixed header with hamburger menu + stock ticker
 * Always fixed to top of viewport. Includes spacer div to prevent
 * content from hiding behind it.
 *
 * Left: Hushh logo + brand name. Right: hamburger menu button.
 * Below: Scrolling stock ticker with live quotes (Google, Apple, etc.)
 */
import React from "react";
interface HushhTechHeaderProps {
    /** Show the stock ticker strip below header (default: true) */
    showTicker?: boolean;
    /** Extra classes on the header element */
    className?: string;
}
declare const HushhTechHeader: React.FC<HushhTechHeaderProps>;
export default HushhTechHeader;
