export type PopColor = 'coral' | 'sky' | 'mint' | 'gold' | 'lavender';
export type PopShape = 'flower' | 'star' | 'leaf' | 'sun';
export type RuleType = 'color' | 'shape';

export type PopItem = {
  id: string;
  color: PopColor;
  shape: PopShape;
};

export type PopRule = {
  type: RuleType;
  targetColor?: PopColor;
  targetShape?: PopShape;
  instruction: string;
};

export type PopRound = {
  id: string;
  items: PopItem[];
  rule: PopRule;
};

export type GameLevel = {
  id: string;
  title: string;
  habitat: string;
  prompt: string;
  patternRule: string;
  rounds: PopRound[];
};
