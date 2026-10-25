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
      className="group relative bg-[#1C1410] rounded-xl overflow-hidden border border-[#3D2B20] hover:border-[#E07A2B]/60 transition-all duration-300 flex flex-col justify-between hover:-translate-y-1 hover:shadow-xl hover:shadow-[#120D0A]/80"
    >
      {/* Food Image Container */}
      <div className="relative aspect-4/3 w-full overflow-hidden bg-[#241B16]">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-500 ease-out"
        />

        {/* Veg Dot Badge (Always for Pure Veg) */}
        <div className="absolute top-3 left-3 flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#120D0A]/85 backdrop-blur-sm border border-[#3D2B20] text-[10px] font-semibold text-[#DFD5C2]">
          <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block border border-emerald-300" />
          <span>{product.dietary || "Pure Veg"}</span>
        </div>

        {/* Quick View Button Overlay */}
        <button
          onClick={() => setSelectedProduct(product)}
          className="absolute bottom-3 right-3 p-2 rounded-full bg-[#120D0A]/80 hover:bg-[#E07A2B] text-white hover:text-[#120D0A] backdrop-blur-sm border border-[#3D2B20] opacity-0 group-hover:opacity-100 transition-all duration-200 cursor-pointer shadow-md"
          title="View Details"
          aria-label={`View details of ${product.name}`}
        >
          <Eye className="w-4 h-4" />
        </button>
      </div>

      {/* Content Details */}
      <div className="p-5 flex flex-col grow justify-between">
        <div>
          <div className="flex items-start justify-between gap-2 mb-2">
            <h3
              onClick={() => setSelectedProduct(product)}
              className="text-base font-serif font-bold text-[#FBF7EE] group-hover:text-[#E8B358] transition-colors cursor-pointer line-clamp-1"
            >
              {product.name}
            </h3>
            <span className="text-base font-serif font-bold text-[#E8B358] shrink-0">
              ₹{product.price}
            </span>
          </div>

          <p className="text-xs text-[#DFD5C2]/70 leading-relaxed line-clamp-2 mb-4">
            {product.shortDescription}
          </p>
        </div>

        {/* Action Row */}
        <div className="pt-3 border-t border-[#3D2B20]/60 flex items-center justify-between gap-2 mt-auto">
          <button
            onClick={() => setSelectedProduct(product)}
            className="text-[11px] font-medium uppercase tracking-wider text-[#DFD5C2]/70 hover:text-[#E07A2B] transition-colors cursor-pointer"
          >
            Recipe & Details
          </button>

          <button
            onClick={() => addToCart(product, 1)}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-[#241B16] hover:bg-[#E07A2B] text-[#FBF7EE] hover:text-[#120D0A] border border-[#3D2B20] hover:border-[#E07A2B] text-xs font-semibold rounded-sm transition-all duration-200 cursor-pointer"
          >
            <Plus className="w-3.5 h-3.5" />
            Add To Thali
          </button>
        </div>
      </div>
    </div>
  );
};
