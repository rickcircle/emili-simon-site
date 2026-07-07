import { useEffect, useState } from 'react';

export default function ReadingRibbon() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    function onScroll() {
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(docHeight > 0 ? Math.min(1, window.scrollY / docHeight) : 0);
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="reading-ribbon-track" aria-hidden="true">
      <div className="reading-ribbon-fill" style={{ height: `${progress * 100}%` }}></div>
    </div>
  );
}
