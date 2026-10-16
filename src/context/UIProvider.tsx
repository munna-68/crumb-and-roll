import { useCallback, useMemo, useState } from 'react';
import type { ReactNode } from 'react';
import { UIContext, PRODUCTS_SECTION_ID, type OverlayKind, type UIApi } from './ui';
import type { CategoryFilter } from '../data/categories';
import { prefersReducedMotion } from '../lib/format';

export function UIProvider({ children }: { children: ReactNode }) {
  const [overlay, setOverlay] = useState<OverlayKind | null>(null);
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>('ALL');

  const openOverlay = useCallback((kind: OverlayKind) => setOverlay(kind), []);
  const closeOverlay = useCallback(() => setOverlay(null), []);

  const browseCategory = useCallback((category: CategoryFilter) => {
    setActiveCategory(category);
    document.getElementById(PRODUCTS_SECTION_ID)?.scrollIntoView({
      behavior: prefersReducedMotion() ? 'auto' : 'smooth',
      block: 'start',
    });
  }, []);

  const value = useMemo<UIApi>(
    () => ({
      overlay,
      openOverlay,
      closeOverlay,
      activeCategory,
      setActiveCategory,
      browseCategory,
    }),
    [overlay, openOverlay, closeOverlay, activeCategory, browseCategory],
  );

  return <UIContext.Provider value={value}>{children}</UIContext.Provider>;
}
