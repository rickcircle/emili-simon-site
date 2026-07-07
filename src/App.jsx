import { useEffect } from 'react';
import { LanguageProvider } from './LanguageContext';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Writing from './components/Writing';
import Quotes from './components/Quotes';
import Travel from './components/Travel';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ReadingRibbon from './components/ReadingRibbon';

function App() {
  useEffect(() => {
    const revealElements = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('visible');
        });
      },
      { threshold: 0.1 }
    );
    revealElements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <LanguageProvider>
      <ReadingRibbon />
      <Header />
      <main>
        <Hero />
        <About />
        <Writing />
        <Quotes />
        <Travel />
        <Contact />
      </main>
      <Footer />
    </LanguageProvider>
  );
}

export default App;
