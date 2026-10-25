import React from 'react';
import { RESTAURANT_CONFIG } from '../restaurantConfig';

export const RestaurantLogo = ({ showText = true }) => {
  return (
    <div className="flex items-center gap-3 select-none group cursor-pointer">
      {/* Heritage Indian Motif / Kalash / Diya Emblem */}
      <div className="relative flex items-center justify-center w-11 h-11 rounded-full bg-linear-to-br from-[#E07A2B] via-[#E8B358] to-[#B44C28] p-[1.5px] shadow-md shadow-[#E07A2B]/20 group-hover:shadow-[#E07A2B]/40 transition-all duration-300">
        <div className="w-full h-full bg-[#120D0A] rounded-full flex items-center justify-center">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            className="w-5 h-5 text-[#E8B358] group-hover:scale-110 transition-transform duration-300"
            strokeWidth="1.75"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {/* Indian Heritage Diya / Lotus / Temple arch emblem */}
            <path d="M12 2c.5 2 2 3.5 2 5.5A4 4 0 0 1 10 11a4 4 0 0 1-4-3.5C6 5.5 7.5 4 8 2c.5 1.5 2 1.5 4 0z" fill="#E07A2B" stroke="#E8B358" />
            <path d="M4 14a8 8 0 0 0 16 0" />
            <path d="M2 18h20" />
            <path d="M6 18v2a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-2" />
          </svg>
        </div>
      </div>

      {showText && (
        <div className="flex flex-col">
          <div className="flex items-baseline gap-1.5">
            <span className="font-serif tracking-[0.18em] text-lg font-bold text-[#FBF7EE] leading-none group-hover:text-[#E8B358] transition-colors">
              {RESTAURANT_CONFIG.brand.name}
            </span>
            <span className="text-xs text-[#E8B358] font-medium">
              ({RESTAURANT_CONFIG.brand.hindiName})
            </span>
          </div>
          <div className="flex items-center gap-1.5 mt-1">
            <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block border border-emerald-300" title="Veg Only" />
            <span className="text-[9px] uppercase tracking-[0.25em] text-[#DFD5C2]/70 font-sans">
              Pure Veg • Heritage Dining
            </span>
          </div>
        </div>
      )}
    </div>
  );
};
