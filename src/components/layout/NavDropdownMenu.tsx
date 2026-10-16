import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, m, useReducedMotion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import type { NavDropdown } from '../../data/navigation';
import { useUI } from '../../context/ui';
import { useToast } from '../../context/toast';

interface NavDropdownMenuProps {
  dropdown: NavDropdown;
}

export function NavDropdownMenu({ dropdown }: NavDropdownMenuProps) {
  const [open, setOpen] = useState(false);
  const { browseCategory } = useUI();
  const showToast = useToast();
  const reduce = useReducedMotion();
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [open]);

  const handleBlur = (event: React.FocusEvent<HTMLDivElement>) => {
    if (!containerRef.current?.contains(event.relatedTarget as Node | null)) {
      setOpen(false);
    }
  };

  return (
    <div
      ref={containerRef}
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      onBlur={handleBlur}
    >
      <button
        type="button"
        aria-expanded={open}
        aria-haspopup="true"
        onClick={() => setOpen((value) => !value)}
        className="flex items-center gap-1 py-2 uppercase transition-colors hover:text-tangerine"
      >
        {dropdown.label}
        <ChevronDown
          className={`h-3.5 w-3.5 stroke-[3] transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
        />
      </button>

      <AnimatePresence>
        {open && (
          <m.div
            initial={reduce ? { opacity: 0 } : { opacity: 0, y: 8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={reduce ? { opacity: 0 } : { opacity: 0, y: 6, scale: 0.99 }}
            transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
            className="absolute top-full left-0 z-40 w-48 rounded-2xl border border-espresso/10 bg-white p-2 shadow-xl"
          >
            {dropdown.items.map((item) => (
              <button
                key={item.label}
                type="button"
                onClick={() => {
                  setOpen(false);
                  browseCategory(item.category);
                  showToast(`Browsing ${item.label}`);
                }}
                className="w-full cursor-pointer rounded-xl px-3 py-2 text-left font-sans text-xs font-bold text-espresso transition-colors hover:bg-cream"
              >
                {item.label}
              </button>
            ))}
          </m.div>
        )}
      </AnimatePresence>
    </div>
  );
}
