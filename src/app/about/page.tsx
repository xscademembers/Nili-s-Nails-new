'use client';

import { motion } from 'framer-motion';

export default function About() {
  return (
    <div className="pt-8 sm:pt-12 md:pt-16 pb-16 sm:pb-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-16 lg:gap-24 items-center mb-16 sm:mb-24 lg:mb-32">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-8"
          >
            <span className="text-[#E7646A] uppercase tracking-widest text-xs font-bold">The Heritage</span>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-serif leading-tight">Crafting Beauty <br /> Since 2022</h1>
            <p className="text-gray-500 leading-relaxed text-lg">
              Nili&apos;s Nail &amp; Beauty Lounge began with a simple idea in Vizag: a neighbourhood salon where hair,
              skin and nails are treated with the same care as a luxury salon, but in a warm, friendly space you can call
              your own.
            </p>
            <p className="text-gray-500 leading-relaxed">
              Founded by Nilima Seth &amp; Shabir Ahmad, Nili&apos;s has grown from a small studio into a full-service
              beauty destination for everyday grooming, special occasions and bridal makeovers. From precision haircuts
              and colour to advanced facials, nail extensions and head‑to‑toe rituals, every service is designed to make
              you feel relaxed, confident and beautifully yourself.
            </p>
            <div className="pt-6 grid grid-cols-2 gap-8">
              <div>
                <h4 className="text-3xl font-serif text-[#333]">12k+</h4>
                <p className="text-xs uppercase tracking-widest text-gray-400">Radiant Clients</p>
              </div>
              <div>
                <h4 className="text-3xl font-serif text-[#333]">15</h4>
                <p className="text-xs uppercase tracking-widest text-gray-400">Master Artists</p>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative"
          >
            <div className="rounded-2xl overflow-hidden aspect-[4/5] shadow-2xl">
              <img
                src="/1772001926808-wwo5lhj11ya.jpeg"
                alt="Founders Nilima Seth &amp; Shabir Ahmad at Nili's Nail &amp; Beauty Lounge"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-10 -left-10 bg-[#EAD8C0] p-6 sm:p-8 rounded-2xl hidden md:block max-w-[280px] lg:max-w-none">
              <p className="font-serif italic text-xl">&ldquo;Beauty is the illumination of your soul.&rdquo;</p>
              <p className="text-xs uppercase tracking-widest mt-4 text-gray-600">— Nilima Seth &amp; Shabir Ahmad, Founders</p>
            </div>
          </motion.div>
        </div>

        <div className="py-16 sm:py-24 border-t border-gray-100">
          <div className="text-center mb-12 sm:mb-20">
            <h2 className="text-3xl sm:text-4xl font-serif mb-4">Our Core Values</h2>
            <div className="w-20 h-[1px] bg-[#E7646A] mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 sm:gap-16">
            {[
              { title: 'Conscious Luxury', desc: 'We only partner with brands that are cruelty-free and environmentally responsible.' },
              { title: 'Unrivaled Artistry', desc: 'Our technicians undergo continuous education to master the latest global techniques.' },
              { title: 'Personalized Care', desc: 'No two individuals are the same. Your treatment is curated specifically for your chemistry.' },
            ].map((value, i) => (
              <div key={i} className="text-center space-y-6">
                <div className="w-16 h-16 bg-[#FAF9F6] border border-[#EAD8C0] rounded-full flex items-center justify-center mx-auto text-[#E7646A] font-serif text-2xl italic">
                  {i + 1}
                </div>
                <h3 className="text-xl font-serif">{value.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
