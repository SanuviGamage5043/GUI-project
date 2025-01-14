import React from "react";
import Header from "../../components/Header/Header";
import MenuBar from "../../components/MenuBar/MenuBar";
import ProductCard from "../../components/ProductCard/ProductCard";
import "./Bakery.css";



const bakeryProducts = [
  {
    id: 1,
    title: "Chocolate Birthday Cake",
    price: 5000.0,
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/f33d133b202070637493eaf03995b7ffbc93857e3f0e00d4d26ba2c970f66479?placeholderIfAbsent=true&apiKey=dab43acfe9e64948b6d46280c551ed17",
  },
];

export default function Bakery() {

  const addToCart = (product) => {
    console.log(`${product.title} added to the cart.`);
  };
  
  return (
    <main className="main-container">
      <Header />
      <div className="menu">
        <MenuBar />
      </div>
      <section className="products-section">
        <h2 className="section-title">Bakery</h2>
        <div className="products-grid">
          {bakeryProducts.map((product) => (
            <div key={product.id} className="product-item">
              <ProductCard
                title={product.title}
                price={product.price}
                image={product.image}
              />
              <button className="add-to-cart-btn" onClick={() => addToCart(product)}>
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
