import { useProducts } from '@/modules/product/application/use-products';
import ProductCard from './ProductCard';
import ProductCardSkeleton from './ProductCardSkeleton';

export default function ProductList() {
  const { data: products, isLoading, isError, error } = useProducts();

  if (isLoading) {
    return (
      <div className="w-full max-w-375 mx-auto px-6 py-8">
        <div className="grid grid-cols-[repeat(auto-fill,minmax(15rem,1fr))] gap-6">
          {Array.from({ length: 8 }).map((_, index) => (
            <ProductCardSkeleton key={index} />
          ))}
        </div>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="w-full max-w-375 mx-auto px-6 py-12 text-center">
        <div className="bg-red-950/50 backdrop-blur-sm border border-red-500/30 rounded-lg p-6 max-w-md mx-auto">
          <p className="text-red-300 font-medium">Error al cargar productos</p>
          <p className="text-red-400 text-sm mt-2">{error?.message}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full max-w-375 mx-auto px-6 py-8">
      <div className="grid grid-cols-[repeat(auto-fill,minmax(15rem,1fr))] gap-6">
        {products?.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
