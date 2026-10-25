import React, { useState, useEffect } from 'react';
import { ShoppingBag, Menu as MenuIcon, X } from 'lucide-react';
import { RestaurantLogo } from './RestaurantLogo';
import { useCart } from '../context/CartContext';
import { RESTAURANT_CONFIG } from '../restaurantConfig';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { totalCount, setIsCartOpen } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    setMobileMenuOpen(false);
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

  const navLinks = [
    { label: 'Home', target: 'hero' },
    { label: 'Signatures', target: 'signatures' },
    { label: 'Menu', target: 'menu' },
    { label: 'About', target: 'about' },
    { label: 'Gallery', target: 'gallery' },
    { label: 'Reservations', target: 'reservations' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0D0F12]/90 backdrop-blur-md border-b border-[#2C3240]/60 shadow-lg py-3'
          : 'bg-gradient-to-b from-[#0D0F12]/80 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand / Logo */}
        <div onClick={() => scrollToSection('hero')}>
          <RestaurantLogo />
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => scrollToSection(link.target)}
              className="text-sm font-medium tracking-wide text-[#D8D2C4] hover:text-[#E58A38] transition-colors relative group py-1 cursor-pointer"
            >
              {link.label}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#E58A38] transition-all duration-300 group-hover:w-full" />
            </button>
          ))}
        </nav>

        {/* Action Controls: Reservation CTA & Cart Trigger */}
        <div className="flex items-center space-x-4">
          <button
            onClick={() => scrollToSection('reservations')}
            className="hidden sm:inline-flex items-center px-4 py-2 text-xs font-semibold uppercase tracking-wider text-[#0D0F12] bg-[#E58A38] hover:bg-[#F3B367] rounded-sm transition-all duration-200 cursor-pointer shadow-sm hover:shadow-[#E58A38]/30"
          >
            Book Table
          </button>

          {/* Cart Icon Button with Badge */}
          <button
            onClick={() => setIsCartOpen(true)}
            aria-label="Open Cart"
            className="relative p-2.5 rounded-full bg-[#171A21] hover:bg-[#1C2029] border border-[#2C3240] text-[#F7F4EE] hover:text-[#E58A38] transition-all cursor-pointer"
          >
            <ShoppingBag className="w-5 h-5" />
            {totalCount > 0 && (
              <span className="absolute -top-1 -right-1 w-5 h-5 bg-[#E58A38] text-[#0D0F12] text-xs font-bold rounded-full flex items-center justify-center animate-pulse">
                {totalCount}
              </span>
            )}
          </button>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg bg-[#171A21] border border-[#2C3240] text-[#D8D2C4] hover:text-white"
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#171A21] border-b border-[#2C3240] px-6 py-6 animate-in slide-in-from-top duration-300">
          <nav className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => scrollToSection(link.target)}
                className="text-left text-base font-medium text-[#F7F4EE] hover:text-[#E58A38] py-2 border-b border-[#2C3240]/40 transition-colors"
              >
                {link.label}
              </button>
            ))}
            <div className="pt-2 flex flex-col gap-3">
              <button
                onClick={() => scrollToSection('reservations')}
                className="w-full py-3 text-center text-sm font-semibold uppercase tracking-wider text-[#0D0F12] bg-[#E58A38] hover:bg-[#F3B367] rounded-sm transition-all"
              >
                Reserve a Table
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
