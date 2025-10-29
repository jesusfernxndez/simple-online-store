import Card from '@/shared/ui/components/Card';

export default function ProductCardSkeleton() {
  return (
    <Card>
      <div className="relative w-full h-56 bg-slate-900 flex items-center justify-center p-6 overflow-hidden">
        <div className="w-32 h-32 bg-slate-700/50 rounded-lg animate-pulse"></div>
        <div className="absolute inset-0 -translate-x-full animate-[shimmer_2s_infinite] bg-linear-to-r from-transparent via-slate-600/30 to-transparent"></div>
      </div>

      <div className="px-5 py-4 flex flex-col grow">
        <div className="space-y-2 mb-2">
          <div className="h-4 bg-slate-700/50 rounded w-full relative overflow-hidden">
            <div className="absolute inset-0 -translate-x-full animate-[shimmer_2s_infinite] bg-linear-to-r from-transparent via-slate-600/30 to-transparent"></div>
          </div>
          <div className="h-4 bg-slate-700/50 rounded w-3/4 relative overflow-hidden">
            <div className="absolute inset-0 -translate-x-full animate-[shimmer_2s_infinite_0.2s] bg-linear-to-r from-transparent via-slate-600/30 to-transparent"></div>
          </div>
        </div>

        <div className="space-y-1.5 mb-3 grow">
          <div className="h-3 bg-slate-700/30 rounded w-full relative overflow-hidden">
            <div className="absolute inset-0 -translate-x-full animate-[shimmer_2s_infinite_0.4s] bg-linear-to-r from-transparent via-slate-600/20 to-transparent"></div>
          </div>
          <div className="h-3 bg-slate-700/30 rounded w-full relative overflow-hidden">
            <div className="absolute inset-0 -translate-x-full animate-[shimmer_2s_infinite_0.6s] bg-linear-to-r from-transparent via-slate-600/20 to-transparent"></div>
          </div>
          <div className="h-3 bg-slate-700/30 rounded w-2/3 relative overflow-hidden">
            <div className="absolute inset-0 -translate-x-full animate-[shimmer_2s_infinite_0.8s] bg-linear-to-r from-transparent via-slate-600/20 to-transparent"></div>
          </div>
        </div>

        <div className="mt-auto space-y-3 pt-2 border-t border-purple-600/20">
          <div className="flex justify-end">
            <div className="h-7 bg-slate-700/50 rounded w-24 relative overflow-hidden">
              <div className="absolute inset-0 -translate-x-full animate-[shimmer_2s_infinite_1s] bg-linear-to-r from-transparent via-slate-600/30 to-transparent"></div>
            </div>
          </div>
          <div className="flex gap-2">
            <div className="h-9 bg-slate-700/50 rounded flex-1 relative overflow-hidden">
              <div className="absolute inset-0 -translate-x-full animate-[shimmer_2s_infinite_1.2s] bg-linear-to-r from-transparent via-slate-600/30 to-transparent"></div>
            </div>
            <div className="h-9 bg-slate-700/50 rounded flex-1 relative overflow-hidden">
              <div className="absolute inset-0 -translate-x-full animate-[shimmer_2s_infinite_1.4s] bg-linear-to-r from-transparent via-slate-600/30 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}
