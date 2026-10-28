import React, { useRef } from 'react';
import { Plus, Eye } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { RESTAURANT_CONFIG } from '../restaurantConfig';

export const FoodCard = ({ product }) => {
  const { addToCart, setSelectedProduct } = useCart();
  const cardRef = useRef(null);

  return (
    <div
      ref={cardRef}
      className="group relative bg-[#221013] rounded-xl overflow-hidden border border-[#4A1D24] hover:border-[#E11D48]/70 transition-all duration-300 flex flex-col justify-between hover:-translate-y-1 hover:shadow-xl hover:shadow-black/70"
    >
      {/* Food Image Container */}
      <div className="relative aspect-4/3 w-full overflow-hidden bg-[#2B161A]">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-500 ease-out"
        />

        {/* Veg Dot Badge */}
        <div className="absolute top-2.5 left-2.5 flex items-center gap-1.5 px-2 py-0.5 sm:py-1 rounded-md bg-[#180B0D]/90 backdrop-blur-sm border border-[#4A1D24] text-[9px] sm:text-[10px] font-semibold text-[#E2D1D4]">
          <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block border border-emerald-300" />
          <span>{product.dietary || "Pure Veg"}</span>
        </div>

        {/* Quick View Button */}
        <button
          onClick={() => setSelectedProduct(product)}
          className="absolute bottom-2.5 right-2.5 p-2 rounded-full bg-[#180B0D]/90 hover:bg-[#E11D48] text-white hover:text-white backdrop-blur-sm border border-[#4A1D24] sm:opacity-0 sm:group-hover:opacity-100 transition-all duration-200 cursor-pointer shadow-md"
          title="View Recipe Details"
          aria-label={`View details of ${product.name}`}
        >
          <Eye className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* Content Details */}
      <div className="p-4 sm:p-5 flex flex-col grow justify-between">
        <div>
          <div className="flex items-start justify-between gap-2 mb-1.5">
            <h3
              onClick={() => setSelectedProduct(product)}
              className="text-sm sm:text-base font-serif font-bold text-[#FFF5F5] group-hover:text-[#FB7185] transition-colors cursor-pointer line-clamp-1"
            >
              {product.name}
            </h3>
            <span className="text-sm sm:text-base font-serif font-bold text-[#F59E0B] shrink-0">
              ₹{product.price}
            </span>
          </div>

          <p className="text-[11px] sm:text-xs text-[#E2D1D4]/75 leading-relaxed line-clamp-2 mb-3 sm:mb-4">
            {product.shortDescription}
          </p>
        </div>

        {/* Action Row */}
        <div className="pt-2.5 sm:pt-3 border-t border-[#4A1D24]/60 flex items-center justify-between gap-2 mt-auto">
          <button
            onClick={() => setSelectedProduct(product)}
            className="text-[10px] sm:text-[11px] font-medium uppercase tracking-wider text-[#E2D1D4]/70 hover:text-[#FB7185] transition-colors cursor-pointer py-1"
          >
            Details
          </button>

          <button
            onClick={() => addToCart(product, 1)}
            className="inline-flex items-center gap-1 px-3 py-1.5 bg-[#2B161A] hover:bg-[#E11D48] text-[#FFF5F5] hover:text-white border border-[#4A1D24] hover:border-[#E11D48] text-[11px] sm:text-xs font-semibold rounded-sm transition-all duration-200 cursor-pointer active:scale-95 shadow-xs"
          >
            <Plus className="w-3.5 h-3.5" />
            Add To Order
          </button>
        </div>
      </div>
    </div>
  );
};
