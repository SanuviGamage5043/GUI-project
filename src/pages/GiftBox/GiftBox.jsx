import React from "react";
import Header from "../../components/Header/Header";
import MenuBar from "../../components/MenuBar/MenuBar";
import ProductCard from "../../components/ProductCard/ProductCard";
import "./GiftBox.css";

const giftboxProducts = [
  {
    id: 1,
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/dbb0a248c0b2073baf4d52cf5ea94ae44a3afd46a6db09ef44069a0b6b354c62?placeholderIfAbsent=true&apiKey=dab43acfe9e64948b6d46280c551ed17",
    title: "Fresh Fruits Basket",
    price: 10000.0,
    quantity: 1,
  },
  {
    id: 2,
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/4dd9d5771291718206afbd093bc555c276cda929f3a4ad02a75083dd9cfa7ce0?placeholderIfAbsent=true&apiKey=dab43acfe9e64948b6d46280c551ed17",
    title: "Ferrero Rocher Box",
    price: 15000.0,
    quantity: 1,
  },
];

export default function GiftBox({ addToCart, cart }) {
  return (
    <main className="mainContainer">
      <Header cart={cart} />
      <MenuBar />
      <section className="productsSection">
        <h2 className="sectionTitle">Gift Box</h2>
        <div className="productsGrid">
          {giftboxProducts.map((product) => (
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
