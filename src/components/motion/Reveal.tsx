import { m, useReducedMotion } from 'framer-motion';
import type { ReactNode } from 'react';

const EASE = [0.22, 1, 0.36, 1] as const;

interface RevealProps {
  children: ReactNode;
  className?: string;
  /** seconds before the reveal starts */
  delay?: number;
  /** distance travelled */
  y?: number;
  amount?: number;
}

/** Fade + rise as the element scrolls into view. Respects reduced motion. */
export function Reveal({ children, className, delay = 0, y = 26, amount = 0.25 }: RevealProps) {
  const reduce = useReducedMotion();
  return (
    <m.div
      className={className}
      initial={reduce ? false : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount, margin: '0px 0px -48px 0px' }}
      transition={{ duration: 0.65, delay, ease: EASE }}
    >
      {children}
    </m.div>
  );
}

interface RevealGroupProps {
  children: ReactNode;
  className?: string;
  stagger?: number;
  delay?: number;
}

/** Parent for staged reveals — pair with <RevealItem>. */
export function RevealGroup({ children, className, stagger = 0.09, delay = 0 }: RevealGroupProps) {
  return (
    <m.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2, margin: '0px 0px -48px 0px' }}
      variants={{
        hidden: {},
        show: { transition: { staggerChildren: stagger, delayChildren: delay } },
      }}
    >
      {children}
    </m.div>
  );
}

export function RevealItem({ children, className }: { children: ReactNode; className?: string }) {
  const reduce = useReducedMotion();
  return (
    <m.div
      className={className}
      variants={{
        hidden: reduce ? { opacity: 1 } : { opacity: 0, y: 22 },
        show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: EASE } },
      }}
    >
      {children}
    </m.div>
  );
}
