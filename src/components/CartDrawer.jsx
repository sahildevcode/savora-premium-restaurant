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

  const gstTax = subtotal * 0.05; // 5% GST
  const grandTotal = subtotal + gstTax;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 overflow-hidden bg-black/85 backdrop-blur-xs transition-opacity duration-300"
    >
      <div className="absolute inset-y-0 right-0 max-w-full flex pl-6 sm:pl-10">
        <div className="w-screen max-w-md bg-[#180B0D] border-l border-[#4A1D24] shadow-2xl flex flex-col">
          
          {/* Drawer Header */}
          <div className="p-4 sm:p-6 border-b border-[#4A1D24] flex items-center justify-between bg-[#221013]">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-full bg-[#2B161A] text-[#FB7185]">
                <ShoppingBag className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-base sm:text-lg font-serif font-bold text-white">Your Food Order</h2>
                <span className="text-[11px] text-[#E2D1D4]/60">
                  {cartItems.length} {cartItems.length === 1 ? 'item' : 'items'} selected (Pure Veg)
                </span>
              </div>
            </div>

            <button
              onClick={() => setIsCartOpen(false)}
              className="p-2 rounded-full text-[#E2D1D4] hover:text-white hover:bg-[#2B161A] transition-colors"
              aria-label="Close cart"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Cart Items List */}
          <div className="grow overflow-y-auto p-4 sm:p-6 space-y-3 sm:space-y-4">
            {cartItems.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-16 space-y-4">
                <div className="w-16 h-16 rounded-full bg-[#221013] border border-[#4A1D24] flex items-center justify-center text-[#E2D1D4]/50">
                  <ShoppingBag className="w-8 h-8" />
                </div>
                <h3 className="text-base font-serif font-bold text-white">Your Order Is Empty</h3>
                <p className="text-xs text-[#E2D1D4]/70 max-w-xs leading-relaxed">
                  Explore our pure-veg menu to add Handi Paneer, Dal Makhani, Dahi Ke Shole & Garlic Naan.
                </p>
                <button
                  onClick={() => setIsCartOpen(false)}
                  className="mt-2 px-5 py-2.5 bg-gradient-to-r from-[#E11D48] to-[#BE123C] text-white text-xs font-semibold uppercase tracking-wider rounded-lg transition-all cursor-pointer shadow-md"
                >
                  Explore Menu
                </button>
              </div>
            ) : (
              cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center gap-3 sm:gap-4 p-3 rounded-xl bg-[#221013] border border-[#4A1D24]"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-14 h-14 sm:w-16 sm:h-16 rounded-lg object-cover bg-[#180B0D] shrink-0"
                  />

                  <div className="grow min-w-0">
                    <h4 className="text-xs sm:text-sm font-serif font-bold text-white truncate">
                      {item.name}
                    </h4>
                    <span className="text-[11px] sm:text-xs text-[#F59E0B] font-medium">
                      ₹{item.price} each
                    </span>

                    <div className="flex items-center gap-2.5 mt-1.5">
                      <div className="flex items-center border border-[#4A1D24] rounded-md bg-[#180B0D]">
                        <button
                          onClick={() => decrementQuantity(item.id)}
                          className="px-2 py-1 text-xs text-[#E2D1D4] hover:text-white"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="px-2 text-xs font-bold text-white">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => addToCart(item, 1)}
                          className="px-2 py-1 text-xs text-[#E2D1D4] hover:text-white"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>

                      <span className="text-xs font-bold text-[#FFF5F5]">
                        ₹{(item.price * item.quantity).toFixed(0)}
                      </span>
                    </div>
                  </div>

                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="p-1.5 text-[#E2D1D4]/50 hover:text-rose-400 transition-colors"
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
            <div className="p-4 sm:p-6 border-t border-[#4A1D24] bg-[#221013] space-y-3 sm:space-y-4">
              <div className="space-y-1.5 text-xs text-[#E2D1D4]">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="text-white font-medium">₹{subtotal.toFixed(0)}</span>
                </div>
                <div className="flex justify-between">
                  <span>GST (5% Restaurant)</span>
                  <span className="text-white font-medium">₹{gstTax.toFixed(0)}</span>
                </div>
                <div className="flex justify-between pt-2 border-t border-[#4A1D24] text-sm font-serif font-bold text-[#FFF5F5]">
                  <span>Total Amount</span>
                  <span className="text-lg text-[#F59E0B]">₹{grandTotal.toFixed(0)}</span>
                </div>
              </div>

              <div className="space-y-2 pt-1">
                <button
                  onClick={() => setCheckoutModalOpen(true)}
                  className="w-full py-3.5 bg-gradient-to-r from-[#E11D48] to-[#BE123C] hover:from-[#BE123C] hover:to-[#9F1239] text-white font-semibold text-xs uppercase tracking-wider rounded-lg transition-all duration-200 flex items-center justify-center gap-2 shadow-lg shadow-[#E11D48]/30 cursor-pointer active:scale-98"
                >
                  <span>Confirm Dine-In / Takeaway</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={clearCart}
                  className="w-full py-1 text-center text-xs font-medium text-[#E2D1D4]/60 hover:text-rose-400 transition-colors cursor-pointer"
                >
                  Clear Order
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
          className="fixed inset-0 z-60 bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="max-w-md w-full bg-[#180B0D] rounded-2xl border border-[#4A1D24] p-5 sm:p-6 shadow-2xl relative"
          >
            <button
              onClick={() => setCheckoutModalOpen(false)}
              className="absolute top-4 right-4 p-2 text-[#E2D1D4] hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>

            {orderConfirmed ? (
              <div className="text-center py-6 space-y-3">
                <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto animate-bounce" />
                <h3 className="text-lg sm:text-xl font-serif font-bold text-white">Order Placed Successfully</h3>
                <p className="text-xs text-[#E2D1D4] leading-relaxed">
                  Thank you, <strong className="text-white">{customerName || 'Guest'}</strong>! Your order of <strong className="text-[#F59E0B]">₹{grandTotal.toFixed(0)}</strong> has been sent to our kitchen.
                </p>
              </div>
            ) : (
              <div>
                <h3 className="text-base sm:text-lg font-serif font-bold text-white mb-1">Place Order</h3>
                <p className="text-xs text-[#E2D1D4]/70 mb-4">
                  Select dining preference and specify your name or table number.
                </p>

                <form onSubmit={handleCheckoutSubmit} className="space-y-3.5">
                  <div>
                    <label className="block text-[11px] uppercase font-medium text-[#E2D1D4] mb-1">
                      Dining Type
                    </label>
                    <select
                      value={tableOrDelivery}
                      onChange={(e) => setTableOrDelivery(e.target.value)}
                      className="w-full bg-[#221013] border border-[#4A1D24] rounded-lg px-3 py-2 text-xs sm:text-sm text-white"
                    >
                      <option value="Dine-In Table">Table Service (Dine-In)</option>
                      <option value="Family Hall">Family Banquet Hall</option>
                      <option value="Takeaway Parcel">Fresh Takeaway Parcel</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[11px] uppercase font-medium text-[#E2D1D4] mb-1">
                      Guest Name / Table # *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Table 4 or Sharma Ji"
                      value={customerName}
                      onChange={(e) => setCustomerName(e.target.value)}
                      className="w-full bg-[#221013] border border-[#4A1D24] rounded-lg px-3 py-2 text-xs sm:text-sm text-white"
                    />
                  </div>

                  <div className="p-3 bg-[#221013] rounded-lg border border-[#4A1D24] flex justify-between items-center text-sm font-semibold">
                    <span className="text-[#E2D1D4]">Total Payable:</span>
                    <span className="text-[#F59E0B] text-base">₹{grandTotal.toFixed(0)}</span>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 bg-gradient-to-r from-[#E11D48] to-[#BE123C] hover:from-[#BE123C] text-white font-semibold text-xs uppercase tracking-wider rounded-lg transition-all shadow-md active:scale-98"
                  >
                    Confirm Food Order
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
