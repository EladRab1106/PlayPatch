import { useEffect, useMemo, useState } from 'react';
import { gameLevels } from '../../data/gameLevels';
import { useProgress } from '../../app/providers/ProgressProvider';

export function useGardenGame() {
  const { progress, awardCorrectAnswer, clearRoundFeedback, completeCurrentLevel } = useProgress();
  const [selectedOptionId, setSelectedOptionId] = useState<string | null>(null);
  const [feedback, setFeedback] = useState<'idle' | 'correct' | 'incorrect'>('idle');
  const [roundCorrectAnswers, setRoundCorrectAnswers] = useState(0);

  const level = useMemo(() => gameLevels[progress.currentLevel], [progress.currentLevel]);
  const isLevelComplete = roundCorrectAnswers >= 3;

  useEffect(() => {
    setSelectedOptionId(null);
    setFeedback('idle');
    setRoundCorrectAnswers(0);
  }, [level.id]);

  function chooseOption(optionId: string) {
    if (feedback === 'correct' || isLevelComplete) {
      return;
    }

    setSelectedOptionId(optionId);

    if (optionId === level.correctOptionId) {
      setFeedback('correct');
      setRoundCorrectAnswers((current) => current + 1);
      awardCorrectAnswer();
      return;
    }

    setFeedback('incorrect');
  }

  function nextTurn() {
    if (feedback === 'correct') {
      if (roundCorrectAnswers >= 3) {
        completeCurrentLevel();
      }

      setSelectedOptionId(null);
      setFeedback('idle');
      clearRoundFeedback();
      return;
    }

    if (feedback === 'incorrect') {
      setSelectedOptionId(null);
      setFeedback('idle');
    }
  }

  return {
    level,
    feedback,
    selectedOptionId,
    roundCorrectAnswers,
    isLevelComplete,
    chooseOption,
    nextTurn,
  };
}
