export interface TimeSlot {
    startTime: string;
    endTime: string;
    available: boolean;
}
export interface DayAvailability {
    date: string;
    slots: TimeSlot[];
}
export interface CalendarData {
    ceo: {
        name: string;
        email: string;
    };
    timezone: string;
    meetingDuration: number;
    availability: DayAvailability[];
}
export type PaymentState = 'loading' | 'not_paid' | 'verifying' | 'paid' | 'booked';
export declare const VALID_COUPON = "ILOVEHUSHH";
export declare function useMeetCeoLogic(): {
    paymentState: PaymentState;
    loading: boolean;
    error: string;
    hushhCoins: number;
    isFooterVisible: boolean;
    showCoupon: boolean;
    setShowCoupon: import("react").Dispatch<import("react").SetStateAction<boolean>>;
    couponCode: string;
    setCouponCode: import("react").Dispatch<import("react").SetStateAction<string>>;
    couponError: string;
    setCouponError: import("react").Dispatch<import("react").SetStateAction<string>>;
    couponLoading: boolean;
    calendarData: CalendarData;
    loadingSlots: boolean;
    selectedDate: string;
    setSelectedDate: import("react").Dispatch<import("react").SetStateAction<string>>;
    selectedSlot: TimeSlot;
    setSelectedSlot: import("react").Dispatch<import("react").SetStateAction<TimeSlot>>;
    bookingInProgress: boolean;
    handlePayment: () => Promise<void>;
    handleCouponRedeem: () => Promise<void>;
    handleBookMeeting: () => Promise<void>;
    handleContinue: () => void;
    handleBack: () => void;
};
