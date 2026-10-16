import { useToast } from '../../context/toast';
import { scrollToTop } from '../../lib/scroll';

/* Lucide dropped brand glyphs, so these are drawn inline. */
const InstagramGlyph = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-3.5 w-3.5" aria-hidden="true">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const FacebookGlyph = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-3.5 w-3.5" aria-hidden="true">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const TwitterGlyph = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-3.5 w-3.5" aria-hidden="true">
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
  </svg>
);

const SOCIALS = [
  { Glyph: InstagramGlyph, label: 'Instagram' },
  { Glyph: FacebookGlyph, label: 'Facebook' },
  { Glyph: TwitterGlyph, label: 'Twitter' },
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
            {SOCIALS.map(({ Glyph, label }) => (
              <button
                key={label}
                type="button"
                onClick={() => showToast(`Following ROLLIN. on ${label}!`)}
                aria-label={`Follow ROLLIN. on ${label}`}
                className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-lg border border-white/30 transition-colors hover:border-lemon hover:bg-lemon hover:text-espresso"
              >
                <Glyph />
              </button>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
