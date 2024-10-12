export const levels = [
  { level: 1, min: 0, max: 1000, from: '#81d4fa', to: '#a3e1ff' },
  { level: 2, min: 1000, max: 5000, from: '#25b6ee', to: '#48caff' },
  { level: 3, min: 5000, max: 10000, from: '#4caf50', to: '#6cd96f' },
  { level: 4, min: 10000, max: 30000, from: '#e8cd3f', to: '#f3e064' },
  { level: 5, min: 30000, max: Infinity, from: '#9a13f8', to: '#b139ff' },
];

export const getCurrentLevel = (coins: number) => {
  for (let i = levels.length - 1; i >= 0; i--) {
    if (coins >= levels[i].min) {
      return levels[i];
    }
  }
  return levels[0];
};

export const getBackgroundColor = (coins: number) => {
  const { from, to } = getCurrentLevel(coins);
  return `from-[${from}] to-[${to}]`;
};

export const getTextColor = (coins: number) => {
  const { from } = getCurrentLevel(coins);
  return from;
};