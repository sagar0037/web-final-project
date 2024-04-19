// cart.jsx
import React, { useContext } from "react";
import { ProductContext } from "../../context/product-context";
import CartItem from "./cartitem";
import "./cart.css";
import { Button } from "react-bootstrap";

const Cart = () => {
  const { cartItems, resetCart } = useContext(ProductContext);

  const isEmpty = Object.keys(cartItems).length === 0;

  const handleResetCart = () => {
    resetCart();
  };

  return isEmpty ? (
    <center>Your cart is empty.</center>
  ) : (
    <div className="cart">
      <h1 className="mb-4">Cart</h1>
      <div className="cartItem">
        {Object.keys(cartItems).map((productId) => (
          <CartItem key={productId} data={productId} />
        ))}
      </div>
      <div className="cartBtn">
        <Button onClick={handleResetCart}>Remove All</Button>
      </div>
      <div className="cartBtn">
        <Button>Check Out</Button>
      </div>
    </div>
  );
};

export default Cart;
