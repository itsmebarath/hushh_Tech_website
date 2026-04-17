import React from 'react';
export interface WiFiBillData {
    customerName: string;
    billDate: Date;
    billNumber: string;
    planName: string;
    planSpeed: string;
    monthlyCharge: number;
    cgst: number;
    sgst: number;
    totalAmount: number;
    dueDate: Date;
    customerId: string;
    connectionAddress: string;
    billingPeriod: string;
}
interface WiFiBillCardProps {
    data: WiFiBillData;
}
/**
 * WiFi Bill Card - Official Black & White A4 Format
 * Hathway Internet Bill Style
 */
declare const WiFiBillCard: React.ForwardRefExoticComponent<WiFiBillCardProps & React.RefAttributes<HTMLDivElement>>;
export default WiFiBillCard;
