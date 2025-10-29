import type { ReactNode } from 'react';

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

export default function Container({ children, className = '' }: ContainerProps) {
  const classes = 'w-full max-w-375 mx-auto px-6 py-3 '.concat(className);

  return <div className={classes}>{children}</div>;
}
