import React from "react";
import Header from "./components/Header/Header";
import MenuBar from "./components/MenuBar/MenuBar";
import ProductCard from "./components/ProductCard/ProductCard";
import './Occasions.css'; // Import the regular CSS file

const birthdayProducts = [
  {
    id: 1,
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/7d0929f5cbfc9099ff2f8e664eae6c197fbc4635009a8653487d56f3f6b1c78f?placeholderIfAbsent=true&apiKey=dab43acfe9e64948b6d46280c551ed17",
    title: "Cherished Blooms and Birthday Cake",
    price: 9000.0,
  },
  {
    id: 2,
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/e65a377f7408ff91616be0c62a61b7de1cdbd3d4b13b5dcb24577d4736a06f27?placeholderIfAbsent=true&apiKey=dab43acfe9e64948b6d46280c551ed17",
    title: "Elegant Birthday Wine Box",
    price: 25000.0,
  },
  // ... rest of products data
];

const weddingProducts = [
  {
    id: 11,
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/6b661389d4715ed35300ba787f8f573bcddc759cc558248f56fc22826e33749b?placeholderIfAbsent=true&apiKey=dab43acfe9e64948b6d46280c551ed17",
    title: "Wedding Memory Box",
    price: 4500.0,
  },
  // ... rest of wedding products
];

export default function Occasions() {
  return (
    <main className="mainContainer">
      <Header />
      <MenuBar />
      <section className="productsSection">
        <h2 className="sectionTitle">Birthday</h2>
        <div className="productsGrid">
          {birthdayProducts.map((product) => (
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

      <section className="productsSection">
        <h2 className="sectionTitle">Wedding</h2>
        <div className="productsGrid">
          {weddingProducts.map((product) => (
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
