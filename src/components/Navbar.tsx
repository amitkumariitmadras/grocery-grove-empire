import { ShoppingCart, MapPin, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface NavbarProps {
  cartItemsCount: number;
  location: string;
  onSearchChange: (query: string) => void;
}

const Navbar = ({ cartItemsCount, location, onSearchChange }: NavbarProps) => {
  return (
    <nav className="sticky top-0 z-50 bg-white border-b shadow-sm">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold text-primary">GroceryMart</h1>
          
          <div className="flex items-center gap-4 flex-1 max-w-xl mx-4">
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <MapPin className="w-4 h-4" />
              <span className="hidden sm:inline">{location || "Set Location"}</span>
            </div>
            
            <div className="flex-1">
              <Input
                type="search"
                placeholder="Search products..."
                className="w-full"
                onChange={(e) => onSearchChange(e.target.value)}
              />
            </div>
          </div>

          <Button variant="outline" className="relative">
            <ShoppingCart className="w-5 h-5" />
            {cartItemsCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-primary text-white rounded-full w-5 h-5 text-xs flex items-center justify-center">
                {cartItemsCount}
              </span>
            )}
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;