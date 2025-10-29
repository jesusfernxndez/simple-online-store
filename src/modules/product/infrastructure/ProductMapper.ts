import type { Product } from '@/modules/product/domain/Product';
import type { ProductDTO } from './ProductDTO';

export class ProductMapper {
  static fromDTO(dto: ProductDTO): Product {
    return {
      id: String(dto.id),
      title: dto.title,
      description: dto.description,
      price: dto.price,
      image: dto.image,
    };
  }

  static fromDTOList(dtos: ProductDTO[]): Product[] {
    return dtos.map(dto => this.fromDTO(dto));
  }
}
