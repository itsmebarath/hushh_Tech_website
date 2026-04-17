export declare enum MarketSegment {
    MUTUAL_FUNDS = "Mutual Funds",
    SIP = "SIP Recommendations",
    TOP_MOVERS = "Top Movers",
    MTF = "Most Traded MTF",
    INTRADAY = "Top Intraday",
    PRIOR = "Prior Market Analysis"
}
export interface MarketItem {
    name: string;
    price?: string;
    change?: string;
    risk?: string;
    category?: string;
    description?: string;
}
export interface MarketData {
    mutualFunds: MarketItem[];
    sips: MarketItem[];
    topMovers: MarketItem[];
    mtf: MarketItem[];
    intraday: MarketItem[];
    gold: MarketItem[];
    silver: MarketItem[];
    metals: MarketItem[];
    priorAnalysis: string;
}
export interface AdvisorAllocation {
    assetName: string;
    type: string;
    riskLevel: "High" | "Medium" | "Low";
    allocationAmount: number;
    projectedValue: number;
    estimatedReturnPct: string;
    reasoning: string;
    action: string;
}
export interface AdvisorResult {
    amount: number;
    durationDays: number;
    strategyName: string;
    analysis: string;
    allocations: AdvisorAllocation[];
    totalProjectedValue: number;
    totalEstimatedReturn: string;
}
