import { AnimatePresence, m } from 'framer-motion';
import { Minus, Plus } from 'lucide-react';

interface QuantityStepperProps {
  qty: number;
  onIncrement: () => void;
  onDecrement: () => void;
  /** item name for accessible labels */
  label: string;
}

export function QuantityStepper({ qty, onIncrement, onDecrement, label }: QuantityStepperProps) {
  return (
    <div
      role="group"
      aria-label={`Quantity for ${label}`}
      className="flex items-center gap-1 rounded-xl border border-espresso/10 bg-cream px-1.5 py-1"
    >
      <m.button
        type="button"
        whileTap={{ scale: 0.82 }}
        onClick={onDecrement}
        aria-label={`Decrease quantity of ${label}`}
        className="flex h-7 w-7 items-center justify-center rounded-lg text-espresso transition-colors hover:bg-espresso/5 hover:text-tangerine"
      >
        <Minus className="h-3.5 w-3.5" />
      </m.button>
      <span className="relative block w-5 overflow-hidden text-center text-xs font-extrabold">
        <AnimatePresence mode="popLayout" initial={false}>
          <m.span
            key={qty}
            initial={{ y: 9, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -9, opacity: 0 }}
            transition={{ duration: 0.14 }}
            className="block"
          >
            {qty}
          </m.span>
        </AnimatePresence>
      </span>
      <m.button
        type="button"
        whileTap={{ scale: 0.82 }}
        onClick={onIncrement}
        aria-label={`Increase quantity of ${label}`}
        className="flex h-7 w-7 items-center justify-center rounded-lg text-espresso transition-colors hover:bg-espresso/5 hover:text-tangerine"
      >
        <Plus className="h-3.5 w-3.5" />
      </m.button>
    </div>
  );
}
