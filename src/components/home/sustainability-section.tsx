'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function SustainabilitySection() {
  return (
    <section className="flex justify-center items-center py-10 px-4 sm:px-6 lg:px-12">
      <motion.div
        className="w-full max-w-7xl bg-[#fdf2e7] rounded-[60px] overflow-hidden px-6 sm:px-10 py-10 sm:py-14"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex flex-col lg:flex-row items-center gap-10">
          {/* Text */}
          <motion.div
            className="lg:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-6">
              Sustainability for all.
            </h2>
            <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-6">
              The UAE Green Agenda 2030 is a government-led initiative that aims to make the UAE a global leader in sustainable development. Gulf Ticket is proud to be a part of this initiative, and we are committed to doing our part to create a better future for the planet.
            </p>
            <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-6">
              We believe that everyone has a part to play in making the world a more livable place, and that we all need to work together to ensure that we leave a healthy planet for future generations.
            </p>
            <button className="bg-[#e6941e] hover:bg-[#cf8419] text-white font-semibold px-6 py-3 rounded-full transition">
              KNOW MORE
            </button>
          </motion.div>

          {/* Image */}
          <motion.div
            className="lg:w-1/2 flex justify-center"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Image
              src="/sustainability-bg.png"
              alt="Palm Tree"
              width={500}
              height={500}
              className="object-contain max-h-[500px] w-auto"
              priority
            />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
