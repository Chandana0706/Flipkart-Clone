// src/components/Navbar.js
import React from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart, FaSearch } from "react-icons/fa";
import "./NavBar.css";
import { useCart } from "../CartContext";

function NavBar({ onSearch }) {
  const { cart } = useCart();

  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "10px 20px",
        background: "#2874f0",
        color: "white",
        position: "sticky",
        top: 0,
        zIndex: 100,
      }}
    >
      {/* Logo / Title */}
      <h1 style={{ margin: 0, fontSize: "1.5rem" }}>
        Flipkart <span style={{ color: "#ffe500", fontWeight: 400 }}>Clone</span>
      </h1>

      {/* Search Bar */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          backgroundColor: "white",
          borderRadius: "4px",
          overflow: "hidden",
          width: "50%",
          margin: "0 20px",
        }}
      >
        <input
          type="text"
          placeholder="Search for products, brands and more"
          onChange={(e) => onSearch && onSearch(e.target.value)}
          style={{
            flex: 1,
            border: "none",
            outline: "none",
            padding: "8px 12px",
            fontSize: "0.95rem",
          }}
        />
        <button
          style={{
            backgroundColor: "white",
            border: "none",
            padding: "8px 10px",
            cursor: "pointer",
            color: "#2874f0",
            fontSize: "1rem",
          }}
        >
          <FaSearch />
        </button>
      </div>

      {/* Cart */}
      <Link
        to="/cart"
        style={{
          color: "white",
          textDecoration: "none",
          fontWeight: "500",
          display: "flex",
          alignItems: "center",
          gap: "6px",
        }}
      >
        <FaShoppingCart /> Cart (
        {cart.reduce((acc, item) => acc + item.quantity, 0)})
      </Link>
    </nav>
  );
}

export default NavBar;
