import { m, useReducedMotion } from 'framer-motion';
import type { ButtonHTMLAttributes, ReactNode } from 'react';
import { cn } from '../../lib/cn';

const SIZE_CLASSES = {
  sm: 'px-5 py-2 text-xs',
  md: 'px-7 py-3 text-xs sm:text-sm',
  lg: 'px-8 py-3.5 text-sm sm:text-base',
} as const;

type Size = keyof typeof SIZE_CLASSES;

interface OrganicButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  /** small white dot before the label (reference CTA treatment) */
  showDot?: boolean;
  size?: Size;
}

/**
 * ROLLIN.'s signature hand-drawn yellow barrel-pill button. The organic shape
 * is an SVG that stretches behind the label, so it scales with any content.
 */
export function OrganicButton({
  children,
  showDot = false,
  size = 'md',
  className,
  type = 'button',
  ...rest
}: OrganicButtonProps) {
  const reduce = useReducedMotion();

  return (
    <m.button
      type={type}
      whileHover={reduce ? undefined : { y: -2 }}
      whileTap={reduce ? undefined : { scale: 0.97, y: 0 }}
      transition={{ duration: 0.16, ease: 'easeOut' }}
      className={cn(
        'group relative inline-flex cursor-pointer items-center justify-center font-black uppercase tracking-wider text-espresso',
        SIZE_CLASSES[size],
        className,
      )}
      {...rest}
    >
      <svg
        viewBox="0 0 200 64"
        preserveAspectRatio="none"
        aria-hidden="true"
        className="absolute inset-0 h-full w-full drop-shadow-[0_3px_0_rgba(51,27,21,0.18)] transition-[filter] duration-200 group-hover:drop-shadow-[0_5px_0_rgba(51,27,21,0.25)]"
      >
        <path
          d="M28 6 C75 1, 125 1, 172 6 C190 8, 197 20, 197 32 C197 44, 190 56, 172 58 C125 63, 75 63, 28 58 C10 56, 3 44, 3 32 C3 20, 10 8, 28 6 Z"
          fill="#F7E31B"
          stroke="#331B15"
          strokeWidth="3"
          className="transition-colors duration-200 group-hover:fill-[#FFE924]"
        />
      </svg>
      <span className="relative z-10 flex items-center gap-2">
        {showDot && (
          <span className="inline-block h-2 w-2 rounded-full bg-white shadow-sm" />
        )}
        {children}
      </span>
    </m.button>
  );
}
