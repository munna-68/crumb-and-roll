import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { LazyMotion, MotionConfig, domAnimation } from 'framer-motion';
import '@fontsource/lilita-one/400.css';
import '@fontsource-variable/plus-jakarta-sans';
import './styles/index.css';
import App from './App';
import { ToastProvider } from './context/ToastProvider';
import { CartProvider } from './context/CartProvider';
import { UIProvider } from './context/UIProvider';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* `domAnimation` keeps the motion bundle lean; `reducedMotion="user"`
        makes every component respect the OS motion preference. */}
    <LazyMotion features={domAnimation} strict>
      <MotionConfig reducedMotion="user">
        <ToastProvider>
          <CartProvider>
            <UIProvider>
              <App />
            </UIProvider>
          </CartProvider>
        </ToastProvider>
      </MotionConfig>
    </LazyMotion>
  </StrictMode>,
);
