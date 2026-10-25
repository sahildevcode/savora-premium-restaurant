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
      className="fixed inset-0 z-50 bg-[#120D0A]/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative max-w-2xl w-full bg-[#1C1410] rounded-2xl overflow-hidden border border-[#3D2B20] shadow-2xl flex flex-col max-h-[90vh]"
      >
        {/* Close Button */}
        <button
          onClick={() => {
            setSelectedProduct(null);
            setQuantity(1);
          }}
          className="absolute top-4 right-4 z-10 p-2.5 rounded-full bg-[#120D0A]/80 hover:bg-[#E07A2B] text-white hover:text-[#120D0A] border border-[#3D2B20] transition-colors cursor-pointer"
          aria-label="Close product modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Scrollable Modal Content */}
        <div className="overflow-y-auto">
          {/* Header Image */}
          <div className="relative aspect-16/9 w-full bg-[#241B16]">
            <img
              src={selectedProduct.image}
              alt={selectedProduct.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1C1410] via-transparent to-transparent" />
            
            <div className="absolute bottom-4 left-6 flex items-center gap-2 px-3 py-1 rounded-md bg-[#120D0A]/85 backdrop-blur-sm border border-[#3D2B20] text-xs font-semibold text-[#E8B358]">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 inline-block border border-emerald-300" />
              <span>{selectedProduct.dietary || "100% Pure Veg"}</span>
            </div>
          </div>

          {/* Details Body */}
          <div className="p-6 sm:p-8 space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
              <div>
                <span className="text-xs uppercase font-bold tracking-widest text-[#E07A2B]">
                  {selectedProduct.category}
                </span>
                <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#FBF7EE] mt-1">
                  {selectedProduct.name}
                </h3>
              </div>
              <span className="text-2xl sm:text-3xl font-serif font-bold text-[#E8B358]">
                ₹{selectedProduct.price}
              </span>
            </div>

            <p className="text-sm text-[#DFD5C2]/85 leading-relaxed">
              {selectedProduct.fullDescription || selectedProduct.shortDescription}
            </p>

            {/* Ingredients & Prep Details */}
            {selectedProduct.ingredients && selectedProduct.ingredients.length > 0 && (
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#DFD5C2]/70 mb-2">
                  Heritage Ingredients & Tadka:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProduct.ingredients.map((ing, i) => (
                    <span
                      key={i}
                      className="text-xs px-2.5 py-1 rounded-sm bg-[#241B16] border border-[#3D2B20] text-[#DFD5C2]"
                    >
                      {ing}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Prep Time & Calories if provided */}
            <div className="flex items-center gap-6 pt-4 border-t border-[#3D2B20] text-xs text-[#DFD5C2]/70">
              {selectedProduct.calories && (
                <div>
                  <span className="text-[#DFD5C2]/50 block">Poshan (Calories)</span>
                  <span className="font-semibold text-white">{selectedProduct.calories}</span>
                </div>
              )}
              {selectedProduct.prepTime && (
                <div>
                  <span className="text-[#DFD5C2]/50 block">Rasoi Preparation</span>
                  <span className="font-semibold text-white">{selectedProduct.prepTime}</span>
                </div>
              )}
            </div>

            {/* Quantity Selector & Add To Cart Bar */}
            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
              <div className="flex items-center justify-between sm:justify-start gap-4 p-1.5 rounded-lg bg-[#241B16] border border-[#3D2B20]">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-2 rounded-md hover:bg-[#3D2B20] text-white transition-colors cursor-pointer"
                  aria-label="Decrease quantity"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="text-sm font-bold text-white px-3">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-2 rounded-md hover:bg-[#3D2B20] text-white transition-colors cursor-pointer"
                  aria-label="Increase quantity"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>

              <button
                onClick={handleAddToCart}
                className="grow inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-sm bg-[#E07A2B] hover:bg-[#E8B358] text-[#120D0A] font-semibold text-xs uppercase tracking-wider transition-all shadow-md hover:shadow-[#E07A2B]/30 cursor-pointer"
              >
                <ShoppingBag className="w-4 h-4" />
                {addedNotice ? 'Thali Mein Shamil Kiya!' : `Add To Thali • ₹${selectedProduct.price * quantity}`}
              </button>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};
