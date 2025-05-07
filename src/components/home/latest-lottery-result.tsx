import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Clock, Gift, Trophy, Star, Sparkles, Zap } from 'lucide-react';

// TypeScript interfaces
interface GameDetails {
  bgColor: string;
  primaryColor: string;
  secondaryColor: string;
  gradientFrom: string;
  gradientTo: string;
  numbers: number[];
  icon: React.ReactNode;
  shape: string;
}

interface Games {
  [key: string]: GameDetails;
}

interface PrizeInfo {
  prize: string;
  amount: string;
}

// Component for the animated background
const AnimatedBackground: React.FC<{ game: GameDetails }> = ({ game }) => {
  return (
    <div
      className="absolute inset-0 transition-all duration-700 ease-in-out z-0"
      style={{ background: `linear-gradient(135deg, ${game.gradientFrom}, ${game.gradientTo})` }}
    >
      {/* Floating shapes */}
      {[...Array(15)].map((_, i) => (
        <div
          key={i}
          className={`absolute opacity-20 ${game.shape} animate-float`}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${15 + Math.random() * 15}s`,
            width: `${30 + Math.random() * 70}px`,
            height: `${30 + Math.random() * 70}px`,
            background: i % 2 === 0 ? game.primaryColor : game.secondaryColor,
          }}
        />
      ))}
    </div>
  );
};

// Component for game tabs
const GameTabs: React.FC<{
  games: Games;
  activeGame: string;
  setActiveGame: (game: string) => void;
}> = ({ games, activeGame, setActiveGame }) => {
  return (
    <div className="flex overflow-x-auto scrollbar-hide gap-3 relative z-10 items-center justify-between w-full max-w-4xl mt-4 p-4 bg-white/10 backdrop-blur-sm rounded-full shadow-lg">
      {Object.keys(games).map((game) => (
        <button
          key={game}
          onClick={() => setActiveGame(game)}
          className={`px-6 py-3 rounded-full font-bold transition-all duration-500 transform flex items-center gap-2 ${activeGame === game
            ? `${games[game].bgColor} text-gray-800 scale-110 shadow-lg`
            : 'bg-white/20 text-white hover:bg-white/30'
            }`}
        >
          <div className="w-5 h-5">{games[game].icon}</div>
          <span>{game}</span>
          {activeGame === game && (
            <div className="absolute inset-0 rounded-full animate-pulse-ring"></div>
          )}
        </button>
      ))}
    </div>
  );
};

// Component for animated number balls
const NumberBall: React.FC<{
  number: number;
  color: string;
  index: number;
  total: number;
}> = ({ number, color, index, total }) => {
  return (
    <div
      className={`w-16 h-16 rounded-full flex items-center justify-center text-white font-bold text-2xl shadow-lg animate-pop-in ${color}`}
      style={{
        animationDelay: `${0.3 + index * 0.2}s`,
        transform: `rotate(${(index - Math.floor(total / 2)) * 5}deg)`
      }}
    >
      {number}
    </div>
  );
};

// Component for result rows with animations
const ResultRow: React.FC<{
  prize: string;
  amount: string;
  index: number;
}> = ({ prize, amount, index }) => {
  return (
    <div
      className="grid grid-cols-2 border-b border-white/15 py-4 hover:bg-white/10 transition-all animate-fade-slide-up rounded-lg px-4"
      style={{ animationDelay: `${0.5 + index * 0.1}s` }}
    >
      <div className="text-white font-medium flex items-center gap-2">
        {index === 0 && <Trophy className="w-5 h-5 text-yellow-300" />}
        {index === 1 && <Trophy className="w-5 h-5 text-gray-300" />}
        {index === 2 && <Trophy className="w-5 h-5 text-amber-600" />}
        {index > 2 && <Gift className="w-5 h-5 text-white/70" />}
        {prize}
      </div>
      <div className="text-white font-bold text-right">{amount}</div>
    </div>
  );
};

// Component for draw time selector
const DrawTime: React.FC<{
  time: string;
  isActive: boolean;
  onClick: () => void;
}> = ({ time, isActive, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`flex flex-col items-center transition-all duration-500 ${isActive
        ? 'opacity-100 scale-110'
        : 'opacity-70 scale-95 hover:opacity-90 hover:scale-100'
        }`}
    >
      <div className="flex items-center gap-2 mb-2">
        <Clock className="w-4 h-4 text-white/80" />
        <span className="text-white font-medium">{time}</span>
      </div>
      {isActive && (
        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
      )}
    </button>
  );
};

// Main component
const LotteryResults: React.FC = () => {
  const [activeGame, setActiveGame] = useState<string>('Rush3');
  const [activeDrawTime, setActiveDrawTime] = useState<string>('04:00 PM');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  // Animation when changing games
  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);
    return () => clearTimeout(timer);
  }, [activeGame]);

  // Intersection observer for section visibility
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
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

  // Game data with full styling information
  const games: Games = {
    'Rush3': {
      bgColor: 'bg-purple-100',
      primaryColor: 'bg-purple-600',
      secondaryColor: 'bg-purple-500',
      gradientFrom: '#7e22ce',
      gradientTo: '#4c1d95',
      numbers: [0, 1, 2],
      icon: <Zap className="text-purple-700" />,
      shape: 'rounded-lg rotate-12'
    },
    'Lucky1': {
      bgColor: 'bg-green-100',
      primaryColor: 'bg-green-600',
      secondaryColor: 'bg-green-500',
      gradientFrom: '#16a34a',
      gradientTo: '#166534',
      numbers: [7],
      icon: <Star className="text-green-700" />,
      shape: 'rounded-full'
    },
    'Dream5': {
      bgColor: 'bg-blue-100',
      primaryColor: 'bg-blue-600',
      secondaryColor: 'bg-blue-500',
      gradientFrom: '#2563eb',
      gradientTo: '#1e40af',
      numbers: [1, 3, 5, 7, 9],
      icon: <Sparkles className="text-blue-700" />,
      shape: 'rounded-2xl -rotate-12'
    },
    'Fortune4': {
      bgColor: 'bg-amber-100',
      primaryColor: 'bg-amber-600',
      secondaryColor: 'bg-amber-500',
      gradientFrom: '#d97706',
      gradientTo: '#92400e',
      numbers: [2, 4, 6, 8],
      icon: <Gift className="text-amber-700" />,
      shape: 'rounded-tr-2xl rounded-bl-2xl'
    },
    'Magic5': {
      bgColor: 'bg-pink-100',
      primaryColor: 'bg-pink-600',
      secondaryColor: 'bg-pink-500',
      gradientFrom: '#db2777',
      gradientTo: '#9d174d',
      numbers: [0, 2, 4, 6, 8],
      icon: <Sparkles className="text-pink-700" />,
      shape: 'rounded-tl-3xl rounded-br-3xl'
    },
    'Super6': {
      bgColor: 'bg-blue-100',
      primaryColor: 'bg-blue-700',
      secondaryColor: 'bg-blue-600',
      gradientFrom: '#1d4ed8',
      gradientTo: '#1e3a8a',
      numbers: [1, 2, 3, 4, 5, 6],
      icon: <Trophy className="text-blue-700" />,
      shape: 'rounded-3xl'
    }
  };

  const drawTimes: string[] = ['04:00 PM', '05:00 PM', '06:00 PM', '07:00 PM', '08:00 PM'];

  const prizes: PrizeInfo[] = [
    { prize: "First Prize", amount: "₹1,00,000" },
    { prize: "Second Prize", amount: "₹50,000" },
    { prize: "Third Prize", amount: "₹25,000" },
    { prize: "Fourth Prize", amount: "₹10,000" },
    { prize: "Fifth Prize", amount: "₹5,000" },
    { prize: "Consolation", amount: "₹1,000" }
  ];

  const currentDate = 'FRI 18 AUG, 2023';

  return (
    <div
      ref={sectionRef}
      className={`relative w-full overflow-hidden rounded-2xl shadow-2xl transition-all duration-1000  ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
        }`}
      style={{ minHeight: '800px' }}
    >
      {/* Animated background that changes with active game */}
      <AnimatedBackground game={games[activeGame]} />

      {/* Content container */}
      <div className="relative z-10 roun">
        {/* Header */}
        <div className="relative p-8 pb-4 container mx-auto bg-white/10 backdrop-blur-sm shadow-lg mb-8 flex flex-col items-center text-center">
          <h1 className={`text-5xl font-bold text-white mb-4 ${isVisible ? 'animate-title-reveal' : ''}`}>
            Latest Draw Results
          </h1>

          <div className="w-full h-px bg-gradient-to-r from-transparent via-white/50 to-transparent mb-8"></div>

          <div className="flex justify-between items-center w-full max-w-2xl mb-8">
            <h2 className="text-3xl font-bold text-white flex items-center gap-3">
              <span className={`w-10 h-10 rounded-lg ${games[activeGame].primaryColor} flex items-center justify-center transition-all duration-300`}>
                {games[activeGame].icon}
              </span>

              <span className="animate-fade-in">{activeGame}</span>
            </h2>
            <div className="text-white font-medium bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm">
              {currentDate}
            </div>
          </div>

          <GameTabs
            games={games}
            activeGame={activeGame}
            setActiveGame={setActiveGame}
          />
        </div>


        {/* Main content */}
        <div className="px-8 pb-8 container mx-auto relative z-10 bg-white/10 backdrop-blur-sm  shadow-lg overflow-hidden">
          {/* Draw time navigation */}
          <div className="flex justify-between items-center mb-12 mt-12 bg-white/5 backdrop-blur-sm p-4 rounded-xl">
            <button className="p-3 rounded-full hover:bg-white/10 transition-all">
              <ChevronLeft className="w-5 h-5 text-white" />
            </button>

            <div className="flex gap-8">
              {drawTimes.slice(0, 3).map((time) => (
                <DrawTime
                  key={time}
                  time={time}
                  isActive={activeDrawTime === time}
                  onClick={() => setActiveDrawTime(time)}
                />
              ))}
            </div>

            <button className="p-3 rounded-full hover:bg-white/10 transition-all">
              <ChevronRight className="w-5 h-5 text-white" />
            </button>
          </div>

          {/* Results container */}
          <div className={`transition-all duration-500 ${isLoading ? 'opacity-0 transform scale-95' : 'opacity-100 transform scale-100'}`}>
            {/* Numbers display */}
            <div className="flex justify-center gap-4 mb-12 relative">
              <div className="absolute inset-0 bg-white/5 rounded-full blur-3xl"></div>
              {games[activeGame].numbers.map((number, index) => (
                <NumberBall
                  key={index}
                  number={number}
                  color={index % 2 === 0 ? games[activeGame].primaryColor : games[activeGame].secondaryColor}
                  index={index}
                  total={games[activeGame].numbers.length}
                />
              ))}
            </div>

            {/* Prize table */}
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 shadow-xl relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent"></div>
              <h3 className="text-white font-semibold text-xl mb-6 text-center relative">
                Prize Breakdown
                <div className="w-16 h-1 bg-white/30 mx-auto mt-2"></div>
              </h3>
              <div className="space-y-2 relative">
                {prizes.map((prize, index) => (
                  <ResultRow
                    key={index}
                    prize={prize.prize}
                    amount={prize.amount}
                    index={index}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Loading indicator */}
          {isLoading && (
            <div className="absolute inset-0 flex justify-center items-center z-20 backdrop-blur-sm">
              <div className="relative w-20 h-20">
                <div className="absolute w-full h-full rounded-full border-4 border-t-transparent border-white/30 animate-spin"></div>
                <div className="absolute w-full h-full rounded-full border-4 border-l-transparent border-r-transparent border-white/10 animate-spin" style={{ animationDirection: 'reverse', animationDuration: '1.5s' }}></div>
              </div>
            </div>
          )}
        </div>
      </div>
      <style jsx global>{`
        @keyframes pop-in {
          0% { transform: scale(0.5); opacity: 0; }
          70% { transform: scale(1.1); }
          100% { transform: scale(1); opacity: 1; }
        }
        
        @keyframes fade-slide-up {
          0% { transform: translateY(20px); opacity: 0; }
          100% { transform: translateY(0); opacity: 1; }
        }
        
        @keyframes float {
          0% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(10deg); }
          100% { transform: translateY(0) rotate(0deg); }
        }
        
        @keyframes title-reveal {
          0% { clip-path: polygon(0 0, 0 0, 0 100%, 0 100%); }
          100% { clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%); }
        }
        
        @keyframes pulse-ring {
          0% { transform: scale(0.8); opacity: 0.5; }
          50% { transform: scale(1.2); opacity: 0.3; }
          100% { transform: scale(0.8); opacity: 0.5; }
        }
        
        .animate-pop-in {
          animation: pop-in 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          opacity: 0;
        }
        
        .animate-fade-slide-up {
          animation: fade-slide-up 0.8s ease-out forwards;
          opacity: 0;
        }
        
        .animate-float {
          animation: float 15s ease-in-out infinite;
        }
        
        .animate-title-reveal {
          animation: title-reveal 1.2s cubic-bezier(0.77, 0, 0.175, 1) forwards;
        }
        
        .animate-pulse-ring {
          animation: pulse-ring 2s infinite;
        }
        
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
};

export default LotteryResults;