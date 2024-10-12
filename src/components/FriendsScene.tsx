import React, { useState } from 'react';
import { Users, Share2, Gift } from 'lucide-react';

interface FriendsSceneProps {
  coins: number;
  setCoins: React.Dispatch<React.SetStateAction<number>>;
}

const FriendsScene: React.FC<FriendsSceneProps> = ({ coins, setCoins }) => {
  const [referralCode, setReferralCode] = useState('ABC123'); // Este código debería generarse dinámicamente
  const [friends, setFriends] = useState(0);

  const handleInvite = () => {
    // Aquí iría la lógica para compartir el código de referido
    alert(`Comparte tu código de referido: ${referralCode}`);
  };

  const handleAddFriend = () => {
    // Simulamos la adición de un amigo
    setFriends(prevFriends => prevFriends + 1);
    // Bonus por cada amigo añadido
    setCoins(prevCoins => prevCoins + 100);
  };

  return (
    <div className="w-full max-w-md">
      <div className="bg-white bg-opacity-80 rounded-lg shadow-lg p-4 mb-4">
        <h3 className="text-lg font-semibold text-black mb-2">Tu Código de Referido</h3>
        <div className="flex items-center justify-between bg-gray-100 rounded p-2">
          <span className="text-black font-mono">{referralCode}</span>
          <button 
            onClick={handleInvite}
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-1 px-2 rounded flex items-center"
          >
            <Share2 size={16} className="mr-1" />
            Compartir
          </button>
        </div>
      </div>
      
      <div className="bg-white bg-opacity-80 rounded-lg shadow-lg p-4 mb-4">
        <h3 className="text-lg font-semibold text-black mb-2">Tus Amigos</h3>
        <div className="flex items-center justify-between">
          <span className="text-black"><Users size={16} className="inline mr-2" />{friends} amigos</span>
          <button 
            onClick={handleAddFriend}
            className="bg-green-500 hover:bg-green-600 text-white font-bold py-1 px-2 rounded flex items-center"
          >
            <Gift size={16} className="mr-1" />
            Añadir Amigo (+100 monedas)
          </button>
        </div>
      </div>
      
      <div className="bg-white bg-opacity-80 rounded-lg shadow-lg p-4">
        <h3 className="text-lg font-semibold text-black mb-2">Beneficios</h3>
        <ul className="list-disc list-inside text-black">
          <li>Gana 100 monedas por cada amigo que invites</li>
          <li>5% de bonus en tu tasa de minería por cada amigo</li>
        </ul>
      </div>
    </div>
  );
};

export default FriendsScene;