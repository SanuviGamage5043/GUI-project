import React from "react";
import Header from "./components/Header/Header";
import MenuBar from "./components/MenuBar/MenuBar";
import ProductCard from "./components/ProductCard/ProductCard";
import './Home.css'; // Import the regular CSS file

const homeProducts = [
  {
    id: 1,
    image: "https://cdn.builder.io/api/v1/image/assets/TEMP/518d6c7a94b175b2fb4ee9392f9d26794230c844ef3875c2ccbdcb17a1410e26?placeholderIfAbsent=true&apiKey=dab43acfe9e64948b6d46280c551ed17",
    title: "Herb Scissors",
    price: 2000.00,
  },
  {
    id: 2,
    image: "https://cdn.builder.io/api/v1/image/assets/TEMP/da3cf846df845b09d988d342d2f6567e0b613a62cf766867c13ab243cb784125?placeholderIfAbsent=true&apiKey=dab43acfe9e64948b6d46280c551ed17",
    title: "LED Lights",
    price: 8000.00,
  },
  {
    id: 3,
    image: "https://cdn.builder.io/api/v1/image/assets/TEMP/cd2a855d54a0a3e3b7b0ad6d5311319aadf0c55a437956f9f3e875775d9bc72f?placeholderIfAbsent=true&apiKey=dab43acfe9e64948b6d46280c551ed17",
    title: "Salt & Pepper Shakers",
    price: 3500.00,
  },
  {
    id: 4,
    image: "https://cdn.builder.io/api/v1/image/assets/TEMP/f0acb6d7ca390ae4a88877f0befe125a2d284d68989f86e35491cdc95bc3c312?placeholderIfAbsent=true&apiKey=dab43acfe9e64948b6d46280c551ed17",
    title: "Spoons Set",
    price: 4000.00,
  },
  {
    id: 5,
    image: "https://cdn.builder.io/api/v1/image/assets/TEMP/5678ec8b9787a0d6b6923a49e7cfc4f98dab6cb011a8a0e81840c392203e97d3?placeholderIfAbsent=true&apiKey=dab43acfe9e64948b6d46280c551ed17",
    title: "Knives Set",
    price: 5000.00,
  },
  {
    id: 6,
    image: "https://cdn.builder.io/api/v1/image/assets/TEMP/df996d8bd33553eb7f91b2a05dddaee4edf07da9dd8c929afc173900d0e0426e?placeholderIfAbsent=true&apiKey=dab43acfe9e64948b6d46280c551ed17",
    title: "Scented Candle",
    price: 1500.00,
  }
  // ... rest of products data
];

export default function Home() {
  return (
    <main className="mainContainer">
      <Header />
      <MenuBar />
      <section className="productsSection">
        <h2 className="sectionTitle">Home</h2>
        <div className="productsGrid">
          {homeProducts.map((product) => (
             <ProductCard
             key={product.id}
             title={product.title}
             price={product.price}
             image={product.image}
             onAddToCart={() => console.log(`Added ${product.title} to cart`)}
           />
          ))}
        </div>
      </section>
    </main>
  );
}
