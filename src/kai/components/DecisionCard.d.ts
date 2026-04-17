import React from 'react';
import { DecisionCardData } from '../types';
interface DecisionCardProps {
    data: DecisionCardData;
    onClose: () => void;
    onRequestNews?: (ticker: string) => void;
}
declare const DecisionCard: React.FC<DecisionCardProps>;
export default DecisionCard;
