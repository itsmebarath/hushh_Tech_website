import React from "react";
import { StockQuote } from "../../hooks/useStockQuotes";

interface TickerChipProps {
  quote: StockQuote;
  isLoading?: boolean;
}

const TickerChip = ({ quote, isLoading }: TickerChipProps) => {
  return (
    <div className="group flex h-10 shrink-0 items-center gap-2 rounded-full bg-white border border-gray-200 shadow-sm pl-2 pr-3.5 hover:shadow-md transition-all">
      {/* Logo in gray circle */}
      <div className="flex w-7 h-7 items-center justify-center rounded-full bg-gray-100 shrink-0 overflow-hidden">
        {quote.logo ? (
          <img
            src={quote.logo}
            alt={`${quote.displaySymbol} logo`}
            className="w-4 h-4 object-contain"
            onError={(e) => {
              (e.target as HTMLImageElement).style.display = 'none';
            }}
          />
        ) : (
          <span className="text-[10px] font-bold text-gray-600">{quote.displaySymbol.charAt(0)}</span>
        )}
      </div>
      {/* Stock symbol - use displaySymbol for cleaner display */}
      <span className="text-[12px] font-bold text-gray-800 leading-none">{quote.displaySymbol}</span>
      {/* Percent change with arrow */}
      <div className={`ml-0.5 flex items-center gap-0.5 ${quote.isUp ? 'text-green-600' : 'text-red-500'}`}>
        <span className="text-[10px]">{quote.isUp ? '▲' : '▼'}</span>
        <span className={`text-[11px] font-semibold ${isLoading ? 'animate-pulse' : ''}`}>
          {Math.abs(quote.percentChange).toFixed(1)}%
        </span>
      </div>
    </div>
  );
};

export default TickerChip;
