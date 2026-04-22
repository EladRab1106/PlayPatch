import type { PropsWithChildren } from 'react';
import { createContext, useContext, useState } from 'react';
import { gameLevels } from '../../data/gameLevels';
import { initialProgress } from '../../data/mockProgress';
import type { GardenItem, ProgressState } from '../../features/progress/progressTypes';

type ProgressContextValue = {
  progress: ProgressState;
  awardCorrectAnswer: () => void;
  clearRoundFeedback: () => void;
  completeCurrentLevel: () => void;
  resetProgress: () => void;
};

const ProgressContext = createContext<ProgressContextValue | null>(null);

function nextGardenUnlock(completedCount: number): GardenItem[] {
  if (completedCount === 1) {
    return ['Sunpetal Path'];
  }

  if (completedCount === 2) {
    return ['Pebble Pond'];
  }

  return [];
}

function nextCreatureUnlock(completedCount: number): string[] {
  if (completedCount === 2) {
    return ['Moss Bunny'];
  }

  return [];
}

export function ProgressProvider({ children }: PropsWithChildren) {
  const [progress, setProgress] = useState<ProgressState>(initialProgress);

  const awardCorrectAnswer = () => {
    setProgress((current) => ({
      ...current,
      seedsEarned: current.seedsEarned + 2,
      gardenGrowth: Math.min(current.gardenGrowth + 1, 12),
      streakBloom: Math.min(current.streakBloom + 1, 6),
      lastReward:
        current.streakBloom % 2 === 0 ? 'A new flower bloomed.' : 'Your garden sparkled brighter.',
    }));
  };

  const clearRoundFeedback = () => {
    setProgress((current) => ({
      ...current,
      lastReward: '',
      streakBloom: 0,
    }));
  };

  const completeCurrentLevel = () => {
    setProgress((current) => {
      const levelId = gameLevels[current.currentLevel]?.id;

      if (!levelId || current.completedLevels.includes(levelId)) {
        return current;
      }

      const completedLevels = [...current.completedLevels, levelId];
      const unlockedGardenItems = [
        ...current.unlockedGardenItems,
        ...nextGardenUnlock(completedLevels.length),
      ];
      const unlockedCreatures = [
        ...current.unlockedCreatures,
        ...nextCreatureUnlock(completedLevels.length),
      ];
      const nextLevel = Math.min(current.currentLevel + 1, gameLevels.length - 1);
      const nextHabitat = gameLevels[nextLevel].habitat;

      return {
        ...current,
        completedLevels,
        currentLevel: nextLevel,
        currentHabitat: nextHabitat,
        seedsEarned: current.seedsEarned + 8,
        unlockedGardenItems,
        unlockedCreatures,
        lastReward: `${gameLevels[current.currentLevel].title} restored the island path.`,
      };
    });
  };

  const resetProgress = () => {
    setProgress(initialProgress);
  };

  return (
    <ProgressContext.Provider
      value={{
        progress,
        awardCorrectAnswer,
        clearRoundFeedback,
        completeCurrentLevel,
        resetProgress,
      }}
    >
      {children}
    </ProgressContext.Provider>
  );
}

export function useProgress() {
  const context = useContext(ProgressContext);

  if (!context) {
    throw new Error('useProgress must be used within ProgressProvider');
  }

  return context;
}
