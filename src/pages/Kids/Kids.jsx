import React from "react";
import Header from "./components/Header/Header";
import MenuBar from "./components/MenuBar/MenuBar";
import ProductCard from "./components/ProductCard/ProductCard";
import './Kids.css'; // Import the regular CSS file

const kidsProducts = [
  {
    id: 1,
    image: "https://cdn.builder.io/api/v1/image/assets/TEMP/d2aa21414a8ec9e4d88febfe9b6d9c80375496968bda70c80b78bc0de44e130b?placeholderIfAbsent=true&apiKey=dab43acfe9e64948b6d46280c551ed17",
    title: "Doctor Kit",
    price: 1500.00,
    altText: "Children's doctor play kit with medical instruments"
  },
  {
    id: 2,
    image: "https://cdn.builder.io/api/v1/image/assets/TEMP/752070d02ce02988dc90145b5bf54449f0976bccd0c568d5553f9f68c951bcf1?placeholderIfAbsent=true&apiKey=dab43acfe9e64948b6d46280c551ed17",
    title: "Drum Set",
    price: 3000.00,
    altText: "Colorful children's drum set"
  },
  {
    id: 3,
    image: "https://cdn.builder.io/api/v1/image/assets/TEMP/6f00f94097eb4ccd70d16f3e3655ed7e42baa00b3be22dfb689caf80918b77eb?placeholderIfAbsent=true&apiKey=dab43acfe9e64948b6d46280c551ed17",
    title: "Teddy Bear",
    price: 1200.00,
    altText: "Soft plush teddy bear"
  },
  {
    id: 4,
    image: "https://cdn.builder.io/api/v1/image/assets/TEMP/9265ae34691ea9e449d9d62f22cc33eba6a88dfb81a76c060c9a42c8aa1adb81?placeholderIfAbsent=true&apiKey=dab43acfe9e64948b6d46280c551ed17",
    title: "Building Blocks",
    price: 2500.00,
    altText: "Colorful building blocks set"
  },
  {
    id: 5,
    image: "https://cdn.builder.io/api/v1/image/assets/TEMP/7ea9e8c0f7d1177b984c24c09a48a7e96c4f9112ad372f75de0541cf3d7ce62a?placeholderIfAbsent=true&apiKey=dab43acfe9e64948b6d46280c551ed17",
    title: "Lamborghini Car",
    price: 4000.00,
    altText: "Toy Lamborghini car model"
  },
  {
    id: 6,
    image: "https://cdn.builder.io/api/v1/image/assets/TEMP/4630c99a37b8b3a57bfeacaed2fc0f0bc3d7fe3fb41f4ba63ac1ac6054c03bfb?placeholderIfAbsent=true&apiKey=dab43acfe9e64948b6d46280c551ed17",
    title: "Frock",
    price: 1300.00,
    altText: "Children's frock dress"
  }
  // ... rest of products data
];

export default function Kids() {
  return (
    <main className="mainContainer">
      <Header />
      <MenuBar />
      <section className="productsSection">
        <h2 className="sectionTitle">Kids</h2>
        <div className="productsGrid">
          {kidsProducts.map((product) => (
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
