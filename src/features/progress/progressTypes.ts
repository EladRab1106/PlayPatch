export type GardenItem = 'Daisy Gate' | 'Honey Bench' | 'Sunpetal Path' | 'Pebble Pond';

export type ProgressState = {
  currentHabitat: string;
  currentLevel: number;
  seedsEarned: number;
  completedLevels: string[];
  unlockedGardenItems: GardenItem[];
  unlockedCreatures: string[];
  gardenGrowth: number;
  streakBloom: number;
  lastReward: string;
};
