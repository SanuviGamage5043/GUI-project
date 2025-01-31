import React, { useEffect, useState }  from "react";
import Header from "../../components/Header/Header";
import MenuBar from "../../components/MenuBar/MenuBar";
import ProductCard from "../../components/ProductCard/ProductCard";
import './Bakery.css';
import axios from "axios";



// const bakeryProducts = [
//   {
//     id: 1,
//     title: "Chocolate Birthday Cake",
//     price: 5000.00,
//     image:
//       "https://cdn.builder.io/api/v1/image/assets/TEMP/f33d133b202070637493eaf03995b7ffbc93857e3f0e00d4d26ba2c970f66479?placeholderIfAbsent=true&apiKey=dab43acfe9e64948b6d46280c551ed17",
//     quantity:1
//   },

//   {
//     id: 2,
//     image: "https://cdn.builder.io/api/v1/image/assets/TEMP/340bc6f84bac139148265612c8a16031383b49c1e3b90e39af7bc7e8bf525bdf?placeholderIfAbsent=true&apiKey=dab43acfe9e64948b6d46280c551ed17",
//     title: "Lava cakes",
//     price: 1000.00,
//     quantity:1
//   },

//   {
//     id: 3,
//     image: "https://cdn.builder.io/api/v1/image/assets/TEMP/fca4380854f1c6a6bc8a46b646a61ca5797c50631f732eb0df27ad70b6b85d2d?placeholderIfAbsent=true&apiKey=dab43acfe9e64948b6d46280c551ed17",
//     title: "Muffins",
//     price: 500.00,
//     quantity:1
//   },
// ];

export default function Bakery({addToCart, cart}) {
  const [products, setProducts] = useState([])

  // Fetch all products
  const fetchProducts = async () => {
   try {
     const response = await axios.get("http://localhost:3000/products/Bakery");
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
              <h2 className="section-title">Bakery</h2>
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
