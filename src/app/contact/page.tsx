'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Clock, Send, CheckCircle, Loader2, MessageCircle, Instagram } from 'lucide-react';

const GOOGLE_MAPS_URL = 'https://maps.app.goo.gl/DEn3CzyX6bkHnojdA';

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'Hair Styling & Color',
    message: '',
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!form.name || !form.email || !form.message) {
      setError('Please fill in all required fields');
      return;
    }

    setSubmitting(true);

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setSubmitted(true);
        setForm({
          name: '',
          email: '',
          phone: '',
          service: 'Hair Styling & Color',
          message: '',
        });
      } else {
        setError('Something went wrong. Please try again.');
      }
    } catch {
      setError('Failed to send. Please try again later.');
    }

    setSubmitting(false);
  };

  return (
    <div className="pt-8 sm:pt-12 md:pt-16 pb-16 sm:pb-24 bg-[#FAF9F6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-24">
          <div className="space-y-12">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <h1 className="text-4xl sm:text-5xl md:text-7xl font-serif mb-6 sm:mb-8">
                Reach Out
              </h1>
              <p className="text-gray-500 text-lg leading-relaxed">
                We invite you to experience a new standard of beauty. Whether you
                have questions or wish to book a private consultation, our concierge
                team is here to assist.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-12">
              <div className="space-y-4">
                <div className="flex items-center space-x-3 text-[#E7646A]">
                  <MapPin className="w-5 h-5" />
                  <h4 className="font-serif text-xl text-[#333]">Location</h4>
                </div>
                <p className="text-sm text-gray-500 leading-relaxed pl-8">
                  First floor, plot no 44, below Let&apos;s Go Gym, North Extension, Balayya Sastri Layout, Seethammadara, Vrindavan, Visakhapatnam, Andhra Pradesh 530013
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center space-x-3 text-[#E7646A]">
                  <Phone className="w-5 h-5" />
                  <h4 className="font-serif text-xl text-[#333]">Contact</h4>
                </div>
                <p className="text-sm text-gray-500 leading-relaxed pl-8 space-y-1">
                  <a href="tel:+919346007152" className="block hover:text-[#E7646A]">+91 9346007152</a>
                  <a href="https://wa.me/919346007152" target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-[#E7646A]">
                    <MessageCircle className="w-4 h-4" />
                    WhatsApp: 9346007152
                  </a>
                  <a
                    href="https://www.instagram.com/nilisbeautylounge.vizag?igsh=N2kydW9ieGgxMzd5&utm_source=qr"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 hover:text-[#E7646A] whitespace-nowrap"
                  >
                    <Instagram className="w-4 h-4" />
                    Instagram: @nilisbeautylounge.vizag
                  </a>
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center space-x-3 text-[#E7646A]">
                  <Clock className="w-5 h-5" />
                  <h4 className="font-serif text-xl text-[#333]">Hours</h4>
                </div>
                <div className="text-sm text-gray-500 leading-relaxed pl-8 space-y-1">
                  <p>Mon - Fri: 9:00 AM - 8:00 PM</p>
                  <p>Sat: 10:00 AM - 6:00 PM</p>
                  <p>Sun: By Appointment Only</p>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <div className="h-52 sm:h-64 md:h-72 rounded-2xl sm:rounded-3xl overflow-hidden shadow-sm border border-gray-100">
                <iframe
                  title="Nili's Nail & Beauty Lounge Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3800.060979534567!2d83.30387051127887!3d17.74176569242847!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a39452d4d49b06d%3A0x8d8de0fe6f309c8e!2sNili&#39;s%20Nail%20and%20Beauty%20Lounge!5e0!3m2!1sen!2sin!4v1772112808023!5m2!1sen!2sin"
                  className="w-full h-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <button
                type="button"
                onClick={() => window.open(GOOGLE_MAPS_URL, '_blank', 'noopener,noreferrer')}
                className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#E7646A] hover:text-[#d4545a] transition-colors"
              >
                <span>View larger map in Google Maps</span>
              </button>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white p-6 sm:p-8 md:p-12 rounded-2xl sm:rounded-3xl shadow-xl border border-gray-100"
          >
            {submitted ? (
              <div className="text-center py-12 space-y-4">
                <CheckCircle className="w-16 h-16 text-green-500 mx-auto" />
                <h3 className="text-2xl font-serif">Thank You!</h3>
                <p className="text-gray-500">
                  We&apos;ve received your inquiry and will get back to you shortly.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="text-[#E7646A] text-sm underline mt-4"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <>
                <h3 className="text-2xl sm:text-3xl font-serif mb-6 sm:mb-8 text-center">
                  Inquiry Form
                </h3>

                {error && (
                  <div className="bg-red-50 text-red-600 text-sm p-3 rounded-xl mb-4">
                    {error}
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                    <div className="space-y-2">
                      <label className="text-[10px] uppercase tracking-widest text-gray-400 ml-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        value={form.name}
                        onChange={(e) =>
                          setForm({ ...form, name: e.target.value })
                        }
                        className="w-full bg-[#FAF9F6] border-none rounded-xl p-4 text-sm focus:ring-1 focus:ring-[#E7646A] focus:outline-none"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] uppercase tracking-widest text-gray-400 ml-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        value={form.email}
                        onChange={(e) =>
                          setForm({ ...form, email: e.target.value })
                        }
                        className="w-full bg-[#FAF9F6] border-none rounded-xl p-4 text-sm focus:ring-1 focus:ring-[#E7646A] focus:outline-none"
                        required
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest text-gray-400 ml-1">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      value={form.phone}
                      onChange={(e) =>
                        setForm({ ...form, phone: e.target.value })
                      }
                      className="w-full bg-[#FAF9F6] border-none rounded-xl p-4 text-sm focus:ring-1 focus:ring-[#E7646A] focus:outline-none"
                      placeholder="Optional"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest text-gray-400 ml-1">
                      Service Interest
                    </label>
                    <select
                      value={form.service}
                      onChange={(e) =>
                        setForm({ ...form, service: e.target.value })
                      }
                      className="w-full bg-[#FAF9F6] border-none rounded-xl p-4 text-sm focus:ring-1 focus:ring-[#E7646A] focus:outline-none appearance-none"
                    >
                      <option>Hair Styling &amp; Color</option>
                      <option>Bespoke Skin Treatment</option>
                      <option>Luxury Nail Care</option>
                      <option>Wedding Package</option>
                      <option>General Inquiry</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest text-gray-400 ml-1">
                      Your Message *
                    </label>
                    <textarea
                      rows={6}
                      value={form.message}
                      onChange={(e) =>
                        setForm({ ...form, message: e.target.value })
                      }
                      className="w-full bg-[#FAF9F6] border-none rounded-xl p-4 text-sm focus:ring-1 focus:ring-[#E7646A] focus:outline-none resize-none"
                      required
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full bg-[#333] text-white py-5 rounded-xl text-xs uppercase tracking-widest hover:bg-black transition-all flex justify-center items-center space-x-2 shadow-lg disabled:opacity-50"
                  >
                    {submitting ? (
                      <Loader2 className="w-4 h-4 animate-spin" />
                    ) : (
                      <>
                        <span>Send Message</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </form>
              </>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
