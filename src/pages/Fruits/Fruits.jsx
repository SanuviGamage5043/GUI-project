import React from "react";
import Header from "./components/Header/Header";
import MenuBar from "./components/MenuBar/MenuBar";
import ProductCard from "./components/ProductCard/ProductCard";
import './Fruits.css'; // Import the regular CSS file

const fruitsProducts = [
  {
    id: 1,
    image: "https://cdn.builder.io/api/v1/image/assets/TEMP/47c799c46f0b12ac36d73cbe8aa71181731014cd0772b5e212e11ea3a84e69d1?placeholderIfAbsent=true&apiKey=dab43acfe9e64948b6d46280c551ed17",
    title: "Organic Apples",
    price: 2500.00,
  },
  {
    id: 2,
    image: "https://cdn.builder.io/api/v1/image/assets/TEMP/523856ee25c93838bade6e95e4402069d5574d464f0d1891200b34f660c99c96?placeholderIfAbsent=true&apiKey=dab43acfe9e64948b6d46280c551ed17",
    title: "Organic Pears",
    price: 3000.00,
  },
  {
    id: 3,
    image: "https://cdn.builder.io/api/v1/image/assets/TEMP/b136f2d75d470bbb373e8859a37024830a397db03fe3e7e5b814b6c3aab51c8a?placeholderIfAbsent=true&apiKey=dab43acfe9e64948b6d46280c551ed17",
    title: "Organic Fruit crate",
    price: 8000.00,
  },
  {
    id: 4,
    image: "https://cdn.builder.io/api/v1/image/assets/TEMP/eee9620d8b74ff527828a4c2339a0ab94e80478a651bcfde0645bb8761e7475c?placeholderIfAbsent=true&apiKey=dab43acfe9e64948b6d46280c551ed17",
    title: "Dipped Dried Fruits",
    price: 5000.00,
  },
  {
    id: 5,
    image: "https://cdn.builder.io/api/v1/image/assets/TEMP/d6fb8f06c25579c3618cdcf0a8ad76cd48bfaae0117061cdfb021991cc8f57e9?placeholderIfAbsent=true&apiKey=dab43acfe9e64948b6d46280c551ed17",
    title: "Dried Fruit Tray",
    price: 6000.00,
  },
  {
    id: 6,
    image: "https://cdn.builder.io/api/v1/image/assets/TEMP/3d2ed1fae4ae7b0d964e1197bd0f08fc2785b14801984a6ffbb9466ba2135612?placeholderIfAbsent=true&apiKey=dab43acfe9e64948b6d46280c551ed17",
    title: "Organic Classic Fruits",
    price: 5000.00,
  },
  {
    id: 7,
    image: "https://cdn.builder.io/api/v1/image/assets/TEMP/0f36de1652d7b97124063c69a734c3b134aee6d59d5964c6017c33aed9b9d08e?placeholderIfAbsent=true&apiKey=dab43acfe9e64948b6d46280c551ed17",
    title: "Dried Fruits & Nuts",
    price: 4000.00,
  }
  // ... rest of products data
];

export default function Fruits() {
  return (
    <main className="mainContainer">
      <Header />
      <MenuBar />
      <section className="productsSection">
        <h2 className="sectionTitle">Fruits</h2>
        <div className="productsGrid">
          {fruitsProducts.map((product) => (
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
