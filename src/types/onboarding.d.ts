export type AccountType = 'wealth_1m' | 'wealth_5m' | 'ultra_25m';
export type LegacyAccountType = 'general' | 'retirement';
export type ReferralSource = 'podcast' | 'social_media_influencer' | 'social_media_ad' | 'yahoo_finance' | 'ai_tool' | 'website_blog_article' | 'penny_hoarder' | 'family_friend' | 'tv_radio' | 'other';
export type AccountStructure = 'individual' | 'joint' | 'retirement' | 'trust' | 'other';
export type UIAccountType = 'individual' | 'joint' | 'retirement' | 'trust';
export interface AccountTypeOption {
    value: UIAccountType;
    label: string;
}
export declare const ACCOUNT_TYPE_OPTIONS: AccountTypeOption[];
export type RecurringFrequency = 'once_a_month' | 'twice_a_month' | 'weekly' | 'every_other_week';
export type FinancialLinkStatus = 'pending' | 'completed' | 'skipped';
export interface AccountTierInfo {
    type: AccountType;
    name: string;
    minimum: string;
    minimumAmount: number;
    description: string;
    tierLevel: 'standard' | 'silver' | 'gold';
    colors: {
        primary: string;
        secondary: string;
        accent: string;
        border: string;
        background: string;
        selectedBorder: string;
        selectedBackground: string;
    };
}
export declare const ACCOUNT_TIERS: Record<AccountType, AccountTierInfo>;
export interface OnboardingData {
    id: string;
    user_id: string;
    account_type?: AccountType | LegacyAccountType;
    selected_fund?: string;
    class_a_units?: number;
    class_b_units?: number;
    class_c_units?: number;
    referral_source?: ReferralSource;
    referral_source_other?: string;
    citizenship_country?: string;
    residence_country?: string;
    account_structure?: AccountStructure;
    phone_number?: string;
    phone_country_code?: string;
    legal_first_name?: string;
    legal_last_name?: string;
    address_line_1?: string;
    address_line_2?: string;
    city?: string;
    state?: string;
    zip_code?: string;
    address_phone_number?: string;
    ssn_encrypted?: string;
    date_of_birth?: string;
    initial_investment_amount?: number;
    recurring_investment_enabled?: boolean;
    recurring_frequency?: RecurringFrequency;
    recurring_amount?: number;
    recurring_day_of_month?: number;
    financial_link_status?: FinancialLinkStatus;
    current_step: number;
    completed_steps: number[];
    is_completed: boolean;
    completed_at?: string;
    created_at: string;
    updated_at: string;
}
export interface Step1Data {
    selected_fund: string;
    class_a_units?: number;
    class_b_units?: number;
    class_c_units?: number;
    initial_investment_amount?: number;
}
export interface Step2Data {
    referral_source: ReferralSource;
    referral_source_other?: string;
}
export interface Step3Data {
}
export interface Step4Data {
    citizenship_country: string;
    residence_country: string;
}
export interface Step5Data {
    account_structure: AccountStructure;
}
export interface Step6Data {
    phone_number: string;
    phone_country_code: string;
}
export interface Step7Data {
    legal_first_name: string;
    legal_last_name: string;
}
export interface Step8Data {
    address_line_1: string;
    address_line_2?: string;
    city: string;
    state: string;
    zip_code: string;
    address_phone_number: string;
}
export interface Step9Data {
    ssn_encrypted: string;
    date_of_birth: string;
}
export interface Step10Data {
    initial_investment_amount: number;
}
export interface Step11Data {
    recurring_investment_enabled: boolean;
    recurring_frequency?: RecurringFrequency;
    recurring_amount?: number;
    recurring_day_of_month?: number;
}
export interface Step12Data {
}
export interface Step13Data {
}
export interface OnboardingState {
    data: Partial<OnboardingData>;
    currentStep: number;
    isLoading: boolean;
    error: string | null;
}
export interface OnboardingResponse {
    success: boolean;
    data?: OnboardingData;
    error?: string;
}
export interface OnboardingStepUpdate {
    step: number;
    data: Partial<OnboardingData>;
    markComplete?: boolean;
}
export declare function migrateAccountType(legacyType: string): AccountType;
