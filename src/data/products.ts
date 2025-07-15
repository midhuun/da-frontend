import { Product } from '../types/Product';

export const products: Product[] = [
  {
    id: "684b8bab1253420ccc19e80c",
    title: "Classic Polo",
    description: "A timeless wardrobe essential, our Classic Polo combines comfort and effortless style. Perfect for smart-casual wear, it's a versatile piece for any occasion",
    category: "T-Shirts",
    price: 399,
    availableSizes: ["S", "M", "L"],
    variants: [
      {
        color: "Red",
        images: ["https://images.pexels.com/photos/769749/pexels-photo-769749.jpeg?auto=compress&cs=tinysrgb&w=500"],
        stock: {
          stock: {
            "": 0
          }
        }
      },
      {
        color: "Navy",
        images: ["https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=500"],
        stock: {
          stock: {
            "": 5
          }
        }
      }
    ],
    careInstructions: ["Machine wash cold", "Do not bleach", "Tumble dry low"],
    tags: ["polo", "classic", "casual"],
    createdAt: "2025-06-13T02:23:39.354Z",
    updatedAt: "2025-06-13T02:23:39.354Z"
  },
  {
    id: "684b8bab1253420ccc19e81d",
    title: "Premium Denim Jacket",
    description: "Crafted from premium denim, this jacket features a modern fit and classic styling. Perfect for layering and adding a touch of rugged sophistication to any outfit",
    category: "Jackets",
    price: 1299,
    availableSizes: ["S", "M", "L", "XL"],
    variants: [
      {
        color: "Blue",
        images: ["https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=500"],
        stock: {
          stock: {
            "": 8
          }
        }
      },
      {
        color: "Black",
        images: ["https://images.pexels.com/photos/1656684/pexels-photo-1656684.jpeg?auto=compress&cs=tinysrgb&w=500"],
        stock: {
          stock: {
            "": 3
          }
        }
      }
    ],
    careInstructions: ["Machine wash cold", "Do not tumble dry", "Iron on low heat"],
    tags: ["denim", "jacket", "premium"],
    createdAt: "2025-06-13T02:25:39.354Z",
    updatedAt: "2025-06-13T02:25:39.354Z"
  },
  {
    id: "684b8bab1253420ccc19e82e",
    title: "Casual Chinos",
    description: "Versatile chinos that effortlessly transition from work to weekend. Made from soft cotton twill with a comfortable fit and modern styling",
    category: "Trousers",
    price: 799,
    availableSizes: ["28", "30", "32", "34", "36"],
    variants: [
      {
        color: "Khaki",
        images: ["https://images.pexels.com/photos/1598507/pexels-photo-1598507.jpeg?auto=compress&cs=tinysrgb&w=500"],
        stock: {
          stock: {
            "": 12
          }
        }
      },
      {
        color: "Olive",
        images: ["https://images.pexels.com/photos/1598508/pexels-photo-1598508.jpeg?auto=compress&cs=tinysrgb&w=500"],
        stock: {
          stock: {
            "": 7
          }
        }
      }
    ],
    careInstructions: ["Machine wash warm", "Do not bleach", "Iron as needed"],
    tags: ["chinos", "casual", "cotton"],
    createdAt: "2025-06-13T02:27:39.354Z",
    updatedAt: "2025-06-13T02:27:39.354Z"
  },
  {
    id: "684b8bab1253420ccc19e83f",
    title: "Essential Crew Neck",
    description: "A wardrobe staple that delivers comfort and style. This crew neck tee features a perfect fit and premium cotton construction for everyday wear",
    category: "T-Shirts",
    price: 299,
    availableSizes: ["XS", "S", "M", "L", "XL"],
    variants: [
      {
        color: "White",
        images: ["https://images.pexels.com/photos/769749/pexels-photo-769749.jpeg?auto=compress&cs=tinysrgb&w=500"],
        stock: {
          stock: {
            "": 15
          }
        }
      },
      {
        color: "Gray",
        images: ["https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=500"],
        stock: {
          stock: {
            "": 10
          }
        }
      },
      {
        color: "Black",
        images: ["https://images.pexels.com/photos/1656684/pexels-photo-1656684.jpeg?auto=compress&cs=tinysrgb&w=500"],
        stock: {
          stock: {
            "": 8
          }
        }
      }
    ],
    careInstructions: ["Machine wash cold", "Do not bleach", "Tumble dry low"],
    tags: ["crew neck", "essential", "cotton"],
    createdAt: "2025-06-13T02:29:39.354Z",
    updatedAt: "2025-06-13T02:29:39.354Z"
  },
  {
    id: "684b8bab1253420ccc19e84g",
    title: "Luxury Wool Sweater",
    description: "Elevate your wardrobe with this luxurious wool sweater. Featuring a sophisticated design and premium materials, it's perfect for formal and casual occasions",
    category: "Sweaters",
    price: 1599,
    availableSizes: ["S", "M", "L", "XL"],
    variants: [
      {
        color: "Charcoal",
        images: ["https://images.pexels.com/photos/1656684/pexels-photo-1656684.jpeg?auto=compress&cs=tinysrgb&w=500"],
        stock: {
          stock: {
            "": 6
          }
        }
      },
      {
        color: "Burgundy",
        images: ["https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=500"],
        stock: {
          stock: {
            "": 4
          }
        }
      }
    ],
    careInstructions: ["Dry clean only", "Store folded", "Avoid direct sunlight"],
    tags: ["wool", "luxury", "sweater"],
    createdAt: "2025-06-13T02:31:39.354Z",
    updatedAt: "2025-06-13T02:31:39.354Z"
  }
];