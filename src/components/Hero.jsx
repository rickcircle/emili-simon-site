import { useLanguage } from '../LanguageContext';

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section className="hero">
      <div className="hero-content fade-in">
        <p className="hero-badge">{t.hero_badge}</p>
        <h1 className="hero-title">Emili Simon</h1>
        <svg className="hero-vine" viewBox="0 0 240 40" width="240" height="40" aria-hidden="true">
          <line x1="0" y1="20" x2="80" y2="20" stroke="#b23a48" strokeWidth="1" />
          <line x1="160" y1="20" x2="240" y2="20" stroke="#b23a48" strokeWidth="1" />
          <path d="M120 20 C110 20 108 8 120 8 C132 8 130 20 120 20 C110 20 108 32 120 32 C132 32 130 20 120 20 Z" fill="none" stroke="#b23a48" strokeWidth="1.2" />
          <circle cx="120" cy="20" r="2.5" fill="#b23a48" />
        </svg>
        <p className="hero-sub">{t.hero_sub}</p>
        <div className="hero-buttons">
          <a href="#writing" className="btn btn-primary">{t.hero_btn1}</a>
          <a href="#contact" className="btn btn-outline">{t.hero_btn2}</a>
        </div>
      </div>
    </section>
  );
}
