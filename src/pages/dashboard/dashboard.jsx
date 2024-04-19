// pages/dashboard/dashboard.jsx

import React, { useContext } from "react";
import { ProductContext } from "../../context/product-context";
import Product from "./product";
import "./dashboard.css";

const Dashboard = () => {
  const { products, addToCart } = useContext(ProductContext);

  return (
    <div className="dashboard">
      <section className="ad-section">
        <h3>Great Offer</h3>
        <h4>Grab it right now or never!!</h4>
        <h2>Super Value Deals</h2>
        <p>TECHNI offer you great deals for all products.</p>
      </section>
      <div className="row">
        {products.map((product) => (
          <div key={product._id} className="col-md-4 mb-4">
            <Product data={product} onAddToCart={addToCart} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
