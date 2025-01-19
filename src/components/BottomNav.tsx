import { Home, ShoppingCart, LayoutGrid } from "lucide-react";
import { Link } from "react-router-dom";

const BottomNav = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t py-3 px-4">
      <div className="flex justify-around items-center max-w-md mx-auto">
        <Link to="/" className="flex flex-col items-center text-gray-600 hover:text-primary">
          <Home className="w-6 h-6" />
          <span className="text-xs mt-1">Home</span>
        </Link>
        <Link to="/cart" className="flex flex-col items-center text-gray-600 hover:text-primary">
          <ShoppingCart className="w-6 h-6" />
          <span className="text-xs mt-1">Cart</span>
        </Link>
        <Link to="/categories" className="flex flex-col items-center text-gray-600 hover:text-primary">
          <LayoutGrid className="w-6 h-6" />
          <span className="text-xs mt-1">Categories</span>
        </Link>
      </div>
    </div>
  );
};

export default BottomNav;