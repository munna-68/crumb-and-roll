import { OrganicButton } from '../brand/OrganicButton';
import { BittenCookieBadge, WavySquiggle } from '../brand/Doodles';
import { Reveal } from '../motion/Reveal';
import { ThreeCardCollage } from './ThreeCardCollage';
import { ButterReviews } from './ButterReviews';
import { SECTION_IDS } from '../../config/site';
import { scrollToSection } from '../../lib/scroll';

/** "WHY BEKERY'S ITEMS IS SO SPECIAL TO CUSTOMER?" — collage + review banner. */
export function SpecialSection() {
  return (
    <section id={SECTION_IDS.special} className="bg-cream px-5 py-12 sm:px-10 lg:px-14">
      <div className="mx-auto w-full max-w-[1220px]">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-center">
          <Reveal>
            <h2 className="font-display text-3xl leading-[1.1] text-espresso uppercase sm:text-4xl">
              WHY BEKERY’S <BittenCookieBadge className="mx-1 h-8 w-8" />
              <br />
              <span className="inline-flex flex-wrap items-center gap-3">
                ITEMS IS SO SPECIAL
                <WavySquiggle className="h-4 w-16" />
              </span>
              <br />
              TO CUSTOMER?
            </h2>
          </Reveal>

          <Reveal delay={0.1} className="flex items-center gap-4 self-start md:self-center">
            <span aria-hidden="true" className="hidden h-[1.5px] w-16 bg-espresso/40 sm:inline-block" />
            <OrganicButton
              showDot
              size="sm"
              onClick={() => scrollToSection(SECTION_IDS.products)}
            >
              SHOP NOW
            </OrganicButton>
          </Reveal>
        </div>

        <ThreeCardCollage showQuote />
        <ButterReviews />
      </div>
    </section>
  );
}
