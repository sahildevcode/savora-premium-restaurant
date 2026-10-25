import React, { useEffect, useRef } from 'react';
import { ArrowRight, Utensils, Clock, Sparkles } from 'lucide-react';
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
      // Staggered entrance animation
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
      className="relative min-h-[92vh] flex items-center pt-28 pb-16 overflow-hidden bg-[#0D0F12]"
    >
      {/* Subtle background ambient glow */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-[#E58A38]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-[#99581A]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Asymmetrical Editorial Narrative */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            
            {/* Top Cuisine & Status Pill */}
            <div ref={badgeRef} className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#171A21] border border-[#2C3240] w-fit mb-6">
              <Sparkles className="w-3.5 h-3.5 text-[#E58A38]" />
              <span className="text-xs uppercase font-medium tracking-widest text-[#D8D2C4]">
                {RESTAURANT_CONFIG.brand.cuisine}
              </span>
            </div>

            {/* Main Headline */}
            <h1
              ref={headlineRef}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-serif font-medium tracking-tight text-[#F7F4EE] leading-[1.1] mb-6"
            >
              Every Plate Tells <br />
              <span className="italic font-light text-[#F3B367]">An Unhurried Story</span> Of Fire & Flavor.
            </h1>

            {/* Supporting Description */}
            <p
              ref={descRef}
              className="text-base sm:text-lg text-[#D8D2C4]/80 max-w-xl leading-relaxed mb-8"
            >
              Immerse yourself in artisanal seasonal gastronomy. From our 72-hour stone-baked pizzas to 35-day dry-aged prime steaks seared over white oak coals.
            </p>

            {/* Call To Actions */}
            <div ref={ctaRef} className="flex flex-wrap items-center gap-4 mb-10">
              <button
                onClick={() => scrollTo('menu')}
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#E58A38] hover:bg-[#F3B367] text-[#0D0F12] font-semibold text-sm uppercase tracking-wider rounded-sm transition-all duration-300 shadow-md hover:shadow-[#E58A38]/30 cursor-pointer"
              >
                <Utensils className="w-4 h-4" />
                Explore Menu
              </button>

              <button
                onClick={() => scrollTo('reservations')}
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-transparent hover:bg-[#171A21] text-[#F7F4EE] border border-[#2C3240] hover:border-[#E58A38] font-semibold text-sm uppercase tracking-wider rounded-sm transition-all duration-300 cursor-pointer"
              >
                Reserve Table
                <ArrowRight className="w-4 h-4 text-[#E58A38]" />
              </button>
            </div>

            {/* Live Service Micro-Info */}
            <div className="flex items-center gap-6 pt-6 border-t border-[#2C3240]/60 text-xs text-[#D8D2C4]/70">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#E58A38]" />
                <span>Today: 5:00 PM – 11:00 PM</span>
              </div>
              <div className="h-3 w-[1px] bg-[#2C3240]" />
              <div>
                <span>San Francisco, California</span>
              </div>
            </div>
          </div>

          {/* Right Column: Hero High-Impact Image Card */}
          <div className="lg:col-span-5 relative" ref={imageContainerRef}>
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Outer Decorative Frame */}
              <div className="relative rounded-2xl overflow-hidden border border-[#2C3240] shadow-2xl bg-[#171A21]">
                <img
                  src="https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1200&q=80"
                  alt="Artisanal Ribeye Steak seared over white oak coals"
                  className="w-full h-[460px] object-cover object-center transform hover:scale-105 transition-transform duration-700 ease-out"
                />
                
                {/* Gradient Overlay for Mood & Contrast */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0D0F12] via-transparent to-transparent opacity-80" />

                {/* Floating Highlight Card */}
                <div className="absolute bottom-5 left-5 right-5 p-4 rounded-xl bg-[#171A21]/90 backdrop-blur-md border border-[#2C3240] flex items-center justify-between">
                  <div>
                    <span className="text-[10px] uppercase font-bold tracking-widest text-[#E58A38]">
                      Chef's Seasonal Feature
                    </span>
                    <h3 className="text-sm font-serif font-bold text-[#F7F4EE]">
                      Truffle Glazed Prime Ribeye
                    </h3>
                  </div>
                  <div className="text-right">
                    <span className="text-lg font-serif font-bold text-[#F3B367]">
                      $48
                    </span>
                  </div>
                </div>
              </div>

              {/* Decorative Corner Accent */}
              <div className="absolute -top-3 -right-3 w-20 h-20 border-t-2 border-r-2 border-[#E58A38]/40 pointer-events-none rounded-tr-lg" />
              <div className="absolute -bottom-3 -left-3 w-20 h-20 border-b-2 border-l-2 border-[#E58A38]/40 pointer-events-none rounded-bl-lg" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
