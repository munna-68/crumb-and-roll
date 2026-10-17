import { m, useReducedMotion } from 'framer-motion';
import { ProductStamp } from '../brand/ProductStamps';
import { useCart } from '../../context/cart';
import { bake, bakeSrcSet } from '../../lib/images';
import type { Product } from '../../data/products';

interface ProductCardProps {
  product: Product;
}

/** Colored card with a pop-out product photo; the whole card is an add-to-bag button. */
export function ProductCard({ product }: ProductCardProps) {
  const { addItem } = useCart();
  const reduce = useReducedMotion();

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
            image: bake(product.image, 320),
          })
        }
        aria-label={`${product.title}: ${product.subtitle} +$${product.price}. Add ${product.title} to your bag.`}
        className={`relative flex min-h-[250px] w-full cursor-pointer flex-col justify-end overflow-visible rounded-[34px] p-5 pt-0 shadow-sm ${product.cardBg}`}
      >
        <span className="pointer-events-none absolute top-3 right-3 opacity-80">
          <ProductStamp
            stamp={product.stamp}
            color={product.stampColor}
            className="h-14 w-14"
          />
        </span>

        <span className="relative z-10 -mt-10 flex justify-center">
          <img
            src={bake(product.image, 600)}
            srcSet={bakeSrcSet(product.image, [320, 600])}
            sizes="(min-width: 768px) 240px, 70vw"
            width={600}
            height={600}
            loading="lazy"
            decoding="async"
            alt=""
            className="h-52 w-60 rounded-[26px] border-4 border-white/85 object-cover shadow-lg transition-transform duration-300 group-hover:scale-105"
          />
        </span>

        <span className="mt-3 flex items-center justify-between gap-3 px-1 text-xs font-extrabold text-espresso/90">
          <span className="truncate">{product.subtitle}</span>{' '}
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
