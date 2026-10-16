import { m, useReducedMotion } from 'framer-motion';
import { StickerBadge } from '../brand/StickerBadge';
import { SketchedCookie, SketchedLoaf, SketchedSwirlPastry, WavySquiggle } from '../brand/Doodles';
import { Reveal } from '../motion/Reveal';
import { useCart } from '../../context/cart';
import { unsplash } from '../../lib/images';

interface ThreeCardCollageProps {
  /** show the green mini-card + customer quote (full page) or the squiggle (art page) */
  showQuote?: boolean;
}

/** The signature 3-card editorial collage (full page + art hero variants). */
export function ThreeCardCollage({ showQuote = true }: ThreeCardCollageProps) {
  const { addItem } = useCart();
  const reduce = useReducedMotion();

  const press = reduce
    ? undefined
    : { whileHover: { y: -3 }, whileTap: { scale: 0.97 } };

  return (
    <div className="grid grid-cols-1 items-end gap-6 pt-10 md:grid-cols-12 lg:gap-8">
      {/* ------------------------------------------------ */}
      {/* LEFT — towering cookie stack                        */}
      {/* ------------------------------------------------ */}
      <Reveal className="group relative pt-12 md:col-span-4">
        <div className="relative flex min-h-[290px] flex-col justify-end rounded-[38px] border border-espresso/5 bg-sand p-5 pb-0 shadow-sm">
          <div className="pointer-events-none absolute top-8 right-2 opacity-85">
            <SketchedCookie className="h-20 w-20" />
          </div>

          <div className="relative z-10 -mt-24 flex items-end justify-center">
            <div className="relative flex h-[320px] w-56 flex-col items-center justify-end sm:w-60">
              <img
                src={unsplash('1558961363-fa8fdf82db35', 700, 85)}
                width={700}
                height={700}
                loading="lazy"
                decoding="async"
                alt="Tall stack of artisanal chocolate chip cookies"
                className="h-72 w-52 rounded-[28px] border-4 border-sand object-cover shadow-xl transition-transform duration-300 group-hover:scale-105"
              />
              <img
                src={unsplash('1499636136210-6f4ee915583e', 400, 85)}
                width={400}
                height={400}
                loading="lazy"
                decoding="async"
                alt="Crunchy cookie closeup"
                className="ml-24 -mt-20 h-28 w-28 rotate-12 rounded-full border-4 border-sand object-cover shadow-2xl transition-transform duration-300 group-hover:rotate-6"
              />
            </div>
          </div>

          <div className="flex items-center justify-between py-3 text-xs font-bold text-espresso/80">
            <span>8-STACK CHOCO CHIP</span>
            <m.button
              type="button"
              {...press}
              onClick={() =>
                addItem({
                  id: 'stack-cookies',
                  name: '8-Stack Choco Chip Cookies',
                  price: 14,
                  image: unsplash('1558961363-fa8fdf82db35', 400, 80),
                })
              }
              className="cursor-pointer font-extrabold underline transition-colors hover:text-tangerine"
            >
              + Add ($14)
            </m.button>
          </div>
        </div>
      </Reveal>

      {/* ------------------------------------------------ */}
      {/* CENTRE — mini green card + brown CRUNCHY card       */}
      {/* ------------------------------------------------ */}
      <div className="flex flex-col items-center gap-5 md:col-span-4">
        {showQuote && (
          <Reveal delay={0.08} className="w-40 self-center md:self-end md:mr-4">
            <m.button
              type="button"
              {...press}
              onClick={() =>
                addItem({
                  id: 'baked-loaf-tray',
                  name: 'Twin Ceramic Loaf Bake',
                  price: 19,
                  image: unsplash('1509440159596-0249088772ff', 400, 80),
                })
              }
              aria-label="Add Twin Ceramic Loaf Bake to your bag"
              className="group relative block h-28 w-40 cursor-pointer overflow-hidden rounded-[24px] bg-forest-soft p-2.5 shadow-md"
            >
              <span
                aria-hidden="true"
                className="absolute top-2 right-2 z-10 flex h-6 w-6 items-center justify-center rounded-full bg-[#A3E635] text-[10px] font-black text-[#1A4731] shadow"
              >
                🍃
              </span>
              <img
                src={unsplash('1509440159596-0249088772ff', 400, 80)}
                width={400}
                height={280}
                loading="lazy"
                decoding="async"
                alt="Baked ceramic trays with fresh loaves"
                className="h-full w-full rounded-[18px] object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </m.button>
          </Reveal>
        )}

        <Reveal delay={0.14} className="w-full">
          <div className="group relative flex min-h-[285px] w-full flex-col justify-between overflow-visible rounded-[38px] bg-cocoa p-6 text-white shadow-md sm:p-7">
            <span className="absolute -top-4 left-1/2 z-20 -translate-x-1/2">
              <StickerBadge className="bg-tangerine px-5 py-1.5 text-sm text-espresso! sm:text-base">
                CRUNCHY
              </StickerBadge>
            </span>

            <div className="z-10 mt-2">
              <h3 className="font-display text-xl leading-[1.15] tracking-wide text-white uppercase sm:text-2xl">
                TASTE THE REAL
                <br />
                WHEAT BAKED
                <br />
                ITEMS.
              </h3>
              <div className="mt-3 flex items-center gap-3">
                <span className="font-display text-3xl text-tangerine-bright">$16</span>
                <m.button
                  type="button"
                  {...press}
                  onClick={() =>
                    addItem({
                      id: 'wheat-baked',
                      name: 'Real Wheat Baked Cookies (Pack)',
                      price: 16,
                      image: unsplash('1499636136210-6f4ee915583e', 400, 80),
                    })
                  }
                  className="cursor-pointer rounded-full bg-white/15 px-3 py-1 text-xs font-extrabold uppercase transition-colors hover:bg-lemon hover:text-espresso"
                >
                  + Add to Bag
                </m.button>
              </div>
            </div>

            <div className="pointer-events-none absolute bottom-0 left-0 opacity-70">
              <SketchedSwirlPastry className="h-24 w-28" />
            </div>

            <div className="relative z-10 -mr-2 -mb-2 self-end">
              <div className="h-28 w-36 overflow-hidden rounded-2xl border-2 border-[#9C5C30] shadow-lg transition-transform duration-300 group-hover:scale-105">
                <img
                  src={unsplash('1499636136210-6f4ee915583e', 500, 85)}
                  width={500}
                  height={375}
                  loading="lazy"
                  decoding="async"
                  alt="Twine-tied wheat cookies"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </Reveal>
      </div>

      {/* ------------------------------------------------ */}
      {/* RIGHT — yellow chef card (+ optional quote)         */}
      {/* ------------------------------------------------ */}
      <div className="flex flex-col gap-5 pt-10 md:col-span-4">
        {!showQuote && (
          <Reveal className="mr-2 mb-1 self-end">
            <WavySquiggle className="h-5 w-20" />
          </Reveal>
        )}

        <Reveal delay={0.18}>
          <div className="group relative flex min-h-[260px] flex-col justify-end overflow-visible rounded-[38px] bg-lemon-soft p-6 pb-0 shadow-sm">
            <div className="pointer-events-none absolute top-3 -left-2 -rotate-12 opacity-85">
              <SketchedLoaf className="h-20 w-28" />
            </div>
            <div className="pointer-events-none absolute right-2 bottom-4 opacity-80">
              <SketchedCookie className="h-20 w-20" />
            </div>

            <m.button
              type="button"
              {...press}
              onClick={() =>
                addItem({
                  id: 'chef-combo',
                  name: 'Master Baker Artisan Bread Combo Bag',
                  price: 24,
                  image: unsplash('1549931319-a545dcf3bc73', 500, 80),
                })
              }
              className={`absolute top-6 right-5 z-20 cursor-pointer rounded-full px-4 py-1.5 font-display text-xs tracking-wider text-white uppercase shadow-md sm:text-sm ${
                showQuote ? 'bg-forest' : 'bg-[#573012]'
              }`}
            >
              COMBO
            </m.button>

            <div className="relative z-10 -mt-20 flex items-end justify-center">
              <div className="relative flex h-64 w-64 items-end justify-center">
                <img
                  src={unsplash('1577219491135-ce391730fb2c', 700, 85)}
                  width={700}
                  height={875}
                  loading="lazy"
                  decoding="async"
                  alt="Happy master baker holding fresh bread"
                  className="h-64 w-52 rounded-t-[36px] border-x-4 border-t-4 border-white/70 object-cover object-top shadow-lg"
                />
                <div className="absolute right-1 -bottom-1 h-32 w-32 rotate-6 overflow-hidden rounded-2xl border-4 border-lemon-soft shadow-xl transition-transform duration-300 group-hover:rotate-3">
                  <img
                    src={unsplash('1549931319-a545dcf3bc73', 500, 85)}
                    width={500}
                    height={500}
                    loading="lazy"
                    decoding="async"
                    alt="Paper bag of baguettes"
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        {showQuote && (
          <Reveal delay={0.24} className="relative pt-2 pr-4 pl-2">
            <span
              aria-hidden="true"
              className="absolute top-1 -left-2 font-display text-3xl leading-none text-tangerine"
            >
              “
            </span>
            <p className="pl-4 text-xs leading-relaxed font-semibold text-espresso/90 sm:text-sm">
              Baking is a craft in itself, and we bake these delicious and crumbly flavours
              bakery items.
            </p>
            <p className="mt-2 text-right text-xs font-extrabold text-espresso">— Ashton Cooper</p>
          </Reveal>
        )}
      </div>
    </div>
  );
}
