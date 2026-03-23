import { useRef } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import '../styles/destinations.css';


const DESTINATIONS = [
  {
    id: 1,
    name: 'Gokarna Beach',
    tag: 'Beach',
    price: '₹3,999',
    desc: 'Pristine crescent beaches, ancient Mahabaleshwar Temple & tranquil coves.',
    src: 'https://yhdmbabworewtvoetwxq.supabase.co/storage/v1/object/public/gaming%20night/Gemini_Generated_Image_12qycd12qycd12qy.png',
    emoji: '🏖',
    waText: "I'm interested in the Gokarna tour package",
  },
  {
    id: 2,
    name: 'Murudeshwar',
    tag: 'Temple + Sea',
    price: '₹2,999',
    desc: "World's second-tallest Shiva statue overlooking the Arabian Sea.",
    src: 'https://yhdmbabworewtvoetwxq.supabase.co/storage/v1/object/public/gaming%20night/Gemini_Generated_Image_mmeuo1mmeuo1mmeu.png',
    emoji: '🕌',
    waText: "I'm interested in the Murudeshwar tour package",
  },
  {
    id: 3,
    name: 'Udupi & Malpe',
    tag: 'Beach',
    price: '₹2,499',
    desc: 'Golden sands of Malpe Beach, famous Krishna Temple & fresh seafood.',
    src: 'https://yhdmbabworewtvoetwxq.supabase.co/storage/v1/object/public/gaming%20night/Gemini_Generated_Image_4ur1h44ur1h44ur1.png',
    emoji: '⛵',
    waText: "I'm interested in the Udupi & Malpe tour package",
  },
  {
    id: 4,
    name: 'Coorg',
    tag: 'Hills',
    price: '₹5,499',
    desc: 'Misty coffee plantations, Abbey Falls & the serene Kaveri river.',
    src: 'https://yhdmbabworewtvoetwxq.supabase.co/storage/v1/object/public/gaming%20night/Gemini_Generated_Image_2ifqhk2ifqhk2ifq.png',
    emoji: '🌿',
    waText: "I'm interested in the Coorg tour package",
  },
  {
    id: 5,
    name: 'Chikmagalur',
    tag: 'Hills',
    price: '₹4,499',
    desc: "Karnataka's coffee land — lush green hills, trekking & cool climate.",
    src: 'https://yhdmbabworewtvoetwxq.supabase.co/storage/v1/object/public/gaming%20night/Gemini_Generated_Image_mmr0m1mmr0m1mmr0.png',
    emoji: '☁️',
    waText: "I'm interested in the Chikmagalur tour package",
  },
  {
    id: 6,
    name: "St. Mary's Islands",
    tag: 'Island',
    price: '₹3,299',
    desc: 'Unique hexagonal basalt rock columns — a geological marvel on the coast.',
    src: 'https://yhdmbabworewtvoetwxq.supabase.co/storage/v1/object/public/gaming%20night/Gemini_Generated_Image_2siejg2siejg2sie.png',
    emoji: '🏝',
    waText: "I'm interested in the St. Mary's Islands tour package",
  },
];

const WA_BASE = 'https://wa.me/919019967244?text=';

function DestCard({ dest, delay }) {
  const ref = useRef();
  useScrollReveal(ref);

  return (
    <div
      className={`dest-card reveal reveal-delay-${delay}`}
      ref={ref}
    >
      {dest.src ? (
        <img src={dest.src} alt={dest.name} loading="lazy" />
      ) : (
        <div className="dest-img-placeholder">{dest.emoji}</div>
      )}
      <div className="dest-overlay">
        <span className="dest-tag">{dest.tag}</span>
        <h3 className="dest-name">{dest.name}</h3>
        <p className="dest-price">From {dest.price} / person</p>
        <p className="dest-desc">{dest.desc}</p>
        <a
          href={WA_BASE + encodeURIComponent(dest.waText)}
          target="_blank"
          rel="noreferrer"
          className="dest-enquire"
        >
          Enquire →
        </a>
      </div>
    </div>
  );
}

export default function Destinations() {
  const titleRef = useRef();
  useScrollReveal(titleRef);

  return (
    <section className="destinations" id="destinations">
      <div className="container">
        <div className="section-header" ref={titleRef}>
          <span className="section-eyebrow reveal">Our Destinations</span>
          <h2 className="section-title reveal reveal-delay-1">
            Karnataka's Best Kept Secrets
          </h2>
          <p className="section-sub reveal reveal-delay-2">
            Handpicked experiences from the coast to the hills — every trip tailored just for you.
          </p>
        </div>

        <div className="dest-grid">
          {DESTINATIONS.map((dest, i) => (
            <DestCard key={dest.id} dest={dest} delay={(i % 3) + 1} />
          ))}
        </div>
      </div>
    </section>
  );
}
