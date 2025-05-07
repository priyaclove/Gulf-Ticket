// components/LotteryPrizeBreakdown.tsx
"use client";
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Star, ShoppingCart } from 'lucide-react';

// Type definitions
export type LotteryVariant = 'Super6' | 'Rush3' | 'Lucky1' | 'Dream5' | 'Fortune4' | 'Magic5';

export type BettingType = 
  | 'Standard' 
  | 'Straight' 
  | 'Box1Way' 
  | 'Box3Way' 
  | 'Box6Way' 
  | 'FrontBackSplit' 
  | 'Half' 
  | 'Quarter' 
  | 'Range' 
  | 'Any2';

export interface PrizeBreakdown {
  matchCount: number;
  totalNumbers: number;
  prizeAmount: string;
  prizeType: string;
  multiplier?: string;
}

export interface LotteryPrizeBreakdownProps {
  variant: LotteryVariant;
  selectedBettingType?: BettingType;
  prizeData: PrizeBreakdown[];
  bettingTypes?: Array<{
    type: BettingType;
    prizes: PrizeBreakdown[];
  }>;
}

// Color configurations based on lottery variant
const variantConfig = {
  'Super6': {
    bgColor: 'bg-blue-100',
    borderColor: 'border-blue-600',
    textColor: 'text-blue-800',
    starColor: 'text-blue-600 bg-blue-600',
    buttonBg: 'bg-gradient-to-r from-blue-600 to-blue-800',
    circleColor: 'bg-blue-700 text-white',
  },
  'Rush3': {
    bgColor: 'bg-purple-100',
    borderColor: 'border-purple-600',
    textColor: 'text-purple-800',
    starColor: 'text-purple-600 bg-purple-600',
    buttonBg: 'bg-gradient-to-r from-purple-500 to-purple-700',
    circleColor: 'bg-purple-500 text-white',
  },
  'Lucky1': {
    bgColor: 'bg-green-100',
    borderColor: 'border-green-600',
    textColor: 'text-green-800',
    starColor: 'text-green-600 bg-green-600',
    buttonBg: 'bg-gradient-to-r from-green-500 to-green-700',
    circleColor: 'bg-green-500 text-white',
  },
  'Dream5': {
    bgColor: 'bg-blue-100',
    borderColor: 'border-blue-500',
    textColor: 'text-blue-700',
    starColor: 'text-blue-500 bg-blue-500',
    buttonBg: 'bg-gradient-to-r from-blue-500 to-blue-600',
    circleColor: 'bg-blue-500 text-white',
  },
  'Fortune4': {
    bgColor: 'bg-amber-100',
    borderColor: 'border-amber-600',
    textColor: 'text-amber-800',
    starColor: 'text-amber-500 bg-amber-500',
    buttonBg: 'bg-gradient-to-r from-amber-500 to-amber-600',
    circleColor: 'bg-amber-500 text-white',
  },
  'Magic5': {
    bgColor: 'bg-pink-100',
    borderColor: 'border-pink-600',
    textColor: 'text-pink-800',
    starColor: 'text-pink-500 bg-pink-500',
    buttonBg: 'bg-gradient-to-r from-pink-500 to-pink-600',
    circleColor: 'bg-pink-500 text-white',
  }
};

const LotteryPrizeBreakdown: React.FC<LotteryPrizeBreakdownProps> = ({
  variant,
  selectedBettingType = 'Standard',
  prizeData,
  bettingTypes = []
}) => {
  const [currentBettingType, setCurrentBettingType] = useState<BettingType>(selectedBettingType);
  const config = variantConfig[variant];
  
  // Get the active prize data based on betting type
  const getActivePrizeData = () => {
    if (bettingTypes.length > 0) {
      const found = bettingTypes.find(b => b.type === currentBettingType);
      return found ? found.prizes : prizeData;
    }
    return prizeData;
  };
  
  const activePrizes = getActivePrizeData();
  const totalNumbers = activePrizes.length > 0 ? activePrizes[0].totalNumbers : 0;
  const numbersArray = Array.from({ length: totalNumbers }, (_, i) => i + 1);

  // Display bet type label in user-friendly format
  const formatBetTypeLabel = (betType: BettingType): string => {
    switch(betType) {
      case 'Standard': return 'Standard';
      case 'Straight': return 'Straight';
      case 'Box1Way': return 'Box (1-Way)';
      case 'Box3Way': return 'Box (3-Way)';
      case 'Box6Way': return 'Box (6-Way)';
      case 'FrontBackSplit': return 'Front / Back / Split pair';
      case 'Half': return 'Half';
      case 'Quarter': return 'Quarter';
      case 'Range': return 'Range';
      case 'Any2': return 'Any 2';
      default: return betType;
    }
  };

  return (
    <div className="w-full  mx-auto">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-3xl font-bold text-gray-700">Price Breakdown</h2>
        <div className="flex space-x-2">
          <button className="p-2 rounded-full bg-gray-100 hover:bg-gray-200">
            <ChevronLeft size={24} />
          </button>
          <button className="p-2 rounded-full bg-gray-100 hover:bg-gray-200">
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
      
      <div className={`rounded-xl border ${config.borderColor} ${config.bgColor} p-6 shadow-sm`}>
        <div className="flex flex-col md:flex-row">
          {/* Left side with lottery variant info */}
          <div className="w-full md:w-1/3 mb-6 md:mb-0 flex flex-col items-center justify-center border-r border-gray-200 pr-6">
            <h3 className={`text-2xl font-bold ${config.textColor} mb-6`}>{variant}</h3>
            <div className="flex flex-wrap justify-center gap-2 mb-4">
              {numbersArray.map(num => (
                <div key={num} className={`w-10 h-10 rounded-full ${config.circleColor} flex items-center justify-center font-bold text-lg`}>
                  {num}
                </div>
              ))}
            </div>
            
            {bettingTypes.length > 0 && (
              <div className="w-full mt-4">
                <select 
                  value={currentBettingType}
                  onChange={(e) => setCurrentBettingType(e.target.value as BettingType)}
                  className="w-full p-2 border border-gray-300 rounded-md bg-white"
                >
                  {bettingTypes.map((bet) => (
                    <option key={bet.type} value={bet.type}>
                      {formatBetTypeLabel(bet.type)}
                    </option>
                  ))}
                </select>
              </div>
            )}
          </div>
          
          {/* Right side with prize breakdown */}
          <div className="w-full md:w-2/3 pl-0 md:pl-6">
            <div className="space-y-6">
              {activePrizes.map((prize, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className={`w-28 font-medium ${config.textColor}`}>
                      {prize.matchCount} out of {prize.totalNumbers}
                    </div>
                    <div className="flex space-x-1">
                      {Array.from({ length: prize.totalNumbers }).map((_, i) => (
                        <div 
                          key={i} 
                          className={`w-6 h-6 rounded-full flex items-center justify-center 
                            ${i < prize.matchCount ? config.starColor : 'bg-white border border-gray-200'}`}
                        >
                          {i < prize.matchCount && <Star size={16} fill="white" color="white" />}
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className={`flex items-center ${config.buttonBg} text-white rounded-full overflow-hidden`}>
                    <div className="px-4 py-2 bg-white rounded-l-full">
                      <span className={`font-medium ${config.textColor}`}>{prize.prizeType}</span>
                    </div>
                    <div className="px-6 py-2 font-medium whitespace-nowrap">
                      {prize.multiplier ? prize.multiplier : prize.prizeAmount}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-6 text-sm text-gray-500">
              * Shared Prize, In Case Of Multiple Winners
            </div>
          </div>
        </div>
      </div>
      
      <div className="mt-2 flex justify-end">
        <button className="bg-gray-800 text-white p-3 rounded-full hover:bg-gray-700">
          <ShoppingCart size={24} />
        </button>
      </div>
    </div>
  );
};

export default LotteryPrizeBreakdown;