export interface FeaturedItem {
  id: string;
  name: string;
  note: string;
  price: number;
  photoId: string;
  imageAlt: string;
  desc: string;
}

export const FEATURED_ITEMS: readonly FeaturedItem[] = [
  {
    id: 'bagel-buns',
    name: 'Bagel Buns',
    note: 'Gluten free',
    price: 16,
    photoId: '1555507036-ab1f4038808a',
    imageAlt: 'Bagel buns on a ceramic paddle board',
    desc: 'All cookies should have a show-stopping German chocolate cake in their repertoire and this is one of our favourites.',
  },
  {
    id: 'wheat-cookies',
    name: 'Wheat Cookies',
    note: 'Organic Oat',
    price: 16,
    photoId: '1499636136210-6f4ee915583e',
    imageAlt: 'Hand-tied stack of whole-wheat chocolate chunk cookies',
    desc: 'Hand-tied stacks of real whole-wheat dark chocolate chunk cookies baked on stone hearths every morning.',
  },
] as const;
