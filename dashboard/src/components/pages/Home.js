import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>Homepage
        <nav>
            <Link to="/signup">Sign Up</Link>
            <Link to="/login">Login</Link>
        </nav>
    </div>
    )
}

export default Home;
