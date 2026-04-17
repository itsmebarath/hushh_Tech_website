declare const STOCK_SYMBOLS: string[];
declare const STOCK_NAMES: Record<string, string>;
declare const STOCK_SHORT_SYMBOLS: Record<string, string>;
declare const STOCK_LOGOS: Record<string, string>;
export interface StockQuote {
    symbol: string;
    displaySymbol: string;
    name: string;
    currentPrice: number;
    change: number;
    percentChange: number;
    isUp: boolean;
    logo: string;
}
export declare function useStockQuotes(refreshInterval?: number): {
    quotes: StockQuote[];
    loading: boolean;
    error: string;
    lastUpdated: Date;
    refetch: () => Promise<void>;
};
export { STOCK_SYMBOLS, STOCK_LOGOS, STOCK_NAMES, STOCK_SHORT_SYMBOLS };
