import React, { useEffect, useRef } from 'react';
import { ArrowRight, Utensils, Clock, Sparkles, MapPin, Star } from 'lucide-react';
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
        y: 35,
        duration: 0.8,
      }, '-=0.3')
      .from(descRef.current, {
        opacity: 0,
        y: 25,
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
        duration: 1,
        ease: 'power2.out',
      }, '-=0.7');
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const navOffset = 80;
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
      className="relative min-h-[92vh] flex items-center pt-28 pb-16 overflow-hidden bg-[#120D0A]"
    >
      {/* Warm Indian Terracotta & Amber ambient glow */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-[#E07A2B]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-[#B44C28]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Asymmetrical Editorial Narrative */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            
            {/* Top Cuisine & Veg-Only Status Pill */}
            <div ref={badgeRef} className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1C1410] border border-[#3D2B20] w-fit mb-6">
              <span className="flex items-center gap-1.5 text-xs uppercase font-medium tracking-widest text-[#DFD5C2]">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 inline-block border border-emerald-300" />
                Veg-Only • {RESTAURANT_CONFIG.brand.rating}
              </span>
              <span className="text-[#3D2B20]">|</span>
              <span className="text-xs text-[#E8B358] font-semibold">{RESTAURANT_CONFIG.brand.priceRange}</span>
            </div>

            {/* Main Headline */}
            <h1
              ref={headlineRef}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-serif font-medium tracking-tight text-[#FBF7EE] leading-[1.1] mb-6"
            >
              Bharat Ki Rich <br />
              <span className="italic font-light text-[#E8B358]">Mitti & Parampara</span> Ka Asli Swaad.
            </h1>

            {/* Supporting Description */}
            <p
              ref={descRef}
              className="text-base sm:text-lg text-[#DFD5C2]/85 max-w-xl leading-relaxed mb-8"
            >
              Experience the grand culinary legacy of India at <strong>Maatribhoomi (मातृभूमि)</strong>, Noida. From our 14-dish Royal Maharaja Thali to slow-simmered 24-hour Dal, clay tandoor specialties, and hot desi ghee jalebis.
            </p>

            {/* Call To Actions */}
            <div ref={ctaRef} className="flex flex-wrap items-center gap-4 mb-10">
              <button
                onClick={() => scrollTo('menu')}
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#E07A2B] hover:bg-[#E8B358] text-[#120D0A] font-semibold text-sm uppercase tracking-wider rounded-sm transition-all duration-300 shadow-md hover:shadow-[#E07A2B]/30 cursor-pointer"
              >
                <Utensils className="w-4 h-4" />
                Explore Pure-Veg Menu
              </button>

              <button
                onClick={() => scrollTo('reservations')}
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-transparent hover:bg-[#1C1410] text-[#FBF7EE] border border-[#3D2B20] hover:border-[#E07A2B] font-semibold text-sm uppercase tracking-wider rounded-sm transition-all duration-300 cursor-pointer"
              >
                Reserve Table
                <ArrowRight className="w-4 h-4 text-[#E07A2B]" />
              </button>
            </div>

            {/* Live Service Micro-Info (Exact Google Maps match) */}
            <div className="flex flex-wrap items-center gap-6 pt-6 border-t border-[#3D2B20]/60 text-xs text-[#DFD5C2]/70">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#E07A2B]" />
                <span className="text-emerald-400 font-semibold">Open Now</span>
                <span>• Closes 11:30 PM</span>
              </div>
              <div className="h-3 w-[1px] bg-[#3D2B20] hidden sm:block" />
              <div className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-[#E8B358]" />
                <span>Sector 38, Near Botanical Garden Metro, Noida</span>
              </div>
            </div>
          </div>

          {/* Right Column: Hero High-Impact Image Card */}
          <div className="lg:col-span-5 relative" ref={imageContainerRef}>
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Outer Decorative Frame with Terracotta Glow */}
              <div className="relative rounded-2xl overflow-hidden border border-[#3D2B20] shadow-2xl bg-[#1C1410]">
                <img
                  src="https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?auto=format&fit=crop&w=1200&q=80"
                  alt="Maharaja Heritage Royal Thali at Maatribhoomi"
                  className="w-full h-[460px] object-cover object-center transform hover:scale-105 transition-transform duration-700 ease-out"
                />
                
                {/* Gradient Overlay for Mood & Contrast */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#120D0A] via-transparent to-transparent opacity-85" />

                {/* Floating Highlight Card */}
                <div className="absolute bottom-5 left-5 right-5 p-4 rounded-xl bg-[#1C1410]/95 backdrop-blur-md border border-[#3D2B20] flex items-center justify-between">
                  <div>
                    <span className="text-[10px] uppercase font-bold tracking-widest text-[#E07A2B]">
                      Chef Hari Nayak Curation
                    </span>
                    <h3 className="text-sm font-serif font-bold text-[#FBF7EE]">
                      Maharaja Heritage Royal Thali
                    </h3>
                  </div>
                  <div className="text-right">
                    <span className="text-lg font-serif font-bold text-[#E8B358]">
                      ₹850
                    </span>
                  </div>
                </div>
              </div>

              {/* Decorative Corner Accent */}
              <div className="absolute -top-3 -right-3 w-20 h-20 border-t-2 border-r-2 border-[#E07A2B]/40 pointer-events-none rounded-tr-lg" />
              <div className="absolute -bottom-3 -left-3 w-20 h-20 border-b-2 border-l-2 border-[#E07A2B]/40 pointer-events-none rounded-bl-lg" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
