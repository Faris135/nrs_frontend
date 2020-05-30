import React, { useState } from "react";
import Product from "./Product";
import "./ProductList.css";

const ProductList = (props) => {
  const { products } = props;

  return (
    <div className="listContainer">
      <ul className="list">
        {products.map((product) => (
          <li key={product.product_name}>
            <Product
              naziv_proizvoda={product.product_name}
              cijena_proizvoda={product.product_price}
            />
            <button
              type="button"
              onClick={() => {
                props.onAddProduct(product);
              }}
            >
              Add to order
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
