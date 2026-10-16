import { AnimatePresence, m } from 'framer-motion';
import type { ToastData } from '../../context/toast';

interface ToastViewportProps {
  toast: ToastData | null;
  onDismiss: () => void;
}

/** Bottom-right toast mirroring the reference's dark pill with lemon border. */
export function ToastViewport({ toast, onDismiss }: ToastViewportProps) {
  return (
    <div
      aria-live="polite"
      aria-atomic="true"
      role="status"
      className="pointer-events-none fixed inset-x-4 bottom-6 z-[70] flex justify-center sm:inset-x-auto sm:right-6 sm:justify-end"
    >
      <AnimatePresence>
        {toast && (
          <m.button
            key={toast.id}
            type="button"
            onClick={onDismiss}
            initial={{ opacity: 0, y: 22, scale: 0.94 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 14, scale: 0.96 }}
            transition={{ type: 'spring', stiffness: 420, damping: 28 }}
            className="pointer-events-auto flex max-w-md cursor-pointer items-center gap-3 rounded-2xl border-2 border-lemon bg-espresso px-5 py-3.5 text-left shadow-2xl"
          >
            <span
              aria-hidden="true"
              className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-lemon text-xs font-black text-espresso"
            >
              ✓
            </span>
            <span className="text-xs font-bold text-white sm:text-sm">{toast.message}</span>
          </m.button>
        )}
      </AnimatePresence>
    </div>
  );
}
