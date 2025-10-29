import { useCartStore } from '@/modules/cart/infrastructure/CartStoreRepository';

export const useCart = () => {
  const items = useCartStore(state => state.items);
  const addItem = useCartStore(state => state.addItem);
  const removeItem = useCartStore(state => state.removeItem);
  const clearCart = useCartStore(state => state.clearCart);
  const isInCart = useCartStore(state => state.isInCart);
  const getTotalPrice = useCartStore(state => state.getTotalPrice);
  const getItemsCount = useCartStore(state => state.getItemsCount);

  return {
    items,
    addItem,
    removeItem,
    clearCart,
    isInCart,
    getTotalPrice,
    getItemsCount,
  };
};
