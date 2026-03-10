'use client';

import { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { TREATMENT_CATEGORIES } from '@/lib/treatments';
import {
  ArrowRight,
  Sparkles,
  Sun,
  Droplets,
  Flower2,
  Crown,
  Scissors,
  Leaf,
  Gem,
  Hand,
  Palette,
  FlaskConical,
  Wind,
  Heart,
  ChevronDown,
  Phone,
} from 'lucide-react';

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

function PolishingIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2l1.5 3.5L17 7l-3.5 1.5L12 12l-1.5-3.5L7 7l3.5-1.5L12 2z" />
      <path d="M5 14l1 2 2 1-2 1-1 2-1-2-2-1 2-1 1-2z" />
      <path d="M18 12l.75 1.5 1.5.75-1.5.75-.75 1.5-.75-1.5-1.5-.75 1.5-.75.75-1.5z" />
      <path d="M8 20c2-1 4-2 8-2" />
    </svg>
  );
}

function EyelashIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 12c0 0 4 5 9 5s9-5 9-5" />
      <path d="M3 12c0 0 4-5 9-5s9 5 9 5" />
      <circle cx="12" cy="12" r="3" />
      <path d="M12 5V2" />
      <path d="M8.5 5.5L7 3" />
      <path d="M15.5 5.5L17 3" />
      <path d="M5.5 7.5L3.5 5.5" />
      <path d="M18.5 7.5L20.5 5.5" />
    </svg>
  );
}

const ICON_MAP: Record<string, React.ReactNode> = {
  sparkles: <Sparkles className="w-5 h-5" />,
  sun: <Sun className="w-5 h-5" />,
  droplets: <Droplets className="w-5 h-5" />,
  flower: <Flower2 className="w-5 h-5" />,
  crown: <Crown className="w-5 h-5" />,
  scissors: <Scissors className="w-5 h-5" />,
  leaf: <Leaf className="w-5 h-5" />,
  gem: <Gem className="w-5 h-5" />,
  hand: <Hand className="w-5 h-5" />,
  palette: <Palette className="w-5 h-5" />,
  flask: <FlaskConical className="w-5 h-5" />,
  wind: <Wind className="w-5 h-5" />,
  heart: <Heart className="w-5 h-5" />,
  facial: <FacialIcon className="w-5 h-5" />,
  eyelash: <EyelashIcon className="w-5 h-5" />,
  polishing: <PolishingIcon className="w-5 h-5" />,
};

const WOMEN_ORDER: Record<string, number> = {
  'hair-cut-women': 1,
  'hair-colour-women': 2,
  'hair-treatment-women': 3,
  'nail-extension': 4,
  'eyelash-extension': 5,
  'pedicure-manicure': 6,
  'facials': 7,
  'detan': 8,
  'cleanup': 9,
  'waxing': 10,
  'bleach': 11,
  'threading': 12,
  'hair-spa-women': 13,
  'head-massage': 14,
  'polishing': 15,
  'premium-treatment': 16,
  'bridal': 17,
};

const HAIR_WOMEN_IDS = [
  'hair-cut-women',
  'hair-colour-women',
  'hair-treatment-women',
  'hair-spa-women',
  'head-massage',
];

const FACE_WOMEN_IDS = [
  'cleanup',
  'detan',
  'bleach',
  'facials',
  'premium-treatment',
  'threading',
  'pedicure-manicure',
  'waxing',
  'polishing',
];

const MEN_ORDER: Record<string, number> = {
  'men-haircut': 1,
  'men-hair-colour': 2,
  'men-hair-treatment': 3,
  'men-hair-spa': 4,
  'men-detan': 5,
  'men-cleanup': 6,
  'men-bleach': 7,
  'men-facials': 8,
  'men-premium': 9,
  'men-pedicure-manicure': 10,
  'men-polishing': 11,
  'men-head-massage': 12,
};

const sortByOrder = (cats: typeof TREATMENT_CATEGORIES, order: Record<string, number>) =>
  cats.slice().sort((a, b) => (order[a.id] ?? 999) - (order[b.id] ?? 999));

const womenCategoriesAll = sortByOrder(
  TREATMENT_CATEGORIES.filter((c) => !c.gender || c.gender === 'women'),
  WOMEN_ORDER,
);
const womenCategories = womenCategoriesAll.filter(
  (c) => !HAIR_WOMEN_IDS.includes(c.id) && !FACE_WOMEN_IDS.includes(c.id),
);
const MEN_HAIR_IDS = ['men-haircut', 'men-hair-colour', 'men-hair-treatment', 'men-hair-spa', 'men-head-massage'];
const MEN_FACE_IDS = ['men-detan', 'men-cleanup', 'men-bleach', 'men-facials', 'men-premium'];

const menCategoriesAll = sortByOrder(
  TREATMENT_CATEGORIES.filter((c) => c.gender === 'men'),
  MEN_ORDER,
);
const menCategories = menCategoriesAll.filter(
  (c) => !MEN_HAIR_IDS.includes(c.id) && !MEN_FACE_IDS.includes(c.id),
);

const hairCutWomen = TREATMENT_CATEGORIES.find((c) => c.id === 'hair-cut-women');
const hairColourWomen = TREATMENT_CATEGORIES.find((c) => c.id === 'hair-colour-women');
const hairTreatmentWomen = TREATMENT_CATEGORIES.find((c) => c.id === 'hair-treatment-women');
const hairSpaWomen = TREATMENT_CATEGORIES.find((c) => c.id === 'hair-spa-women');
const headMassage = TREATMENT_CATEGORIES.find((c) => c.id === 'head-massage');

const cleanupWomen = TREATMENT_CATEGORIES.find((c) => c.id === 'cleanup');
const detanWomen = TREATMENT_CATEGORIES.find((c) => c.id === 'detan');
const bleachWomen = TREATMENT_CATEGORIES.find((c) => c.id === 'bleach');
const facialsWomen = TREATMENT_CATEGORIES.find((c) => c.id === 'facials');
const premiumWomen = TREATMENT_CATEGORIES.find((c) => c.id === 'premium-treatment');
const threadingWomen = TREATMENT_CATEGORIES.find((c) => c.id === 'threading');
const pedicureManicureWomen = TREATMENT_CATEGORIES.find((c) => c.id === 'pedicure-manicure');
const waxingWomen = TREATMENT_CATEGORIES.find((c) => c.id === 'waxing');
const polishingWomen = TREATMENT_CATEGORIES.find((c) => c.id === 'polishing');

const HAIR_WOMEN_SECTIONS = [
  {
    title: 'Hair Cut',
    items: hairCutWomen?.items ?? [],
  },
  {
    title: 'Hair Colour',
    items: hairColourWomen?.items ?? [],
  },
  {
    title: 'Hair Treatments',
    items: hairTreatmentWomen?.items ?? [],
  },
  {
    title: 'Hair Spa',
    items: hairSpaWomen?.items ?? [],
  },
  {
    title: 'Head Massage',
    items: headMassage?.items ?? [],
  },
].filter((section) => section.items.length > 0);

const FACE_WOMEN_SECTIONS = [
  {
    title: 'Clean Up',
    items: cleanupWomen?.items ?? [],
  },
  {
    title: 'De-tan',
    items: detanWomen?.items ?? [],
  },
  {
    title: 'Bleach',
    items: bleachWomen?.items ?? [],
  },
  {
    title: 'Facials',
    items: facialsWomen?.items ?? [],
  },
  {
    title: 'Premium Treatments',
    items: premiumWomen?.items ?? [],
  },
  {
    title: 'Threading',
    items: threadingWomen?.items ?? [],
  },
  {
    title: 'Pedicure / Manicure',
    items: pedicureManicureWomen?.items ?? [],
  },
  {
    title: 'Waxing',
    items: waxingWomen?.items ?? [],
  },
  {
    title: 'Polishing',
    items: polishingWomen?.items ?? [],
  },
].filter((section) => section.items.length > 0);

const menHaircut = TREATMENT_CATEGORIES.find((c) => c.id === 'men-haircut');
const menHairColour = TREATMENT_CATEGORIES.find((c) => c.id === 'men-hair-colour');
const menHairTreatment = TREATMENT_CATEGORIES.find((c) => c.id === 'men-hair-treatment');
const menHairSpa = TREATMENT_CATEGORIES.find((c) => c.id === 'men-hair-spa');
const menHeadMassage = TREATMENT_CATEGORIES.find((c) => c.id === 'men-head-massage');

const MEN_HAIR_SECTIONS = [
  { title: 'Hair Cut', items: menHaircut?.items ?? [] },
  { title: 'Hair Colour', items: menHairColour?.items ?? [] },
  { title: 'Hair Treatments', items: menHairTreatment?.items ?? [] },
  { title: 'Hair Spa', items: menHairSpa?.items ?? [] },
  { title: 'Head Massage', items: menHeadMassage?.items ?? [] },
].filter((section) => section.items.length > 0);

const menDetan = TREATMENT_CATEGORIES.find((c) => c.id === 'men-detan');
const menCleanup = TREATMENT_CATEGORIES.find((c) => c.id === 'men-cleanup');
const menBleach = TREATMENT_CATEGORIES.find((c) => c.id === 'men-bleach');
const menFacials = TREATMENT_CATEGORIES.find((c) => c.id === 'men-facials');
const menPremium = TREATMENT_CATEGORIES.find((c) => c.id === 'men-premium');

const MEN_FACE_SECTIONS = [
  { title: 'Clean Up', items: menCleanup?.items ?? [] },
  { title: 'De-tan', items: menDetan?.items ?? [] },
  { title: 'Bleach', items: menBleach?.items ?? [] },
  { title: 'Facials', items: menFacials?.items ?? [] },
  { title: 'Premium Treatments', items: menPremium?.items ?? [] },
].filter((section) => section.items.length > 0);

export default function Services() {
  const [activeTab, setActiveTab] = useState<'women' | 'men'>('women');
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});

  useEffect(() => {
    const hash = window.location.hash.slice(1);
    if (hash) {
      if (hash === 'men') setActiveTab('men');
      setTimeout(() => {
        const el = document.getElementById(hash);
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 200);
    }
  }, []);

  const toggleExpand = (id: string) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  const scrollToCategory = (slug: string) => {
    setExpandedId(slug);
    setTimeout(() => {
      const el = document.getElementById(slug);
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 100);
  };

  return (
    <div className="min-h-screen bg-[#FAF9F6]">
      {/* Hero */}
      <section className="relative pt-8 sm:pt-14 pb-10 sm:pb-14 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#E7646A]/[0.04] via-transparent to-[#E7646A]/[0.02]" />
        <div className="absolute top-16 right-8 w-72 h-72 bg-[#E7646A]/[0.03] rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#E7646A]/[0.02] rounded-full blur-3xl -translate-x-1/2" />

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#E7646A]/10 text-[#E7646A] text-xs font-semibold tracking-wide uppercase mb-6">
              <Sparkles className="w-3.5 h-3.5" />
              Our Services
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif text-[#333] mb-4 leading-tight">
              Beauty &amp; Wellness
              <br />
              <span className="text-[#E7646A]">Menu</span>
            </h1>
            <p className="text-gray-500 max-w-lg mx-auto text-sm sm:text-base">
              Explore our curated range of treatments designed to make you look
              and feel your absolute best.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Unified Sticky Bar: Tabs + Quick Nav */}
      <div className="sticky top-[72px] z-30 bg-white shadow-sm border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          {/* Tab row */}
          <div className="flex items-center justify-between py-2.5">
            <div className="flex gap-1 bg-gray-100 rounded-full p-1">
              <button
                onClick={() => setActiveTab('women')}
                className={`px-5 sm:px-6 py-2 rounded-full text-sm font-medium transition-all ${
                  activeTab === 'women'
                    ? 'bg-[#E7646A] text-white shadow-md shadow-[#E7646A]/20'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                Women
              </button>
              <button
                onClick={() => setActiveTab('men')}
                className={`px-5 sm:px-6 py-2 rounded-full text-sm font-medium transition-all ${
                  activeTab === 'men'
                    ? 'bg-[#333] text-white shadow-md'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                Men
              </button>
            </div>

            <Link
              href="/contact"
              className="hidden sm:inline-flex items-center gap-2 text-sm text-[#E7646A] font-medium hover:underline underline-offset-4"
            >
              <Phone className="w-4 h-4" />
              Book Now
            </Link>
          </div>

          {/* Quick nav */}
          <div className="flex gap-2 pb-2.5 overflow-x-auto scrollbar-hide border-t border-gray-50 pt-2 -mx-4 px-4 sm:mx-0 sm:px-0">
            {activeTab === 'women' ? (
              <>
                <button
                  key="hair-women"
                  onClick={() => scrollToCategory('hair-women')}
                  className="flex-shrink-0 px-3 py-1.5 rounded-full text-xs font-medium transition-all whitespace-nowrap text-gray-500 bg-gray-50 hover:bg-[#E7646A]/10 hover:text-[#E7646A]"
                >
                  Hair
                </button>
                <button
                  key="face-women"
                  onClick={() => scrollToCategory('face-women')}
                  className="flex-shrink-0 px-3 py-1.5 rounded-full text-xs font-medium transition-all whitespace-nowrap text-gray-500 bg-gray-50 hover:bg-[#E7646A]/10 hover:text-[#E7646A]"
                >
                  Skin
                </button>
                {womenCategories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => scrollToCategory(cat.slug)}
                    className="flex-shrink-0 px-3 py-1.5 rounded-full text-xs font-medium transition-all whitespace-nowrap text-gray-500 bg-gray-50 hover:bg-[#E7646A]/10 hover:text-[#E7646A]"
                  >
                    {cat.name.replace(/ \(Women\)$/, '')}
                  </button>
                ))}
              </>
            ) : (
              <>
                <button
                  key="hair-men"
                  onClick={() => scrollToCategory('men-hair-main')}
                  className="flex-shrink-0 px-3 py-1.5 rounded-full text-xs font-medium transition-all whitespace-nowrap text-gray-500 bg-gray-50 hover:bg-[#333]/10 hover:text-[#333]"
                >
                  Hair
                </button>
                <button
                  key="face-men"
                  onClick={() => scrollToCategory('men-face-main')}
                  className="flex-shrink-0 px-3 py-1.5 rounded-full text-xs font-medium transition-all whitespace-nowrap text-gray-500 bg-gray-50 hover:bg-[#333]/10 hover:text-[#333]"
                >
                  Skin
                </button>
                {menCategories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => scrollToCategory(cat.slug)}
                    className="flex-shrink-0 px-3 py-1.5 rounded-full text-xs font-medium transition-all whitespace-nowrap text-gray-500 bg-gray-50 hover:bg-[#333]/10 hover:text-[#333]"
                  >
                    {cat.name.replace(/ \(Men\)$/, '')}
                  </button>
                ))}
              </>
            )}
          </div>
        </div>
      </div>

      {/* Categories */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8 sm:py-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3 }}
          >
            {activeTab === 'women' ? (
              <div className="space-y-4">
                {/* Combined Hair (Women) section */}
                {HAIR_WOMEN_SECTIONS.length > 0 && (
                  <motion.section
                    key="hair-women-main"
                    id="hair-women"
                    ref={(el) => {
                      sectionRefs.current['hair-women'] = el;
                    }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.05 }}
                    className="scroll-mt-[180px]"
                  >
                    <div className="bg-white rounded-2xl border border-[#E7646A]/20 shadow-lg shadow-[#E7646A]/[0.04]">
                      <button
                        onClick={() =>
                          toggleExpand('hair-women')
                        }
                        className="w-full flex items-center gap-4 p-5 sm:p-6 text-left"
                      >
                        <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 bg-[#E7646A] text-white">
                          <Scissors className="w-5 h-5" />
                        </div>
                        <div className="flex-grow min-w-0">
                          <h2 className="text-base sm:text-lg font-semibold text-[#333] leading-tight">
                            Hair (Women)
                          </h2>
                          <p className="text-xs text-gray-400 mt-0.5 line-clamp-2">
                            Cuts, colour, treatments, spa and head massage in one place.
                          </p>
                        </div>
                        <div className="flex items-center gap-3 flex-shrink-0">
                          <span className="hidden sm:inline-block text-xs text-gray-400">
                            {HAIR_WOMEN_SECTIONS.reduce(
                              (total, section) => total + section.items.length,
                              0,
                            )}{' '}
                            treatments
                          </span>
                          <ChevronDown
                            className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${
                              expandedId === 'hair-women' ? 'rotate-180' : ''
                            }`}
                          />
                        </div>
                      </button>

                      <AnimatePresence initial={false}>
                        {expandedId === 'hair-women' && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3, ease: 'easeInOut' }}
                            className="overflow-hidden"
                          >
                            <div className="px-5 sm:px-6 pb-5 sm:pb-6">
                              <div className="border-t border-gray-100 pt-4 space-y-5">
                                {HAIR_WOMEN_SECTIONS.map((section) => (
                                  <div key={section.title} className="space-y-2">
                                    <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-gray-500">
                                      {section.title}
                                    </h3>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                                      {section.items.map((item) => (
                                        <div
                                          key={item.name}
                                          className="flex items-center gap-3 px-4 py-3 rounded-xl bg-gray-50/80 hover:bg-[#E7646A]/[0.04] transition-colors group"
                                        >
                                          <div className="w-1.5 h-1.5 rounded-full bg-[#E7646A]/40 group-hover:bg-[#E7646A] transition-colors flex-shrink-0" />
                                          <span className="text-sm text-[#333] font-medium">
                                            {item.name}
                                          </span>
                                        </div>
                                      ))}
                                    </div>
                                  </div>
                                ))}
                                <div className="mt-4 flex justify-end">
                                  <a
                                    href="tel:+919346007152"
                                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#E7646A] text-white text-xs font-semibold hover:bg-[#d4565c] transition-all shadow-sm shadow-[#E7646A]/20 group"
                                  >
                                    <Phone className="w-3.5 h-3.5" />
                                    Book Now
                                  </a>
                                </div>
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </motion.section>
                )}

                {/* Combined Face (Women) section */}
                {FACE_WOMEN_SECTIONS.length > 0 && (
                  <motion.section
                    key="face-women-main"
                    id="face-women"
                    ref={(el) => {
                      sectionRefs.current['face-women'] = el;
                    }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.08 }}
                    className="scroll-mt-[180px]"
                  >
                    <div className="bg-white rounded-2xl border border-[#E7646A]/10 shadow-md">
                      <button
                        onClick={() => toggleExpand('face-women')}
                        className="w-full flex items-center gap-4 p-5 sm:p-6 text-left"
                      >
                        <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 bg-[#E7646A]/10 text-[#E7646A]">
                          <FacialIcon className="w-5 h-5" />
                        </div>
                        <div className="flex-grow min-w-0">
                          <h2 className="text-base sm:text-lg font-semibold text-[#333] leading-tight">
                            Skin (Women)
                          </h2>
                          <p className="text-xs text-gray-400 mt-0.5 line-clamp-2">
                            Clean-ups, de-tan, bleach, facials, premium rituals, threading, pedicure / manicure, waxing and polishing.
                          </p>
                        </div>
                        <div className="flex items-center gap-3 flex-shrink-0">
                          <span className="hidden sm:inline-block text-xs text-gray-400">
                            {FACE_WOMEN_SECTIONS.reduce(
                              (total, section) => total + section.items.length,
                              0,
                            )}{' '}
                            treatments
                          </span>
                          <ChevronDown
                            className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${
                              expandedId === 'face-women' ? 'rotate-180' : ''
                            }`}
                          />
                        </div>
                      </button>

                      <AnimatePresence initial={false}>
                        {expandedId === 'face-women' && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3, ease: 'easeInOut' }}
                            className="overflow-hidden"
                          >
                            <div className="px-5 sm:px-6 pb-5 sm:pb-6">
                              <div className="border-t border-gray-100 pt-4 space-y-5">
                                {FACE_WOMEN_SECTIONS.map((section) => (
                                  <div key={section.title} className="space-y-2">
                                    <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-gray-500">
                                      {section.title}
                                    </h3>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                                      {section.items.map((item) => (
                                        <div
                                          key={item.name}
                                          className="flex items-center gap-3 px-4 py-3 rounded-xl bg-gray-50/80 hover:bg-[#E7646A]/[0.04] transition-colors group"
                                        >
                                          <div className="w-1.5 h-1.5 rounded-full bg-[#E7646A]/40 group-hover:bg-[#E7646A] transition-colors flex-shrink-0" />
                                          <span className="text-sm text-[#333] font-medium">
                                            {item.name}
                                          </span>
                                        </div>
                                      ))}
                                    </div>
                                  </div>
                                ))}
                                <div className="mt-4 flex justify-end">
                                  <a
                                    href="tel:+919346007152"
                                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#E7646A] text-white text-xs font-semibold hover:bg-[#d4565c] transition-all shadow-sm shadow-[#E7646A]/20 group"
                                  >
                                    <Phone className="w-3.5 h-3.5" />
                                    Book Now
                                  </a>
                                </div>
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </motion.section>
                )}

                {/* Remaining women categories */}
                {womenCategories.map((cat, idx) => {
                  const isBridal = cat.id === 'bridal';
                  const isExpanded = expandedId === cat.slug;

                  if (isBridal) {
                    return (
                      <motion.section
                        key={cat.id}
                        id={cat.slug}
                        ref={(el) => {
                          sectionRefs.current[cat.slug] = el;
                        }}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: Math.min(idx * 0.03, 0.3) }}
                        className="scroll-mt-[180px]"
                      >
                        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#E7646A] via-[#e8757a] to-[#d4565c] p-6 sm:p-8 text-white">
                          <div className="absolute top-0 right-0 w-48 h-48 bg-white/5 rounded-full -translate-y-12 translate-x-12" />
                          <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/5 rounded-full translate-y-8 -translate-x-8" />

                          <div className="relative">
                            <div className="flex items-center gap-3 mb-2">
                              <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center">
                                <Heart className="w-5 h-5" />
                              </div>
                              <div>
                                <h2 className="text-xl sm:text-2xl font-serif font-semibold">
                                  {cat.name}
                                </h2>
                                <p className="text-white/70 text-xs">
                                  {cat.description}
                                </p>
                              </div>
                            </div>

                            <div className="grid sm:grid-cols-2 gap-2 mt-5">
                              {cat.items.map((item, i) => (
                                <div
                                  key={i}
                                  className="flex items-center gap-3 bg-white/10 hover:bg-white/15 rounded-xl px-4 py-3 transition-colors"
                                >
                                  <div className="w-1.5 h-1.5 rounded-full bg-white/60 flex-shrink-0" />
                                  <span className="text-sm font-medium">
                                    {item.name}
                                  </span>
                                </div>
                              ))}
                            </div>

                            <div className="mt-6 flex flex-wrap gap-3">
                              <Link
                                href="/contact"
                                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-[#E7646A] text-sm font-semibold hover:bg-white/90 transition-all group"
                              >
                                Book Bridal Consultation
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                              </Link>
                              <a
                                href="tel:+919346007152"
                                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/20 text-white text-sm font-semibold hover:bg-white/30 transition-all border border-white/30"
                              >
                                <Phone className="w-4 h-4" />
                                Call Now
                              </a>
                            </div>
                          </div>
                        </div>
                      </motion.section>
                    );
                  }

                  return (
                    <motion.section
                      key={cat.id}
                      id={cat.slug}
                      ref={(el) => {
                        sectionRefs.current[cat.slug] = el;
                      }}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: Math.min(idx * 0.03, 0.3) }}
                      className="scroll-mt-[180px]"
                    >
                      <div
                        className={`bg-white rounded-2xl border transition-all duration-300 ${
                          isExpanded
                            ? 'border-[#E7646A]/20 shadow-lg shadow-[#E7646A]/[0.04]'
                            : 'border-gray-100 hover:border-gray-200 hover:shadow-md'
                        }`}
                      >
                        <button
                          onClick={() => toggleExpand(cat.slug)}
                          className="w-full flex items-center gap-4 p-5 sm:p-6 text-left"
                        >
                          <div
                            className={`w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors ${
                              isExpanded
                                ? 'bg-[#E7646A] text-white'
                                : 'bg-[#E7646A]/10 text-[#E7646A]'
                            }`}
                          >
                            {ICON_MAP[cat.icon || 'sparkles']}
                          </div>
                          <div className="flex-grow min-w-0">
                            <h2 className="text-base sm:text-lg font-semibold text-[#333] leading-tight">
                              {cat.name}
                            </h2>
                            <p className="text-xs text-gray-400 mt-0.5 line-clamp-2">
                              {cat.description}
                            </p>
                          </div>
                          <div className="flex items-center gap-3 flex-shrink-0">
                            <span className="hidden sm:inline-block text-xs text-gray-400">
                              {cat.items.length} treatments
                            </span>
                            <ChevronDown
                              className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${
                                isExpanded ? 'rotate-180' : ''
                              }`}
                            />
                          </div>
                        </button>

                        <AnimatePresence initial={false}>
                          {isExpanded && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.3, ease: 'easeInOut' }}
                              className="overflow-hidden"
                            >
                              <div className="px-5 sm:px-6 pb-5 sm:pb-6">
                                <div className="border-t border-gray-100 pt-4">
                                  {cat.items.some((i) => i.pricePremium) && (
                                    <div className="flex items-center gap-2 mb-3">
                                      <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-[#E7646A]/5 text-[10px] uppercase tracking-wider text-[#E7646A] font-semibold">
                                        Normal &amp; Premium options available
                                      </span>
                                    </div>
                                  )}
                                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                                    {cat.items.map((item, i) => (
                                      <div
                                        key={i}
                                        className="flex items-center gap-3 px-4 py-3 rounded-xl bg-gray-50/80 hover:bg-[#E7646A]/[0.04] transition-colors group"
                                      >
                                        <div className="w-1.5 h-1.5 rounded-full bg-[#E7646A]/40 group-hover:bg-[#E7646A] transition-colors flex-shrink-0" />
                                        <span className="text-sm text-[#333] font-medium">
                                          {item.name}
                                        </span>
                                        {item.pricePremium && (
                                          <span className="ml-auto text-[10px] text-[#E7646A] bg-[#E7646A]/10 px-2 py-0.5 rounded-full font-medium flex-shrink-0">
                                            2 tiers
                                          </span>
                                        )}
                                      </div>
                                    ))}
                                  </div>
                                  <div className="mt-4 flex justify-end">
                                    <a
                                      href="tel:+919346007152"
                                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#E7646A] text-white text-xs font-semibold hover:bg-[#d4565c] transition-all shadow-sm shadow-[#E7646A]/20 group"
                                    >
                                      <Phone className="w-3.5 h-3.5" />
                                      Book Now
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    </motion.section>
                  );
                })}
              </div>
            ) : (
              <div className="space-y-4">
                {/* Combined Hair (Men) */}
                {MEN_HAIR_SECTIONS.length > 0 && (
                  <motion.section
                    key="men-hair-main"
                    id="men-hair-main"
                    ref={(el) => {
                      sectionRefs.current['men-hair-main'] = el;
                    }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.05 }}
                    className="scroll-mt-[180px]"
                  >
                    <div className="bg-white rounded-2xl border border-[#333]/20 shadow-lg shadow-[#333]/[0.06]">
                      <button
                        onClick={() => toggleExpand('men-hair-main')}
                        className="w-full flex items-center gap-4 p-5 sm:p-6 text-left"
                      >
                        <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 bg-[#333] text-white">
                          <Scissors className="w-5 h-5" />
                        </div>
                        <div className="flex-grow min-w-0">
                          <h2 className="text-base sm:text-lg font-semibold text-[#333] leading-tight">
                            Hair (Men)
                          </h2>
                          <p className="text-xs text-gray-400 mt-0.5 line-clamp-2">
                            Haircuts, colour, treatments, spa and head massage together.
                          </p>
                        </div>
                        <div className="flex items-center gap-3 flex-shrink-0">
                          <span className="hidden sm:inline-block text-xs text-gray-400">
                            {MEN_HAIR_SECTIONS.reduce(
                              (total, section) => total + section.items.length,
                              0,
                            )}{' '}
                            services
                          </span>
                          <ChevronDown
                            className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${
                              expandedId === 'men-hair-main' ? 'rotate-180' : ''
                            }`}
                          />
                        </div>
                      </button>

                      <AnimatePresence initial={false}>
                        {expandedId === 'men-hair-main' && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3, ease: 'easeInOut' }}
                            className="overflow-hidden"
                          >
                            <div className="px-5 sm:px-6 pb-5 sm:pb-6">
                              <div className="border-t border-gray-100 pt-4 space-y-5">
                                {MEN_HAIR_SECTIONS.map((section) => (
                                  <div key={section.title} className="space-y-2">
                                    <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-gray-500">
                                      {section.title}
                                    </h3>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                                      {section.items.map((item) => (
                                        <div
                                          key={item.name}
                                          className="flex items-center gap-3 px-4 py-3 rounded-xl bg-gray-50/80 hover:bg-[#333]/[0.04] transition-colors group"
                                        >
                                          <div className="w-1.5 h-1.5 rounded-full bg-[#333]/30 group-hover:bg-[#333] transition-colors flex-shrink-0" />
                                          <span className="text-sm text-[#333] font-medium">
                                            {item.name}
                                          </span>
                                        </div>
                                      ))}
                                    </div>
                                  </div>
                                ))}
                                <div className="mt-4 flex justify-end">
                                  <a
                                    href="tel:+919346007152"
                                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#333] text-white text-xs font-semibold hover:bg-[#222] transition-all shadow-sm shadow-[#333]/20 group"
                                  >
                                    <Phone className="w-3.5 h-3.5" />
                                    Book Now
                                  </a>
                                </div>
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </motion.section>
                )}

                {/* Combined Face (Men) */}
                {MEN_FACE_SECTIONS.length > 0 && (
                  <motion.section
                    key="men-face-main"
                    id="men-face-main"
                    ref={(el) => {
                      sectionRefs.current['men-face-main'] = el;
                    }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.08 }}
                    className="scroll-mt-[180px]"
                  >
                    <div className="bg-white rounded-2xl border border-[#333]/15">
                      <button
                        onClick={() => toggleExpand('men-face-main')}
                        className="w-full flex items-center gap-4 p-5 sm:p-6 text-left"
                      >
                        <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 bg-[#333]/10 text-[#333]">
                          <FacialIcon className="w-5 h-5" />
                        </div>
                        <div className="flex-grow min-w-0">
                          <h2 className="text-base sm:text-lg font-semibold text-[#333] leading-tight">
                            Skin (Men)
                          </h2>
                          <p className="text-xs text-gray-400 mt-0.5 line-clamp-2">
                            Clean-ups, de-tan, bleach, facials and premium skin rituals.
                          </p>
                        </div>
                        <div className="flex items-center gap-3 flex-shrink-0">
                          <span className="hidden sm:inline-block text-xs text-gray-400">
                            {MEN_FACE_SECTIONS.reduce(
                              (total, section) => total + section.items.length,
                              0,
                            )}{' '}
                            services
                          </span>
                          <ChevronDown
                            className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${
                              expandedId === 'men-face-main' ? 'rotate-180' : ''
                            }`}
                          />
                        </div>
                      </button>

                      <AnimatePresence initial={false}>
                        {expandedId === 'men-face-main' && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3, ease: 'easeInOut' }}
                            className="overflow-hidden"
                          >
                            <div className="px-5 sm:px-6 pb-5 sm:pb-6">
                              <div className="border-t border-gray-100 pt-4 space-y-5">
                                {MEN_FACE_SECTIONS.map((section) => (
                                  <div key={section.title} className="space-y-2">
                                    <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-gray-500">
                                      {section.title}
                                    </h3>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                                      {section.items.map((item) => (
                                        <div
                                          key={item.name}
                                          className="flex items-center gap-3 px-4 py-3 rounded-xl bg-gray-50/80 hover:bg-[#333]/[0.04] transition-colors group"
                                        >
                                          <div className="w-1.5 h-1.5 rounded-full bg-[#333]/30 group-hover:bg-[#333] transition-colors flex-shrink-0" />
                                          <span className="text-sm text-[#333] font-medium">
                                            {item.name}
                                          </span>
                                        </div>
                                      ))}
                                    </div>
                                  </div>
                                ))}
                                <div className="mt-4 flex justify-end">
                                  <a
                                    href="tel:+919346007152"
                                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#333] text-white text-xs font-semibold hover:bg-[#222] transition-all shadow-sm shadow-[#333]/20 group"
                                  >
                                    <Phone className="w-3.5 h-3.5" />
                                    Book Now
                                  </a>
                                </div>
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </motion.section>
                )}

                {/* Remaining Men's categories */}
                {menCategories.map((cat, idx) => {
                  const isExpanded = expandedId === cat.slug;

                  return (
                    <motion.section
                      key={cat.id}
                      id={cat.slug}
                      ref={(el) => {
                        sectionRefs.current[cat.slug] = el;
                      }}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: Math.min(idx * 0.03, 0.3) }}
                      className="scroll-mt-[180px]"
                    >
                      <div
                        className={`bg-white rounded-2xl border transition-all duration-300 ${
                          isExpanded
                            ? 'border-[#333]/20 shadow-lg shadow-[#333]/[0.06]'
                            : 'border-gray-100 hover:border-gray-200 hover:shadow-md'
                        }`}
                      >
                        <button
                          onClick={() => toggleExpand(cat.slug)}
                          className="w-full flex items-center gap-4 p-5 sm:p-6 text-left"
                        >
                          <div
                            className={`w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors ${
                              isExpanded
                                ? 'bg-[#333] text-white'
                                : 'bg-[#333]/10 text-[#333]'
                            }`}
                          >
                            {ICON_MAP[cat.icon || 'sparkles']}
                          </div>
                          <div className="flex-grow min-w-0">
                            <h2 className="text-base sm:text-lg font-semibold text-[#333] leading-tight">
                              {cat.name}
                            </h2>
                            <p className="text-xs text-gray-400 mt-0.5 line-clamp-2">
                              {cat.description}
                            </p>
                          </div>
                          <div className="flex items-center gap-3 flex-shrink-0">
                            <span className="hidden sm:inline-block text-xs text-gray-400">
                              {cat.items.length} treatments
                            </span>
                            <ChevronDown
                              className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${
                                isExpanded ? 'rotate-180' : ''
                              }`}
                            />
                          </div>
                        </button>

                        <AnimatePresence initial={false}>
                          {isExpanded && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.3, ease: 'easeInOut' }}
                              className="overflow-hidden"
                            >
                              <div className="px-5 sm:px-6 pb-5 sm:pb-6">
                                <div className="border-t border-gray-100 pt-4">
                                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                                    {cat.items.map((item, i) => (
                                      <div
                                        key={i}
                                        className="flex items-center gap-3 px-4 py-3 rounded-xl bg-gray-50/80 hover:bg-[#333]/[0.04] transition-colors group"
                                      >
                                        <div className="w-1.5 h-1.5 rounded-full bg-[#333]/30 group-hover:bg-[#333] transition-colors flex-shrink-0" />
                                        <span className="text-sm text-[#333] font-medium">
                                          {item.name}
                                        </span>
                                      </div>
                                    ))}
                                  </div>
                                  <div className="mt-4 flex justify-end">
                                    <a
                                      href="tel:+919346007152"
                                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#333] text-white text-xs font-semibold hover:bg-[#222] transition-all shadow-sm shadow-[#333]/20 group"
                                    >
                                      <Phone className="w-3.5 h-3.5" />
                                      Book Now
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    </motion.section>
                  );
                })}
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Bottom CTA */}
      <section className="border-t border-gray-100 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12 sm:py-16 text-center">
          <p className="text-[10px] uppercase tracking-[0.4em] text-gray-400 mb-3">
            Ready to get started?
          </p>
          <h2 className="text-2xl sm:text-3xl font-serif text-[#333] mb-3">
            Book Your Appointment
          </h2>
          <p className="text-gray-500 text-sm max-w-md mx-auto mb-8">
            Contact us for exact quotes, availability, and personalised
            recommendations.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#E7646A] text-white text-sm font-semibold hover:bg-[#d4565c] transition-all shadow-lg shadow-[#E7646A]/20 group"
            >
              Book Now
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <a
              href="tel:+919346007152"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-gray-200 text-[#333] text-sm font-medium hover:border-gray-300 hover:bg-gray-50 transition-all"
            >
              <Phone className="w-4 h-4" />
              Call Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
