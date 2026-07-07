import { useLanguage } from '../LanguageContext';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-col">
            <h4 className="footer-logo">Emili Simon</h4>
            <p>{t.footer_tagline}</p>
          </div>
          <div className="footer-col">
            <h4>{t.footer_contact}</h4>
            <p><a href="mailto:hello@emilisimon.com">hello@emilisimon.com</a></p>
          </div>
          <div className="footer-col">
            <h4>{t.footer_follow}</h4>
            <p><a href="#" target="_blank" rel="noopener noreferrer">Instagram</a></p>
            <p><a href="#" target="_blank" rel="noopener noreferrer">LinkedIn</a></p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Emili Simon — {t.footer_built} <a href="https://richardkormendi.com">Richard Körmendi</a></p>
        </div>
      </div>
    </footer>
  );
}
