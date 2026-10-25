import React from 'react';

export const RestaurantLogo = ({ className = "h-9 w-auto", showText = true }) => {
  return (
    <div className="flex items-center gap-3 select-none group cursor-pointer">
      {/* Custom Emblem: Minimal Geometric Cloche / Flame / Fork Monogram */}
      <div className="relative flex items-center justify-center w-10 h-10 rounded-full bg-linear-to-br from-[#E58A38] to-[#99581A] p-[1.5px] shadow-md shadow-[#E58A38]/20 group-hover:shadow-[#E58A38]/40 transition-all duration-300">
        <div className="w-full h-full bg-[#0D0F12] rounded-full flex items-center justify-center">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            className="w-5 h-5 text-[#E58A38] group-hover:scale-110 transition-transform duration-300"
            strokeWidth="1.75"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {/* Cloche dome + artisanal fork & knife subtle geometry */}
            <path d="M12 4v2" />
            <path d="M4 14a8 8 0 0 1 16 0" />
            <path d="M2 18h20" />
            <path d="M7 18v2a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-2" />
            <circle cx="12" cy="11" r="1.5" fill="#E58A38" stroke="none" />
          </svg>
        </div>
      </div>

      {showText && (
        <div className="flex flex-col">
          <span className="font-serif tracking-[0.25em] text-lg font-bold text-[#F7F4EE] leading-none group-hover:text-[#F3B367] transition-colors">
            SAVORA
          </span>
          <span className="text-[9px] uppercase tracking-[0.3em] text-[#D8D2C4]/60 font-sans mt-1">
            Artisanal Dining
          </span>
        </div>
      )}
    </div>
  );
};
