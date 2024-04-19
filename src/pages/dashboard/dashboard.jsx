// pages/dashboard/dashboard.js

import React from "react";
import Product from "./product";

const Dashboard = ({ products }) => {
  return (
    <div className="container">
      <div className="row">
        {products.map((product) => (
          <Product key={product._id} data={product} />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
