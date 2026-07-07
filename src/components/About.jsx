import { useLanguage } from '../LanguageContext';

export default function About() {
  const { t } = useLanguage();

  return (
    <section className="section" id="about">
      <div className="container">
        <div className="about-grid reveal">
          <div>
            <div className="about-image"></div>
            <p className="marginalia">{t.about_marginalia}</p>
          </div>
          <div className="about-text">
            <span className="section-label">{t.about_label}</span>
            <h2 className="section-title">{t.about_title}</h2>
            <p className="drop-cap">{t.about_text1}</p>
            <p style={{ marginTop: '1rem' }}>{t.about_text2}</p>
            <a href="#contact" className="btn btn-primary" style={{ marginTop: '2rem', display: 'inline-block' }}>{t.about_btn}</a>
          </div>
        </div>
      </div>
    </section>
  );
}
