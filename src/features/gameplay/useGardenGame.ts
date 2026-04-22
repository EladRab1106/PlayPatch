import { useEffect, useMemo, useRef, useState } from 'react';
import { gameLevels } from '../../data/gameLevels';
import { useProgress } from '../../app/providers/ProgressProvider';
import type { PopItem } from './gameTypes';

export function useGardenGame() {
  const { progress, awardCorrectAnswer, clearRoundFeedback, completeCurrentLevel } = useProgress();
  const [roundIndex, setRoundIndex] = useState(0);
  const [poppedIds, setPoppedIds] = useState<string[]>([]);
  const [wrongItemId, setWrongItemId] = useState<string | null>(null);
  const [feedback, setFeedback] = useState<'idle' | 'correct' | 'incorrect' | 'celebrating'>('idle');
  const autoAdvanceRef = useRef<number | null>(null);

  const level = useMemo(() => gameLevels[progress.currentLevel], [progress.currentLevel]);
  const round = level.rounds[roundIndex];
  const targetIds = useMemo(
    () =>
      round.items
        .filter((item) => matchesRule(item, round.rule))
        .map((item) => item.id),
    [round],
  );
  const poppedTargetCount = targetIds.filter((id) => poppedIds.includes(id)).length;
  const isRoundComplete = targetIds.length > 0 && targetIds.every((id) => poppedIds.includes(id));
  const isLevelComplete = isRoundComplete && roundIndex === level.rounds.length - 1;

  useEffect(() => {
    setRoundIndex(0);
    setPoppedIds([]);
    setWrongItemId(null);
    setFeedback('idle');
    return clearAutoAdvance;
  }, [level.id]);

  useEffect(() => {
    if (!isRoundComplete) {
      return;
    }

    setFeedback('celebrating');
    autoAdvanceRef.current = window.setTimeout(() => {
      if (roundIndex === level.rounds.length - 1) {
        completeCurrentLevel();
        setRoundIndex(0);
        setPoppedIds([]);
        setWrongItemId(null);
        setFeedback('idle');
        return;
      }

      clearRoundFeedback();
      setRoundIndex((current) => current + 1);
      setPoppedIds([]);
      setWrongItemId(null);
      setFeedback('idle');
    }, 850);

    return clearAutoAdvance;
  }, [clearRoundFeedback, completeCurrentLevel, isRoundComplete, level.rounds.length, roundIndex]);

  function tapItem(itemId: string) {
    if (feedback === 'celebrating') {
      return;
    }

    const tappedItem = round.items.find((item) => item.id === itemId);

    if (!tappedItem || poppedIds.includes(itemId)) {
      return;
    }

    if (matchesRule(tappedItem, round.rule)) {
      setPoppedIds((current) => [...current, itemId]);
      setFeedback('correct');
      awardCorrectAnswer();
      return;
    }

    setWrongItemId(itemId);
    setFeedback('incorrect');

    window.setTimeout(() => {
      setWrongItemId((current) => (current === itemId ? null : current));
      setFeedback((current) => (current === 'incorrect' ? 'idle' : current));
    }, 380);
  }

  function clearAutoAdvance() {
    if (autoAdvanceRef.current !== null) {
      window.clearTimeout(autoAdvanceRef.current);
      autoAdvanceRef.current = null;
    }
  }

  return {
    level,
    round,
    roundIndex,
    feedback,
    poppedIds,
    wrongItemId,
    poppedTargetCount,
    targetIds,
    isRoundComplete,
    isLevelComplete,
    tapItem,
  };
}

function matchesRule(item: PopItem, rule: { type: 'color' | 'shape'; targetColor?: string; targetShape?: string }) {
  if (rule.type === 'color') {
    return item.color === rule.targetColor;
  }

  return item.shape === rule.targetShape;
}
