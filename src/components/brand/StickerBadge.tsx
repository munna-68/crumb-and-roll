import { m, useReducedMotion } from 'framer-motion';
import type { ReactNode } from 'react';
import { cn } from '../../lib/cn';

interface StickerBadgeProps {
  children: ReactNode;
  className?: string;
  /** resting rotation in degrees */
  rotate?: number;
}

/**
 * Playful pill sticker (TASTY / CRUNCHY / FRESH / COMBO …). Wiggles on hover.
 * Position it with a plain wrapper element so CSS positioning can't fight
 * Framer's transform.
 */
export function StickerBadge({ children, className, rotate = 0 }: StickerBadgeProps) {
  const reduce = useReducedMotion();

  return (
    <m.span
      style={{ rotate }}
      whileHover={reduce ? undefined : { rotate: rotate + 7, scale: 1.09, y: -2 }}
      transition={{ type: 'spring', stiffness: 340, damping: 15 }}
      className={cn(
        'inline-flex items-center justify-center rounded-full px-4 py-1 font-display tracking-wider whitespace-nowrap text-white uppercase shadow-md',
        className,
      )}
    >
      {children}
    </m.span>
  );
}
