import React, { useState, useMemo } from 'react';
import { FoodCard } from './FoodCard';
import { RESTAURANT_CONFIG } from '../restaurantConfig';

export const MenuSection = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredItems = useMemo(() => {
    if (activeCategory === "All") {
      return RESTAURANT_CONFIG.menu;
    }
    return RESTAURANT_CONFIG.menu.filter((item) => item.category === activeCategory);
  }, [activeCategory]);

  return (
    <section id="menu" className="py-20 sm:py-24 bg-[#180B0D] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 mb-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block border border-emerald-300" />
            <span className="text-[11px] sm:text-xs uppercase font-bold tracking-[0.25em] text-[#FB7185]">
              100% Pure Vegetarian Fine Dining
            </span>
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-serif font-medium text-[#FFF5F5] mt-1 mb-3">
            Handcrafted Menu Selections
          </h2>
          <div className="w-16 h-0.5 bg-gradient-to-r from-[#E11D48] to-[#F59E0B] mx-auto mb-3" />
          <p className="text-xs sm:text-base text-[#E2D1D4]/75">
            North Indian handis, Awadhi kebabs, crisp Dahi Ke Shole, and sizzling Indo-Chinese dishes prepared with pure ingredients.
          </p>
        </div>

        {/* Mobile Horizontal Pill Scroll with Visual Active Indicator */}
        <div className="flex items-center justify-start sm:justify-center overflow-x-auto pb-3 mb-8 sm:mb-12 no-scrollbar gap-2 sm:gap-3 px-1 -mx-4 sm:mx-0 pl-4 sm:pl-0">
          {RESTAURANT_CONFIG.categories.map((category) => {
            const isActive = activeCategory === category;
            return (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`whitespace-nowrap px-3.5 sm:px-4 py-2 rounded-full text-[11px] sm:text-xs font-semibold uppercase tracking-wider transition-all duration-200 cursor-pointer border shrink-0 ${
                  isActive
                    ? 'bg-gradient-to-r from-[#E11D48] to-[#BE123C] text-white border-[#E11D48] shadow-md shadow-[#E11D48]/30 scale-102'
                    : 'bg-[#221013] text-[#E2D1D4] border-[#4A1D24] hover:border-[#FB7185]/60 hover:text-white'
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        {/* Products Grid: 1 col on mobile, 2 on tablet, 3-4 on desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
          {filteredItems.map((product) => (
            <FoodCard key={product.id} product={product} />
          ))}
        </div>

        {/* Empty state safeguard */}
        {filteredItems.length === 0 && (
          <div className="text-center py-16 bg-[#221013] rounded-xl border border-[#4A1D24]">
            <p className="text-sm text-[#E2D1D4]">No dishes found in this category.</p>
            <button
              onClick={() => setActiveCategory("All")}
              className="mt-4 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-white bg-[#E11D48] rounded-sm"
            >
              View Full Menu
            </button>
          </div>
        )}

      </div>
    </section>
  );
};
