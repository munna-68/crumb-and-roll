import { StickerBadge } from '../brand/StickerBadge';
import { SteamLines } from '../brand/Doodles';
import { Reveal } from '../motion/Reveal';
import { ThreeCardCollage } from './ThreeCardCollage';
import { ButterReviews } from './ButterReviews';

/**
 * Alternate hero (reference Hero 1) — "THE ART OF BAKING." oversized headline.
 * In the reference this variant replaces the whole page body with its own
 * composition (headline + collage + review banner). Swap in via
 * HERO_VARIANT = 'art' in config/site.ts.
 */
export function HeroArtOfBaking() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="bg-gradient-to-b from-linen to-cream px-5 pb-14 sm:px-10 lg:px-14"
    >
      <div className="mx-auto w-full max-w-[1220px]">
        <Reveal className="relative pt-6 pb-2 text-center select-none">
          <div className="mb-1 flex justify-center">
            <SteamLines className="h-9 w-9" />
          </div>

          <h1
            id="hero-heading"
            className="relative inline-block font-display text-[44px] leading-[0.92] tracking-tight text-espresso uppercase sm:text-[76px] md:text-[96px] lg:text-[116px]"
          >
            <span className="relative mr-3 inline-block sm:mr-5">
              THE
              <span className="absolute top-1/2 right-[-14px] -translate-y-1/2 sm:right-[-18px]">
                <StickerBadge rotate={4} className="bg-sky px-2.5 py-0.5 text-[10px] sm:px-4 sm:py-1 sm:text-base lg:text-lg">
                  • FRESH
                </StickerBadge>
              </span>
            </span>
            <span className="mr-3 sm:mr-5">ART</span>
            <span className="mr-3 sm:mr-5">OF</span>
            <span className="relative inline-block">
              BAKING.
              <span className="absolute top-1/2 left-[46%] -translate-y-1/2">
                <StickerBadge rotate={-8} className="bg-forest px-2.5 py-0.5 text-[10px] sm:px-4 sm:py-1 sm:text-base lg:text-lg">
                  TASTY
                </StickerBadge>
              </span>
            </span>
          </h1>
        </Reveal>

        <ThreeCardCollage showQuote={false} />
        <ButterReviews />
      </div>
    </section>
  );
}
