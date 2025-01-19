import { Product } from '../types';

export const products: Product[] = [
  {
    id: 1,
    name: "Fresh Bananas",
    price: 2.99,
    image: "/placeholder.svg",
    category: "Fruits",
    description: "Fresh bananas from local farms"
  },
  {
    id: 2,
    name: "Organic Milk",
    price: 4.99,
    image: "/placeholder.svg",
    category: "Dairy",
    description: "Organic whole milk"
  },
  {
    id: 3,
    name: "Whole Wheat Bread",
    price: 3.49,
    image: "/placeholder.svg",
    category: "Bakery",
    description: "Freshly baked whole wheat bread"
  },
  {
    id: 4,
    name: "Fresh Tomatoes",
    price: 1.99,
    image: "/placeholder.svg",
    category: "Vegetables",
    description: "Ripe red tomatoes"
  },
  {
    id: 5,
    name: "Chicken Breast",
    price: 8.99,
    image: "/placeholder.svg",
    category: "Meat",
    description: "Fresh boneless chicken breast"
  },
  {
    id: 6,
    name: "Greek Yogurt",
    price: 3.99,
    image: "/placeholder.svg",
    category: "Dairy",
    description: "Plain Greek yogurt"
  }
];

export const categories = [...new Set(products.map(product => product.category))];