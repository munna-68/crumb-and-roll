import { m, useReducedMotion } from 'framer-motion';
import { ChevronRight, ArrowDown } from 'lucide-react';
import { OrganicButton } from '../brand/OrganicButton';
import { StickerBadge } from '../brand/StickerBadge';
import { SteamLines, CookieCrumbs, SketchedLoaf } from '../brand/Doodles';
import { useCart } from '../../context/cart';
import { useUI } from '../../context/ui';
import { unsplash, unsplashSrcSet } from '../../lib/images';
import { SECTION_IDS } from '../../config/site';
import { scrollToSection } from '../../lib/scroll';

const EASE = [0.22, 1, 0.36, 1] as const;

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.11, delayChildren: 0.08 } },
};

const item = {
  hidden: { opacity: 0, y: 26 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
};

/**
 * Main landing hero — "BAKE THE COOKIES" (reference default).
 *
 * Desktop keeps the reference's white card composition: giant headline with
 * TASTY/CRUNCHY stickers, left copy and the yellow pop-out bread card.
 * Below `lg` it switches to the mobile composition from the reference mockup:
 * centred steam + headline, yellow image card with TASTY / • FRESH / CRUNCHY
 * stickers, then copy and actions.
 */
export function HeroBakeCookies() {
  const { addItem } = useCart();
  const { openOverlay } = useUI();
  const reduce = useReducedMotion();

  const orderScratchLoaf = () =>
    addItem({
      id: 'scratch-loaf',
      name: 'Scratch Baked Multigrain Loaf',
      price: 18,
      image: unsplash('1509440159596-0249088772ff', 400),
    });

  return (
    <section aria-labelledby="hero-heading" className="bg-linen">
      <div className="mx-auto w-full max-w-[1220px] px-4 pt-2 pb-8 sm:px-8 sm:pb-10 lg:px-12">
        <m.div
          variants={container}
          initial="hidden"
          animate="show"
          className="relative lg:rounded-[38px] lg:bg-white lg:p-12 lg:shadow-sm"
        >
          {/* ---------------------------------------------------------- */}
          {/* Headline                                                    */}
          {/* ---------------------------------------------------------- */}
          <div className="relative pt-4 text-center select-none sm:pt-6">
            <m.div
              variants={item}
              className="mb-1 flex justify-center sm:absolute sm:top-0 sm:left-[21%] sm:mb-0"
            >
              <SteamLines className="h-8 w-8" />
            </m.div>

            <h1
              id="hero-heading"
              className="font-display text-[42px] leading-[0.92] tracking-tight text-espresso uppercase sm:text-[72px] md:text-[88px] lg:text-[106px]"
            >
              <m.span variants={item} className="relative mr-3 inline-block sm:mr-5">
                BAKE
                <span className="absolute top-1/2 -right-3 hidden -translate-y-1/2 sm:-right-4 sm:block">
                  <StickerBadge
                    rotate={-12}
                    className="bg-forest px-4 py-0.5 text-base lg:text-lg"
                  >
                    TASTY
                  </StickerBadge>
                </span>
              </m.span>
              <m.span variants={item} className="mr-3 inline-block sm:mr-5">
                THE
              </m.span>
              <m.span variants={item} className="relative inline-block">
                COOKIES
                <span className="absolute top-1/2 right-2 hidden -translate-y-1/2 sm:right-5 sm:block">
                  <StickerBadge className="bg-tangerine px-4 py-0.5 text-base lg:text-lg">
                    CRUNCHY
                  </StickerBadge>
                </span>
              </m.span>
            </h1>
          </div>

          {/* ---------------------------------------------------------- */}
          {/* Lower grid: copy + bread card                               */}
          {/* ---------------------------------------------------------- */}
          <div className="mt-6 grid grid-cols-1 items-end gap-8 sm:mt-8 lg:grid-cols-12">
            {/* Copy — sits below the card on mobile, left on desktop */}
            <m.div variants={item} className="order-2 pb-2 lg:order-1 lg:col-span-5">
              <h2 className="font-display text-2xl leading-[1.12] text-espresso uppercase sm:text-3xl lg:text-[32px]">
                PREMIUM BREAD
                <br />
                AND COOKIES MADE
                <br />
                FROM SCRATCH{' '}
                <span className="mx-1 inline-block -translate-y-0.5 align-middle">
                  <StickerBadge rotate={3} className="bg-sky px-3.5 py-1 text-xs sm:text-sm">
                    • FRESH
                  </StickerBadge>
                </span>
              </h2>

              <p className="mt-4 max-w-xs text-xs leading-relaxed font-bold text-espresso/80 sm:text-sm">
                We’re literally obsessed with giving more of what you love!
              </p>

              {/* Actions */}
              <div className="mt-8 flex flex-wrap items-center gap-5">
                <button
                  type="button"
                  onClick={() => scrollToSection(SECTION_IDS.featured)}
                  aria-label="Scroll to the featured bakes"
                  className="flex h-12 w-12 cursor-pointer items-center justify-center rounded-2xl bg-white text-espresso shadow-md transition-colors hover:bg-lemon lg:hidden"
                >
                  <ArrowDown className="h-5 w-5" aria-hidden="true" />
                </button>

                <div className="relative ml-auto lg:ml-0">
                  <m.div
                    className="pointer-events-none absolute -top-6 -right-4 z-20"
                    animate={reduce ? undefined : { y: [0, -4, 0] }}
                    transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
                  >
                    <CookieCrumbs className="h-10 w-10" />
                  </m.div>
                  <OrganicButton showDot size="md" onClick={orderScratchLoaf}>
                    ORDER NOW
                  </OrganicButton>
                </div>

                <button
                  type="button"
                  onClick={() => openOverlay('blog')}
                  className="flex cursor-pointer items-center gap-1 font-display text-xs tracking-wider text-espresso uppercase transition-colors hover:text-tangerine sm:text-sm"
                >
                  COOKING BLOG
                  <ChevronRight className="h-4 w-4 stroke-[3]" aria-hidden="true" />
                </button>
              </div>
            </m.div>

            {/* Yellow bread card — first on mobile, right on desktop */}
            <m.div
              variants={item}
              className="relative order-1 pt-6 lg:order-2 lg:col-span-7 lg:pt-10"
            >
              <div className="relative flex min-h-[240px] flex-col justify-end rounded-[34px] bg-lemon-soft p-4 pt-0 pb-5 shadow-sm sm:min-h-[275px] sm:p-6 sm:pb-0">
                {/* sketched loaf decoration */}
                <div className="pointer-events-none absolute top-3 right-3 opacity-85">
                  <SketchedLoaf className="h-20 w-24 sm:w-28" />
                </div>

                {/* mobile stickers (from the mobile mockup) */}
                <span className="absolute top-1 left-2 z-20 sm:hidden">
                  <StickerBadge className="bg-forest px-3.5 py-1.5 text-xs">TASTY</StickerBadge>
                </span>
                <span className="absolute top-1 right-2 z-20 sm:hidden">
                  <StickerBadge rotate={3} className="bg-sky px-3.5 py-1.5 text-xs">
                    • FRESH
                  </StickerBadge>
                </span>

                {/* pop-out bread composition */}
                <div className="relative z-10 -mt-5 flex flex-col items-center justify-center gap-4 sm:-mt-16 sm:flex-row lg:-mt-24">
                  <div className="group relative w-full sm:w-auto">
                    <img
                      src={unsplash('1509440159596-0249088772ff', 800, 85)}
                      srcSet={unsplashSrcSet('1509440159596-0249088772ff', [480, 800, 1200], 85)}
                      sizes="(min-width: 640px) 320px, 100vw"
                      width={800}
                      height={576}
                      alt="Tall stack of artisanal sliced bread on a wooden board"
                      className="h-44 w-full rounded-2xl border-2 border-white object-cover shadow-md transition-transform duration-300 group-hover:scale-[1.02] sm:h-72 sm:w-80 sm:rounded-[28px] sm:border-4 sm:shadow-2xl"
                    />
                    {/* side half-loaf slice */}
                    <img
                      src={unsplash('1586444248902-2f64eddc13df', 500, 85)}
                      width={500}
                      height={375}
                      loading="lazy"
                      decoding="async"
                      alt="Artisan sourdough crumb slice"
                      className="absolute -right-6 -bottom-2 hidden h-36 w-44 rotate-2 rounded-t-[70px] rounded-b-2xl border-4 border-lemon-soft object-cover shadow-xl sm:block"
                    />
                  </div>
                </div>

                {/* mobile CRUNCHY sticker */}
                <span className="absolute -bottom-3 right-6 z-20 sm:hidden">
                  <StickerBadge className="bg-tangerine px-4 py-1.5 text-xs">CRUNCHY</StickerBadge>
                </span>

                {/* wooden cutting-board strip (desktop) */}
                <div className="hidden h-8 items-center justify-between border-t border-[#8C5A32]/30 bg-gradient-to-r from-[#C89666] via-[#D9A773] to-[#B37D4E] px-6 text-[11px] font-bold text-espresso/80 sm:-mx-6 sm:flex sm:rounded-b-[30px]">
                  <span>STONE-MILLED WHOLE WHEAT</span>
                  <span>BAKED FRESH EVERY MORNING</span>
                </div>
              </div>
            </m.div>
          </div>
        </m.div>
      </div>
    </section>
  );
}
