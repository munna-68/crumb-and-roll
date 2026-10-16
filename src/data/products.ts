import type { CategoryId } from './categories';

export interface Product {
  id: string;
  title: string;
  category: CategoryId;
  price: number;
  /** card surface colour */
  cardBg: string;
  subtitle: string;
  /** Unsplash photo id (query string built at render time) */
  photoId: string;
  imageAlt: string;
  badge: string;
}

export const DAILY_PRODUCTS: readonly Product[] = [
  {
    id: 'bagel-seeds',
    title: 'BAGEL WITH SEEDS',
    category: 'BAGEL',
    price: 14,
    cardBg: 'bg-peach',
    subtitle: 'Toasted sesame & poppy seed NYC-style rings',
    photoId: '1633171702522-5806cb457df1',
    imageAlt: 'Pile of freshly baked sesame seed bagels in golden sunlight',
    badge: 'FRESH',
  },
  {
    id: 'sliced-bread',
    title: 'SLICED PIECE BREAD',
    category: 'PASTRIES',
    price: 18,
    cardBg: 'bg-sky-slice',
    subtitle: '72-hour fermented country walnut sourdough',
    photoId: '1509440159596-0249088772ff',
    imageAlt: 'Tall stack of artisanal sliced sourdough bread',
    badge: 'ARTISAN',
  },
  {
    id: 'cookies-glucose',
    title: 'COOKIES GLUCOSE',
    category: 'COOKIES',
    price: 16,
    cardBg: 'bg-lemon-soft',
    subtitle: 'Belgian dark chunk & browned butter sea salt',
    photoId: '1499636136210-6f4ee915583e',
    imageAlt: 'Chocolate chunk cookies with sea salt flakes',
    badge: 'CRUNCHY',
  },
  {
    id: 'butter-croissant',
    title: 'FLAKY CROISSANT',
    category: 'CROISSANT',
    price: 15,
    cardBg: 'bg-salmon',
    subtitle: 'Isigny Sainte-Mère cultured butter layers',
    photoId: '1555507036-ab1f4038808a',
    imageAlt: 'Golden flaky butter croissants fresh from the oven',
    badge: 'TASTY',
  },
  {
    id: 'bavarian-bretzel',
    title: 'BAVARIAN BRETZEL',
    category: 'BRETZEL',
    price: 12,
    cardBg: 'bg-lavender',
    subtitle: 'Malted crust with coarse flaky sea salt',
    photoId: '1573140247632-f8fd74997d5c',
    imageAlt: 'Bavarian pretzels with coarse sea salt',
    badge: 'WARM',
  },
  {
    id: 'velvet-cake',
    title: 'PLAIN BUTTER CAKE',
    category: 'CAKE',
    price: 22,
    cardBg: 'bg-teal-card',
    subtitle: 'Madagascar vanilla bean & golden crumb',
    photoId: '1578985545062-69928b1d9587',
    imageAlt: 'Plain butter cake with a golden crumb',
    badge: 'SWEET',
  },
] as const;
