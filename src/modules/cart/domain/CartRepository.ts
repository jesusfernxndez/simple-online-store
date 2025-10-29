import type { CartItem } from './CartItem';
import type { Product } from '@/modules/product/domain/Product';

export interface CartRepository {
  getItems(): CartItem[];
  addItem(product: Product): void;
  removeItem(productId: string): void;
  clearCart(): void;
  isInCart(productId: string): boolean;
  getTotalPrice(): number;
  getItemsCount(): number;
}
