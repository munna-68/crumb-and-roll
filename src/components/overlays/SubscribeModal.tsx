import { useState } from 'react';
import type { FormEvent } from 'react';
import { X } from 'lucide-react';
import { Modal } from '../ui/Modal';
import { OrganicButton } from '../brand/OrganicButton';
import { BittenCookieBadge } from '../brand/Doodles';
import { useUI } from '../../context/ui';
import { useToast } from '../../context/toast';
import { PROMO } from '../../config/site';

/** "Subscribe & Save 15%" signup modal with working local form state. */
export function SubscribeModal() {
  const { overlay, closeOverlay } = useUI();
  const showToast = useToast();
  const [email, setEmail] = useState('');
  const open = overlay === 'subscribe';

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setEmail('');
    closeOverlay();
    showToast(`Welcome to the ROLLIN. family! Code ${PROMO.code} unlocked.`);
  };

  return (
    <Modal
      open={open}
      onClose={closeOverlay}
      labelledBy="subscribe-title"
      panelClassName="relative w-full max-w-md overflow-hidden rounded-[36px] border-4 border-lemon bg-espresso-deep p-6 text-white shadow-2xl sm:p-8"
    >
      <button
        type="button"
        onClick={closeOverlay}
        aria-label="Close the subscribe dialog"
        className="absolute top-5 right-5 flex h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-tangerine"
      >
        <X className="h-5 w-5" aria-hidden="true" />
      </button>

      <BittenCookieBadge className="mb-3 h-12 w-12" />
      <h2
        id="subscribe-title"
        className="font-display text-2xl tracking-wide uppercase sm:text-3xl"
      >
        SUBSCRIBE &amp; SAVE 15% ON DAILY BAKES
      </h2>
      <p className="mt-2 text-xs leading-relaxed text-white/80 sm:text-sm">
        Join 4,350+ bread and cookie lovers for warm-out-of-the-oven alerts and secret recipes.
      </p>

      <form onSubmit={handleSubmit} className="mt-5 space-y-3">
        <label htmlFor="subscribe-email" className="sr-only">
          Email address
        </label>
        <input
          id="subscribe-email"
          type="email"
          required
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="Enter your email address..."
          autoComplete="email"
          className="w-full rounded-2xl bg-white px-4 py-3 text-sm font-bold text-espresso placeholder:text-espresso/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-lemon"
        />
        <OrganicButton type="submit" size="md" className="w-full">
          UNLOCK 15% OFF
        </OrganicButton>
      </form>
    </Modal>
  );
}
