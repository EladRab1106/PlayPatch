import { Link } from 'react-router-dom';
import { useProgress } from '../app/providers/ProgressProvider';
import { gameLevels } from '../data/gameLevels';
import { GardenIsland } from '../components/world/GardenIsland';
import { ProgressCard } from '../components/world/ProgressCard';
import { UnlockGallery } from '../components/world/UnlockGallery';

export function DashboardPage() {
  const { progress } = useProgress();
  const level = gameLevels[progress.currentLevel];

  return (
    <main className="page-shell dashboard-page">
      <section className="dashboard-grid">
        <GardenIsland growth={progress.gardenGrowth} habitat={progress.currentHabitat} highlight={progress.lastReward} />
        <div className="dashboard-stack">
          <section className="activity-card">
            <p className="eyebrow">Ready now</p>
            <h1>{level.title}</h1>
            <p>{level.prompt}</p>
            <ul className="activity-meta">
              <li>Skill: {level.patternRule}</li>
              <li>Habitat: {level.habitat}</li>
              <li>Reward: 2 seeds per correct answer</li>
            </ul>
            <Link className="button button--primary" to="/game">
              Start Garden Trails
            </Link>
          </section>
          <ProgressCard
            currentLevel={progress.currentLevel}
            completedCount={progress.completedLevels.length}
            seeds={progress.seedsEarned}
          />
        </div>
      </section>
      <section className="dashboard-lower">
        <UnlockGallery title="Unlocked garden items" items={progress.unlockedGardenItems} />
        <UnlockGallery title="Garden friends" items={progress.unlockedCreatures} />
      </section>
    </main>
  );
}
