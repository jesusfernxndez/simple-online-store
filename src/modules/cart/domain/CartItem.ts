import type { Product } from '@/modules/product/domain/Product';

export interface CartItem {
  product: Product;
  addedAt: Date;
}
