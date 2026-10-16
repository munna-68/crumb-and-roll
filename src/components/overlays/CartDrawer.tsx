import { AnimatePresence, m } from 'framer-motion';
import { ShoppingBag, X } from 'lucide-react';
import { Modal } from '../ui/Modal';
import { QuantityStepper } from '../ui/QuantityStepper';
import { OrganicButton } from '../brand/OrganicButton';
import { BittenCookieBadge } from '../brand/Doodles';
import { useCart } from '../../context/cart';
import { useUI } from '../../context/ui';
import { useToast } from '../../context/toast';
import { PROMO, SECTION_IDS } from '../../config/site';
import { formatMoney } from '../../lib/format';
import { scrollToSection } from '../../lib/scroll';

/** Slide-over bakery bag with quantity controls, promo progress and checkout. */
export function CartDrawer() {
  const { overlay, closeOverlay } = useUI();
  const { items, count, subtotal, discount, total, increment, decrement, clear } = useCart();
  const showToast = useToast();
  const open = overlay === 'cart';

  const remaining = Math.max(0, PROMO.threshold - subtotal);
  const progress = Math.min(1, subtotal / PROMO.threshold);

  const handleCheckout = () => {
    clear();
    closeOverlay();
    showToast('Order placed! Warm bread & cookies are on the way!');
  };

  const browseBakery = () => {
    closeOverlay();
    window.setTimeout(() => scrollToSection(SECTION_IDS.products), 440);
  };

  return (
    <Modal
      open={open}
      onClose={closeOverlay}
      variant="drawer"
      side="right"
      labelledBy="cart-title"
      panelClassName="relative flex h-full w-full max-w-md flex-col border-l-4 border-espresso bg-cream p-6 shadow-2xl sm:p-8"
    >
      <div className="flex items-center justify-between border-b border-espresso/15 pb-5">
        <div className="flex items-center gap-2.5">
          <ShoppingBag className="h-6 w-6 text-tangerine" aria-hidden="true" />
          <h2 id="cart-title" className="font-display text-2xl text-espresso uppercase">
            Your Bakery Bag ({count})
          </h2>
        </div>
        <button
          type="button"
          onClick={closeOverlay}
          aria-label="Close shopping bag"
          className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-white text-espresso shadow-sm transition-colors hover:bg-tangerine hover:text-white"
        >
          <X className="h-5 w-5" aria-hidden="true" />
        </button>
      </div>

      {items.length === 0 ? (
        <div className="flex flex-1 flex-col items-center justify-center py-16 text-center">
          <BittenCookieBadge className="mb-3 h-14 w-14" />
          <p className="font-display text-xl text-espresso uppercase">Your bag is empty!</p>
          <p className="mt-1 max-w-[240px] text-xs text-espresso/70">
            Add some warm sourdough loaves or crunchy wheat cookies.
          </p>
          <OrganicButton size="sm" className="mt-6" onClick={browseBakery}>
            Browse the bakery
          </OrganicButton>
        </div>
      ) : (
        <>
          <div className="mt-5 max-h-[52vh] flex-1 space-y-4 overflow-y-auto pr-1">
            <AnimatePresence initial={false}>
              {items.map((item) => (
                <m.div
                  key={item.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.2 }}
                  className="flex items-center gap-4 rounded-2xl border border-espresso/10 bg-white p-3.5 shadow-xs"
                >
                  <img
                    src={item.image}
                    width={64}
                    height={64}
                    loading="lazy"
                    decoding="async"
                    alt={item.name}
                    className="h-16 w-16 shrink-0 rounded-xl object-cover"
                  />
                  <div className="min-w-0 flex-1">
                    <h3 className="truncate text-sm font-extrabold text-espresso">{item.name}</h3>
                    <p className="font-display text-lg text-tangerine">${item.price * item.qty}</p>
                  </div>
                  <QuantityStepper
                    qty={item.qty}
                    label={item.name}
                    onIncrement={() => increment(item.id)}
                    onDecrement={() => decrement(item.id)}
                  />
                </m.div>
              ))}
            </AnimatePresence>
          </div>

          <div className="border-t border-espresso/15 pt-5">
            {discount > 0 ? (
              <div className="mb-3 flex items-center justify-between rounded-xl bg-forest px-3.5 py-2 text-xs font-bold text-white">
                <span>🎉 15% Off ($100+ Promo Applied!)</span>
                <span>-{formatMoney(discount)}</span>
              </div>
            ) : (
              <div className="mb-3 rounded-xl bg-lavender px-3.5 py-2 text-xs font-bold text-indigo-deep">
                <p>
                  Add <strong>{formatMoney(remaining)}</strong> more for <strong>15% OFF</strong>!
                </p>
                <div
                  className="mt-2 h-1.5 overflow-hidden rounded-full bg-indigo-deep/15"
                  role="progressbar"
                  aria-label="Progress towards the 15% off promo"
                  aria-valuenow={Math.round(progress * 100)}
                  aria-valuemin={0}
                  aria-valuemax={100}
                >
                  <m.div
                    className="h-full rounded-full bg-indigo-deep"
                    initial={false}
                    animate={{ width: `${progress * 100}%` }}
                    transition={{ type: 'spring', stiffness: 260, damping: 30 }}
                  />
                </div>
              </div>
            )}

            <div className="mb-4 flex items-center justify-between">
              <span className="text-sm font-bold text-espresso/70 uppercase">Subtotal</span>
              <m.span
                key={total.toFixed(2)}
                initial={{ opacity: 0.4, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2 }}
                className="font-display text-3xl text-espresso"
              >
                {formatMoney(total)}
              </m.span>
            </div>

            <OrganicButton size="lg" className="w-full" onClick={handleCheckout}>
              CHECKOUT NOW
            </OrganicButton>
          </div>
        </>
      )}
    </Modal>
  );
}
