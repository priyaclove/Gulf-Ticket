'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const cards = [
  { title: "Lucky1", price: "AED 5", date: "Thu 15 Aug 2024 08:00 PM (UAE)", color: "bg-green-500", badge: "bg-green-700" },
  { title: "Dream5", price: "AED 10", date: "Thu 15 Aug 2024 08:00 PM (UAE)", color: "bg-blue-600", badge: "bg-blue-800" },
  { title: "Magic5", price: "AED 5", date: "Thu 15 Aug 2024 08:00 PM (UAE)", color: "bg-pink-500", badge: "bg-pink-700" },
  { title: "Fortune", price: "AED 5", date: "Thu 15 Aug 2024 08:00 PM (UAE)", color: "bg-orange-500", badge: "bg-orange-700" },
  { title: "Super6", price: "AED 5", date: "Thu 15 Aug 2024 08:00 PM (UAE)", color: "bg-cyan-700", badge: "bg-cyan-900" },
  { title: "Pick3", price: "AED 5", date: "Thu 15 Aug 2024 08:00 PM (UAE)", color: "bg-purple-500", badge: "bg-purple-700" },
];

export default function CardGame() {
  const [flippedCard, setFlippedCard] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-gray-100 p-4 flex flex-wrap justify-center gap-4">
      {cards.map((card, i) => (
        <div key={i} className="w-64 h-72 perspective">
          <div
            className={`relative w-full h-full transition-transform duration-700 transform-style-preserve-3d ${
              flippedCard === i ? "rotate-y-180" : ""
            }`}
            onMouseEnter={() => setFlippedCard(i)}
            onMouseLeave={() => setFlippedCard(null)}
          >
            {/* Front */}
            <div className={`absolute w-full h-full rounded-2xl shadow-xl p-4 ${card.color} text-white backface-hidden`}>
              {/* Badge */}
              <div className={`absolute top-0 left-0 w-16 h-8 ${card.badge} text-xs flex items-center justify-center rounded-br-lg`}>
                {card.price}
              </div>

              {/* Content */}
              <div className="flex flex-col justify-between h-full">
                <div className="text-2xl font-bold">{card.title}</div>
                <div className="text-sm">Sale closes 5 minutes before the draw</div>
                <div className="text-center text-xl font-mono mt-2">01 : 14 : 38</div>
                <div className="flex justify-around text-xs mt-1">
                  <span>DAYS</span><span>HOURS</span><span>MIN</span>
                </div>
                <div className="text-sm mt-2">{card.date}</div>
              </div>
            </div>

            {/* Back */}
            <div className="absolute w-full h-full rounded-2xl bg-white text-black p-4 text-center transform rotate-y-180 backface-hidden">
              <div className="text-lg font-bold">🎉 Good Luck!</div>
              <p className="text-sm mt-2">Win AED 500,000*</p>
            </div>
          </div>
        </div>
      ))}

      <style jsx>{`
        .perspective {
          perspective: 1000px;
        }
        .transform-style-preserve-3d {
          transform-style: preserve-3d;
        }
        .backface-hidden {
          backface-visibility: hidden;
        }
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
      `}</style>
    </div>
  );
}
