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

  return (
    <div className="group relative">
      <Link to={`/product/${product.id}`}>
        <div className="aspect-square w-full overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-90 transition-opacity duration-300">
          <img
            src={primaryImage}
            alt={product.title}
            className="h-full w-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        
        <div className="mt-4 space-y-2">
          <h3 className="text-sm font-medium text-gray-900 group-hover:text-black transition-colors">
            {product.title}
          </h3>
          
          <p className="text-sm text-gray-600 line-clamp-2">
            {product.description}
          </p>
          
          <div className="flex items-center justify-between">
            <p className="text-lg font-semibold text-black">
              ₹{product.price.toLocaleString()}
            </p>
            
            <div className="flex items-center space-x-1">
              {product.variants.map((variant, index) => (
                <div
                  key={index}
                  className="w-4 h-4 rounded-full border-2 border-gray-300"
                  style={{ backgroundColor: getColorValue(variant.color) }}
                  title={variant.color}
                />
              ))}
            </div>
          </div>
          
          <div className="flex items-center space-x-2 text-xs text-gray-500">
            <span>Sizes: {product.availableSizes.join(', ')}</span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;