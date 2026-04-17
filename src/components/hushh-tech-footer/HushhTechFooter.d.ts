/**
 * HushhTechFooter — Reusable bottom navigation bar
 * Floating dark rounded bar with 4 nav tabs.
 *
 * Usage:
 *   <HushhTechFooter
 *     activeTab={HushhFooterTab.HOME}
 *     onTabChange={(tab) => navigate(tab)}
 *   />
 */
import React from "react";
/** Enum for footer navigation tabs */
export declare enum HushhFooterTab {
    HOME = "home",
    FUND_A = "fund_a",
    COMMUNITY = "community",
    PROFILE = "profile"
}
interface HushhTechFooterProps {
    /** Currently active tab */
    activeTab?: HushhFooterTab;
    /** Callback when a tab is tapped */
    onTabChange?: (tab: HushhFooterTab) => void;
    /** Extra classes on root container */
    className?: string;
}
declare const HushhTechFooter: React.FC<HushhTechFooterProps>;
export default HushhTechFooter;
