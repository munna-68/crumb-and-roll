import { useRef } from 'react';
import { m, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import type { ReactNode } from 'react';

interface ParallaxProps {
  children: ReactNode;
  className?: string;
  /** pixels of travel across the viewport pass (positive = drifts up) */
  strength?: number;
}

/** Subtle scroll-linked drift for decorative elements. No-op under reduced motion. */
export function Parallax({ children, className, strength = 16 }: ParallaxProps) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });
  const y = useTransform(scrollYProgress, [0, 1], [strength, -strength]);

  return (
    <m.div ref={ref} className={className} style={reduce ? undefined : { y }}>
      {children}
    </m.div>
  );
}
