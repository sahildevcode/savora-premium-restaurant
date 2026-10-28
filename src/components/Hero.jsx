import React, { useEffect, useRef } from 'react';
import { ArrowRight, Utensils, Clock, Sparkles, MapPin } from 'lucide-react';
import gsap from 'gsap';
import { RESTAURANT_CONFIG } from '../restaurantConfig';

export const Hero = () => {
  const heroRef = useRef(null);
  const headlineRef = useRef(null);
  const descRef = useRef(null);
  const ctaRef = useRef(null);
  const badgeRef = useRef(null);
  const imageContainerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.from(badgeRef.current, {
        opacity: 0,
        y: 20,
        duration: 0.6,
      })
      .from(headlineRef.current, {
        opacity: 0,
        y: 30,
        duration: 0.8,
      }, '-=0.3')
      .from(descRef.current, {
        opacity: 0,
        y: 20,
        duration: 0.7,
      }, '-=0.4')
      .from(ctaRef.current, {
        opacity: 0,
        y: 20,
        duration: 0.6,
      }, '-=0.3')
      .from(imageContainerRef.current, {
        opacity: 0,
        scale: 0.95,
        duration: 0.9,
        ease: 'power2.out',
      }, '-=0.6');
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const navOffset = 70;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section
      id="hero"
      ref={heroRef}
      className="relative min-h-[92vh] flex items-center pt-24 sm:pt-28 pb-16 overflow-hidden bg-[#240B10]"
    >
      {/* Royal Burgundy & Gold Ambient Glows */}
      <div className="absolute top-10 left-0 w-80 sm:w-[500px] h-80 sm:h-[500px] bg-[#C99B52]/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-80 sm:w-[600px] h-80 sm:h-[600px] bg-[#E83E60]/12 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center">
          
          {/* Left Column: Editorial Headline & Story */}
          <div className="lg:col-span-7 flex flex-col justify-center text-left">
            
            {/* Top Status & Price Pill with Gold Trim */}
            <div ref={badgeRef} className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#310D16] border border-[#C99B52]/30 w-fit mb-5 shadow-md shadow-black/40">
              <span className="flex items-center gap-1.5 text-[11px] sm:text-xs uppercase font-semibold tracking-wider text-[#FFF2E8]">
                <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block border border-emerald-300" />
                Veg-Only • {RESTAURANT_CONFIG.brand.rating}
              </span>
              <span className="text-[#C99B52]/40">|</span>
              <span className="text-[11px] sm:text-xs text-[#C99B52] font-bold">{RESTAURANT_CONFIG.brand.priceRange}</span>
            </div>

            {/* Main Headline: "Where Pure Taste Meets Royal Ambiance." */}
            <h1
              ref={headlineRef}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-serif font-medium tracking-tight text-[#FFF2E8] leading-[1.1] mb-5"
            >
              Where Pure Taste Meets <br className="hidden sm:block" />
              <span className="italic font-light text-transparent bg-clip-text bg-gradient-to-r from-[#E83E60] via-[#DFC08A] to-[#C99B52]">
                Royal Ambiance.
              </span>
            </h1>

            {/* Supporting Copy */}
            <p
              ref={descRef}
              className="text-sm sm:text-base lg:text-lg text-[#C9B8B8] max-w-xl leading-relaxed mb-8 font-light"
            >
              Step into Meerut's premier fine-dining sanctuary on Garh Road, opposite Apex Tower. Immerse yourself in authentic Awadhi potli spices, 18-hour charcoal-simmered gravies, and royal vegetarian hospitalities.
            </p>

            {/* Call To Action Buttons */}
            <div ref={ctaRef} className="flex flex-wrap items-center gap-3.5 mb-8">
              <button
                onClick={() => scrollTo('menu')}
                className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 bg-gradient-to-r from-[#C99B52] via-[#DFC08A] to-[#C99B52] hover:opacity-95 text-[#240B10] font-bold text-xs sm:text-sm uppercase tracking-wider rounded-sm transition-all duration-300 shadow-lg shadow-[#C99B52]/25 cursor-pointer active:scale-98 border border-[#C99B52]"
              >
                <Utensils className="w-4 h-4 text-[#240B10]" />
                Explore Menu
              </button>

              <button
                onClick={() => scrollTo('reservations')}
                className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 bg-[#310D16] hover:bg-[#3B121C] text-[#FFF2E8] border border-[#C99B52]/40 hover:border-[#C99B52] font-semibold text-xs sm:text-sm uppercase tracking-wider rounded-sm transition-all duration-300 cursor-pointer"
              >
                Reserve Your Table
                <ArrowRight className="w-4 h-4 text-[#C99B52]" />
              </button>
            </div>

            {/* Micro-Info Footer */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 pt-5 border-t border-[#C99B52]/20 text-xs text-[#C9B8B8]">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#C99B52] shrink-0" />
                <span className="text-[#C99B52] font-bold">Opens today at 6:00 PM</span>
                <span>(Dinner Service)</span>
              </div>
              <div className="hidden sm:block h-3 w-[1px] bg-[#C99B52]/20" />
              <div className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-[#E83E60] shrink-0" />
                <span className="truncate">Opp. Apex Tower, Garh Road, Meerut</span>
              </div>
            </div>

          </div>

          {/* Right Column: Hero Visual Card with Champagne Gold Framing */}
          <div className="lg:col-span-5 relative mt-4 lg:mt-0" ref={imageContainerRef}>
            <div className="relative mx-auto max-w-sm sm:max-w-md lg:max-w-none">
              
              {/* Image Frame with Champagne Gold Glow */}
              <div className="relative rounded-2xl overflow-hidden border border-[#C99B52]/40 shadow-2xl shadow-black/80 bg-[#310D16]">
                <img
                  src="https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=1200&q=80"
                  alt="Handi Paneer Lababdar at Tezpatta"
                  className="w-full h-72 sm:h-[430px] object-cover object-center transform hover:scale-105 transition-transform duration-700 ease-out"
                />
                
                {/* Contrast Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#240B10] via-[#240B10]/30 to-transparent opacity-90" />

                {/* Floating Dish Badge with Gold Trim */}
                <div className="absolute bottom-3.5 left-3.5 right-3.5 p-3.5 sm:p-4 rounded-xl bg-[#240B10]/95 backdrop-blur-md border border-[#C99B52]/40 flex items-center justify-between shadow-xl">
                  <div>
                    <span className="text-[10px] uppercase font-bold tracking-widest text-[#C99B52] flex items-center gap-1 font-sans">
                      <Sparkles className="w-3 h-3 text-[#E83E60]" />
                      Royal Handi Creation
                    </span>
                    <h3 className="text-xs sm:text-sm font-serif font-bold text-[#FFF2E8] mt-0.5">
                      Handi Paneer Lababdar
                    </h3>
                  </div>
                  <div className="text-right">
                    <span className="text-base sm:text-lg font-serif font-bold text-[#C99B52]">
                      ₹360
                    </span>
                  </div>
                </div>
              </div>

              {/* Decorative Champagne Gold Corner Accents */}
              <div className="absolute -top-2.5 -right-2.5 w-16 h-16 border-t-2 border-r-2 border-[#C99B52] pointer-events-none rounded-tr-xl" />
              <div className="absolute -bottom-2.5 -left-2.5 w-16 h-16 border-b-2 border-l-2 border-[#C99B52] pointer-events-none rounded-bl-xl" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
