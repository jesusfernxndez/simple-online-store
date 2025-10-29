interface ProductTitleProps {
  title: string;
  className?: string;
}

export default function ProductTitle({ title, className = '' }: ProductTitleProps) {
  return (
    <h2
      className={`text-[0.9375rem] font-bold text-gray-100 min-h-10 line-clamp-2 mb-2 leading-tight ${className}`}
    >
      {title}
    </h2>
  );
}
