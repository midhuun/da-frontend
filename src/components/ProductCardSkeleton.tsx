import React from 'react';

const ProductCardSkeleton: React.FC = () => {
  return (
    <div className="group relative animate-pulse">
      {/* Image skeleton */}
      <div className="aspect-square w-full overflow-hidden rounded-lg bg-gray-200">
        <div className="h-full w-full bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-shimmer"></div>
      </div>
      
      {/* Content skeleton */}
      <div className="mt-4 space-y-3">
        {/* Title skeleton */}
        <div className="h-4 bg-gray-200 rounded animate-shimmer"></div>
        
        {/* Description skeleton */}
        <div className="space-y-2">
          <div className="h-3 bg-gray-200 rounded w-full animate-shimmer"></div>
          <div className="h-3 bg-gray-200 rounded w-3/4 animate-shimmer"></div>
        </div>
        
        {/* Price and colors skeleton */}
        <div className="flex items-center justify-between">
          <div className="h-5 bg-gray-200 rounded w-20 animate-shimmer"></div>
          
          <div className="flex items-center space-x-1">
            {[...Array(3)].map((_, index) => (
              <div
                key={index}
                className="w-4 h-4 rounded-full bg-gray-200 animate-shimmer"
              />
            ))}
          </div>
        </div>
        
        {/* Sizes skeleton */}
        <div className="h-3 bg-gray-200 rounded w-32 animate-shimmer"></div>
      </div>
    </div>
  );
};

const ProductGridSkeleton: React.FC = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {[...Array(9)].map((_, index) => (
        <ProductCardSkeleton key={index} />
      ))}
    </div>
  );
};

export { ProductCardSkeleton, ProductGridSkeleton }; 


