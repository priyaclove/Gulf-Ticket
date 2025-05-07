"use client";

import { motion } from "framer-motion";
import { Milk,Shuffle, CircleDollarSign, Youtube, TreePalm } from "lucide-react";  
const steps = [
  {
    icon: <Milk className="w-10 h-10 text-green-600" />,
    title: "Buy a Bottle",
    description: "Purchase a Bottle for AED 5 to enter our MAIN DRAW in one go!",
  },
  {
    icon: <Shuffle className="w-10 h-10 text-green-600" />,
    title: "Choose Zodiac",
    description: "Pick 1 Zodiac from 1 to 12 per ticket or let us randomize it for you!",
  },
  {
    icon: <CircleDollarSign className="w-10 h-10 text-green-600" />,
    title: "Main Draw",
    description: "If your number matches, win a multiple of your purchase!",
  },
  {
    icon: <Youtube className="w-10 h-10 text-green-600" />,
    title: "Live Draws",
    description: "Draws happen daily at 4PM & 6:30PM UAE time on YouTube and Facebook.",
  },
  {
    icon: <TreePalm className="w-10 h-10 text-green-600" />,
    title: "Sustainability",
    description: "Your purchase helps grow palm tree plantations across the UAE.",
  },
];

export default function AboutSteps() {
  return (
    <section className="bg-white py-20">
      <div className=" px-6">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
          <span className="text-gray-900">About </span>
          <span className="text-green-600">Lucky1</span>
        </h2>

        <div className="grid md:grid-cols-5 gap-8 ">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="rounded-xl border border-green-500 p-6 text-center shadow-md hover:shadow-lg transition-shadow bg-white"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="mb-4 flex justify-center">{step.icon}</div>
              <h3 className="text-lg font-semibold text-green-700 mb-2">{step.title}</h3>
              <p className="text-gray-600 text-sm">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
