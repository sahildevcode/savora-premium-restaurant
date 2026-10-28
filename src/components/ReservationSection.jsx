import React, { useState } from 'react';
import { Calendar, Users, Clock, Mail, Phone, CheckCircle, AlertCircle, MessageSquare, MapPin } from 'lucide-react';
import { RESTAURANT_CONFIG } from '../restaurantConfig';

export const ReservationSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    date: '',
    time: '19:30',
    guests: '4',
    notes: '',
  });

  const [status, setStatus] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (!formData.name || !formData.phone || !formData.date || !formData.time) {
      setStatus({
        type: 'error',
        message: 'Kripya sabhi zaroori fields (Naam, Phone, Date, Time) bharein.',
      });
      setIsSubmitting(false);
      return;
    }

    setTimeout(() => {
      setIsSubmitting(false);
      setStatus({
        type: 'success',
        message: `Dhanyawaad ${formData.name} ji! Aapki table reservation ${formData.guests} guests ke liye ${formData.date} ko ${formData.time} baje record kar li gayi hai.`,
      });
    }, 600);
  };

  const todayString = new Date().toISOString().split('T')[0];

  return (
    <section id="reservations" className="py-20 sm:py-24 bg-[#180B0D] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <span className="text-[11px] uppercase font-bold tracking-[0.25em] text-[#FB7185]">
            Table Booking & Reservations
          </span>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-serif font-medium text-[#FFF5F5] mt-1 mb-3">
            Book A Table Online
          </h2>
          <div className="w-16 h-0.5 bg-gradient-to-r from-[#E11D48] to-[#F59E0B] mx-auto mb-3" />
          <p className="text-xs sm:text-base text-[#E2D1D4]/75">
            Opposite Apex Tower, Garh Road, Meerut par fine-dining family dinners aur celebrations ke liye direct table book karein.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Reservation Form */}
          <div className="lg:col-span-7 bg-[#221013] rounded-2xl border border-[#4A1D24] p-5 sm:p-8 shadow-2xl shadow-black/60">
            <h3 className="text-lg sm:text-xl font-serif font-semibold text-[#FFF5F5] mb-1">
              Table Reservation Form
            </h3>
            <p className="text-xs text-[#E2D1D4]/70 mb-5">
              Reservations are held for 15 minutes past scheduled arrival time.
            </p>

            {status && (
              <div
                className={`p-3.5 sm:p-4 rounded-lg mb-5 flex items-start gap-2.5 border ${
                  status.type === 'success'
                    ? 'bg-[#2B161A] border-emerald-500/50 text-emerald-300'
                    : 'bg-[#2B161A] border-amber-500/50 text-amber-300'
                }`}
              >
                {status.type === 'success' ? (
                  <CheckCircle className="w-5 h-5 shrink-0 text-emerald-400 mt-0.5" />
                ) : (
                  <AlertCircle className="w-5 h-5 shrink-0 text-amber-400 mt-0.5" />
                )}
                <div>
                  <p className="text-xs sm:text-sm font-medium">{status.message}</p>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
                <div>
                  <label className="block text-[11px] uppercase font-medium tracking-wider text-[#E2D1D4] mb-1">
                    Aapka Naam *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. Rahul Sharma"
                    className="w-full bg-[#2B161A] border border-[#4A1D24] rounded-lg px-3.5 py-2.5 text-xs sm:text-sm text-[#FFF5F5] placeholder-[#E2D1D4]/40 focus:outline-hidden focus:border-[#E11D48] transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-[11px] uppercase font-medium tracking-wider text-[#E2D1D4] mb-1">
                    Mobile Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91 94122 05500"
                    className="w-full bg-[#2B161A] border border-[#4A1D24] rounded-lg px-3.5 py-2.5 text-xs sm:text-sm text-[#FFF5F5] placeholder-[#E2D1D4]/40 focus:outline-hidden focus:border-[#E11D48] transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 sm:gap-4">
                <div>
                  <label className="block text-[11px] uppercase font-medium tracking-wider text-[#E2D1D4] mb-1">
                    Tarikh (Date) *
                  </label>
                  <input
                    type="date"
                    name="date"
                    min={todayString}
                    required
                    value={formData.date}
                    onChange={handleChange}
                    className="w-full bg-[#2B161A] border border-[#4A1D24] rounded-lg px-3 py-2 text-xs sm:text-sm text-[#FFF5F5] focus:outline-hidden focus:border-[#E11D48] transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-[11px] uppercase font-medium tracking-wider text-[#E2D1D4] mb-1">
                    Samay (Time) *
                  </label>
                  <select
                    name="time"
                    value={formData.time}
                    onChange={handleChange}
                    className="w-full bg-[#2B161A] border border-[#4A1D24] rounded-lg px-3 py-2.5 text-xs sm:text-sm text-[#FFF5F5] focus:outline-hidden focus:border-[#E11D48] transition-colors"
                  >
                    <option value="18:00">6:00 PM (Opening)</option>
                    <option value="18:30">6:30 PM</option>
                    <option value="19:00">7:00 PM (Dinner)</option>
                    <option value="19:30">7:30 PM (Dinner)</option>
                    <option value="20:00">8:00 PM (Prime)</option>
                    <option value="20:30">8:30 PM (Prime)</option>
                    <option value="21:00">9:00 PM (Dinner)</option>
                    <option value="21:30">9:30 PM (Dinner)</option>
                    <option value="22:00">10:00 PM (Late Dinner)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[11px] uppercase font-medium tracking-wider text-[#E2D1D4] mb-1">
                    Guests *
                  </label>
                  <select
                    name="guests"
                    value={formData.guests}
                    onChange={handleChange}
                    className="w-full bg-[#2B161A] border border-[#4A1D24] rounded-lg px-3 py-2.5 text-xs sm:text-sm text-[#FFF5F5] focus:outline-hidden focus:border-[#E11D48] transition-colors"
                  >
                    <option value="2">2 Guests (Couple Table)</option>
                    <option value="4">4 Guests (Family Table)</option>
                    <option value="6">6 Guests</option>
                    <option value="8">8 Guests (Large Family)</option>
                    <option value="10+">10+ Guests (Celebration Hall)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-[11px] uppercase font-medium tracking-wider text-[#E2D1D4] mb-1">
                  Special Notes or Jain Food Requirement (Optional)
                </label>
                <textarea
                  name="notes"
                  rows="2"
                  value={formData.notes}
                  onChange={handleChange}
                  placeholder="Jain food (no onion-garlic), birthday celebration decor, anniversary..."
                  className="w-full bg-[#2B161A] border border-[#4A1D24] rounded-lg p-3 text-xs sm:text-sm text-[#FFF5F5] placeholder-[#E2D1D4]/40 focus:outline-hidden focus:border-[#E11D48] transition-colors"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3.5 bg-gradient-to-r from-[#E11D48] to-[#BE123C] hover:from-[#BE123C] hover:to-[#9F1239] text-white font-semibold text-xs uppercase tracking-wider rounded-lg transition-all duration-300 shadow-lg shadow-[#E11D48]/30 cursor-pointer disabled:opacity-50 active:scale-98"
              >
                {isSubmitting ? 'Checking Table Availability...' : 'Confirm Table Booking'}
              </button>
            </form>
          </div>

          {/* Contact, Operating Hours, Map */}
          <div className="lg:col-span-5 space-y-4 sm:space-y-6">
            
            <div className="bg-[#221013] rounded-2xl border border-[#4A1D24] p-5 sm:p-7 shadow-xl">
              <h3 className="text-base sm:text-lg font-serif font-semibold text-[#FFF5F5] mb-4">
                Location & Direct Line
              </h3>

              <div className="space-y-3.5 text-xs sm:text-sm text-[#E2D1D4]">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-[#2B161A] border border-[#4A1D24] text-[#FB7185] shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block text-[10px] sm:text-xs text-[#E2D1D4]/60">Call For Booking</span>
                    <a
                      href={`tel:${RESTAURANT_CONFIG.contact.phoneTel}`}
                      className="font-bold text-white hover:text-[#FB7185] transition-colors"
                    >
                      {RESTAURANT_CONFIG.contact.phoneDisplay}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-[#2B161A] border border-[#4A1D24] text-[#FB7185] shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block text-[10px] sm:text-xs text-[#E2D1D4]/60">Address & Landmark</span>
                    <span className="text-white font-medium">Opposite Apex Tower, Near Vishal Mega Mart & Pantaloons, Garh Road, Meerut</span>
                  </div>
                </div>

                {/* WhatsApp Quick Action */}
                <div className="pt-2">
                  <a
                    href={`https://wa.me/919412205500?text=Hello%20Tezpatta%20Restaurant,%20I%20would%20like%20to%20reserve%20a%20table`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 w-full justify-center px-4 py-2.5 rounded-lg bg-[#2B161A] hover:bg-[#25D366]/20 border border-[#4A1D24] hover:border-[#25D366] text-[#25D366] text-xs font-semibold uppercase tracking-wider transition-all"
                  >
                    <MessageSquare className="w-4 h-4" />
                    Book via WhatsApp
                  </a>
                </div>
              </div>

              {/* Hours Breakdown */}
              <div className="mt-5 pt-5 border-t border-[#4A1D24]">
                <div className="flex items-center justify-between mb-2.5">
                  <h4 className="text-[11px] uppercase font-bold tracking-wider text-[#FB7185]">
                    Dinner Timings
                  </h4>
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-amber-500/20 text-[#F59E0B] font-semibold border border-amber-500/30">
                    Opens 6:00 PM
                  </span>
                </div>
                <div className="space-y-1.5">
                  {RESTAURANT_CONFIG.hours.map((h, i) => (
                    <div key={i} className="flex justify-between text-xs text-[#E2D1D4]">
                      <span className="text-[#E2D1D4]/80">{h.days}</span>
                      <span className="font-medium text-white">{h.time}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Address & Google Maps Embed Card */}
            <div className="bg-[#221013] rounded-2xl border border-[#4A1D24] p-5">
              <div className="mb-2.5">
                <span className="text-[10px] text-[#E2D1D4]/60 uppercase tracking-wider">Google Maps Link</span>
                <p className="text-xs sm:text-sm font-semibold text-white mt-0.5">
                  {RESTAURANT_CONFIG.contact.address}
                </p>
              </div>

              <a
                href={RESTAURANT_CONFIG.contact.mapLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#FB7185] hover:text-[#F59E0B] transition-colors"
              >
                Directions on Google Maps &rarr;
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
