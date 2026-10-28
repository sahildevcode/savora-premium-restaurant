import React, { useRef, useEffect } from 'react';
import { RESTAURANT_CONFIG } from '../restaurantConfig';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const AboutSection = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.about-content', {
        opacity: 0,
        y: 35,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="py-20 sm:py-24 bg-[#240B10] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Images Layout */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-sm sm:max-w-md lg:max-w-none">
              <div className="rounded-2xl overflow-hidden border border-[#C99B52]/30 shadow-2xl shadow-black/80">
                <img
                  src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1000&q=80"
                  alt="Tezpatta dining hall opposite Apex Tower Meerut"
                  className="w-full h-64 sm:h-[400px] object-cover"
                />
              </div>

              {/* Overlapping Secondary Image */}
              <div className="hidden sm:block absolute -bottom-8 -right-6 w-52 h-52 rounded-xl overflow-hidden border-4 border-[#240B10] shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=600&q=80"
                  alt="Dal Makhani with white butter at Tezpatta"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Decorative Brand Accent Box */}
              <div className="absolute top-4 -left-4 sm:-left-6 bg-[#310D16]/95 backdrop-blur-md p-3 sm:p-4 rounded-xl border border-[#C99B52]/40 shadow-xl">
                <div className="flex items-center gap-1.5 mb-0.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block border border-emerald-300" />
                  <span className="text-base sm:text-xl font-serif font-bold text-[#C99B52]">100% Pure Veg</span>
                </div>
                <p className="text-[10px] sm:text-[11px] text-[#C9B8B8] tracking-wide uppercase font-sans">Royal Palace Dining</p>
              </div>
            </div>
          </div>

          {/* Text Story & Metrics */}
          <div className="lg:col-span-6 about-content mt-4 lg:mt-0">
            <span className="text-[11px] uppercase font-bold tracking-[0.25em] text-[#C99B52]">
              The Heritage of Tezpatta
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-medium text-[#FFF2E8] mt-1 mb-4 sm:mb-6 leading-tight">
              {RESTAURANT_CONFIG.about.headline}
            </h2>

            <p className="text-xs sm:text-base text-[#C9B8B8] leading-relaxed mb-3 sm:mb-4 font-light">
              {RESTAURANT_CONFIG.about.paragraph1}
            </p>

            <p className="text-xs sm:text-base text-[#C9B8B8]/80 leading-relaxed mb-6 sm:mb-8 font-light">
              {RESTAURANT_CONFIG.about.paragraph2}
            </p>

            {/* Metrics Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 pt-5 border-t border-[#C99B52]/20">
              {RESTAURANT_CONFIG.about.stats.map((stat, i) => (
                <div key={i} className="text-left bg-[#310D16]/60 p-2.5 rounded-lg border border-[#C99B52]/20">
                  <span className="block text-xl sm:text-3xl font-serif font-bold text-[#C99B52]">
                    {stat.value}
                  </span>
                  <span className="block text-[10px] sm:text-[11px] text-[#C9B8B8] tracking-wider uppercase mt-0.5 font-sans">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
