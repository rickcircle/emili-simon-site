import { useEffect, useState } from 'react';
import { useLanguage } from '../LanguageContext';

const NAV_IDS = ['about', 'writing', 'quotes', 'travel', 'contact'];

export default function Header() {
  const { lang, setLang, t } = useLanguage();
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('');

  const links = [
    ['#about', t.nav_about],
    ['#writing', t.nav_writing],
    ['#quotes', t.nav_quotes],
    ['#travel', t.nav_travel],
    ['#contact', t.nav_contact],
  ];

  useEffect(() => {
    const sections = NAV_IDS.map((id) => document.getElementById(id)).filter(Boolean);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`);
        });
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: 0 }
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <header className="site-header">
      <div className="container">
        <a href="#" className="site-logo">Emili Simon</a>

        <nav className="site-nav">
          {links.map(([href, label]) => (
            <a key={href} href={href} className={active === href ? 'active' : ''}>{label}</a>
          ))}
        </nav>

        <div className="header-right">
          <div className="lang-switcher">
            <a href="#" className={lang === 'en' ? 'active' : ''} onClick={(e) => { e.preventDefault(); setLang('en'); }}>EN</a>
            <a href="#" className={lang === 'hu' ? 'active' : ''} onClick={(e) => { e.preventDefault(); setLang('hu'); }}>HU</a>
          </div>
          <button className="hamburger" aria-label="Menu" onClick={() => setOpen(!open)}>
            <span></span><span></span><span></span>
          </button>
        </div>
      </div>

      <nav className={`mobile-menu ${open ? 'open' : ''}`}>
        {links.map(([href, label]) => (
          <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>
        ))}
        <div className="lang-switcher lang-mobile">
          <a href="#" className={lang === 'en' ? 'active' : ''} onClick={(e) => { e.preventDefault(); setLang('en'); }}>EN</a>
          <a href="#" className={lang === 'hu' ? 'active' : ''} onClick={(e) => { e.preventDefault(); setLang('hu'); }}>HU</a>
        </div>
      </nav>
    </header>
  );
}
