import React from "react";

import "./ProductCard.css";

export default function ProductCard({ title, price, image}) {
  

  return (
    <article className="productCard">
      <img loading="lazy" src={image} alt={title} className="productImage" />
      <div className="productInfo">
        <h3 className="productTitle">{title}</h3>
        <p className="productPrice">Rs {price.toFixed(2)}</p>
      </div>
    </article>
  );
}
