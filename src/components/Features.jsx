import { useEffect, useRef, useState } from 'react';
import '../styles/features.css';

const FEATURES = [
  {
    icon: '🏖',
    num: '01',
    title: 'Local Experts',
    text: 'Born and raised on the Karavali coast — we know every hidden beach, trail, and viewpoint.',
  },
  {
    icon: '🚐',
    num: '02',
    title: 'Comfortable Transport',
    text: 'AC vehicles, experienced drivers, and door-to-door pickup across Karnataka.',
  },
  {
    icon: '📸',
    num: '03',
    title: 'Curated Experiences',
    text: 'Handpicked stays, authentic local food, guided treks & water sports included.',
  },
  {
    icon: '💰',
    num: '04',
    title: 'Best Price Guarantee',
    text: 'No hidden charges. Completely transparent pricing from day one.',
  },
];

const STATS = [
  { end: 500, suffix: '+', label: 'Happy Travelers' },
  { end: 50, suffix: '+', label: 'Destinations' },
  { end: 3, suffix: ' yrs', label: 'Experience' },
  { end: 100, suffix: '%', label: 'Satisfaction' },
];

function useCountUp(end, suffix, started) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!started) return;
    let start = 0;
    const duration = 1800;
    const step = end / (duration / 16);
    const timer = setInterval(() => {
      start = Math.min(start + step, end);
      setCount(Math.floor(start));
      if (start >= end) clearInterval(timer);
    }, 16);
    return () => clearInterval(timer);
  }, [started, end]);

  return count + suffix;
}

function StatItem({ stat, started }) {
  const display = useCountUp(stat.end, stat.suffix, started);
  return (
    <div className="stat-item">
      <span className="stat-number">{display}</span>
      <span className="stat-label">{stat.label}</span>
    </div>
  );
}

export default function Features() {
  const statsRef = useRef();
  const [statsStarted, setStatsStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStatsStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (statsRef.current) observer.observe(statsRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="features" id="features">
      <div className="container">
        <div className="section-header">
          <span className="section-eyebrow">Why Choose Us</span>
          <h2 className="section-title">Your Trip, Our Expertise</h2>
          <p className="section-sub">
            We don't just plan tours — we craft memories that last a lifetime.
          </p>
        </div>

        <div className="features-grid">
          {FEATURES.map((f) => (
            <div className="feature-card" key={f.num}>
              <span className="feature-number">{f.num}</span>
              <span className="feature-icon">{f.icon}</span>
              <h3 className="feature-title">{f.title}</h3>
              <p className="feature-text">{f.text}</p>
            </div>
          ))}
        </div>

        <div className="stats-row" ref={statsRef}>
          {STATS.map((s) => (
            <StatItem key={s.label} stat={s} started={statsStarted} />
          ))}
        </div>
      </div>
    </section>
  );
}
