import React, { useContext } from "react";
import { ProductContext } from "../../context/product-context";
import { Link } from "react-router-dom";

export const Product = (props) => {
  const { id, productName, price, description, productImage } = props.data;
  const { addToCart, cartItems } = useContext(ProductContext);

  const cartItemCount = cartItems[id];

  return (
    <div className="product">
      <Link to={`/product/${id}`}>
        <img src={productImage} />
        <div className="productDetails">
          <p>
            <b>{productName}</b>
          </p>
          <p>{description}</p>
          <p> ${price}</p>
        </div>
      </Link>
      <button className="addButton" onClick={() => addToCart(id)}>
        Add To Cart {cartItemCount > 0 && <> ({cartItemCount})</>}
      </button>
    </div>
  );
};
