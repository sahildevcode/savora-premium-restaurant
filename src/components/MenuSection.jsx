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
    <section id="menu" className="py-24 bg-[#0D0F12] relative">
      {/* Decorative ambient elements */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs uppercase font-bold tracking-[0.25em] text-[#E58A38]">
            Culinary Offerings
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-medium text-[#F7F4EE] mt-2 mb-4">
            Our Seasonal Menu
          </h2>
          <div className="w-12 h-0.5 bg-[#E58A38] mx-auto mb-4" />
          <p className="text-sm sm:text-base text-[#D8D2C4]/70">
            Carefully curated dishes celebrating regional farmers, heritage grains, and wood-fired preparations.
          </p>
        </div>

        {/* Category Filter Pills (Horizontally scrollable on mobile) */}
        <div className="flex items-center justify-start sm:justify-center overflow-x-auto pb-4 mb-12 no-scrollbar gap-2 sm:gap-3">
          {RESTAURANT_CONFIG.categories.map((category) => {
            const isActive = activeCategory === category;
            return (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`whitespace-nowrap px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-200 cursor-pointer border ${
                  isActive
                    ? 'bg-[#E58A38] text-[#0D0F12] border-[#E58A38] shadow-md shadow-[#E58A38]/20'
                    : 'bg-[#171A21] text-[#D8D2C4] border-[#2C3240] hover:border-[#E58A38]/50 hover:text-white'
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
          <div className="text-center py-16 bg-[#171A21] rounded-xl border border-[#2C3240]">
            <p className="text-base text-[#D8D2C4]">No dishes found in this category.</p>
            <button
              onClick={() => setActiveCategory("All")}
              className="mt-4 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-[#0D0F12] bg-[#E58A38] rounded-sm"
            >
              View Full Menu
            </button>
          </div>
        )}

      </div>
    </section>
  );
};
