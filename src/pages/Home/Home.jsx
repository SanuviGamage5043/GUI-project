import React from "react";
import Header from "../../components/Header/Header";
import MenuBar from "../../components/MenuBar/MenuBar";
import ProductCard from "../../components/ProductCard/ProductCard";
import "./Home.css";

const homeProducts = [
  {
    id: 1,
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/518d6c7a94b175b2fb4ee9392f9d26794230c844ef3875c2ccbdcb17a1410e26?placeholderIfAbsent=true&apiKey=dab43acfe9e64948b6d46280c551ed17",
    title: "Herb Scissors",
    price: 2000.0,
    quantity:1,
  },
  {
    id: 2,
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/da3cf846df845b09d988d342d2f6567e0b613a62cf766867c13ab243cb784125?placeholderIfAbsent=true&apiKey=dab43acfe9e64948b6d46280c551ed17",
    title: "LED Lights",
    price: 8000.0,
    quantity:1,
  },
  {
    id: 3,
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/cd2a855d54a0a3e3b7b0ad6d5311319aadf0c55a437956f9f3e875775d9bc72f?placeholderIfAbsent=true&apiKey=dab43acfe9e64948b6d46280c551ed17",
    title: "Salt & Pepper Shakers",
    price: 3500.0,
    quantity:1,
  }
  
];

export default function Home({ addToCart, cart }) {
  return (
    <main className="main-container">
      <Header cart={cart} />
      <MenuBar />
      <section className="products-section">
        <h2 className="section-title">Home</h2>
        <div className="products-grid">
          {homeProducts.map((product) => (
            <div key={product.id} className="product-item">
              <ProductCard 
              product={product} 
              addToCart={addToCart} 
              />
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
