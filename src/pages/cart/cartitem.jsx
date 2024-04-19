// cartitem.jsx
import React, { useContext } from "react";
import { ProductContext } from "../../context/product-context";
import "./cartitem.css";

const CartItem = ({ data }) => {
  const {
    cartItems,
    addToCart,
    removeFromCart,
    updateCartItemCount,
    products,
  } = useContext(ProductContext);
  const quantity = cartItems[data] || 0;
  const product = products.find((p) => p._id === data);

  return (
    <div className="cart-item card mb-3">
      <div className="row g-0">
        <div className="col-md-4">
          <img
            src={product.image}
            alt={product.description}
            className="img-fluid"
          />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{product.description}</h5>
            <p className="card-text">Price: ${product.pricing}</p>
            <div className="quantity-controls">
              <button
                className="btn btn-secondary"
                onClick={() => removeFromCart(data)}
              >
                -
              </button>
              <input
                type="number"
                value={quantity}
                onChange={(e) =>
                  updateCartItemCount(Number(e.target.value), data)
                }
              />
              <button
                className="btn btn-secondary"
                onClick={() => addToCart(data)}
              >
                +
              </button>
            </div>
            <button
              className="btn btn-danger"
              onClick={() => removeFromCart(data)}
            >
              Remove
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
