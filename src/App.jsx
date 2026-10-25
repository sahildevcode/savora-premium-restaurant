import React, { useEffect } from 'react';
import { CartProvider } from './context/CartContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { SignatureDishes } from './components/SignatureDishes';
import { MenuSection } from './components/MenuSection';
import { AboutSection } from './components/AboutSection';
import { GallerySection } from './components/GallerySection';
import { ReservationSection } from './components/ReservationSection';
import { Footer } from './components/Footer';
import { CartDrawer } from './components/CartDrawer';
import { ProductDetailsModal } from './components/ProductDetailsModal';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function App() {
  useEffect(() => {
    // Refresh ScrollTrigger once DOM mounts
    ScrollTrigger.refresh();
  }, []);

  return (
    <CartProvider>
      <div className="min-h-screen bg-[#0D0F12] text-[#F7F4EE] selection:bg-[#E58A38] selection:text-[#0D0F12] font-sans antialiased">
        {/* Persistent Floating Navigation */}
        <Navbar />

        {/* Main Content Sections */}
        <main>
          <Hero />
          <SignatureDishes />
          <MenuSection />
          <AboutSection />
          <GallerySection />
          <ReservationSection />
        </main>

        {/* Global Footer */}
        <Footer />

        {/* Interactive Modals and Drawers */}
        <CartDrawer />
        <ProductDetailsModal />
      </div>
    </CartProvider>
  );
}

export default App;
