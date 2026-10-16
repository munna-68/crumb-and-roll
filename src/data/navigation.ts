import type { CategoryFilter } from './categories';

export interface NavItem {
  label: string;
  /** where the link leads */
  action:
    | { type: 'category'; category: CategoryFilter }
    | { type: 'section'; sectionId: string }
    | { type: 'subscribe' };
}

export interface NavDropdown {
  id: 'bakery' | 'cookies';
  label: string;
  items: { label: string; category: CategoryFilter }[];
}

export const NAV_ITEMS: readonly NavItem[] = [
  { label: 'CAKE', action: { type: 'category', category: 'CAKE' } },
  { label: 'ABOUT US', action: { type: 'section', sectionId: 'art-form-section' } },
  { label: 'CONTACT', action: { type: 'subscribe' } },
] as const;

export const NAV_DROPDOWNS: readonly NavDropdown[] = [
  {
    id: 'bakery',
    label: 'BAKERY',
    items: [
      { label: 'Sourdough Loaves', category: 'PASTRIES' },
      { label: 'Baguettes', category: 'PASTRIES' },
      { label: 'Bavarian Bretzels', category: 'BRETZEL' },
      { label: 'Seeded Bagels', category: 'BAGEL' },
    ],
  },
  {
    id: 'cookies',
    label: 'COOKIES',
    items: [
      { label: 'Choco Chip Stack', category: 'COOKIES' },
      { label: 'Wheat Baked $16', category: 'COOKIES' },
      { label: 'Cookies Glucose', category: 'COOKIES' },
      { label: 'Oatmeal Raisin', category: 'COOKIES' },
    ],
  },
] as const;
