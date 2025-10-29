import { useState } from 'react';
import type { Product } from '@/modules/product/domain/Product';
import { useCart } from '@/modules/cart/application/use-cart';
import ProductModal from './ProductModal';
import Card from '@/shared/ui/components/Card';
import {
  ProductImage,
  ProductTitle,
  ProductDescription,
  ProductPrice,
  ProductActions,
} from './components';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { addItem, removeItem, isInCart } = useCart();
  const inCart = isInCart(product.id);

  const handleToggleCart = () => {
    if (inCart) {
      removeItem(product.id);
    } else {
      addItem(product);
    }
  };

  const handlePreview = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Card>
        <ProductImage src={product.image} alt={product.title} />

        <div className="px-5 py-4 flex flex-col grow">
          <ProductTitle title={product.title} />
          <ProductDescription description={product.description} />
          <div className="flex items-center justify-end mb-3">
            <ProductPrice price={product.price} />
          </div>
          <ProductActions
            isInCart={inCart}
            onPreview={handlePreview}
            onToggleCart={handleToggleCart}
          />
        </div>
      </Card>

      <ProductModal isOpen={isModalOpen} onClose={handleCloseModal} productId={product.id} />
    </>
  );
}
