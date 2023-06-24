import React from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import Logout  from "./Logout"
// import Products from "./Product"
import "../../Navbar.scss"
 

function Home({ user, setUser }) {
  useEffect(() => {}, []);
  return (
   
    <div className="home">
      <header>
      <h1>Marketplace App</h1>
      </header>
      
      <nav>
      <div class="navbar">
      
      
      <div class="dropdown">
            <button class="dropbtn">Search by category 
      <i class="fa fa-caret-down"></i>
    </button>
    <div class="dropdown-content">
      <a href="#">Link 1</a>
      <a href="#">Link 2</a>
      <a href="#">Link 3</a>
    </div>
            </div>
            <div class="navbar-right">
        
          {user ? (
            <p><Logout setUser={setUser}/></p>
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
        {/* <Products /> */}
      </section>
    </div>
 
  );
}



export default Home;
