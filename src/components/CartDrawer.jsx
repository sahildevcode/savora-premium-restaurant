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

  const deliveryFee = subtotal > 0 ? 0 : 0; // Configurable
  const tax = subtotal * 0.085; // 8.5% standard tax
  const grandTotal = subtotal + tax + deliveryFee;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 overflow-hidden bg-[#0D0F12]/80 backdrop-blur-xs transition-opacity duration-300"
    >
      <div className="absolute inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#171A21] border-l border-[#2C3240] shadow-2xl flex flex-col">
          
          {/* Drawer Header */}
          <div className="p-6 border-b border-[#2C3240] flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-full bg-[#1C2029] text-[#E58A38]">
                <ShoppingBag className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-lg font-serif font-bold text-white">Your Order</h2>
                <span className="text-xs text-[#D8D2C4]/60">
                  {cartItems.length} {cartItems.length === 1 ? 'item' : 'items'} selected
                </span>
              </div>
            </div>

            <button
              onClick={() => setIsCartOpen(false)}
              className="p-2 rounded-full text-[#D8D2C4] hover:text-white hover:bg-[#1C2029] transition-colors"
              aria-label="Close cart"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Cart Items List */}
          <div className="grow overflow-y-auto p-6 space-y-4">
            {cartItems.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-16 space-y-4">
                <div className="w-16 h-16 rounded-full bg-[#1C2029] border border-[#2C3240] flex items-center justify-center text-[#D8D2C4]/50">
                  <ShoppingBag className="w-8 h-8" />
                </div>
                <h3 className="text-base font-serif font-bold text-white">Your cart is currently empty</h3>
                <p className="text-xs text-[#D8D2C4]/70 max-w-xs leading-relaxed">
                  Explore our seasonal menu to select wood-fired dishes, chef specials, and artisanal drinks.
                </p>
                <button
                  onClick={() => setIsCartOpen(false)}
                  className="mt-2 px-5 py-2.5 bg-[#E58A38] hover:bg-[#F3B367] text-[#0D0F12] text-xs font-semibold uppercase tracking-wider rounded-sm transition-all cursor-pointer"
                >
                  Explore Menu
                </button>
              </div>
            ) : (
              cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center gap-4 p-3.5 rounded-xl bg-[#1C2029] border border-[#2C3240]/80"
                >
                  {/* Item Image */}
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-16 rounded-lg object-cover bg-[#0D0F12] shrink-0"
                  />

                  {/* Info */}
                  <div className="grow min-w-0">
                    <h4 className="text-sm font-serif font-bold text-white truncate">
                      {item.name}
                    </h4>
                    <span className="text-xs text-[#E58A38] font-medium">
                      ${item.price} each
                    </span>

                    {/* Quantity Controls */}
                    <div className="flex items-center gap-3 mt-2">
                      <div className="flex items-center border border-[#2C3240] rounded-sm bg-[#171A21]">
                        <button
                          onClick={() => decrementQuantity(item.id)}
                          className="px-2 py-1 text-xs text-[#D8D2C4] hover:text-white"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="px-2 text-xs font-bold text-white">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => addToCart(item, 1)}
                          className="px-2 py-1 text-xs text-[#D8D2C4] hover:text-white"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>

                      <span className="text-xs font-bold text-[#F7F4EE]">
                        ${(item.price * item.quantity).toFixed(2)}
                      </span>
                    </div>
                  </div>

                  {/* Remove Button */}
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="p-2 text-[#D8D2C4]/50 hover:text-rose-400 transition-colors"
                    aria-label={`Remove ${item.name}`}
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              ))
            )}
          </div>

          {/* Drawer Footer with Subtotals & Checkout Trigger */}
          {cartItems.length > 0 && (
            <div className="p-6 border-t border-[#2C3240] bg-[#171A21] space-y-4">
              <div className="space-y-2 text-xs text-[#D8D2C4]">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="text-white font-medium">${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Estimated Tax (8.5%)</span>
                  <span className="text-white font-medium">${tax.toFixed(2)}</span>
                </div>
                <div className="flex justify-between pt-2 border-t border-[#2C3240] text-sm font-serif font-bold text-[#F7F4EE]">
                  <span>Total</span>
                  <span className="text-lg text-[#F3B367]">${grandTotal.toFixed(2)}</span>
                </div>
              </div>

              <div className="space-y-2 pt-2">
                <button
                  onClick={() => setCheckoutModalOpen(true)}
                  className="w-full py-3.5 bg-[#E58A38] hover:bg-[#F3B367] text-[#0D0F12] font-semibold text-xs uppercase tracking-wider rounded-sm transition-all duration-200 flex items-center justify-center gap-2 shadow-md hover:shadow-[#E58A38]/30 cursor-pointer"
                >
                  <span>Proceed to Checkout</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={clearCart}
                  className="w-full py-2 text-center text-xs font-medium text-[#D8D2C4]/60 hover:text-rose-400 transition-colors cursor-pointer"
                >
                  Clear Order
                </button>
              </div>
            </div>
          )}

        </div>
      </div>

      {/* Configurable Checkout Demo Modal */}
      {checkoutModalOpen && (
        <div
          role="dialog"
          aria-modal="true"
          onClick={() => setCheckoutModalOpen(false)}
          className="fixed inset-0 z-60 bg-[#0D0F12]/90 backdrop-blur-md flex items-center justify-center p-4"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="max-w-md w-full bg-[#171A21] rounded-2xl border border-[#2C3240] p-6 shadow-2xl relative"
          >
            <button
              onClick={() => setCheckoutModalOpen(false)}
              className="absolute top-4 right-4 p-2 text-[#D8D2C4] hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>

            {orderConfirmed ? (
              <div className="text-center py-8 space-y-4">
                <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto animate-bounce" />
                <h3 className="text-xl font-serif font-bold text-white">Order Received (Demo Mode)</h3>
                <p className="text-xs text-[#D8D2C4] leading-relaxed">
                  Thank you, <strong className="text-white">{customerName || 'Guest'}</strong>! Your demo order of <strong className="text-[#E58A38]">${grandTotal.toFixed(2)}</strong> has been registered.
                </p>
                <div className="text-[11px] text-[#D8D2C4]/60 p-3 rounded-md bg-[#1C2029] border border-[#2C3240]">
                  To connect real payments or POS (Stripe, Square, Toast, or WhatsApp order dispatch), configure the endpoint in <code>CartDrawer.jsx</code>.
                </div>
              </div>
            ) : (
              <div>
                <h3 className="text-lg font-serif font-bold text-white mb-2">Complete Order</h3>
                <p className="text-xs text-[#D8D2C4]/70 mb-4">
                  Please specify dining preference and contact details for notification.
                </p>

                <form onSubmit={handleCheckoutSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs uppercase font-medium text-[#D8D2C4] mb-1">
                      Dining Type
                    </label>
                    <select
                      value={tableOrDelivery}
                      onChange={(e) => setTableOrDelivery(e.target.value)}
                      className="w-full bg-[#1C2029] border border-[#2C3240] rounded-sm px-3 py-2 text-sm text-white"
                    >
                      <option value="Dine-In Table">Dine-In (Table Service)</option>
                      <option value="Bar Seating">Lounge / Bar Counter</option>
                      <option value="Artisanal Takeout">Curbside Takeout</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs uppercase font-medium text-[#D8D2C4] mb-1">
                      Guest Name / Table # *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Table 4 or Elena R."
                      value={customerName}
                      onChange={(e) => setCustomerName(e.target.value)}
                      className="w-full bg-[#1C2029] border border-[#2C3240] rounded-sm px-3 py-2 text-sm text-white"
                    />
                  </div>

                  <div className="p-3 bg-[#1C2029] rounded-lg border border-[#2C3240] flex justify-between items-center text-sm font-semibold">
                    <span className="text-[#D8D2C4]">Order Total Due:</span>
                    <span className="text-[#F3B367] text-base">${grandTotal.toFixed(2)}</span>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 bg-[#E58A38] hover:bg-[#F3B367] text-[#0D0F12] font-semibold text-xs uppercase tracking-wider rounded-sm transition-all shadow-md"
                  >
                    Place Demo Order
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
