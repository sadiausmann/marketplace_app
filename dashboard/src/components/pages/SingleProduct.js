import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import CommentSection from "./CommentSection";

function SingleProduct({ user}) {
  const [product, setProduct] = useState([]);
  const { productId } = useParams()
  console.log(productId)
  useEffect(() => {
    getSingleProduct();
  }, []);
  
  function getSingleProduct() {
    fetch(`/api/products/search/?p=${productId}`)
      .then((res) => res.json())
      .then((data) => {
      let productInfo = (data.product) 
        // setProduct({
        //   name:productInfo.name,
        //   image_url:productInfo.image_url,
        //   category:productInfo.category,
        //   price:productInfo.price,
        //   description:productInfo.description,
        //   location:productInfo.location,
        // });
        setProduct(productInfo)
      })
      
  }

  return (
      <section key={product.id} className="single-product">
        <h3 className="name">Product Name: {product.name}</h3>
        <img src={product.image_url} alt="" />
        <div className="category">Category: {product.category}</div>
        <div className="price">Price: {product.price}</div>
        <div className="description">Description: {product.description}</div>
        <div className="location">Location: {product.location}</div>
      </section>
  );
}

export default SingleProduct;