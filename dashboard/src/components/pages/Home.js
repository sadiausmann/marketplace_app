import React from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import Logout  from "./Logout"
import Products from "./Product"
import "../../Navbar.scss"

 

function Home({ user, setUser }) {
  useEffect(() => {}, []);
  return (
   
    <div className="home">
      <header>
      <h1>Marketplace App</h1>
      </header>
      
      <nav>
      <div className="navbar">
      
      
      <div className="dropdown">
            <button className="dropbtn">Search by category 
      <i className="fa fa-caret-down"></i>
    </button>
    <div className="dropdown-content">
      <a href="">Link 1</a>
      <a href="">Link 2</a>
      <a href="">Link 3</a>
    </div>
            </div>
            <div className="navbar-right">
            
          {user ? (
            <>
            <p><Link to="/postanadd">Post an ad</Link></p>
            <p><Logout setUser={setUser}/></p>
            </>
          ) : (
            <>
              <p><Link to="/signup">Sign Up</Link></p>
              <p><Link to="/login">Login</Link></p>
            </>
            )}
            
        </div>
        </div>

      </nav>
      <section>
        <Products />
      </section>
    </div>
 
  );
}



export default Home;
