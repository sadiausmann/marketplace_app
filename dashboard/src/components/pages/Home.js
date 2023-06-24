import React from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import Logout  from "./Logout"
 

function Home({ user, setUser }) {
  useEffect(() => {}, []);
  return (
   
    <div>
      <h1>Homepage</h1>
      <nav>
        {user ? (
          <Logout setUser={setUser}/>
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
