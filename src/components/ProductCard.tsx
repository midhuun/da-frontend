import React from 'react';
import { Link } from 'react-router-dom';
import { Product } from '../types/Product';

interface ProductCardProps {
  product: Product;
}

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

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const primaryVariant = product.variants[0];
  const primaryImage = primaryVariant?.images[0];

  const handleProductClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="group relative">
      <Link to={`/product/${product.id}`} onClick={handleProductClick}>
        <div className="aspect-product w-full overflow-hidden rounded-xl bg-gray-100 shadow-lg transition-all duration-300">
          <img
            src={primaryImage}
            alt={product.title}
            className="h-full w-full object-cover object-center"
          />
        </div>
        
        <div className="mt-4 space-y-3">
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <h3 className="text-base font-semibold text-gray-900 group-hover:text-black transition-colors mb-1 text-shadow-sm">
                {product.title}
              </h3>
              <p className="text-sm text-gray-500 uppercase tracking-wide font-medium">
                {product.category}
              </p>
            </div>
            
            <div className="flex items-center space-x-1">
              {product.variants.map((variant, index) => (
                <div
                  key={index}
                  className="w-4 h-4 rounded-full border border-gray-300 shadow-sm"
                  style={{ backgroundColor: getColorValue(variant.color) }}
                  title={variant.color}
                />
              ))}
            </div>
          </div>
          
          <p className="text-sm text-accent line-clamp-2 leading-relaxed">
            {product.description}
          </p>
          
          <div className="flex items-center justify-between pt-2">
            <div>
              <p className="text-xl font-bold text-black">
                ₹{product.price.toLocaleString()}
              </p>
              <p className="text-xs text-gray-500">
                Sizes: {product.availableSizes.join(', ')}
              </p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;