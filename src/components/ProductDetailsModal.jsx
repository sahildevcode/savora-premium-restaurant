import React, { useState } from 'react';
import { X, Plus, Minus, ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { RESTAURANT_CONFIG } from '../restaurantConfig';

export const ProductDetailsModal = () => {
  const { selectedProduct, setSelectedProduct, addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [addedNotice, setAddedNotice] = useState(false);

  if (!selectedProduct) return null;

  const handleAddToCart = () => {
    addToCart(selectedProduct, quantity);
    setAddedNotice(true);
    setTimeout(() => {
      setAddedNotice(false);
      setSelectedProduct(null);
      setQuantity(1);
    }, 600);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      onClick={() => {
        setSelectedProduct(null);
        setQuantity(1);
      }}
      className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-3.5 sm:p-6 animate-in fade-in duration-200"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative max-w-xl w-full bg-[#180B0D] rounded-2xl overflow-hidden border border-[#4A1D24] shadow-2xl flex flex-col max-h-[90vh]"
      >
        {/* Close Button */}
        <button
          onClick={() => {
            setSelectedProduct(null);
            setQuantity(1);
          }}
          className="absolute top-3 right-3 z-10 p-2 rounded-full bg-[#180B0D]/80 hover:bg-[#E11D48] text-white border border-[#4A1D24] transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Scrollable Modal Content */}
        <div className="overflow-y-auto">
          {/* Header Image */}
          <div className="relative aspect-16/9 w-full bg-[#221013]">
            <img
              src={selectedProduct.image}
              alt={selectedProduct.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#180B0D] via-transparent to-transparent" />
            
            <div className="absolute bottom-3 left-4 flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#180B0D]/90 backdrop-blur-sm border border-[#4A1D24] text-xs font-semibold text-[#FB7185]">
              <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block border border-emerald-300" />
              <span>{selectedProduct.dietary || "100% Pure Veg"}</span>
            </div>
          </div>

          {/* Details Body */}
          <div className="p-5 sm:p-7 space-y-4 sm:space-y-5">
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1.5">
              <div>
                <span className="text-[10px] uppercase font-bold tracking-widest text-[#FB7185]">
                  {selectedProduct.category}
                </span>
                <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#FFF5F5] mt-0.5">
                  {selectedProduct.name}
                </h3>
              </div>
              <span className="text-xl sm:text-2xl font-serif font-bold text-[#F59E0B]">
                ₹{selectedProduct.price}
              </span>
            </div>

            <p className="text-xs sm:text-sm text-[#E2D1D4]/85 leading-relaxed">
              {selectedProduct.fullDescription || selectedProduct.shortDescription}
            </p>

            {/* Ingredients */}
            {selectedProduct.ingredients && selectedProduct.ingredients.length > 0 && (
              <div>
                <h4 className="text-[11px] font-bold uppercase tracking-wider text-[#E2D1D4]/70 mb-2">
                  Key Spices & Ingredients:
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {selectedProduct.ingredients.map((ing, i) => (
                    <span
                      key={i}
                      className="text-[10px] sm:text-xs px-2.5 py-1 rounded-sm bg-[#221013] border border-[#4A1D24] text-[#E2D1D4]"
                    >
                      {ing}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity Selector & Add To Cart Bar */}
            <div className="pt-3 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
              <div className="flex items-center justify-between sm:justify-start gap-4 p-1 rounded-lg bg-[#221013] border border-[#4A1D24]">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-2 rounded-md hover:bg-[#2B161A] text-white transition-colors cursor-pointer"
                  aria-label="Decrease quantity"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="text-xs sm:text-sm font-bold text-white px-2">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-2 rounded-md hover:bg-[#2B161A] text-white transition-colors cursor-pointer"
                  aria-label="Increase quantity"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>

              <button
                onClick={handleAddToCart}
                className="grow inline-flex items-center justify-center gap-2 py-3 px-5 rounded-lg bg-gradient-to-r from-[#E11D48] to-[#BE123C] hover:from-[#BE123C] text-white font-semibold text-xs uppercase tracking-wider transition-all shadow-md active:scale-98"
              >
                <ShoppingBag className="w-4 h-4" />
                {addedNotice ? 'Added To Order!' : `Add To Order • ₹${selectedProduct.price * quantity}`}
              </button>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};
