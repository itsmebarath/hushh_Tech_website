import React from 'react';
export interface AICourseBillData {
    customerName: string;
    invoiceDate: Date;
    invoiceNumber: string;
    courseName: string;
    courseDescription: string;
    courseDuration: string;
    courseFee: number;
    cgst: number;
    sgst: number;
    totalAmount: number;
    companyName: string;
    companyAddress: string;
    gstin: string;
    customerAddress: string;
    customerEmail: string;
    customerContact: string;
    enrollmentId: string;
}
interface AICourseBillCardProps {
    data: AICourseBillData;
}
/**
 * Udemy Course Bill Card - Official Black & White A4 Format
 * Online Learning Platform Invoice Style
 */
declare const AICourseBillCard: React.ForwardRefExoticComponent<AICourseBillCardProps & React.RefAttributes<HTMLDivElement>>;
export default AICourseBillCard;
