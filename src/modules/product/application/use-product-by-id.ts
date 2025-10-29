import { useQuery } from '@tanstack/react-query';
import ProductRepositoryFactory from '@/modules/product/infrastructure/ProductRepositoryFactory';

export const useProductById = (id: string) => {
  const productRepository = ProductRepositoryFactory.getInstance();

  return useQuery({
    queryKey: ['products', id],
    queryFn: () => productRepository.getById(id),
    enabled: !!id,
  });
};
