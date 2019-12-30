import React from "react";
import { Link } from "react-router-dom";
import "../styles/ProductList.css";

const products = ["car", "bike", "motorcycle"];

const ProductsListPage = () => {
  const list = products.map(product => (
    <li key={product}>
      <Link to={`/product/${product}`}>{product}</Link>
    </li>
  ));
  return (
    <div className="products">
      <h3>Lista produktów</h3>
      <div>
        <ul>{list}</ul>
      </div>
    </div>
  );
};

export default ProductsListPage;
