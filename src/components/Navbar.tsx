import React from 'react';
import { Home, Pickaxe, Users, ClipboardList } from 'lucide-react';

interface NavbarProps {
  setCurrentScene: React.Dispatch<React.SetStateAction<string>>;
}

const Navbar: React.FC<NavbarProps> = ({ setCurrentScene }) => {
  return (
    <nav className="bg-transparent w-full">
      <ul className="flex justify-around py-2">
        <li>
          <button className="text-white flex flex-col items-center" onClick={() => setCurrentScene('home')}>
            <div className="p-2 rounded-full shadow-md">
              <Home size={24} className="text-white drop-shadow-lg" />
            </div>
            <span className="text-xs mt-1 text-white drop-shadow">Inicio</span>
          </button>
        </li>
        <li>
          <button className="text-white flex flex-col items-center" onClick={() => setCurrentScene('mining')}>
            <div className="p-2 rounded-full shadow-md">
              <Pickaxe size={24} className="text-white drop-shadow-lg" />
            </div>
            <span className="text-xs mt-1 text-white drop-shadow">Minería</span>
          </button>
        </li>
        <li>
          <button className="text-white flex flex-col items-center" onClick={() => setCurrentScene('tasks')}>
            <div className="p-2 rounded-full shadow-md">
              <ClipboardList size={24} className="text-white drop-shadow-lg" />
            </div>
            <span className="text-xs mt-1 text-white drop-shadow">Tareas</span>
          </button>
        </li>
        <li>
          <button className="text-white flex flex-col items-center" onClick={() => setCurrentScene('friends')}>
            <div className="p-2 rounded-full shadow-md">
              <Users size={24} className="text-white drop-shadow-lg" />
            </div>
            <span className="text-xs mt-1 text-white drop-shadow">Amigos</span>
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;