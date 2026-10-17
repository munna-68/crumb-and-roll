import { m, useReducedMotion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import { OrganicButton } from '../brand/OrganicButton';
import { StickerBadge } from '../brand/StickerBadge';
import { SteamLines, CookieCrumbs, SketchedLoaf } from '../brand/Doodles';
import { useCart } from '../../context/cart';
import { useUI } from '../../context/ui';
import { bake, bakeSrcSet } from '../../lib/images';

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
 * Enclosed in a crisp white rounded card on both mobile and desktop.
 * On mobile (< lg):
 *  - Centered steam + 2-line title ("BAKE THE" / "COOKIES") with TASTY & CRUNCHY stickers + spark doodle.
 *  - Left-aligned "PREMIUM BREAD AND COOKIES MADE FROM SCRATCH • FRESH" + description.
 *  - Full-width ORDER NOW button with centered COOKING BLOG > link below it.
 *  - Yellow bread card with bread stack, sourdough crumb inset photo, sketched loaf, and wooden bottom strip.
 * On desktop (lg+):
 *  - Side-by-side layout with giant single-line headline and pop-out bread composition.
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
      image: bake('hero-bread-stack', 400),
    });

  return (
    <section aria-labelledby="hero-heading" className="bg-linen pb-8 sm:pb-10">
      <div className="mx-auto w-full max-w-[1220px] px-3.5 pt-1 pb-4 sm:px-8 sm:pt-2 sm:pb-6 lg:px-12">
        <m.div
          variants={container}
          initial="hidden"
          animate="show"
          className="relative rounded-[32px] border border-espresso/5 bg-white p-5 pt-6 pb-6 shadow-sm sm:rounded-[38px] sm:p-8 lg:p-12"
        >
          {/* ---------------------------------------------------------- */}
          {/* Mobile Headline (< lg)                                     */}
          {/* ---------------------------------------------------------- */}
          <div className="relative text-center select-none pt-1 lg:hidden">
            <m.div variants={item} className="mb-1.5 flex justify-center">
              <SteamLines className="h-7 w-7 sm:h-8 sm:w-8" />
            </m.div>

            <h1
              id="hero-heading-mobile"
              className="font-display text-[46px] leading-[0.92] tracking-tight text-espresso uppercase sm:text-6xl"
            >
              <m.span variants={item} className="block">
                BAKE THE
              </m.span>
              <m.span variants={item} className="relative inline-block mt-0.5">
                COOKIES
                {/* Green TASTY badge tilted under left of COOKIES */}
                <span className="absolute -bottom-2.5 -left-2.5 z-20">
                  <StickerBadge
                    rotate={-10}
                    className="bg-forest px-3.5 py-1 text-xs text-white shadow-md font-display"
                  >
                    TASTY
                  </StickerBadge>
                </span>
                {/* Orange CRUNCHY badge tilted under right of COOKIES */}
                <span className="absolute -bottom-2 -right-3 z-20 flex items-center">
                  <StickerBadge
                    rotate={7}
                    className="bg-tangerine px-3.5 py-1 text-xs text-espresso! shadow-md font-display"
                  >
                    CRUNCHY
                  </StickerBadge>
                  {/* 3 radiating sparks next to CRUNCHY */}
                  <svg
                    viewBox="0 0 20 20"
                    fill="none"
                    className="absolute -right-4 -top-1 h-5 w-5 pointer-events-none"
                    aria-hidden="true"
                  >
                    <path d="M3 13L15 7" stroke="#331B15" strokeWidth="2.2" strokeLinecap="round" />
                    <path d="M4 17L17 14" stroke="#331B15" strokeWidth="2.2" strokeLinecap="round" />
                    <path d="M6 20L15 21" stroke="#331B15" strokeWidth="2.2" strokeLinecap="round" />
                  </svg>
                </span>
              </m.span>
            </h1>
          </div>

          {/* ---------------------------------------------------------- */}
          {/* Desktop Headline (lg+)                                     */}
          {/* ---------------------------------------------------------- */}
          <div className="relative hidden pt-4 text-center select-none sm:pt-6 lg:block">
            <m.div
              variants={item}
              className="absolute top-0 left-[21%]"
            >
              <SteamLines className="h-8 w-8" />
            </m.div>

            <h1
              id="hero-heading"
              className="font-display text-[106px] leading-[0.92] tracking-tight text-espresso uppercase"
            >
              <m.span variants={item} className="relative mr-5 inline-block">
                BAKE
                <span className="absolute top-1/2 -right-4 -translate-y-1/2">
                  <StickerBadge
                    rotate={-12}
                    className="bg-forest px-4 py-0.5 text-lg"
                  >
                    TASTY
                  </StickerBadge>
                </span>
              </m.span>
              <m.span variants={item} className="mr-5 inline-block">
                THE
              </m.span>
              <m.span variants={item} className="relative inline-block">
                COOKIES
                <span className="absolute top-1/2 right-5 -translate-y-1/2">
                  <StickerBadge className="bg-tangerine px-4 py-0.5 text-lg text-espresso!">
                    CRUNCHY
                  </StickerBadge>
                </span>
              </m.span>
            </h1>
          </div>

          {/* ---------------------------------------------------------- */}
          {/* Lower layout: copy + bread card                             */}
          {/* ---------------------------------------------------------- */}
          <div className="mt-6 grid grid-cols-1 items-end gap-6 sm:mt-8 sm:gap-8 lg:grid-cols-12">
            {/* Copy & Actions — first on mobile (order-1), left column on desktop (lg:order-1 lg:col-span-5) */}
            <m.div variants={item} className="order-1 pb-2 lg:col-span-5">
              <h2 className="font-display text-[22px] leading-[1.12] text-espresso uppercase sm:text-3xl lg:text-[32px]">
                PREMIUM BREAD
                <br />
                AND COOKIES MADE
                <br />
                FROM SCRATCH{' '}
                <span className="mx-1 inline-block -translate-y-0.5 align-middle">
                  <StickerBadge rotate={3} className="bg-sky px-3 py-0.5 text-xs text-espresso! shadow-sm sm:px-3.5 sm:py-1 sm:text-sm">
                    • FRESH
                  </StickerBadge>
                </span>
              </h2>

              <p className="mt-3.5 max-w-sm text-xs leading-relaxed font-bold text-espresso/80 sm:mt-4 sm:text-sm">
                We’re literally obsessed with giving more of what you love!
              </p>

              {/* Actions */}
              <div className="mt-6 flex flex-col items-center lg:mt-8 lg:flex-row lg:flex-wrap lg:gap-5">
                <div className="relative w-full lg:w-auto">
                  <m.div
                    className="pointer-events-none absolute -top-6 -right-4 z-20 hidden lg:block"
                    animate={reduce ? undefined : { y: [0, -4, 0] }}
                    transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
                  >
                    <CookieCrumbs className="h-10 w-10" />
                  </m.div>
                  <OrganicButton
                    showDot
                    size="md"
                    onClick={orderScratchLoaf}
                    className="w-full justify-center py-3.5 text-sm sm:py-3 lg:w-auto"
                  >
                    ORDER NOW
                  </OrganicButton>
                </div>

                <button
                  type="button"
                  onClick={() => openOverlay('blog')}
                  className="mt-4 flex w-full cursor-pointer items-center justify-center gap-1 font-display text-xs tracking-wider text-espresso uppercase transition-colors hover:text-tangerine sm:text-sm lg:mt-0 lg:w-auto lg:justify-start"
                >
                  COOKING BLOG
                  <ChevronRight className="h-4 w-4 stroke-[3]" aria-hidden="true" />
                </button>
              </div>
            </m.div>

            {/* Yellow bread card — second on mobile (order-2), right column on desktop (lg:order-2 lg:col-span-7) */}
            <m.div
              variants={item}
              className="relative order-2 pt-4 sm:pt-8 lg:col-span-7 lg:pt-10"
            >
              <div className="relative flex min-h-[220px] flex-col justify-end overflow-hidden rounded-[26px] bg-lemon-soft p-3 pt-3 pb-0 shadow-sm sm:min-h-[275px] sm:rounded-[34px] sm:p-6 sm:pb-0">
                {/* sketched loaf decoration */}
                <div className="pointer-events-none absolute top-2 right-2 sm:top-3 sm:right-3 opacity-85">
                  <div className="relative">
                    <SketchedLoaf className="h-16 w-20 sm:h-20 sm:w-28" />
                    {/* Hand-drawn radiating rays next to loaf */}
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      className="absolute -bottom-1 -right-0.5 h-4 w-4 sm:h-5 sm:w-5"
                      aria-hidden="true"
                    >
                      <path d="M3 6L11 11" stroke="#331B15" strokeWidth="2" strokeLinecap="round" />
                      <path d="M2 12L11 16" stroke="#331B15" strokeWidth="2" strokeLinecap="round" />
                      <path d="M5 16L10 20" stroke="#331B15" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                  </div>
                </div>

                {/* pop-out bread composition */}
                <div className="relative z-10 -mt-2 flex flex-col items-center justify-center gap-4 sm:-mt-16 sm:flex-row lg:-mt-24">
                  <div className="group relative w-full sm:w-auto">
                    <img
                      src={bake('hero-bread-stack', 800)}
                      srcSet={bakeSrcSet('hero-bread-stack', [480, 800, 1200])}
                      sizes="(min-width: 640px) 320px, 100vw"
                      width={800}
                      height={800}
                      alt="Tall stack of rustic multigrain loaves on a wooden board"
                      className="h-44 w-full rounded-2xl border-2 border-white object-cover shadow-md transition-transform duration-300 group-hover:scale-[1.02] sm:h-72 sm:w-80 sm:rounded-[28px] sm:border-4 sm:shadow-2xl"
                    />
                    {/* side half-loaf slice — visible on both mobile and desktop */}
                    <img
                      src={bake('sourdough-crumb', 400)}
                      width={400}
                      height={400}
                      loading="lazy"
                      decoding="async"
                      alt="Sourdough boule cut open showing an open, glossy crumb"
                      className="absolute -right-1 -bottom-1 h-28 w-34 rotate-2 rounded-t-[54px] rounded-b-2xl border-3 border-lemon-soft object-cover shadow-xl sm:-right-6 sm:-bottom-2 sm:h-36 sm:w-44 sm:rounded-t-[70px] sm:border-4"
                    />
                  </div>
                </div>

                {/* wooden cutting-board strip — visible on both mobile and desktop */}
                <div className="mt-3 flex h-8 items-center justify-between border-t border-[#8C5A32]/30 bg-gradient-to-r from-[#C89666] via-[#D9A773] to-[#B37D4E] -mx-3 px-3 text-[9.5px] font-bold text-espresso/85 sm:-mx-6 sm:px-6 sm:text-[11px] sm:rounded-b-[30px] rounded-b-[24px]">
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
