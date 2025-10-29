import { useCart } from '@/modules/cart/application/use-cart';

export default function CartDropdown() {
  const { items, removeItem, clearCart, getTotalPrice } = useCart();

  if (items.length === 0) {
    return (
      <div className="absolute right-0 top-16 w-88 bg-slate-800/95 backdrop-blur-md border border-purple-600/30 rounded-xl shadow-2xl shadow-purple-600/20 p-6 z-50">
        <p className="text-gray-400 text-center text-sm">Tu carrito está vacío</p>
      </div>
    );
  }

  return (
    <div className="absolute right-0 top-16 w-88 bg-slate-800/95 backdrop-blur-md border border-purple-600/30 rounded-xl shadow-2xl shadow-purple-600/20 z-50 overflow-hidden">
      <div className="p-4 border-b border-purple-600/20">
        <div className="flex justify-between items-center">
          <h3 className="text-base font-bold text-gray-100">Carrito de Compras</h3>
          <button
            onClick={clearCart}
            className="text-xs text-red-400 hover:text-red-300 font-semibold transition-colors"
          >
            Limpiar todo
          </button>
        </div>
      </div>

      <div className="max-h-80 overflow-y-auto [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-slate-900/50 [&::-webkit-scrollbar-thumb]:bg-linear-to-b [&::-webkit-scrollbar-thumb]:from-purple-600 [&::-webkit-scrollbar-thumb]:to-violet-600 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:border-2 [&::-webkit-scrollbar-thumb]:border-slate-900/50 [&::-webkit-scrollbar-thumb:hover]:from-purple-500 [&::-webkit-scrollbar-thumb:hover]:to-violet-500 scrollbar-thin scrollbar-track-slate-900/50 scrollbar-thumb-purple-600">
        {items.map(item => (
          <div
            key={item.product.id}
            className="flex gap-3 p-4 border-b border-purple-600/10 hover:bg-purple-600/10 transition-colors"
          >
            <img
              src={item.product.image}
              alt={item.product.title}
              className="w-14 h-14 object-contain bg-slate-900 rounded-lg"
            />
            <div className="flex-1 min-w-0">
              <h4 className="text-sm font-semibold text-gray-100 line-clamp-2 mb-1">
                {item.product.title}
              </h4>
              <p className="text-base font-bold text-purple-400">
                S/. {item.product.price.toFixed(2)}
              </p>
            </div>
            <button
              onClick={() => removeItem(item.product.id)}
              className="text-red-400 hover:text-red-300 text-xs font-semibold self-start transition-colors"
            >
              Eliminar
            </button>
          </div>
        ))}
      </div>

      <div className="p-4 bg-slate-900/50 border-t border-purple-600/30">
        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-300 font-semibold">Total:</span>
          <span className="text-2xl font-bold bg-linear-to-r from-purple-500 to-violet-500 bg-clip-text text-transparent">
            S/. {getTotalPrice().toFixed(2)}
          </span>
        </div>
      </div>
    </div>
  );
}
