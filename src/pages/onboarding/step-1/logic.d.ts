/**
 * Step 1 — All Business Logic
 * Share class selection, recurring investment config, Supabase upsert
 */
import { type ChangeEvent } from 'react';
export type RecurringFrequency = 'once_a_month' | 'twice_a_month' | 'weekly' | 'every_other_week';
export interface ShareClass {
    id: string;
    name: string;
    tier: 'ultra' | 'premium' | 'standard';
    unitPrice: number;
    displayPrice: string;
    description: string;
    tierLabel?: string;
    tierBg?: string;
    tierText?: string;
}
export declare const SHARE_CLASSES: ShareClass[];
export declare const TOTAL_STEPS = 9;
export declare const MIN_RECURRING_AMOUNT = 100;
export declare const MAX_RECURRING_AMOUNT = 100000000;
export declare const FREQ_OPTIONS: {
    value: RecurringFrequency;
    label: string;
}[];
export declare const AMOUNT_PRESETS: number[];
export declare const formatCurrency: (amount: number) => string;
export declare const formatNumberWithCommas: (value: string) => string;
export declare const parseFormattedNumber: (value: string) => number;
export interface Step1Logic {
    units: Record<string, number>;
    frequency: RecurringFrequency;
    investmentDay: string;
    selectedAmount: number | null;
    customAmount: string;
    customAmountError: string | null;
    error: string | null;
    isLoading: boolean;
    isFooterVisible: boolean;
    totalInvestment: number;
    hasSelection: boolean;
    recurringEnabled: boolean;
    handleUnitChange: (classId: string, delta: number) => void;
    handleAmountClick: (amount: number) => void;
    handleCustomAmountChange: (e: ChangeEvent<HTMLInputElement>) => void;
    setFrequency: (f: RecurringFrequency) => void;
    setInvestmentDay: (d: string) => void;
    toggleRecurring: () => void;
    handleNext: () => Promise<void>;
    handleBack: () => void;
}
export declare const useStep1Logic: () => Step1Logic;
