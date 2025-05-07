import { motion } from "framer-motion";

export default function Lucky1DInfo() {
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
    }),
  };

  const sectionStyle = "max-w-5xl mx-auto px-4 md:px-6 text-white text-center";
  const headingStyle = "text-4xl md:text-5xl font-bold text-white mb-4";
  const subheadingStyle = "text-lg md:text-xl mb-6 text-gray-200";
  const gradientBg = "bg-gradient-to-b from-[#4503B4] via-[#5F01A6] to-[#8E2DE2]";
  const cardStyle =
    "rounded-2xl bg-white/5 backdrop-blur-lg p-6 shadow-xl border border-white/10 text-left";

  return (
    <div className={`${gradientBg} py-16 px-4`}>
      <div className={sectionStyle}>
        <motion.h2
          className={headingStyle}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          custom={0}
        >
          Lucky1-1D: Malaysia's Daily Chance to Win Big on GulfTicket
        </motion.h2>
        <motion.p
          className={subheadingStyle}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          custom={1}
        >
          One digit. One moment. One chance to change your day.
        </motion.p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto px-4 mt-10">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className={cardStyle}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={i + 2}
          >
            <h3 className="text-xl font-semibold text-white mb-2">
              {[
                "🎯 Pick One Digit",
                "📅 Daily Draws",
                "📱 Mobile-Friendly",
                "💸 Low Entry, High Fun",
                "🔐 Secure Digital Platform",
                "🌟 Real Player Stories",
              ][i]}
            </h3>
            <p className="text-sm text-gray-300">
              {[
                "Choose a number from 0-9. That’s it.",
                "Get daily results without the long wait.",
                "Play anytime, anywhere with ease.",
                "Affordable tickets for daily entertainment.",
                "Play safely on GulfTicket’s trusted platform.",
                "“I've won twice already!” — Haziq R.",
              ][i]}
            </p>
          </motion.div>
        ))}
      </div>

      <motion.div
        className="mt-16 max-w-4xl mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        custom={8}
      >
        <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
          What If Today Is Your Day?
        </h3>
        <p className="text-base md:text-lg text-gray-300 mb-6">
          You need one digit… and one moment. What if that moment is today?
        </p>
        <button className="bg-green-400 hover:bg-green-500 transition text-white font-bold py-3 px-8 rounded-full text-lg shadow-lg">
          🎟️ Play Lucky1-1D Now
        </button>
      </motion.div>
    </div>
  );
}
