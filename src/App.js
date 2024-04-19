// App.js

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Dashboard from "./pages/dashboard/dashboard";
import NoPage from "./pages/no-page";
import Cart from "./pages/cart/cart";
import { Profile } from "./pages/profile/profile";
import ProductDetails from "./pages/dashboard/product-details";
import ProductContextProvider from "./context/product-context";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <div className="App">
      <ProductContextProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/product/:_id" element={<ProductDetails />} />
            <Route path="*" element={<NoPage />} />
          </Routes>
        </Router>
      </ProductContextProvider>
    </div>
  );
};

export default App;
