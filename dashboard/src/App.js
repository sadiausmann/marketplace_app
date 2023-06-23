import React, { useState,useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Login from "./components/pages/Login";
import SignUp from "./components/pages/SignUp";

function App() {

  const [user, setUser] = useState(null);


  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home user={user}/>} />
        <Route path="/login" element={<Login setUser={setUser} />} />
        <Route path="/signUp" element={<SignUp />} />
      </Routes>
    </div>
  );
}

export default App;
