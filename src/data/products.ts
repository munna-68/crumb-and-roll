import type { CategoryId } from './categories';

export type ProductStampId =
  | 'cookies'
  | 'cake'
  | 'bretzel'
  | 'croissant'
  | 'bagel'
  | 'sourdough';

export interface Product {
  id: string;
  title: string;
  category: CategoryId;
  price: number;
  /** card surface colour */
  cardBg: string;
  subtitle: string;
  /** base name of the optimized image in /public/images/bakes */
  image: string;
  imageAlt: string;
  badge: string;
  /** monoline stamp drawn in the card corner */
  stamp: ProductStampId;
  /** stamp stroke colour, tuned to the card surface */
  stampColor: string;
}

export const DAILY_PRODUCTS: readonly Product[] = [
  {
    id: 'bagel-seeds',
    title: 'BAGEL WITH SEEDS',
    category: 'BAGEL',
    price: 14,
    cardBg: 'bg-peach',
    subtitle: 'Toasted sesame & poppy seed NYC-style rings',
    image: 'bagel-with-seeds',
    imageAlt: 'Pile of freshly baked sesame and poppy seed bagels in golden light',
    badge: 'FRESH',
    stamp: 'bagel',
    stampColor: '#521D08',
  },
  {
    id: 'sliced-bread',
    title: 'SLICED PIECE BREAD',
    category: 'PASTRIES',
    price: 18,
    cardBg: 'bg-sky-slice',
    subtitle: '72-hour fermented country walnut sourdough',
    image: 'sliced-piece-bread',
    imageAlt: '72-hour fermented walnut sourdough boule with a sliced half',
    badge: 'ARTISAN',
    stamp: 'sourdough',
    stampColor: '#0B4F5E',
  },
  {
    id: 'cookies-glucose',
    title: 'COOKIES GLUCOSE',
    category: 'COOKIES',
    price: 16,
    cardBg: 'bg-lemon-soft',
    subtitle: 'Belgian dark chunk & browned butter sea salt',
    image: 'cookies-glucose',
    imageAlt: 'Belgian dark chocolate chunk cookies with a molten chocolate pull',
    badge: 'CRUNCHY',
    stamp: 'cookies',
    stampColor: '#331B15',
  },
  {
    id: 'butter-croissant',
    title: 'FLAKY CROISSANT',
    category: 'CROISSANT',
    price: 15,
    cardBg: 'bg-salmon',
    subtitle: 'Isigny Sainte-Mère cultured butter layers',
    image: 'croissant',
    imageAlt: 'Golden flaky butter croissants, one torn to show the honeycomb crumb',
    badge: 'TASTY',
    stamp: 'croissant',
    stampColor: '#331B15',
  },
  {
    id: 'bavarian-bretzel',
    title: 'BAVARIAN BRETZEL',
    category: 'BRETZEL',
    price: 12,
    cardBg: 'bg-lavender',
    subtitle: 'Malted crust with coarse flaky sea salt',
    image: 'bretzel',
    imageAlt: 'Bavarian pretzels with glossy dark crust and coarse sea salt',
    badge: 'WARM',
    stamp: 'bretzel',
    stampColor: '#2D1963',
  },
  {
    id: 'velvet-cake',
    title: 'PLAIN BUTTER CAKE',
    category: 'CAKE',
    price: 22,
    cardBg: 'bg-teal-card',
    subtitle: 'Madagascar vanilla bean & golden crumb',
    image: 'butter-cake',
    imageAlt: 'Plain butter cake loaf with a thick slice cut to show the golden crumb',
    badge: 'SWEET',
    stamp: 'cake',
    stampColor: '#0B4F5E',
  },
] as const;
