export const REVIEW_TAGS = [
  'PLAIN CAKE',
  'CROISSANT',
  'LOAF BREAD',
  'COOKIES',
  'BRETZEL',
  'APPLE PIE',
] as const;

export type ReviewTag = (typeof REVIEW_TAGS)[number];

export const RATING = {
  score: '3.73',
  count: 4350,
} as const;
