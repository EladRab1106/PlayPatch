export type PatternShape = 'flower' | 'leaf' | 'diamond' | 'orb';
export type PatternColor = 'coral' | 'sky' | 'mint' | 'gold' | 'lavender';
export type PatternPosition = 'left' | 'center' | 'right';

export type PatternToken = {
  shape: PatternShape;
  color: PatternColor;
  count: number;
  position: PatternPosition;
};

export type PatternOption = PatternToken & {
  id: string;
};

export type GameLevel = {
  id: string;
  title: string;
  habitat: string;
  prompt: string;
  patternRule: string;
  sequence: Array<PatternToken | null>;
  options: PatternOption[];
  correctOptionId: string;
};
