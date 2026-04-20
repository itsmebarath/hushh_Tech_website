import React from "react";
import { StockQuote } from "../../hooks/useStockQuotes";
import TickerChip from "./TickerChip";
import { FiChevronDown } from "react-icons/fi";

interface TickerStripProps {
  quotes: StockQuote[];
  isLoading: boolean;
  showScrollIndicator: boolean;
}

const TickerStrip = ({ quotes, isLoading, showScrollIndicator }: TickerStripProps) => {
  return (
    <section className="relative w-full bg-[#F8F9FA] py-2.5 border-b border-gray-200" aria-label="Live stock ticker" role="marquee">
      {/* Ticker Marquee with Fade Mask */}
      <div className="ticker-mask relative flex w-full overflow-hidden">
        <div className="ticker-track flex items-center gap-3 px-4">
          {/* First set of chips */}
          {quotes.map((quote, idx) => (
            <TickerChip key={`${quote.symbol}-${idx}`} quote={quote} isLoading={isLoading} />
          ))}
          {/* Double up for seamless scrolling */}
          {quotes.map((quote, idx) => (
            <TickerChip key={`${quote.symbol}-clone-${idx}`} quote={quote} isLoading={isLoading} />
          ))}
        </div>
      </div>

      {/* Horizontal Scroll Hint (Fades out when scrolling starts) */}
      {showScrollIndicator && (
        <div className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/90 backdrop-blur-sm border border-gray-100 shadow-sm pointer-events-none transition-opacity duration-500 animate-pulse lg:hidden">
          <span className="text-[10px] font-medium text-gray-500 uppercase tracking-wider">Scroll Live</span>
          <FiChevronDown className="w-3 h-3 text-gray-400 rotate-[-90deg] scroll-indicator-arrow" />
        </div>
      )}
    </section>
  );
};

export default TickerStrip;
