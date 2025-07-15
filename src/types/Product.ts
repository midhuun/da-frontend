export interface Product {
  id: string;
  title: string;
  description: string;
  category: string;
  price: number;
  availableSizes: string[];
  variants: ProductVariant[];
  careInstructions: string[];
  tags: string[];
  createdAt: string;
  updatedAt: string;
}

export interface ProductVariant {
  color: string;
  images: string[];
  stock: {
    stock: {
      [key: string]: number;
    };
  };
}