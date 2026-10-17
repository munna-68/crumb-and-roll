import { useEffect, useState } from 'react';
import { Menu } from 'lucide-react';
import { OrganicButton } from '../brand/OrganicButton';
import { NavDropdownMenu } from './NavDropdownMenu';
import { CartButton } from './CartButton';
import { NAV_DROPDOWNS } from '../../data/navigation';
import { SECTION_IDS, HERO_VARIANT } from '../../config/site';
import { useUI } from '../../context/ui';
import { scrollToSection, scrollToTop } from '../../lib/scroll';
import { cn } from '../../lib/cn';

const [BAKERY_MENU, COOKIES_MENU] = NAV_DROPDOWNS;

/** Sticky top navigation. Transparent seam with the hero, gains depth on scroll. */
export function Header() {
  const { browseCategory, openOverlay } = useUI();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={cn(
        'sticky top-0 z-40 bg-linen transition-shadow duration-300',
        scrolled && 'shadow-[0_14px_34px_-24px_rgba(51,27,21,0.55)]',
      )}
    >
      <div className="mx-auto flex w-full max-w-[1220px] items-center justify-between gap-4 px-5 pt-4 pb-3 sm:px-10 sm:pt-5 lg:px-14">
        <a
          href="#top"
          onClick={(event) => {
            event.preventDefault();
            scrollToTop();
          }}
          className="flex items-baseline font-display text-2xl tracking-tight text-espresso sm:text-3xl"
        >
          ROLLIN
          <span className="ml-0.5 text-3xl leading-none text-tangerine sm:text-4xl">.</span>
        </a>

        <nav
          aria-label="Primary"
          className="hidden items-center gap-8 font-display text-xs tracking-wider text-espresso uppercase lg:flex"
        >
          <button
            type="button"
            onClick={() => browseCategory('CAKE')}
            className="cursor-pointer uppercase transition-colors hover:text-tangerine"
          >
            CAKE
          </button>
          <NavDropdownMenu dropdown={BAKERY_MENU} />
          <button
            type="button"
            onClick={() => scrollToSection(SECTION_IDS.artForm)}
            className="cursor-pointer uppercase transition-colors hover:text-tangerine"
          >
            ABOUT US
          </button>
          <NavDropdownMenu dropdown={COOKIES_MENU} />
          <button
            type="button"
            onClick={() => openOverlay('subscribe')}
            className="cursor-pointer uppercase transition-colors hover:text-tangerine"
          >
            CONTACT
          </button>
        </nav>

        <div className="flex items-center gap-3 sm:gap-4">
          <div className="hidden sm:block">
            <OrganicButton
              size="sm"
              onClick={() => scrollToSection(SECTION_IDS.products)}
            >
              {HERO_VARIANT === 'art' ? 'SHOP ONLINE' : 'START BAKING'}
            </OrganicButton>
          </div>

          <CartButton />

          <button
            type="button"
            onClick={() => openOverlay('menu')}
            aria-label="Open menu"
            className="flex h-10 w-10 cursor-pointer items-center justify-center text-espresso transition-transform hover:scale-105 active:scale-95 lg:hidden"
          >
            <Menu className="h-6 w-6 stroke-[2.2]" aria-hidden="true" />
          </button>
        </div>
      </div>
    </header>
  );
}
