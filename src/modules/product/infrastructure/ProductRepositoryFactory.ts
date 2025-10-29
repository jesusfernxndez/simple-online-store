import type { ProductRepository } from '@/modules/product/domain/ProductRepository';
import { ProductApiRepository } from './ProductApiRepository';

class ProductRepositoryFactory {
  private static instance: ProductRepository | null = null;

  static getInstance(): ProductRepository {
    if (!ProductRepositoryFactory.instance) {
      ProductRepositoryFactory.instance = new ProductApiRepository();
    }
    return ProductRepositoryFactory.instance;
  }

  static setInstance(repository: ProductRepository): void {
    ProductRepositoryFactory.instance = repository;
  }

  static resetInstance(): void {
    ProductRepositoryFactory.instance = null;
  }
}

export default ProductRepositoryFactory;
