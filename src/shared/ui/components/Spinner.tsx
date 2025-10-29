export default function Spinner({ size = 'md' }: { size?: 'sm' | 'md' | 'lg' }) {
  const sizeClasses = {
    sm: 'w-6 h-6 border-[0.125rem]',
    md: 'w-12 h-12 border',
    lg: 'w-16 h-16 border-[0.375rem]',
  };

  return (
    <div
      className={`${sizeClasses[size]} border-purple-500 border-t-transparent rounded-full animate-spin`}
    />
  );
}
