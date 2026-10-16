import { useCallback, useEffect, useRef, useState } from 'react';
import type { ReactNode } from 'react';
import { ToastContext, type ToastData } from './toast';
import { ToastViewport } from '../components/overlays/ToastViewport';

export function ToastProvider({ children }: { children: ReactNode }) {
  const [toast, setToast] = useState<ToastData | null>(null);
  const counter = useRef(0);
  const timeoutRef = useRef<number | null>(null);

  const showToast = useCallback((message: string) => {
    counter.current += 1;
    setToast({ id: counter.current, message });
    if (timeoutRef.current !== null) window.clearTimeout(timeoutRef.current);
    timeoutRef.current = window.setTimeout(() => setToast(null), 2800);
  }, []);

  const dismiss = useCallback(() => {
    if (timeoutRef.current !== null) window.clearTimeout(timeoutRef.current);
    setToast(null);
  }, []);

  useEffect(
    () => () => {
      if (timeoutRef.current !== null) window.clearTimeout(timeoutRef.current);
    },
    [],
  );

  return (
    <ToastContext.Provider value={showToast}>
      {children}
      <ToastViewport toast={toast} onDismiss={dismiss} />
    </ToastContext.Provider>
  );
}
