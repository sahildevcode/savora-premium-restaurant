import React, { useState } from 'react';
import { Calendar, Users, Clock, Mail, Phone, CheckCircle, AlertCircle, MessageSquare } from 'lucide-react';
import { RESTAURANT_CONFIG } from '../restaurantConfig';

export const ReservationSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    date: '',
    time: '19:00',
    guests: '2',
    notes: '',
  });

  const [status, setStatus] = useState(null); // 'success' | 'error'
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Validation checks
    if (!formData.name || !formData.phone || !formData.date || !formData.time) {
      setStatus({
        type: 'error',
        message: 'Please complete all required fields (Name, Phone, Date, Time).',
      });
      setIsSubmitting(false);
      return;
    }

    // Demo reservation completion simulation
    setTimeout(() => {
      setIsSubmitting(false);
      setStatus({
        type: 'success',
        message: `Thank you, ${formData.name}! Your reservation request for ${formData.guests} guests on ${formData.date} at ${formData.time} has been recorded in demo mode.`,
      });
    }, 600);
  };

  // Min date today
  const todayString = new Date().toISOString().split('T')[0];

  return (
    <section id="reservations" className="py-24 bg-[#0D0F12] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs uppercase font-bold tracking-[0.25em] text-[#E58A38]">
            Reserve Your Experience
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-medium text-[#F7F4EE] mt-2 mb-4">
            Table Reservations
          </h2>
          <div className="w-12 h-0.5 bg-[#E58A38] mx-auto mb-4" />
          <p className="text-sm sm:text-base text-[#D8D2C4]/70">
            For parties of 6 or larger, or custom private tasting menus, please call our dining manager directly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Reservation Form (7 Columns) */}
          <div className="lg:col-span-7 bg-[#171A21] rounded-2xl border border-[#2C3240] p-6 sm:p-8 shadow-xl">
            <h3 className="text-xl font-serif font-semibold text-[#F7F4EE] mb-2">
              Book A Table
            </h3>
            <p className="text-xs text-[#D8D2C4]/70 mb-6">
              Reservations are held for 15 minutes past scheduled time.
            </p>

            {status && (
              <div
                className={`p-4 rounded-lg mb-6 flex items-start gap-3 border ${
                  status.type === 'success'
                    ? 'bg-[#1C2029] border-emerald-500/50 text-emerald-300'
                    : 'bg-[#1C2029] border-amber-500/50 text-amber-300'
                }`}
              >
                {status.type === 'success' ? (
                  <CheckCircle className="w-5 h-5 shrink-0 text-emerald-400 mt-0.5" />
                ) : (
                  <AlertCircle className="w-5 h-5 shrink-0 text-amber-400 mt-0.5" />
                )}
                <div>
                  <p className="text-sm font-medium">{status.message}</p>
                  {status.type === 'success' && (
                    <p className="text-xs text-[#D8D2C4]/70 mt-1">
                      Note: This is a frontend demo interface. To integrate with your restaurant CRM, OpenTable, or Resy API, connect backend endpoint in <code className="text-[#E58A38]">ReservationSection.jsx</code>.
                    </p>
                  )}
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Full Name */}
                <div>
                  <label className="block text-xs uppercase font-medium tracking-wider text-[#D8D2C4] mb-1.5">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. Eleanor Vance"
                    className="w-full bg-[#1C2029] border border-[#2C3240] rounded-sm px-3.5 py-2.5 text-sm text-[#F7F4EE] placeholder-[#D8D2C4]/40 focus:outline-hidden focus:border-[#E58A38] transition-colors"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-xs uppercase font-medium tracking-wider text-[#D8D2C4] mb-1.5">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+1 (555) 000-0000"
                    className="w-full bg-[#1C2029] border border-[#2C3240] rounded-sm px-3.5 py-2.5 text-sm text-[#F7F4EE] placeholder-[#D8D2C4]/40 focus:outline-hidden focus:border-[#E58A38] transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {/* Date */}
                <div>
                  <label className="block text-xs uppercase font-medium tracking-wider text-[#D8D2C4] mb-1.5">
                    Date *
                  </label>
                  <div className="relative">
                    <input
                      type="date"
                      name="date"
                      min={todayString}
                      required
                      value={formData.date}
                      onChange={handleChange}
                      className="w-full bg-[#1C2029] border border-[#2C3240] rounded-sm px-3 py-2 text-sm text-[#F7F4EE] focus:outline-hidden focus:border-[#E58A38] transition-colors"
                    />
                  </div>
                </div>

                {/* Time */}
                <div>
                  <label className="block text-xs uppercase font-medium tracking-wider text-[#D8D2C4] mb-1.5">
                    Time *
                  </label>
                  <select
                    name="time"
                    value={formData.time}
                    onChange={handleChange}
                    className="w-full bg-[#1C2029] border border-[#2C3240] rounded-sm px-3 py-2.5 text-sm text-[#F7F4EE] focus:outline-hidden focus:border-[#E58A38] transition-colors"
                  >
                    <option value="17:00">5:00 PM</option>
                    <option value="17:30">5:30 PM</option>
                    <option value="18:00">6:00 PM</option>
                    <option value="18:30">6:30 PM</option>
                    <option value="19:00">7:00 PM (Prime)</option>
                    <option value="19:30">7:30 PM (Prime)</option>
                    <option value="20:00">8:00 PM</option>
                    <option value="20:30">8:30 PM</option>
                    <option value="21:00">9:00 PM</option>
                  </select>
                </div>

                {/* Guests */}
                <div>
                  <label className="block text-xs uppercase font-medium tracking-wider text-[#D8D2C4] mb-1.5">
                    Guests *
                  </label>
                  <select
                    name="guests"
                    value={formData.guests}
                    onChange={handleChange}
                    className="w-full bg-[#1C2029] border border-[#2C3240] rounded-sm px-3 py-2.5 text-sm text-[#F7F4EE] focus:outline-hidden focus:border-[#E58A38] transition-colors"
                  >
                    <option value="1">1 Guest</option>
                    <option value="2">2 Guests (Table for Two)</option>
                    <option value="3">3 Guests</option>
                    <option value="4">4 Guests</option>
                    <option value="5">5 Guests</option>
                    <option value="6+">6+ (Large Party)</option>
                  </select>
                </div>
              </div>

              {/* Special Requests / Dietary Notes */}
              <div>
                <label className="block text-xs uppercase font-medium tracking-wider text-[#D8D2C4] mb-1.5">
                  Special Notes or Allergies (Optional)
                </label>
                <textarea
                  name="notes"
                  rows="3"
                  value={formData.notes}
                  onChange={handleChange}
                  placeholder="Anniversary celebration, dietary restrictions, quiet corner preference..."
                  className="w-full bg-[#1C2029] border border-[#2C3240] rounded-sm p-3 text-sm text-[#F7F4EE] placeholder-[#D8D2C4]/40 focus:outline-hidden focus:border-[#E58A38] transition-colors"
                />
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3.5 bg-[#E58A38] hover:bg-[#F3B367] text-[#0D0F12] font-semibold text-xs uppercase tracking-wider rounded-sm transition-all duration-300 shadow-md hover:shadow-[#E58A38]/30 cursor-pointer disabled:opacity-50"
              >
                {isSubmitting ? 'Confirming Availability...' : 'Confirm Table Reservation'}
              </button>
            </form>
          </div>

          {/* Contact, Operating Hours, Map (5 Columns) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Direct Contact Card */}
            <div className="bg-[#171A21] rounded-2xl border border-[#2C3240] p-6 sm:p-8">
              <h3 className="text-lg font-serif font-semibold text-[#F7F4EE] mb-4">
                Location & Inquiries
              </h3>

              <div className="space-y-4 text-sm text-[#D8D2C4]">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-md bg-[#1C2029] border border-[#2C3240] text-[#E58A38] shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block text-xs text-[#D8D2C4]/60">Direct Reservations Line</span>
                    <a
                      href={`tel:${RESTAURANT_CONFIG.contact.phoneTel}`}
                      className="font-semibold text-white hover:text-[#E58A38] transition-colors"
                    >
                      {RESTAURANT_CONFIG.contact.phoneDisplay}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-md bg-[#1C2029] border border-[#2C3240] text-[#E58A38] shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block text-xs text-[#D8D2C4]/60">Concierge Email</span>
                    <a
                      href={`mailto:${RESTAURANT_CONFIG.contact.email}`}
                      className="font-medium text-white hover:text-[#E58A38] transition-colors"
                    >
                      {RESTAURANT_CONFIG.contact.email}
                    </a>
                  </div>
                </div>

                {/* WhatsApp Quick Action if configured */}
                {RESTAURANT_CONFIG.contact.whatsapp && (
                  <div className="pt-2">
                    <a
                      href={`https://wa.me/${RESTAURANT_CONFIG.contact.whatsapp.replace(/\D/g, '')}?text=Hello%20SAVORA%20Restaurant,%20I%20would%20like%20to%20inquire%20about%20a%20table%20reservation`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 w-full justify-center px-4 py-2.5 rounded-sm bg-[#1C2029] hover:bg-[#25D366]/20 border border-[#2C3240] hover:border-[#25D366] text-[#25D366] text-xs font-semibold uppercase tracking-wider transition-all"
                    >
                      <MessageSquare className="w-4 h-4" />
                      Chat On WhatsApp
                    </a>
                  </div>
                )}
              </div>

              {/* Hours Breakdown */}
              <div className="mt-6 pt-6 border-t border-[#2C3240]">
                <h4 className="text-xs uppercase font-bold tracking-wider text-[#E58A38] mb-3">
                  Dinner Hours
                </h4>
                <div className="space-y-2">
                  {RESTAURANT_CONFIG.hours.map((h, i) => (
                    <div key={i} className="flex justify-between text-xs text-[#D8D2C4]">
                      <span className="text-[#D8D2C4]/80">{h.days}</span>
                      <span className="font-medium text-white">{h.time}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Address & Google Maps Embed Card */}
            <div className="bg-[#171A21] rounded-2xl border border-[#2C3240] p-6 overflow-hidden">
              <div className="mb-3">
                <span className="text-xs text-[#D8D2C4]/60 uppercase tracking-wider">Address</span>
                <p className="text-sm font-semibold text-white">
                  {RESTAURANT_CONFIG.contact.address}
                </p>
                <p className="text-xs text-[#D8D2C4]">
                  {RESTAURANT_CONFIG.contact.cityStateZip}
                </p>
              </div>

              <a
                href={RESTAURANT_CONFIG.contact.mapLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#E58A38] hover:text-[#F3B367] transition-colors"
              >
                Open in Google Maps &rarr;
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
