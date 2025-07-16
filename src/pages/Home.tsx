import React from 'react';
import ProductCard from '../components/ProductCard';
import Banner from '../components/Banner';
import BannerSkeleton from '../components/BannerSkeleton';
import { ProductGridSkeleton } from '../components/ProductCardSkeleton';
import { useProducts } from '../hooks/useProducts';

const Home: React.FC = () => {
  const { products, loading, error } = useProducts();

  if (loading) {
    return (
      <div className="max-w-7xl mx-auto container-padding py-8">
        {/* Banner Skeleton */}
        <BannerSkeleton />

        {/* Loading Header */}
        <div className="mb-8 animate-fadeInUp">
          <div className="flex items-center justify-between">
            <div className="h-8 bg-gray-200 rounded w-48 animate-shimmer"></div>
            <div className="h-6 bg-gray-200 rounded w-20 animate-shimmer"></div>
          </div>
        </div>

        {/* Skeleton Grid */}
        <ProductGridSkeleton />
      </div>
    );
  }

  if (error) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center">
          <p className="text-red-600">{error}</p>
          <button 
            onClick={() => window.location.reload()} 
            className="mt-4 px-4 py-2 bg-black text-white rounded-md hover:bg-gray-800 transition-colors"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto container-padding py-8">
      {/* Banner Section */}
      <Banner />

      {/* Category Section */}
      <div className="section-padding">
        <div className="text-center mb-12 animate-fadeInUp">
          <h2 className="heading-primary mb-4 text-shadow-sm">Premium Men's Collection</h2>
          <p className="text-accent max-w-2xl mx-auto">
            Discover our carefully curated selection of premium t-shirts, crafted with the finest materials 
            and designed for the modern gentleman who values both comfort and style.
          </p>
        </div>
      </div>

      {/* Products Grid */}
      <div className="mb-8 animate-slideInLeft">
        <div className="flex items-center justify-between">
          <h2 className="heading-secondary">Featured Products</h2>
          <span className="bg-black text-white px-3 py-1 rounded-full text-sm font-medium">
            {products.length} items
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {products.map((product, index) => (
          <div 
            key={product.id} 
            className={`animate-fadeInUp stagger-${Math.min(index + 1, 9)}`}
          >
            <ProductCard product={product} />
          </div>
        ))}
      </div>

      {/* Newsletter Section */}
      <div className="section-padding">
        <div className="gradient-dark rounded-2xl p-8 md:p-12 text-center text-white animate-scaleIn">
          <h3 className="heading-secondary mb-4 text-white">Join Our Fashion Community</h3>
          <p className="text-gray-300 mb-8 max-w-lg mx-auto">
            Be the first to know about new collections, exclusive offers, and styling tips. 
            Join thousands of fashion enthusiasts who trust DA Clothing Manufacturer.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-4 py-3 border border-gray-600 rounded-lg bg-white/10 backdrop-blur-md text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent"
            />
            <button className="btn-primary bg-white text-black hover:bg-gray-100">
              Subscribe Now
            </button>
          </div>
          <p className="text-xs text-gray-400 mt-4">
            No spam, unsubscribe at any time.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;