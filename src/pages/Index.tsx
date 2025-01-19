import { useState, useEffect } from "react";
import { useToast } from "@/components/ui/use-toast";
import Navbar from "@/components/Navbar";
import ProductCard from "@/components/ProductCard";
import CategoryFilter from "@/components/CategoryFilter";
import CartSheet from "@/components/CartSheet";
import BottomNav from "@/components/BottomNav";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { products, categories } from "@/data/products";
import { Product, CartItem, LocationState } from "@/types";

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [location, setLocation] = useState<LocationState>({
    latitude: null,
    longitude: null,
    address: "",
  });

  const { toast } = useToast();

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords;
          try {
            setLocation({
              latitude,
              longitude,
              address: "Current Location",
            });
            toast({
              title: "Location accessed",
              description: "We'll show you nearby available products.",
            });
          } catch (error) {
            console.error("Error getting location:", error);
          }
        },
        (error) => {
          console.error("Error getting location:", error);
          toast({
            variant: "destructive",
            title: "Location access denied",
            description: "Please enable location access to see nearby products.",
          });
        }
      );
    }
  }, []);

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const matchesCategory = !selectedCategory || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const handleAddToCart = (product: Product) => {
    setCartItems((prev) => {
      const existingItem = prev.find((item) => item.id === product.id);
      if (existingItem) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
    toast({
      title: "Added to cart",
      description: `${product.name} has been added to your cart.`,
    });
  };

  const handleUpdateQuantity = (itemId: number, action: 'increase' | 'decrease') => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === itemId
          ? {
              ...item,
              quantity:
                action === 'increase'
                  ? item.quantity + 1
                  : Math.max(1, item.quantity - 1),
            }
          : item
      )
    );
  };

  const handleRemoveItem = (itemId: number) => {
    setCartItems((prev) => prev.filter((item) => item.id !== itemId));
    toast({
      title: "Item removed",
      description: "The item has been removed from your cart.",
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <Navbar
        location={location.address}
        onSearchChange={setSearchQuery}
      />
      
      <div className="container mx-auto px-4 py-4 max-w-md">
        <div className="bg-primary/10 rounded-lg p-4 mb-6 text-center">
          <h2 className="text-2xl font-bold text-primary">Up to 70% Off</h2>
          <p className="text-sm text-gray-600 mt-1">Special offers on selected items</p>
        </div>

        <CategoryFilter
          categories={categories}
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
        />

        <div className="grid grid-cols-2 gap-4 mt-6">
          {filteredProducts.slice(0, 4).map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={handleAddToCart}
            />
          ))}
        </div>

        <Button 
          className="w-full mt-6 flex items-center justify-center gap-2"
          variant="outline"
        >
          Show More <ArrowRight className="w-4 h-4" />
        </Button>
      </div>

      <CartSheet
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
      />
      
      <BottomNav />
    </div>
  );
};

export default Index;