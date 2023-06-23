import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";


const SignUp = () => {
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    setInputs((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  };


  const handleSubmit = (event) => {
    event.preventDefault()
    const form = event.target.form

    const data = Object.fromEntries(new FormData(form))
    console.log(data)
    fetch("/api/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((email) => email);
  };
  return (
    <div className="sign-up">
      <h1>Sign Up</h1>
      <form action="">
        <input
          required
          type="text"
          placeholder="Username"
          name="name"
          onChange={handleChange}
        />
        <input
          required
          type="email"
          placeholder="Email"
          name="email"
          onChange={handleChange}
        />
        <input
          required
          type="password"
          placeholder="Password"
          name="password"
          onChange={handleChange}
        />
        <button onClick={handleSubmit}>Sign up</button>
        <span>
          Do you have an account? <Link to="/login">Login</Link>
        </span>
      </form>
    </div>
  );
};

export default SignUp;
