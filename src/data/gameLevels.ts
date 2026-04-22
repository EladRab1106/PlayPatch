import type { GameLevel } from '../features/gameplay/gameTypes';

export const gameLevels: GameLevel[] = [
  {
    id: 'meadow-1',
    title: 'Petal Parade',
    habitat: 'Sunny Meadow',
    prompt: 'Pick the missing bloom to finish the trail.',
    patternRule: 'Color alternates from coral to sky.',
    options: [
      { id: 'a', shape: 'flower', color: 'coral', count: 1, position: 'center' },
      { id: 'b', shape: 'flower', color: 'sky', count: 1, position: 'center' },
      { id: 'c', shape: 'flower', color: 'mint', count: 1, position: 'center' },
    ],
    sequence: [
      { shape: 'flower', color: 'coral', count: 1, position: 'center' },
      { shape: 'flower', color: 'sky', count: 1, position: 'center' },
      { shape: 'flower', color: 'coral', count: 1, position: 'center' },
      null,
    ],
    correctOptionId: 'b',
  },
  {
    id: 'meadow-2',
    title: 'Lantern Row',
    habitat: 'Sunny Meadow',
    prompt: 'Find the next pattern to light the garden bridge.',
    patternRule: 'Shape and position rotate together.',
    options: [
      { id: 'a', shape: 'leaf', color: 'gold', count: 1, position: 'left' },
      { id: 'b', shape: 'diamond', color: 'gold', count: 1, position: 'right' },
      { id: 'c', shape: 'diamond', color: 'gold', count: 1, position: 'left' },
    ],
    sequence: [
      { shape: 'leaf', color: 'gold', count: 1, position: 'left' },
      { shape: 'diamond', color: 'gold', count: 1, position: 'center' },
      { shape: 'leaf', color: 'gold', count: 1, position: 'right' },
      null,
    ],
    correctOptionId: 'c',
  },
  {
    id: 'pond-1',
    title: 'Pond Ripple',
    habitat: 'Silver Pond',
    prompt: 'Choose the missing ripple to wake the pond creature.',
    patternRule: 'Count grows by one while color cycles.',
    options: [
      { id: 'a', shape: 'orb', color: 'sky', count: 3, position: 'center' },
      { id: 'b', shape: 'orb', color: 'lavender', count: 4, position: 'center' },
      { id: 'c', shape: 'orb', color: 'sky', count: 4, position: 'center' },
    ],
    sequence: [
      { shape: 'orb', color: 'mint', count: 1, position: 'center' },
      { shape: 'orb', color: 'sky', count: 2, position: 'center' },
      { shape: 'orb', color: 'lavender', count: 3, position: 'center' },
      null,
    ],
    correctOptionId: 'c',
  },
];
