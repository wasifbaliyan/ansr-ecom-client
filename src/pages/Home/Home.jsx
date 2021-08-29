import axios from "axios";
import React, { useEffect, useState } from "react";
import Product from "../../components/Product/Product";
import "./Home.css";
const apiUrl = process.env.REACT_APP_API_ENDPOINT;
export default function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [sort, setSort] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    axios
      .get(apiUrl)
      .then((response) => {
        setProducts(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        console.log(error);
      });
  }, []);

  const sortedProducts = () => {
    if (sort === "asc") {
      return products.sort((a, b) => a.discounted_price - b.discounted_price);
    } else if (sort === "desc") {
      return products.sort((a, b) => b.discounted_price - a.discounted_price);
    } else {
      return products;
    }
  };

  const filteredProducts = () => {
    return sortedProducts().filter((product) =>
      product.product_name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  };

  return (
    <div className="homepage">
      <section className="search-and-sort">
        <div className="search">
          <input
            onChange={(e) => setSearchQuery(e.target.value)}
            type="search"
            placeholder="Search product by Name"
            className="search-input"
          />
        </div>
        <div className="sort">
          <label htmlFor="sorting" className="sort-label">
            Sort By:
          </label>
          <select
            onChange={(e) => setSort(e.target.value)}
            id="sorting"
            className="sort-select"
          >
            <option className="sort-option" value="">
              Select Price Filter
            </option>
            <option className="sort-option" value="asc">
              Low to high
            </option>
            <option className="sort-option" value="desc">
              High to low
            </option>
          </select>
        </div>
      </section>
      <section className="products">
        {loading && "Loading..."}
        <div className="products-container">
          {filteredProducts() &&
            filteredProducts().map((product) => (
              <Product key={product.uniq_id} product={product} />
            ))}
        </div>
      </section>
    </div>
  );
}
