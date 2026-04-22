import { Link } from 'react-router-dom';
import { FeatureGrid } from '../components/landing/FeatureGrid';
import { HeroSection } from '../components/landing/HeroSection';
import { ProgressStory } from '../components/landing/ProgressStory';

export function LandingPage() {
  return (
    <main className="page-shell landing-page">
      <HeroSection />
      <FeatureGrid />
      <ProgressStory />
      <section className="cta-panel">
        <div>
          <p className="eyebrow">Designed for repeatable trust</p>
          <h2>A simple, premium foundation for a children&apos;s learning product parents would pay for.</h2>
          <p>
            The MVP stays focused: one flagship game, one visible growth loop, one clear skill, and
            one parent-friendly progress story.
          </p>
        </div>
        <Link className="button button--primary" to="/game">
          See Garden Trails
        </Link>
      </section>
    </main>
  );
}
