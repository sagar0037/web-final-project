// pages/dashboard/product.jsx

import React from "react";
import { Link } from "react-router-dom";
import "./product.css";

const Product = ({ data, onAddToCart }) => {
  const { _id, description, image, pricing } = data;

  return (
    <div className="product card">
      <img src={image} alt={description} className="card-img-top" />
      <div className="card-body">
        <h5 className="card-title">{description}</h5>
        <p className="card-text">Price: ${pricing}</p>
        <button className="addCartBtn" onClick={() => onAddToCart(_id)}>
          Add To Cart
        </button>
        <Link to={`/product/${_id}`} className="viewDetailsBtn">
          View Details
        </Link>
      </div>
    </div>
  );
};

export default Product;
