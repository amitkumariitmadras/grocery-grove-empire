import { Product } from "@/types";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Plus } from "lucide-react";

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

const ProductCard = ({ product, onAddToCart }: ProductCardProps) => {
  return (
    <Card className="fade-in">
      <CardContent className="p-3">
        <div className="aspect-square relative mb-2">
          <img
            src={product.image}
            alt={product.name}
            className="object-cover w-full h-full rounded-md"
          />
        </div>
        <div className="text-left">
          <h3 className="font-medium text-sm truncate">{product.name}</h3>
          <p className="text-xs text-gray-500 truncate">{product.description}</p>
          <div className="flex items-center justify-between mt-2">
            <p className="font-bold text-sm">${product.price.toFixed(2)}</p>
            <Button 
              size="sm"
              variant="ghost"
              className="h-8 w-8 p-0"
              onClick={() => onAddToCart(product)}
            >
              <Plus className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;