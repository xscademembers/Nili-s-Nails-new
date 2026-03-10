'use client';

import { motion } from 'framer-motion';
import {
  ArrowRight,
  Star,
  PlayCircle,
  Sparkles,
  Quote,
  Scissors,
  Droplets,
  HandHeart,
  Crown,
  Flower2,
  User,
} from 'lucide-react';
import Link from 'next/link';
import { TESTIMONIALS } from '@/lib/constants';

function FacialIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <ellipse cx="12" cy="11" rx="7" ry="9" />
      <circle cx="9" cy="10" r="0.8" fill="currentColor" stroke="none" />
      <circle cx="15" cy="10" r="0.8" fill="currentColor" stroke="none" />
      <path d="M10 14c.5.6 1.2 1 2 1s1.5-.4 2-1" />
      <path d="M5.5 6c1-1.5 3-2 4-1.5" />
      <path d="M18.5 6c-1-1.5-3-2-4-1.5" />
    </svg>
  );
}

const SPECIALITY_GROUPS = [
  {
    id: 'skin',
    title: 'Skin Rituals',
    anchor: '/services#cleanup',
    from: '₹600',
    summary: 'Clean ups, detan, bleach, facials & premium treatments.',
    items: ['Clean Up', 'Detan & Bleach', 'Facials', 'Premium Facials'],
    icon: FacialIcon,
  },
  {
    id: 'body',
    title: 'Glow & Body Care',
    anchor: '/services#waxing',
    from: '₹100',
    summary: 'Smooth, luminous skin from top to toe.',
    items: ['Threading', 'Waxing (Normal & Premium)', 'Body Polishing'],
    icon: Droplets,
  },
  {
    id: 'hands-feet',
    title: 'Hands & Feet Rituals',
    anchor: '/services#pedicure-manicure',
    from: '₹800',
    summary: 'Signature pedicures & manicures for perfect finishes.',
    items: ['Normal & Premium', "Nili's Signature", 'Rose, Bubble Gum, Ice Cream'],
    icon: HandHeart,
  },
  {
    id: 'hair',
    title: 'Hair Lounge (Women)',
    anchor: '/services#hair-cut-women',
    from: '₹400',
    summary: 'From classic cuts to advanced treatments.',
    items: ['Hair Cuts & Styling', 'Colour & Highlights', 'Keratin, Smoothening, Botox'],
    icon: Scissors,
  },
  {
    id: 'bridal',
    title: 'Bridal & Occasion',
    anchor: '/services#bridal',
    from: '₹2,000',
    summary: 'Full pre-bridal rituals and wedding day glam.',
    items: ['Pre-Bridal Package', 'Wedding Day Package', 'Party & Bridal Makeup'],
    icon: Crown,
  },
  {
    id: 'men',
    title: "Nili's Studio for Men",
    anchor: '/services#men',
    from: '₹100',
    summary: 'Dedicated grooming studio for him.',
    items: ['Hair Cuts & Styling', 'Colour & Spa', 'Beard Styling & Shaves'],
    icon: User,
  },
];

export default function Home() {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[calc(100vh-72px)] bg-[#FAF9F6] flex items-center">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-[#E7646A]/30 z-0 hidden lg:block" />
        <div className="absolute bottom-20 left-10 w-64 h-64 bg-[#EAD8C0]/20 rounded-full blur-3xl z-0" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10 pt-8 sm:pt-12 lg:pt-0">
          <div className="lg:col-span-6 space-y-6 sm:space-y-10 relative">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="inline-flex items-center space-x-4"
            >
              <div className="h-[1px] w-12 bg-[#E7646A]"></div>
              <span className="text-[#E7646A] uppercase tracking-[0.5em] text-[10px] font-bold">
                Bespoke Beauty Heritage
              </span>
            </motion.div>

            <div className="space-y-4">
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="text-4xl sm:text-5xl md:text-7xl xl:text-8xl font-serif text-[#333] leading-[1.1]"
              >
                The Art of <br />
                <span className="italic font-light text-[#E7646A]">Radiant</span> Living.
              </motion.h1>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="text-gray-500 text-base sm:text-lg md:text-xl max-w-lg leading-relaxed font-light"
              >
                From precision hair styling to indulgent facials, nails and bridal looks, every visit at Nili&apos;s
                is crafted to make you feel pampered, polished and confidently yourself.
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-8 pt-4"
            >
              <Link href="/contact" className="group relative px-8 sm:px-10 py-4 sm:py-5 bg-[#333] text-white rounded-full text-xs uppercase tracking-[0.15em] sm:tracking-[0.2em] overflow-hidden transition-all hover:pr-14 shadow-2xl w-full sm:w-auto text-center">
                <span className="relative z-10">Book Appointment</span>
                <ArrowRight className="absolute right-6 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all w-4 h-4" />
              </Link>

              <Link href="/services" className="text-xs uppercase tracking-[0.2em] text-[#333] border-b border-[#EAD8C0] pb-1 hover:border-[#E7646A] transition-all font-medium">
                View Treatment Menu
              </Link>
            </motion.div>
          </div>

          <div className="lg:col-span-6 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 1.2 }}
              className="relative z-10"
            >
              <div className="relative rounded-t-[60px] sm:rounded-t-[120px] lg:rounded-t-[200px] rounded-b-2xl overflow-hidden border-4 sm:border-8 lg:border-[12px] border-white shadow-2xl aspect-[4/5] max-w-[320px] sm:max-w-[400px] lg:max-w-[450px] mx-auto lg:ml-auto">
                <img
                  src="/1771999624467-d675flxk3qj.jpeg"
                  alt="Signature experience at Nili's Nail & Beauty Lounge"
                  className="w-full h-full object-cover scale-110 hover:scale-100 transition-transform duration-[2s]"
                />
              </div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8, duration: 1 }}
                className="absolute -bottom-12 -left-8 md:-left-20 w-48 h-64 rounded-2xl overflow-hidden border-8 border-white shadow-xl hidden sm:block"
              >
                <img
                  src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&q=80&w=600"
                  alt="Detail"
                  className="w-full h-full object-cover"
                />
              </motion.div>

              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -top-10 -right-10 w-32 h-32 hidden xl:flex items-center justify-center"
              >
                <svg viewBox="0 0 100 100" className="w-full h-full fill-current text-[#E7646A]/40">
                  <path id="circlePath" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" fill="transparent" />
                  <text className="text-[9px] uppercase tracking-[0.2em] font-bold">
                    <textPath xlinkHref="#circlePath">
                      NILI&apos;S NAIL &amp; BEAUTY LOUNGE • ESTABLISHED 2018 •
                    </textPath>
                  </text>
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <Star className="w-4 h-4 text-[#E7646A]" />
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-6 sm:bottom-10 left-1/2 -translate-x-1/2 hidden sm:flex flex-col items-center space-y-2 opacity-30"
        >
          <span className="text-[8px] uppercase tracking-[0.4em] font-bold">Scroll</span>
          <div className="w-[1px] h-12 bg-[#333]"></div>
        </motion.div>
      </section>

      {/* Philosophy Section */}
      <section className="relative py-16 sm:py-24 lg:py-36 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#FAF9F6] via-white to-[#FAF9F6]" />
        <div className="absolute top-1/4 -right-40 w-[500px] h-[500px] bg-[#E7646A]/25 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -left-40 w-[400px] h-[400px] bg-[#EAD8C0]/30 rounded-full blur-3xl" />
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23C6A75E' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")" }} />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-16 lg:gap-24 items-center">
            <div className="relative order-2 lg:order-1 min-w-0">
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="relative"
              >
                <div className="relative w-full rounded-3xl overflow-hidden shadow-[0_25px_80px_-20px_rgba(0,0,0,0.15)] aspect-[4/5] max-h-[640px]">
                  <img
                    src="/1772001005149-l7egu8oabg9.jpeg"
                    alt="Luxury facial treatment at Nili's Nail & Beauty Lounge"
                    className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 hover:scale-[1.02] block"
                  />
                  <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
                </div>
                <div className="absolute -z-10 -bottom-4 -right-4 w-full h-full rounded-3xl border-2 border-[#E7646A]/20" />
                <motion.div
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                  className="absolute -bottom-6 -right-4 lg:-right-6 max-w-[300px] bg-white/95 backdrop-blur-md p-8 rounded-2xl shadow-xl border border-[#EAD8C0]/60 hidden md:block"
                >
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-gradient-to-br from-[#E7646A] to-[#EAD8C0] flex items-center justify-center">
                      <Star className="w-6 h-6 text-[#E7646A] fill-[#E7646A]/40" />
                    </div>
                    <div>
                      <h3 className="font-serif text-xl text-[#333] mb-2 italic">The Nili&apos;s Promise</h3>
                      <p className="text-sm text-gray-600 leading-relaxed">Only organic, sustainably sourced products touch your skin.</p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </div>

            <div className="order-1 lg:order-2 lg:pl-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className="space-y-10"
              >
                <div>
                  <span className="inline-flex items-center gap-3 text-[#E7646A] uppercase tracking-[0.35em] text-[10px] font-bold mb-6 block">
                    <span className="w-10 h-px bg-gradient-to-r from-[#E7646A] to-[#EAD8C0]" />
                    Our Philosophy
                  </span>
                  <h2 className="text-3xl sm:text-4xl md:text-5xl xl:text-[3.25rem] font-serif leading-[1.12] text-[#333] tracking-tight">
                    Graceful Beauty,{' '}
                    <span className="italic font-light text-[#E7646A]">Everyday Confidence</span>.
                  </h2>
                </div>
                <p className="text-gray-500 text-lg leading-[1.75] max-w-xl">
                  We believe a salon visit should feel like a reset. From a simple blow‑dry to a full bridal makeover,
                  our artists focus on healthy hair, glowing skin and polished nails so you leave feeling relaxed,
                  refreshed and camera‑ready.
                </p>

                <div className="space-y-5 pt-2">
                  {[
                    { icon: Scissors, label: 'Hair & Styling Services', desc: 'Cuts, colour and smoothening' },
                    { icon: Droplets, label: 'Skin & Facial Rituals', desc: 'Clean-ups, de-tan and facials' },
                    { icon: HandHeart, label: 'Nail & Hand Care', desc: 'Manicures, pedicures and extensions' },
                    { icon: Crown, label: 'Bridal & Occasion Looks', desc: 'Makeup, hair and pre-bridal care' },
                  ].map((item, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 * idx, duration: 0.5 }}
                      className="group flex items-center gap-4 sm:gap-5 p-4 sm:p-5 rounded-2xl bg-white/70 backdrop-blur-sm border border-[#EAD8C0]/40 hover:border-[#E7646A]/30 hover:bg-white hover:shadow-lg hover:shadow-[#E7646A]/15 transition-all duration-300"
                    >
                      <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-gradient-to-br from-[#E7646A]/60 to-[#EAD8C0]/40 flex items-center justify-center text-[#E7646A] group-hover:from-[#E7646A] group-hover:to-[#EAD8C0] transition-colors duration-300">
                        <item.icon className="w-6 h-6" strokeWidth={1.5} />
                      </div>
                      <div>
                        <span className="block text-sm font-semibold tracking-wide text-[#333] group-hover:text-[#E7646A] transition-colors">{item.label}</span>
                        <span className="block text-xs text-gray-500 mt-0.5">{item.desc}</span>
                      </div>
                    </motion.div>
                  ))}
                </div>

                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#333] text-white text-sm font-medium uppercase tracking-[0.2em] hover:bg-[#222] transition-all duration-300 shadow-lg hover:shadow-xl group"
                >
                  Learn More About Us
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Specialties Section */}
      <section className="relative py-16 sm:py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[#FAF9F6]" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-gradient-to-b from-[#E7646A]/15 to-transparent rounded-full blur-2xl pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#EAD8C0]/20 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16"
          >
            <span className="inline-flex items-center gap-2 text-[#E7646A] uppercase tracking-[0.35em] text-[10px] font-bold mb-4">
              Our Specialties
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#333] mb-3">
              Curated Treatments
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-base sm:text-lg">
              A quick glance at our most-loved categories.
            </p>
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-[#E7646A] to-transparent mx-auto mt-6" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
            {SPECIALITY_GROUPS.map((group, idx) => (
              <motion.div
                key={group.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.08, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <Link
                  href={group.anchor}
                  className="group block bg-white rounded-2xl p-6 sm:p-7 border border-[#EAD8C0]/70 hover:border-[#E7646A]/50 shadow-sm hover:shadow-xl hover:shadow-[#E7646A]/10 transition-all duration-300 h-full flex flex-col"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="font-serif text-lg sm:text-xl text-[#333] mb-1 group-hover:text-[#E7646A] transition-colors">
                        {group.title}
                      </h3>
                      <p className="text-xs text-gray-500">
                        From {group.from}
                      </p>
                    </div>
                    <div className="w-9 h-9 rounded-xl bg-[#E7646A]/10 flex items-center justify-center group-hover:bg-[#E7646A]/20 transition-colors">
                      <group.icon className="w-5 h-5 text-[#E7646A]" />
                    </div>
                  </div>
                  <p className="text-sm text-gray-500 mb-4">
                    {group.summary}
                  </p>
                  <ul className="space-y-1.5 text-xs sm:text-sm text-[#333] mb-4">
                    {group.items.map((item) => (
                      <li key={item} className="flex items-center gap-2">
                        <span className="w-1 h-1 rounded-full bg-[#E7646A]" />
                        <span className="truncate">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <span className="mt-auto inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#E7646A] group-hover:gap-3 transition-all">
                    View detailed prices
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-12 sm:mt-16 text-center"
          >
            <Link
              href="/services"
              className="inline-flex items-center gap-3 px-8 sm:px-10 py-3.5 sm:py-4 rounded-full bg-[#333] text-white text-sm font-medium uppercase tracking-[0.2em] hover:bg-[#222] transition-all duration-300 shadow-lg hover:shadow-xl group"
            >
              View Full Price List
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Client Stories Section (Testimonials) */}
      <section className="relative py-16 sm:py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-[#FAF9F6] to-white" />
        <div className="absolute -top-24 -right-24 w-80 h-80 bg-[#E7646A]/15 rounded-full blur-3xl" />
        <div className="absolute bottom-0 -left-32 w-96 h-96 bg-[#EAD8C0]/25 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 mb-10 sm:mb-12"
          >
            <div>
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#E7646A]/15 text-[#E7646A] text-[11px] font-semibold tracking-[0.18em] uppercase mb-4">
                <Sparkles className="w-4 h-4" />
                Client Stories
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#333] mb-3">
                Real Results Shared by Our Happy Clients
              </h2>
              <p className="text-sm sm:text-base text-gray-600 max-w-xl">
                We&apos;re proud to be part of our clients&apos; beauty journeys. From visible skin
                improvements to renewed confidence, their experiences reflect the care and expertise
                we bring to every visit.
              </p>
            </div>

            <a
              href="https://www.google.com/search?sca_esv=c792f36581e0cd30&rlz=1C5BAPC_enIN1192IN1192&sxsrf=ANbL-n49rLWyAOWU2Laen5yqFBDMOPKa_A:1771065622975&kgmid=/g/11jt0xyscn&q=Nili%27s+Nail+and+Beauty+Lounge&shem=sumc,shrtsdl&shndl=30&source=sh/x/loc/uni/m1/1&kgs=c10e4ea914941b69&utm_source=sumc,shrtsdl,sh/x/loc/uni/m1/1"
              target="_blank"
              rel="noreferrer"
              className="self-start sm:self-auto inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#E7646A] text-white text-xs sm:text-sm font-semibold tracking-[0.18em] uppercase hover:bg-[#d4565c] transition-colors shadow-md shadow-[#E7646A]/30"
            >
              View All
              <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>

          {/* Cards Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 items-stretch">
            {/* Stats Card */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="md:col-span-2 lg:col-span-1"
            >
              <div className="h-full bg-[#E7646A] rounded-2xl sm:rounded-3xl px-6 py-7 sm:px-7 sm:py-8 text-white shadow-xl shadow-[#E7646A]/40">
                <p className="text-xs uppercase tracking-[0.25em] opacity-90 mb-4">
                  Active Clients
                </p>
                <p className="text-4xl sm:text-5xl font-serif mb-2">4,500+</p>
                <p className="text-xs text-white/80 mb-6 max-w-[13rem]">
                  Trusted by clients who return to Nili&apos;s for every important occasion.
                </p>

                <div className="flex items-center gap-3 mb-5">
                  <div className="flex -space-x-2">
                    {TESTIMONIALS.slice(0, 3).map((t) => (
                      <img
                        key={t.id}
                        src={t.image}
                        alt={t.name}
                        className="w-8 h-8 rounded-full border border-white/60 object-cover"
                      />
                    ))}
                  </div>
                  <span className="text-xs font-medium bg-white/15 px-2.5 py-1 rounded-full">
                    12K+ visits
                  </span>
                </div>

              <div className="space-y-2 text-xs">
                  <div className="flex items-center justify-between">
                    <span className="opacity-80">Google Rating</span>
                  <span className="font-semibold">4.8</span>
                  </div>
                  <div className="flex gap-1 text-[#FFD88A]">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>
                <p className="text-[11px] text-white/80 mt-3">
                  Average rating from 1,000+ verified reviews.
                </p>
                <a
                  href="https://www.google.com/search?sca_esv=c792f36581e0cd30&rlz=1C5BAPC_enIN1192IN1192&sxsrf=ANbL-n49rLWyAOWU2Laen5yqFBDMOPKa_A:1771065622975&kgmid=/g/11jt0xyscn&q=Nili%27s+Nail+and+Beauty+Lounge&shem=sumc,shrtsdl&shndl=30&source=sh/x/loc/uni/m1/1&kgs=c10e4ea914941b69&utm_source=sumc,shrtsdl,sh/x/loc/uni/m1/1"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 text-[11px] text-white/90 underline underline-offset-2 mt-1"
                >
                  View more on Google
                  <ArrowRight className="w-3 h-3" />
                </a>
                </div>
              </div>
            </motion.div>

            {/* Testimonial Cards */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="md:col-span-2 lg:col-span-3"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 h-full">
                {TESTIMONIALS.map((t, idx) => (
                  <div
                    key={t.id}
                    className={`relative bg-white rounded-2xl sm:rounded-3xl px-5 py-6 sm:px-6 sm:py-7 text-[#333] border border-[#EAD8C0]/80 shadow-sm flex flex-col ${
                      idx === 0 ? 'sm:col-span-1 lg:col-span-1' : ''
                    }`}
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <img
                          src={t.image}
                          alt={t.name}
                          className="w-9 h-9 rounded-full object-cover border border-[#EAD8C0]"
                        />
                        <div>
                          <p className="text-sm font-medium">{t.name}</p>
                          <p className="text-[11px] text-slate-300">{t.role}</p>
                        </div>
                      </div>
                      <Quote className="w-6 h-6 text-[#E7646A]" />
                    </div>

                    <div className="flex gap-1 text-[#FFC85C] mb-3">
                      {[...Array(t.rating)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-current" />
                      ))}
                    </div>

                    <p className="text-sm text-gray-700 leading-relaxed mb-4 flex-1">
                      &ldquo;{t.text}&rdquo;
                    </p>

                    <button className="mt-auto inline-flex items-center justify-center self-start px-3 py-1.5 rounded-full bg-[#FAF1F2] text-[11px] font-medium tracking-[0.16em] uppercase text-[#E7646A] hover:bg-[#E7646A]/10 transition-colors">
                      Read Story
                    </button>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-24 bg-[#E7646A]/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-6 sm:space-y-8">
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-serif">Start Your Transformation</h2>
          <p className="text-gray-600 max-w-xl mx-auto">Discover the perfect balance of luxury and well-being. Reserve your personalized experience today.</p>
          <div className="pt-6">
            <Link href="/contact" className="bg-[#333] text-white px-8 sm:px-12 py-4 sm:py-5 rounded-full text-xs sm:text-sm uppercase tracking-[0.2em] sm:tracking-[0.3em] hover:bg-black transition-all shadow-xl inline-block">
              Reserve Now
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
