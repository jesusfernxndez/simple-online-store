import type { ProductRepository } from '@/modules/product/domain/ProductRepository';
import type { Product } from '@/modules/product/domain/Product';
import type { ProductDTO } from './ProductDTO';
import { ProductMapper } from './ProductMapper';

export class ProductApiRepository implements ProductRepository {
  private readonly baseUrl: string;

  constructor(baseUrl: string = 'https://fakestoreapi.com/products') {
    this.baseUrl = baseUrl;
  }

  async getAll(): Promise<Product[]> {
    const response = await fetch(this.baseUrl);

    if (!response.ok) {
      throw new Error(`Failed to fetch products: ${response.statusText}`);
    }

    const data: ProductDTO[] = await response.json();
    return ProductMapper.fromDTOList(data);
  }

  async getById(id: string): Promise<Product> {
    const response = await fetch(`${this.baseUrl}/${id}`);

    if (!response.ok) {
      throw new Error(`Failed to fetch product ${id}: ${response.statusText}`);
    }

    const data: ProductDTO = await response.json();
    return ProductMapper.fromDTO(data);
  }
}
