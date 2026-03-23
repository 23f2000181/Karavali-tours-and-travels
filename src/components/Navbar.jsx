import { useState, useEffect } from 'react';
import '../styles/navbar.css';

const WA_LINK = 'https://wa.me/919999999999?text=Hi!%20I\'m%20interested%20in%20a%20tour%20package';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>
      <div className="container nav-inner">
        <a className="nav-logo" href="/" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
          Karavali<span className="dot">.</span>
        </a>

        <button
          className={`hamburger${menuOpen ? ' open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </button>

        <ul className={`nav-links${menuOpen ? ' open' : ''}`}>
          <li><a href="#" onClick={(e) => { e.preventDefault(); scrollTo('hero'); }}>Home</a></li>
          <li><a href="#" onClick={(e) => { e.preventDefault(); scrollTo('destinations'); }}>Destinations</a></li>
          <li><a href="#" onClick={(e) => { e.preventDefault(); scrollTo('features'); }}>About</a></li>
          <li><a href="#" onClick={(e) => { e.preventDefault(); scrollTo('contact'); }}>Contact</a></li>
          <li>
            <a href={WA_LINK} target="_blank" rel="noreferrer" className="nav-cta">
              📞 Contact Us
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
