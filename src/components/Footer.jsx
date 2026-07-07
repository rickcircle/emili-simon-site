import { useLanguage } from '../LanguageContext';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="site-footer">
      <div className="container colophon">
        <div className="colophon-seal">E</div>
        <div className="hero-rule"></div>
        <h4 className="footer-logo">Emili Simon</h4>
        <p className="colophon-tagline">{t.footer_tagline}</p>
        <div className="colophon-links">
          <a href="mailto:hello@emilisimon.com">hello@emilisimon.com</a>
          <span className="colophon-sep">&middot;</span>
          <a href="#" target="_blank" rel="noopener noreferrer">Instagram</a>
          <span className="colophon-sep">&middot;</span>
          <a href="#" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </div>
        <p className="colophon-note">{t.footer_colophon}</p>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Emili Simon &mdash; {t.footer_built} <a href="https://richardkormendi.com">Richard Körmendi</a></p>
        </div>
      </div>
    </footer>
  );
}
