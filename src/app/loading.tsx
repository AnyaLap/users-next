import { Skeleton } from "@/components/ui/skeleton";

export default function LoadingPage() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <Skeleton className="h-6 w-64 rounded animate-pulse" />
    </div>
  );
};