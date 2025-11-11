import React from "react";
import ProductCard from "./ProductCard";
import iphoneImg from "./images/iphone15.jpeg";
import samsungImg from "./images/SamsungGalaxyS23.jpeg";
import redmiImg from "./images/redminote13.jpeg";
import oneplus12rImg from "./images/oneplus12r.jpeg";

//import redmiImg from "./images/redminote9.jpeg";
//import redmiImg from "./images/redminote9.jpeg";
const products = [
  {
    id: 1,
    name: "iPhone 15",
    price: 79999,
    //image: "iphoneImg",
    
  },
  {
    id: 2,
    name: "Samsung Galaxy S23",
    price: 69999,
    image: "samsungImg",
  },
  {
    id: 3,
    name: "Redmi Note 13 Pro",
    price: 24999,
    image: "redmiImg",
  },
  {
    id: 4,
    name: "OnePlus 12R",
    price: 39999,
    image: "oneplus12rImg",
  },
];

function ProductList() {
  return (
    <div style={styles.container}>
      {products.map((p) => (
        <ProductCard key={p.id} product={p} />
      ))}
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
  },
};

export default ProductList;
