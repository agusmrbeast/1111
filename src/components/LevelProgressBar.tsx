import React from 'react';
import { levels } from '../utils/levelColors';

interface LevelProgressBarProps {
  coins: number;
}

const LevelProgressBar: React.FC<LevelProgressBarProps> = ({ coins }) => {
  const getCurrentLevel = () => {
    for (let i = levels.length - 1; i >= 0; i--) {
      if (coins >= levels[i].min) {
        return levels[i];
      }
    }
    return levels[0];
  };

  const currentLevel = getCurrentLevel();
  const progress = ((coins - currentLevel.min) / (currentLevel.max - currentLevel.min)) * 100;

  return (
    <div className="flex items-center mr-4">
      <div className="text-white font-bold text-lg mr-2">Lv{currentLevel.level}</div>
      <div className="w-4 h-24 bg-gray-300 rounded-full overflow-hidden">
        <div 
          className="bg-yellow-400 w-full rounded-full"
          style={{ height: `${progress}%`, transition: 'height 0.5s' }}
        ></div>
      </div>
    </div>
  );
};

export default LevelProgressBar;