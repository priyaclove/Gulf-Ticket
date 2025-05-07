"use client";
import LotteryWinners from "@/components/home/hero-section";
import CardGame from "@/components/home/cards-section";
import Lucky1dSection from "@/components/home/lucky-1d-section";
import AboutSteps from "@/components/home/about-steps";
import HowToPlay from "@/components/home/how-to-play";
import TestimonialProps from "@/components/home/testimonials";
import ZodiacLotteryGame from "@/components/home/zodiac-lottery-game";
import LotteryGamesUI from "@/components/home/price-breakdown";
import LotteryResults from "@/components/home/latest-lottery-result";
import SustainabilitySection from "@/components/home/sustainability-section";
import AppDownloadSection from "@/components/home/download-section";
export default function Home() {
  return (
    <>
      <LotteryWinners />
      <CardGame />
      <ZodiacLotteryGame />
      <Lucky1dSection />
      <AboutSteps />
      <LotteryGamesUI />
      < HowToPlay />
      <LotteryResults />
      <SustainabilitySection />
      <TestimonialProps />
      <AppDownloadSection />
    </>
  );
}

