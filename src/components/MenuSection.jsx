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
    <section id="menu" className="py-24 bg-[#0C120C] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 mb-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 inline-block border border-emerald-300" />
            <span className="text-xs uppercase font-bold tracking-[0.25em] text-[#34D399]">
              100% Pure Vegetarian Fine Dining
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-medium text-[#F5F8F3] mt-2 mb-4">
            Tezpatta Rasoi & Menu (मेन्यू)
          </h2>
          <div className="w-16 h-0.5 bg-[#D97706] mx-auto mb-4" />
          <p className="text-sm sm:text-base text-[#D1DCD0]/75">
            North Indian curries, Awadhi tikkas, Dahi Ke Shole, and Indo-Chinese specialties prepared with aromatic whole spices.
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
                    ? 'bg-[#D97706] text-[#0C120C] border-[#D97706] shadow-md shadow-[#D97706]/20'
                    : 'bg-[#141D14] text-[#D1DCD0] border-[#2A3A2A] hover:border-[#34D399]/50 hover:text-white'
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
          <div className="text-center py-16 bg-[#141D14] rounded-xl border border-[#2A3A2A]">
            <p className="text-base text-[#D1DCD0]">No dishes found in this category.</p>
            <button
              onClick={() => setActiveCategory("All")}
              className="mt-4 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-[#0C120C] bg-[#D97706] rounded-sm"
            >
              View Full Menu
            </button>
          </div>
        )}

      </div>
    </section>
  );
};
