import { useLanguage } from '../LanguageContext';

const photos = [
  'IMG_0015.jpeg',
  'IMG_0126.jpeg',
  'IMG_2820.jpeg',
  'IMG_4155.jpeg',
  'IMG_6007.jpeg',
  'IMG_6069.jpeg',
  'IMG_7909.jpeg',
  'IMG_7914.jpeg',
  'IMG_8004.jpeg',
  'IMG_8066.jpeg',
  'IMG_8322.jpeg',
  'IMG_8401.jpeg',
  'IMG_9417.jpeg',
];

export default function Travel() {
  const { t } = useLanguage();

  return (
    <section className="section section-alt" id="travel">
      <div className="container">
        <div className="section-header reveal">
          <span className="section-label"><span className="chapter-num">IV</span>{t.travel_label}</span>
          <h2 className="section-title">{t.travel_title}</h2>
          <p className="section-text">{t.travel_sub}</p>
        </div>
        <div className="travel-grid reveal">
          {photos.map((file) => (
            <div className="travel-photo" key={file}>
              <img src={`/images/travel/${file}`} alt="Emili on the road" loading="lazy" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
