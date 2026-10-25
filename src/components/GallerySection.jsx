import React, { useState, useEffect } from 'react';
import { X, ZoomIn } from 'lucide-react';
import { RESTAURANT_CONFIG } from '../restaurantConfig';

export const GallerySection = () => {
  const [activePhoto, setActivePhoto] = useState(null);

  // Support ESC key to close lightbox
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setActivePhoto(null);
      }
    };
    if (activePhoto) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [activePhoto]);

  return (
    <section id="gallery" className="py-24 bg-[#171A21] border-t border-[#2C3240]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs uppercase font-bold tracking-[0.25em] text-[#E58A38]">
            Atmosphere & Craft
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-medium text-[#F7F4EE] mt-2 mb-4">
            Visual Journal
          </h2>
          <div className="w-12 h-0.5 bg-[#E58A38] mx-auto mb-4" />
          <p className="text-sm sm:text-base text-[#D8D2C4]/70">
            A window into our dining hall, hearth kitchen, artisanal cocktail lounge, and plated presentations.
          </p>
        </div>

        {/* Varied Editorial Masonry Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {RESTAURANT_CONFIG.gallery.map((item, index) => {
            const isTall = index === 1 || index === 4;

            return (
              <div
                key={item.id}
                onClick={() => setActivePhoto(item)}
                className={`group relative rounded-xl overflow-hidden border border-[#2C3240] bg-[#1C2029] cursor-pointer ${
                  isTall ? 'sm:row-span-2' : ''
                }`}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  className={`w-full ${
                    isTall ? 'h-72 sm:h-full min-h-[380px]' : 'h-64 sm:h-72'
                  } object-cover group-hover:scale-105 transition-transform duration-500 ease-out`}
                />

                {/* Dark Gradient Overlay & Info Reveal on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0D0F12] via-[#0D0F12]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <span className="text-[10px] uppercase font-bold tracking-widest text-[#E58A38] mb-1">
                    {item.type}
                  </span>
                  <h3 className="text-lg font-serif font-bold text-white mb-1">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#D8D2C4]/80">
                    {item.caption}
                  </p>
                  <div className="mt-3 flex items-center gap-1.5 text-xs text-[#F3B367]">
                    <ZoomIn className="w-3.5 h-3.5" />
                    <span>Expand view</span>
                  </div>
                </div>

                {/* Always-visible type badge */}
                <div className="absolute top-3 left-3 px-2.5 py-1 rounded-sm bg-[#0D0F12]/70 backdrop-blur-sm text-[10px] font-semibold uppercase tracking-wider text-[#D8D2C4] border border-[#2C3240]">
                  {item.type}
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Lightbox Modal */}
      {activePhoto && (
        <div
          role="dialog"
          aria-modal="true"
          onClick={() => setActivePhoto(null)}
          className="fixed inset-0 z-50 bg-[#0D0F12]/95 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-200"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-4xl w-full bg-[#171A21] rounded-2xl overflow-hidden border border-[#2C3240] shadow-2xl flex flex-col"
          >
            {/* Close Button */}
            <button
              onClick={() => setActivePhoto(null)}
              className="absolute top-4 right-4 z-10 p-2.5 rounded-full bg-[#0D0F12]/80 hover:bg-[#E58A38] text-white hover:text-[#0D0F12] border border-[#2C3240] transition-colors cursor-pointer"
              aria-label="Close image modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Large Image */}
            <div className="max-h-[70vh] bg-black flex items-center justify-center overflow-hidden">
              <img
                src={activePhoto.image}
                alt={activePhoto.title}
                className="w-full h-full object-contain max-h-[70vh]"
              />
            </div>

            {/* Caption & Type Footer */}
            <div className="p-6 bg-[#171A21] border-t border-[#2C3240] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span className="text-xs uppercase font-bold tracking-widest text-[#E58A38]">
                  {activePhoto.type}
                </span>
                <h3 className="text-xl font-serif font-bold text-white mt-1">
                  {activePhoto.title}
                </h3>
                <p className="text-sm text-[#D8D2C4]/80 mt-1">
                  {activePhoto.caption}
                </p>
              </div>

              <div className="shrink-0 text-xs text-[#D8D2C4]/60">
                Press <kbd className="px-2 py-1 bg-[#1C2029] border border-[#2C3240] rounded text-white">ESC</kbd> to close
              </div>
            </div>

          </div>
        </div>
      )}
    </section>
  );
};
