type ProgressCardProps = {
  currentLevel: number;
  completedCount: number;
  seeds: number;
};

export function ProgressCard({ currentLevel, completedCount, seeds }: ProgressCardProps) {
  return (
    <section className="stat-card">
      <p className="eyebrow">Today&apos;s progress</p>
      <div className="stat-grid">
        <div>
          <strong>Level {currentLevel + 1}</strong>
          <span>Current trail</span>
        </div>
        <div>
          <strong>{completedCount}</strong>
          <span>Levels restored</span>
        </div>
        <div>
          <strong>{seeds}</strong>
          <span>Total seeds</span>
        </div>
      </div>
    </section>
  );
}
