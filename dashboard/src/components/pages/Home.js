import React from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import Logout from "./Logout";
import Products from "./Products";
import "../../Navbar.scss";
// import GetFilterList from "./Search"

function Home({ user, setUser }) {

  return (
    <div className="home">
      <header>
        <h1>Marketplace App</h1>
      </header>

      <nav>
        
          
      <div className="navbar">
          <div className="navbar-right">
            {user ? (
              <>
                <p>
                  <Link to="/postanadd">Post an ad</Link>
                </p>
                <p>
                  <Logout setUser={setUser} />
                </p>
              </>
            ) : (
              <>
                <p>
                  <Link to="/signup">Sign Up</Link>
                </p>
                <p>
                  <Link to="/login">Login</Link>
                </p>
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
