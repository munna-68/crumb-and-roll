import type { CSSProperties, ReactNode } from 'react';
import { cn } from '../../lib/cn';

interface MarqueeProps {
  children: ReactNode;
  className?: string;
  /** seconds for a full loop */
  duration?: number;
  label?: string;
}

/**
 * Seamless CSS marquee. The second copy is aria-hidden + inert (generic
 * duplicate), and users with reduced motion get a static, centred row.
 * Pauses on hover.
 */
export function Marquee({ children, className, duration = 32, label }: MarqueeProps) {
  const trackStyle: CSSProperties = { animationDuration: `${duration}s` };

  return (
    <div className={cn('relative overflow-hidden', className)} aria-label={label}>
      {/* Reduced motion: static, fully accessible copy */}
      <div className="hidden items-center justify-center motion-reduce:flex">
        {children}
      </div>

      {/* Animated track: copy 1 is the accessible one, copy 2 is decorative */}
      <div
        className="flex w-max animate-marquee hover:[animation-play-state:paused] motion-reduce:hidden"
        style={trackStyle}
      >
        <div className="flex shrink-0 items-center">{children}</div>
        <div className="flex shrink-0 items-center" aria-hidden="true" inert>
          {children}
        </div>
      </div>
    </div>
  );
}
