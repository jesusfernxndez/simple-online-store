import type { ReactNode } from 'react';
import { useClickOutside } from '@/shared/hooks/useClickOutside';
import { useEscapeKey } from '@/shared/hooks/useEscapeKey';
import { useLockBodyScroll } from '@/shared/hooks/useLockBodyScroll';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  maxWidth?: string;
}

export default function Modal({ isOpen, onClose, children, maxWidth = '28rem' }: ModalProps) {
  const modalRef = useClickOutside<HTMLDivElement>(onClose, isOpen);
  useEscapeKey(onClose, isOpen);
  useLockBodyScroll(isOpen);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-100 flex items-center justify-center p-6">
      <div
        ref={modalRef}
        style={{ maxWidth }}
        className="bg-slate-800/95 backdrop-blur-md border border-purple-600/30 rounded-xl shadow-2xl shadow-purple-600/20 w-full max-h-[90vh] overflow-y-auto [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-slate-900/50 [&::-webkit-scrollbar-thumb]:bg-linear-to-b [&::-webkit-scrollbar-thumb]:from-purple-600 [&::-webkit-scrollbar-thumb]:to-violet-600 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:border-2 [&::-webkit-scrollbar-thumb]:border-slate-900/50 [&::-webkit-scrollbar-thumb:hover]:from-purple-500 [&::-webkit-scrollbar-thumb:hover]:to-violet-500"
      >
        {children}
      </div>
    </div>
  );
}
