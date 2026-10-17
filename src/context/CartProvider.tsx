import { useCallback, useEffect, useMemo, useReducer } from 'react';
import type { ReactNode } from 'react';
import { bake } from '../lib/images';
import { PROMO } from '../config/site';
import { CartContext, type AddToCartInput, type CartApi, type CartItem } from './cart';
import { useToast } from './toast';

type CartAction =
  | { type: 'add'; item: AddToCartInput }
  | { type: 'increment'; id: string }
  | { type: 'decrement'; id: string }
  | { type: 'remove'; id: string }
  | { type: 'clear' };

const STORAGE_KEY = 'rollin.cart.v1';

/** The reference opens with two seeded items so the bag is explorable. */
function createSeedCart(): CartItem[] {
  return [
    {
      id: 'wheat-baked',
      name: 'Real Wheat Baked Cookies (Pack)',
      price: 16,
      qty: 1,
      image: bake('cookie-round', 400),
    },
    {
      id: 'bagel-buns',
      name: 'Bagel Buns (Gluten Free)',
      price: 16,
      qty: 1,
      image: bake('bagel-buns', 400),
    },
  ];
}

function readStoredCart(): CartItem[] | null {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const parsed: unknown = JSON.parse(raw);
    if (!Array.isArray(parsed)) return null;
    return parsed.filter(
      (entry): entry is CartItem =>
        typeof entry === 'object' &&
        entry !== null &&
        typeof (entry as CartItem).id === 'string' &&
        typeof (entry as CartItem).name === 'string' &&
        typeof (entry as CartItem).price === 'number' &&
        typeof (entry as CartItem).qty === 'number',
    );
  } catch {
    return null;
  }
}

function cartReducer(state: CartItem[], action: CartAction): CartItem[] {
  switch (action.type) {
    case 'add': {
      const existing = state.find((item) => item.id === action.item.id);
      if (existing) {
        return state.map((item) =>
          item.id === action.item.id ? { ...item, qty: item.qty + 1 } : item,
        );
      }
      return [...state, { ...action.item, qty: 1 }];
    }
    case 'increment':
      return state.map((item) =>
        item.id === action.id ? { ...item, qty: item.qty + 1 } : item,
      );
    case 'decrement':
      return state
        .map((item) =>
          item.id === action.id ? { ...item, qty: Math.max(0, item.qty - 1) } : item,
        )
        .filter((item) => item.qty > 0);
    case 'remove':
      return state.filter((item) => item.id !== action.id);
    case 'clear':
      return [];
  }
}

export function CartProvider({ children }: { children: ReactNode }) {
  const showToast = useToast();
  const [items, dispatch] = useReducer(cartReducer, null, () => readStoredCart() ?? createSeedCart());

  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    } catch {
      /* storage unavailable (private mode) — cart still works in memory */
    }
  }, [items]);

  const addItem = useCallback(
    (input: AddToCartInput) => {
      dispatch({ type: 'add', item: input });
      showToast(`Added "${input.name}" to your bakery bag!`);
    },
    [showToast],
  );

  const increment = useCallback((id: string) => dispatch({ type: 'increment', id }), []);
  const decrement = useCallback((id: string) => dispatch({ type: 'decrement', id }), []);
  const remove = useCallback((id: string) => dispatch({ type: 'remove', id }), []);
  const clear = useCallback(() => dispatch({ type: 'clear' }), []);

  const value = useMemo<CartApi>(() => {
    const count = items.reduce((acc, item) => acc + item.qty, 0);
    const subtotal = items.reduce((acc, item) => acc + item.price * item.qty, 0);
    const discount = subtotal >= PROMO.threshold ? subtotal * PROMO.rate : 0;
    return {
      items,
      count,
      subtotal,
      discount,
      total: subtotal - discount,
      addItem,
      increment,
      decrement,
      remove,
      clear,
    };
  }, [items, addItem, increment, decrement, remove, clear]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}
