import './styles/tokens.css';
import './styles/globals.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Destinations from './components/Destinations';
import Features from './components/Features';
import CTABanner from './components/CTABanner';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Destinations />
        <Features />
        <CTABanner />
      </main>
      <Footer />
    </>
  );
}
