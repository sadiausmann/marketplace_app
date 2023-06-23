import React from "react";
import { Link } from "react-router-dom";



function Login() {
  return (
    <div className="login">
      <h1>Login</h1>
      <form action="">
        <input required type="email" placeholder="Email" />
        <input required type="password" placeholder="Password" />
        <button>Login</button>
        <span>
          Don't you have an account? <Link to="/signup">Sign Up</Link>
        </span>
      </form>
    </div>
  );
}

export default Login;
