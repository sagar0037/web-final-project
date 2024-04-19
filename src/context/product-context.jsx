import { createContext, useState } from "react";
import { PRODUCTS } from "../products";

export const ProductContext = createContext(null);

// at default there are no items in the cart
const getDefaultCart = () => {
  let cart = {};
  for (let i = 1; i < PRODUCTS.length + 1; i++) {
    cart[i] = 0;
  }
  return cart;
};

export const ProductContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(getDefaultCart());

  //getting total amount of items in the cart
  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = PRODUCTS.find((product) => product.id === Number(item));
        totalAmount += cartItems[item] * itemInfo.price;
      }
    }
    return totalAmount;
  };

  //increasing the number of item in the cart by 1
  const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  };

  //decreasing the number of item in the cart by 1
  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  //updating increased or removed values
  const updateCartItemCount = (newAmount, itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: newAmount }));
  };

  //deleting all items
  const deleteAll = () => {
    setCartItems(getDefaultCart());
  };

  const contextValues = {
    cartItems,
    addToCart,
    updateCartItemCount,
    removeFromCart,
    getTotalCartAmount,
    deleteAll,
  };

  return (
    <ProductContext.Provider value={contextValues}>
      {props.children}
    </ProductContext.Provider>
  );
};
