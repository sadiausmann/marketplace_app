// import React, { useState, useEffect } from "react";

// function Products() {
//   const [productsList, setProductsList] = useState([]);

//   useEffect(() => {
//     getProductList();
//   }, []);

//   function getProductList() {
//     fetch("/api/products")
//       .then((res) => res.json())
//       .then((res) => setProductsList(res));
//   }

//   return (
//     <div className="productsList">
//       {productsList.map((product, index) => (
//         <section key={index} className="product">
//           <div>Product Name: {product.name}</div>
//           <img src={product.image_url} alt="" />
//           <div>Category: {product.category}</div>
//           <div>Price: {product.price}</div>
//           <div>Description: {product.description}</div>
//           <div>Location: {product.location}</div>
//         </section>
//       ))}
//     </div>
//   );
// }

// export default Products;

import React, { useState, useEffect } from "react";
import "../../Form.scss"

function Products({ user }) {
  const [productsList, setProductsList] = useState([]);
  

  // const [newProduct, setNewProduct] = useState({
  //   name: "",
  //   image_url: "",
  //   category: "",
  //   price: "",
  //   description: "",
  //   location: "",
  // });

  useEffect(() => {
    getProductList();
  }, []);

  function getProductList() {
    fetch("/api/products")
      .then((res) => res.json())
      
      .then((res) => 
        // console.log(res))
        setProductsList(res))
  
  }

  function deleteProduct(productId) {
    fetch(`/api/products/${productId}`, {
      method: "DELETE",
    })
      .then((res) => {
        if (res.status === 200) {
          setProductsList(productsList.filter((product) => product.id !== productId));
        } else {
          console.log("Failed to delete product");
        }
      })

  }

  // function canEditOrDeleteProduct(product) {
  //     return user && user === product.email;
  // }

  // function editProduct(productId) {
  //   // Implement the logic to edit a product
  //   // You can create a separate form or modal for editing and update the product data via a PUT request to the backend API
  // }

  return (

    <section className="homeProductSection">
    <div className="productsList">
      {productsList.map((product) => (
        <section key={product.id} className="product">
          <div className= "name">Product Name: {product.name}</div>
          <img src={product.image_url} alt="" />
          <div className="category">Category: {product.category}</div>
          <div className="price">Price: {product.price}</div>
          <div className="description">Description: {product.description}</div>
          <div className="location">Location: {product.location}</div>
          {/* {product.email === user.email && (
       
            <div>
              <button onClick={() => editProduct(product.id)}>Edit</button>
              <button onClick={() => deleteProduct(product.id)}>Delete</button>
            </div>
          )} */}
        </section>
      ))}
    </div>
          

    </section>
  );
}




export default Products
