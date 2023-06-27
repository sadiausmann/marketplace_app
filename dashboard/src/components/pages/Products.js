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
import { Link } from "react-router-dom";
import "../../Form.scss";
import CommentSection from "./CommentSection";

function Products({ user }) {
  const [productsList, setProductsList] = useState([]);
  const [allProductsInventory, setAllProductsInventory] = useState([]);
  const [selectedProductId, setSelectedProductId] = useState(null);
  // const [product, setProduct] = useState({
  //   name: "",
  //   image_url: "",
  //   category: "",
  //   price: "",
  //   description: "",
  //   location: "",
  // });

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

      .then((res) => {
        // console.log (res))
        setProductsList(res);
        setAllProductsInventory(res);
      });
  }

  const handleSearchChange = (e) => {
    const search = e.target.value.toLowerCase();
    const newProductList = allProductsInventory.filter((product) =>
      product.name.toLowerCase().includes(search)
    );
    setProductsList(newProductList);
  };

  const handleLocationSearchChange = (e) => {
    const search = e.target.value.toLowerCase();
    const newProductList = allProductsInventory.filter((product) =>
      product.location.toLowerCase().includes(search)
    );
    setProductsList(newProductList);
  };

  const handlePriceSearchChange = (e) => {
    const search = e.target.value;
    const newProductList = allProductsInventory.filter(
      (product) => product.price <= Number(search)
    );
    setProductsList(newProductList);
  };

  const handleArtCategorySearch = () => {
    const newProductList = allProductsInventory.filter(
      (product) => product.category.toLowerCase() == "art"
    );
    setProductsList(newProductList);
  };

  const handleBooksCategorySearch = () => {
    const newProductList = allProductsInventory.filter(
      (product) => product.category.toLowerCase() == "books"
    );
    setProductsList(newProductList);
  };

  const handleClothingCategorySearch = () => {
    const newProductList = allProductsInventory.filter(
      (product) => product.category.toLowerCase() == "clothing"
    );
    setProductsList(newProductList);
  };

  const handleElectronicsCategorySearch = () => {
    const newProductList = allProductsInventory.filter(
      (product) => product.category.toLowerCase() == "electronics"
    );
    setProductsList(newProductList);
  };

  const handleHomeCategorySearch = () => {
    const newProductList = allProductsInventory.filter(
      (product) => product.category.toLowerCase() == "home"
    );
    setProductsList(newProductList);
  };

  const handleMiscellaneousCategorySearch = () => {
    const newProductList = allProductsInventory.filter(
      (product) => product.category.toLowerCase() == "miscellaneous"
    );
    setProductsList(newProductList);
  };

  const handleVehiclesCategorySearch = () => {
    const newProductList = allProductsInventory.filter(
      (product) => product.category.toLowerCase() == "vehicles"
    );
    setProductsList(newProductList);
  };

  // function deleteProduct(productId) {
  //   fetch(`/api/products/${productId}`, {
  //     method: "DELETE",
  //   }).then((res) => {
  //     if (res.status === 200) {
  //       setProductsList(
  //         productsList.filter((product) => product.id !== productId)
  //       );
  //     } else {
  //       console.log("Failed to delete product");
  //     }
  //   });
  // }

  // function canEditOrDeleteProduct(product) {
  //     return user && user === product.email;
  // }

  // function editProduct(productId) {
  //   // Implement the logic to edit a product
  //   // You can create a separate form or modal for editing and update the product data via a PUT request to the backend API
  // }

  return (
    <section>
      <div className="navbar">
        <div className="dropdown">
          <button className="dropbtn">
            Search by Category
            <i className="fa fa-caret-down"></i>
          </button>
          <div className="dropdown-content">
            <a onClick={handleArtCategorySearch}>Art</a>
            <a onClick={handleBooksCategorySearch}>Books</a>
            <a onClick={handleClothingCategorySearch}>Clothing</a>
            <a onClick={handleElectronicsCategorySearch}>Electronics</a>
            <a onClick={handleHomeCategorySearch}>Home</a>
            <a onClick={handleMiscellaneousCategorySearch}>Miscellaneous</a>
            <a onClick={handleVehiclesCategorySearch}>Vehicles</a>
          </div>
        </div>

        {/* <div className="dropdown">
          <button className="dropbtn">
            Search 
            <i className="fa fa-caret-down"></i>
          </button>
          <div className="dropdown-content">
            <a> Price</button> <input
            type="integer"
            onChange={handlePriceSearchChange}
            placeholder=""
            aria-label="Search"
          /></a>
            <a>Books</a>
            <a>Clothing</a>
            <a>Electronics</a>
            <a>Home</a>
            <a>Miscellaneous</a>
            <a>Vehicles</a>
          </div>
        </div> */}

        <div className="dropdown">
          <button className="dropbtn">Search by price</button>
          <input
            type="number"
            onChange={handlePriceSearchChange}
            placeholder=""
            aria-label="Search"
          ></input>
        </div>

        <div className="dropdown">
          <button className="dropbtn">Search by product name</button>
          <input
            type="text"
            onChange={handleSearchChange}
            placeholder=""
            aria-label="Search"
          />
        </div>

        <div className="dropdown">
          <button className="dropbtn">Search by location</button>
          <input
            type="text"
            onChange={handleLocationSearchChange}
            placeholder=""
            aria-label="Search"
          />
        </div>
      </div>

      <section className="homeProductSection"></section>
      <div className="productsList">
        {productsList.map((product) => (
          <section key={product.id} className="product">
            <Link to={`/api/products/search?p=${product.id}`} className="name">
              Product Name: {product.name}
            </Link>
            <img src={product.image_url} alt="" />
            <div className="category">Category: {product.category}</div>
            <div className="price">Price: {product.price}</div>
            <div className="description">
              Description: {product.description}
            </div>
            <div className="location">Location: {product.location}</div>
            <CommentSection productId={product.id} />
          </section>
        ))}
      </div>
    </section>
  );
}

export default Products;
