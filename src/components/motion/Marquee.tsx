import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from 'react';
import { cn } from '../../lib/cn';

interface MarqueeProps {
  children: ReactNode;
  className?: string;
  /** seconds for a full loop */
  duration?: number;
  label?: string;
}

/**
 * Seamless CSS marquee. Measures the content and renders enough copies to
 * always fill the viewport, so the loop never shows blank space. Extra copies
 * are aria-hidden + inert, users with reduced motion get a static, centred
 * row, and the track pauses on hover.
 */
export function Marquee({ children, className, duration = 32, label }: MarqueeProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [copies, setCopies] = useState(2);

  useEffect(() => {
    const container = containerRef.current;
    const content = contentRef.current;
    if (!container || !content) return;

    const measure = () => {
      const contentWidth = content.getBoundingClientRect().width;
      if (contentWidth <= 0) return;
      const perHalf = Math.max(1, Math.ceil(container.getBoundingClientRect().width / contentWidth));
      setCopies(perHalf * 2);
    };

    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(container);
    observer.observe(content);
    return () => observer.disconnect();
  }, [children]);

  const trackStyle: CSSProperties = { animationDuration: `${(duration * copies) / 2}s` };

  return (
    <div ref={containerRef} className={cn('relative overflow-hidden', className)} aria-label={label}>
      {/* Reduced motion: static, fully accessible copy */}
      <div className="hidden items-center justify-center motion-reduce:flex">
        {children}
      </div>

      {/* Animated track: copy 1 is the accessible one, the rest are decorative */}
      <div
        className="flex w-max animate-marquee hover:[animation-play-state:paused] motion-reduce:hidden"
        style={trackStyle}
      >
        {Array.from({ length: copies }, (_, index) => (
          <div
            key={index}
            ref={index === 0 ? contentRef : undefined}
            className="flex shrink-0 items-center"
            aria-hidden={index > 0 || undefined}
            inert={index > 0}
          >
            {children}
          </div>
        ))}
      </div>
    </div>
  );
}
