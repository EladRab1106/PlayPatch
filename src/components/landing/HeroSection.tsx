import { Link } from 'react-router-dom';

export function HeroSection() {
  return (
    <section className="hero-panel">
      <div className="hero-copy">
        <p className="eyebrow">Premium early learning for ages 4-6</p>
        <h1>Children grow a living garden world by mastering simple patterns.</h1>
        <p className="hero-copy__lede">
          PlayPatch turns early logic practice into visible world-building. Every correct choice
          grows the island, unlocks charming discoveries, and gives parents clear progress they can
          trust.
        </p>
        <div className="hero-actions">
          <Link className="button button--primary" to="/dashboard">
            Explore the child dashboard
          </Link>
          <Link className="button button--ghost" to="/progress">
            View parent progress
          </Link>
        </div>
        <ul className="hero-statbar">
          <li>
            <strong>1 clear skill</strong>
            <span>Pattern fluency and early logic</span>
          </li>
          <li>
            <strong>5 minute sessions</strong>
            <span>Short loops for young attention spans</span>
          </li>
          <li>
            <strong>Structured growth</strong>
            <span>Habitats, levels, unlocks, and mastery</span>
          </li>
        </ul>
      </div>
      <div className="hero-visual">
        <div className="island-orb">
          <div className="island-orb__halo" />
          <div className="island-orb__garden">
            <span className="island-item island-item--sun" />
            <span className="island-item island-item--pond" />
            <span className="island-item island-item--flower is-1" />
            <span className="island-item island-item--flower is-2" />
            <span className="island-item island-item--flower is-3" />
            <span className="island-item island-item--creature" />
          </div>
        </div>
        <div className="hero-note">
          <p className="eyebrow">What the child feels</p>
          <p>I helped the path bloom. I want to see what grows next.</p>
        </div>
      </div>
    </section>
  );
}
