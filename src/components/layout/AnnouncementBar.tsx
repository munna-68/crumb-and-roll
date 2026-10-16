import { Marquee } from '../motion/Marquee';
import { useUI } from '../../context/ui';

function PromoNote() {
  return (
    <span className="flex items-center gap-2 px-5 text-[11px] font-semibold whitespace-nowrap sm:px-7 sm:text-xs">
      <span
        aria-hidden="true"
        className="flex h-4 w-4 items-center justify-center rounded-full bg-lemon text-[10px] font-black text-espresso"
      >
        %
      </span>
      <span>
        <strong>15% Off</strong> on <strong>$100+</strong> <em>Purchase</em>
      </span>
    </span>
  );
}

function SubscribeNote() {
  const { openOverlay } = useUI();
  return (
    <span className="flex items-center px-5 whitespace-nowrap sm:px-7">
      <button
        type="button"
        onClick={() => openOverlay('subscribe')}
        className="flex cursor-pointer items-center gap-2 text-[11px] font-semibold hover:underline sm:text-xs"
      >
        <span
          aria-hidden="true"
          className="flex h-4 w-4 items-center justify-center rounded bg-amber-promo text-[10px] leading-none"
        >
          ✉️
        </span>
        <em>Subscribe &amp; Save 15%</em>
      </button>
    </span>
  );
}

/** Purple promo bar with an infinite marquee (static under reduced motion). */
export function AnnouncementBar() {
  return (
    <div className="bg-grape text-white">
      <Marquee label="Promotions" duration={34} className="py-2">
        <PromoNote />
        <SubscribeNote />
        <PromoNote />
      </Marquee>
    </div>
  );
}
