"use client";
import { useState, SetStateAction } from 'react';
import { motion } from 'framer-motion';

const games = [
  {
    id: 'fortune4',
    name: 'Fortune4',
    color: '#E5A657',
    digits: 4,
    prizes: [
      { match: 4, prize: 'AED 200,000*', label: 'Grand Prize' },
      { match: 3, prize: 'AED 100', label: '2nd Prize' },
      { match: 2, prize: 'AED 10', label: '3rd Prize' },
      { match: 1, prize: 'AED 2', label: '4th Prize' },
    ]
  },
  {
    id: 'magic5',
    name: 'Magic5',
    color: '#E64B8C',
    digits: 5,
    prizes: [
      { match: 5, prize: 'AED 500,000*', label: 'Grand Prize' },
      { match: 4, prize: 'AED 100', label: '2nd Prize' },
      { match: 3, prize: 'AED 20', label: '3rd Prize' },
      { match: 2, prize: 'AED 5', label: '4th Prize' },
      { match: 1, prize: 'AED 1', label: '5th Prize' },
    ]
  },
  {
    id: 'super6',
    name: 'Super6',
    color: '#15639C',
    digits: 6,
    prizes: [
      { match: 6, prize: 'AED 100 MILLION', label: 'Grand Prize' },
      { match: 5, prize: 'AED 200,000*', label: '2nd Prize' },
      { match: 4, prize: 'AED 50,000*', label: '3rd Prize' },
      { match: 3, prize: 'AED 30', label: '4th Prize' },
      { match: 2, prize: 'AED 10', label: '5th Prize' },
    ]
  },
  {
    id: 'rush3',
    name: 'Rush3',
    color: '#9C46CC',
    digits: 3,
    prizes: [
      { match: "Straight", prize: 'X AED 800 Times', label: 'Grand Prize' },
      { match: "Box (1-Way)", prize: 'X AED 800 Times', label: '2nd Prize' },
      { match: "Box (3-Way)", prize: 'X AED 260 Times', label: '3rd Prize' },
      { match: "Box (6-Way)", prize: 'X AED 130 Times', label: '4th Prize' },
      { match: "Front/Back/Split pair", prize: 'X AED 80 Times', label: '5th Prize' },
      { match: "Half", prize: 'X AED 1.50 Times', label: '5th Prize' },
      { match: "Quarter", prize: 'X AED 3 Times', label: '5th Prize' },
      { match: "Range", prize: 'X AED 8 Times', label: '5th Prize' },
      { match: "Any 2", prize: 'X AED 5 Times', label: '5th Prize' },
    ]
  },
  {
    id: 'lucky1',
    name: 'Lucky1',
    color: '#68C151',
    digits: 4,
    prizes: [
      { match: 4, prize: 'AED 200,000*', label: 'Grand Prize' },
      { match: 3, prize: 'AED 100', label: '2nd Prize' },
      { match: 2, prize: 'AED 10', label: '3rd Prize' },
      { match: 1, prize: 'AED 2', label: '4th Prize' },
    ]
  },
  {
    id: 'dream5',
    name: 'Dream5',
    color: '#2185D5',
    digits: 5,
    prizes: [
      { match: 5, prize: 'AED 500,000*', label: 'Grand Prize' },
      { match: 4, prize: 'AED 100', label: '2nd Prize' },
      { match: 3, prize: 'AED 20', label: '3rd Prize' },
      { match: 2, prize: 'AED 5', label: '4th Prize' },
      { match: 1, prize: 'AED 1', label: '5th Prize' },
    ]
  }
];

export default function LotteryGamesUI() {
  const [activeGame, setActiveGame] = useState(games[0]);
  const [, setSelectedNumber] = useState('');


  const handleGameClick = (game: SetStateAction<{ id: string; name: string; color: string; digits: number; prizes: { match: number; prize: string; label: string; }[]; } | { id: string; name: string; color: string; digits: number; prizes: { match: string; prize: string; label: string; }[]; }>) => {
    setActiveGame(game);
    setSelectedNumber('');
  };




  const getStarColor = (game: { id: string; name: string; color: string; digits: number; prizes: { match: number; prize: string; label: string; }[]; } | { id: string; name: string; color: string; digits: number; prizes: { match: string; prize: string; label: string; }[]; }) => {
    switch (game.id) {
      case 'fortune4': return '#E5A657';
      case 'magic5': return '#E64B8C';
      case 'super6': return '#15639C';
      case 'rush3': return '#9C46CC';
      case 'lucky1': return '#68C151';
      case 'dream5': return '#2185D5';
      default: return '#000000';
    }
  };

  const renderStars = (count: number, total: number) => {
    const stars = [];
    const starColor = getStarColor(activeGame);

    for (let i = 0; i < total; i++) {
      stars.push(
        <div key={i} className={`w-8 h-8 rounded-full flex items-center justify-center`}>
          {i < count ? (
            <svg width="24" height="24" viewBox="0 0 24 24" fill={starColor} xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill={starColor} stroke="white" strokeWidth="1" />
            </svg>
          ) : (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" stroke={starColor} strokeWidth="1" />
            </svg>
          )}
        </div>
      );
    }
    return stars;
  };





  return (
    <div className="flex flex-col  bg-gray-50">
      <header className="bg-white shadow-md p-4">
        <h1 className="text-2xl font-bold text-center text-gray-800">
          UAE Lottery Games
        </h1>
        <p className="text-center text-gray-600">
          Pick any number from 0 to 9 — trust your gut, go with your birthday, or try your lucky digit.
        </p>
      </header>

      <main className=" container mx-auto flex-grow p-4 md:p-8">
        <div className=" bg-white rounded-2xl shadow-lg overflow-hidden">

          {/* Game Selection Tabs */}
          <div className="flex overflow-x-auto scrollbar-hide p-2 bg-gray-50 border-b">
            {games.map((game) => (
              <motion.button
                key={game.id}
                className={`flex-shrink-0 px-6 py-3 mx-1 rounded-lg font-bold transition-all duration-300 ${activeGame.id === game.id ? 'text-white' : 'text-gray-600'}`}
                style={{
                  backgroundColor: activeGame.id === game.id ? game.color : 'transparent',
                  border: `2px solid ${game.color}`
                }}
                onClick={() => handleGameClick(game)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {game.name}
              </motion.button>
            ))}
          </div>

          <div className="p-6">
            {/* Game Info Banner */}
            <motion.div
              className="flex items-center justify-center mb-8 p-4 rounded-xl"
              style={{ backgroundColor: `${activeGame.color}20` }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center space-x-3 mr-4">
                {Array.from({ length: activeGame.digits }).map((_, idx) => (
                  <motion.div
                    key={idx}
                    className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-white"
                    style={{ backgroundColor: activeGame.color }}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: idx * 0.1 }}
                  >
                    {idx + 1}
                  </motion.div>
                ))}
              </div>
              <h2 className="text-2xl font-bold" style={{ color: activeGame.color }}>
                {activeGame.name}
              </h2>
            </motion.div>

            {/* Prize Breakdown */}
            <motion.div
              className="rounded-xl overflow-hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <div className="py-3 px-6 text-white text-xl font-bold" style={{ backgroundColor: activeGame.color }}>
                Prize Breakdown
              </div>
              <div className="border border-gray-200 rounded-b-xl">
                {activeGame.prizes.map((prize, idx) => (
                  <motion.div
                    key={idx}
                    className="flex items-center p-4 border-b last:border-b-0"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + (idx * 0.1) }}
                  >
                    <div className="w-1/3">
                      <div className="text-gray-700 font-semibold">
                        {typeof prize.match === 'number' ? `${prize.match} out of ${activeGame.digits}` : prize.match}
                      </div>
                    </div>
                    <div className="w-1/3 flex">
                      {typeof prize.match === 'number' ? renderStars(prize.match, activeGame.digits) : <div className="text-sm text-gray-500">{prize.match}</div>}
                    </div>
                    <div className="w-1/3 text-right">
                      <div className="bg-gray-100 rounded-full py-2 px-4 inline-block">
                        <span className="font-semibold" style={{ color: activeGame.color }}>{prize.label}</span>
                      </div>
                      <div className="font-bold mt-1" style={{ color: activeGame.color }}>
                        {prize.prize}
                      </div>
                    </div>
                  </motion.div>
                ))}
                <div className="p-3 text-center text-sm text-gray-500 italic">
                  * Shared Prize, In Case Of Multiple Winners
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </main>
    </div>
  );
}