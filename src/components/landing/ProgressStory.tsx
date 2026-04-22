const steps = [
  {
    title: 'Solve one clear pattern',
    detail: 'Large visual prompts keep the task simple and confidence-building.',
  },
  {
    title: 'Earn seeds instantly',
    detail: 'Every correct answer creates a warm, visible reward loop.',
  },
  {
    title: 'Grow the island',
    detail: 'Completing rounds adds permanent blooms, paths, and friendly creatures.',
  },
  {
    title: 'Unlock the next habitat',
    detail: 'Children feel forward motion while parents see structured progression.',
  },
];

export function ProgressStory() {
  return (
    <section className="story-panel">
      <div>
        <p className="eyebrow">How progression works</p>
        <h2>Short play loops build into a world the child cares about.</h2>
      </div>
      <div className="story-steps">
        {steps.map((step, index) => (
          <article className="story-step" key={step.title}>
            <span className="story-step__index">0{index + 1}</span>
            <h3>{step.title}</h3>
            <p>{step.detail}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
