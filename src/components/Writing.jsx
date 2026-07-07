import { useLanguage } from '../LanguageContext';

const files = import.meta.glob('../../content/writings/*.md', { eager: true, query: '?raw', import: 'default' });

function parseFrontmatter(raw) {
  const match = raw.match(/^---\n([\s\S]*?)\n---/);
  if (!match) return {};
  const data = {};
  for (const line of match[1].split('\n')) {
    const idx = line.indexOf(':');
    if (idx === -1) continue;
    const key = line.slice(0, idx).trim();
    const value = line.slice(idx + 1).trim();
    data[key] = value;
  }
  return data;
}

const pieces = Object.values(files)
  .map(parseFrontmatter)
  .sort((a, b) => Number(a.order) - Number(b.order));

export default function Writing() {
  const { t } = useLanguage();

  return (
    <section className="section section-alt" id="writing">
      <div className="container">
        <div className="section-header reveal">
          <span className="section-label"><span className="chapter-num">II</span>{t.writing_label}</span>
          <h2 className="section-title">{t.writing_title}</h2>
          <p className="section-text">{t.writing_sub}</p>
        </div>
        <div className="folio-list reveal">
          {pieces.map((piece, i) => (
            <a className="folio-item" key={piece.file} href={piece.file} target="_blank" rel="noopener noreferrer">
              <span className="folio-num">{String(i + 1).padStart(2, '0')}</span>
              <span className="folio-body">
                <span className="folio-title">{piece.title}</span>
                <span className="folio-desc">{piece.description}</span>
              </span>
              <span className="folio-tag">{piece.tag}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
