import React, { useState,useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Pages/Home";
import Login from "./components/Pages/Login";
import SignUp from "./components/Pages/SignUp";

function App() {

  const [user, setUser] = useState(null);
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch('/api/message')
      .then(response => response.json())
      .then(data => setMessage(data.message))
      .catch(error => console.log(error));
  }, []);


  return (
    <div className="App">
      <h1>{message}</h1>
      <Routes>
        <Route path="/" element={<Home user={user} setUser={setUser}/>} />
        <Route path="/login" element={<Login setUser={setUser} />} />
        <Route path="/signUp" element={<SignUp setUser={setUser} />} />
      </Routes>
    </div>
  );
}

export default App;
