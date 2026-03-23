import { useEffect, useRef } from 'react';
import '../styles/hero.css';

const WA_LINK = 'https://wa.me/919999999999?text=Hi!%20I\'m%20interested%20in%20a%20tour%20package';

export default function Hero() {
  const bgRef = useRef(null);

  useEffect(() => {
    // Trigger zoom-out animation after mount
    const t = setTimeout(() => {
      if (bgRef.current) bgRef.current.classList.add('loaded');
    }, 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="hero" id="hero">
      {/* Background with parallax */}
      <div className="hero-bg" ref={bgRef} />

      {/* SVG dotted route line */}
      <div className="hero-route">
        <svg viewBox="0 0 1440 800" preserveAspectRatio="xMidYMid slice" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M 180 650 C 300 580, 420 480, 560 490 C 700 500, 820 420, 960 410 C 1100 400, 1240 360, 1360 280"
            stroke="#ff5c35"
            strokeWidth="2"
            strokeDasharray="8 10"
            opacity="0.7"
          />
          {/* Dots at waypoints */}
          <circle cx="180" cy="650" r="5" fill="#ff5c35" opacity="0.9" />
          <circle cx="560" cy="490" r="5" fill="#ff5c35" opacity="0.9" />
          <circle cx="960" cy="410" r="5" fill="#ff5c35" opacity="0.9" />
          <circle cx="1360" cy="280" r="5" fill="#ff5c35" opacity="0.9" />
        </svg>
      </div>

      {/* Waypoint labels */}
      <div className="waypoints">
        <div className="waypoint waypoint-1">
          <div className="waypoint-dot" />
          <span className="waypoint-label">Gokarna</span>
        </div>
        <div className="waypoint waypoint-2">
          <div className="waypoint-dot" />
          <span className="waypoint-label">Murudeshwar</span>
        </div>
        <div className="waypoint waypoint-3">
          <div className="waypoint-dot" />
          <span className="waypoint-label">Udupi</span>
        </div>
      </div>

      {/* Content */}
      <div className="hero-content container">
        <p className="hero-tag">Est. 2024 · Karnataka Coast</p>

        <h1 className="hero-title">
          Explore<br />
          <span className="accent">Karavali</span>
        </h1>

        <p className="hero-subtitle">
          Discover the untamed beauty of Karnataka's golden coastline — pristine beaches, ancient temples, and misty hills.
        </p>

        <div className="hero-actions">
          <a
            href="#destinations"
            className="btn-primary"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('destinations')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            🗺 View Destinations
          </a>
          <a href={WA_LINK} target="_blank" rel="noreferrer" className="btn-outline">
            💬 WhatsApp Us
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="scroll-indicator">
        <div className="scroll-line" />
        <span>Scroll</span>
      </div>
    </section>
  );
}
