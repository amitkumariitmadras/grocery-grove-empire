import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from "@/components/ui/toaster";
import Index from "@/pages/Index";
import Categories from "@/pages/Categories";
import CategoryDetail from "@/pages/CategoryDetail";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/category/:categoryName" element={<CategoryDetail />} />
      </Routes>
      <Toaster />
    </Router>
  );
}

export default App;