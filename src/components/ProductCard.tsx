import { Product } from "@/types";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Plus } from "lucide-react";

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

const ProductCard = ({ product, onAddToCart }: ProductCardProps) => {
  return (
    <Card className="fade-in">
      <CardContent className="pt-4">
        <div className="aspect-square relative mb-3">
          <img
            src={product.image}
            alt={product.name}
            className="object-cover w-full h-full rounded-md"
          />
        </div>
        <div>
          <h3 className="font-semibold text-lg">{product.name}</h3>
          <p className="text-sm text-gray-500">{product.description}</p>
          <p className="text-lg font-bold mt-2">${product.price.toFixed(2)}</p>
        </div>
      </CardContent>
      <CardFooter>
        <Button 
          className="w-full" 
          onClick={() => onAddToCart(product)}
        >
          <Plus className="w-4 h-4 mr-2" /> Add to Cart
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;