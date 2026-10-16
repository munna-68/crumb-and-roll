import { useState } from 'react';
import { AnimatePresence, m } from 'framer-motion';
import { ChevronDown, X } from 'lucide-react';
import { Modal } from '../ui/Modal';
import { OrganicButton } from '../brand/OrganicButton';
import { useUI } from '../../context/ui';
import { useCart } from '../../context/cart';
import { useToast } from '../../context/toast';
import { NAV_DROPDOWNS } from '../../data/navigation';
import type { NavDropdown } from '../../data/navigation';
import { HERO_VARIANT, SECTION_IDS } from '../../config/site';
import { scrollToSection } from '../../lib/scroll';
import type { CategoryFilter } from '../../data/categories';

const ITEM_MOTION = {
  hidden: { opacity: 0, x: 22 },
  show: { opacity: 1, x: 0, transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] as const } },
};

interface MenuGroupProps {
  dropdown: NavDropdown;
  expanded: boolean;
  onToggle: () => void;
  onSelect: (label: string, category: CategoryFilter) => void;
}

function MenuGroup({ dropdown, expanded, onToggle, onSelect }: MenuGroupProps) {
  const submenuId = `menu-group-${dropdown.id}`;

  return (
    <m.li variants={ITEM_MOTION}>
      <button
        type="button"
        aria-expanded={expanded}
        aria-controls={submenuId}
        onClick={onToggle}
        className="flex w-full cursor-pointer items-center justify-between py-3 font-display text-2xl tracking-wide text-espresso uppercase transition-colors hover:text-tangerine"
      >
        {dropdown.label}
        <ChevronDown
          className={`h-5 w-5 stroke-[2.6] transition-transform duration-200 ${expanded ? 'rotate-180' : ''}`}
          aria-hidden="true"
        />
      </button>
      <AnimatePresence initial={false}>
        {expanded && (
          <m.ul
            id={submenuId}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            {dropdown.items.map((item) => (
              <li key={item.label}>
                <button
                  type="button"
                  onClick={() => onSelect(item.label, item.category)}
                  className="w-full cursor-pointer rounded-xl px-3 py-2.5 text-left text-sm font-bold text-espresso/80 transition-colors hover:bg-white hover:text-espresso"
                >
                  {item.label}
                </button>
              </li>
            ))}
          </m.ul>
        )}
      </AnimatePresence>
    </m.li>
  );
}

/** Full-height mobile navigation drawer with accordion groups. */
export function MobileMenu() {
  const { overlay, closeOverlay, browseCategory, openOverlay } = useUI();
  const { count } = useCart();
  const showToast = useToast();
  const [expanded, setExpanded] = useState<string | null>(null);
  const open = overlay === 'menu';

  /** Close first (releasing the scroll lock), then navigate. */
  const navigateAfterClose = (action: () => void) => {
    closeOverlay();
    window.setTimeout(action, 440);
  };

  const [BAKERY_GROUP, COOKIES_GROUP] = NAV_DROPDOWNS;

  return (
    <Modal
      open={open}
      onClose={closeOverlay}
      variant="drawer"
      side="right"
      labelledBy="mobile-menu-title"
      panelClassName="relative flex h-full w-[88%] max-w-sm flex-col bg-linen shadow-2xl"
    >
      <div className="flex items-center justify-between px-6 pt-6 pb-2">
        <span
          id="mobile-menu-title"
          className="flex items-baseline font-display text-2xl tracking-tight text-espresso"
        >
          ROLLIN
          <span className="ml-0.5 text-3xl leading-none text-tangerine">.</span>
        </span>
        <button
          type="button"
          onClick={closeOverlay}
          aria-label="Close menu"
          className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-white text-espresso shadow-sm transition-colors hover:bg-tangerine hover:text-white"
        >
          <X className="h-5 w-5" aria-hidden="true" />
        </button>
      </div>

      <nav aria-label="Mobile navigation" className="flex-1 overflow-y-auto px-6 py-2">
        <m.ul
          className="divide-y divide-espresso/8"
          initial="hidden"
          animate="show"
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.055, delayChildren: 0.12 } } }}
        >
          <m.li variants={ITEM_MOTION}>
            <button
              type="button"
              onClick={() => navigateAfterClose(() => browseCategory('CAKE'))}
              className="w-full cursor-pointer py-3 text-left font-display text-2xl tracking-wide text-espresso uppercase transition-colors hover:text-tangerine"
            >
              CAKE
            </button>
          </m.li>

          <MenuGroup
            dropdown={BAKERY_GROUP}
            expanded={expanded === 'bakery'}
            onToggle={() => setExpanded((value) => (value === 'bakery' ? null : 'bakery'))}
            onSelect={(label, category) =>
              navigateAfterClose(() => {
                browseCategory(category);
                showToast(`Browsing ${label}`);
              })
            }
          />

          <m.li variants={ITEM_MOTION}>
            <button
              type="button"
              onClick={() => navigateAfterClose(() => scrollToSection(SECTION_IDS.artForm))}
              className="w-full cursor-pointer py-3 text-left font-display text-2xl tracking-wide text-espresso uppercase transition-colors hover:text-tangerine"
            >
              ABOUT US
            </button>
          </m.li>

          <MenuGroup
            dropdown={COOKIES_GROUP}
            expanded={expanded === 'cookies'}
            onToggle={() => setExpanded((value) => (value === 'cookies' ? null : 'cookies'))}
            onSelect={(label, category) =>
              navigateAfterClose(() => {
                browseCategory(category);
                showToast(`Browsing ${label}`);
              })
            }
          />

          <m.li variants={ITEM_MOTION}>
            <button
              type="button"
              onClick={() => openOverlay('subscribe')}
              className="w-full cursor-pointer py-3 text-left font-display text-2xl tracking-wide text-espresso uppercase transition-colors hover:text-tangerine"
            >
              CONTACT
            </button>
          </m.li>
        </m.ul>
      </nav>

      <div className="space-y-3 border-t border-espresso/10 p-6">
        <OrganicButton
          size="lg"
          className="w-full"
          onClick={() => navigateAfterClose(() => scrollToSection(SECTION_IDS.products))}
        >
          {HERO_VARIANT === 'art' ? 'SHOP ONLINE' : 'START BAKING'}
        </OrganicButton>
        <button
          type="button"
          onClick={() => openOverlay('cart')}
          className="w-full cursor-pointer rounded-2xl border-2 border-espresso/15 bg-white py-3 text-sm font-extrabold text-espresso uppercase transition-colors hover:border-espresso/40"
        >
          View bag ({count})
        </button>
      </div>
    </Modal>
  );
}
