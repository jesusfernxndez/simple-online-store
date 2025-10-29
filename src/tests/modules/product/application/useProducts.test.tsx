import { describe, it, expect, beforeEach } from 'vitest';
import { renderHook, waitFor } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useProducts } from '@/modules/product/application/use-products';
import ProductRepositoryFactory from '@/modules/product/infrastructure/ProductRepositoryFactory';

const mockProducts = [
  {
    id: 1,
    title: 'Test Product',
    description: 'Test Description',
    price: 99.99,
    image: 'test.jpg',
  },
];

const mockProductRepository = {
  getAll: vi.fn().mockResolvedValue(mockProducts),
  getById: vi.fn(),
};

const wrapper = ({ children }) => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
      },
    },
  });
  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
};

describe('useProducts', () => {
  beforeEach(() => {
    ProductRepositoryFactory.setInstance(mockProductRepository);
  });

  it('fetches products successfully', async () => {
    const { result } = renderHook(() => useProducts(), { wrapper });

    expect(result.current.isLoading).toBe(true);

    await waitFor(() => {
      expect(result.current.isLoading).toBe(false);
    });

    expect(result.current.data).toEqual(mockProducts);
    expect(mockProductRepository.getAll).toHaveBeenCalledTimes(1);
  });

  it('handles error state', async () => {
    const error = new Error('Failed to fetch');
    mockProductRepository.getAll.mockRejectedValueOnce(error);

    const { result } = renderHook(() => useProducts(), { wrapper });

    await waitFor(() => {
      expect(result.current.isError).toBe(true);
    });

    expect(result.current.error).toBeDefined();
  });
});
