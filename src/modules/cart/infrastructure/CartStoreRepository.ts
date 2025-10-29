import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { Product } from '@/modules/product/domain/Product';
import type { CartItem } from '@/modules/cart/domain/CartItem';
import type { CartRepository } from '@/modules/cart/domain/CartRepository';

interface CartStore extends CartRepository {
  items: CartItem[];
}

export const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      items: [],

      getItems: () => {
        return get().items;
      },

      addItem: (product: Product) => {
        const { items } = get();
        const exists = items.some(item => item.product.id === product.id);

        if (!exists) {
          const newItem: CartItem = {
            product,
            addedAt: new Date(),
          };
          set({ items: [...items, newItem] });
        }
      },

      removeItem: (productId: string) => {
        set(state => ({
          items: state.items.filter(item => item.product.id !== productId),
        }));
      },

      clearCart: () => {
        set({ items: [] });
      },

      isInCart: (productId: string) => {
        const { items } = get();
        return items.some(item => item.product.id === productId);
      },

      getTotalPrice: () => {
        const { items } = get();
        return items.reduce((total, item) => total + item.product.price, 0);
      },

      getItemsCount: () => {
        const { items } = get();
        return items.length;
      },
    }),
    {
      name: 'cart-storage',
    },
  ),
);
