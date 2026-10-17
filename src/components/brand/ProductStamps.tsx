import type { ReactNode } from 'react';
import type { ProductStampId } from '../../data/products';

const STAMP_ART: Record<ProductStampId, ReactNode> = {
  cookies: (
    <>
      <path d="M32 9.5C36.2 9.5 39.8 10.6 43.2 12.2C46.8 13.9 50.1 16.8 52 20.4C53.9 24 54.6 28 54.5 32C54.4 36.2 53.4 40.2 51.2 43.8C49 47.4 45.8 50.2 42 52C38.2 53.8 34.2 54.6 30 54.4C25.8 54.2 21.6 53 18 50.6C14.4 48.2 11.8 44.8 10.4 40.8C9 36.8 9.2 32.4 9.8 28.2C10.4 24 12.2 19.8 15.2 16.6C18.2 13.4 22.2 11.2 26.5 10.1C28.3 9.7 30.1 9.5 32 9.5Z" />
      <path d="M21.5 21.2C21.2 19.5 22.5 18 24.2 18.2C25.5 18.4 26.2 19.8 25.5 21.2C24.8 22.4 22 22.5 21.5 21.2Z" />
      <path d="M36.5 18.5L39.8 17.5L40.6 20.4L37.4 21.2Z" />
      <path d="M29.6 29.8C29.3 28.1 30.8 26.9 32.4 27.3C33.8 27.7 34 29.4 32.9 30.4C31.8 31.3 29.9 31 29.6 29.8Z" />
      <path d="M17 31L19.8 29.8L20.6 32.6L17.8 33.5Z" />
      <path d="M42.2 30.8C42 29.2 43.4 28 44.9 28.5C46.2 29 46.3 30.7 45 31.6C43.9 32.4 42.4 31.9 42.2 30.8Z" />
      <path d="M23 41.8C22.8 40.2 24.2 39 25.8 39.4C27.1 39.8 27.1 41.5 25.9 42.4C24.8 43.2 23.2 42.8 23 41.8Z" />
      <path d="M36.8 40.2L40 39.3L40.7 42L37.5 42.8Z" />
      <path d="M28.5 16.5C30.2 18.2 31 20.2 30.5 22.5" />
      <path d="M23.2 27.5C25.2 28.8 26.2 30.8 25.5 33.2" />
      <path d="M36.5 33.5C38.5 34.2 40.2 35.5 41 37.5" />
      <path d="M30.5 36.8C31.8 38.8 32 41 31.2 43.2" />
      <path d="M14.2 24.5C15.2 21.8 17 19.4 19.2 17.6" />
      <path d="M46.5 44.2C44.5 46.5 41.8 48.2 38.8 49.2" />
      <circle cx="33.5" cy="14.5" r="1.2" fill="currentColor" stroke="none" />
      <circle cx="45.8" cy="22.8" r="1.2" fill="currentColor" stroke="none" />
      <circle cx="15.8" cy="38.2" r="1.2" fill="currentColor" stroke="none" />
      <circle cx="46.2" cy="37.8" r="1.2" fill="currentColor" stroke="none" />
      <circle cx="31.5" cy="48.5" r="1.2" fill="currentColor" stroke="none" />
      <circle cx="20.5" cy="26.2" r="1.1" fill="currentColor" stroke="none" />
    </>
  ),
  cake: (
    <>
      <path d="M10.5 31.5L36 17.5C44.5 20 51 25 53.5 31.5L28 43.5L10.5 31.5Z" />
      <path d="M10.5 31.5V46.5L28 57L53.5 45V31.5" />
      <path d="M28 43.5V57" />
      <path d="M28 47.2C30 47.2 30.5 44.6 32 44C33.5 43.4 34 48.2 36 47.4C38 46.6 38 42.2 40 41.4C41.8 40.6 42.2 44.6 44 43.8C45.8 43 45.8 39.2 47.8 38.4C49.5 37.8 50 40.5 51.5 39.8L53.5 39" />
      <path d="M10.5 36.5L28 48.5" />
      <path d="M10.5 41.5L28 53" />
      <path d="M28 51.5L53.5 39.5" />
      <path d="M28.2 33.8C26 33.8 25.2 31.6 27.4 30.4C28.6 31.8 30.4 32.2 32.2 32.2C34 32.2 35.8 31.8 37 30.4C39.2 31.6 38.4 33.8 36.2 33.8C34.2 35 30.2 35 28.2 33.8Z" />
      <circle cx="32.2" cy="27.8" r="3.6" />
      <path d="M33.2 24.4C34.8 20.8 38.2 19 41.8 19.8" />
      <path d="M35.5 21.8C37.8 21.2 39.2 22.6 38.2 24.2C36.4 24.2 35.2 23.2 35.5 21.8Z" />
      <circle cx="16.5" cy="37.5" r="1.1" fill="currentColor" stroke="none" />
      <circle cx="22.5" cy="41.8" r="1.1" fill="currentColor" stroke="none" />
      <circle cx="16.5" cy="42.8" r="1.1" fill="currentColor" stroke="none" />
      <circle cx="22.5" cy="47" r="1.1" fill="currentColor" stroke="none" />
      <circle cx="36.5" cy="50.2" r="1.1" fill="currentColor" stroke="none" />
      <circle cx="44.5" cy="46.5" r="1.1" fill="currentColor" stroke="none" />
    </>
  ),
  bretzel: (
    <>
      <path d="M18.5 46C10.2 40.5 7.8 28.5 13.2 19.5C17.2 12.8 26.8 11.8 32 18.2C37.2 11.8 46.8 12.8 50.8 19.5C56.2 28.5 53.8 40.5 45.5 46" />
      <path d="M29.8 24.5C27 19.2 20.2 19.2 17.8 24C15 29.2 17.5 36.2 23.5 38.5C26.8 36 29 31.5 29.8 24.5Z" />
      <path d="M34.2 24.5C37 19.2 43.8 19.2 46.2 24C49 29.2 46.5 36.2 40.5 38.5C37.2 36 35 31.5 34.2 24.5Z" />
      <path d="M23.5 38.5C28.8 42.2 36.8 45.8 44.8 50.8C47.5 52.2 50.2 49.2 48.2 46.8C41.2 42.5 34.2 38.5 29.8 32.8" />
      <path d="M27.5 41.2C24 44 21 46.2 19.2 47.4C16.5 49 14 46.2 16.2 43.8C18.5 41.8 21.2 39.8 23.5 38.5" />
      <path d="M22.2 46.2C28.5 49.8 35.5 49.8 41.8 46.2" />
      <rect x="13" y="25" width="2.4" height="2.4" rx="0.5" transform="rotate(-15 13 25)" />
      <rect x="21" y="15.5" width="2.4" height="2.4" rx="0.5" transform="rotate(12 21 15.5)" />
      <rect x="40.5" y="15.5" width="2.4" height="2.4" rx="0.5" transform="rotate(-12 40.5 15.5)" />
      <rect x="48.5" y="25" width="2.4" height="2.4" rx="0.5" transform="rotate(15 48.5 25)" />
      <circle cx="13.5" cy="33.5" r="1.2" fill="currentColor" stroke="none" />
      <circle cx="50.5" cy="33.5" r="1.2" fill="currentColor" stroke="none" />
      <circle cx="32" cy="45.8" r="1.2" fill="currentColor" stroke="none" />
    </>
  ),
  croissant: (
    <>
      <path d="M21.5 22.5C24.5 14.2 39.5 14.2 42.5 22.5C44 26.8 41.2 32.2 37.8 33.2C34 31.4 30 31.4 26.2 33.2C22.8 32.2 20 26.8 21.5 22.5Z" />
      <path d="M21.6 23.8C15.5 24.5 11.2 29.2 12.2 35.5C13 40 17.2 42.2 21.8 40.5C21.2 36.8 22.8 34.2 26.2 33.2" />
      <path d="M42.4 23.8C48.5 24.5 52.8 29.2 51.8 35.5C51 40 46.8 42.2 42.2 40.5C42.8 36.8 41.2 34.2 37.8 33.2" />
      <path d="M13 38C10.2 42 12 48.2 17.8 49.2C22 49.8 25.2 46.8 24.2 43.2C23.5 41.2 22.5 40.8 21.8 40.5" />
      <path d="M51 38C53.8 42 52 48.2 46.2 49.2C42 49.8 38.8 46.8 39.8 43.2C40.5 41.2 41.5 40.8 42.2 40.5" />
      <path d="M26.2 33.2C24.2 36.5 23.8 40.2 24.2 43.2" />
      <path d="M37.8 33.2C39.8 36.5 40.2 40.2 39.8 43.2" />
      <path d="M26.2 20.5C30 18.8 34 18.8 37.8 20.5" />
      <path d="M25.2 25.5C29.8 23.8 34.2 23.8 38.8 25.5" />
      <path d="M16.5 29.5C15.8 32.8 16.8 35.8 19.2 37.5" />
      <path d="M47.5 29.5C48.2 32.8 47.2 35.8 44.8 37.5" />
      <path d="M15.8 43.5C17.2 45.2 19.5 45.8 21.5 44.8" />
      <path d="M48.2 43.5C46.8 45.2 44.5 45.8 42.5 44.8" />
    </>
  ),
  bagel: (
    <>
      <circle cx="32" cy="32" r="21.5" />
      <circle cx="32" cy="32" r="7" />
      <path d="M23.8 30.2C25.4 26.2 28.6 24.2 32.6 24.2" />
      <path d="M40.2 33.8C38.6 37.8 35.4 39.8 31.4 39.8" />
      <ellipse cx="26" cy="17.8" rx="2.2" ry="1.1" transform="rotate(-20 26 17.8)" />
      <ellipse cx="39.5" cy="19" rx="2.2" ry="1.1" transform="rotate(25 39.5 19)" />
      <ellipse cx="45.5" cy="30.8" rx="2.2" ry="1.1" transform="rotate(75 45.5 30.8)" />
      <ellipse cx="38.8" cy="44.2" rx="2.2" ry="1.1" transform="rotate(-30 38.8 44.2)" />
      <ellipse cx="24.2" cy="43.5" rx="2.2" ry="1.1" transform="rotate(30 24.2 43.5)" />
      <ellipse cx="18" cy="31.5" rx="2.2" ry="1.1" transform="rotate(-70 18 31.5)" />
      <circle cx="32.5" cy="15.5" r="1.3" fill="currentColor" stroke="none" />
      <circle cx="43.8" cy="24.8" r="1.3" fill="currentColor" stroke="none" />
      <circle cx="43.2" cy="38.5" r="1.3" fill="currentColor" stroke="none" />
      <circle cx="31.5" cy="47.2" r="1.3" fill="currentColor" stroke="none" />
      <circle cx="19.5" cy="37.8" r="1.3" fill="currentColor" stroke="none" />
      <circle cx="20.5" cy="23.2" r="1.3" fill="currentColor" stroke="none" />
    </>
  ),
  sourdough: (
    <>
      <path d="M12.5 34.5C10.5 31 12 25 18 23.5C21.5 22.6 25 23.5 27.5 24.8C30 23.5 33.5 22.6 37 23.5C43 25 44.5 31 42.5 34.5V48.5C42.5 50.2 41.2 51.5 39.5 51.5H15.5C13.8 51.5 12.5 50.2 12.5 48.5V34.5Z" />
      <path d="M16.2 47.8V34.2C15.2 31.5 16.5 27.8 20.5 27C23.2 26.5 25.5 27.2 27.5 28.2C29.5 27.2 31.8 26.5 34.5 27C38.5 27.8 39.8 31.5 38.8 34.2V47.8" />
      <path d="M16.5 23.5C17.5 20.2 21 19 25.5 19.5C28.5 19.8 30.8 20.8 32.5 21.8C35 20.5 38.5 19.8 42 20.8C47.5 22.2 49 28 47 31.5V45.5C47 47.2 45.8 48.5 44 48.5H42.5" />
      <path d="M22.5 19.2C26.5 13.5 35.5 11.5 44.5 13.5C51.5 15 55.2 20.8 53.5 26.8L52.8 40.5C52.8 42.5 51.2 44 49.2 44H47" />
      <path d="M31.5 16.8C35.2 15.2 39.5 15.8 42.2 18.2" />
      <path d="M37.5 19.2C41.2 17.6 45.2 18.2 47.8 20.6" />
      <path d="M43.2 22.2C46.5 20.8 49.8 21.5 51.8 23.8" />
      <circle cx="22.5" cy="34.5" r="2.2" />
      <circle cx="32.5" cy="39.5" r="1.8" />
      <circle cx="24" cy="43.2" r="1.4" />
      <circle cx="33.5" cy="32.8" r="1.2" fill="currentColor" stroke="none" />
      <circle cx="19.5" cy="40.2" r="1.2" fill="currentColor" stroke="none" />
      <circle cx="28.2" cy="36.5" r="1.1" fill="currentColor" stroke="none" />
      <circle cx="29.5" cy="44.8" r="1.1" fill="currentColor" stroke="none" />
    </>
  ),
};

interface ProductStampProps {
  stamp: ProductStampId;
  color?: string;
  className?: string;
}

/** Monoline 64×64 product stamp — one bespoke drawing per bake, no outer rings. */
export function ProductStamp({
  stamp,
  color = '#331B15',
  className = 'h-14 w-14',
}: ProductStampProps) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{ color }}
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {STAMP_ART[stamp]}
    </svg>
  );
}
