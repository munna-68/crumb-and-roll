import { createContext, useContext } from 'react';

export interface ToastData {
  id: number;
  message: string;
}

export type ShowToast = (message: string) => void;

export const ToastContext = createContext<ShowToast | null>(null);

export function useToast(): ShowToast {
  const showToast = useContext(ToastContext);
  if (!showToast) throw new Error('useToast must be used inside <ToastProvider>');
  return showToast;
}
