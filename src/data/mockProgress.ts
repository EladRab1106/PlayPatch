import type { ProgressState } from '../features/progress/progressTypes';

export const initialProgress: ProgressState = {
  currentHabitat: 'Sunny Meadow',
  currentLevel: 0,
  seedsEarned: 14,
  completedLevels: [],
  unlockedGardenItems: ['Daisy Gate', 'Honey Bench'],
  unlockedCreatures: ['Glow Snail'],
  gardenGrowth: 3,
  streakBloom: 0,
  lastReward: '',
};
