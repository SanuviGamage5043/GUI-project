import React from "react";
import Header from "../../components/Header/Header";
import MenuBar from "../../components/MenuBar/MenuBar";
import ProductCard from "../../components/ProductCard/ProductCard";
import "./Choco.css"; // Import the regular CSS file

const chocoProducts = [
  {
    id: 1,
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/492319edd1ea21b96461268a3321fed583c751bbc6551c7fb3c59b1437011ff3?placeholderIfAbsent=true&apiKey=dab43acfe9e64948b6d46280c551ed17",
    title: "KitKat Bar",
    price: 2500.0,
    quantity: 1,
  },
];

export default function Choco({addToCart, cart}) {
  return (
    <main className="main-container">
      <Header cart={cart} />
      <MenuBar />
      <section className="productsSection">
        <h2 className="sectionTitle">Chocolate</h2>
        <div className="productsGrid">
          {chocoProducts.map((product) => (
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
