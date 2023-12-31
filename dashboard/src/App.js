import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Pages/Home";
import Login from "./components/Pages/Login";
import SignUp from "./components/Pages/SignUp";
import PostAnAdd from "./components/Pages/PostAnAdd";
import SingleProduct from "./components/Pages/SingleProduct";

function App() {
  const [user, setUser] = useState(null);
  console.log(user);
  return (
    <div className="App">
      {/* <h1>{message}</h1> */}
      <Routes>
        <Route path="/" element={<Home user={user} setUser={setUser} />} />
        <Route path="/login" element={<Login setUser={setUser} />} />
        <Route path="/signUp" element={<SignUp setUser={setUser} />} />
        <Route path="/postAnAdd" element={<PostAnAdd setUser={setUser} />} />
        <Route
          path="/api/products/search/:productId"
          element={<SingleProduct setUser={setUser} user={user} />}
        />
      </Routes>
    </div>
  );
}

export default App;
