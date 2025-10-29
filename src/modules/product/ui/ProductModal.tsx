import { useProductById } from '@/modules/product/application/use-product-by-id';
import { useCart } from '@/modules/cart/application/use-cart';
import Modal from '@/shared/ui/components/Modal';
import Button from '@/shared/ui/components/Button';
import Spinner from '@/shared/ui/components/Spinner';
import ErrorMessage from '@/shared/ui/components/ErrorMessage';
import ProductImage from './components/ProductImage';

interface ProductModalProps {
  isOpen: boolean;
  onClose: () => void;
  productId: string;
}

export default function ProductModal({ isOpen, onClose, productId }: ProductModalProps) {
  const { data: product, isLoading, isError, error } = useProductById(productId);
  const { addItem, removeItem, isInCart } = useCart();

  if (!isOpen) return null;

  const inCart = product ? isInCart(product.id) : false;

  const handleToggleCart = () => {
    if (product) {
      if (inCart) {
        removeItem(product.id);
      } else {
        addItem(product);
      }
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      {isLoading && (
        <div className="flex flex-col items-center justify-center p-12">
          <Spinner size="lg" />
          <p className="text-sm text-purple-300 font-medium">Cargando detalles...</p>
        </div>
      )}

      {isError && (
        <div className="p-6">
          <ErrorMessage
            title="Error al cargar el producto"
            message={error?.message || 'No se pudo cargar el producto'}
          />
        </div>
      )}

      {product && (
        <div className="flex flex-col">
          <ProductImage src={product.image} alt={product.title} className="h-80 rounded-t-xl" />

          <div className="p-6">
            <div className="flex items-start justify-between gap-4 mb-4">
              <h2 className="text-xl font-bold text-gray-100 leading-tight">{product.title}</h2>
              <span className="text-[1.75rem] font-bold bg-linear-to-r from-purple-500 to-violet-500 bg-clip-text text-transparent whitespace-nowrap">
                S/. {product.price.toFixed(2)}
              </span>
            </div>

            <div className="mb-6">
              <h3 className="text-sm font-semibold text-purple-400 mb-2">Descripción</h3>
              <p className="text-sm text-gray-300 leading-relaxed">{product.description}</p>
            </div>

            <div className="flex gap-3">
              <Button
                variant={inCart ? 'danger' : 'primary'}
                size="lg"
                fullWidth
                onClick={handleToggleCart}
              >
                {inCart ? 'Quitar del Carrito' : 'Agregar al Carrito'}
              </Button>
              <Button variant="secondary" size="lg" onClick={onClose}>
                Cerrar
              </Button>
            </div>
          </div>
        </div>
      )}
    </Modal>
  );
}
