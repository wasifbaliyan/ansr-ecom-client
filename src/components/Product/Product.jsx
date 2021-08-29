import React from "react";
import "./Product.css";
import Placeholder from "../../placeholder.jpg";
import { Link } from "react-router-dom";

export default function Product({ product }) {
  const handleImageError = (e) => {
    e.target.src = Placeholder;
  };
  return (
    <Link
      to={`/products/${product._id}`}
      target="_blank"
      rel="noopener noreferrer"
      className="product-link"
    >
      <div className="product">
        <figure className="product-figure">
          <img
            onError={handleImageError}
            className="product-image"
            src={product.image[0]}
            alt={product.product_name}
          />
        </figure>
        <h5 className="product-title">{product.product_name}</h5>
        <h6 className="product-brand">{product.brand}</h6>
        <div className="product-price">
          <div className="retail-price">₹{product.retail_price}</div>
          <div className="discount-price">₹{product.discounted_price}</div>
        </div>
      </div>
    </Link>
  );
}
