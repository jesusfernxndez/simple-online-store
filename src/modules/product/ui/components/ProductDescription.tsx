interface ProductDescriptionProps {
  description: string;
  maxLines?: number;
  className?: string;
}

export default function ProductDescription({
  description,
  maxLines = 3,
  className = '',
}: ProductDescriptionProps) {
  return (
    <p
      data-testid="product-description"
      className={`text-xs text-gray-400 min-h-12 line-clamp-${maxLines} mb-3 grow leading-relaxed ${className}`}
    >
      {description}
    </p>
  );
}
