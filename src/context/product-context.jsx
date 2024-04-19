// context/product-context.js

import React, { createContext, useState, useEffect } from "react";

export const ProductContext = createContext();

const ProductContextProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState({});

  // Fetch products from the server
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/products");
        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  // Add product to cart
  const addToCart = (productId) => {
    setCartItems((prevCartItems) => {
      const updatedCartItems = { ...prevCartItems };
      updatedCartItems[productId] = (updatedCartItems[productId] || 0) + 1;
      return updatedCartItems;
    });
  };

  // Remove product from cart
  const removeFromCart = (productId) => {
    setCartItems((prevCartItems) => {
      const updatedCartItems = { ...prevCartItems };
      if (updatedCartItems[productId] > 0) {
        updatedCartItems[productId] -= 1;
      }
      return updatedCartItems;
    });
  };

  // Get total cart amount
  const getTotalCartAmount = () => {
    let totalAmount = 0;
    products.forEach((product) => {
      const quantity = cartItems[product._id] || 0;
      totalAmount += quantity * product.pricing;
    });
    return totalAmount;
  };

  // Reset cart
  const resetCart = () => {
    setCartItems({});
  };

  const contextValues = {
    products,
    cartItems,
    addToCart,
    removeFromCart,
    getTotalCartAmount,
    resetCart,
  };

  return (
    <ProductContext.Provider value={contextValues}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductContextProvider;
