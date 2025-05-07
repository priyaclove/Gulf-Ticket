"use client";
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Heart, X, Trash2, Plus, Minus, ShoppingCart, Timer, Sparkles, 
  ChevronDown, ChevronUp, Clock, Gift, Droplet, AlertTriangle
} from 'lucide-react';
import Image from "next/image";


const ZodiacLotteryGame = () => {
  // States
  const [selectedZodiac, setSelectedZodiac] = useState<number | null>(null);
  const [quantity, setQuantity] = useState(1);
  const [multiplier, setMultiplier] = useState(1);
  const [customMultiplier, setCustomMultiplier] = useState('');
  const [isFavorite, setIsFavorite] = useState(false);
  const [cartItems, setCartItems] = useState(0);
  const [isDrawDetailsOpen, setIsDrawDetailsOpen] = useState(false);
  const [showRecentWinners, setShowRecentWinners] = useState(false);
  const [isPanelExpanded, setIsPanelExpanded] = useState(false);
  
  // Live countdown timer
  const [timeLeft, setTimeLeft] = useState({
    hours: 1,
    minutes: 14,
    seconds: 38
  });
  
  // Fake recent winners
  const recentWinners = [
    { name: "Ahmed M.", prize: "50,000 AED", zodiac: "Leo" },
    { name: "Sarah K.", prize: "10,000 AED", zodiac: "Gemini" },
    { name: "Michael T.", prize: "25,000 AED", zodiac: "Capricorn" },
  ];
  
  // Upcoming draws
  const upcomingDraws = [
    { name: "Grand Draw", date: "17 Sep 2024", time: "06:30 PM", prize: "1,000,000 AED" },
    { name: "Weekly Draw", date: "24 Sep 2024", time: "08:00 PM", prize: "500,000 AED" },
  ];
  
  // Simulate countdown
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);
    
    return () => clearInterval(timer);
  }, []);
  
  const zodiacSigns = [
    { id: 1, name: 'ARIES', icon: '♈', emoji: '🐏', color: 'bg-red-100', borderColor: 'border-red-400', textColor: 'text-red-600' },
    { id: 2, name: 'TAURUS', icon: '♉', emoji: '🐂', color: 'bg-green-100', borderColor: 'border-green-400', textColor: 'text-green-600' },
    { id: 3, name: 'GEMINI', icon: '♊', emoji: '👭', color: 'bg-yellow-100', borderColor: 'border-yellow-400', textColor: 'text-yellow-600' },
    { id: 4, name: 'CANCER', icon: '♋', emoji: '🦀', color: 'bg-blue-100', borderColor: 'border-blue-400', textColor: 'text-blue-600' },
    { id: 5, name: 'LEO', icon: '♌', emoji: '🦁', color: 'bg-orange-100', borderColor: 'border-orange-400', textColor: 'text-orange-600' },
    { id: 6, name: 'VIRGO', icon: '♍', emoji: '👧', color: 'bg-indigo-100', borderColor: 'border-indigo-400', textColor: 'text-indigo-600' },
    { id: 7, name: 'LIBRA', icon: '♎', emoji: '⚖️', color: 'bg-pink-100', borderColor: 'border-pink-400', textColor: 'text-pink-600' },
    { id: 8, name: 'SCORPIO', icon: '♏', emoji: '🦂', color: 'bg-purple-100', borderColor: 'border-purple-400', textColor: 'text-purple-600' },
    { id: 9, name: 'SAGITTARIUS', icon: '♐', emoji: '🏹', color: 'bg-cyan-100', borderColor: 'border-cyan-400', textColor: 'text-cyan-600' },
    { id: 10, name: 'CAPRICORN', icon: '♑', emoji: '🐐', color: 'bg-gray-100', borderColor: 'border-gray-400', textColor: 'text-gray-600' },
    { id: 11, name: 'AQUARIUS', icon: '♒', emoji: '🏺', color: 'bg-teal-100', borderColor: 'border-teal-400', textColor: 'text-teal-600' },
    { id: 12, name: 'PISCES', icon: '♓', emoji: '🐟', color: 'bg-blue-100', borderColor: 'border-blue-400', textColor: 'text-blue-600' }
  ];
  
  // Calculate total amount
  const basePrice = 10;
  const totalAmount = basePrice * quantity * multiplier;
  const potentialWinAmount = totalAmount * 20; // Example win calculation
  
  const handleAddToCart = () => {
    if (selectedZodiac !== null) {
      setCartItems(prev => prev + 1);
      
      // Show animation
      const cartButton = document.getElementById('cart-button');
      if (cartButton) {
        cartButton.classList.add('animate-bounce');
        setTimeout(() => {
          cartButton.classList.remove('animate-bounce');
        }, 1000);
      }
    } else {
      // Show error that no zodiac is selected
      alert("Please select a zodiac sign first");
    }
  };
  
  const formatTimeUnit = (unit: number) => unit.toString().padStart(2, '0');
  
  const handleCustomMultiplierChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value === '' || /^\d+$/.test(value)) {
      setCustomMultiplier(value);
      if (value !== '') {
        setMultiplier(parseInt(value));
      }
    }
  };
  
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-emerald-500 to-teal-700">      
      {/* Draw details panel (collapsible) */}
      <AnimatePresence>
        {isDrawDetailsOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="bg-gray-50 border-b border-gray-200 overflow-hidden"
          >
            <div className=" p-4">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="bg-white rounded-lg shadow-sm p-4 flex-1">
                  <h3 className="font-medium text-gray-800 mb-2 flex items-center">
                    <Clock className="h-4 w-4 mr-2 text-emerald-600" />
                    Upcoming Draws
                  </h3>
                  <div className="space-y-3">
                    {upcomingDraws.map((draw, index) => (
                      <div key={index} className="flex justify-between items-center border-b pb-2">
                        <div>
                          <div className="font-medium">{draw.name}</div>
                          <div className="text-xs text-gray-500">{draw.date} at {draw.time}</div>
                        </div>
                        <div className="text-emerald-600 font-medium">{draw.prize}</div>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="bg-white rounded-lg shadow-sm p-4 flex-1">
                  <h3 className="font-medium text-gray-800 mb-2 flex items-center">
                    <Sparkles className="h-4 w-4 mr-2 text-amber-500" />
                    Recent Winners
                  </h3>
                  <div className="space-y-3">
                    {recentWinners.map((winner, index) => (
                      <div key={index} className="flex justify-between items-center border-b pb-2">
                        <div>
                          <div className="font-medium">{winner.name}</div>
                          <div className="text-xs text-gray-500">{winner.zodiac} Sign</div>
                        </div>
                        <div className="text-amber-500 font-medium">{winner.prize}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Main content */}
      <div className=" px-4 py-6 flex flex-col lg:flex-row gap-6">
        {/* Left panel - Active selection */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-xl shadow-xl p-6 flex-1 min-w-0 relative"
        >
          <div className="absolute -top-4 -left-4 bg-amber-500 text-white font-bold text-sm px-6 py-1 rounded-full shadow-md">
            Lucky Zodiac
          </div>
          
          <div className="flex justify-between items-center mb-6">
            <div className="relative w-48">
              <select className="w-full appearance-none border border-gray-300 rounded-lg px-4 py-2 pr-8 text-gray-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent">
                <option>Choose Favorite</option>
                <option>My Lucky Zodiac</option>
                <option>Custom Selection</option>
              </select>
              <ChevronDown className="absolute right-3 top-3 h-4 w-4 text-gray-500" />
            </div>
            
            <div className="flex gap-2">
              <motion.button 
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsFavorite(!isFavorite)} 
                className="p-2 rounded-full hover:bg-gray-100 transition-colors"
              >
                <Heart className={isFavorite ? "h-5 w-5 text-red-500 fill-red-500" : "h-5 w-5 text-gray-400"} />
              </motion.button>
              <motion.button whileTap={{ scale: 0.95 }} className="p-2 rounded-full hover:bg-gray-100 transition-colors">
                <X className="h-5 w-5 text-gray-400" />
              </motion.button>
              <motion.button whileTap={{ scale: 0.95 }} className="p-2 rounded-full hover:bg-gray-100 transition-colors">
                <Trash2 className="h-5 w-5 text-gray-400" />
              </motion.button>
            </div>
          </div>
          
          {/* Zodiac sign selection guide */}
          <div className="text-center mb-4">
            <h3 className="font-semibold text-lg text-gray-800">Select Your Lucky Zodiac Sign</h3>
            <p className="text-sm text-gray-500">Choose your birth sign or any sign you feel lucky with today</p>
          </div>
          
          {/* Zodiac grid */}
          <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-4 mb-6">
            <AnimatePresence>
              {zodiacSigns.map((sign) => (
                <motion.div
                  key={sign.id}
                  whileHover={{ scale: 1.05, boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)" }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.2, delay: sign.id * 0.05 }}
                  onClick={() => setSelectedZodiac(sign.id)}
                  className={`relative cursor-pointer rounded-lg border-2 aspect-square flex flex-col items-center justify-center ${
                    selectedZodiac === sign.id 
                      ? `${sign.borderColor} ${sign.color} shadow-md` 
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <div className="absolute top-1 left-1 bg-emerald-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold">
                    {sign.id}
                  </div>
                  <div className="text-3xl mb-1">{sign.emoji}</div>
                  <div className="text-xs font-medium text-gray-700">{sign.name}</div>
                  <div className={`text-xs ${sign.textColor} mt-1`}>{sign.icon}</div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
          
          <div className="bg-gray-50 rounded-lg p-4 mb-6">
            <h4 className="font-medium text-gray-700 mb-2">Your Selected Zodiac</h4>
            {selectedZodiac ? (
              <div className="flex items-center">
                <div className={`text-2xl mr-3 ${zodiacSigns[selectedZodiac-1].textColor}`}>
                  {zodiacSigns[selectedZodiac-1].emoji}
                </div>
                <div>
                  <div className="font-semibold">{zodiacSigns[selectedZodiac-1].name}</div>
                  <div className="text-xs text-gray-500">Your lucky zodiac for this draw</div>
                </div>
              </div>
            ) : (
              <div className="text-sm text-gray-500 italic">Please select a zodiac sign above</div>
            )}
          </div>
          
          {/* Multiplier section */}
          <div className="mb-6">
            <h4 className="font-medium text-gray-700 mb-3">Choose Your Multiplier</h4>
            <div className="flex flex-wrap gap-3">
              {[1, 2, 5, 10, 20, 50].map((value) => (
                <motion.button 
                  key={value}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    setMultiplier(value);
                    setCustomMultiplier('');
                  }}
                  className={`rounded-full px-4 py-2 min-w-16 text-center transition-colors ${
                    multiplier === value 
                      ? 'bg-emerald-500 text-white shadow-md' 
                      : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
                  }`}
                >
                  {value}×
                </motion.button>
              ))}
              
              <div className="relative">
                <span className="absolute left-3 top-2.5 text-gray-500">×</span>
                <input 
                  type="text"
                  placeholder="Custom"
                  className="pl-8 pr-3 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                  value={customMultiplier}
                  onChange={handleCustomMultiplierChange}
                />
              </div>
            </div>
          </div>
          
          {/* Summary and action buttons */}
          <div className="bg-gray-50 rounded-lg p-4 mb-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white rounded-lg p-3 shadow-sm">
                <div className="text-xs text-gray-500">Base Price</div>
                <div className="font-semibold text-gray-800">{basePrice} AED</div>
              </div>
              
              <div className="bg-white rounded-lg p-3 shadow-sm">
                <div className="text-xs text-gray-500">Quantity × Multiplier</div>
                <div className="font-semibold text-gray-800">{quantity} × {multiplier}</div>
              </div>
              
              <div className="bg-white rounded-lg p-3 shadow-sm">
                <div className="text-xs text-gray-500">Total Amount</div>
                <div className="font-semibold text-emerald-600">{totalAmount} AED</div>
              </div>
            </div>
          </div>
          
          {/* Win indicator */}
          <motion.div 
            whileHover={{ scale: 1.01 }}
            className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white rounded-lg p-4 flex justify-between items-center mb-6"
          >
            <div>
              <div className="text-sm opacity-90">Potential Win Amount</div>
              <div className="text-2xl font-bold">{potentialWinAmount.toLocaleString()} AED</div>
            </div>
            <div className="flex items-center">
              {[1, 2, 3].map((star) => (
                <Sparkles key={star} className="h-5 w-5 text-yellow-300 animate-pulse" />
              ))}
            </div>
          </motion.div>
          
          {/* Expand/collapse button for mobile */}
          <div className="lg:hidden flex justify-center mb-4">
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsPanelExpanded(!isPanelExpanded)}
              className="flex items-center gap-2 text-sm text-gray-500"
            >
              {isPanelExpanded ? (
                <>
                  <span>Show less</span>
                  <ChevronUp size={16} />
                </>
              ) : (
                <>
                  <span>Show more details</span>
                  <ChevronDown size={16} />
                </>
              )}
            </motion.button>
          </div>
        </motion.div>
        
        {/* Right panel - Preview */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className={`lg:w-1/3 bg-white rounded-xl shadow-xl p-6 flex flex-col ${
            isPanelExpanded || window.innerWidth >= 1024 ? 'block' : 'hidden'
          }`}
        >

          {/* Water bottle visualization */}
          <div className="flex flex-col items-center">
          <motion.div 
  whileHover={{ rotate: [0, -5, 5, -5, 0], transition: { duration: 1 } }}
  className="relative shadow-lg w-40 h-56 mt-8 mb-2 bg-no-repeat bg-center bg-contain"
  style={{ backgroundImage: "url('/BottleWithML-1.png')" }}
>
  {/* Optional: Water bottle top — keep or remove */}
  {/* <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-blue-700 rounded-full"></div>
  <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-6 h-6 bg-blue-800 rounded-full"></div> */}

  {/* Zodiac sign inside bottle */}
  {selectedZodiac && (
    <div className="absolute inset-0 flex items-center justify-center text-white text-opacity-50 text-4xl">
      {zodiacSigns[selectedZodiac - 1].icon}
    </div>
  )}
</motion.div>

            
            <div className="text-center text-gray-700 font-medium mt-2">
              Pure Life Water
            </div>
            <div className="text-center text-emerald-600 font-bold mb-4">
              250 ML
            </div>
            
            {/* Quantity controls */}
            <div className="flex flex-col items-center gap-4 my-4 w-full">
              <div className="flex items-center gap-3 justify-center">
                <span className="text-sm font-medium text-gray-600">Bottles</span>
                <motion.button 
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="bg-gray-100 hover:bg-gray-200 rounded-full w-8 h-8 flex items-center justify-center"
                  disabled={quantity <= 1}
                >
                  <Minus className="h-4 w-4 text-gray-600" />
                </motion.button>
                <div className="bg-white border border-gray-300 rounded-full w-12 h-10 flex items-center justify-center text-xl font-medium text-gray-800">
                  {quantity}
                </div>
                <motion.button 
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setQuantity(quantity + 1)}
                  className="bg-gray-100 hover:bg-gray-200 rounded-full w-8 h-8 flex items-center justify-center"
                >
                  <Plus className="h-4 w-4 text-gray-600" />
                </motion.button>
              </div>
            </div>
            
            {/* Add to cart */}
            <motion.button 
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleAddToCart}
              className={`bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-medium rounded-full px-8 py-3 mt-4 w-full flex items-center justify-center shadow-md ${
                !selectedZodiac ? 'opacity-70 cursor-not-allowed' : ''
              }`}
              disabled={!selectedZodiac}
            >
              <ShoppingCart className="h-5 w-5 mr-2" />
              ADD TO CART
            </motion.button>
            
            <div className="text-center mt-6">
              <div className="font-medium text-gray-800">Subtotal: <span className="text-emerald-600 font-bold">{totalAmount} AED</span></div>
              <div className="text-xs text-gray-500 mt-2 flex items-center justify-center">
                <Gift className="h-3 w-3 mr-1 text-amber-500" />
                Your purchased bottle is donated to those in need
              </div>
            </div>
            
            {/* Charity impact */}
            <div className="mt-6 bg-amber-50 p-4 rounded-lg border border-amber-200">
              <h4 className="font-medium text-amber-700 mb-2 flex items-center">
                <Droplet className="h-4 w-4 mr-2" />
                Your Impact
              </h4>
              <p className="text-xs text-amber-700">
                For every ticket purchased, we donate a bottle of clean water to communities in need. 
                You've helped provide {cartItems} bottles so far!
              </p>
            </div>
          </div>
        </motion.div>
      </div>
      
      {/* Live Draw Timer */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="fixed bottom-4 left-4 bg-gradient-to-r from-emerald-700 to-teal-800 text-white p-4 rounded-xl shadow-lg border border-emerald-400"
      >
        <div className="flex items-center gap-2 mb-2">
          <span className="animate-pulse bg-red-500 h-3 w-3 rounded-full"></span>
          <span className="font-medium">Lucky Draw Countdown</span>
        </div>
        <div className="grid grid-cols-3 gap-2">
          <div className="bg-emerald-800 bg-opacity-50 rounded-lg p-2 text-center">
            <div className="text-xs opacity-75">Hours</div>
            <div className="text-2xl font-bold">{formatTimeUnit(timeLeft.hours)}</div>
          </div>
          <div className="bg-emerald-800 bg-opacity-50 rounded-lg p-2 text-center">
            <div className="text-xs opacity-75">Minutes</div>
            <div className="text-2xl font-bold">{formatTimeUnit(timeLeft.minutes)}</div>
          </div>
          <div className="bg-emerald-800 bg-opacity-50 rounded-lg p-2 text-center">
            <div className="text-xs opacity-75">Seconds</div>
            <div className="text-2xl font-bold animate-pulse">{formatTimeUnit(timeLeft.seconds)}</div>
          </div>
        </div>
      </motion.div>
            
      {/* Shopping cart indicator */}
      <motion.div 
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        className="fixed bottom-20 right-4 bg-gray-800 text-white p-4 rounded-full shadow-lg flex items-center justify-center cursor-pointer"
      >
        <ShoppingCart className="h-6 w-6" />
        {cartItems > 0 && (
          <motion.div 
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="absolute -top-2 -right-2 bg-amber-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold"
          >
            {cartItems}
          </motion.div>
        )}
      </motion.div>
    </div>
  );
};

export default ZodiacLotteryGame;