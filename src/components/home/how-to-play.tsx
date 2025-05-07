"use client"

import { ChevronUp } from "lucide-react"
import { useEffect, useState } from "react"

export default function HowToPlay() {
  const [showScrollTop, setShowScrollTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true)
      } else {
        setShowScrollTop(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <section className="w-full bg-[#4a4a4a] py-12 px-4 text-white relative">
      <h1 className="text-5xl font-bold text-center mb-16">How To Play</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 ">
        {/* Card 1 */}
        <div className="flex flex-col items-center relative">
          <div className="absolute top-0 w-px h-full bg-white right-0 lg:block hidden"></div>
          <div className="w-16 h-16 rounded-full bg-white text-[#4a4a4a] flex items-center justify-center mb-8">
            <span className="text-3xl font-bold">1</span>
          </div>
          <div className="h-24 flex items-center justify-center mb-6">
            <svg width="100" height="60" viewBox="0 0 100 60" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M80 10H20C14.5 10 10 14.5 10 20V50C10 55.5 14.5 60 20 60H80C85.5 60 90 55.5 90 50V20C90 14.5 85.5 10 80 10Z"
                stroke="white"
                strokeWidth="2"
              />
              <circle cx="50" cy="30" r="10" stroke="white" strokeWidth="2" />
              <path d="M40 45C40 40 45 35 50 35C55 35 60 40 60 45" stroke="white" strokeWidth="2" />
              <rect x="65" y="20" width="15" height="25" stroke="white" strokeWidth="2" />
            </svg>
          </div>
          <div className="text-center px-4">
            <p className="font-medium mb-1">REGISTER OR LOGIN</p>
            <p className="font-medium">YOUR ACCOUNT</p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="flex flex-col items-center relative">
          <div className="absolute top-0 w-px h-full bg-white right-0 lg:block hidden"></div>
          <div className="w-16 h-16 rounded-full bg-white text-[#4a4a4a] flex items-center justify-center mb-8">
            <span className="text-3xl font-bold">2</span>
          </div>
          <div className="h-24 flex items-center justify-center mb-6">
            <svg width="60" height="90" viewBox="0 0 60 90" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M20 20H40V75C40 77.7614 37.7614 80 35 80H25C22.2386 80 20 77.7614 20 75V20Z"
                stroke="white"
                strokeWidth="2"
              />
              <path d="M20 20C20 15 25 10 30 10C35 10 40 15 40 20" stroke="white" strokeWidth="2" />
              <line x1="20" y1="30" x2="40" y2="30" stroke="white" strokeWidth="2" />
            </svg>
          </div>
          <div className="text-center px-4">
            <p className="font-medium mb-1">PURCHASE A WATER</p>
            <p className="font-medium mb-1">BOTTLE TO SUPPORT A</p>
            <p className="font-medium">GOOD CAUSE</p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="flex flex-col items-center relative">
          <div className="absolute top-0 w-px h-full bg-white right-0 lg:block hidden"></div>
          <div className="w-16 h-16 rounded-full bg-white text-[#4a4a4a] flex items-center justify-center mb-8">
            <span className="text-3xl font-bold">3</span>
          </div>
          <div className="h-24 flex items-center justify-center mb-6">
            <svg width="90" height="70" viewBox="0 0 90 70" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="35" cy="25" r="20" stroke="white" strokeWidth="2" />
              <circle cx="55" cy="45" r="20" stroke="white" strokeWidth="2" />
              <text x="35" y="30" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">
                5
              </text>
              <text x="55" y="50" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">
                6
              </text>
            </svg>
          </div>
          <div className="text-center px-4">
            <p className="font-medium mb-1">PARTICIPATE IN A</p>
            <p className="font-medium mb-1">COMPLIMENTARY</p>
            <p className="font-medium">RAFFLE DRAW</p>
          </div>
        </div>

        {/* Card 4 */}
        <div className="flex flex-col items-center relative">
          <div className="absolute top-0 w-px h-full bg-white right-0 lg:block hidden"></div>
          <div className="w-16 h-16 rounded-full bg-white text-[#4a4a4a] flex items-center justify-center mb-8">
            <span className="text-3xl font-bold">4</span>
          </div>
          <div className="h-24 flex items-center justify-center mb-6">
            <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="25" cy="25" r="15" stroke="white" strokeWidth="2" />
              <circle cx="55" cy="25" r="15" stroke="white" strokeWidth="2" />
              <circle cx="25" cy="55" r="15" stroke="white" strokeWidth="2" />
              <circle cx="55" cy="55" r="15" stroke="white" strokeWidth="2" />
              <text x="25" y="30" textAnchor="middle" fill="#F39C12" fontSize="16" fontWeight="bold">
                1
              </text>
              <text x="55" y="30" textAnchor="middle" fill="white" fontSize="16" fontWeight="bold">
                2
              </text>
              <text x="25" y="60" textAnchor="middle" fill="white" fontSize="16" fontWeight="bold">
                3
              </text>
              <text x="55" y="60" textAnchor="middle" fill="#F39C12" fontSize="16" fontWeight="bold">
                4
              </text>
            </svg>
          </div>
          <div className="text-center px-4">
            <p className="font-medium mb-1">SELECT YOUR FAVOURITE</p>
            <p className="font-medium mb-1">TICKET NUMBERS FOR</p>
            <p className="font-medium">BONUS DRAW PRIZES</p>
          </div>
        </div>

        {/* Card 5 */}
        <div className="flex flex-col items-center">
          <div className="w-16 h-16 rounded-full bg-white text-[#4a4a4a] flex items-center justify-center mb-8">
            <span className="text-3xl font-bold">5</span>
          </div>
          <div className="h-24 flex items-center justify-center mb-6">
            <svg width="80" height="60" viewBox="0 0 80 60" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M10 10H60C65.5 10 70 14.5 70 20V50C70 55.5 65.5 60 60 60H10V10Z"
                stroke="white"
                strokeWidth="2"
              />
              <path d="M10 20C15 20 20 25 20 30C20 35 15 40 10 40" stroke="white" strokeWidth="2" />
              <path d="M10 30C12 30 14 32 14 35C14 38 12 40 10 40" stroke="white" strokeWidth="2" />
            </svg>
          </div>
          <div className="text-center px-4">
            <p className="font-medium mb-1">WATCH OUR LIVE DRAW</p>
            <p className="font-medium mb-1">EVERY WEEK, TO SEE THE</p>
            <p className="font-medium">WINNING NUMBERS</p>
          </div>
        </div>
      </div>

      <div className="flex justify-end mt-8 mr-4">
        <p className="text-white font-medium">Know More</p>
      </div>

      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 bg-[#F39C12] p-2 rounded-md shadow-lg hover:bg-[#E67E22] transition-colors"
          aria-label="Scroll to top"
        >
          <ChevronUp className="h-6 w-6 text-white" />
        </button>
      )}
    </section>
  )
}
