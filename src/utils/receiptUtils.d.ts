/**
 * Receipt Generator Utility Functions
 * Generates random UPI IDs, Reference IDs, and Transaction IDs
 */
/**
 * Generate UPI ID from name
 * Example: "Akshay Kumar" -> "akshaykumar@okhdfcbank"
 */
export declare const generateUpiId: (name: string) => string;
/**
 * Generate random 12-digit UPI Reference ID
 * Example: "532335586845"
 */
export declare const generateUpiRefId: () => string;
/**
 * Generate random Transaction ID
 * Example: "NEF50e53537809942e0be46b983a05caedf"
 */
export declare const generateTransactionId: () => string;
/**
 * Format amount to Indian Rupee format
 * Example: 20000 -> "₹20,000"
 */
export declare const formatAmount: (amount: number) => string;
/**
 * Format date for receipt
 * Example: new Date() -> "19 Nov '25, 12:23 pm"
 */
export declare const formatReceiptDate: (date: Date) => string;
/**
 * Parse amount string to number
 * Handles formats like "20K", "20000", "20,000", "Rs20K"
 */
export declare const parseAmount: (amountStr: string) => number;
/**
 * Receipt data interface
 */
export interface ReceiptData {
    recipientName: string;
    amount: number;
    date: Date;
    upiId: string;
    upiRefId: string;
    transactionId: string;
    fromAccount: string;
    fromAccountNumber: string;
}
/**
 * Generate complete receipt data from name and amount
 */
export declare const generateReceiptData: (recipientName: string, amount: number, date?: Date) => ReceiptData;
import { WiFiBillData } from '../components/receipt/WiFiBillCard';
import { FoodBillData } from '../components/receipt/FoodBillCard';
import { SeminarBillData } from '../components/receipt/SeminarBillCard';
import { ElectricityBillData } from '../components/receipt/ElectricityBillCard';
import { AICourseBillData } from '../components/receipt/AICourseBillCard';
/**
 * Generate WiFi Bill Number
 * Example: "HTW-2024-12345678"
 */
export declare const generateWiFiBillNumber: () => string;
/**
 * Generate WiFi Customer ID
 * Example: "CUS1234567890"
 */
export declare const generateWiFiCustomerId: () => string;
/**
 * Generate WiFi Bill Data
 * Total: ₹2804 (Base: ₹2376.27 + CGST: ₹213.86 + SGST: ₹213.87)
 */
export declare const generateWiFiBillData: (customerName: string, billDate: Date) => WiFiBillData;
/**
 * Generate Food Bill Number
 * Example: "APV-123456"
 */
export declare const generateFoodBillNumber: () => string;
/**
 * Generate Food Bill Data
 * Total: ₹2635 (with 5% GST)
 */
export declare const generateFoodBillData: (customerName: string, billDate: Date) => FoodBillData;
/**
 * Generate Seminar Invoice Number
 * Example: "TPE-2024-001234"
 */
export declare const generateSeminarInvoiceNumber: () => string;
/**
 * Generate Seminar Bill Data
 * Total: ₹5,273 (HALF - Base: ₹4,468 + GST 18%)
 */
export declare const generateSeminarBillData: (customerName: string, invoiceDate: Date, eventName?: string, eventDate?: string, eventVenue?: string) => SeminarBillData;
/**
 * Generate Electricity Bill Number
 * Example: "MH-PNE-2024-12345678"
 */
export declare const generateElectricityBillNumber: () => string;
/**
 * Generate Consumer Number
 * Example: "310012345678"
 */
export declare const generateConsumerNumber: () => string;
/**
 * Generate Meter Number
 * Example: "PNE-7654321"
 */
export declare const generateMeterNumber: () => string;
/**
 * Generate Electricity Bill Data
 * Total: ₹2,472
 */
export declare const generateElectricityBillData: (customerName: string, billDate: Date) => ElectricityBillData;
/**
 * Generate AI Course Invoice Number
 * Example: "AIA-2024-001234"
 */
export declare const generateAICourseInvoiceNumber: () => string;
/**
 * Generate Enrollment ID
 * Example: "ENR-2024-12345"
 */
export declare const generateEnrollmentId: () => string;
/**
 * Generate AI Course Bill Data (Udemy)
 * Total: ₹2,800 (Base: ₹2,373 + GST 18%)
 */
export declare const generateAICourseBillData: (customerName: string, invoiceDate: Date) => AICourseBillData;
/**
 * Calculate grand total of all 5 bills
 * WiFi: ₹2,804 + Food: ₹2,635 + Seminar: ₹5,273 + Electricity: ₹2,472 + AI Course: ₹2,800 = ₹15,984
 */
export declare const calculateGrandTotal: (wifiBill: WiFiBillData | null, foodBill: FoodBillData | null, seminarBill: SeminarBillData | null, electricityBill?: ElectricityBillData | null, aiCourseBill?: AICourseBillData | null) => number;
