import React from 'react';
import { MarketItem } from '../types';
interface MarketCardProps {
    title: string;
    items?: MarketItem[];
    isLoading?: boolean;
    onSelect?: (itemName: string) => void;
}
export declare const MarketCard: React.FC<MarketCardProps>;
export {};
