import { useState } from 'react';
import { AnimatePresence, m, useReducedMotion } from 'framer-motion';
import { RotatingStampBadge, OrangeSplash } from '../brand/Doodles';
import { Reveal } from '../motion/Reveal';
import { Parallax } from '../motion/Parallax';
import { useCart } from '../../context/cart';
import { FEATURED_ITEMS } from '../../data/featured';
import { HERO_VARIANT, SECTION_IDS } from '../../config/site';
import { bake, bakeSrcSet } from '../../lib/images';

/**
 * "YOUR ONLY DOSE OF DELIGHT" — sky-blue baguette card with the rotating
 * family stamp, plus the swap-able featured item card.
 */
export function FeaturedDelight() {
  const { addItem } = useCart();
  const reduce = useReducedMotion();
  const [featuredIndex, setFeaturedIndex] = useState(0);
  const featured = FEATURED_ITEMS[featuredIndex];

  return (
    <section
      id={SECTION_IDS.featured}
      className="bg-cream px-5 py-14 sm:px-10 lg:px-14"
    >
      <div className="mx-auto grid w-full max-w-[1220px] grid-cols-1 items-center gap-10 lg:grid-cols-12">
        {/* Left — sky-blue baguette card */}
        <Reveal className="relative flex justify-center pt-8 lg:col-span-6">
          <div className="relative w-full max-w-[400px]">
            <div className="absolute -top-10 -left-4 z-20 sm:-left-8">
              <RotatingStampBadge />
            </div>

            <div className="group relative flex min-h-[300px] flex-col justify-end rounded-[34px] bg-sky-card p-6 pb-0 shadow-sm">
              <Parallax strength={10} className="relative z-10 -mt-20 flex justify-center">
                <img
                  src={bake('baguettes-basket', 800)}
                  srcSet={bakeSrcSet('baguettes-basket', [480, 800])}
                  sizes="(min-width: 640px) 320px, 80vw"
                  width={800}
                  height={800}
                  loading="lazy"
                  decoding="async"
                  alt="Scored artisan baguettes in a wire basket"
                  className="h-80 w-72 rounded-[28px] border-4 border-white object-cover shadow-xl transition-transform duration-300 group-hover:scale-[1.02] sm:w-80"
                />
              </Parallax>
              <div className="py-3 text-center text-xs font-extrabold tracking-wider text-deep-teal uppercase">
                CRUSTY SCORED BAGUETTES • WIRE BASKET
              </div>
            </div>
          </div>
        </Reveal>

        {/* Right — headline + featured item */}
        <div className="lg:col-span-6">
          <Reveal>
            <div className="relative inline-block">
              <h2 className="font-display text-3xl leading-[1.06] text-espresso uppercase sm:text-5xl">
                YOUR {HERO_VARIANT === 'hand' ? 'DAILY' : 'ONLY'}{' '}
                <span className="relative mx-1 inline-block align-middle">
                  <img
                    src={bake('cookie-round', 400)}
                    width={400}
                    height={400}
                    loading="lazy"
                    decoding="async"
                    alt=""
                    className="inline-block h-10 w-10 rounded-full border-2 border-espresso object-cover align-middle sm:h-12 sm:w-12"
                  />
                  <span className="absolute -top-4 -right-5">
                    <OrangeSplash className="h-7 w-7" />
                  </span>
                </span>
                <br />
                DOSE OF DELIGHT
              </h2>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="mt-5">
            <div className="flex max-w-md items-center justify-between">
              <span className="text-xs font-extrabold tracking-wider text-espresso/70 uppercase">
                Featured Item -
              </span>
              <m.button
                type="button"
                whileTap={reduce ? undefined : { rotate: 180 }}
                transition={{ type: 'spring', stiffness: 260, damping: 18 }}
                onClick={() => setFeaturedIndex((prev) => (prev + 1) % FEATURED_ITEMS.length)}
                className="cursor-pointer text-xs font-bold text-tangerine hover:underline"
              >
                Swap Featured ↻
              </m.button>
            </div>

            <div className="mt-3 max-w-md">
              <AnimatePresence mode="wait" initial={false}>
                <m.button
                  key={featured.id}
                  type="button"
                  initial={reduce ? { opacity: 0 } : { opacity: 0, x: 18 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={reduce ? { opacity: 0 } : { opacity: 0, x: -18 }}
                  transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
                  onClick={() =>
                    addItem({
                      id: featured.id,
                      name: featured.name,
                      price: HERO_VARIANT === 'hand' ? 13 : featured.price,
                      image: bake(featured.image, 400),
                    })
                  }
                  aria-label={`Add ${featured.name} to your bag`}
                  className="group flex w-full cursor-pointer items-center gap-5 rounded-3xl border border-espresso/10 bg-white/90 p-3.5 text-left shadow-sm transition-colors hover:bg-white"
                >
                  <span className="flex h-16 w-24 shrink-0 items-center justify-center overflow-hidden rounded-2xl bg-mist shadow-inner">
                    <img
                      src={bake(featured.image, 400)}
                      width={400}
                      height={400}
                      loading="lazy"
                      decoding="async"
                      alt={featured.imageAlt}
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                  </span>

                  <span className="flex flex-1 items-center justify-between gap-2 pr-3">
                    <span>
                      <span className="block text-base font-extrabold text-espresso transition-colors group-hover:text-tangerine">
                        {featured.name}
                      </span>
                      <span className="block text-xs font-semibold text-espresso/60">
                        {featured.note}
                      </span>
                    </span>

                    <span className="mx-2 h-8 w-[1.5px] bg-espresso/20" aria-hidden="true" />

                    <span className="font-display text-2xl text-rust-deep sm:text-3xl">
                      ${HERO_VARIANT === 'hand' ? '13' : featured.price}
                    </span>
                  </span>
                </m.button>
              </AnimatePresence>
            </div>

            <AnimatePresence mode="wait" initial={false}>
              <m.p
                key={featured.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="mt-5 max-w-md text-xs leading-relaxed font-semibold text-espresso/80 sm:text-sm"
              >
                {featured.desc}
              </m.p>
            </AnimatePresence>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
