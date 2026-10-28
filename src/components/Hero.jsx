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
      className="relative min-h-[92vh] flex items-center pt-28 pb-16 overflow-hidden bg-[#0C120C]"
    >
      {/* Warm Forest Green & Cinnamon Amber glow */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-[#4E7B44]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-[#D97706]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Asymmetrical Editorial Narrative */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            
            {/* Top Status & Rating Pill */}
            <div ref={badgeRef} className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#141D14] border border-[#2A3A2A] w-fit mb-6">
              <span className="flex items-center gap-1.5 text-xs uppercase font-medium tracking-widest text-[#D1DCD0]">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 inline-block border border-emerald-300" />
                Veg-Only • {RESTAURANT_CONFIG.brand.rating}
              </span>
              <span className="text-[#2A3A2A]">|</span>
              <span className="text-xs text-[#D97706] font-semibold">{RESTAURANT_CONFIG.brand.priceRange}</span>
            </div>

            {/* Main Headline */}
            <h1
              ref={headlineRef}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-serif font-medium tracking-tight text-[#F5F8F3] leading-[1.1] mb-6"
            >
              Every Recipe Brewed With <br />
              <span className="italic font-light text-[#34D399]">Aroma & Authentic</span> North Indian Soul.
            </h1>

            {/* Supporting Description */}
            <p
              ref={descRef}
              className="text-base sm:text-lg text-[#D1DCD0]/85 max-w-xl leading-relaxed mb-8"
            >
              Welcome to <strong>Tezpatta (तेजपत्ता)</strong>, Meerut's premier fine-dining vegetarian destination opposite Apex Tower. Relish rich Paneer Lababdar, slow-simmered Dal Makhani, crispy Dahi Ke Shole, and sizzling Indo-Chinese dishes.
            </p>

            {/* Call To Actions */}
            <div ref={ctaRef} className="flex flex-wrap items-center gap-4 mb-10">
              <button
                onClick={() => scrollTo('menu')}
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#D97706] hover:bg-[#34D399] text-[#0C120C] font-semibold text-sm uppercase tracking-wider rounded-sm transition-all duration-300 shadow-md hover:shadow-[#D97706]/30 cursor-pointer"
              >
                <Utensils className="w-4 h-4" />
                Explore Pure-Veg Menu
              </button>

              <button
                onClick={() => scrollTo('reservations')}
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-transparent hover:bg-[#141D14] text-[#F5F8F3] border border-[#2A3A2A] hover:border-[#34D399] font-semibold text-sm uppercase tracking-wider rounded-sm transition-all duration-300 cursor-pointer"
              >
                Book A Table
                <ArrowRight className="w-4 h-4 text-[#34D399]" />
              </button>
            </div>

            {/* Live Service Micro-Info */}
            <div className="flex flex-wrap items-center gap-6 pt-6 border-t border-[#2A3A2A]/60 text-xs text-[#D1DCD0]/70">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#D97706]" />
                <span className="text-amber-400 font-semibold">{RESTAURANT_CONFIG.brand.opensSoon}</span>
              </div>
              <div className="h-3 w-[1px] bg-[#2A3A2A] hidden sm:block" />
              <div className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-[#34D399]" />
                <span>Opp. Apex Tower, Near Vishal Mega Mart & Pantaloons, Garh Rd, Meerut</span>
              </div>
            </div>
          </div>

          {/* Right Column: Hero High-Impact Image Card */}
          <div className="lg:col-span-5 relative" ref={imageContainerRef}>
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Outer Decorative Frame */}
              <div className="relative rounded-2xl overflow-hidden border border-[#2A3A2A] shadow-2xl bg-[#141D14]">
                <img
                  src="https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=1200&q=80"
                  alt="Handi Paneer Lababdar at Tezpatta Meerut"
                  className="w-full h-[460px] object-cover object-center transform hover:scale-105 transition-transform duration-700 ease-out"
                />
                
                {/* Gradient Overlay for Mood & Contrast */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0C120C] via-transparent to-transparent opacity-85" />

                {/* Floating Highlight Card */}
                <div className="absolute bottom-5 left-5 right-5 p-4 rounded-xl bg-[#141D14]/95 backdrop-blur-md border border-[#2A3A2A] flex items-center justify-between">
                  <div>
                    <span className="text-[10px] uppercase font-bold tracking-widest text-[#34D399]">
                      Chef's Signature Handi
                    </span>
                    <h3 className="text-sm font-serif font-bold text-[#F5F8F3]">
                      Handi Paneer Lababdar
                    </h3>
                  </div>
                  <div className="text-right">
                    <span className="text-lg font-serif font-bold text-[#D97706]">
                      ₹360
                    </span>
                  </div>
                </div>
              </div>

              {/* Decorative Corner Accent */}
              <div className="absolute -top-3 -right-3 w-20 h-20 border-t-2 border-r-2 border-[#34D399]/40 pointer-events-none rounded-tr-lg" />
              <div className="absolute -bottom-3 -left-3 w-20 h-20 border-b-2 border-l-2 border-[#34D399]/40 pointer-events-none rounded-bl-lg" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
