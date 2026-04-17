import React from 'react';
import { ReceiptData } from '../../utils/receiptUtils';
interface ReceiptCardProps {
    data: ReceiptData;
    onCopy?: (text: string) => void;
}
/**
 * ReceiptCard Component - Exact UI replica of Slice payment receipt
 */
declare const ReceiptCard: React.ForwardRefExoticComponent<ReceiptCardProps & React.RefAttributes<HTMLDivElement>>;
export default ReceiptCard;
