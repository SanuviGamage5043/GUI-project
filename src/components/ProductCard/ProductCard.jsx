import React from "react";
import "./ProductCard.css";

export default function ProductCard({ product, addToCart}) {
  

  return (
    <article className="productCard">
      <img loading="lazy" src={product.image_url} alt={product.name} className="productImage" />
      <div className="productInfo">
        <h3 className="productTitle">{product.name}</h3>
        <p className="productPrice">Rs {product.price.toFixed(2)}</p>
      </div>
      <button className="addtocartbutton" onClick={() => addToCart(product)}>
                Add to Cart
              </button>
    </article>
  );
}
