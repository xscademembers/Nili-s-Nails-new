'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Maximize2, Loader2 } from 'lucide-react';

interface GalleryItem {
  _id?: string;
  id?: string;
  category: 'Hair' | 'Skin' | 'Nails';
  image: string;
  title: string;
}

export default function Gallery() {
  const [filter, setFilter] = useState<'All' | 'Hair' | 'Skin' | 'Nails'>('All');
  const [items, setItems] = useState<GalleryItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/gallery')
      .then((res) => res.json())
      .then((data: GalleryItem[]) => {
        setItems(data);
        setLoading(false);
      })
      .catch(() => {
        setItems([]);
        setLoading(false);
      });
  }, []);

  const filteredGallery =
    filter === 'All' ? items : items.filter((item) => item.category === filter);

  const getImageSrc = (image: string) => {
    const trimmed = image.trim();
    if (!trimmed) return '';
    if (trimmed.startsWith('/')) return trimmed;
    return `/api/image-proxy?url=${encodeURIComponent(trimmed)}`;
  };

  return (
    <div className="pt-8 sm:pt-12 md:pt-16 pb-16 sm:pb-24 bg-[#FAF9F6] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16 space-y-4 sm:space-y-6">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-serif">
            Portfolio of Grace
          </h1>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-8 pt-6 sm:pt-8">
            {(['All', 'Hair', 'Skin', 'Nails'] as const).map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`text-xs uppercase tracking-[0.3em] pb-2 transition-all ${
                  filter === f
                    ? 'text-[#E7646A] border-b-2 border-[#E7646A]'
                    : 'text-gray-400 border-b-2 border-transparent hover:text-gray-600'
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        {loading ? (
          <div className="flex justify-center py-20">
            <Loader2 className="w-8 h-8 animate-spin text-[#E7646A]" />
          </div>
        ) : (
          <motion.div
            layout
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-4 lg:gap-6"
          >
            <AnimatePresence mode="popLayout">
              {filteredGallery.map((item) => (
                <motion.div
                  key={item._id || item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.5 }}
                  className="group relative overflow-hidden rounded-2xl aspect-square shadow-sm cursor-pointer"
                >
                  <img
                    src={getImageSrc(item.image)}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-transparent sm:bg-black/40 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity flex flex-col items-center justify-end sm:justify-center text-white p-3 sm:p-6 text-center">
                    <Maximize2 className="w-6 h-6 sm:w-8 sm:h-8 mb-2 sm:mb-4 stroke-1 hidden sm:block" />
                    <h3 className="font-serif text-sm sm:text-xl mb-0.5 sm:mb-1 line-clamp-1">{item.title}</h3>
                    <p className="text-[9px] sm:text-[10px] uppercase tracking-widest text-[#EAD8C0]">
                      {item.category}
                    </p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        )}

        <div className="mt-16 sm:mt-24 text-center px-4">
          <p className="text-gray-500 italic mb-8 font-serif text-lg">
            &ldquo;Every finish tells a story of transformation.&rdquo;
          </p>
          <a
            href="https://www.instagram.com/nilisbeautylounge.vizag?igsh=N2kydW9ieGgxMzd5&utm_source=qr"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-3 text-sm uppercase tracking-widest text-[#E7646A] hover:text-[#d4545a] transition-colors"
          >
            <span>Follow our journey on Instagram</span>
          </a>
        </div>
      </div>
    </div>
  );
}
