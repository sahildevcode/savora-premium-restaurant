import React, { useState } from 'react';
import { X, Trash2, Plus, Minus, ShoppingBag, ArrowRight, CheckCircle2 } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { RESTAURANT_CONFIG } from '../restaurantConfig';

export const CartDrawer = () => {
  const {
    isCartOpen,
    setIsCartOpen,
    cartItems,
    addToCart,
    decrementQuantity,
    removeFromCart,
    clearCart,
    subtotal,
  } = useCart();

  const [checkoutModalOpen, setCheckoutModalOpen] = useState(false);
  const [customerName, setCustomerName] = useState('');
  const [tableOrDelivery, setTableOrDelivery] = useState('Dine-In Table');
  const [orderConfirmed, setOrderConfirmed] = useState(false);

  if (!isCartOpen) return null;

  const handleCheckoutSubmit = (e) => {
    e.preventDefault();
    setOrderConfirmed(true);
    setTimeout(() => {
      clearCart();
      setOrderConfirmed(false);
      setCheckoutModalOpen(false);
      setIsCartOpen(false);
    }, 2200);
  };

  const gstTax = subtotal * 0.05; // 5% GST for Indian Restaurants
  const grandTotal = subtotal + gstTax;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 overflow-hidden bg-[#120D0A]/80 backdrop-blur-xs transition-opacity duration-300"
    >
      <div className="absolute inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#1C1410] border-l border-[#3D2B20] shadow-2xl flex flex-col">
          
          {/* Drawer Header */}
          <div className="p-6 border-b border-[#3D2B20] flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-full bg-[#241B16] text-[#E07A2B]">
                <ShoppingBag className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-lg font-serif font-bold text-white">Your Bhojan Thali</h2>
                <span className="text-xs text-[#DFD5C2]/60">
                  {cartItems.length} {cartItems.length === 1 ? 'dish' : 'dishes'} selected (Pure Veg)
                </span>
              </div>
            </div>

            <button
              onClick={() => setIsCartOpen(false)}
              className="p-2 rounded-full text-[#DFD5C2] hover:text-white hover:bg-[#241B16] transition-colors"
              aria-label="Close cart"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Cart Items List */}
          <div className="grow overflow-y-auto p-6 space-y-4">
            {cartItems.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-16 space-y-4">
                <div className="w-16 h-16 rounded-full bg-[#241B16] border border-[#3D2B20] flex items-center justify-center text-[#DFD5C2]/50">
                  <ShoppingBag className="w-8 h-8" />
                </div>
                <h3 className="text-base font-serif font-bold text-white">Thali Khali Hai</h3>
                <p className="text-xs text-[#DFD5C2]/70 max-w-xs leading-relaxed">
                  Explore our pure-veg menu to add Maharaja Thalis, Dal Maatribhoomi, Chaat, and Hot Jalebis.
                </p>
                <button
                  onClick={() => setIsCartOpen(false)}
                  className="mt-2 px-5 py-2.5 bg-[#E07A2B] hover:bg-[#E8B358] text-[#120D0A] text-xs font-semibold uppercase tracking-wider rounded-sm transition-all cursor-pointer"
                >
                  Explore Menu
                </button>
              </div>
            ) : (
              cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center gap-4 p-3.5 rounded-xl bg-[#241B16] border border-[#3D2B20]/80"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-16 rounded-lg object-cover bg-[#120D0A] shrink-0"
                  />

                  <div className="grow min-w-0">
                    <h4 className="text-sm font-serif font-bold text-white truncate">
                      {item.name}
                    </h4>
                    <span className="text-xs text-[#E8B358] font-medium">
                      ₹{item.price} each
                    </span>

                    <div className="flex items-center gap-3 mt-2">
                      <div className="flex items-center border border-[#3D2B20] rounded-sm bg-[#1C1410]">
                        <button
                          onClick={() => decrementQuantity(item.id)}
                          className="px-2 py-1 text-xs text-[#DFD5C2] hover:text-white"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="px-2 text-xs font-bold text-white">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => addToCart(item, 1)}
                          className="px-2 py-1 text-xs text-[#DFD5C2] hover:text-white"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>

                      <span className="text-xs font-bold text-[#FBF7EE]">
                        ₹{(item.price * item.quantity).toFixed(0)}
                      </span>
                    </div>
                  </div>

                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="p-2 text-[#DFD5C2]/50 hover:text-rose-400 transition-colors"
                    aria-label={`Remove ${item.name}`}
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              ))
            )}
          </div>

          {/* Drawer Footer with Subtotals */}
          {cartItems.length > 0 && (
            <div className="p-6 border-t border-[#3D2B20] bg-[#1C1410] space-y-4">
              <div className="space-y-2 text-xs text-[#DFD5C2]">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="text-white font-medium">₹{subtotal.toFixed(0)}</span>
                </div>
                <div className="flex justify-between">
                  <span>GST (5% Restaurant)</span>
                  <span className="text-white font-medium">₹{gstTax.toFixed(0)}</span>
                </div>
                <div className="flex justify-between pt-2 border-t border-[#3D2B20] text-sm font-serif font-bold text-[#FBF7EE]">
                  <span>Total Amount</span>
                  <span className="text-lg text-[#E8B358]">₹{grandTotal.toFixed(0)}</span>
                </div>
              </div>

              <div className="space-y-2 pt-2">
                <button
                  onClick={() => setCheckoutModalOpen(true)}
                  className="w-full py-3.5 bg-[#E07A2B] hover:bg-[#E8B358] text-[#120D0A] font-semibold text-xs uppercase tracking-wider rounded-sm transition-all duration-200 flex items-center justify-center gap-2 shadow-md hover:shadow-[#E07A2B]/30 cursor-pointer"
                >
                  <span>Order Table Service</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={clearCart}
                  className="w-full py-2 text-center text-xs font-medium text-[#DFD5C2]/60 hover:text-rose-400 transition-colors cursor-pointer"
                >
                  Clear Thali
                </button>
              </div>
            </div>
          )}

        </div>
      </div>

      {/* Checkout Modal */}
      {checkoutModalOpen && (
        <div
          role="dialog"
          aria-modal="true"
          onClick={() => setCheckoutModalOpen(false)}
          className="fixed inset-0 z-60 bg-[#120D0A]/90 backdrop-blur-md flex items-center justify-center p-4"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="max-w-md w-full bg-[#1C1410] rounded-2xl border border-[#3D2B20] p-6 shadow-2xl relative"
          >
            <button
              onClick={() => setCheckoutModalOpen(false)}
              className="absolute top-4 right-4 p-2 text-[#DFD5C2] hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>

            {orderConfirmed ? (
              <div className="text-center py-8 space-y-4">
                <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto animate-bounce" />
                <h3 className="text-xl font-serif font-bold text-white">Aapka Order Place Ho Gaya Hai</h3>
                <p className="text-xs text-[#DFD5C2] leading-relaxed">
                  Dhanyawaad, <strong className="text-white">{customerName || 'Atithi'}</strong>! Total amount <strong className="text-[#E07A2B]">₹{grandTotal.toFixed(0)}</strong> kitchen me bhej diya gaya hai.
                </p>
              </div>
            ) : (
              <div>
                <h3 className="text-lg font-serif font-bold text-white mb-2">Dine-In & Takeaway Order</h3>
                <p className="text-xs text-[#DFD5C2]/70 mb-4">
                  Table number ya delivery preference select karein.
                </p>

                <form onSubmit={handleCheckoutSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs uppercase font-medium text-[#DFD5C2] mb-1">
                      Dining Type
                    </label>
                    <select
                      value={tableOrDelivery}
                      onChange={(e) => setTableOrDelivery(e.target.value)}
                      className="w-full bg-[#241B16] border border-[#3D2B20] rounded-sm px-3 py-2 text-sm text-white"
                    >
                      <option value="Dine-In Table">Table Service (Dine-In)</option>
                      <option value="Family Hall">Family Banquet Hall</option>
                      <option value="Takeaway Parcel">Fresh Parcel / Takeaway</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs uppercase font-medium text-[#DFD5C2] mb-1">
                      Guest Name / Table # *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Table 6 or Sharma Ji"
                      value={customerName}
                      onChange={(e) => setCustomerName(e.target.value)}
                      className="w-full bg-[#241B16] border border-[#3D2B20] rounded-sm px-3 py-2 text-sm text-white"
                    />
                  </div>

                  <div className="p-3 bg-[#241B16] rounded-lg border border-[#3D2B20] flex justify-between items-center text-sm font-semibold">
                    <span className="text-[#DFD5C2]">Total Payable:</span>
                    <span className="text-[#E8B358] text-base">₹{grandTotal.toFixed(0)}</span>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 bg-[#E07A2B] hover:bg-[#E8B358] text-[#120D0A] font-semibold text-xs uppercase tracking-wider rounded-sm transition-all shadow-md"
                  >
                    Confirm Bhojan Order
                  </button>
                </form>
              </div>
            )}

          </div>
        </div>
      )}
    </div>
  );
};
