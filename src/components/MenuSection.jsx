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
    <section id="menu" className="py-20 sm:py-24 bg-[#240B10] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 mb-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block border border-emerald-300" />
            <span className="text-[11px] sm:text-xs uppercase font-bold tracking-[0.25em] text-[#C99B52]">
              100% Pure Vegetarian Fine Dining
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-medium text-[#FFF2E8] mt-1 mb-3">
            Royal Feast & Menu
          </h2>
          <div className="w-16 h-0.5 bg-gradient-to-r from-[#C99B52] to-[#DFC08A] mx-auto mb-3" />
          <p className="text-xs sm:text-base text-[#C9B8B8] font-light">
            Slow-simmered handi gravies, Awadhi kebabs, crisp Dahi Ke Shole, and clay tandoor delicacies.
          </p>
        </div>

        {/* Category Filter Pills with Gold Borders */}
        <div className="flex items-center justify-start sm:justify-center overflow-x-auto pb-3 mb-8 sm:mb-12 no-scrollbar gap-2 sm:gap-3 px-1 -mx-4 sm:mx-0 pl-4 sm:pl-0">
          {RESTAURANT_CONFIG.categories.map((category) => {
            const isActive = activeCategory === category;
            return (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`whitespace-nowrap px-4 py-2 rounded-full text-[11px] sm:text-xs font-semibold uppercase tracking-wider transition-all duration-200 cursor-pointer border shrink-0 ${
                  isActive
                    ? 'bg-gradient-to-r from-[#C99B52] via-[#DFC08A] to-[#C99B52] text-[#240B10] border-[#C99B52] shadow-lg shadow-[#C99B52]/25 font-bold scale-102'
                    : 'bg-[#310D16] text-[#C9B8B8] border-[#C99B52]/20 hover:border-[#C99B52] hover:text-[#FFF2E8]'
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
          {filteredItems.map((product) => (
            <FoodCard key={product.id} product={product} />
          ))}
        </div>

        {/* Empty State */}
        {filteredItems.length === 0 && (
          <div className="text-center py-16 bg-[#310D16] rounded-xl border border-[#C99B52]/30">
            <p className="text-sm text-[#C9B8B8]">No dishes found in this category.</p>
            <button
              onClick={() => setActiveCategory("All")}
              className="mt-4 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-[#240B10] bg-[#C99B52] rounded-sm"
            >
              View Full Menu
            </button>
          </div>
        )}

      </div>
    </section>
  );
};
