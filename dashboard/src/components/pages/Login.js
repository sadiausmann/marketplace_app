import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Login({ setUser }) {
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (event) => {
    setInputs((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  };

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target.form;

    const data = Object.fromEntries(new FormData(form));

    fetch("/api/sessions", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())

      .then((res) => {
        if (res.error) {
          console.log("error");
          navigate("/login");
        } else {
          console.log("correct");
          navigate("/");
          // state.loggedInUser = res
        }
      });
  };
  return (
    <div className="login">
      <h1>Login</h1>
      <form action="">
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
        <button onClick={handleLogin}>Login</button>
        <span>
          Don't you have an account? <Link to="/signup">Sign Up</Link>
        </span>
      </form>
    </div>
  );
}

export default Login;
