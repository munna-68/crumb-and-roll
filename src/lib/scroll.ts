import { prefersReducedMotion } from './format';

/** Smooth-scrolls a section into view (instant for reduced-motion users). */
export function scrollToSection(id: string): void {
  document.getElementById(id)?.scrollIntoView({
    behavior: prefersReducedMotion() ? 'auto' : 'smooth',
    block: 'start',
  });
}

export function scrollToTop(): void {
  window.scrollTo({
    top: 0,
    behavior: prefersReducedMotion() ? 'auto' : 'smooth',
  });
}
