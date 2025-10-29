interface ErrorMessageProps {
  message: string;
  title?: string;
}

export default function ErrorMessage({ message, title = 'Error' }: ErrorMessageProps) {
  return (
    <div className="bg-red-950/50 backdrop-blur-sm border border-red-500/30 rounded-lg p-6">
      <p className="text-red-300 font-medium text-center">{title}</p>
      <p className="text-red-400 text-sm mt-2 text-center">{message}</p>
    </div>
  );
}
