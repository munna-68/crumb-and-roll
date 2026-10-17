import { useMemo, useState } from 'react';
import { m, useReducedMotion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { BittenCookieBadge } from '../brand/Doodles';
import { ProductCard } from './ProductCard';
import { Reveal, RevealGroup, RevealItem } from '../motion/Reveal';
import { useUI } from '../../context/ui';
import { CATEGORIES, type Category, type CategoryId } from '../../data/categories';
import { DAILY_PRODUCTS, type Product } from '../../data/products';
import { SECTION_IDS } from '../../config/site';
import { cn } from '../../lib/cn';

interface CategoryPillProps {
  category: Category;
  active: boolean;
  onClick: () => void;
  /** compact (desktop grid) or chunky (mobile cloud, from the mockup) */
  size?: 'sm' | 'lg';
  className?: string;
}

function CategoryPill({ category, active, onClick, size = 'sm', className }: CategoryPillProps) {
  return (
    <m.button
      type="button"
      whileTap={{ scale: 0.95 }}
      whileHover={{ scale: active ? 1.05 : 1.03 }}
      animate={{ scale: active ? 1.04 : 1 }}
      transition={{ type: 'spring', stiffness: 380, damping: 24 }}
      aria-pressed={active}
      onClick={onClick}
      className={cn(
        'flex cursor-pointer items-center justify-between gap-4 rounded-full shadow-sm transition-shadow hover:shadow-md',
        size === 'sm' ? 'px-4 py-2.5' : 'px-5 py-3.5',
        category.bg,
        category.text,
        active && 'shadow-md ring-2 ring-espresso',
        className,
      )}
    >
      <span
        className={cn(
          'font-display tracking-wider uppercase',
          size === 'sm' ? 'text-xs sm:text-sm' : 'text-base',
        )}
      >
        {category.label}
      </span>
      <span
        className={cn(
          'rounded-full font-extrabold text-white',
          category.badgeBg,
          size === 'sm' ? 'px-2.5 py-0.5 text-[11px]' : 'px-2.5 py-1 text-xs',
        )}
      >
        {category.count}
      </span>
    </m.button>
  );
}

const CATEGORY_BY_ID = new Map(CATEGORIES.map((category) => [category.id, category]));

function pill(id: CategoryId) {
  const category = CATEGORY_BY_ID.get(id);
  if (!category) throw new Error(`Unknown category: ${id}`);
  return category;
}

const MOBILE_ROWS: { ids: CategoryId[] }[] = [
  { ids: ['COOKIES', 'BAGEL'] },
  { ids: ['BRETZEL'] },
  { ids: ['PASTRIES', 'CAKE'] },
  { ids: ['CROISSANT'] },
];

/**
 * Carousel + mobile snap scroller. Mounted with `key={activeCategory}` so a
 * filter change resets the track position by remounting.
 */
function ProductShowcase({ products }: { products: Product[] }) {
  const [carouselIndex, setCarouselIndex] = useState(0);
  const reduce = useReducedMotion();

  const maxIndex = Math.max(0, products.length - 3);
  const canStep = products.length > 3;

  const step = (delta: 1 | -1) => {
    setCarouselIndex((prev) => Math.min(maxIndex, Math.max(0, prev + delta)));
  };

  return (
    <div className="relative mt-12">
      {canStep && (
        <button
          type="button"
          onClick={() => step(-1)}
          disabled={carouselIndex === 0}
          aria-label="Previous bakery products"
          className="absolute top-[42%] -left-3 z-20 hidden h-11 w-11 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full border border-espresso/10 bg-white text-espresso shadow-lg transition-[background-color,opacity] hover:bg-lemon disabled:pointer-events-none disabled:opacity-40 lg:flex lg:-left-5"
        >
          <ChevronLeft className="h-5 w-5 stroke-[2.5]" aria-hidden="true" />
        </button>
      )}
      {canStep && (
        <button
          type="button"
          onClick={() => step(1)}
          disabled={carouselIndex >= maxIndex}
          aria-label="Next bakery products"
          className="absolute top-[42%] -right-3 z-20 hidden h-11 w-11 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full border border-espresso/10 bg-white text-espresso shadow-lg transition-[background-color,opacity] hover:bg-lemon disabled:pointer-events-none disabled:opacity-40 lg:flex lg:-right-5"
        >
          <ChevronRight className="h-5 w-5 stroke-[2.5]" aria-hidden="true" />
        </button>
      )}

      {/* Desktop / tablet: one sliding track — cards glide, nothing remounts */}
      <div className="-mt-6 hidden overflow-hidden pt-12 pb-3 lg:block">
        <m.div
          className="flex"
          animate={{ x: `${(-carouselIndex * 100) / 3}%` }}
          transition={reduce ? { duration: 0 } : { duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        >
          {products.map((product) => (
            <div key={product.id} className="w-1/3 shrink-0 px-3.5">
              <ProductCard product={product} />
            </div>
          ))}
        </m.div>
      </div>

      {/* Mobile: native snap scroller with every filtered product */}
      <div className="no-scrollbar -mx-5 flex snap-x snap-mandatory gap-5 overflow-x-auto px-5 pt-6 pb-4 lg:hidden">
        {products.map((product) => (
          <div key={product.id} className="w-[78%] shrink-0 snap-center">
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </div>
  );
}

/** "PRODUCT WE BAKE HERE DAILY" — category filter + product showcase. */
export function DailyProducts() {
  const { activeCategory, setActiveCategory } = useUI();

  const filtered = useMemo(() => {
    if (activeCategory === 'ALL') return [...DAILY_PRODUCTS];
    return [
      ...DAILY_PRODUCTS.filter((product) => product.category === activeCategory),
      ...DAILY_PRODUCTS.filter((product) => product.category !== activeCategory),
    ];
  }, [activeCategory]);

  const toggleCategory = (id: CategoryId) =>
    setActiveCategory(activeCategory === id ? 'ALL' : id);

  return (
    <section
      id={SECTION_IDS.products}
      aria-label="Products we bake here daily"
      className="bg-cream px-5 py-12 sm:px-10 lg:px-14"
    >
      <div className="mx-auto w-full max-w-[1220px]">
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-center">
          <Reveal>
            <h2 className="font-display text-3xl leading-[1.08] text-espresso uppercase sm:text-4xl">
              PRODUCT WE BAKE
              <br />
              HERE DAILY— <BittenCookieBadge className="ml-1 h-9 w-9" />
            </h2>
          </Reveal>

          {/* Mobile: staggered pill cloud (from the mobile mockup) */}
          <Reveal className="overflow-x-clip sm:hidden">
            <div className="mt-1 space-y-4">
              {MOBILE_ROWS.map((row, rowIndex) => (
                <div key={rowIndex} className="flex items-center justify-center gap-3">
                  {row.ids.map((id, indexInRow) => (
                    <CategoryPill
                      key={id}
                      size="lg"
                      category={pill(id)}
                      active={activeCategory === id}
                      onClick={() => toggleCategory(id)}
                      className={cn(
                        rowIndex === 0 && indexInRow === 1 && '-mr-8',
                        rowIndex === 2 && indexInRow === 0 && '-ml-8',
                      )}
                    />
                  ))}
                </div>
              ))}
            </div>
          </Reveal>

          {/* Desktop: 3×2 pill grid */}
          <RevealGroup className="hidden grid-cols-3 gap-3 sm:grid" stagger={0.05}>
            {CATEGORIES.map((category) => (
              <RevealItem key={category.id}>
                <CategoryPill
                  category={category}
                  active={activeCategory === category.id}
                  onClick={() => toggleCategory(category.id)}
                  className="w-full"
                />
              </RevealItem>
            ))}
          </RevealGroup>
        </div>

        <ProductShowcase key={activeCategory} products={filtered} />
      </div>
    </section>
  );
}
