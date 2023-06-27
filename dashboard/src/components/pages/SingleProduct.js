import React, { useState, useEffect } from "react";
import CommentSection from "./CommentSection";

function SingleProduct({ user, productId }) {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    getSingleProduct();
  }, []);

  function getSingleProduct() {
    fetch(`/?p=2`)
      .then((res) => res.json())
      .then((data) => setProduct(data.product))
  }

  return (
      <section key={product.id} className="single-product">
        <h3 className="name">Product Name: {product}</h3>
        <img src={product.image_url} alt="" />
        <div className="category">Category: {product.category}</div>
        <div className="price">Price: {product.price}</div>
        <div className="description">Description: {product.description}</div>
        <div className="location">Location: {product.location}</div>
      </section>
  );
}

export default SingleProduct;