import type { GameLevel } from '../features/gameplay/gameTypes';

export const gameLevels: GameLevel[] = [
  {
    id: 'meadow-1',
    title: 'Berry Pop Meadow',
    habitat: 'Sunny Meadow',
    prompt: 'Tap the matching items as fast as you can.',
    patternRule: 'Single-rule rounds focused on color or shape.',
    rounds: [
      {
        id: 'meadow-1-round-1',
        rule: {
          type: 'color',
          targetColor: 'coral',
          instruction: 'Tap all the CORAL ones',
        },
        items: [
          { id: 'a', color: 'coral', shape: 'flower' },
          { id: 'b', color: 'sky', shape: 'leaf' },
          { id: 'c', color: 'coral', shape: 'star' },
          { id: 'd', color: 'mint', shape: 'flower' },
        ],
      },
      {
        id: 'meadow-1-round-2',
        rule: {
          type: 'shape',
          targetShape: 'star',
          instruction: 'Tap all the STARS',
        },
        items: [
          { id: 'a', color: 'gold', shape: 'star' },
          { id: 'b', color: 'sky', shape: 'leaf' },
          { id: 'c', color: 'coral', shape: 'star' },
          { id: 'd', color: 'mint', shape: 'flower' },
          { id: 'e', color: 'lavender', shape: 'sun' },
        ],
      },
      {
        id: 'meadow-1-round-3',
        rule: {
          type: 'color',
          targetColor: 'gold',
          instruction: 'Tap all the GOLD ones',
        },
        items: [
          { id: 'a', color: 'gold', shape: 'sun' },
          { id: 'b', color: 'sky', shape: 'leaf' },
          { id: 'c', color: 'gold', shape: 'star' },
          { id: 'd', color: 'mint', shape: 'flower' },
          { id: 'e', color: 'coral', shape: 'leaf' },
        ],
      },
    ],
  },
  {
    id: 'meadow-2',
    title: 'Lantern Bloom Field',
    habitat: 'Sunny Meadow',
    prompt: 'Clear the right items to wake more of the garden.',
    patternRule: 'Slightly denser rounds with faster scanning.',
    rounds: [
      {
        id: 'meadow-2-round-1',
        rule: {
          type: 'shape',
          targetShape: 'leaf',
          instruction: 'Tap all the LEAVES',
        },
        items: [
          { id: 'a', color: 'mint', shape: 'leaf' },
          { id: 'b', color: 'gold', shape: 'star' },
          { id: 'c', color: 'lavender', shape: 'sun' },
          { id: 'd', color: 'coral', shape: 'leaf' },
          { id: 'e', color: 'sky', shape: 'flower' },
        ],
      },
      {
        id: 'meadow-2-round-2',
        rule: {
          type: 'color',
          targetColor: 'sky',
          instruction: 'Tap all the SKY ones',
        },
        items: [
          { id: 'a', color: 'mint', shape: 'leaf' },
          { id: 'b', color: 'sky', shape: 'star' },
          { id: 'c', color: 'sky', shape: 'flower' },
          { id: 'd', color: 'coral', shape: 'leaf' },
          { id: 'e', color: 'gold', shape: 'sun' },
          { id: 'f', color: 'sky', shape: 'sun' },
        ],
      },
      {
        id: 'meadow-2-round-3',
        rule: {
          type: 'shape',
          targetShape: 'flower',
          instruction: 'Tap all the FLOWERS',
        },
        items: [
          { id: 'a', color: 'mint', shape: 'flower' },
          { id: 'b', color: 'sky', shape: 'star' },
          { id: 'c', color: 'lavender', shape: 'flower' },
          { id: 'd', color: 'coral', shape: 'leaf' },
          { id: 'e', color: 'gold', shape: 'sun' },
          { id: 'f', color: 'coral', shape: 'flower' },
        ],
      },
    ],
  },
  {
    id: 'pond-1',
    title: 'Moon Pond Pop',
    habitat: 'Silver Pond',
    prompt: 'Fast rounds with calm focus and instant rewards.',
    patternRule: 'Mixes color and shape rules with six-item boards.',
    rounds: [
      {
        id: 'pond-1-round-1',
        rule: {
          type: 'color',
          targetColor: 'lavender',
          instruction: 'Tap all the LAVENDER ones',
        },
        items: [
          { id: 'a', color: 'lavender', shape: 'star' },
          { id: 'b', color: 'sky', shape: 'leaf' },
          { id: 'c', color: 'lavender', shape: 'flower' },
          { id: 'd', color: 'coral', shape: 'leaf' },
          { id: 'e', color: 'mint', shape: 'sun' },
          { id: 'f', color: 'gold', shape: 'star' },
        ],
      },
      {
        id: 'pond-1-round-2',
        rule: {
          type: 'shape',
          targetShape: 'sun',
          instruction: 'Tap all the SUNS',
        },
        items: [
          { id: 'a', color: 'lavender', shape: 'star' },
          { id: 'b', color: 'sky', shape: 'sun' },
          { id: 'c', color: 'lavender', shape: 'flower' },
          { id: 'd', color: 'coral', shape: 'sun' },
          { id: 'e', color: 'mint', shape: 'leaf' },
          { id: 'f', color: 'gold', shape: 'star' },
        ],
      },
      {
        id: 'pond-1-round-3',
        rule: {
          type: 'color',
          targetColor: 'mint',
          instruction: 'Tap all the MINT ones',
        },
        items: [
          { id: 'a', color: 'lavender', shape: 'star' },
          { id: 'b', color: 'sky', shape: 'sun' },
          { id: 'c', color: 'mint', shape: 'flower' },
          { id: 'd', color: 'coral', shape: 'sun' },
          { id: 'e', color: 'mint', shape: 'leaf' },
          { id: 'f', color: 'gold', shape: 'star' },
        ],
      },
    ],
  },
];
