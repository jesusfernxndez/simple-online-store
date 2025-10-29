import { useQuery } from '@tanstack/react-query';
import ProductRepositoryFactory from '@/modules/product/infrastructure/ProductRepositoryFactory';

export const useProducts = () => {
  const productRepository = ProductRepositoryFactory.getInstance();

  return useQuery({
    queryKey: ['products'],
    queryFn: () => productRepository.getAll(),
  });
};
