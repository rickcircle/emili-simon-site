import { useLanguage } from '../LanguageContext';

export default function Quotes() {
  const { t } = useLanguage();

  return (
    <section className="section section-parchment" id="quotes">
      <div className="container">
        <div className="section-header reveal">
          <span className="section-label"><span className="chapter-num">III</span>{t.quotes_label}</span>
          <h2 className="section-title">{t.quotes_title}</h2>
        </div>
        <div className="featured-quote reveal">
          <span className="quote-mark">&ldquo;</span>
          <p>{t.quote1}</p>
        </div>
        <div className="quote-row reveal">
          <div className="quote-card">&ldquo;{t.quote2}&rdquo;</div>
          <div className="quote-card">&ldquo;{t.quote3}&rdquo;</div>
        </div>
      </div>
    </section>
  );
}
