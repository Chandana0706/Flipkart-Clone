// components/CartPage.js
import React from "react";
import { useNavigate } from "react-router-dom"; // ✅ import useNavigate
import { useCart } from "../CartContext";

function CartPage() {
  const navigate = useNavigate(); // ✅ hook to navigate programmatically
  const { cart, removeFromCart, increaseQuantity, decreaseQuantity, clearCart } = useCart();

  const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  if (cart.length === 0) {
    return (
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        🛒 Your cart is empty
        <br />
        <button
          onClick={() => navigate(-1)} // go back to previous page
          style={{
            marginTop: "20px",
            padding: "10px 20px",
            background: "#2874f0",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          ← Back
        </button>
      </div>
    );
  }

  return (
    <div style={{ padding: "20px" }}>
      {/* Back Button */}
      <button
        onClick={() => navigate(-1)}
        style={{
          marginBottom: "20px",
          padding: "10px 20px",
          background: "#2874f0",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        ← Back
      </button>

      <h2 style={{ marginBottom: "20px", color: "#2874f0" }}>🛒 Your Cart</h2>

      <div style={{ display: "grid", gap: "20px" }}>
        {cart.map(item => (
          <div
            key={item.id}
            style={{
              display: "flex",
              alignItems: "center",
              border: "1px solid #ccc",
              borderRadius: "8px",
              padding: "10px",
            }}
          >
            <img
              src={item.image}
              alt={item.name}
              style={{ width: "100px", height: "100px", objectFit: "cover", borderRadius: "6px", marginRight: "20px" }}
            />
            <div style={{ flex: 1 }}>
              <h3>{item.name}</h3>
              <p>₹{item.price} × {item.quantity}</p>
              <div style={{ display: "flex", gap: "10px", marginTop: "5px" }}>
                <button onClick={() => increaseQuantity(item.id)} style={{ padding: "4px 8px", cursor: "pointer" }}>+</button>
                <button onClick={() => decreaseQuantity(item.id)} style={{ padding: "4px 8px", cursor: "pointer" }}>-</button>
                <button onClick={() => removeFromCart(item.id)} style={{ padding: "4px 8px", cursor: "pointer", background: "red", color: "white", border: "none" }}>Remove</button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div style={{ marginTop: "20px", textAlign: "right", fontWeight: "600", fontSize: "18px" }}>
        Total: ₹{totalPrice}
      </div>

      <button
        onClick={clearCart}
        style={{
          marginTop: "10px",
          padding: "10px 20px",
          background: "#2874f0",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Clear Cart
      </button>
    </div>
  );
}

export default CartPage;
