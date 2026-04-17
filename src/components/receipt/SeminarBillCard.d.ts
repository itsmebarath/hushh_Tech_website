import React from 'react';
export interface SeminarBillData {
    customerName: string;
    invoiceDate: Date;
    invoiceNumber: string;
    eventName: string;
    eventDate: string;
    eventVenue: string;
    registrationFee: number;
    cgst: number;
    sgst: number;
    totalAmount: number;
    companyName: string;
    companyAddress: string;
    gstin: string;
    customerAddress: string;
    customerContact: string;
}
interface SeminarBillCardProps {
    data: SeminarBillData;
}
/**
 * Seminar Bill Card - Official Black & White A4 Format
 * Conference/Seminar Invoice Style
 */
declare const SeminarBillCard: React.ForwardRefExoticComponent<SeminarBillCardProps & React.RefAttributes<HTMLDivElement>>;
export default SeminarBillCard;
