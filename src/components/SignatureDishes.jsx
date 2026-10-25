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
    <section id="signatures" ref={sectionRef} className="py-24 bg-[#1C1410] relative overflow-hidden border-y border-[#3D2B20]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#241B16] border border-[#3D2B20] mb-3">
            <Flame className="w-3.5 h-3.5 text-[#E07A2B]" />
            <span className="text-[11px] uppercase font-bold tracking-widest text-[#E8B358]">
              Royal Curations & Signatures
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-medium text-[#FBF7EE] mb-4">
            Shahi Vyanjan (शाही व्यंजन)
          </h2>
          <p className="text-sm sm:text-base text-[#DFD5C2]/70">
            Four iconic heritage specialties crafted by master khansamas celebrating the rich flavors of Bharat.
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
                    className="group relative rounded-2xl overflow-hidden border border-[#3D2B20] bg-[#241B16] cursor-pointer shadow-xl"
                  >
                    <img
                      src={dish.image}
                      alt={dish.name}
                      className="w-full h-72 sm:h-96 object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#120D0A]/80 via-transparent to-transparent" />
                    
                    {/* Badge */}
                    <div className="absolute top-4 left-4 flex items-center gap-1.5 px-3 py-1 rounded-md bg-[#120D0A]/85 backdrop-blur-md border border-[#3D2B20] text-xs font-semibold text-[#E07A2B]">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block border border-emerald-300" />
                      <span>{dish.dietary}</span>
                    </div>

                    <div className="absolute bottom-4 right-4 text-xs font-medium text-[#DFD5C2] bg-[#120D0A]/70 px-3 py-1 rounded-md border border-[#3D2B20]">
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
                    <span className="text-xs uppercase font-bold tracking-[0.2em] text-[#E07A2B]">
                      {dish.category}
                    </span>

                    <div className="flex items-baseline justify-between gap-4">
                      <h3
                        onClick={() => setSelectedProduct(dish)}
                        className="text-2xl sm:text-3xl font-serif font-bold text-[#FBF7EE] hover:text-[#E8B358] transition-colors cursor-pointer"
                      >
                        {dish.name}
                      </h3>
                      <span className="text-2xl sm:text-3xl font-serif font-bold text-[#E8B358]">
                        ₹{dish.price}
                      </span>
                    </div>

                    <p className="text-sm sm:text-base text-[#DFD5C2]/85 leading-relaxed">
                      {dish.fullDescription}
                    </p>

                    {/* Key Ingredients Pill List */}
                    <div className="pt-2">
                      <h4 className="text-xs font-semibold uppercase tracking-wider text-[#DFD5C2]/60 mb-2">
                        Pavitra Ingredients & Spices:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {dish.ingredients.map((ing, i) => (
                          <span
                            key={i}
                            className="text-xs px-2.5 py-1 rounded-sm bg-[#241B16] border border-[#3D2B20] text-[#DFD5C2]"
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
                        className="inline-flex items-center gap-2 px-6 py-3 bg-[#E07A2B] hover:bg-[#E8B358] text-[#120D0A] font-semibold text-xs uppercase tracking-wider rounded-sm transition-all shadow-md hover:shadow-[#E07A2B]/20 cursor-pointer"
                      >
                        <Plus className="w-4 h-4" />
                        Add To Thali Order
                      </button>

                      <button
                        onClick={() => setSelectedProduct(dish)}
                        className="text-xs font-semibold uppercase tracking-wider text-[#DFD5C2] hover:text-[#E07A2B] transition-colors cursor-pointer"
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
