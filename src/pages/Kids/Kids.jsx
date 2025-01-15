import React from "react";
import Header from "../../components/Header/Header";
import MenuBar from "../../components/MenuBar/MenuBar";
import ProductCard from "../../components/ProductCard/ProductCard";
import "./Kids.css";

const kidsProducts = [
  {
    id: 1,
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/d2aa21414a8ec9e4d88febfe9b6d9c80375496968bda70c80b78bc0de44e130b?placeholderIfAbsent=true&apiKey=dab43acfe9e64948b6d46280c551ed17",
    title: "Doctor Kit",
    price: 1500.0,
  },
  {
    id: 2,
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/752070d02ce02988dc90145b5bf54449f0976bccd0c568d5553f9f68c951bcf1?placeholderIfAbsent=true&apiKey=dab43acfe9e64948b6d46280c551ed17",
    title: "Drum Set",
    price: 3000.0,
  },
  {
    id: 3,
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/6f00f94097eb4ccd70d16f3e3655ed7e42baa00b3be22dfb689caf80918b77eb?placeholderIfAbsent=true&apiKey=dab43acfe9e64948b6d46280c551ed17",
    title: "Teddy Bear",
    price: 1200.0,
  },
];

export default function Kids({ addToCart, cart }) {
  return (
    <main className="mainContainer">
      <Header cart={cart} />
      <MenuBar />
      <section className="productsSection">
        <h2 className="sectionTitle">Kids</h2>
        <div className="productsGrid">
          {kidsProducts.map((product) => (
            <div key={product.id} className="product-item">
              <ProductCard 
              product={product} 
              addToCart={addToCart} />
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
