import { useId } from 'react';
import { m, useReducedMotion } from 'framer-motion';
import { cn } from '../../lib/cn';

/* ---------------------------------------------------------------------------
   Hand-drawn SVG doodles & botanical line art, ported from the reference
   design file. Pure decoration — marked aria-hidden where appropriate.
   --------------------------------------------------------------------------- */

interface DoodleProps {
  className?: string;
}

/** Animated orange steam curls. Falls back to a static drawing under reduced motion. */
export function SteamLines({ className = 'w-8 h-8' }: DoodleProps) {
  const reduce = useReducedMotion();
  const paths = [
    { d: 'M10 32C8 26 14 22 12 16C10 10 15 6 13 2', delay: 0 },
    { d: 'M20 33C18 27 24 23 22 17C20 11 25 7 23 3', delay: 0.45 },
    { d: 'M30 32C28 26 34 22 32 16C30 10 35 6 33 2', delay: 0.9 },
  ];

  return (
    <svg
      viewBox="0 0 40 36"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {paths.map((path, index) =>
        reduce ? (
          <path
            key={index}
            d={path.d}
            stroke="#FF6B2B"
            strokeWidth="2.8"
            strokeLinecap="round"
          />
        ) : (
          <m.path
            key={index}
            d={path.d}
            stroke="#FF6B2B"
            strokeWidth="2.8"
            strokeLinecap="round"
            initial={{ opacity: 0.25, y: 3 }}
            animate={{ opacity: [0.15, 1, 0.15], y: [3, -2, 3] }}
            transition={{
              duration: 2.8,
              delay: path.delay,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        ),
      )}
    </svg>
  );
}

/** Bursting cookie crumbs — sits above the ORDER NOW button. */
export function CookieCrumbs({ className = 'w-10 h-10' }: DoodleProps) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <circle cx="24" cy="24" r="20" fill="#FFFDF9" />
      <path d="M18 14C19.5 13 22 14.5 21 16.5C20 18.5 17 17.5 18 14Z" fill="#331B15" />
      <path d="M28 12C30 11.5 31.5 13.5 30 15C28.5 16.5 26.5 14 28 12Z" fill="#331B15" />
      <circle cx="23" cy="22" r="2.2" fill="#331B15" />
      <path d="M32 21C34 20.5 35 23 33.5 24.5C32 26 30 23.5 32 21Z" fill="#331B15" />
      <circle cx="15" cy="24" r="1.8" fill="#331B15" />
      <path d="M20 29C22 28.5 23 31 21 32C19 33 18.5 30 20 29Z" fill="#331B15" />
      <circle cx="29" cy="30" r="2" fill="#331B15" />
      <circle cx="25" cy="16" r="1.3" fill="#331B15" />
      <circle cx="35" cy="16" r="1.4" fill="#331B15" />
    </svg>
  );
}

/** Outline loaf sketch used across the yellow cards. */
export function SketchedLoaf({ className = 'w-28 h-24' }: DoodleProps) {
  return (
    <svg
      viewBox="0 0 140 110"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M15 72C8 55 22 30 52 18C82 6 115 12 126 30C135 45 122 68 95 82C65 96 24 90 15 72Z"
        stroke="#331B15"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path d="M38 30C52 34 65 48 68 62" stroke="#331B15" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M58 21C72 26 85 40 88 54" stroke="#331B15" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M80 16C94 21 105 33 108 46" stroke="#331B15" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M24 52C36 56 48 68 50 78" stroke="#331B15" strokeWidth="1.6" strokeLinecap="round" />
      <path
        d="M22 74C45 84 85 78 118 52"
        stroke="#331B15"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeDasharray="4 4"
      />
    </svg>
  );
}

interface SketchedCookieProps extends DoodleProps {
  strokeColor?: string;
}

/** Outline cookie sketch with chocolate chips. */
export function SketchedCookie({
  className = 'w-20 h-20',
  strokeColor = '#331B15',
}: SketchedCookieProps) {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M50 8C72 7 91 24 92 48C93 72 75 91 51 92C26 93 9 75 8 51C7 27 28 9 50 8Z"
        stroke={strokeColor}
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      <ellipse cx="35" cy="32" rx="6" ry="4.5" transform="rotate(-15 35 32)" stroke={strokeColor} strokeWidth="2" />
      <ellipse cx="62" cy="28" rx="5" ry="6" transform="rotate(20 62 28)" stroke={strokeColor} strokeWidth="2" />
      <ellipse cx="70" cy="54" rx="6.5" ry="5" transform="rotate(-10 70 54)" stroke={strokeColor} strokeWidth="2" />
      <ellipse cx="46" cy="52" rx="5.5" ry="5.5" stroke={strokeColor} strokeWidth="2" />
      <ellipse cx="30" cy="64" rx="6" ry="4.5" transform="rotate(25 30 64)" stroke={strokeColor} strokeWidth="2" />
      <ellipse cx="58" cy="74" rx="6" ry="4.5" transform="rotate(-18 58 74)" stroke={strokeColor} strokeWidth="2" />
      <circle cx="48" cy="22" r="2" fill={strokeColor} />
      <circle cx="22" cy="46" r="2.2" fill={strokeColor} />
      <circle cx="77" cy="39" r="2" fill={strokeColor} />
      <circle cx="44" cy="78" r="1.8" fill={strokeColor} />
      <path d="M52 38C56 36 60 39 59 43" stroke={strokeColor} strokeWidth="1.6" strokeLinecap="round" />
      <path d="M25 38C29 41 30 46 27 50" stroke={strokeColor} strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

/** Outline swirl pastry used on the brown "CRUNCHY" card. */
export function SketchedSwirlPastry({ className = 'w-28 h-24' }: DoodleProps) {
  return (
    <svg
      viewBox="0 0 130 100"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M65 55C65 48 72 44 78 48C85 53 82 65 72 68C58 72 46 60 50 45C55 26 78 20 94 30C112 42 110 70 92 82C70 96 36 86 24 62C12 38 28 12 58 8"
        stroke="#3D1E0B"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      <path
        d="M20 78C10 72 6 58 14 48C22 38 36 42 38 54"
        stroke="#3D1E0B"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M56 26L60 32M76 24L75 31M92 36L86 41M96 56L89 56"
        stroke="#3D1E0B"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

/** Botanical wheat & rye line art for the dark espresso banners. */
export function BotanicalWheat({ className = 'w-64 h-80' }: DoodleProps) {
  const stalkOne = [0, 1, 2, 3, 4, 5, 6];
  const stalkTwo = [0, 1, 2, 3, 4, 5, 6];

  return (
    <svg
      viewBox="0 0 260 320"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path d="M190 310C185 240 160 150 115 65" stroke="#5A3E36" strokeWidth="2" strokeLinecap="round" />
      <path d="M225 310C220 220 205 130 175 40" stroke="#5A3E36" strokeWidth="2" strokeLinecap="round" />
      <path d="M140 315C130 260 95 200 50 155" stroke="#5A3E36" strokeWidth="2" strokeLinecap="round" />
      {stalkOne.map((i) => (
        <g key={`s1-${i}`} transform={`translate(${120 + i * 9}, ${75 + i * 24}) rotate(-25)`}>
          <ellipse cx="-10" cy="0" rx="12" ry="5" transform="rotate(-30 -10 0)" stroke="#5A3E36" strokeWidth="1.6" />
          <ellipse cx="12" cy="-4" rx="12" ry="5" transform="rotate(30 12 -4)" stroke="#5A3E36" strokeWidth="1.6" />
          <path d="M-20 -6L-32 -14M20 -10L32 -20" stroke="#5A3E36" strokeWidth="1.2" strokeLinecap="round" />
        </g>
      ))}
      {stalkTwo.map((i) => (
        <g key={`s2-${i}`} transform={`translate(${178 + i * 6}, ${55 + i * 26}) rotate(-12)`}>
          <ellipse cx="-10" cy="0" rx="11" ry="4.5" transform="rotate(-35 -10 0)" stroke="#5A3E36" strokeWidth="1.6" />
          <ellipse cx="10" cy="-3" rx="11" ry="4.5" transform="rotate(35 10 -3)" stroke="#5A3E36" strokeWidth="1.6" />
        </g>
      ))}
      <g transform="translate(85, 195) rotate(-32)">
        <rect x="0" y="0" width="38" height="110" rx="19" stroke="#5A3E36" strokeWidth="1.8" />
        <path d="M6 20H32M4 36H34M4 52H34M4 68H34M6 84H32" stroke="#5A3E36" strokeWidth="1.4" />
        <path d="M13 6V104M25 6V104" stroke="#5A3E36" strokeWidth="1.4" />
      </g>
    </svg>
  );
}

/** Orange circle badge with a bitten-cookie glyph. Used as an inline sticker. */
export function BittenCookieBadge({ className = 'w-9 h-9' }: DoodleProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center justify-center rounded-full bg-tangerine text-white shadow-sm align-middle',
        className,
      )}
      aria-hidden="true"
    >
      <svg viewBox="0 0 32 32" fill="none" className="w-2/3 h-2/3">
        <path
          d="M25 17C25 21.9706 20.9706 26 16 26C11.0294 26 7 21.9706 7 17C7 12.0294 11.0294 8 16 8C16.8 8 17.5 8.1 18.2 8.3C17.8 9.8 18.6 11.5 20.2 12C20.8 12.2 21.5 12.1 22 11.9C22.2 13.6 23.4 15 25 15.3C25 15.9 25 16.4 25 17Z"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="13" cy="14" r="1.3" fill="white" />
        <circle cx="15" cy="20" r="1.4" fill="white" />
        <circle cx="11" cy="18" r="1.1" fill="white" />
        <circle cx="19" cy="17" r="1.3" fill="white" />
        <circle cx="18" cy="22" r="1.1" fill="white" />
      </svg>
    </span>
  );
}

/** Light-blue wavy squiggle underline. */
export function WavySquiggle({ className = 'w-16 h-4' }: DoodleProps) {
  return (
    <svg
      viewBox="0 0 80 20"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M3 12C9 4 15 4 21 12C27 20 33 20 39 12C45 4 51 4 57 12C63 20 69 20 76 10"
        stroke="#8CD0E3"
        strokeWidth="4.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

/** Friendly illustrated vintage baker avatar (yellow circle). */
export function BakerAvatar({ className = 'w-12 h-12' }: DoodleProps) {
  return (
    <div
      className={cn(
        'rounded-full bg-lemon-soft border-2 border-espresso flex items-center justify-center overflow-hidden shadow-sm',
        className,
      )}
      aria-hidden="true"
    >
      <svg viewBox="0 0 64 64" fill="none" className="w-full h-full">
        <circle cx="32" cy="32" r="30" fill="#FDE624" />
        <path d="M14 62C16 49 24 46 32 46C40 46 48 49 50 62" fill="#75421E" stroke="#331B15" strokeWidth="2.2" />
        <path d="M24 47L32 53L40 47" fill="#FFF" stroke="#331B15" strokeWidth="2" />
        <rect x="28" y="38" width="8" height="10" fill="#FCD5B5" stroke="#331B15" strokeWidth="2" />
        <path
          d="M21 26C21 19 25 15 32 15C39 15 43 19 43 26V32C43 38 38 42 32 42C26 42 21 38 21 32V26Z"
          fill="#FCD5B5"
          stroke="#331B15"
          strokeWidth="2.2"
        />
        <path
          d="M19 26C18 18 24 12 32 12C40 12 46 18 45 26C43 22 39 20 32 20C25 20 21 22 19 26Z"
          fill="#FFFFFF"
          stroke="#331B15"
          strokeWidth="2"
        />
        <circle cx="28" cy="28" r="1.6" fill="#331B15" />
        <circle cx="36" cy="28" r="1.6" fill="#331B15" />
        <path d="M28 35C30 37 34 37 36 35" stroke="#331B15" strokeWidth="2" strokeLinecap="round" />
      </svg>
    </div>
  );
}

/** Rotating "For the whole family" stamp badge with a lemon centre. */
export function RotatingStampBadge({ className = '' }: DoodleProps) {
  const reduce = useReducedMotion();
  const pathId = useId();

  return (
    <m.div
      className={cn('relative w-28 h-28 flex items-center justify-center select-none', className)}
      whileHover={reduce ? undefined : { scale: 1.06, rotate: 6 }}
      transition={{ type: 'spring', stiffness: 260, damping: 18 }}
    >
      <svg
        viewBox="0 0 120 120"
        className={cn('w-full h-full', !reduce && 'animate-spin-slow')}
        aria-hidden="true"
      >
        <defs>
          <path id={pathId} d="M 60, 60 m -44, 0 a 44,44 0 1,1 88,0 a 44,44 0 1,1 -88,0" />
        </defs>
        <text fill="#331B15" fontSize="10.5" fontWeight="800" letterSpacing="2.6px" className="font-display">
          <textPath href={`#${pathId}`} startOffset="0%">
            • FOR THE WHOLE FAMILY • FUN
          </textPath>
        </text>
      </svg>
      <div className="absolute w-14 h-14 rounded-full bg-lemon-soft flex items-center justify-center shadow-inner border border-espresso/20">
        <svg viewBox="0 0 32 32" fill="none" className="w-7 h-7" aria-hidden="true">
          <path
            d="M24 16C24 20.4183 20.4183 24 16 24C11.5817 24 8 20.4183 8 16C8 11.5817 11.5817 8 16 8C16.7 8 17.4 8.1 18 8.3C17.7 9.6 18.4 11 19.8 11.5C20.3 11.7 20.9 11.6 21.4 11.4C21.6 12.9 22.6 14.1 24 14.4V16Z"
            stroke="#331B15"
            strokeWidth="2"
          />
          <circle cx="13" cy="14" r="1.2" fill="#331B15" />
          <circle cx="15" cy="19" r="1.3" fill="#331B15" />
          <circle cx="18" cy="16" r="1.2" fill="#331B15" />
        </svg>
      </div>
    </m.div>
  );
}

/** Orange curved accent rays used on dark banners next to photos. */
export function OrangeRays({ className = 'w-11 h-11' }: DoodleProps) {
  return (
    <svg
      viewBox="0 0 50 50"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path d="M10 8 C28 8, 40 20, 40 38" stroke="#FF6B2B" strokeWidth="4.5" strokeLinecap="round" />
      <path d="M16 20 C24 20, 30 26, 30 34" stroke="#FF6B2B" strokeWidth="4.5" strokeLinecap="round" />
    </svg>
  );
}

/** Soft yellow loop drawn behind the "WITH ENOUGH" headline. */
export function YellowLoop({ className = 'w-28 h-28' }: DoodleProps) {
  return (
    <svg
      viewBox="0 0 120 120"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M10 95 C45 105, 85 80, 75 45 C68 20, 35 15, 25 40 C15 65, 50 95, 95 85"
        stroke="#E8F086"
        strokeWidth="10"
        strokeLinecap="round"
      />
    </svg>
  );
}

/** Small orange splash rays that sit next to the round cookie in a headline. */
export function OrangeSplash({ className = 'w-7 h-7' }: DoodleProps) {
  return (
    <svg
      viewBox="0 0 36 36"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path d="M6 16C8 10 14 8 16 12" stroke="#FF6B2B" strokeWidth="3.5" strokeLinecap="round" />
      <path d="M16 20C22 17 26 20 23 25" stroke="#FF6B2B" strokeWidth="3.5" strokeLinecap="round" />
      <circle cx="24" cy="10" r="2.5" fill="#FF6B2B" />
    </svg>
  );
}
