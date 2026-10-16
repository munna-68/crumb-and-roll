/**
 * Global site configuration.
 *
 * HERO_VARIANT selects which of the three reference hero compositions is used
 * on the landing page:
 *
 *  - 'cookies' (default) — "BAKE THE COOKIES" white card hero. This is the
 *    hero used by the full-page flow in the reference (its own default) and
 *    the one that best matches the sections below it: same yellow card
 *    language as the daily product cards, same badges, same pace.
 *
 *  - 'hand' — "MADE BY HAND, FROM SCRATCH, WITH LOVE." dark espresso banner
 *    (reference Hero 2). Drops in as a like-for-like hero; the rest of the
 *    page continues unchanged.
 *
 *  - 'art' — "THE ART OF BAKING." oversized headline (reference Hero 1). In
 *    the reference this variant replaces the whole page body with its own
 *    composition (headline + collage + review banner, announcement bar
 *    hidden), so the same behaviour is preserved here.
 */
export type HeroVariant = 'cookies' | 'art' | 'hand';

export const HERO_VARIANT: HeroVariant = 'cookies';

/** Commerce rules — mirrored from the reference promo bar. */
export const PROMO = {
  threshold: 100,
  rate: 0.15,
  code: 'ROLLIN15',
} as const;

export const SITE = {
  name: 'ROLLIN.',
  tagline: 'Premium bread & cookies made from scratch',
  description:
    'Premium bread, cookies and pastries, baked by hand every morning on stone hearths.',
  instagram: 'https://instagram.com',
  facebook: 'https://facebook.com',
  twitter: 'https://twitter.com',
} as const;

export const SECTION_IDS = {
  featured: 'featured-delight',
  products: 'daily-products',
  artForm: 'art-form-section',
  special: 'why-special',
} as const;
