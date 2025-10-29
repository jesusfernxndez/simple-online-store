import { useState, useEffect, useRef } from 'react';
import { CartIcon } from '@/shared/ui/icons';
import { useCartItemsCount } from '@/modules/cart/application/use-cart-items-count';
import CartDropdown from './CartDropdown';

export default function CartButton() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const cartRef = useRef<HTMLDivElement>(null);
  const itemsCount = useCartItemsCount();

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (cartRef.current && !cartRef.current.contains(e.target as Node)) {
        setIsCartOpen(false);
      }
    };

    if (isCartOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isCartOpen]);

  return (
    <div className="flex items-center gap-x-3 relative" ref={cartRef}>
      <div className="flex items-center gap-x-2 bg-purple-600/20 backdrop-blur-sm px-4 py-2 rounded-full border border-purple-500/40">
        {itemsCount > 0 && (
          <span className="text-lg font-semibold text-purple-400">{itemsCount}</span>
        )}
        <button
          onClick={() => setIsCartOpen(!isCartOpen)}
          className="hover:scale-110 transition-transform text-purple-400 hover:text-purple-300"
        >
          <CartIcon />
        </button>
      </div>
      {isCartOpen && <CartDropdown />}
    </div>
  );
}
