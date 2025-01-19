import { Product } from '../types';

export const products: Product[] = [
  {
    id: 1,
    name: "Fresh Bananas",
    price: 2.99,
    image: "/placeholder.svg",
    category: "Fruits & Vegetables",
    description: "Fresh bananas from local farms"
  },
  {
    id: 2,
    name: "Organic Milk",
    price: 4.99,
    image: "/placeholder.svg",
    category: "Dairy, Bread & Eggs",
    description: "Organic whole milk"
  },
  {
    id: 3,
    name: "Whole Wheat Bread",
    price: 3.49,
    image: "/placeholder.svg",
    category: "Dairy, Bread & Eggs",
    description: "Freshly baked whole wheat bread"
  },
  {
    id: 4,
    name: "Fresh Tomatoes",
    price: 1.99,
    image: "/placeholder.svg",
    category: "Fruits & Vegetables",
    description: "Ripe red tomatoes"
  },
  {
    id: 5,
    name: "Basmati Rice",
    price: 8.99,
    image: "/placeholder.svg",
    category: "Atta, Rice, Oil & Dals",
    description: "Premium basmati rice"
  },
  {
    id: 6,
    name: "Greek Yogurt",
    price: 3.99,
    image: "/placeholder.svg",
    category: "Dairy, Bread & Eggs",
    description: "Plain Greek yogurt"
  }
];

export const categories = [...new Set(products.map(product => product.category))];