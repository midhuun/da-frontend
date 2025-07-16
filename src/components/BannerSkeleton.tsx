import React from 'react';

const BannerSkeleton: React.FC = () => {
  return (
    <div className="relative h-96 md:h-[500px] overflow-hidden rounded-lg mb-12 shadow-2xl animate-pulse">
      {/* Main banner image skeleton */}
      <div className="w-full h-full bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-shimmer"></div>
      
      {/* Navigation buttons skeleton */}
      <button className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 rounded-full p-3 shadow-lg backdrop-blur-sm">
        <div className="h-6 w-6 bg-gray-300 rounded animate-shimmer"></div>
      </button>
      <button className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 rounded-full p-3 shadow-lg backdrop-blur-sm">
        <div className="h-6 w-6 bg-gray-300 rounded animate-shimmer"></div>
      </button>

      {/* Dots indicator skeleton */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3">
        {[...Array(2)].map((_, index) => (
          <div
            key={index}
            className={`w-4 h-4 rounded-full transition-all duration-300 ${
              index === 0 ? 'bg-white shadow-lg' : 'bg-white/60'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default BannerSkeleton; 