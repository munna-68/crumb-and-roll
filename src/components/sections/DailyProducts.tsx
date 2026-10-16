import { useMemo, useState } from 'react';
import { AnimatePresence, m } from 'framer-motion';
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

const slideVariants = {
  enter: (direction: number) => ({ opacity: 0, x: 36 * direction }),
  center: { opacity: 1, x: 0 },
  exit: (direction: number) => ({ opacity: 0, x: -36 * direction }),
};

/**
 * Carousel + mobile snap scroller. Mounted with `key={activeCategory}` so a
 * filter change resets the carousel and the scroller position by remounting.
 */
function ProductShowcase({ products }: { products: Product[] }) {
  const [carouselIndex, setCarouselIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const visible = [0, 1, 2].map(
    (offset) => products[(carouselIndex + offset) % products.length],
  );

  const step = (delta: 1 | -1) => {
    setDirection(delta);
    setCarouselIndex((prev) => (prev + delta + products.length) % products.length);
  };

  return (
    <div className="relative mt-12">
      <button
        type="button"
        onClick={() => step(-1)}
        aria-label="Previous bakery products"
        className="absolute top-[42%] -left-3 z-20 hidden h-11 w-11 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full border border-espresso/10 bg-white text-espresso shadow-lg transition-colors hover:bg-lemon md:flex lg:-left-5"
      >
        <ChevronLeft className="h-5 w-5 stroke-[2.5]" aria-hidden="true" />
      </button>
      <button
        type="button"
        onClick={() => step(1)}
        aria-label="Next bakery products"
        className="absolute top-[42%] -right-3 z-20 hidden h-11 w-11 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full border border-espresso/10 bg-white text-espresso shadow-lg transition-colors hover:bg-lemon md:flex lg:-right-5"
      >
        <ChevronRight className="h-5 w-5 stroke-[2.5]" aria-hidden="true" />
      </button>

      {/* Desktop / tablet: rotating 3-card grid */}
      <AnimatePresence mode="wait" initial={false} custom={direction}>
        <m.div
          key={carouselIndex}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="hidden grid-cols-3 gap-7 pt-6 md:grid"
        >
          {visible.map((product, index) => (
            <ProductCard key={`${product.id}-${index}`} product={product} index={index} />
          ))}
        </m.div>
      </AnimatePresence>

      {/* Mobile: native snap scroller with every filtered product */}
      <div className="no-scrollbar -mx-5 flex snap-x snap-mandatory gap-5 overflow-x-auto px-5 pt-6 pb-4 md:hidden">
        {products.map((product, index) => (
          <div key={product.id} className="w-[78%] shrink-0 snap-center">
            <ProductCard product={product} index={index} />
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
