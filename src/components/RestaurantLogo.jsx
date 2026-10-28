import React from 'react';
import { RESTAURANT_CONFIG } from '../restaurantConfig';

export const RestaurantLogo = ({ showText = true }) => {
  return (
    <div className="flex items-center gap-3 select-none group cursor-pointer">
      {/* Botanical Bay Leaf (Tezpatta) Emblem */}
      <div className="relative flex items-center justify-center w-11 h-11 rounded-full bg-linear-to-br from-[#4E7B44] via-[#D97706] to-[#141D14] p-[1.5px] shadow-md shadow-[#4E7B44]/25 group-hover:shadow-[#34D399]/40 transition-all duration-300">
        <div className="w-full h-full bg-[#0C120C] rounded-full flex items-center justify-center">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            className="w-5 h-5 text-[#34D399] group-hover:scale-110 transition-transform duration-300"
            strokeWidth="1.75"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {/* Elegant Bay Leaf (Tezpatta) with central vein & herb curve */}
            <path d="M12 2C6.5 2 3 7.5 3 13c0 4.5 3.5 8 8 8s9-3.5 9-8c0-5.5-3.5-11-8-11z" fill="#4E7B44" fillOpacity="0.25" stroke="#34D399" />
            <path d="M12 2c0 6 3 11 8 11" stroke="#D97706" />
            <path d="M12 9c-2 2-3 4.5-3 7" stroke="#34D399" />
          </svg>
        </div>
      </div>

      {showText && (
        <div className="flex flex-col">
          <div className="flex items-baseline gap-1.5">
            <span className="font-serif tracking-[0.16em] text-lg font-bold text-[#F5F8F3] leading-none group-hover:text-[#34D399] transition-colors">
              {RESTAURANT_CONFIG.brand.name}
            </span>
            <span className="text-xs text-[#D97706] font-medium">
              ({RESTAURANT_CONFIG.brand.hindiName})
            </span>
          </div>
          <div className="flex items-center gap-1.5 mt-1">
            <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block border border-emerald-300" title="Veg Only" />
            <span className="text-[9px] uppercase tracking-[0.25em] text-[#D1DCD0]/70 font-sans">
              Veg-Only • Garh Road, Meerut
            </span>
          </div>
        </div>
      )}
    </div>
  );
};
