// pages/dashboard/product.js

import React from "react";
import { Link } from "react-router-dom";

const Product = ({ data }) => {
  const { _id, description, image, pricing } = data;
  return (
    <div className="col-md-4 mb-4">
      <div className="card h-100">
        <img
          src={image}
          className="card-img-top img-fluid"
          alt={description}
          style={{ maxHeight: "280px", objectFit: "contain" }}
        />
        <div className="card-body">
          <h5 className="card-title">{description}</h5>
          <p className="card-text">${pricing}</p>
          <Link to={`/product/${_id}`} className="btn btn-primary">
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Product;
