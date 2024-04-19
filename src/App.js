import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/navbar";
import { Dashboard } from "./pages/dashboard/dashboard";
import { ProductContextProvider } from "./context/product-context";
import NoPage from "./pages/no-page";
import { Cart } from "./pages/cart/cart";
import { Profile } from "./pages/profile/profile";
import ProductDetails from "./pages/dashboard/product-details";

function App() {
  return (
    <div className="App">
      <ProductContextProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/product/:productId" element={<ProductDetails />} />
            <Route path="*" element={<NoPage />} />
          </Routes>
        </Router>
      </ProductContextProvider>
    </div>
  );
}

export default App;
