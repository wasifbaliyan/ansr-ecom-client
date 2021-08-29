import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./ProductDetails.css";
import Placeholder from "../../placeholder.jpg";
const apiUrl = process.env.REACT_APP_API_ENDPOINT;

export default function ProductDetails() {
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);

  const { id } = useParams();

  const handleImageError = (e) => {
    e.target.src = Placeholder;
  };
  useEffect(() => {
    axios
      .get(apiUrl + "/" + id)
      .then((response) => {
        setProduct(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        console.log(error);
      });
  }, [id]);
  return (
    <div className="product-details">
      {loading && "Loading..."}
      <div className="product-container">
        <div className="product-info">
          <h2 className="product-heading">{product.product_name}</h2>
          <h3 className="product-brand-name">{product.brand}</h3>
        </div>
        <div className="product-prices">
          <div className="product-retail-price">₹{product.retail_price}</div>
          <div className="product-discount-price">
            ₹{product.discounted_price}
          </div>
        </div>
      </div>
      <div className="product-images">
        {product.image &&
          product.image.map((img) => (
            <figure className="product-fig" key={img}>
              <img
                onError={handleImageError}
                className="product-img"
                src={img}
                alt={product.product_name}
              />
            </figure>
          ))}
      </div>
      <div className="product-description">
        <h3 className="product-desc-heading">Product Description:</h3>
        <p className="product-text-info">{product.description}</p>
      </div>
    </div>
  );
}
