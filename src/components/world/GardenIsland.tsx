type GardenIslandProps = {
  growth: number;
  habitat: string;
  highlight?: string;
};

export function GardenIsland({ growth, habitat, highlight }: GardenIslandProps) {
  const blooms = Array.from({ length: Math.max(growth, 3) });

  return (
    <section className="garden-island-card">
      <div className="garden-island-card__header">
        <div>
          <p className="eyebrow">Current habitat</p>
          <h2>{habitat}</h2>
        </div>
        <span className="garden-growth-badge">Growth {growth}/12</span>
      </div>
      <div className="garden-island-scene">
        <div className="garden-island-base">
          <span className="garden-scene__path" />
          <span className="garden-scene__pond" />
          {blooms.map((_, index) => (
            <span className={`garden-scene__bloom bloom-${index + 1}`} key={`bloom-${index}`} />
          ))}
          {growth >= 5 ? <span className="garden-scene__creature garden-scene__creature--one" /> : null}
          {growth >= 8 ? <span className="garden-scene__creature garden-scene__creature--two" /> : null}
        </div>
      </div>
      <p className="garden-island-card__highlight">{highlight || 'Your next answers will wake more of the island.'}</p>
    </section>
  );
}
