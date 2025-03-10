import React, { useEffect, useState }  from "react";
import Header from "../../components/Header/Header";
import MenuBar from "../../components/MenuBar/MenuBar";
import ProductCard from "../../components/ProductCard/ProductCard";
import "./Fruits.css";
import axios from "axios";

// const fruitsProducts = [
//   {
//     id: 1,
//     image:
//       "https://cdn.builder.io/api/v1/image/assets/TEMP/47c799c46f0b12ac36d73cbe8aa71181731014cd0772b5e212e11ea3a84e69d1?placeholderIfAbsent=true&apiKey=dab43acfe9e64948b6d46280c551ed17",
//     title: "Organic Apples",
//     price: 2500.0,
//     quantity:1
//   },
//   {
//     id: 2,
//     image:
//       "https://cdn.builder.io/api/v1/image/assets/TEMP/523856ee25c93838bade6e95e4402069d5574d464f0d1891200b34f660c99c96?placeholderIfAbsent=true&apiKey=dab43acfe9e64948b6d46280c551ed17",
//     title: "Organic Pears",
//     price: 3000.0,
//     quantity:1
//   },
//   {
//     id: 3,
//     image:
//       "https://cdn.builder.io/api/v1/image/assets/TEMP/b136f2d75d470bbb373e8859a37024830a397db03fe3e7e5b814b6c3aab51c8a?placeholderIfAbsent=true&apiKey=dab43acfe9e64948b6d46280c551ed17",
//     title: "Organic Fruit crate",
//     price: 8000.0,
//     quantity:1
//   },
// ];

export default function Fruits({ addToCart, cart }) {
  const [products, setProducts] = useState([])

   // Fetch all products
   const fetchProducts = async () => {
    try {
      const response = await axios.get("http://localhost:3000/products/Fruits");
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
        <h2 className="section-title">Fruits</h2>
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
