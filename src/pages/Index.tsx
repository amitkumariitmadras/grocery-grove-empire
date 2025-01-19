import { useState, useEffect } from "react";
import { useToast } from "@/components/ui/use-toast";
import Navbar from "@/components/Navbar";
import ProductCard from "@/components/ProductCard";
import CategoryFilter from "@/components/CategoryFilter";
import { products, categories } from "@/data/products";
import { Product, LocationState } from "@/types";

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [cartItems, setCartItems] = useState<Product[]>([]);
  const [location, setLocation] = useState<LocationState>({
    latitude: null,
    longitude: null,
    address: "",
  });

  const { toast } = useToast();

  useEffect(() => {
    // Request location access when component mounts
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords;
          try {
            // For demo purposes, we'll just set coordinates
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
    setCartItems((prev) => [...prev, product]);
    toast({
      title: "Added to cart",
      description: `${product.name} has been added to your cart.`,
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar
        cartItemsCount={cartItems.length}
        location={location.address}
        onSearchChange={setSearchQuery}
      />
      
      <CategoryFilter
        categories={categories}
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
      />

      <main className="container mx-auto">
        <div className="product-grid">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={handleAddToCart}
            />
          ))}
        </div>
      </main>
    </div>
  );
};

export default Index;