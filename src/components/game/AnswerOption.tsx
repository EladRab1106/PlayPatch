import type { PatternOption } from '../../features/gameplay/gameTypes';
import { PatternPreview } from './PatternPreview';

type AnswerOptionProps = {
  option: PatternOption;
  isSelected: boolean;
  isCorrect: boolean;
  feedback: 'idle' | 'correct' | 'incorrect';
  onSelect: (optionId: string) => void;
};

export function AnswerOption({
  option,
  isSelected,
  isCorrect,
  feedback,
  onSelect,
}: AnswerOptionProps) {
  const stateClass =
    feedback === 'idle'
      ? ''
      : isCorrect
        ? 'answer-option--correct'
        : isSelected
          ? 'answer-option--incorrect'
          : '';

  return (
    <button
      className={`answer-option ${isSelected ? 'answer-option--selected' : ''} ${stateClass}`.trim()}
      type="button"
      onClick={() => onSelect(option.id)}
    >
      <PatternPreview sequence={[option]} />
    </button>
  );
}
