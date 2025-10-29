interface ProductPriceProps {
  price: number;
  currency?: string;
  className?: string;
}

export default function ProductPrice({
  price,
  currency = 'S/.',
  className = '',
}: ProductPriceProps) {
  return (
    <span
      className={`text-[1.75rem] font-bold bg-linear-to-r from-purple-500 to-violet-500 bg-clip-text text-transparent ${className}`}
    >
      {currency} {price.toFixed(2)}
    </span>
  );
}
