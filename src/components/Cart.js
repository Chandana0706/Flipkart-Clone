import React from "react";
import { useCart } from "../CartContext";

function Cart() {
  const { cart, removeFromCart } = useCart();

  if (cart.length === 0) {
    return <h2 style={{ textAlign: "center", marginTop: "40px" }}>🛒 Your cart is empty</h2>;
  }

  return (
    <div style={{ padding: "20px" }}>
      <h2 style={{ textAlign: "center" }}>🛒 Your Cart</h2>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "20px", justifyContent: "center" }}>
        {cart.map((item) => (
          <div
            key={item.id}
            style={{
              border: "1px solid #ccc",
              padding: "15px",
              width: "200px",
              textAlign: "center",
              borderRadius: "10px",
            }}
          >
            <img
              src={item.image}
              alt={item.name}
              style={{ width: "100%", height: "150px", objectFit: "cover", borderRadius: "10px" }}
            />
            <h3>{item.name}</h3>
            <p>₹{item.price}</p>
            <button
              onClick={() => removeFromCart(item.id)}
              style={{
                background: "red",
                color: "white",
                border: "none",
                padding: "8px 12px",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cart;


