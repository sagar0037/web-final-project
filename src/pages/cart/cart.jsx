import React, { useContext } from "react";
import { ProductContext } from "../../context/product-context";
import { PRODUCTS } from "../../products";
import { CartItem } from "./cartitem";
import { useNavigate } from "react-router-dom";
import "./cart.css";

export const Cart = () => {
  const { cartItems, getTotalCartAmount, deleteAll } =
    useContext(ProductContext);
  const totalAmount = getTotalCartAmount();

  const navigate = useNavigate();

  return (
    <div className="cart">
      <div>
        <h1>Your Cart Items</h1>

        {PRODUCTS.map((product) => {
          if (cartItems[product.id] !== 0) {
            return <CartItem data={product} />;
          }
        })}
      </div>

      {totalAmount > 0 ? (
        <div className="delete">
          <p> Subtotal: ${totalAmount} </p>
          <button onClick={() => navigate("/")}> Add More Items </button>
          <button
            onClick={() => {
              deleteAll();
            }}
          >
            Delete All
          </button>
        </div>
      ) : (
        <h1> Cart is Empty </h1>
      )}
    </div>
  );
};
