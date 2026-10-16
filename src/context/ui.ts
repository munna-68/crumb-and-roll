import { createContext, useContext } from 'react';
import type { CategoryFilter } from '../data/categories';
import { SECTION_IDS } from '../config/site';

export type OverlayKind = 'cart' | 'menu' | 'blog' | 'subscribe';

export interface UIApi {
  /** exactly one overlay can be open at a time */
  overlay: OverlayKind | null;
  openOverlay: (kind: OverlayKind) => void;
  closeOverlay: () => void;
  activeCategory: CategoryFilter;
  setActiveCategory: (category: CategoryFilter) => void;
  /** set the filter and bring the products section into view */
  browseCategory: (category: CategoryFilter) => void;
}

export const UIContext = createContext<UIApi | null>(null);

export function useUI(): UIApi {
  const ui = useContext(UIContext);
  if (!ui) throw new Error('useUI must be used within <UIProvider>');
  return ui;
}

export const PRODUCTS_SECTION_ID = SECTION_IDS.products;
