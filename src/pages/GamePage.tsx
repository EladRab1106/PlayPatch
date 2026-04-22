import { Link } from 'react-router-dom';
import { CelebrationBurst } from '../components/feedback/CelebrationBurst';
import { PopInstruction } from '../components/game/PopInstruction';
import { PopItemButton } from '../components/game/PopItemButton';
import { RewardPanel } from '../components/game/RewardPanel';
import { GardenIsland } from '../components/world/GardenIsland';
import { useGardenGame } from '../features/gameplay/useGardenGame';
import { useProgress } from '../app/providers/ProgressProvider';

export function GamePage() {
  const { level, round, roundIndex, feedback, poppedIds, wrongItemId, poppedTargetCount, targetIds, isRoundComplete, isLevelComplete, tapItem } =
    useGardenGame();
  const { progress } = useProgress();

  return (
    <main className="page-shell game-page">
      <section className="game-layout">
        <div className="game-board">
          <div className="game-card">
            <div className="game-card__header">
              <div>
                <p className="eyebrow">Flagship game</p>
                <h1>{level.title}</h1>
              </div>
              <span className="garden-growth-badge">
                Found {poppedTargetCount}/{targetIds.length}
              </span>
            </div>
            <p className="game-card__prompt">{level.prompt}</p>
            <PopInstruction
              instruction={round.rule.instruction}
              roundIndex={roundIndex}
              totalRounds={level.rounds.length}
            />
            <div className="pop-grid" aria-label="Tap the matching items">
              {round.items.map((item) => (
                <PopItemButton
                  key={item.id}
                  item={item}
                  popped={poppedIds.includes(item.id)}
                  wrong={wrongItemId === item.id}
                  onTap={tapItem}
                />
              ))}
            </div>
            <div className="game-footer">
              <div>
                {feedback === 'correct' ? (
                  <p className="feedback-copy feedback-copy--success">Nice pop. The garden is growing.</p>
                ) : null}
                {feedback === 'incorrect' ? (
                  <p className="feedback-copy feedback-copy--retry">Try again. Only tap the matching ones.</p>
                ) : null}
                {isRoundComplete && !isLevelComplete ? (
                  <p className="feedback-copy feedback-copy--success">Round complete. Next one is ready.</p>
                ) : null}
                {isLevelComplete ? (
                  <p className="feedback-copy feedback-copy--success">Level complete. The habitat just bloomed brighter.</p>
                ) : null}
              </div>
              <div className="game-actions">
                <Link className="button button--ghost" to="/dashboard">
                  Back to dashboard
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="game-side">
          <GardenIsland growth={progress.gardenGrowth} habitat={progress.currentHabitat} highlight={progress.lastReward} />
          <RewardPanel
            seeds={progress.seedsEarned}
            streak={poppedTargetCount}
            feedback={feedback === 'celebrating' ? 'correct' : feedback === 'incorrect' ? 'incorrect' : 'idle'}
            rewardMessage={progress.lastReward}
          />
          <CelebrationBurst active={feedback === 'correct' || feedback === 'celebrating'} label="+2 seeds" />
        </div>
      </section>
    </main>
  );
}
