import React from 'react';
interface MarketUpdateGalleryProps {
    date: string;
    showTestImage?: boolean;
    title?: string;
    imageCount?: number;
    apiDateFormat?: boolean;
}
declare const MarketUpdateGallery: React.FC<MarketUpdateGalleryProps>;
export default MarketUpdateGallery;
