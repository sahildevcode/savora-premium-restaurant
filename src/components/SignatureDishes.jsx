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
    <section id="signatures" ref={sectionRef} className="py-20 sm:py-24 bg-[#310D16] relative overflow-hidden border-y border-[#C99B52]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#240B10] border border-[#C99B52]/30 mb-3 shadow-md shadow-black/40">
            <Flame className="w-3.5 h-3.5 text-[#C99B52]" />
            <span className="text-[10px] sm:text-[11px] uppercase font-bold tracking-widest text-[#C99B52]">
              Palace Signatures
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-medium text-[#FFF2E8] mb-3">
            Royal Masterpieces
          </h2>
          <p className="text-xs sm:text-base text-[#C9B8B8] font-light">
            Four iconic culinary treasures that define the royal gastronomic standard of TEZPATTA, Meerut.
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
                {/* Visual Image Presentation with Gold Border */}
                <div
                  className={`lg:col-span-6 ${
                    isReversed ? 'lg:order-2' : 'lg:order-1'
                  }`}
                >
                  <div
                    onClick={() => setSelectedProduct(dish)}
                    className="group relative rounded-2xl overflow-hidden border border-[#C99B52]/30 bg-[#240B10] cursor-pointer shadow-2xl shadow-black/80 hover:border-[#C99B52] transition-colors duration-300"
                  >
                    <img
                      src={dish.image}
                      alt={dish.name}
                      className="w-full h-64 sm:h-96 object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#240B10]/90 via-transparent to-transparent" />
                    
                    {/* Badge */}
                    <div className="absolute top-3.5 left-3.5 flex items-center gap-1.5 px-3 py-1 rounded-md bg-[#240B10]/90 backdrop-blur-md border border-[#C99B52]/40 text-xs font-semibold text-[#C99B52]">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block border border-emerald-300" />
                      <span>{dish.dietary}</span>
                    </div>

                    <div className="absolute bottom-3.5 right-3.5 text-[11px] font-medium text-[#FFF2E8] bg-[#240B10]/90 px-3 py-1 rounded-md border border-[#C99B52]/30">
                      Recipe Details &rarr;
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
                    <span className="text-[11px] uppercase font-bold tracking-[0.2em] text-[#C99B52]">
                      {dish.category}
                    </span>

                    <div className="flex items-baseline justify-between gap-4">
                      <h3
                        onClick={() => setSelectedProduct(dish)}
                        className="text-2xl sm:text-4xl font-serif font-bold text-[#FFF2E8] hover:text-[#C99B52] transition-colors cursor-pointer"
                      >
                        {dish.name}
                      </h3>
                      <span className="text-2xl sm:text-4xl font-serif font-bold text-[#C99B52]">
                        ₹{dish.price}
                      </span>
                    </div>

                    <p className="text-xs sm:text-base text-[#C9B8B8] leading-relaxed font-light">
                      {dish.fullDescription}
                    </p>

                    {/* Key Ingredients Pill List */}
                    <div className="pt-1">
                      <h4 className="text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-[#C99B52] mb-2">
                        Sacred Spices & Ingredients:
                      </h4>
                      <div className="flex flex-wrap gap-1.5 sm:gap-2">
                        {dish.ingredients.map((ing, i) => (
                          <span
                            key={i}
                            className="text-[10px] sm:text-xs px-2.5 py-1 rounded-sm bg-[#240B10] border border-[#C99B52]/20 text-[#FFF2E8]"
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
                        className="inline-flex items-center gap-1.5 px-6 sm:px-7 py-2.5 sm:py-3 bg-gradient-to-r from-[#C99B52] via-[#DFC08A] to-[#C99B52] hover:opacity-95 text-[#240B10] font-bold text-xs uppercase tracking-wider rounded-sm transition-all shadow-lg shadow-[#C99B52]/25 cursor-pointer active:scale-95 border border-[#C99B52]"
                      >
                        <Plus className="w-4 h-4 text-[#240B10]" />
                        Add To Order
                      </button>

                      <button
                        onClick={() => setSelectedProduct(dish)}
                        className="text-xs font-semibold uppercase tracking-wider text-[#C9B8B8] hover:text-[#C99B52] transition-colors cursor-pointer"
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
