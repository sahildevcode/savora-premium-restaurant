import React from 'react';
import { ArrowUp, MapPin, Phone, Mail, Clock } from 'lucide-react';
import { RestaurantLogo } from './RestaurantLogo';
import { RESTAURANT_CONFIG } from '../restaurantConfig';

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const scrollToSection = (id) => {
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
    <footer className="bg-[#120708] border-t border-[#4A1D24] text-[#E2D1D4] pt-14 pb-20 sm:pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 sm:gap-10 pb-10 border-b border-[#4A1D24]/60">
          
          {/* Brand Info */}
          <div className="lg:col-span-4 space-y-3 sm:space-y-4">
            <RestaurantLogo />
            <p className="text-xs sm:text-sm text-[#E2D1D4]/75 leading-relaxed pr-4 mt-3">
              {RESTAURANT_CONFIG.brand.subtitle}
            </p>

            {/* Social Icons (SVGs) */}
            <div className="flex items-center gap-2.5 pt-1">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full bg-[#221013] hover:bg-[#E11D48] text-[#E2D1D4] hover:text-white border border-[#4A1D24] transition-colors"
                aria-label="Instagram"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full bg-[#221013] hover:bg-[#E11D48] text-[#E2D1D4] hover:text-white border border-[#4A1D24] transition-colors"
                aria-label="Facebook"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.374 14.5 5 15.667 5H18V0h-3.808C10.597 0 9 1.583 9 4.615V8z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Nav Links */}
          <div className="lg:col-span-3 space-y-2.5">
            <h4 className="text-xs uppercase font-bold tracking-widest text-[#FB7185]">
              Quick Links
            </h4>
            <ul className="space-y-1.5 text-xs sm:text-sm">
              <li>
                <button
                  onClick={() => scrollToSection('hero')}
                  className="hover:text-[#FB7185] transition-colors cursor-pointer"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('signatures')}
                  className="hover:text-[#FB7185] transition-colors cursor-pointer"
                >
                  Signature Handis
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('menu')}
                  className="hover:text-[#FB7185] transition-colors cursor-pointer"
                >
                  Full Pure-Veg Menu
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('about')}
                  className="hover:text-[#FB7185] transition-colors cursor-pointer"
                >
                  Our Philosophy
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('reservations')}
                  className="hover:text-[#FB7185] transition-colors cursor-pointer"
                >
                  Book A Table
                </button>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div className="lg:col-span-2 space-y-2.5">
            <h4 className="text-xs uppercase font-bold tracking-widest text-[#FB7185]">
              Service Hours
            </h4>
            <ul className="space-y-1.5 text-xs">
              {RESTAURANT_CONFIG.hours.map((item, idx) => (
                <li key={idx} className="flex flex-col">
                  <span className="text-white font-medium">{item.days}</span>
                  <span className="text-[#E2D1D4]/70">{item.time}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Location */}
          <div className="lg:col-span-3 space-y-2.5">
            <h4 className="text-xs uppercase font-bold tracking-widest text-[#FB7185]">
              Visit Us
            </h4>
            <p className="text-xs text-[#E2D1D4] leading-relaxed">
              {RESTAURANT_CONFIG.contact.address}<br />
              {RESTAURANT_CONFIG.contact.cityStateZip}
            </p>

            <div className="pt-1.5 text-xs space-y-1">
              <div>
                <a
                  href={`tel:${RESTAURANT_CONFIG.contact.phoneTel}`}
                  className="hover:text-[#FB7185] transition-colors font-bold text-white"
                >
                  {RESTAURANT_CONFIG.contact.phoneDisplay}
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#E2D1D4]/60">
          <p>
            &copy; {new Date().getFullYear()} {RESTAURANT_CONFIG.brand.name} Restaurant, Meerut. All rights reserved.
          </p>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#221013] hover:bg-[#2B161A] border border-[#4A1D24] text-[#E2D1D4] hover:text-[#FB7185] transition-all cursor-pointer"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
