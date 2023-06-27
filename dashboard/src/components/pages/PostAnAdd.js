import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../Form.scss"


function PostAnAdd({ user }) {
  const [productsList, setProductsList] = useState([]);
  const [newProduct, setNewProduct] = useState({
    name: "",
    image_url: "",
    category: "",
    price: "",
    description: "",
    location: "",
  });

  const navigate = useNavigate();

  function createProduct(event) {
    event.preventDefault();
    
    fetch("/api/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newProduct),
    })
      .then((res) => res.json())
      .then((res) => {
        setProductsList([...productsList, res]);
        setNewProduct({
          name: "",
          image_url: "",
          category: "",
          price: "",
          description: "",
          location: "",
        });
        if (res.error) {
          console.log("error: incorrect");
        
        } else {
          console.log("created");
          navigate("/");
        }
      })
  }

  

  function handleInputChange(event) {
    const { name, value } = event.target;
    setNewProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value,
    }));
  }

  return (
    <section className="card">

    
    <div className="productsList">
      <div className="container">
        <h2>Create Product</h2>
        <form>
          <div className="input-box">
            <input
              type="text"
              name="name"
              value={newProduct.name}
              onChange={handleInputChange}
              placeholder="Product Name"
              required
            />
          </div>
  
          <div className="input-box">
            <input
              type="text"
              name="image_url"
              value={newProduct.image_url}
              onChange={handleInputChange}
              placeholder="Image URL"
              required
            />
          </div>
  
          <div className="input-box">
            <input
              type="text"
              name="category"
              value={newProduct.category}
              onChange={handleInputChange}
              placeholder="Category"
              required
            />
          </div>
  
          <div className="input-box">
            <input
              type="number"
              name="price"
              value={newProduct.price}
              onChange={handleInputChange}
              placeholder="Price"
              required
            />
          </div>
  
          <div className="input-box">
            <input
              type="text"
              name="description"
              value={newProduct.description}
              onChange={handleInputChange}
              placeholder="Description"
              required
            />
          </div>

          <div className="input-box">
            <input
              type="text"
              name="location"
              value={newProduct.location}
              onChange={handleInputChange}
              placeholder="Location"
              required
            />
          </div>
          <div className="input-box button"></div>
          <button onClick={createProduct}>Create</button>
        </form>
      </div>
    </div>
    </section>
  );
   
}

export default PostAnAdd