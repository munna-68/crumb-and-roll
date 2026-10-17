import { X } from 'lucide-react';
import { Modal } from '../ui/Modal';
import { OrganicButton } from '../brand/OrganicButton';
import { useUI } from '../../context/ui';
import { bake, bakeSrcSet } from '../../lib/images';

/** "ROLLIN. baking journal" teaser modal (opened by the blog CTAs). */
export function BlogModal() {
  const { overlay, closeOverlay } = useUI();
  const open = overlay === 'blog';

  return (
    <Modal
      open={open}
      onClose={closeOverlay}
      labelledBy="blog-title"
      panelClassName="relative max-h-[90vh] w-full max-w-xl overflow-y-auto rounded-[36px] border-4 border-espresso bg-cream p-6 shadow-2xl sm:p-8"
    >
      <button
        type="button"
        onClick={closeOverlay}
        aria-label="Close the baking journal"
        className="absolute top-5 right-5 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-white text-espresso shadow-sm transition-colors hover:bg-tangerine hover:text-white"
      >
        <X className="h-5 w-5" aria-hidden="true" />
      </button>

      <span className="inline-block rounded-full bg-sky px-3.5 py-1 font-display text-xs tracking-wider text-white uppercase">
        • ROLLIN. BAKING JOURNAL
      </span>
      <h2
        id="blog-title"
        className="mt-3 font-display text-2xl tracking-wide text-espresso uppercase sm:text-3xl"
      >
        HOW WE REFRESHED OUR 200-YEAR-OLD SOURDOUGH STARTER
      </h2>
      <img
        src={bake('hero-bread-stack', 1200)}
        srcSet={bakeSrcSet('hero-bread-stack', [800, 1200])}
        sizes="(min-width: 640px) 560px, 100vw"
        width={1200}
        height={1200}
        loading="lazy"
        decoding="async"
        alt="Stack of rustic multigrain loaves on a wooden board"
        className="my-4 h-48 w-full rounded-2xl object-cover shadow-md"
      />
      <p className="text-xs leading-relaxed font-semibold text-espresso/85 sm:text-sm">
        At ROLLIN., we believe with enough cultured Normandy butter and stone-ground heirloom
        wheat, anything is good! Every morning at 4:00 AM, our bakers hand-score each loaf and
        tie warm bundles of chocolate chunk cookies with natural jute twine.
      </p>
      <div className="mt-6 flex justify-end">
        <OrganicButton size="sm" onClick={closeOverlay}>
          BACK TO BAKERY
        </OrganicButton>
      </div>
    </Modal>
  );
}
