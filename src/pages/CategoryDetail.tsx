import { useParams, useNavigate } from "react-router-dom";
import { Search, ArrowLeft } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";
import BottomNav from "@/components/BottomNav";

const CategoryDetail = () => {
  const { categoryName } = useParams();
  const navigate = useNavigate();
  const categoryProducts = products.filter(
    (product) => product.category === decodeURIComponent(categoryName || "")
  );

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <div className="sticky top-0 bg-white z-10 p-4 shadow-sm">
        <div className="flex items-center gap-2 mb-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => navigate(-1)}
          >
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <h1 className="text-xl font-semibold">{categoryName}</h1>
        </div>
        <div className="relative">
          <Input
            placeholder="Search products..."
            className="pl-10"
          />
          <Search className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
        </div>
      </div>

      <div className="p-4 grid grid-cols-2 gap-4">
        {categoryProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={() => {}}
          />
        ))}
      </div>

      <div className="fixed bottom-0 left-0 right-0 bg-white p-2 border-t">
        <div className="flex items-center justify-between max-w-md mx-auto">
          <div className="flex items-center gap-2">
            <span className="text-sm">Add items worth ₹25 to get Free Delivery</span>
          </div>
          <span className="text-green-600">You saved ₹100</span>
        </div>
      </div>

      <BottomNav />
    </div>
  );
};

export default CategoryDetail;