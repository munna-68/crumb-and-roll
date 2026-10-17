import { m, useReducedMotion } from 'framer-motion';
import { ArrowDown, ChevronRight } from 'lucide-react';
import { OrganicButton } from '../brand/OrganicButton';
import { StickerBadge } from '../brand/StickerBadge';
import { SteamLines, CookieCrumbs, SketchedLoaf } from '../brand/Doodles';
import { useCart } from '../../context/cart';
import { useUI } from '../../context/ui';
import { SECTION_IDS } from '../../config/site';
import { scrollToSection } from '../../lib/scroll';
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
 * Main landing hero — "BAKE THE COOKIES".
 *
 * Dedicated mobile (< lg) and desktop (lg+) layouts to strictly preserve
 * the exact deployed desktop design while precisely matching the mobile Figma specification.
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
          className="relative rounded-[32px] border border-espresso/5 bg-white p-4 pt-5 pb-5 shadow-sm sm:rounded-[38px] sm:p-8 lg:p-12"
        >
          {/* ======================================================== */}
          {/* 1. DESKTOP HERO (lg+) — 100% UNTOUCHED ORIGINAL         */}
          {/* ======================================================== */}
          <div className="hidden lg:block">
            {/* Desktop Headline */}
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
                    <StickerBadge className="bg-tangerine px-4 py-0.5 text-base text-espresso! lg:text-lg">
                      CRUNCHY
                    </StickerBadge>
                  </span>
                </m.span>
              </h1>
            </div>

            {/* Desktop Lower grid: copy + bread card */}
            <div className="mt-6 grid grid-cols-1 items-end gap-8 sm:mt-8 lg:grid-cols-12">
              {/* Copy */}
              <m.div variants={item} className="order-2 pb-2 lg:order-1 lg:col-span-5">
                <h2 className="font-display text-2xl leading-[1.12] text-espresso uppercase sm:text-3xl lg:text-[32px]">
                  PREMIUM BREAD
                  <br />
                  AND COOKIES MADE
                  <br />
                  FROM SCRATCH{' '}
                  <span className="mx-1 inline-block -translate-y-0.5 align-middle">
                    <StickerBadge rotate={3} className="bg-sky px-3.5 py-1 text-xs text-espresso! sm:text-sm">
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

              {/* Yellow bread card */}
              <m.div
                variants={item}
                className="relative order-1 pt-6 lg:order-2 lg:col-span-7 lg:pt-10"
              >
                <div className="relative flex min-h-[240px] flex-col justify-end rounded-[34px] bg-lemon-soft p-4 pt-0 pb-5 shadow-sm sm:min-h-[275px] sm:p-6 sm:pb-0">
                  {/* sketched loaf decoration */}
                  <div className="pointer-events-none absolute top-3 right-3 opacity-85">
                    <SketchedLoaf className="h-20 w-24 sm:w-28" />
                  </div>

                  {/* pop-out bread composition */}
                  <div className="relative z-10 -mt-5 flex flex-col items-center justify-center gap-4 sm:-mt-16 sm:flex-row lg:-mt-24">
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
                      {/* side half-loaf slice */}
                      <img
                        src={bake('sourdough-crumb', 400)}
                        width={400}
                        height={400}
                        loading="lazy"
                        decoding="async"
                        alt="Sourdough boule cut open showing an open, glossy crumb"
                        className="absolute -right-6 -bottom-2 hidden h-36 w-44 rotate-2 rounded-t-[70px] rounded-b-2xl border-4 border-lemon-soft object-cover shadow-xl sm:block"
                      />
                    </div>
                  </div>

                  {/* wooden cutting-board strip (desktop) */}
                  <div className="hidden h-8 items-center justify-between border-t border-[#8C5A32]/30 bg-gradient-to-r from-[#C89666] via-[#D9A773] to-[#B37D4E] px-6 text-[11px] font-bold text-espresso/80 sm:-mx-6 sm:flex sm:rounded-b-[30px]">
                    <span>STONE-MILLED WHOLE WHEAT</span>
                    <span>BAKED FRESH EVERY MORNING</span>
                  </div>
                </div>
              </m.div>
            </div>
          </div>

          {/* ======================================================== */}
          {/* 2. MOBILE HERO (< lg) — PRECISE MATCH TO FIGMA DESIGN    */}
          {/* ======================================================== */}
          <div className="lg:hidden">
            {/* Mobile Steam + Headline */}
            <div className="relative text-center select-none pt-1">
              <m.div variants={item} className="mb-2 flex justify-center">
                <SteamLines className="h-8 w-8 text-[#F28469]" />
              </m.div>

              <h1
                id="hero-heading-mobile"
                className="font-display text-[78px] leading-[0.79] tracking-[-0.035em] text-espresso uppercase sm:text-[88px]"
              >
                <m.span variants={item} className="block text-espresso">
                  BAKE THE
                </m.span>
                <m.span variants={item} className="relative inline-block -mt-3 text-espresso sm:-mt-4">
                  COOKIES
                  {/* TASTY sticker badge overlapping bottom-left of COOKIES */}
                  <span className="absolute -bottom-2.5 -left-3 z-20">
                    <StickerBadge
                      rotate={-13}
                      className="bg-forest px-3.5 py-0.5 text-xs font-display tracking-wider text-white shadow-md"
                    >
                      TASTY
                    </StickerBadge>
                  </span>

                  {/* CRUNCHY sticker badge + 3 defined radiating rays overlapping bottom-right of COOKIES */}
                  <span className="absolute -bottom-3 -right-3 z-20 flex items-center">
                    <StickerBadge
                      rotate={7}
                      className="bg-tangerine px-4 py-0.5 text-xs font-display tracking-wider text-espresso! shadow-md"
                    >
                      CRUNCHY
                    </StickerBadge>
                    {/* Hand-drawn bold burst SVG right off the top-right corner */}
                    <svg
                      viewBox="0 0 32 32"
                      fill="none"
                      className="absolute -right-5 -top-3.5 h-8 w-8 pointer-events-none"
                      aria-hidden="true"
                    >
                      <path d="M10 20L13 8" stroke="#28140B" strokeWidth="3.4" strokeLinecap="round" />
                      <path d="M15 24L25 15" stroke="#28140B" strokeWidth="3.4" strokeLinecap="round" />
                      <path d="M19 28L29 26" stroke="#28140B" strokeWidth="3.4" strokeLinecap="round" />
                    </svg>
                  </span>
                </m.span>
              </h1>
            </div>

            {/* Mobile Subheadline + Copy */}
            <m.div variants={item} className="mt-8">
              <h2 className="font-display text-[26px] leading-[1.08] text-espresso uppercase sm:text-3xl">
                PREMIUM BREAD
                <br />
                AND COOKIES MADE
                <br />
                FROM SCRATCH{' '}
                <span className="mx-1 inline-block -translate-y-0.5 align-middle">
                  <StickerBadge rotate={3} className="bg-sky px-3 py-0.5 text-xs text-espresso! font-display shadow-sm sm:px-3.5 sm:py-1 sm:text-sm">
                    • FRESH
                  </StickerBadge>
                </span>
              </h2>

              <p className="mt-3.5 text-xs font-bold leading-relaxed text-espresso/80 sm:text-sm">
                We’re literally obsessed with giving more of what you love!
              </p>

              {/* Mobile Actions: ORDER NOW Button & COOKING BLOG Link */}
              <div className="mt-6 flex flex-col items-center">
                <div className="relative w-full">
                  <m.button
                    type="button"
                    onClick={orderScratchLoaf}
                    whileHover={reduce ? undefined : { y: -2 }}
                    whileTap={reduce ? undefined : { scale: 0.98 }}
                    transition={{ duration: 0.16, ease: 'easeOut' }}
                    aria-label="Order scratch baked multigrain loaf now"
                    className="group relative flex h-[52px] w-full cursor-pointer items-center justify-center font-display text-lg tracking-wider text-espresso uppercase select-none"
                  >
                    <svg
                      viewBox="0 0 360 52"
                      preserveAspectRatio="none"
                      aria-hidden="true"
                      className="absolute inset-0 h-full w-full drop-shadow-[0_3px_0_rgba(40,20,11,0.22)] transition-[filter] duration-200 group-hover:drop-shadow-[0_4px_0_rgba(40,20,11,0.28)]"
                    >
                      <path
                        d="M 26 4 C 110 2, 250 2, 334 4 C 349 5, 357 15, 357 26 C 357 37, 349 47, 334 48 C 250 50, 110 50, 26 48 C 11 47, 3 37, 3 26 C 3 15, 11 5, 26 4 Z"
                        fill="#FDE624"
                        stroke="#28140B"
                        strokeWidth="3.2"
                        vectorEffect="non-scaling-stroke"
                        className="transition-colors duration-200 group-hover:fill-[#FFE924]"
                      />
                    </svg>
                    <span className="relative z-10 flex items-center justify-center gap-2.5">
                      <span className="inline-block h-2.5 w-2.5 rounded-full bg-white shadow-sm" />
                      <span>ORDER NOW</span>
                    </span>
                  </m.button>
                </div>

                <button
                  type="button"
                  onClick={() => openOverlay('blog')}
                  className="mt-4 flex cursor-pointer items-center gap-1.5 font-display text-sm tracking-wider text-espresso uppercase transition-colors hover:text-tangerine"
                >
                  <span>COOKING BLOG</span>
                  <ChevronRight className="h-4 w-4 stroke-[3]" aria-hidden="true" />
                </button>
              </div>
            </m.div>

            {/* Mobile Yellow Bread Card */}
            <m.div variants={item} className="relative mt-7">
              <div className="relative flex flex-col justify-end overflow-hidden rounded-[30px] bg-lemon-soft pt-12 px-0 pb-0 shadow-sm sm:rounded-[36px]">
                {/* Sketched loaf decoration in top right with 3 tick marks */}
                <div className="pointer-events-none absolute top-3 right-3 opacity-90 z-20">
                  <div className="relative">
                    <SketchedLoaf className="h-16 w-24" />
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      className="absolute -bottom-1.5 right-0.5 h-5 w-5 pointer-events-none"
                      aria-hidden="true"
                    >
                      <path d="M4 14L8 19" stroke="#331B15" strokeWidth="2.4" strokeLinecap="round" />
                      <path d="M10 10L17 15" stroke="#331B15" strokeWidth="2.4" strokeLinecap="round" />
                      <path d="M16 6L22 9" stroke="#331B15" strokeWidth="2.4" strokeLinecap="round" />
                    </svg>
                  </div>
                </div>

                {/* Pop-out bread composition & Inset Sourdough slice */}
                <div className="relative z-10 w-full">
                  <img
                    src={bake('hero-bread-mobile', 800)}
                    width={800}
                    height={800}
                    alt="Tall stack of rustic multigrain loaves on a wooden board"
                    className="h-64 w-full object-cover"
                  />

                  {/* Inset sourdough boule cut slice with arched top and yellow border */}
                  <img
                    src={bake('sourdough-crumb', 400)}
                    width={400}
                    height={400}
                    loading="lazy"
                    decoding="async"
                    alt="Sourdough boule cut open showing an open, glossy crumb"
                    className="absolute right-1.5 bottom-0 z-20 h-36 w-44 rounded-t-[76px] rounded-b-xl border-[4.5px] border-lemon-soft object-cover shadow-xl"
                  />
                </div>

                {/* Wooden cutting-board strip */}
                <div className="relative z-30 flex h-9 items-center justify-between border-t border-[#8C5A32]/30 bg-[#B98A62] px-5 text-[10px] font-bold text-espresso/85 rounded-b-[30px]">
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
