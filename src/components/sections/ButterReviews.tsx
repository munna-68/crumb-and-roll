import { useState } from 'react';
import { m } from 'framer-motion';
import { Star } from 'lucide-react';
import { BakerAvatar, YellowLoop } from '../brand/Doodles';
import { Reveal } from '../motion/Reveal';
import { useUI } from '../../context/ui';
import { useToast } from '../../context/toast';
import { RATING, REVIEW_TAGS, type ReviewTag } from '../../data/reviews';
import { unsplash } from '../../lib/images';

/** Light-teal "with enough butter" banner with the rating + review tag pills. */
export function ButterReviews() {
  const { openOverlay } = useUI();
  const showToast = useToast();
  const [selectedTag, setSelectedTag] = useState<ReviewTag>('COOKIES');

  return (
    <Reveal className="mt-12">
      <section
        aria-label="Customer reviews"
        className="relative overflow-hidden rounded-[36px] bg-teal-banner p-7 shadow-sm sm:p-10 lg:p-12"
      >
        <img
          src={unsplash('1499636136210-6f4ee915583e', 300, 80)}
          width={300}
          height={300}
          loading="lazy"
          decoding="async"
          alt=""
          className="absolute -top-6 -right-6 h-24 w-24 rounded-full border-4 border-teal-banner object-cover shadow-lg sm:h-28 sm:w-28"
        />

        <div className="pointer-events-none absolute top-3 left-2 opacity-80">
          <YellowLoop className="h-28 w-28" />
        </div>

        <div className="relative z-10 grid grid-cols-1 items-center gap-8 lg:grid-cols-12">
          <div className="lg:col-span-6 lg:border-r lg:border-deep-teal/25 lg:pr-8">
            <h2 className="font-display text-2xl leading-[1.12] tracking-wide text-deep-teal uppercase sm:text-3xl lg:text-[34px]">
              WITH ENOUGH BUTTER,
              <br />
              ANYTHING IS GOOD!
            </h2>

            <div className="mt-7 flex flex-wrap items-center gap-4 sm:gap-6">
              <div className="flex items-center gap-3.5">
                <BakerAvatar className="h-12 w-12 shrink-0" />
                <p className="max-w-[190px] text-xs leading-snug font-bold text-deep-teal sm:text-sm">
                  Our master plan to freshen up a 200-year-old.
                </p>
              </div>

              <button
                type="button"
                onClick={() => openOverlay('blog')}
                className="cursor-pointer text-left text-xs font-extrabold text-deep-teal underline decoration-2 underline-offset-4 transition-colors hover:text-espresso sm:text-sm"
              >
                What we
                <br />
                are dishing out ?
              </button>
            </div>
          </div>

          <div className="lg:col-span-6 lg:pl-6">
            <div className="mb-6 flex flex-wrap items-center gap-4">
              <span className="font-display text-4xl text-deep-teal sm:text-5xl">
                {RATING.score}
              </span>
              <div>
                <div
                  className="flex items-center gap-1 text-white"
                  role="img"
                  aria-label={`Rated ${RATING.score} out of 5`}
                >
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      className="h-4 w-4 fill-white text-white drop-shadow-sm"
                      aria-hidden="true"
                    />
                  ))}
                </div>
                <p className="mt-1 text-xs font-bold text-deep-teal sm:text-sm">
                  Based on {RATING.count} reviews.
                </p>
              </div>
            </div>

            <div className="grid max-w-lg grid-cols-2 gap-2.5 sm:grid-cols-3 sm:gap-3">
              {REVIEW_TAGS.map((tag) => {
                const isSelected = selectedTag === tag;
                return (
                  <m.button
                    key={tag}
                    type="button"
                    whileTap={{ scale: 0.95 }}
                    animate={{ scale: isSelected ? 1.03 : 1 }}
                    transition={{ type: 'spring', stiffness: 380, damping: 24 }}
                    aria-pressed={isSelected}
                    onClick={() => {
                      setSelectedTag(tag);
                      showToast(`Showing top customer reviews for ${tag}`);
                    }}
                    className={`cursor-pointer rounded-[50%] border-[1.5px] border-deep-teal py-2 px-3 font-display text-xs tracking-wider uppercase transition-colors ${
                      isSelected
                        ? 'bg-deep-teal text-white shadow-sm'
                        : 'bg-transparent text-deep-teal hover:bg-deep-teal/10'
                    }`}
                  >
                    {tag}
                  </m.button>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </Reveal>
  );
}
