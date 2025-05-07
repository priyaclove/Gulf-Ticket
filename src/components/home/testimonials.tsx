'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    name: 'Charles Patterson',
    role: 'One Year With Us',
    image: '/testimonials.avif',
    quote: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    color: 'text-purple-600',
  },
  {
    name: 'Anna Blake',
    role: 'One Year With Us',
    image: '/testimonials.avif',
    quote: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    color: 'text-pink-600',
  },
  {
    name: 'John Doe',
    role: 'One Year With Us',
    image: '/testimonials.avif',
    quote: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco.',
    color: 'text-purple-600',
  },
  {
    name: 'Sara Jones',
    role: 'Two Years With Us',
    image: '/testimonials.avif',
    quote: 'Duis aute irure dolor in reprehenderit in voluptate velit esse.',
    color: 'text-pink-600',
  },
  {
    name: 'Tom Smith',
    role: 'Six Months With Us',
    image: '/testimonials.avif',
    quote: 'Cillum dolore eu fugiat nulla pariatur.',
    color: 'text-purple-600',
  },
  {
    name: 'Emily Rose',
    role: 'One Year With Us',
    image: '/testimonials.avif',
    quote: 'Excepteur sint occaecat cupidatat non proident.',
    color: 'text-pink-600',
  },
  {
    name: 'Liam Brown',
    role: 'One Year With Us',
    image: '/testimonials.avif',
    quote: 'Nemo enim ipsam voluptatem quia voluptas.',
    color: 'text-purple-600',
  },
  {
    name: 'Emma Green',
    role: 'One Year With Us',
    image: '/testimonials.avif',
    quote: 'Sed ut perspiciatis unde omnis iste natus error.',
    color: 'text-pink-600',
  },
  {
    name: 'Michael Lee',
    role: 'One Year With Us',
    image: '/testimonials.avif',
    quote: 'Neque porro quisquam est qui dolorem.',
    color: 'text-purple-600',
  },
];

const ITEMS_PER_PAGE = 3;

export default function Testimonials() {
  const [page, setPage] = useState(0);
  const startIndex = page * ITEMS_PER_PAGE;
  const visibleTestimonials = testimonials.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const handlePrev = () => {
    if (page > 0) setPage(page - 1);
  };

  const handleNext = () => {
    if (startIndex + ITEMS_PER_PAGE < testimonials.length) setPage(page + 1);
  };

  return (
    <section className='bg-gradient-to-b from-white to-gray-100 '>
      <div className=" container mx-auto py-16 px-4 text-center">

        <h2 className="text-6xl  font-bold mb-10">What The People Thinks About Us</h2>
        <p className="text-gray-500 font-medium mb-8">&quot;From the hope to reality - Winning starts with a Single Tickets!&quot;</p>
        <div className="relative flex items-center justify-between gap-6">
          <button
            onClick={handlePrev}
            className="p-3 rounded-full bg-gray-200 hover:bg-gray-300 transition"
          >
            <ChevronLeft />
          </button>

          <AnimatePresence mode="wait">
            <motion.div
              key={page}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full"
            >
              {visibleTestimonials.map((t, i) => (
                <div
                  key={i}
                  className="bg-white p-6 rounded-2xl shadow-md text-center flex flex-col items-center"
                >
                  <img
                    src={t.image}
                    alt={t.name}
                    className="w-16 h-16 rounded-full object-cover mb-4"
                  />
                  <p className="font-semibold text-lg">{t.name}</p>
                  <p className="text-sm text-gray-400 mb-4">{t.role}</p>
                  <div className="text-6xl font-bold mb-2">
                    <span className={t.color}>&ldquo;</span>
                  </div>
                  <p className="text-gray-500 text-sm">{t.quote}</p>
                </div>
              ))}
            </motion.div>

          </AnimatePresence>

          <button
            onClick={handleNext}
            className="p-3 rounded-full bg-gray-200 hover:bg-gray-300 transition"
          >
            <ChevronRight />
          </button>
        </div>
      </div>
    </section>
  );
}
