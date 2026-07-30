import { useState } from 'react';

/**
 * Renders a real <img> pointing at /assets/<fileName>. If the file doesn't
 * exist (404), it falls back to rendering `fallback` instead of a broken
 * image icon — so the site looks fine before you've added your real photos,
 * and just works the moment you drop a correctly-named file into public/assets/.
 */
function ImageWithFallback({ fileName, alt, className, fallback }) {
  const [failed, setFailed] = useState(false);

  if (failed) return fallback;

  return (
    <img
      src={`/assets/${fileName}`}
      alt={alt}
      className={className}
      onError={() => setFailed(true)}
    />
  );
}

export default ImageWithFallback;
