import React, { useState, useEffect } from 'react';
import { X, Search } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Product } from '../types/Product';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  products: Product[];
}

const SearchModal: React.FC<SearchModalProps> = ({ isOpen, onClose, products }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);

  useEffect(() => {
    if (searchQuery.trim()) {
      const filtered = products.filter(product =>
        product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
      );
      setFilteredProducts(filtered);
    } else {
      setFilteredProducts([]);
    }
  }, [searchQuery, products]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-start justify-center pt-20">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-2xl mx-4 max-h-[80vh] overflow-hidden">
        <div className="p-4 border-b">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold">Search Products</h2>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search for products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
              autoFocus
            />
          </div>
        </div>
        
        <div className="overflow-y-auto max-h-96">
          {searchQuery.trim() && filteredProducts.length === 0 && (
            <div className="p-8 text-center text-gray-500">
              No products found for "{searchQuery}"
            </div>
          )}
          
          {filteredProducts.map((product) => (
            <Link
              key={product.id}
              to={`/product/${product.id}`}
              onClick={onClose}
              className="flex items-center p-4 hover:bg-gray-50 transition-colors border-b"
            >
              <img
                src={product.variants[0]?.images[0]}
                alt={product.title}
                className="w-12 h-12 object-cover rounded-md mr-4"
              />
              <div className="flex-1">
                <h3 className="font-medium text-gray-900">{product.title}</h3>
                <p className="text-sm text-gray-600">{product.category}</p>
                <p className="text-sm font-semibold text-black">₹{product.price.toLocaleString()}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SearchModal;