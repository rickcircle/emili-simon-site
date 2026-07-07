import { useLanguage } from '../LanguageContext';

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section className="hero">
      <div className="hero-content fade-in">
        <p className="hero-badge">{t.hero_badge}</p>
        <h1 className="hero-title">Emili Simon</h1>
        <p className="hero-sub">{t.hero_sub}</p>
        <div className="hero-buttons">
          <a href="#writing" className="btn btn-primary">{t.hero_btn1}</a>
          <a href="#contact" className="btn btn-outline">{t.hero_btn2}</a>
        </div>
      </div>
    </section>
  );
}
