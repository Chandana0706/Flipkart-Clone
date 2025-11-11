// components/ProductCard.js
import React from "react";
import { useCart } from "../CartContext";

function ProductCard({ product }) {
  const { addToCart } = useCart();

  return (
    <div
      style={{
        border: "1px solid #ccc",
        borderRadius: "10px",
        padding: "15px",
        textAlign: "center",
        transition: "transform 0.2s",
        cursor: "pointer",
      }}
      onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
      onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
    >
      <img
        src={product.image}
        alt={product.name}
        style={{ width: "100%", height: "150px", objectFit: "cover" }}
      />
      <h3>{product.name}</h3>
      <p>₹{product.price}</p>
      <button
        onClick={() => addToCart(product)}
        style={{
          background: "#2874f0",
          color: "white",
          border: "none",
          padding: "8px 12px",
          borderRadius: "5px",
          cursor: "pointer",
          marginTop: "5px",
        }}
      >
        Add to Cart
      </button>
    </div>
  );
}

export default ProductCard;
