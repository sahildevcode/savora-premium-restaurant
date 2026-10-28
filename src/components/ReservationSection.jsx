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
    <section id="reservations" className="py-24 bg-[#0C120C] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs uppercase font-bold tracking-[0.25em] text-[#34D399]">
            Reserve Your Experience
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-medium text-[#F5F8F3] mt-2 mb-4">
            Table Booking & Reservations
          </h2>
          <div className="w-16 h-0.5 bg-[#D97706] mx-auto mb-4" />
          <p className="text-sm sm:text-base text-[#D1DCD0]/70">
            Garh Road, Meerut par fine-dining family dinners, kitty parties aur celebrations ke liye table book karein.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Reservation Form */}
          <div className="lg:col-span-7 bg-[#141D14] rounded-2xl border border-[#2A3A2A] p-6 sm:p-8 shadow-xl">
            <h3 className="text-xl font-serif font-semibold text-[#F5F8F3] mb-2">
              Book A Table at Tezpatta
            </h3>
            <p className="text-xs text-[#D1DCD0]/70 mb-6">
              Reservations are held for 15 minutes past scheduled arrival time.
            </p>

            {status && (
              <div
                className={`p-4 rounded-lg mb-6 flex items-start gap-3 border ${
                  status.type === 'success'
                    ? 'bg-[#1C271C] border-emerald-500/50 text-emerald-300'
                    : 'bg-[#1C271C] border-amber-500/50 text-amber-300'
                }`}
              >
                {status.type === 'success' ? (
                  <CheckCircle className="w-5 h-5 shrink-0 text-emerald-400 mt-0.5" />
                ) : (
                  <AlertCircle className="w-5 h-5 shrink-0 text-amber-400 mt-0.5" />
                )}
                <div>
                  <p className="text-sm font-medium">{status.message}</p>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs uppercase font-medium tracking-wider text-[#D1DCD0] mb-1.5">
                    Aapka Naam *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. Rahul Sharma"
                    className="w-full bg-[#1C271C] border border-[#2A3A2A] rounded-sm px-3.5 py-2.5 text-sm text-[#F5F8F3] placeholder-[#D1DCD0]/40 focus:outline-hidden focus:border-[#34D399] transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase font-medium tracking-wider text-[#D1DCD0] mb-1.5">
                    Mobile Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91 94122 05500"
                    className="w-full bg-[#1C271C] border border-[#2A3A2A] rounded-sm px-3.5 py-2.5 text-sm text-[#F5F8F3] placeholder-[#D1DCD0]/40 focus:outline-hidden focus:border-[#34D399] transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs uppercase font-medium tracking-wider text-[#D1DCD0] mb-1.5">
                    Tarikh (Date) *
                  </label>
                  <input
                    type="date"
                    name="date"
                    min={todayString}
                    required
                    value={formData.date}
                    onChange={handleChange}
                    className="w-full bg-[#1C271C] border border-[#2A3A2A] rounded-sm px-3 py-2 text-sm text-[#F5F8F3] focus:outline-hidden focus:border-[#34D399] transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase font-medium tracking-wider text-[#D1DCD0] mb-1.5">
                    Samay (Time) *
                  </label>
                  <select
                    name="time"
                    value={formData.time}
                    onChange={handleChange}
                    className="w-full bg-[#1C271C] border border-[#2A3A2A] rounded-sm px-3 py-2.5 text-sm text-[#F5F8F3] focus:outline-hidden focus:border-[#34D399] transition-colors"
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
                  <label className="block text-xs uppercase font-medium tracking-wider text-[#D1DCD0] mb-1.5">
                    Guests *
                  </label>
                  <select
                    name="guests"
                    value={formData.guests}
                    onChange={handleChange}
                    className="w-full bg-[#1C271C] border border-[#2A3A2A] rounded-sm px-3 py-2.5 text-sm text-[#F5F8F3] focus:outline-hidden focus:border-[#34D399] transition-colors"
                  >
                    <option value="2">2 Guests (Table for Two)</option>
                    <option value="4">4 Guests (Family Table)</option>
                    <option value="6">6 Guests</option>
                    <option value="8">8 Guests (Large Family)</option>
                    <option value="10+">10+ Guests (Celebration Hall)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs uppercase font-medium tracking-wider text-[#D1DCD0] mb-1.5">
                  Special Notes or Jain Food Requirement (Optional)
                </label>
                <textarea
                  name="notes"
                  rows="3"
                  value={formData.notes}
                  onChange={handleChange}
                  placeholder="Jain food (no onion-garlic), birthday celebration decor, anniversary..."
                  className="w-full bg-[#1C271C] border border-[#2A3A2A] rounded-sm p-3 text-sm text-[#F5F8F3] placeholder-[#D1DCD0]/40 focus:outline-hidden focus:border-[#34D399] transition-colors"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3.5 bg-[#D97706] hover:bg-[#34D399] text-[#0C120C] font-semibold text-xs uppercase tracking-wider rounded-sm transition-all duration-300 shadow-md hover:shadow-[#D97706]/30 cursor-pointer disabled:opacity-50"
              >
                {isSubmitting ? 'Checking Table Availability...' : 'Confirm Table Booking'}
              </button>
            </form>
          </div>

          {/* Contact, Operating Hours, Map */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="bg-[#141D14] rounded-2xl border border-[#2A3A2A] p-6 sm:p-8">
              <h3 className="text-lg font-serif font-semibold text-[#F5F8F3] mb-4">
                Location & Direct Line
              </h3>

              <div className="space-y-4 text-sm text-[#D1DCD0]">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-md bg-[#1C271C] border border-[#2A3A2A] text-[#34D399] shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block text-xs text-[#D1DCD0]/60">Call For Reservations</span>
                    <a
                      href={`tel:${RESTAURANT_CONFIG.contact.phoneTel}`}
                      className="font-semibold text-white hover:text-[#34D399] transition-colors"
                    >
                      {RESTAURANT_CONFIG.contact.phoneDisplay}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-md bg-[#1C271C] border border-[#2A3A2A] text-[#34D399] shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block text-xs text-[#D1DCD0]/60">Landmarks & Area</span>
                    <span className="text-white font-medium">Opposite Apex Tower, Near Vishal Mega Mart & Pantaloons, Garh Road, Mangal Pandey Nagar, Meerut</span>
                  </div>
                </div>

                {/* WhatsApp Quick Action */}
                <div className="pt-2">
                  <a
                    href={`https://wa.me/919412205500?text=Hello%20Tezpatta%20Restaurant,%20I%20would%20like%20to%20reserve%20a%20table`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 w-full justify-center px-4 py-2.5 rounded-sm bg-[#1C271C] hover:bg-[#25D366]/20 border border-[#2A3A2A] hover:border-[#25D366] text-[#25D366] text-xs font-semibold uppercase tracking-wider transition-all"
                  >
                    <MessageSquare className="w-4 h-4" />
                    Book via WhatsApp
                  </a>
                </div>
              </div>

              {/* Hours Breakdown */}
              <div className="mt-6 pt-6 border-t border-[#2A3A2A]">
                <div className="flex items-center justify-between mb-3">
                  <h4 className="text-xs uppercase font-bold tracking-wider text-[#34D399]">
                    Dining Timings
                  </h4>
                  <span className="text-xs px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-400 font-medium border border-amber-500/30">
                    Opens Soon • 6 PM
                  </span>
                </div>
                <div className="space-y-2">
                  {RESTAURANT_CONFIG.hours.map((h, i) => (
                    <div key={i} className="flex justify-between text-xs text-[#D1DCD0]">
                      <span className="text-[#D1DCD0]/80">{h.days}</span>
                      <span className="font-medium text-white">{h.time}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Address & Google Maps Embed Card */}
            <div className="bg-[#141D14] rounded-2xl border border-[#2A3A2A] p-6 overflow-hidden">
              <div className="mb-3">
                <span className="text-xs text-[#D1DCD0]/60 uppercase tracking-wider">Google Maps Location</span>
                <p className="text-sm font-semibold text-white">
                  {RESTAURANT_CONFIG.contact.address}
                </p>
                <p className="text-xs text-[#D1DCD0]">
                  {RESTAURANT_CONFIG.contact.cityStateZip}
                </p>
              </div>

              <a
                href={RESTAURANT_CONFIG.contact.mapLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#34D399] hover:text-[#D97706] transition-colors"
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
