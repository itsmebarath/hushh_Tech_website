import React from 'react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> { }

export function Skeleton({ className, ...props }: SkeletonProps) {
  return (
    <div
      className={cn("animate-shimmer rounded-md bg-gray-200 dark:bg-gray-800", className)}
      {...props}
    />
  );
}

export function PageSkeleton() {
  return (
    <div className="w-full max-w-7xl mx-auto px-6 py-12 space-y-8 animate-in fade-in duration-500">
      {/* Hero Skeleton */}
      <div className="space-y-4">
        <Skeleton className="h-12 w-3/4 max-w-2xl" />
        <Skeleton className="h-6 w-full max-w-3xl" />
        <Skeleton className="h-6 w-5/6 max-w-xl" />
      </div>

      <div className="pt-8">
        <Skeleton className="h-[400px] w-full rounded-2xl" />
      </div>

      {/* Content Blocks Skeleton */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8">
        {[1, 2, 3].map((i) => (
          <div key={i} className="space-y-4 p-6 border border-gray-100 dark:border-gray-800 rounded-2xl">
            <Skeleton className="h-10 w-10 rounded-full" />
            <Skeleton className="h-6 w-3/4" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-2/3" />
          </div>
        ))}
      </div>
    </div>
  );
}
