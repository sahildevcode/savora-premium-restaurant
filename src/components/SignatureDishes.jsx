import React, { useRef, useEffect } from 'react';
import { Plus, Flame } from 'lucide-react';
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
    <section id="signatures" ref={sectionRef} className="py-24 bg-[#141D14] relative overflow-hidden border-y border-[#2A3A2A]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1C271C] border border-[#2A3A2A] mb-3">
            <Flame className="w-3.5 h-3.5 text-[#34D399]" />
            <span className="text-[11px] uppercase font-bold tracking-widest text-[#D97706]">
              Tezpatta Best-Sellers
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-medium text-[#F5F8F3] mb-4">
            Signature Creations (खास व्यंजन)
          </h2>
          <p className="text-sm sm:text-base text-[#D1DCD0]/70">
            Four iconic dishes that make Tezpatta the most beloved vegetarian restaurant on Garh Road, Meerut.
          </p>
        </div>

        {/* Alternating Signature Items */}
        <div className="space-y-16 lg:space-y-24">
          {RESTAURANT_CONFIG.signatureDishes.map((dish, index) => {
            const isReversed = index % 2 !== 0;

            return (
              <div
                key={dish.id}
                className="signature-row grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center"
              >
                {/* Visual Image Presentation */}
                <div
                  className={`lg:col-span-6 ${
                    isReversed ? 'lg:order-2' : 'lg:order-1'
                  }`}
                >
                  <div
                    onClick={() => setSelectedProduct(dish)}
                    className="group relative rounded-2xl overflow-hidden border border-[#2A3A2A] bg-[#1C271C] cursor-pointer shadow-xl"
                  >
                    <img
                      src={dish.image}
                      alt={dish.name}
                      className="w-full h-72 sm:h-96 object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0C120C]/80 via-transparent to-transparent" />
                    
                    {/* Badge */}
                    <div className="absolute top-4 left-4 flex items-center gap-1.5 px-3 py-1 rounded-md bg-[#0C120C]/85 backdrop-blur-md border border-[#2A3A2A] text-xs font-semibold text-[#34D399]">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block border border-emerald-300" />
                      <span>{dish.dietary}</span>
                    </div>

                    <div className="absolute bottom-4 right-4 text-xs font-medium text-[#D1DCD0] bg-[#0C120C]/70 px-3 py-1 rounded-md border border-[#2A3A2A]">
                      Click for Ingredients
                    </div>
                  </div>
                </div>

                {/* Text Content */}
                <div
                  className={`lg:col-span-6 ${
                    isReversed ? 'lg:order-1' : 'lg:order-2'
                  }`}
                >
                  <div className="space-y-4">
                    <span className="text-xs uppercase font-bold tracking-[0.2em] text-[#34D399]">
                      {dish.category}
                    </span>

                    <div className="flex items-baseline justify-between gap-4">
                      <h3
                        onClick={() => setSelectedProduct(dish)}
                        className="text-2xl sm:text-3xl font-serif font-bold text-[#F5F8F3] hover:text-[#34D399] transition-colors cursor-pointer"
                      >
                        {dish.name}
                      </h3>
                      <span className="text-2xl sm:text-3xl font-serif font-bold text-[#D97706]">
                        ₹{dish.price}
                      </span>
                    </div>

                    <p className="text-sm sm:text-base text-[#D1DCD0]/85 leading-relaxed">
                      {dish.fullDescription}
                    </p>

                    {/* Key Ingredients Pill List */}
                    <div className="pt-2">
                      <h4 className="text-xs font-semibold uppercase tracking-wider text-[#D1DCD0]/60 mb-2">
                        Authentic Ingredients & Aromas:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {dish.ingredients.map((ing, i) => (
                          <span
                            key={i}
                            className="text-xs px-2.5 py-1 rounded-sm bg-[#1C271C] border border-[#2A3A2A] text-[#D1DCD0]"
                          >
                            {ing}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Action buttons */}
                    <div className="pt-4 flex items-center gap-4">
                      <button
                        onClick={() => addToCart(dish, 1)}
                        className="inline-flex items-center gap-2 px-6 py-3 bg-[#D97706] hover:bg-[#34D399] text-[#0C120C] font-semibold text-xs uppercase tracking-wider rounded-sm transition-all shadow-md hover:shadow-[#D97706]/20 cursor-pointer"
                      >
                        <Plus className="w-4 h-4" />
                        Add To Order
                      </button>

                      <button
                        onClick={() => setSelectedProduct(dish)}
                        className="text-xs font-semibold uppercase tracking-wider text-[#D1DCD0] hover:text-[#34D399] transition-colors cursor-pointer"
                      >
                        View Full Details &rarr;
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
