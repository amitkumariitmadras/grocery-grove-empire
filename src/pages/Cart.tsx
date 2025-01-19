import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { CartItem } from "@/types";
import { Button } from "@/components/ui/button";
import { Minus, Plus, Trash2 } from "lucide-react";

interface CartPageProps {
  items: CartItem[];
  onUpdateQuantity: (itemId: number, action: 'increase' | 'decrease') => void;
  onRemoveItem: (itemId: number) => void;
}

const Cart = ({ items, onUpdateQuantity, onRemoveItem }: CartPageProps) => {
  const location = useLocation();
  const navigate = useNavigate();
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  useEffect(() => {
    // If accessed via URL, redirect to home with cart sheet open
    if (location.search.includes('forceHideBadge')) {
      navigate('/?openCart=true');
    }
  }, [location, navigate]);

  if (location.search.includes('forceHideBadge')) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <div className="bg-white p-6 shadow-sm">
        <h1 className="text-xl font-semibold">Shopping Cart ({items.length} items)</h1>
      </div>

      <div className="container mx-auto px-4 py-6 max-w-md">
        {items.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-muted-foreground">Your cart is empty</p>
            <Button 
              className="mt-4"
              onClick={() => navigate('/')}
            >
              Continue Shopping
            </Button>
          </div>
        ) : (
          <div className="space-y-4">
            {items.map((item) => (
              <div key={item.id} className="bg-white p-4 rounded-lg shadow-sm">
                <div className="flex items-center gap-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-20 object-cover rounded"
                  />
                  <div className="flex-1">
                    <h3 className="font-semibold">{item.name}</h3>
                    <p className="text-sm text-muted-foreground">${item.price.toFixed(2)}</p>
                    <div className="flex items-center gap-2 mt-2">
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={() => onUpdateQuantity(item.id, 'decrease')}
                        disabled={item.quantity <= 1}
                      >
                        <Minus className="w-4 h-4" />
                      </Button>
                      <span>{item.quantity}</span>
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={() => onUpdateQuantity(item.id, 'increase')}
                      >
                        <Plus className="w-4 h-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="ml-auto text-destructive"
                        onClick={() => onRemoveItem(item.id)}
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            <div className="bg-white p-4 rounded-lg shadow-sm space-y-4 mt-6">
              <div className="flex items-center justify-between font-semibold">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>
              <Button className="w-full">
                Proceed to Checkout
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;