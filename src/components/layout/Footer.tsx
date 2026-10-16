import { Facebook, Instagram, Twitter } from 'lucide-react';
import { useToast } from '../../context/toast';
import { scrollToTop } from '../../lib/scroll';

const SOCIALS = [
  { icon: Instagram, label: 'Instagram' },
  { icon: Facebook, label: 'Facebook' },
  { icon: Twitter, label: 'Twitter' },
] as const;

export function Footer() {
  const showToast = useToast();

  return (
    <footer className="bg-cream px-4 pt-2 pb-8 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-[1220px]">
        <div className="flex flex-col items-center justify-between gap-4 rounded-2xl bg-espresso-deep px-6 py-5 text-white sm:flex-row">
          <p className="text-xs font-medium text-white/75">
            Designed by <span className="font-bold text-white">@ui-collective</span>
          </p>

          <a
            href="#top"
            onClick={(event) => {
              event.preventDefault();
              scrollToTop();
            }}
            className="flex items-baseline font-display text-2xl tracking-tight text-white"
          >
            ROLLIN
            <span className="ml-0.5 text-3xl leading-none text-tangerine">.</span>
          </a>

          <div className="flex items-center gap-3">
            <span className="mr-1 text-xs font-medium text-white/75">Follow us on :</span>
            {SOCIALS.map(({ icon: Icon, label }) => (
              <button
                key={label}
                type="button"
                onClick={() => showToast(`Following ROLLIN. on ${label}!`)}
                aria-label={`Follow ROLLIN. on ${label}`}
                className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-lg border border-white/30 transition-colors hover:border-lemon hover:bg-lemon hover:text-espresso"
              >
                <Icon className="h-3.5 w-3.5" aria-hidden="true" />
              </button>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
