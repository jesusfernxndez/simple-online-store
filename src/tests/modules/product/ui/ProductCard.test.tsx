import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import ProductCard from '@/modules/product/ui/ProductCard';

// Mock del hook useCart (solo necesitamos que exista)
vi.mock('@/modules/cart/application/use-cart', () => ({
  useCart: () => ({
    isInCart: () => false,
    addItem: vi.fn(),
    removeItem: vi.fn(),
  }),
}));

const mockProduct = {
  id: 1,
  title: 'Test Product',
  description: 'Test Description',
  price: 99.99,
  image: 'test.jpg',
};

const createWrapper = () => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: { retry: false },
    },
  });

  return ({ children }) => (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

describe('ProductCard', () => {
  it('renders product information correctly', () => {
    render(<ProductCard product={mockProduct} />, {
      wrapper: createWrapper(),
    });

    // Verificar que se muestre la información básica del producto
    expect(screen.getByText(mockProduct.title)).toBeInTheDocument();
    expect(screen.getByText(mockProduct.description)).toBeInTheDocument();
    expect(screen.getByText(`S/. ${mockProduct.price.toFixed(2)}`)).toBeInTheDocument();

    // Verificar que la imagen se renderice correctamente
    const productImage = screen.getByRole('img');
    expect(productImage).toHaveAttribute('src', mockProduct.image);
    expect(productImage).toHaveAttribute('alt', mockProduct.title);
  });

  it('renders product card structure correctly', () => {
    render(<ProductCard product={mockProduct} />, {
      wrapper: createWrapper(),
    });

    // Verificar la estructura básica del componente
    expect(screen.getByTestId('product-image')).toBeInTheDocument();
    expect(screen.getByTestId('product-description')).toBeInTheDocument();
    expect(screen.getByTestId('product-actions')).toBeInTheDocument();
  });
});
