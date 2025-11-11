// src/components/ProductSection.js
import React, { useState } from "react";
import { useCart } from "../CartContext";

function ProductSection({ title, products }) {
  const { addToCart } = useCart();
  const subcategories = [...new Set(products.map(p => p.type))];
  const [selectedSub, setSelectedSub] = useState(subcategories[0]);

  const filteredProducts = products.filter(p => p.type === selectedSub);
  const subIcons = {};
  products.forEach(p => subIcons[p.type] = p.icon || "");

  return (
    <div style={{ margin: "30px 0" }}>
      <h2 style={{ marginBottom: "15px", color: "#2874f0", fontSize: "26px" }}>{title}</h2>

      <div style={{ display: "flex", gap: "10px", marginBottom: "20px", flexWrap: "wrap" }}>
        {subcategories.map(sub => (
          <button
            key={sub}
            onClick={() => setSelectedSub(sub)}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "5px",
              padding: "6px 14px",
              border: "1px solid #2874f0",
              background: selectedSub === sub ? "#2874f0" : "white",
              color: selectedSub === sub ? "white" : "#2874f0",
              borderRadius: "20px",
              cursor: "pointer",
              fontWeight: "500",
              fontSize: "14px",
            }}
          >
            <span>{subIcons[sub]}</span> {sub}
          </button>
        ))}
      </div>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
        gap: "20px"
      }}>
        {filteredProducts.map(product => (
          <div
            key={product.id}
            style={{
              border: "1px solid #ccc",
              borderRadius: "10px",
              padding: "10px",
              textAlign: "center",
              transition: "transform 0.2s"
            }}
            onMouseEnter={e => e.currentTarget.style.transform = "scale(1.03)"}
            onMouseLeave={e => e.currentTarget.style.transform = "scale(1)"}
          >
            <img src={product.image} alt={product.name}
              style={{ width: "100%", height: "150px", objectFit: "cover", borderRadius: "8px" }}
            />
            <h3 style={{ margin: "10px 0" }}>{product.name}</h3>
            <p>₹{product.price}</p>
            <button
              onClick={() => addToCart(product)}
              style={{
                padding: "6px 12px",
                background: "#2874f0",
                color: "white",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductSection;
