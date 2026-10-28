import React from 'react';
import { RESTAURANT_CONFIG } from '../restaurantConfig';

export const RestaurantLogo = ({ showText = true }) => {
  return (
    <div className="flex items-center gap-2.5 sm:gap-3 select-none group cursor-pointer">
      {/* Luxury Crimson-Gold Bay Leaf Emblem */}
      <div className="relative flex items-center justify-center w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-linear-to-br from-[#E11D48] via-[#F59E0B] to-[#2B161A] p-[1.5px] shadow-lg shadow-[#E11D48]/30 group-hover:shadow-[#E11D48]/50 transition-all duration-300 shrink-0">
        <div className="w-full h-full bg-[#180B0D] rounded-full flex items-center justify-center">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            className="w-5 h-5 text-[#FB7185] group-hover:scale-110 transition-transform duration-300"
            strokeWidth="1.75"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {/* Elegant Bay Leaf with Gold Vein */}
            <path d="M12 2C6.5 2 3 7.5 3 13c0 4.5 3.5 8 8 8s9-3.5 9-8c0-5.5-3.5-11-8-11z" fill="#E11D48" fillOpacity="0.2" stroke="#FB7185" />
            <path d="M12 2c0 6 3 11 8 11" stroke="#F59E0B" />
            <path d="M12 9c-2 2-3 4.5-3 7" stroke="#FB7185" />
          </svg>
        </div>
      </div>

      {showText && (
        <div className="flex flex-col">
          <div className="flex items-baseline gap-1.5">
            <span className="font-serif tracking-[0.18em] text-base sm:text-lg font-bold text-[#FFF5F5] leading-none group-hover:text-[#FB7185] transition-colors">
              {RESTAURANT_CONFIG.brand.name}
            </span>
            <span className="text-[11px] sm:text-xs text-[#F59E0B] font-medium">
              ({RESTAURANT_CONFIG.brand.hindiName})
            </span>
          </div>
          <div className="flex items-center gap-1.5 mt-0.5 sm:mt-1">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block border border-emerald-300" title="Veg Only" />
            <span className="text-[8px] sm:text-[9px] uppercase tracking-[0.2em] text-[#E2D1D4]/70 font-sans">
              Pure Veg • Garh Road, Meerut
            </span>
          </div>
        </div>
      )}
    </div>
  );
};
