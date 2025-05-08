"use client";
import React, { useState, useEffect, useRef } from 'react';
import Image from "next/image";
import { motion } from 'framer-motion';

// TypeScript interfaces
interface Winner {
  name: string;
  image: string;
  prize?: string;
  date?: string;
}

const DrawWinners: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [showAll, setShowAll] = useState<boolean>(false);
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  // Sample winners data
  const winners: Winner[] = [
    {
      name: "Vignesh M",
      image: "/winner1.jpg",
      prize: "AED 50,000",
      date: "01 Aug 2024"
    },
    {
      name: "Rajeev C",
      image: "/winner.avif",
      prize: "AED 50,000",
      date: "02 Aug 2024"
    },
    {
      name: "Jadi Shivakrishna",
      image: "/winner1.jpg",
      prize: "AED 50,000",
      date: "03 Aug 2024"
    }
  ];

  // Animation sequence for winners
  useEffect(() => {
    if (!isVisible) return;

    const animationSequence = async () => {
      // Reset to initial state
      setShowAll(false);
      setActiveIndex(0);

      // Cycle through each winner
      for (let i = 0; i < winners.length; i++) {
        setActiveIndex(i);
        await new Promise(resolve => setTimeout(resolve, 1800));
      }

      // Show all winners after cycle completes
      setShowAll(true);
    };

    // Start animation sequence
    const timeout = setTimeout(() => {
      animationSequence();
    }, 500);

    return () => clearTimeout(timeout);
  }, [isVisible]);

  // Intersection observer for section visibility
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  // Current date formatted for display
  const currentDate = new Date().toLocaleDateString('en-US', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric'
  }).replace(/\//g, ':');

  return (
    <div
      ref={sectionRef}
      className="relative bg-gradient-to-r from-[#006b91] to-[#005a7a] text-white  overflow-hidden p-6 md:p-10 shadow-2xl"
    >
      {/* Decorative elements */}
      <div className="absolute right-0 top-0 w-1/2 h-full bg-[#004766] z-0 transform skew-x-[20deg] translate-x-20" />
      <div className="absolute -left-12 -bottom-12 w-48 h-48 bg-[#007ba5] opacity-30 rounded-full blur-xl" />
      <div className="absolute right-10 top-20 w-24 h-24 bg-[#f39c1c] opacity-20 rounded-full blur-xl" />

      {/* Animated particles */}
      {isVisible && (
        <>
          {[...Array(10)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 rounded-full bg-white opacity-30"
              initial={{
                x: Math.random() * 1000,
                y: Math.random() * 500,
                opacity: 0.1
              }}
              animate={{
                y: [null, Math.random() * -100],
                opacity: [0.1, 0.8, 0],
                scale: [1, 1.5, 0]
              }}
              transition={{
                duration: 5 + Math.random() * 10,
                repeat: Infinity,
                delay: Math.random() * 5
              }}
            />
          ))}
        </>
      )}

      {/* Header */}
      <motion.div
        className="relative z-10 flex flex-col md:flex-row justify-between items-center mb-8 md:mb-12"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : -20 }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex items-center gap-3 md:gap-4 mb-4 md:mb-0">
          <div className="bg-white/10 p-2 rounded-lg backdrop-blur-sm">
            <svg width="30" height="30" viewBox="0 0 40 40" fill="white" className="animate-pulse">
              <path d="M20,5 L25,15 L35,15 L27,22 L30,32 L20,26 L10,32 L13,22 L5,15 L15,15 Z" />
            </svg>
          </div>
          <div>
            <h1 className="text-xl md:text-2xl font-bold tracking-wide">DRAW WINNERS</h1>
            <p className="text-sm text-white/80">{currentDate}</p>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Image
            src="/super-6-logo-white.png"
            alt="Super6 Logo"
            width={160}
            height={80}
            className="object-contain"
          />
        </motion.div>
      </motion.div>

      {/* Main Content */}
      <div className="relative  z-10 flex flex-col md:flex-row items-center justify-center container mx-auto gap-8">
        {/* Winners Section */}
        <div className="w-full md:w-2/3 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {winners.map((winner, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{
                opacity: isVisible ? (showAll || index === activeIndex ? 1 : 0.3) : 0,
                y: isVisible ? 0 : 50,
                scale: !showAll && isVisible && index === activeIndex ? 1.05 : 1
              }}
              transition={{
                duration: 0.7,
                delay: showAll ? 0.1 * index : 0,
                ease: "easeOut"
              }}
              className="bg-gradient-to-b from-[#004766] to-[#003a52] rounded-xl overflow-hidden shadow-lg transform transition-all duration-300 hover:scale-[1.02]"
            >
              <div className="relative h-64 w-full overflow-hidden">
                <Image
                  src={winner.image}
                  alt={winner.name}
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-110"
                />
                {(!showAll && index === activeIndex) && (
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-t from-[#004766]/80 to-transparent"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                  />
                )}
                {(!showAll && index === activeIndex) && (
                  <motion.div
                    className="absolute bottom-4 left-0 right-0 text-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    <span className="bg-[#f39c1c] px-3 py-1 rounded-full text-sm font-medium">Winner</span>
                  </motion.div>
                )}
              </div>

              <div className="p-4">
                <div className="h-px bg-[#1d506a] w-full mb-3"></div>
                <div className="flex justify-between items-center">
                  <p className="text-lg font-medium">{winner.name}</p>
                  <p className="text-xs text-white/70">{winner.date}</p>
                </div>
                {showAll && (
                  <motion.p
                    className="text-sm text-[#f39c1c] mt-1"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                  >
                    {winner.prize}
                  </motion.p>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Prize Section */}
        <motion.div
          className="w-full md:w-1/3 flex flex-col items-center md:items-end text-center md:text-right z-10"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : 30 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white/90">WON</h2>
          <h3 className="text-4xl md:text-6xl font-bold mt-2 bg-gradient-to-r from-[#f39c1c] to-[#ffbb54] bg-clip-text text-transparent">
            AED 50,000*
          </h3>
          <p className="text-sm text-white/70 mt-2">*Terms & conditions apply</p>
          <motion.button
            className="mt-6 md:mt-8 bg-gradient-to-r from-[#f39c1c] to-[#ffaa33] hover:from-[#ffaa33] hover:to-[#f39c1c] text-white font-bold py-3 px-8 md:px-10 rounded-full text-lg shadow-lg transition-all duration-300 hover:shadow-xl"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            BUY NOW
          </motion.button>
        </motion.div>
      </div>

      {/* Navigation Dots */}
      <motion.div
        className="relative z-10 mt-8 md:mt-12 flex justify-center gap-3"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        {winners.map((_, index) => (
          <button
            key={index}
            className={`h-3 w-3 rounded-full cursor-pointer transition-all duration-300 ${index === (showAll ? winners.length - 1 : activeIndex)
              ? 'bg-[#f39c1c] scale-125'
              : 'bg-white/60 hover:bg-white/80'
              }`}
            onClick={() => {
              setShowAll(index === winners.length - 1);
              if (index < winners.length) {
                setActiveIndex(index);
              }
            }}
            aria-label={`Show winner ${index + 1}`}
          />
        ))}
        <button
          className={`h-3 w-3 rounded-full cursor-pointer transition-all duration-300 ${showAll ? 'bg-[#f39c1c] scale-125' : 'bg-white/60 hover:bg-white/80'
            }`}
          onClick={() => {
            setShowAll(true);
          }}
          aria-label="Show all winners"
        />
      </motion.div>
    </div>
  );
};

export default DrawWinners;