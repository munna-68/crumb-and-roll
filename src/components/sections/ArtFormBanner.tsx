import { useEffect, useState } from 'react';
import { AnimatePresence, m, useReducedMotion } from 'framer-motion';
import { OrganicButton } from '../brand/OrganicButton';
import { BotanicalWheat, OrangeRays } from '../brand/Doodles';
import { Parallax } from '../motion/Parallax';
import { Reveal } from '../motion/Reveal';
import { useUI } from '../../context/ui';
import { SECTION_IDS } from '../../config/site';
import { unsplash } from '../../lib/images';

const SLIDES = [
  {
    headline: (
      <>
        WHY IS BAKING
        <br />
        CONSIDERED AS
        <br />
        ART FORM ?
      </>
    ),
    copy: 'Their experience plays a role in the way they work. Bakers use flavours and visual appeal to produce an edible art piece.',
    alt: 'Smiling baker rolling dough on a floured counter',
  },
  {
    headline: (
      <>
        MADE BY HAND,
        <br />
        FROM SCRATCH,
        <br />
        WITH LOVE.
      </>
    ),
    copy: 'Every loaf is slow-fermented for 48 hours and shaped by hand on stone hearths for an unforgettable crust.',
    alt: 'Artisan baker shaping bread by hand',
  },
] as const;

const AUTO_MS = 7000;

/** Dark "art form" banner with an auto-advancing (and clickable) slide story. */
export function ArtFormBanner() {
  const { openOverlay } = useUI();
  const reduce = useReducedMotion();
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [userPinned, setUserPinned] = useState(false);

  useEffect(() => {
    if (reduce || paused || userPinned) return;
    const timer = window.setInterval(
      () => setIndex((value) => (value + 1) % SLIDES.length),
      AUTO_MS,
    );
    return () => window.clearInterval(timer);
  }, [reduce, paused, userPinned]);

  const slide = SLIDES[index];

  return (
    <section id={SECTION_IDS.artForm} className="bg-cream px-4 py-6 sm:px-8 lg:px-12">
      <div className="mx-auto w-full max-w-[1220px]">
        <div
          className="relative overflow-hidden rounded-[40px] bg-espresso-deep p-6 text-white shadow-lg sm:p-10 lg:p-12"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocus={() => setPaused(true)}
          onBlur={() => setPaused(false)}
        >
          <Parallax className="pointer-events-none absolute right-0 bottom-0 opacity-90" strength={20}>
            <BotanicalWheat className="h-80 w-64" />
          </Parallax>

          <div className="relative z-10 grid grid-cols-1 items-center gap-8 lg:grid-cols-12">
            <Reveal className="flex items-center gap-4 lg:col-span-6">
              <div className="flex flex-col items-center gap-2">
                {SLIDES.map((_, dotIndex) => (
                  <button
                    key={dotIndex}
                    type="button"
                    aria-label={`Show story slide ${dotIndex + 1}`}
                    aria-current={dotIndex === index}
                    onClick={() => {
                      setIndex(dotIndex);
                      setUserPinned(true);
                    }}
                    className={`w-1.5 cursor-pointer rounded-full transition-all duration-300 ${
                      dotIndex === index ? 'h-6 bg-tangerine' : 'h-2 bg-white/60 hover:bg-white/90'
                    }`}
                  />
                ))}
              </div>

              <div className="relative w-full">
                <span className="absolute -top-5 -right-5 z-20">
                  <OrangeRays className="h-11 w-11" />
                </span>
                <img
                  src={unsplash('1556910103-1c02745aae4d', 900, 85)}
                  srcSet={`${unsplash('1556910103-1c02745aae4d', 600, 85)} 600w, ${unsplash('1556910103-1c02745aae4d', 900, 85)} 900w`}
                  sizes="(min-width: 1024px) 560px, 100vw"
                  width={900}
                  height={600}
                  loading="lazy"
                  decoding="async"
                  alt={slide.alt}
                  className="h-[250px] w-full rounded-[32px] object-cover shadow-md sm:h-[300px]"
                />
              </div>
            </Reveal>

            <div className="lg:col-span-6 lg:pl-6">
              <AnimatePresence mode="wait" initial={false}>
                <m.div
                  key={index}
                  initial={reduce ? { opacity: 0 } : { opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={reduce ? { opacity: 0 } : { opacity: 0, y: -10 }}
                  transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
                >
                  <h2 className="font-display text-3xl leading-[1.08] tracking-wide uppercase sm:text-4xl lg:text-[42px]">
                    {slide.headline}
                  </h2>
                  <p className="mt-4 max-w-md text-xs leading-relaxed font-medium text-white/80 sm:text-sm">
                    {slide.copy}
                  </p>
                </m.div>
              </AnimatePresence>

              <div className="mt-7">
                <OrganicButton showDot size="md" onClick={() => openOverlay('blog')}>
                  LEARN BAKING
                </OrganicButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
