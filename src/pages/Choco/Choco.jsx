import React, { useEffect, useState }  from "react";
import Header from "../../components/Header/Header";
import MenuBar from "../../components/MenuBar/MenuBar";
import ProductCard from "../../components/ProductCard/ProductCard";
import "./Choco.css"; 
import axios from "axios";

// const chocoProducts = [
//   {
//     id: 1,
//     image:
//       "https://cdn.builder.io/api/v1/image/assets/TEMP/492319edd1ea21b96461268a3321fed583c751bbc6551c7fb3c59b1437011ff3?placeholderIfAbsent=true&apiKey=dab43acfe9e64948b6d46280c551ed17",
//     title: "KitKat Bar",
//     price: 2500.0,
//     quantity: 1,
//   },

//   {
//     id:2,
//     image: "https://cdn.builder.io/api/v1/image/assets/TEMP/84528618be7628cfaab6af15635b61b7ed1a0d45ad5a065fe88313aa0cb68fca?placeholderIfAbsent=true&apiKey=dab43acfe9e64948b6d46280c551ed17",
//     title: "Ferrero Rocher",
//     price: 10000.00,
//     quantity:1,
//   },
// ];

export default function Choco({addToCart, cart}) {
  const [products, setProducts] = useState([])

   // Fetch all products
   const fetchProducts = async () => {
    try {
      const response = await axios.get("http://localhost:3000/products/Chocolate");
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
        <h2 className="section-title">Chocolate</h2>
        <div className="products-grid">
          {products.map((product) => (
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
