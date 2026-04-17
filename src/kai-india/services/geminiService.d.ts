import { MarketData, AdvisorResult } from "../types";
export declare const fetchMarketOverview: () => Promise<MarketData>;
export declare const getInvestmentAdvice: (amount: number, days: number, profile: "stability" | "growth" | "max_profit") => Promise<AdvisorResult>;
