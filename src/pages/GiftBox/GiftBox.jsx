import React from "react";
import Header from "./components/Header/Header";
import MenuBar from "./components/MenuBar/MenuBar";
import ProductCard from "./components/ProductCard/ProductCard";
import './GiftBox.css'; // Import the regular CSS file

const giftboxProducts = [
  {
    id: 1,
    image: "https://cdn.builder.io/api/v1/image/assets/TEMP/dbb0a248c0b2073baf4d52cf5ea94ae44a3afd46a6db09ef44069a0b6b354c62?placeholderIfAbsent=true&apiKey=dab43acfe9e64948b6d46280c551ed17",
    title: "Fresh Fruits Basket",
    price: 10000.00,
  },
  {
    id: 2,
    image: "https://cdn.builder.io/api/v1/image/assets/TEMP/4dd9d5771291718206afbd093bc555c276cda929f3a4ad02a75083dd9cfa7ce0?placeholderIfAbsent=true&apiKey=dab43acfe9e64948b6d46280c551ed17", 
    title: "Ferrero Rocher Box",
    price: 15000.00,
  },
  // ... rest of products data
];

export default function GiftBox() {
  return (
    <main className="mainContainer">
      <Header />
      <MenuBar />
      <section className="productsSection">
        <h2 className="sectionTitle">Gift Box</h2>
        <div className="productsGrid">
          {giftboxProducts.map((product) => (
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
