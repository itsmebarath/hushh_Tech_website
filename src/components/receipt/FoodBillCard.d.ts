import React from 'react';
export interface FoodItem {
    name: string;
    quantity: number;
    rate: number;
    amount: number;
}
export interface FoodBillData {
    customerName: string;
    billDate: Date;
    billNumber: string;
    items: FoodItem[];
    subTotal: number;
    cgst: number;
    sgst: number;
    totalAmount: number;
    restaurantName: string;
    restaurantAddress: string;
    gstin: string;
    tableNumber?: string;
}
interface FoodBillCardProps {
    data: FoodBillData;
}
/**
 * Food Bill Card - Official Black & White A4 Format
 * Restaurant Bill Style
 */
declare const FoodBillCard: React.ForwardRefExoticComponent<FoodBillCardProps & React.RefAttributes<HTMLDivElement>>;
export default FoodBillCard;
