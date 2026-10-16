import { OrganicButton } from '../brand/OrganicButton';
import { OrangeRays, BotanicalWheat } from '../brand/Doodles';
import { Parallax } from '../motion/Parallax';
import { Reveal } from '../motion/Reveal';
import { useCart } from '../../context/cart';
import { unsplash } from '../../lib/images';

/**
 * Alternate hero (reference Hero 2) — "MADE BY HAND, FROM SCRATCH, WITH LOVE."
 * Dark espresso banner. Swap in via HERO_VARIANT = 'hand' in config/site.ts.
 */
export function HeroMadeByHand() {
  const { addItem } = useCart();

  return (
    <section aria-labelledby="hero-heading" className="bg-linen">
      <div className="mx-auto w-full max-w-[1220px] px-4 pb-8 sm:px-8 lg:px-12">
        <div className="relative overflow-hidden rounded-[40px] bg-espresso-deep p-6 text-white shadow-xl sm:p-10 lg:p-12">
          <Parallax className="pointer-events-none absolute right-0 bottom-0 opacity-90" strength={18}>
            <BotanicalWheat className="h-80 w-64" />
          </Parallax>

          <div className="relative z-10 grid grid-cols-1 items-center gap-8 lg:grid-cols-12">
            <Reveal className="flex items-center gap-4 lg:col-span-6">
              <div className="flex flex-col items-center gap-2" aria-hidden="true">
                <span className="h-6 w-1.5 rounded-full bg-tangerine" />
                <span className="h-2 w-1.5 rounded-full bg-white/60" />
                <span className="h-2 w-1.5 rounded-full bg-white/60" />
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
                  alt="Artisan baker kneading dough by hand"
                  className="h-[260px] w-full rounded-[32px] object-cover shadow-lg sm:h-[310px]"
                />
              </div>
            </Reveal>

            <Reveal delay={0.12} className="lg:col-span-6 lg:pl-6">
              <h1
                id="hero-heading"
                className="font-display text-3xl leading-[1.05] tracking-wide uppercase sm:text-5xl"
              >
                MADE BY HAND,
                <br />
                FROM SCRATCH,
                <br />
                WITH LOVE.
              </h1>
              <p className="mt-4 max-w-md text-xs leading-relaxed font-medium text-white/80 sm:text-sm">
                Their experience plays a role in the way they work. Bakers use flavours.
              </p>
              <div className="mt-7">
                <OrganicButton
                  showDot
                  size="md"
                  onClick={() =>
                    addItem({
                      id: 'scratch-loaf',
                      name: 'Handmade Scratch Sourdough Loaf',
                      price: 18,
                      image: unsplash('1509440159596-0249088772ff', 400),
                    })
                  }
                >
                  ORDER NOW
                </OrganicButton>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
