import { useCartStore } from '@/modules/cart/infrastructure/CartStoreRepository';

export const useCartItemsCount = () => {
  return useCartStore(state => state.items.length);
};
