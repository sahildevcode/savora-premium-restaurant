import React, { useRef, useEffect } from 'react';
import { Plus, Flame, Sparkles } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { RESTAURANT_CONFIG } from '../restaurantConfig';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const SignatureDishes = () => {
  const { addToCart, setSelectedProduct } = useCart();
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const items = gsap.utils.toArray('.signature-row');
      items.forEach((item) => {
        gsap.from(item, {
          opacity: 0,
          y: 40,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: item,
            start: 'top 85%',
          },
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="signatures" ref={sectionRef} className="py-20 sm:py-24 bg-[#221013] relative overflow-hidden border-y border-[#4A1D24]/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#2B161A] border border-[#4A1D24] mb-3">
            <Flame className="w-3.5 h-3.5 text-[#E11D48]" />
            <span className="text-[10px] sm:text-[11px] uppercase font-bold tracking-widest text-[#F59E0B]">
              Tezpatta Hallmarks
            </span>
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-serif font-medium text-[#FFF5F5] mb-3">
            Signature Curation
          </h2>
          <p className="text-xs sm:text-base text-[#E2D1D4]/75">
            Four iconic dishes that make Tezpatta the most celebrated vegetarian dining address on Garh Road, Meerut.
          </p>
        </div>

        {/* Alternating Signature Items */}
        <div className="space-y-12 sm:space-y-20">
          {RESTAURANT_CONFIG.signatureDishes.map((dish, index) => {
            const isReversed = index % 2 !== 0;

            return (
              <div
                key={dish.id}
                className="signature-row grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-center"
              >
                {/* Visual Image Presentation */}
                <div
                  className={`lg:col-span-6 ${
                    isReversed ? 'lg:order-2' : 'lg:order-1'
                  }`}
                >
                  <div
                    onClick={() => setSelectedProduct(dish)}
                    className="group relative rounded-2xl overflow-hidden border border-[#4A1D24] bg-[#2B161A] cursor-pointer shadow-xl shadow-black/60"
                  >
                    <img
                      src={dish.image}
                      alt={dish.name}
                      className="w-full h-64 sm:h-96 object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#180B0D]/85 via-transparent to-transparent" />
                    
                    {/* Badge */}
                    <div className="absolute top-3.5 left-3.5 flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#180B0D]/90 backdrop-blur-md border border-[#4A1D24] text-xs font-semibold text-[#FB7185]">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block border border-emerald-300" />
                      <span>{dish.dietary}</span>
                    </div>

                    <div className="absolute bottom-3.5 right-3.5 text-[11px] font-medium text-[#E2D1D4] bg-[#180B0D]/80 px-2.5 py-1 rounded-md border border-[#4A1D24]">
                      View Recipe &rarr;
                    </div>
                  </div>
                </div>

                {/* Text Content */}
                <div
                  className={`lg:col-span-6 ${
                    isReversed ? 'lg:order-1' : 'lg:order-2'
                  }`}
                >
                  <div className="space-y-3 sm:space-y-4">
                    <span className="text-[11px] uppercase font-bold tracking-[0.2em] text-[#FB7185]">
                      {dish.category}
                    </span>

                    <div className="flex items-baseline justify-between gap-4">
                      <h3
                        onClick={() => setSelectedProduct(dish)}
                        className="text-xl sm:text-3xl font-serif font-bold text-[#FFF5F5] hover:text-[#FB7185] transition-colors cursor-pointer"
                      >
                        {dish.name}
                      </h3>
                      <span className="text-xl sm:text-3xl font-serif font-bold text-[#F59E0B]">
                        ₹{dish.price}
                      </span>
                    </div>

                    <p className="text-xs sm:text-base text-[#E2D1D4]/85 leading-relaxed">
                      {dish.fullDescription}
                    </p>

                    {/* Key Ingredients Pill List */}
                    <div className="pt-1">
                      <h4 className="text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-[#E2D1D4]/60 mb-2">
                        Authentic Spices & Tadka:
                      </h4>
                      <div className="flex flex-wrap gap-1.5 sm:gap-2">
                        {dish.ingredients.map((ing, i) => (
                          <span
                            key={i}
                            className="text-[10px] sm:text-xs px-2.5 py-1 rounded-sm bg-[#2B161A] border border-[#4A1D24] text-[#E2D1D4]"
                          >
                            {ing}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Action buttons */}
                    <div className="pt-3 flex items-center gap-3">
                      <button
                        onClick={() => addToCart(dish, 1)}
                        className="inline-flex items-center gap-1.5 px-5 sm:px-6 py-2.5 sm:py-3 bg-gradient-to-r from-[#E11D48] to-[#BE123C] hover:from-[#BE123C] hover:to-[#9F1239] text-white font-semibold text-xs uppercase tracking-wider rounded-sm transition-all shadow-md shadow-[#E11D48]/30 cursor-pointer active:scale-95"
                      >
                        <Plus className="w-4 h-4" />
                        Add To Order
                      </button>

                      <button
                        onClick={() => setSelectedProduct(dish)}
                        className="text-xs font-semibold uppercase tracking-wider text-[#E2D1D4] hover:text-[#FB7185] transition-colors cursor-pointer"
                      >
                        Details &rarr;
                      </button>
                    </div>

                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
