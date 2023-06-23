import React from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";

function Home({ user }) {
  useEffect(() => {}, []);
  
  return (
    <div>
      <h1>Homepage</h1>
      <nav>
        {user ? (
          <button>Logout</button>
        ) : (
          <>
            <Link to="/signup">Sign Up</Link>
            <Link to="/login">Login</Link>
          </>
        )}
      </nav>
    </div>
  );
}

export default Home;
