import { createContext, useContext } from 'react';

export interface CartItem {
  id: string;
  name: string;
  price: number;
  image: string;
  qty: number;
}

export interface AddToCartInput {
  id: string;
  name: string;
  price: number;
  image: string;
}

export interface CartApi {
  items: CartItem[];
  /** total number of units in the bag */
  count: number;
  subtotal: number;
  /** promo saving once the threshold is reached */
  discount: number;
  /** subtotal minus discount */
  total: number;
  addItem: (input: AddToCartInput) => void;
  increment: (id: string) => void;
  decrement: (id: string) => void;
  remove: (id: string) => void;
  clear: () => void;
}

export const CartContext = createContext<CartApi | null>(null);

export function useCart(): CartApi {
  const cart = useContext(CartContext);
  if (!cart) throw new Error('useCart must be used inside <CartProvider>');
  return cart;
}
