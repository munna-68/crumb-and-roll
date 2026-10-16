import { HERO_VARIANT } from './config/site';
import { AnnouncementBar } from './components/layout/AnnouncementBar';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { MobileMenu } from './components/layout/MobileMenu';
import { HeroBakeCookies } from './components/sections/HeroBakeCookies';
import { HeroMadeByHand } from './components/sections/HeroMadeByHand';
import { HeroArtOfBaking } from './components/sections/HeroArtOfBaking';
import { FeaturedDelight } from './components/sections/FeaturedDelight';
import { DailyProducts } from './components/sections/DailyProducts';
import { ArtFormBanner } from './components/sections/ArtFormBanner';
import { SpecialSection } from './components/sections/SpecialSection';
import { CartDrawer } from './components/overlays/CartDrawer';
import { BlogModal } from './components/overlays/BlogModal';
import { SubscribeModal } from './components/overlays/SubscribeModal';

/**
 * Page composition follows the reference "full page" flow.
 *
 * `HERO_VARIANT` in config/site.ts swaps the hero:
 *  - 'cookies' (default) → BAKE THE COOKIES + full flow
 *  - 'hand'              → dark MADE BY HAND banner + full flow
 *  - 'art'               → THE ART OF BAKING composition (headline + collage +
 *    review banner only and no announcement bar, exactly like the reference)
 */
export default function App() {
  return (
    <div id="top" className="min-h-screen bg-cream">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[80] focus:rounded-xl focus:bg-espresso focus:px-4 focus:py-2 focus:text-sm focus:font-bold focus:text-white"
      >
        Skip to content
      </a>

      {HERO_VARIANT !== 'art' && <AnnouncementBar />}

      <Header />

      <main id="main">
        {HERO_VARIANT === 'art' ? (
          <HeroArtOfBaking />
        ) : (
          <>
            {HERO_VARIANT === 'hand' ? <HeroMadeByHand /> : <HeroBakeCookies />}
            <FeaturedDelight />
            <DailyProducts />
            <ArtFormBanner />
            <SpecialSection />
          </>
        )}
      </main>

      <Footer />

      <CartDrawer />
      <BlogModal />
      <SubscribeModal />
      <MobileMenu />
    </div>
  );
}
