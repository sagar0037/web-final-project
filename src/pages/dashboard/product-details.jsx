import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { ProductContext } from "../../context/product-context";
import "./product-details.css";

const ProductDetails = () => {
  const { productId } = useParams();
  const { products, addToCart, cartItems } = useContext(ProductContext);

  const product = products.find((product) => product._id === productId);

  if (!product) {
    return <div>Product not found</div>;
  }

  const { _id, productName, price, description, productImage } = product;
  const cartItemCount = cartItems[_id] || 0;

  return (
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
        <button className="addButton" onClick={() => addToCart(_id)}>
          Add To Cart {cartItemCount > 0 && <> ({cartItemCount})</>}
        </button>
      </div>
    </div>
  );
};

export default ProductDetails;
