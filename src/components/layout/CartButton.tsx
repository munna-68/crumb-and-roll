import { m, useReducedMotion } from 'framer-motion';
import { ShoppingBag } from 'lucide-react';
import { useCart } from '../../context/cart';
import { useUI } from '../../context/ui';
import { cn } from '../../lib/cn';

/** Round white bag button with a popping count badge. */
export function CartButton({ className }: { className?: string }) {
  const { count } = useCart();
  const { openOverlay } = useUI();
  const reduce = useReducedMotion();

  return (
    <m.button
      type="button"
      onClick={() => openOverlay('cart')}
      aria-label={`Open shopping bag, ${count} ${count === 1 ? 'item' : 'items'}`}
      whileHover={reduce ? undefined : { scale: 1.07 }}
      whileTap={reduce ? undefined : { scale: 0.92 }}
      transition={{ type: 'spring', stiffness: 400, damping: 22 }}
      className={cn(
        'relative flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-white text-espresso shadow-sm sm:h-11 sm:w-11',
        className,
      )}
    >
      <ShoppingBag className="h-5 w-5 stroke-[2.2]" aria-hidden="true" />
      <span
        aria-hidden="true"
        className="absolute top-2 right-2 h-2.5 w-2.5 rounded-full border-2 border-white bg-tangerine"
      />
      {count > 0 && (
        <m.span
          key={count}
          initial={{ scale: 0.4, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: 'spring', stiffness: 520, damping: 18 }}
          className="absolute -right-1 -bottom-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-espresso px-1 text-[10px] font-extrabold text-white"
        >
          {count > 99 ? '99+' : count}
        </m.span>
      )}
    </m.button>
  );
}
