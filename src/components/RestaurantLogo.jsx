import React from 'react';
import { RESTAURANT_CONFIG } from '../restaurantConfig';

export const RestaurantLogo = ({ showText = true }) => {
  return (
    <div className="flex items-center gap-2.5 sm:gap-3 select-none group cursor-pointer">
      {/* Royal Burgundy & Champagne Gold Botanical Insignia */}
      <div className="relative flex items-center justify-center w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-linear-to-br from-[#C99B52] via-[#E83E60] to-[#240B10] p-[1.5px] shadow-lg shadow-[#C99B52]/20 group-hover:shadow-[#C99B52]/40 transition-all duration-300 shrink-0">
        <div className="w-full h-full bg-[#240B10] rounded-full flex items-center justify-center border border-[#C99B52]/30">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            className="w-5 h-5 text-[#C99B52] group-hover:scale-110 transition-transform duration-300"
            strokeWidth="1.75"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {/* Tezpatta Leaf With Royal Vein */}
            <path d="M12 2C6.5 2 3 7.5 3 13c0 4.5 3.5 8 8 8s9-3.5 9-8c0-5.5-3.5-11-8-11z" fill="#C99B52" fillOpacity="0.18" stroke="#C99B52" />
            <path d="M12 2c0 6 3 11 8 11" stroke="#E83E60" />
            <path d="M12 9c-2 2-3 4.5-3 7" stroke="#DFC08A" />
          </svg>
        </div>
      </div>

      {showText && (
        <div className="flex flex-col">
          <div className="flex items-baseline gap-1.5">
            <span className="font-serif tracking-[0.16em] text-base sm:text-lg font-bold text-[#FFF2E8] leading-none group-hover:text-[#C99B52] transition-colors">
              {RESTAURANT_CONFIG.brand.name}
            </span>
            <span className="text-[11px] sm:text-xs text-[#C99B52] font-serif italic">
              ({RESTAURANT_CONFIG.brand.hindiName})
            </span>
          </div>
          <div className="flex items-center gap-1.5 mt-0.5 sm:mt-1">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block border border-emerald-300" title="Veg Only" />
            <span className="text-[8px] sm:text-[9px] uppercase tracking-[0.22em] text-[#C9B8B8]/80 font-sans">
              Royal Indian Dining • Meerut
            </span>
          </div>
        </div>
      )}
    </div>
  );
};
