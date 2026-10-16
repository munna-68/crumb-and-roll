import { m, useReducedMotion } from 'framer-motion';
import { SketchedCookie } from '../brand/Doodles';
import { useCart } from '../../context/cart';
import { unsplash, unsplashSrcSet } from '../../lib/images';
import type { Product } from '../../data/products';

interface ProductCardProps {
  product: Product;
  /** display position — drives the doodle variant like the reference */
  index: number;
}

/** Colored card with a pop-out product photo; the whole card is an add-to-bag button. */
export function ProductCard({ product, index }: ProductCardProps) {
  const { addItem } = useCart();
  const reduce = useReducedMotion();

  const doodleVariant = index % 3;

  return (
    <div className="group flex h-full flex-col items-center">
      <m.button
        type="button"
        whileHover={reduce ? undefined : { y: -5 }}
        whileTap={reduce ? undefined : { scale: 0.985 }}
        transition={{ type: 'spring', stiffness: 320, damping: 26 }}
        onClick={() =>
          addItem({
            id: product.id,
            name: product.title,
            price: product.price,
            image: unsplash(product.photoId, 400, 80),
          })
        }
        aria-label={`Add ${product.title} to your bag for $${product.price}`}
        className={`relative flex min-h-[250px] w-full cursor-pointer flex-col justify-end overflow-visible rounded-[34px] p-5 pt-0 shadow-sm ${product.cardBg}`}
      >
        {doodleVariant === 0 && (
          <span
            aria-hidden="true"
            className="pointer-events-none absolute top-4 right-4 flex w-12 flex-wrap gap-1.5 opacity-60"
          >
            {Array.from({ length: 8 }, (_, chip) => (
              <span key={chip} className="h-0.5 w-1.5 rotate-45 rounded-full bg-espresso" />
            ))}
          </span>
        )}
        {doodleVariant === 1 && (
          <span className="pointer-events-none absolute top-2 right-2 opacity-75">
            <SketchedCookie className="h-16 w-16" strokeColor="#0B4F5E" />
          </span>
        )}
        {doodleVariant === 2 && (
          <span className="pointer-events-none absolute top-2 right-2 opacity-75">
            <SketchedCookie className="h-16 w-16" />
          </span>
        )}

        <span className="relative z-10 -mt-10 flex justify-center">
          <img
            src={unsplash(product.photoId, 600, 84)}
            srcSet={unsplashSrcSet(product.photoId, [320, 600], 84)}
            sizes="(min-width: 768px) 240px, 70vw"
            width={600}
            height={520}
            loading="lazy"
            decoding="async"
            alt={product.imageAlt}
            className="h-52 w-60 rounded-[26px] border-4 border-white/85 object-cover shadow-lg transition-transform duration-300 group-hover:scale-105"
          />
        </span>

        <span className="mt-3 flex items-center justify-between gap-3 px-1 text-xs font-extrabold text-espresso/90">
          <span className="truncate">{product.subtitle}</span>
          <span className="shrink-0 rounded-full bg-white/90 px-2.5 py-1 shadow-sm">
            +${product.price}
          </span>
        </span>
      </m.button>

      <h3 className="mt-4 text-center font-display text-base tracking-wider text-espresso uppercase transition-colors group-hover:text-tangerine sm:text-lg">
        {product.title}
      </h3>
    </div>
  );
}
