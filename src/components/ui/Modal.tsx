import { useEffect } from 'react';
import { AnimatePresence, m, useReducedMotion } from 'framer-motion';
import type { ReactNode } from 'react';
import { cn } from '../../lib/cn';
import { useFocusTrap } from '../../hooks/useFocusTrap';
import { useLockBodyScroll } from '../../hooks/useLockBodyScroll';

interface ModalProps {
  open: boolean;
  onClose: () => void;
  /** id of the element labelling the dialog */
  labelledBy?: string;
  /** centred card modal or edge-anchored drawer */
  variant?: 'center' | 'drawer';
  side?: 'left' | 'right';
  panelClassName?: string;
  children: ReactNode;
}

/**
 * Shared overlay shell: backdrop fade, ESC to close, focus trap, body scroll
 * lock and reduced-motion aware panel animation.
 */
export function Modal({
  open,
  onClose,
  labelledBy,
  variant = 'center',
  side = 'right',
  panelClassName,
  children,
}: ModalProps) {
  const reduce = useReducedMotion();
  const panelRef = useFocusTrap<HTMLDivElement>(open);
  useLockBodyScroll(open);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [open, onClose]);

  const panelMotion =
    variant === 'drawer'
      ? {
          initial: reduce ? { opacity: 0 } : { x: side === 'right' ? '102%' : '-102%' },
          animate: reduce ? { opacity: 1 } : { x: 0 },
          exit: reduce ? { opacity: 0 } : { x: side === 'right' ? '102%' : '-102%' },
          transition: { duration: 0.38, ease: [0.22, 1, 0.36, 1] as const },
        }
      : {
          initial: reduce ? { opacity: 0 } : { opacity: 0, scale: 0.95, y: 14 },
          animate: { opacity: 1, scale: 1, y: 0 },
          exit: reduce ? { opacity: 0 } : { opacity: 0, scale: 0.97, y: 10 },
          transition: { type: 'spring' as const, stiffness: 380, damping: 32 },
        };

  return (
    <AnimatePresence>
      {open && (
        <div
          className={cn(
            'fixed inset-0 z-[60]',
            variant === 'center' && 'flex items-center justify-center p-4',
            variant === 'drawer' && (side === 'right' ? 'flex justify-end' : 'flex justify-start'),
          )}
          onClick={onClose}
        >
          <m.div
            aria-hidden="true"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="absolute inset-0 bg-black/60 backdrop-blur-xs"
          />
          <m.div
            ref={panelRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby={labelledBy}
            tabIndex={-1}
            onClick={(event) => event.stopPropagation()}
            initial={panelMotion.initial}
            animate={panelMotion.animate}
            exit={panelMotion.exit}
            transition={panelMotion.transition}
            className={cn(variant === 'center' && 'relative', panelClassName)}
          >
            {children}
          </m.div>
        </div>
      )}
    </AnimatePresence>
  );
}
