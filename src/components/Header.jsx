import { useState } from 'react';
import { useLanguage } from '../LanguageContext';

export default function Header() {
  const { lang, setLang, t } = useLanguage();
  const [open, setOpen] = useState(false);

  const links = [
    ['#about', t.nav_about],
    ['#writing', t.nav_writing],
    ['#quotes', t.nav_quotes],
    ['#contact', t.nav_contact],
  ];

  return (
    <header className="site-header">
      <div className="container">
        <a href="#" className="site-logo">Emili Simon</a>

        <nav className="site-nav">
          {links.map(([href, label]) => (
            <a key={href} href={href}>{label}</a>
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
