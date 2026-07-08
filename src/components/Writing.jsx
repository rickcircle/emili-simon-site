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
    <section className="section section-bordeaux" id="writing">
      <div className="container">
        <div className="section-header reveal">
          <span className="section-label"><span className="chapter-num">II</span>{t.writing_label}</span>
          <h2 className="section-title">{t.writing_title}</h2>
          <p className="section-text">{t.writing_sub}</p>
        </div>
        <div className="bookshelf reveal">
          {pieces.map((piece, i) => (
            <a className={`book book-${(i % 3) + 1}`} key={piece.file} href={piece.file} target="_blank" rel="noopener noreferrer">
              <span className="book-band">
                <span className="book-tag">{piece.tag}</span>
              </span>
              <span className="book-title">{piece.title}</span>
              <span className="book-link">{t.piece_read} &rarr;</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
