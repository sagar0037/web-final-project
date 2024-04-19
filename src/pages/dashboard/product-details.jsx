import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { PRODUCTS } from "../../products";
import { ProductContext } from "../../context/product-context";
import "./product-details.css";

const ProductDetails = () => {
  const { productId } = useParams();
  const product = PRODUCTS.find(
    (product) => product.id === parseInt(productId)
  );

  const { id, productName, price, description, productImage } = product;
  const { addToCart, cartItems } = useContext(ProductContext);
  const cartItemCount = cartItems[id];

  return !product ? (
    <div>Product not found</div>
  ) : (
    <div className="container">
      <div>
        <img src={productImage} alt={productName} />
      </div>
      <div className="product-details">
        <div className="info">
          <h2>{productName}</h2>
        </div>
        <div className="info">
          <p>{description}</p>
        </div>
        <div className="info">
          <p>Price: ${price}</p>
        </div>
        <button className="addButton" onClick={() => addToCart(id)}>
          Add To Cart {cartItemCount > 0 && <> ({cartItemCount})</>}
        </button>
      </div>
    </div>
  );
};

export default ProductDetails;
