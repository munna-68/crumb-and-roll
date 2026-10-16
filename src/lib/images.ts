/**
 * Helpers for building Unsplash CDN URLs.
 * Every photograph ID here comes from the original reference design so the
 * imagery stays identical to the approved look.
 */

const BASE = 'https://images.unsplash.com/photo-';

export function unsplash(photoId: string, width: number, quality = 82): string {
  return `${BASE}${photoId}?auto=format&fit=crop&w=${width}&q=${quality}`;
}

/** Build a srcSet string for responsive images at 1x/2x-ish widths. */
export function unsplashSrcSet(
  photoId: string,
  widths: readonly number[],
  quality = 82,
): string {
  return widths.map((w) => `${unsplash(photoId, w, quality)} ${w}w`).join(', ');
}
