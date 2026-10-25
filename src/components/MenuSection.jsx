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
    <section id="menu" className="py-24 bg-[#120D0A] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 mb-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 inline-block border border-emerald-300" />
            <span className="text-xs uppercase font-bold tracking-[0.25em] text-[#E07A2B]">
              100% Pure Vegetarian Heritage
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-medium text-[#FBF7EE] mt-2 mb-4">
            Shudh Desi Swad (शुद्ध शाकाहारी)
          </h2>
          <div className="w-16 h-0.5 bg-[#E07A2B] mx-auto mb-4" />
          <p className="text-sm sm:text-base text-[#DFD5C2]/75">
            Royal Thalis, Awadhi curries, Banarasi Chaat, and live Tandoor clay oven breads made with pure cow ghee.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex items-center justify-start sm:justify-center overflow-x-auto pb-4 mb-12 no-scrollbar gap-2 sm:gap-3">
          {RESTAURANT_CONFIG.categories.map((category) => {
            const isActive = activeCategory === category;
            return (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`whitespace-nowrap px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-200 cursor-pointer border ${
                  isActive
                    ? 'bg-[#E07A2B] text-[#120D0A] border-[#E07A2B] shadow-md shadow-[#E07A2B]/20'
                    : 'bg-[#1C1410] text-[#DFD5C2] border-[#3D2B20] hover:border-[#E07A2B]/50 hover:text-white'
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredItems.map((product) => (
            <FoodCard key={product.id} product={product} />
          ))}
        </div>

        {/* Empty state safeguard */}
        {filteredItems.length === 0 && (
          <div className="text-center py-16 bg-[#1C1410] rounded-xl border border-[#3D2B20]">
            <p className="text-base text-[#DFD5C2]">No dishes found in this category.</p>
            <button
              onClick={() => setActiveCategory("All")}
              className="mt-4 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-[#120D0A] bg-[#E07A2B] rounded-sm"
            >
              View Full Menu
            </button>
          </div>
        )}

      </div>
    </section>
  );
};
