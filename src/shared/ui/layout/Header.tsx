import Container from './Container';
import CartButton from '@/modules/cart/ui/CartButton';

export default function Header() {
  return (
    <header className="bg-slate-900/80 backdrop-blur-md border-b border-purple-600/30 sticky top-0 z-50 shadow-lg shadow-purple-600/10">
      <Container className="flex items-center justify-between">
        <h1 className="text-4xl font-bold bg-linear-to-r from-purple-500 to-violet-500 bg-clip-text text-transparent">
          Store
        </h1>
        <CartButton />
      </Container>
    </header>
  );
}
