import React, { useEffect, useState }  from "react";
import Header from "../../components/Header/Header";
import MenuBar from "../../components/MenuBar/MenuBar";
import ProductCard from "../../components/ProductCard/ProductCard";
import "./Occasions.css";
import axios from "axios";

// const birthdayProducts = [
//   {
//     id: 1,
//     image:
//       "https://cdn.builder.io/api/v1/image/assets/TEMP/7d0929f5cbfc9099ff2f8e664eae6c197fbc4635009a8653487d56f3f6b1c78f?placeholderIfAbsent=true&apiKey=dab43acfe9e64948b6d46280c551ed17",
//     title: "Cherished Blooms and Birthday Cake",
//     price: 9000.0,
//     quantity: 1,
//   },
//   {
//     id: 2,
//     image:
//       "https://cdn.builder.io/api/v1/image/assets/TEMP/e65a377f7408ff91616be0c62a61b7de1cdbd3d4b13b5dcb24577d4736a06f27?placeholderIfAbsent=true&apiKey=dab43acfe9e64948b6d46280c551ed17",
//     title: "Elegant Birthday Wine Box",
//     price: 25000.0,
//     quantity: 1,
//   },
// ];

// const weddingProducts = [
//   {
//     id: 4,
//     image:
//       "https://cdn.builder.io/api/v1/image/assets/TEMP/6b661389d4715ed35300ba787f8f573bcddc759cc558248f56fc22826e33749b?placeholderIfAbsent=true&apiKey=dab43acfe9e64948b6d46280c551ed17",
//     title: "Wedding Memory Box",
//     price: 4500.0,
//     quantity: 1,
//   },
//   {
//     id:5,
//     image: "https://cdn.builder.io/api/v1/image/assets/TEMP/f923216d0ce0fa6021f53e009c189cea605aaccc218fa1fd3c337c0623c3800e?placeholderIfAbsent=true&apiKey=dab43acfe9e64948b6d46280c551ed17",
//     title: "Birthday Red Wine box",
//     price: 15000.00,
//     quantity:1,
   
//   },
// ];

export default function Occasions({ addToCart, cart }) {
  const [products, setProducts] = useState([])

   // Fetch all products
   const fetchProducts = async () => {
    try {
      const response = await axios.get("http://localhost:3000/products/Occasion");
      setProducts(response.data);
      console.log(products)
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);


  return (
    <main className="main-container">
      <Header cart={cart} />
      <MenuBar />
      <section className="products-section">
        <h2 className="section-title">Occasions</h2>
        <div className="products-grid">
          {products.map((product) => (
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
