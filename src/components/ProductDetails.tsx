import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Share2 } from 'lucide-react';
import { Product } from '../types/Product';
import ProductCard from './ProductCard';
import { useProducts } from '../hooks/useProducts';

const getColorValue = (colorName: string): string => {
  const colorMap: { [key: string]: string } = {
    'red': '#DC2626',
    'blue': '#2563EB',
    'navy': '#1E3A8A',
    'black': '#000000',
    'white': '#FFFFFF',
    'gray': '#6B7280',
    'grey': '#6B7280',
    'green': '#16A34A',
    'yellow': '#EAB308',
    'purple': '#9333EA',
    'pink': '#EC4899',
    'orange': '#EA580C',
    'brown': '#A16207',
    'khaki': '#A3A3A3',
    'olive': '#65A30D',
    'burgundy': '#7C2D12',
    'charcoal': '#374151'
  };

  return colorMap[colorName.toLowerCase()] || '#6B7280';
};

const ProductDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [selectedVariant, setSelectedVariant] = useState(0);
  const [selectedSize, setSelectedSize] = useState('');
  const { products, loading } = useProducts();

  const product = products.find(p => p.id === id);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [product]);
  if (loading) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-black mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading product...</p>
        </div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900">Product not found</h2>
          <Link to="/" className="mt-4 inline-block text-blue-600 hover:text-blue-800">
            Return to home
          </Link>
        </div>
      </div>
    );
  }

  const recommendedProducts = products.filter(p => p.id !== product.id);
  const currentVariant = product.variants[selectedVariant];

  const handleShare = async () => {
    const shareData = {
      title: product.title,
      text: product.description,
      url: window.location.href,
    };

    try {
      if (navigator.share) {
        await navigator.share(shareData);
      } else {
        // Fallback: copy to clipboard
        await navigator.clipboard.writeText(window.location.href);
        alert('Product link copied to clipboard!');
      }
    } catch (error) {
      console.error('Error sharing:', error);
      // Fallback: copy to clipboard
      try {
        await navigator.clipboard.writeText(window.location.href);
        alert('Product link copied to clipboard!');
      } catch (clipboardError) {
        console.error('Clipboard error:', clipboardError);
      }
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Breadcrumb */}
      <div className="mb-8">
        <Link 
          to="/" 
          className="inline-flex items-center text-sm text-gray-600 hover:text-black transition-colors"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Products
        </Link>
      </div>

      {/* Product Details */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
        {/* Product Images */}
        <div className="space-y-4">
          <div className="aspect-square w-full overflow-hidden rounded-lg bg-gray-100">
            <img
              src={currentVariant.images[0]}
              alt={product.title}
              className="h-full w-full object-cover object-center"
            />
          </div>
          
          {/* Variant Images */}
          <div className="grid grid-cols-4 gap-2">
            {product.variants.map((variant, index) => (
              <button
                key={index}
                onClick={() => setSelectedVariant(index)}
                className={`aspect-square rounded-lg overflow-hidden border-2 transition-all ${
                  selectedVariant === index 
                    ? 'border-black' 
                    : 'border-gray-200 hover:border-gray-400'
                }`}
              >
                <img
                  src={variant.images[0]}
                  alt={variant.color}
                  className="h-full w-full object-cover object-center"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">{product.title}</h1>
            <p className="mt-2 text-sm text-gray-600">{product.category}</p>
          </div>

          <div className="text-2xl font-bold text-black">
            ₹{product.price.toLocaleString()}
          </div>

          <div className="prose prose-sm text-gray-600">
            <p>{product.description}</p>
          </div>

          {/* Color Selection */}
          <div>
            <h3 className="text-sm font-medium text-gray-900 mb-3">Color: {currentVariant.color}</h3>
            <div className="flex space-x-3">
              {product.variants.map((variant, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedVariant(index)}
                  className={`w-8 h-8 rounded-full border-2 transition-all ${
                    selectedVariant === index 
                      ? 'border-black ring-2 ring-gray-200' 
                      : 'border-gray-300 hover:border-gray-400'
                  }`}
                  style={{ backgroundColor: getColorValue(variant.color) }}
                  title={variant.color}
                />
              ))}
            </div>
          </div>

          {/* Size Selection */}
          <div>
            <h3 className="text-sm font-medium text-gray-900 mb-3">Size</h3>
            <div className="grid grid-cols-4 gap-2">
              {product.availableSizes.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`py-2 px-3 text-sm font-medium rounded-md border transition-all ${
                    selectedSize === size
                      ? 'bg-black text-white border-black'
                      : 'bg-white text-gray-900 border-gray-300 hover:border-gray-400'
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Additional Info */}
          <div className="border-t pt-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <button 
                  onClick={handleShare}
                  className="flex items-center space-x-2 text-sm text-gray-600 hover:text-black transition-colors"
                >
                  <Share2 className="h-4 w-4" />
                  <span>Share</span>
                </button>
              </div>
            </div>
          </div>

          {/* Care Instructions */}
          {product.careInstructions && product.careInstructions.length > 0 && (
            <div className="border-t pt-6">
              <h3 className="text-sm font-medium text-gray-900 mb-3">Care Instructions</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                {product.careInstructions.map((instruction, index) => (
                  <li key={index}>• {instruction}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>

      {/* Recommended Products */}
      <div className="mt-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-8">You might also like</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {recommendedProducts.slice(0, 4).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;