import React from 'react';
export interface ElectricityBillData {
    customerName: string;
    billDate: Date;
    billNumber: string;
    consumerNumber: string;
    meterNumber: string;
    connectionType: string;
    billingPeriod: string;
    unitsConsumed: number;
    ratePerUnit: number;
    energyCharges: number;
    fixedCharges: number;
    electricityDuty: number;
    totalAmount: number;
    dueDate: Date;
    customerAddress: string;
    sanctionedLoad: string;
}
interface ElectricityBillCardProps {
    data: ElectricityBillData;
}
/**
 * Electricity Bill Card - Official Black & White A4 Format
 * MSEDCL Style
 */
declare const ElectricityBillCard: React.ForwardRefExoticComponent<ElectricityBillCardProps & React.RefAttributes<HTMLDivElement>>;
export default ElectricityBillCard;
