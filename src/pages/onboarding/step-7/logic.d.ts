/**
 * Step 11 — All Business Logic
 * Investment summary, share class editing modal, recurring investment config
 */
import { type ChangeEvent } from 'react';
export type RecurringFrequency = 'once_a_month' | 'twice_a_month' | 'weekly' | 'every_other_week';
export interface ShareClassInfo {
    id: string;
    name: string;
    unitPrice: number;
    tier: 'platinum' | 'gold' | 'standard';
    borderGradient: string;
    badge?: string;
}
export declare const SHARE_CLASSES: ShareClassInfo[];
export declare const MIN_RECURRING_AMOUNT = 100;
export declare const MAX_RECURRING_AMOUNT = 100000000;
export declare const DISPLAY_STEP: number;
export declare const PROG_TOTAL: number;
export declare const PROG_PCT: number;
export declare const FREQUENCY_OPTIONS: {
    value: RecurringFrequency;
    label: string;
}[];
export declare const AMOUNT_PRESETS: number[];
export declare const DAY_OPTIONS: {
    value: string;
    label: string;
}[];
export declare const formatCurrency: (amount: number) => string;
export declare const formatFullCurrency: (amount: number) => string;
export declare const formatNumberWithCommas: (value: string) => string;
export declare const parseFormattedNumber: (value: string) => number;
export declare const getFrequencyLabel: (value: RecurringFrequency) => string;
export interface Step11Logic {
    loading: boolean;
    error: string | null;
    isFooterVisible: boolean;
    shareUnits: {
        class_a_units: number;
        class_b_units: number;
        class_c_units: number;
    };
    frequency: RecurringFrequency;
    investmentDay: string;
    selectedAmount: number | null;
    customAmount: string;
    customAmountError: string | null;
    showRecurringEditor: boolean;
    isModalOpen: boolean;
    localShareUnits: {
        class_a_units: number;
        class_b_units: number;
        class_c_units: number;
    };
    savingModal: boolean;
    totalInvestment: number;
    modalTotalInvestment: number;
    hasModalChanges: boolean;
    hasAnyUnits: boolean;
    recurringAmount: number;
    isFormValid: boolean;
    recurringSummaryTitle: string;
    recurringSummarySubtitle: string;
    getUnits: (classId: string) => number;
    getModalUnits: (classId: string) => number;
    getUnitsSummary: () => string;
    handleBack: () => void;
    handleSkip: () => void;
    handleContinue: () => Promise<void>;
    handleOpenModal: () => void;
    handleCloseModal: () => void;
    handleIncrement: (classId: string) => void;
    handleDecrement: (classId: string) => void;
    handleSaveChanges: () => Promise<void>;
    handleAmountClick: (amount: number) => void;
    handleCustomAmountChange: (e: ChangeEvent<HTMLInputElement>) => void;
    setFrequency: (f: RecurringFrequency) => void;
    setInvestmentDay: (d: string) => void;
    setShowRecurringEditor: (v: boolean | ((prev: boolean) => boolean)) => void;
}
export declare const useStep11Logic: () => Step11Logic;
