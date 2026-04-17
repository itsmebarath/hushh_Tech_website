import type { ShadowProfile } from "./shadowProfile";
export type PrimaryGoal = "capital_preservation" | "steady_income" | "long_term_growth" | "aggressive_growth" | "speculation";
export type InvestmentHorizon = "<3_years" | "3_5_years" | "5_10_years" | ">10_years";
export type RiskTolerance = "very_low" | "low" | "moderate" | "high" | "very_high";
export type LiquidityNeed = "low" | "medium" | "high";
export type ExperienceLevel = "beginner" | "intermediate" | "advanced";
export type TicketSize = "micro_<1m" | "small_1m_10m" | "medium_10m_50m" | "large_>50m";
export type AnnualCapacity = "<5m" | "5m_20m" | "20m_100m" | ">100m";
export type AssetClass = "public_equities" | "mutual_funds_etfs" | "fixed_income" | "real_estate" | "startups_private_equity" | "crypto_digital_assets" | "cash_equivalents";
export type Sector = "technology" | "consumer_internet" | "fintech" | "healthcare" | "real_estate" | "energy_climate" | "industrial" | "other";
export type VolatilityReaction = "sell_to_avoid_more_loss" | "hold_and_wait" | "buy_more_at_lower_prices";
export type SustainabilityPreference = "not_important" | "nice_to_have" | "important" | "very_important";
export type EngagementStyle = "very_passive_just_updates" | "collaborative_discuss_key_decisions" | "hands_on_active_trader";
export interface InvestorProfileField<T> {
    value: T;
    confidence: number;
    rationale: string;
}
export interface InvestorProfile {
    primary_goal: InvestorProfileField<PrimaryGoal>;
    investment_horizon_years: InvestorProfileField<InvestmentHorizon>;
    risk_tolerance: InvestorProfileField<RiskTolerance>;
    liquidity_need: InvestorProfileField<LiquidityNeed>;
    experience_level: InvestorProfileField<ExperienceLevel>;
    typical_ticket_size: InvestorProfileField<TicketSize>;
    annual_investing_capacity: InvestorProfileField<AnnualCapacity>;
    asset_class_preference: InvestorProfileField<AssetClass[]>;
    sector_preferences: InvestorProfileField<Sector[]>;
    volatility_reaction: InvestorProfileField<VolatilityReaction>;
    sustainability_preference: InvestorProfileField<SustainabilityPreference>;
    engagement_style: InvestorProfileField<EngagementStyle>;
}
export interface InvestorProfileInput {
    name: string;
    email: string;
    age: number;
    phone_country_code: string;
    phone_number: string;
    organisation?: string;
}
export interface DerivedContext {
    country: string;
    region: string;
    currency: string;
    email_type: "personal" | "corporate";
    company_domain?: string;
    company_industry?: string;
    company_size_bucket?: string;
    life_stage: string;
    org_type?: string;
}
export interface PrivacySettings {
    investor_profile: {
        [key in keyof InvestorProfile]: boolean;
    };
    onboarding_data: {
        account_type: boolean;
        selected_fund: boolean;
        referral_source: boolean;
        referral_source_other: boolean;
        citizenship_country: boolean;
        residence_country: boolean;
        account_structure: boolean;
        phone_number: boolean;
        phone_country_code: boolean;
        legal_first_name: boolean;
        legal_last_name: boolean;
        address_line_1: boolean;
        address_line_2: boolean;
        address_country: boolean;
        city: boolean;
        state: boolean;
        zip_code: boolean;
        address_phone_number: boolean;
        address_phone_country_code: boolean;
        date_of_birth: boolean;
        ssn_encrypted: boolean;
        initial_investment_amount: boolean;
        recurring_investment_enabled: boolean;
        recurring_frequency: boolean;
        recurring_amount: boolean;
        recurring_day_of_month: boolean;
    };
    basic_info: {
        name: boolean;
        email: boolean;
        age: boolean;
        organisation: boolean;
    };
}
export interface InvestorProfileRecord {
    id: string;
    user_id: string;
    name: string;
    email: string;
    age: number;
    phone_country_code: string;
    phone_number: string;
    organisation?: string;
    slug?: string;
    is_public?: boolean;
    privacy_settings?: PrivacySettings;
    derived_context: DerivedContext;
    investor_profile: InvestorProfile;
    is_ai_prefilled: boolean;
    user_confirmed: boolean;
    confirmed_at?: string;
    created_at: string;
    updated_at: string;
}
export interface PublicInvestorBasicInfo {
    name: string;
    email: string | null;
    age: number | null;
    organisation: string | null;
}
export interface PublicInvestorOnboardingData {
    account_type?: string | null;
    selected_fund?: string | null;
    citizenship_country?: string | null;
    residence_country?: string | null;
}
export interface PublicInvestorProfileRecord {
    slug: string;
    profile_url: string;
    is_confirmed: boolean;
    basic_info: PublicInvestorBasicInfo;
    investor_profile: Partial<InvestorProfile> | null;
    onboarding_data: PublicInvestorOnboardingData | null;
    shadow_profile: ShadowProfile | null;
}
export declare const FIELD_LABELS: Record<keyof InvestorProfile, string>;
export declare const ONBOARDING_FIELD_LABELS: Record<string, string>;
export declare const VALUE_LABELS: Record<string, string>;
