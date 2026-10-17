/**
 * Web-ready bakery photography.
 *
 * Master files live in /assets/originals (not shipped). The build-ready
 * derivatives in /public/images/bakes are pre-optimized WebP files named
 * `<name>-<width>.webp` where width is the exact pixel width of the file.
 */

const BASE = `${import.meta.env.BASE_URL}images/bakes`;

/** Resolve a root-relative public asset (e.g. "/images/x.png") under the app's base path. */
export function publicAsset(path: string): string {
  return `${import.meta.env.BASE_URL}${path.replace(/^\//, '')}`;
}

export function bake(name: string, width: number): string {
  return `${BASE}/${name}-${width}.webp`;
}

/** Build a srcSet string for responsive images at the given widths. */
export function bakeSrcSet(name: string, widths: readonly number[]): string {
  return widths.map((w) => `${bake(name, w)} ${w}w`).join(', ');
}
