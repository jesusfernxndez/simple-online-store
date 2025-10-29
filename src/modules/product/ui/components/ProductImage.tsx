interface ProductImageProps {
  src: string;
  alt: string;
  className?: string;
}

export default function ProductImage({ src, alt, className = '' }: ProductImageProps) {
  return (
    <div
      data-testid="product-image"
      className={`relative w-full h-56 bg-slate-900 flex items-center justify-center p-6 overflow-hidden ${className}`}
    >
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500 drop-shadow-2xl"
      />
      <div className="absolute inset-0 bg-linear-to-t from-purple-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </div>
  );
}
