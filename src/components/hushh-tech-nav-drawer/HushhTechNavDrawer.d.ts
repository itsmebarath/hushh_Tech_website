/**
 * HushhTechNavDrawer — Full-screen navigation drawer (Revamped)
 * Apple iOS colors, proper English capitalization, hushh-blue accents.
 * Slides in from right, covers entire viewport.
 */
import React from "react";
interface HushhTechNavDrawerProps {
    isOpen: boolean;
    onClose: () => void;
}
declare const HushhTechNavDrawer: React.FC<HushhTechNavDrawerProps>;
export default HushhTechNavDrawer;
