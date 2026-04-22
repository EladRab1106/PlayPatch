import { Link } from 'react-router-dom';
import { CelebrationBurst } from '../components/feedback/CelebrationBurst';
import { AnswerOption } from '../components/game/AnswerOption';
import { PatternPreview } from '../components/game/PatternPreview';
import { RewardPanel } from '../components/game/RewardPanel';
import { GardenIsland } from '../components/world/GardenIsland';
import { useGardenGame } from '../features/gameplay/useGardenGame';
import { useProgress } from '../app/providers/ProgressProvider';

export function GamePage() {
  const { level, feedback, selectedOptionId, roundCorrectAnswers, isLevelComplete, chooseOption, nextTurn } =
    useGardenGame();
  const { progress } = useProgress();

  return (
    <main className="page-shell game-page">
      <section className="game-layout">
        <div className="game-board">
          <div className="game-card">
            <div className="game-card__header">
              <div>
                <p className="eyebrow">Garden Trails</p>
                <h1>{level.title}</h1>
              </div>
              <span className="garden-growth-badge">Level blooms {roundCorrectAnswers}/3</span>
            </div>
            <p className="game-card__prompt">{level.prompt}</p>
            <PatternPreview sequence={level.sequence} title={level.patternRule} />
            <div className="answer-grid">
              {level.options.map((option) => (
                <AnswerOption
                  key={option.id}
                  option={option}
                  isSelected={selectedOptionId === option.id}
                  isCorrect={option.id === level.correctOptionId}
                  feedback={feedback}
                  onSelect={chooseOption}
                />
              ))}
            </div>
            <div className="game-footer">
              <div>
                {feedback === 'correct' ? (
                  <p className="feedback-copy feedback-copy--success">Beautiful match. The trail is glowing.</p>
                ) : null}
                {feedback === 'incorrect' ? (
                  <p className="feedback-copy feedback-copy--retry">Not quite. Look for what changes each step.</p>
                ) : null}
                {isLevelComplete ? (
                  <p className="feedback-copy feedback-copy--success">Level complete. The next habitat path is open.</p>
                ) : null}
              </div>
              <div className="game-actions">
                <button
                  className="button button--primary"
                  type="button"
                  onClick={nextTurn}
                  disabled={feedback === 'idle'}
                >
                  {isLevelComplete ? 'Collect reward' : feedback === 'correct' ? 'Grow the garden' : 'Try again'}
                </button>
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
            streak={roundCorrectAnswers}
            feedback={feedback}
            rewardMessage={progress.lastReward}
          />
          <CelebrationBurst active={feedback === 'correct'} label="+2 seeds" />
        </div>
      </section>
    </main>
  );
}
