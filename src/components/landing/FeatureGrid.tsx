const features = [
  {
    title: 'Guided learning arcs',
    body: 'Each habitat introduces one visual rule at a time so the child experiences calm mastery instead of noisy guessing.',
  },
  {
    title: 'Visible world-building rewards',
    body: 'Correct answers trigger blooms, bridges, creatures, and seeds. Progress is tangible after every session.',
  },
  {
    title: 'Parent clarity',
    body: 'The experience is structured around levels, skills, and completion milestones so parents can see what learning happened.',
  },
];

export function FeatureGrid() {
  return (
    <section className="feature-grid">
      {features.map((feature) => (
        <article className="feature-card" key={feature.title}>
          <div className="feature-card__icon">✦</div>
          <h2>{feature.title}</h2>
          <p>{feature.body}</p>
        </article>
      ))}
    </section>
  );
}
