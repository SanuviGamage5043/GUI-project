import React from "react";
import Header from "./components/Header/Header";
import MenuBar from "./components/MenuBar/MenuBar";
import ProductCard from "./components/ProductCard/ProductCard";
import './App.css'; // Import the regular CSS file

const chocoProducts = [
  {
    id: 1,
    image: 'https://cdn.builder.io/api/v1/image/assets/TEMP/492319edd1ea21b96461268a3321fed583c751bbc6551c7fb3c59b1437011ff3?placeholderIfAbsent=true&apiKey=dab43acfe9e64948b6d46280c551ed17',
    title: 'KitKat Bar',
    price: 2500.00
  }
];

export default function App() {
  return (
    <main className="main-container">
      <Header />
      <MenuBar />
      <section className="productsSection">
        <h2 className="sectionTitle">Chocolate</h2>
        <div className="productsGrid">
          {chocoProducts.map((product) => (
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
