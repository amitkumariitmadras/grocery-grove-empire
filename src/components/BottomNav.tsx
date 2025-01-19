import { Home, Search, ShoppingCart, Grid3x3 } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";

const BottomNav = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t py-2 px-4">
      <div className="flex justify-between items-center max-w-md mx-auto">
        <Button
          variant="ghost"
          size="icon"
          className={isActive("/") ? "text-primary" : ""}
          onClick={() => navigate("/")}
        >
          <Home className="h-6 w-6" />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          className={isActive("/search") ? "text-primary" : ""}
          onClick={() => navigate("/search")}
        >
          <Search className="h-6 w-6" />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          className={isActive("/cart") ? "text-primary" : ""}
          onClick={() => navigate("/cart")}
        >
          <ShoppingCart className="h-6 w-6" />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          className={isActive("/categories") ? "text-primary" : ""}
          onClick={() => navigate("/categories")}
        >
          <Grid3x3 className="h-6 w-6" />
        </Button>
      </div>
    </div>
  );
};

export default BottomNav;