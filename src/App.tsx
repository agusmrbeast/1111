import React, { useState, useEffect } from 'react';
import { Settings, Pickaxe } from 'lucide-react';
import Character from './components/Character';
import Config from './components/Config';
import Navbar from './components/Navbar';
import MiningScene from './components/MiningScene';
import TasksScene from './components/TasksScene';
import TokenInfoScene from './components/TokenInfoScene';
import FriendsScene from './components/FriendsScene';
import LevelProgressBar from './components/LevelProgressBar';
import { getBackgroundColor, getTextColor } from './utils/levelColors';

function App() {
  const [coins, setCoins] = useState(0);
  const [miningRate, setMiningRate] = useState(0);
  const [currentScene, setCurrentScene] = useState('home');
  const [clickCount, setClickCount] = useState(0);
  const [lastClickTime, setLastClickTime] = useState(Date.now());

  useEffect(() => {
    const interval = setInterval(() => {
      setCoins(prevCoins => prevCoins + miningRate);
    }, 1000);
    return () => clearInterval(interval);
  }, [miningRate]);

  const handleCharacterClick = () => {
    const now = Date.now();
    if (now - lastClickTime > 3000) {
      setClickCount(0);
    }
    if (clickCount < 7) {
      setCoins(prevCoins => prevCoins + 100);
      setClickCount(prevCount => prevCount + 1);
      setLastClickTime(now);
    }
  };

  const renderScene = () => {
    switch (currentScene) {
      case 'mining':
        return <MiningScene coins={coins} setCoins={setCoins} miningRate={miningRate} setMiningRate={setMiningRate} />;
      case 'tasks':
        return <TasksScene coins={coins} setCoins={setCoins} />;
      case 'tokenInfo':
        return <TokenInfoScene setCurrentScene={setCurrentScene} />;
      case 'friends':
        return <FriendsScene coins={coins} setCoins={setCoins} />;
      default:
        return (
          <>
            <div className="bg-transparent rounded-lg p-4 w-full mb-4">
              <div className="flex justify-between items-center mb-4">
                <div className="flex items-center">
                  <img src="public/images/tu_ruta_moneda_amarilla.png" alt="Coin" className="w-8 h-8 mr-2" />
                  <span className="text-3xl font-bold text-white">{coins.toFixed(2)}</span>
                </div>
              </div>
              <div className="flex items-center justify-center text-white font-bold text-sm mb-2">
                <Pickaxe size={16} className="mr-1" />
                <span>{Math.floor(miningRate * 3600)} monedas x hora</span>
              </div>
              <div className="flex items-center justify-center">
                <LevelProgressBar coins={coins} />
                <div onClick={handleCharacterClick} className="flex-grow">
                  <Character />
                </div>
              </div>
              <p className="text-white font-bold text-center mt-2">{clickCount}/7 clicks</p>
            </div>
          </>
        );
    }
  };

  const textColor = getTextColor(coins);

  return (
    <div className="h-screen bg-gradient-to-b from-[#81d4fa] to-[#a3e1ff] flex flex-col items-center justify-between p-4">
      {currentScene === 'home' && (
        <div className="w-full flex justify-between items-center mb-4">
          <button onClick={() => setCurrentScene('config')} className={`text-[${textColor}]`}>
            <Settings size={24} />
          </button>
          <button
            onClick={() => setCurrentScene('tokenInfo')}
            className={`bg-[${textColor}] hover:bg-opacity-80 text-white font-bold py-2 px-4 rounded`}
          >
            Acerca del Token
          </button>
        </div>
      )}
      <div className="flex-grow w-full max-w-md flex flex-col justify-center">
        {renderScene()}
      </div>
      {currentScene !== 'tokenInfo' && <Navbar setCurrentScene={setCurrentScene} coins={coins} />}
      {currentScene === 'config' && <Config onClose={() => setCurrentScene('home')} />}
    </div>
  );
}

export default App;