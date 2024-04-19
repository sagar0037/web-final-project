import React from "react";
import { Link } from "react-router-dom";
import { ShoppingCart, UserCircle } from "phosphor-react";
import "./navbar.css";
import logo from "./../assets/logo-transparent.png";

export const Navbar = () => {
  return (
    <div className="navbar">
      <Link to="/">
        <img src={logo} alt="app-logo" />
      </Link>

      <ul className="nav-links">
        <li>
          <Link to="/"> Home </Link>
        </li>
        <li>
          <Link to="/cart">
            <ShoppingCart size={32} />
          </Link>
        </li>
        <li>
          <Link to="/profile">
            <UserCircle size={32} />
          </Link>
        </li>
      </ul>
    </div>
  );
};
