/**
 * HushhTechFaqSheet — Bottom sheet with accordion FAQs.
 * Follows the unified design language: Playfair Display headings,
 * tracking-[0.2em] section headers, hushh-blue accents, ios-green badges.
 */
import React from "react";
interface HushhTechFaqSheetProps {
    isOpen: boolean;
    onClose: () => void;
}
declare const HushhTechFaqSheet: React.FC<HushhTechFaqSheetProps>;
export default HushhTechFaqSheet;
