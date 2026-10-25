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
        message: `Shukriya ${formData.name} ji! Aapki table reservation ${formData.guests} logon ke liye ${formData.date} ko ${formData.time} baje record ho gayi hai.`,
      });
    }, 600);
  };

  const todayString = new Date().toISOString().split('T')[0];

  return (
    <section id="reservations" className="py-24 bg-[#120D0A] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs uppercase font-bold tracking-[0.25em] text-[#E07A2B]">
            Pavitra Bhojan & Table Booking
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-medium text-[#FBF7EE] mt-2 mb-4">
            Table Aarakshan (आरक्षण)
          </h2>
          <div className="w-16 h-0.5 bg-[#E07A2B] mx-auto mb-4" />
          <p className="text-sm sm:text-base text-[#DFD5C2]/70">
            Sector 38, Noida par parivaar ke saath authentic Indian dining experience ke liye table book karein.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Reservation Form */}
          <div className="lg:col-span-7 bg-[#1C1410] rounded-2xl border border-[#3D2B20] p-6 sm:p-8 shadow-xl">
            <h3 className="text-xl font-serif font-semibold text-[#FBF7EE] mb-2">
              Family & Party Table Booking
            </h3>
            <p className="text-xs text-[#DFD5C2]/70 mb-6">
              Reservations are held for 15 minutes past scheduled arrival time.
            </p>

            {status && (
              <div
                className={`p-4 rounded-lg mb-6 flex items-start gap-3 border ${
                  status.type === 'success'
                    ? 'bg-[#241B16] border-emerald-500/50 text-emerald-300'
                    : 'bg-[#241B16] border-amber-500/50 text-amber-300'
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
                  <label className="block text-xs uppercase font-medium tracking-wider text-[#DFD5C2] mb-1.5">
                    Aapka Naam *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. Sahil Sharma"
                    className="w-full bg-[#241B16] border border-[#3D2B20] rounded-sm px-3.5 py-2.5 text-sm text-[#FBF7EE] placeholder-[#DFD5C2]/40 focus:outline-hidden focus:border-[#E07A2B] transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase font-medium tracking-wider text-[#DFD5C2] mb-1.5">
                    Mobile Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91 98765 43210"
                    className="w-full bg-[#241B16] border border-[#3D2B20] rounded-sm px-3.5 py-2.5 text-sm text-[#FBF7EE] placeholder-[#DFD5C2]/40 focus:outline-hidden focus:border-[#E07A2B] transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs uppercase font-medium tracking-wider text-[#DFD5C2] mb-1.5">
                    Tarikh (Date) *
                  </label>
                  <input
                    type="date"
                    name="date"
                    min={todayString}
                    required
                    value={formData.date}
                    onChange={handleChange}
                    className="w-full bg-[#241B16] border border-[#3D2B20] rounded-sm px-3 py-2 text-sm text-[#FBF7EE] focus:outline-hidden focus:border-[#E07A2B] transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase font-medium tracking-wider text-[#DFD5C2] mb-1.5">
                    Samay (Time) *
                  </label>
                  <select
                    name="time"
                    value={formData.time}
                    onChange={handleChange}
                    className="w-full bg-[#241B16] border border-[#3D2B20] rounded-sm px-3 py-2.5 text-sm text-[#FBF7EE] focus:outline-hidden focus:border-[#E07A2B] transition-colors"
                  >
                    <option value="12:30">12:30 PM (Lunch)</option>
                    <option value="13:30">1:30 PM (Lunch)</option>
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
                  <label className="block text-xs uppercase font-medium tracking-wider text-[#DFD5C2] mb-1.5">
                    Guests *
                  </label>
                  <select
                    name="guests"
                    value={formData.guests}
                    onChange={handleChange}
                    className="w-full bg-[#241B16] border border-[#3D2B20] rounded-sm px-3 py-2.5 text-sm text-[#FBF7EE] focus:outline-hidden focus:border-[#E07A2B] transition-colors"
                  >
                    <option value="2">2 Guests (Table for Two)</option>
                    <option value="4">4 Guests (Family Table)</option>
                    <option value="6">6 Guests</option>
                    <option value="8">8 Guests (Large Family)</option>
                    <option value="10+">10+ Guests (Royal Celebration)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs uppercase font-medium tracking-wider text-[#DFD5C2] mb-1.5">
                  Jain Bhojan / Birthday / Special Requests (Optional)
                </label>
                <textarea
                  name="notes"
                  rows="3"
                  value={formData.notes}
                  onChange={handleChange}
                  placeholder="Bina pyaaz-lahsun (No onion-garlic), anniversary decor, family celebration..."
                  className="w-full bg-[#241B16] border border-[#3D2B20] rounded-sm p-3 text-sm text-[#FBF7EE] placeholder-[#DFD5C2]/40 focus:outline-hidden focus:border-[#E07A2B] transition-colors"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3.5 bg-[#E07A2B] hover:bg-[#E8B358] text-[#120D0A] font-semibold text-xs uppercase tracking-wider rounded-sm transition-all duration-300 shadow-md hover:shadow-[#E07A2B]/30 cursor-pointer disabled:opacity-50"
              >
                {isSubmitting ? 'Checking Table Availability...' : 'Confirm Table Reservation'}
              </button>
            </form>
          </div>

          {/* Contact, Operating Hours, Map */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="bg-[#1C1410] rounded-2xl border border-[#3D2B20] p-6 sm:p-8">
              <h3 className="text-lg font-serif font-semibold text-[#FBF7EE] mb-4">
                Location & Call Booking
              </h3>

              <div className="space-y-4 text-sm text-[#DFD5C2]">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-md bg-[#241B16] border border-[#3D2B20] text-[#E07A2B] shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block text-xs text-[#DFD5C2]/60">Direct Table Hotline</span>
                    <a
                      href={`tel:${RESTAURANT_CONFIG.contact.phoneTel}`}
                      className="font-semibold text-white hover:text-[#E07A2B] transition-colors"
                    >
                      {RESTAURANT_CONFIG.contact.phoneDisplay}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-md bg-[#241B16] border border-[#3D2B20] text-[#E07A2B] shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block text-xs text-[#DFD5C2]/60">Metro & Landmark</span>
                    <span className="text-white font-medium">Near Botanical Garden Metro Station, Sector 38, Noida</span>
                  </div>
                </div>

                {/* WhatsApp Quick Action */}
                <div className="pt-2">
                  <a
                    href={`https://wa.me/919871123456?text=Namaste%20Maatribhoomi%20Restaurant,%20I%20would%20like%20to%20reserve%20a%20table`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 w-full justify-center px-4 py-2.5 rounded-sm bg-[#241B16] hover:bg-[#25D366]/20 border border-[#3D2B20] hover:border-[#25D366] text-[#25D366] text-xs font-semibold uppercase tracking-wider transition-all"
                  >
                    <MessageSquare className="w-4 h-4" />
                    Book via WhatsApp
                  </a>
                </div>
              </div>

              {/* Hours Breakdown */}
              <div className="mt-6 pt-6 border-t border-[#3D2B20]">
                <div className="flex items-center justify-between mb-3">
                  <h4 className="text-xs uppercase font-bold tracking-wider text-[#E07A2B]">
                    Dining Timings
                  </h4>
                  <span className="text-xs px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 font-medium border border-emerald-500/30">
                    Open Now
                  </span>
                </div>
                <div className="space-y-2">
                  {RESTAURANT_CONFIG.hours.map((h, i) => (
                    <div key={i} className="flex justify-between text-xs text-[#DFD5C2]">
                      <span className="text-[#DFD5C2]/80">{h.days}</span>
                      <span className="font-medium text-white">{h.time}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Address & Google Maps Embed Card */}
            <div className="bg-[#1C1410] rounded-2xl border border-[#3D2B20] p-6 overflow-hidden">
              <div className="mb-3">
                <span className="text-xs text-[#DFD5C2]/60 uppercase tracking-wider">Google Maps Location</span>
                <p className="text-sm font-semibold text-white">
                  {RESTAURANT_CONFIG.contact.address}
                </p>
                <p className="text-xs text-[#DFD5C2]">
                  {RESTAURANT_CONFIG.contact.cityStateZip}
                </p>
              </div>

              <a
                href={RESTAURANT_CONFIG.contact.mapLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#E07A2B] hover:text-[#E8B358] transition-colors"
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
