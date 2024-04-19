import "./dashboard.css";
import React from "react";
import { PRODUCTS } from "../../products";
import { Product } from "./product";

export const Dashboard = () => {
  return (
    <div className="dashboard">
      <section className="ad-section">
        <h3>Great Offer</h3>
        <h4>Grab it right now or never!!</h4>
        <h2>Super Value Deals</h2>
        <p>TECHNI offer you great deals for all products.</p>
      </section>

      <section className="products">
        {PRODUCTS.map((product) => (
          <Product data={product} />
        ))}
      </section>
    </div>
  );
};
