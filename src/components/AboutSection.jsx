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
    <section id="about" ref={sectionRef} className="py-24 bg-[#120D0A] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Images Layout (Editorial Indian Heritage Architecture) */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="rounded-2xl overflow-hidden border border-[#3D2B20] shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1000&q=80"
                  alt="Maatribhoomi dining hall with warm terracotta glow"
                  className="w-full h-[400px] object-cover"
                />
              </div>

              {/* Overlapping Secondary Image */}
              <div className="hidden sm:block absolute -bottom-10 -right-8 w-60 h-60 rounded-xl overflow-hidden border-4 border-[#120D0A] shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=600&q=80"
                  alt="Hot Desi Ghee Jalebi and Rabdi at Maatribhoomi"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Decorative Brand Accent Box */}
              <div className="absolute top-6 -left-6 bg-[#1C1410]/95 backdrop-blur-md p-4 rounded-xl border border-[#3D2B20] hidden sm:block shadow-lg">
                <div className="flex items-center gap-1.5 mb-1">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 inline-block border border-emerald-300" />
                  <span className="text-xl font-serif font-bold text-[#E07A2B]">Pure Veg</span>
                </div>
                <p className="text-[11px] text-[#DFD5C2]/80 tracking-wide uppercase">No Meat • No Compromise</p>
              </div>
            </div>
          </div>

          {/* Text Story & Metrics */}
          <div className="lg:col-span-6 about-content">
            <span className="text-xs uppercase font-bold tracking-[0.25em] text-[#E07A2B]">
              The Maatribhoomi Philosophy
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-medium text-[#FBF7EE] mt-2 mb-6 leading-tight">
              {RESTAURANT_CONFIG.about.headline}
            </h2>

            <p className="text-sm sm:text-base text-[#DFD5C2]/85 leading-relaxed mb-4">
              {RESTAURANT_CONFIG.about.paragraph1}
            </p>

            <p className="text-sm sm:text-base text-[#DFD5C2]/70 leading-relaxed mb-8">
              {RESTAURANT_CONFIG.about.paragraph2}
            </p>

            {/* Configurable Metrics Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-[#3D2B20]">
              {RESTAURANT_CONFIG.about.stats.map((stat, i) => (
                <div key={i} className="text-left">
                  <span className="block text-2xl sm:text-3xl font-serif font-bold text-[#E8B358]">
                    {stat.value}
                  </span>
                  <span className="block text-[11px] text-[#DFD5C2]/60 tracking-wider uppercase mt-1">
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
