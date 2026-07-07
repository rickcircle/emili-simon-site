import { useLanguage } from '../LanguageContext';

export default function Quotes() {
  const { t } = useLanguage();

  return (
    <section className="section" id="quotes">
      <div className="container">
        <div className="section-header reveal">
          <span className="section-label">{t.quotes_label}</span>
          <h2 className="section-title">{t.quotes_title}</h2>
        </div>
        <div className="gallery-grid reveal">
          <div className="gallery-item g1">&ldquo;{t.quote1}&rdquo;</div>
          <div className="gallery-item g2">&ldquo;{t.quote2}&rdquo;</div>
          <div className="gallery-item g3">&ldquo;{t.quote3}&rdquo;</div>
        </div>
      </div>
    </section>
  );
}
