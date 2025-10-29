import Button from '@/shared/ui/components/Button';
import { InfoIcon } from '@/shared/ui/icons';

interface ProductActionsProps {
  isInCart: boolean;
  onPreview: () => void;
  onToggleCart: () => void;
}

export default function ProductActions({ isInCart, onPreview, onToggleCart }: ProductActionsProps) {
  return (
    <div
      data-testid="product-actions"
      className="mt-auto space-y-3 pt-2 border-t border-purple-600/20"
    >
      <div className="flex gap-2">
        <Button
          variant="secondary"
          size="md"
          onClick={onPreview}
          className="flex-1 flex items-center justify-center gap-1.5"
        >
          <InfoIcon size={14} />
          <span>Vista previa</span>
        </Button>
        <Button
          variant={isInCart ? 'danger' : 'primary'}
          size="md"
          onClick={onToggleCart}
          className="flex-1"
        >
          {isInCart ? 'Eliminar' : 'Agregar'}
        </Button>
      </div>
    </div>
  );
}
