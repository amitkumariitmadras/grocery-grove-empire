import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { categories } from "@/data/products";
import BottomNav from "@/components/BottomNav";

const categoryGroups = {
  "Grocery & Kitchen": [
    { name: "Fruits & Vegetables", image: "/placeholder.svg" },
    { name: "Dairy, Bread & Eggs", image: "/placeholder.svg" },
    { name: "Atta, Rice, Oil & Dals", image: "/placeholder.svg" }
  ],
  "Snacks & Drinks": [
    { name: "Tea, Coffee & More", image: "/placeholder.svg" },
    { name: "Ice Creams & More", image: "/placeholder.svg" },
    { name: "Frozen Food", image: "/placeholder.svg" }
  ]
};

const Categories = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <div className="sticky top-0 bg-white z-10 p-4 shadow-sm">
        <h1 className="text-2xl font-bold mb-4">Categories</h1>
        <div className="relative">
          <Input
            placeholder="Search categories..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10"
          />
          <Search className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
        </div>
      </div>

      <div className="p-4">
        {Object.entries(categoryGroups).map(([group, items]) => (
          <div key={group} className="mb-8">
            <h2 className="text-lg font-semibold mb-4">{group}</h2>
            <div className="grid grid-cols-3 gap-4">
              {items.map((item) => (
                <div
                  key={item.name}
                  className="cursor-pointer"
                  onClick={() => navigate(`/category/${encodeURIComponent(item.name)}`)}
                >
                  <div className="aspect-square relative mb-2">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="object-cover w-full h-full rounded-lg"
                    />
                  </div>
                  <p className="text-xs text-center">{item.name}</p>
                </div>
              ))}
            </div>
          </div>
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

export default Categories;