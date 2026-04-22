import { useProgress } from '../app/providers/ProgressProvider';
import { gameLevels } from '../data/gameLevels';

export function ParentProgressPage() {
  const { progress, resetProgress } = useProgress();
  const currentLevel = gameLevels[progress.currentLevel];
  const progressPercent = Math.round((progress.completedLevels.length / gameLevels.length) * 100);

  return (
    <main className="page-shell parent-page">
      <section className="parent-summary">
        <div>
          <p className="eyebrow">Parent progress view</p>
          <h1>Structured, visible learning progress.</h1>
          <p>
            PlayPatch currently teaches early pattern recognition through short guided levels. Each
            completed trail advances the child&apos;s garden and marks clear skill progress.
          </p>
        </div>
        <button className="button button--ghost" type="button" onClick={resetProgress}>
          Reset demo progress
        </button>
      </section>
      <section className="parent-metrics">
        <article className="metric-card">
          <strong>{progressPercent}%</strong>
          <span>MVP pathway completed</span>
        </article>
        <article className="metric-card">
          <strong>{progress.seedsEarned}</strong>
          <span>Seeds earned through correct answers</span>
        </article>
        <article className="metric-card">
          <strong>{progress.unlockedGardenItems.length + progress.unlockedCreatures.length}</strong>
          <span>Total unlocks earned</span>
        </article>
      </section>
      <section className="parent-detail-grid">
        <article className="parent-card">
          <p className="eyebrow">Current learning focus</p>
          <h2>{currentLevel.title}</h2>
          <p>{currentLevel.patternRule}</p>
        </article>
        <article className="parent-card">
          <p className="eyebrow">What the child sees</p>
          <p>Immediate blooms, seeds, unlocked paths, and gentle creature reveals tied to correct pattern choices.</p>
        </article>
        <article className="parent-card">
          <p className="eyebrow">What parents can verify</p>
          <ul className="parent-list">
            <li>Current habitat: {progress.currentHabitat}</li>
            <li>Completed levels: {progress.completedLevels.length}</li>
            <li>Unlocked items: {progress.unlockedGardenItems.join(', ')}</li>
            <li>Unlocked creatures: {progress.unlockedCreatures.join(', ')}</li>
          </ul>
        </article>
      </section>
    </main>
  );
}
