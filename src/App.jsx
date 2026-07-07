import { useEffect } from 'react';
import { LanguageProvider } from './LanguageContext';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Writing from './components/Writing';
import Quotes from './components/Quotes';
import Contact from './components/Contact';
import Footer from './components/Footer';

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
      <Header />
      <main>
        <Hero />
        <About />
        <Writing />
        <Quotes />
        <Contact />
      </main>
      <Footer />
    </LanguageProvider>
  );
}

export default App;
