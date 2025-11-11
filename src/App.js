// App.js
import React from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/Navbar";
import ProductSection from "./components/ProductSection";
import CartPage from "./components/CartPage";
import { products } from "./data/products";

function App() {
  const categories = [...new Set(products.map(p => p.category))];

  return (
    <>
      <NavBar />
      <Routes>
        <Route
          path="/"
          element={
            <div style={{ padding: "20px" }}>
              {categories.map(category => (
                <ProductSection
                  key={category}
                  title={category}
                  products={products.filter(p => p.category === category)}
                />
              ))}
            </div>
          }
        />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
    </>
  );
}

export default App;
