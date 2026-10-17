export interface FeaturedItem {
  id: string;
  name: string;
  note: string;
  price: number;
  /** base name of the optimized image in /public/images/bakes */
  image: string;
  imageAlt: string;
  desc: string;
}

export const FEATURED_ITEMS: readonly FeaturedItem[] = [
  {
    id: 'bagel-buns',
    name: 'Bagel Buns',
    note: 'Gluten free',
    price: 16,
    image: 'bagel-buns',
    imageAlt: 'Bagel buns on a cream ceramic paddle board',
    desc: 'All cookies should have a show-stopping German chocolate cake in their repertoire and this is one of our favourites.',
  },
  {
    id: 'wheat-cookies',
    name: 'Wheat Cookies',
    note: 'Organic Oat',
    price: 16,
    image: 'cookie-round',
    imageAlt: 'Thick chocolate chunk cookies with sea salt flakes on a white plate',
    desc: 'Hand-tied stacks of real whole-wheat dark chocolate chunk cookies baked on stone hearths every morning.',
  },
] as const;
