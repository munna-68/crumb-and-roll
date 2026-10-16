import { useEffect } from 'react';

let lockCount = 0;
let previousOverflow = '';
let previousPaddingRight = '';

/** Locks body scroll while `locked` is true (composes safely across overlays). */
export function useLockBodyScroll(locked: boolean): void {
  useEffect(() => {
    if (!locked) return;

    const { body, documentElement } = document;
    if (lockCount === 0) {
      const scrollbarWidth = window.innerWidth - documentElement.clientWidth;
      previousOverflow = body.style.overflow;
      previousPaddingRight = body.style.paddingRight;
      body.style.overflow = 'hidden';
      if (scrollbarWidth > 0) body.style.paddingRight = `${scrollbarWidth}px`;
    }
    lockCount += 1;

    return () => {
      lockCount = Math.max(0, lockCount - 1);
      if (lockCount === 0) {
        body.style.overflow = previousOverflow;
        body.style.paddingRight = previousPaddingRight;
      }
    };
  }, [locked]);
}
