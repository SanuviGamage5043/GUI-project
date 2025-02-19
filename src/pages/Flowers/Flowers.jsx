import React, { useEffect, useState }  from "react";
import Header from "../../components/Header/Header";
import MenuBar from "../../components/MenuBar/MenuBar";
import ProductCard from "../../components/ProductCard/ProductCard";
import "./Flowers.css";
import axios from "axios";

// const flowerProducts = [
//   {
//     id: 1,
//     image: 'https://cdn.builder.io/api/v1/image/assets/TEMP/bc2b22eb531762798998de022e8bf5c82a95901905cb2566af75b6413b0898d7?placeholderIfAbsent=true&apiKey=dab43acfe9e64948b6d46280c551ed17',
//     title: 'Red Roses',
//     price: 5000.00,
//     quantity:1

//   },
//   {
//     id: 2,
//     image: 'https://cdn.builder.io/api/v1/image/assets/TEMP/41ac9e780c1a4ba8950826345b9d1fe84dc805234eeb7008ea5d1706051ac484?placeholderIfAbsent=true&apiKey=dab43acfe9e64948b6d46280c551ed17',
//     title: 'Classic Budding Roses',
//     price: 4500.00,
//     quantity:1
//   }

// ];

export default function Flowers({ addToCart, cart }) {
  const [products, setProducts] = useState([])

   // Fetch all products
   const fetchProducts = async () => {
    try {
      const response = await axios.get("http://localhost:3000/products/Flowers");
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
              <h2 className="section-title">Flowers</h2>
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
