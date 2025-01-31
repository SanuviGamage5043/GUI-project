import React, { useEffect, useState }  from "react";
import Header from "../../components/Header/Header";
import MenuBar from "../../components/MenuBar/MenuBar";
import ProductCard from "../../components/ProductCard/ProductCard";
import "./Kids.css";
import axios from "axios";

// const kidsProducts = [
//   {
//     id: 1,
//     image:
//       "https://cdn.builder.io/api/v1/image/assets/TEMP/d2aa21414a8ec9e4d88febfe9b6d9c80375496968bda70c80b78bc0de44e130b?placeholderIfAbsent=true&apiKey=dab43acfe9e64948b6d46280c551ed17",
//     title: "Doctor Kit",
//     price: 1500.0,
//     quantity:1,
//   },
//   {
//     id: 2,
//     image:
//       "https://cdn.builder.io/api/v1/image/assets/TEMP/752070d02ce02988dc90145b5bf54449f0976bccd0c568d5553f9f68c951bcf1?placeholderIfAbsent=true&apiKey=dab43acfe9e64948b6d46280c551ed17",
//     title: "Drum Set",
//     price: 3000.0,
//     quantity:1,
//   },
//   {
//     id: 3,
//     image:
//       "https://cdn.builder.io/api/v1/image/assets/TEMP/6f00f94097eb4ccd70d16f3e3655ed7e42baa00b3be22dfb689caf80918b77eb?placeholderIfAbsent=true&apiKey=dab43acfe9e64948b6d46280c551ed17",
//     title: "Teddy Bear",
//     price: 1200.0,
//     quantity:1,
//   },
// ];

export default function Kids({ addToCart, cart }) {
  const [products, setProducts] = useState([])

   // Fetch all products
   const fetchProducts = async () => {
    try {
      const response = await axios.get("http://localhost:3000/products/Kids");
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
        <h2 className="section-title">Kids</h2>
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
