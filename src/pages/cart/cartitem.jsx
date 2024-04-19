import React, { useContext } from "react";
import { ProductContext } from "../../context/product-context";

export const CartItem = (props) => {
  const { id, productName, price, description, productImage } = props.data;
  const { cartItems, addToCart, removeFromCart, updateCartItemCount } =
    useContext(ProductContext);

  return (
    <div className="cartItem">
      <img src={productImage} />
      <div className="productDetails">
        <p>
          <b>{productName}</b>
        </p>
        <p>{description}</p>
        <p> Price: ${price}</p>
        <div className="countHandler">
          <button onClick={() => removeFromCart(id)}> - </button>
          <input
            value={cartItems[id]}
            onChange={(e) => updateCartItemCount(Number(e.target.value), id)}
          />
          <button onClick={() => addToCart(id)}> + </button>
        </div>
      </div>
    </div>
  );
};
