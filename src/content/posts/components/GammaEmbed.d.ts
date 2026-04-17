import React from "react";
interface GammaEmbedProps {
    title: string;
    description: string;
    src: string;
}
/**
 * Shared Gamma embed wrapper to avoid fixed positioning overlap.
 * Provides padding, background, and responsive sizing for desktop/mobile.
 */
declare const GammaEmbed: React.FC<GammaEmbedProps>;
export default GammaEmbed;
