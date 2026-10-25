import React, { useRef, useEffect } from 'react';
import { Plus, Eye, Sparkles } from 'lucide-react';
import { useCart } from '../context/CartContext';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const FoodCard = ({ product }) => {
  const { addToCart, setSelectedProduct } = useCart();
  const cardRef = useRef(null);

  return (
    <div
      ref={cardRef}
      className="group relative bg-[#171A21] rounded-xl overflow-hidden border border-[#2C3240] hover:border-[#E58A38]/60 transition-all duration-300 flex flex-col justify-between hover:-translate-y-1 hover:shadow-xl hover:shadow-[#0D0F12]/80"
    >
      {/* Food Image Container */}
      <div className="relative aspect-4/3 w-full overflow-hidden bg-[#1C2029]">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-500 ease-out"
        />

        {/* Dietary or Chef Badge */}
        {product.dietary && (
          <div className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-[#0D0F12]/80 backdrop-blur-sm border border-[#2C3240] text-[10px] font-semibold uppercase tracking-wider text-[#F3B367]">
            {product.dietary}
          </div>
        )}

        {/* Quick View Button Overlay */}
        <button
          onClick={() => setSelectedProduct(product)}
          className="absolute bottom-3 right-3 p-2 rounded-full bg-[#0D0F12]/80 hover:bg-[#E58A38] text-white hover:text-[#0D0F12] backdrop-blur-sm border border-[#2C3240] opacity-0 group-hover:opacity-100 transition-all duration-200 cursor-pointer shadow-md"
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
              className="text-base font-serif font-bold text-[#F7F4EE] group-hover:text-[#F3B367] transition-colors cursor-pointer line-clamp-1"
            >
              {product.name}
            </h3>
            <span className="text-base font-serif font-bold text-[#E58A38] shrink-0">
              ${product.price}
            </span>
          </div>

          <p className="text-xs text-[#D8D2C4]/70 leading-relaxed line-clamp-2 mb-4">
            {product.shortDescription}
          </p>
        </div>

        {/* Action Row */}
        <div className="pt-3 border-t border-[#2C3240]/60 flex items-center justify-between gap-2 mt-auto">
          <button
            onClick={() => setSelectedProduct(product)}
            className="text-[11px] font-medium uppercase tracking-wider text-[#D8D2C4]/70 hover:text-[#E58A38] transition-colors cursor-pointer"
          >
            Details
          </button>

          <button
            onClick={() => addToCart(product, 1)}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#1C2029] hover:bg-[#E58A38] text-[#F7F4EE] hover:text-[#0D0F12] border border-[#2C3240] hover:border-[#E58A38] text-xs font-semibold rounded-sm transition-all duration-200 cursor-pointer"
          >
            <Plus className="w-3.5 h-3.5" />
            Add
          </button>
        </div>
      </div>
    </div>
  );
};
