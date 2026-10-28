import React, { useState, useEffect } from 'react';
import { ShoppingBag, Menu as MenuIcon, X, PhoneCall, Utensils, Calendar } from 'lucide-react';
import { RestaurantLogo } from './RestaurantLogo';
import { useCart } from '../context/CartContext';
import { RESTAURANT_CONFIG } from '../restaurantConfig';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { totalCount, setIsCartOpen } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    setMobileMenuOpen(false);
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

  const navLinks = [
    { label: 'Home', target: 'hero' },
    { label: 'Signatures', target: 'signatures' },
    { label: 'Menu', target: 'menu' },
    { label: 'Our Story', target: 'about' },
    { label: 'Gallery', target: 'gallery' },
    { label: 'Reservations', target: 'reservations' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#180B0D]/95 backdrop-blur-md border-b border-[#4A1D24]/80 shadow-xl shadow-black/40 py-2.5 sm:py-3'
            : 'bg-gradient-to-b from-[#180B0D]/90 via-[#180B0D]/60 to-transparent py-3.5 sm:py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Brand Logo */}
          <div onClick={() => scrollToSection('hero')}>
            <RestaurantLogo />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-7">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => scrollToSection(link.target)}
                className="text-xs lg:text-sm font-medium tracking-wider text-[#E2D1D4] hover:text-[#FB7185] transition-colors relative group py-1 cursor-pointer uppercase"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#E11D48] transition-all duration-300 group-hover:w-full" />
              </button>
            ))}
          </nav>

          {/* Action CTAs & Cart */}
          <div className="flex items-center space-x-2.5 sm:space-x-4">
            <button
              onClick={() => scrollToSection('reservations')}
              className="hidden sm:inline-flex items-center px-4 py-2 text-xs font-semibold uppercase tracking-wider text-white bg-gradient-to-r from-[#E11D48] to-[#BE123C] hover:from-[#BE123C] hover:to-[#9F1239] rounded-sm transition-all duration-200 cursor-pointer shadow-md shadow-[#E11D48]/25"
            >
              Book Table
            </button>

            {/* Cart Trigger */}
            <button
              onClick={() => setIsCartOpen(true)}
              aria-label="Open Cart"
              className="relative p-2.5 rounded-full bg-[#221013] hover:bg-[#2B161A] border border-[#4A1D24] text-[#FFF5F5] hover:text-[#FB7185] transition-all cursor-pointer shadow-sm active:scale-95"
            >
              <ShoppingBag className="w-5 h-5 text-[#FB7185]" />
              {totalCount > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-[#E11D48] text-white text-[11px] font-bold rounded-full flex items-center justify-center animate-pulse border border-[#180B0D]">
                  {totalCount}
                </span>
              )}
            </button>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2.5 rounded-lg bg-[#221013] border border-[#4A1D24] text-[#E2D1D4] hover:text-white active:scale-95 transition-all"
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <MenuIcon className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Full-Screen Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#180B0D] border-b border-[#4A1D24] px-5 py-6 animate-in slide-in-from-top duration-300 shadow-2xl">
            <div className="flex items-center justify-between pb-4 border-b border-[#4A1D24]/60 mb-4">
              <span className="text-[11px] uppercase tracking-widest text-[#F59E0B] font-bold">
                Quick Navigation
              </span>
              <span className="text-xs text-[#E2D1D4]/60">Garh Road, Meerut</span>
            </div>

            <nav className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => scrollToSection(link.target)}
                  className="text-left text-base font-serif font-semibold text-[#FFF5F5] hover:text-[#FB7185] py-2 px-3 rounded-lg hover:bg-[#221013] transition-all flex items-center justify-between"
                >
                  <span>{link.label}</span>
                  <span className="text-xs text-[#E11D48]">&rarr;</span>
                </button>
              ))}

              <div className="pt-4 flex flex-col gap-2.5">
                <button
                  onClick={() => scrollToSection('reservations')}
                  className="w-full py-3 text-center text-xs font-bold uppercase tracking-wider text-white bg-gradient-to-r from-[#E11D48] to-[#BE123C] rounded-lg shadow-lg shadow-[#E11D48]/30 active:scale-98"
                >
                  Reserve A Table Online
                </button>

                <a
                  href={`tel:${RESTAURANT_CONFIG.contact.phoneTel}`}
                  className="w-full py-2.5 text-center text-xs font-medium uppercase tracking-wider text-[#E2D1D4] bg-[#221013] border border-[#4A1D24] rounded-lg flex items-center justify-center gap-2"
                >
                  <PhoneCall className="w-4 h-4 text-[#F59E0B]" />
                  Call {RESTAURANT_CONFIG.contact.phoneDisplay}
                </a>
              </div>
            </nav>
          </div>
        )}
      </header>

      {/* Floating Bottom Quick-Action Bar For Mobile Devices */}
      <div className="sm:hidden fixed bottom-3 left-3 right-3 z-30 bg-[#221013]/95 backdrop-blur-md border border-[#4A1D24] rounded-2xl p-2 shadow-2xl shadow-black/80 flex items-center justify-around">
        <button
          onClick={() => scrollToSection('menu')}
          className="flex flex-col items-center justify-center py-1 px-3 text-[#E2D1D4] active:text-[#FB7185]"
        >
          <Utensils className="w-4 h-4 text-[#FB7185]" />
          <span className="text-[10px] font-semibold tracking-wider uppercase mt-1">Menu</span>
        </button>

        <button
          onClick={() => scrollToSection('reservations')}
          className="flex items-center gap-1.5 px-4 py-2 bg-gradient-to-r from-[#E11D48] to-[#BE123C] text-white text-xs font-bold uppercase tracking-wider rounded-xl shadow-md active:scale-95"
        >
          <Calendar className="w-3.5 h-3.5" />
          <span>Book Table</span>
        </button>

        <button
          onClick={() => setIsCartOpen(true)}
          className="relative flex flex-col items-center justify-center py-1 px-3 text-[#E2D1D4] active:text-[#FB7185]"
        >
          <ShoppingBag className="w-4 h-4 text-[#F59E0B]" />
          <span className="text-[10px] font-semibold tracking-wider uppercase mt-1">Order</span>
          {totalCount > 0 && (
            <span className="absolute top-0 right-1 w-4 h-4 bg-[#E11D48] text-white text-[9px] font-bold rounded-full flex items-center justify-center">
              {totalCount}
            </span>
          )}
        </button>
      </div>
    </>
  );
};
