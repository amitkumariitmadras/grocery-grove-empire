import { MapPin, User } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

interface NavbarProps {
  location: string;
  onSearchChange: (query: string) => void;
}

const Navbar = ({ location, onSearchChange }: NavbarProps) => {
  const navigate = useNavigate();

  return (
    <div className="sticky top-0 z-50 bg-white border-b shadow-sm">
      <div className="container mx-auto px-4 py-3 max-w-md">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <MapPin className="w-5 h-5 text-primary" />
            <span className="text-sm text-gray-600">{location || "Set Location"}</span>
          </div>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => navigate("/profile")}
          >
            <User className="w-5 h-5 text-gray-600" />
          </Button>
        </div>
        
        <Input
          type="search"
          placeholder="Search products..."
          className="w-full"
          onChange={(e) => onSearchChange(e.target.value)}
        />
      </div>
    </div>
  );
};

export default Navbar;