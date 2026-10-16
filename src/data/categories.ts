export type CategoryId =
  | 'COOKIES'
  | 'CAKE'
  | 'BRETZEL'
  | 'PASTRIES'
  | 'CROISSANT'
  | 'BAGEL';

export type CategoryFilter = CategoryId | 'ALL';

export interface Category {
  id: CategoryId;
  label: string;
  count: number;
  /** pill surface */
  bg: string;
  /** pill text colour */
  text: string;
  /** count badge surface */
  badgeBg: string;
}

export const CATEGORIES: readonly Category[] = [
  { id: 'COOKIES', label: 'COOKIES', count: 12, bg: 'bg-blush', text: 'text-espresso', badgeBg: 'bg-espresso' },
  { id: 'CAKE', label: 'CAKE', count: 27, bg: 'bg-teal-card', text: 'text-deep-teal', badgeBg: 'bg-deep-teal' },
  { id: 'BRETZEL', label: 'BRETZEL', count: 8, bg: 'bg-lavender', text: 'text-indigo-deep', badgeBg: 'bg-indigo-deep' },
  { id: 'PASTRIES', label: 'PASTRIES', count: 23, bg: 'bg-mist', text: 'text-slate-deep', badgeBg: 'bg-slate-deep' },
  { id: 'CROISSANT', label: 'CROISSANT', count: 21, bg: 'bg-lemon', text: 'text-espresso', badgeBg: 'bg-espresso' },
  { id: 'BAGEL', label: 'BAGEL', count: 13, bg: 'bg-salmon', text: 'text-rust-deep', badgeBg: 'bg-rust-deep' },
] as const;
