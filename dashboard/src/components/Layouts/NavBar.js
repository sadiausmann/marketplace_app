// import React from "react";
// import "../../Navbar.scss";
// import { Link } from "react-router-dom";
// import Logout from "../Pages/Logout";

// function NavBar({ user, setUser }){
//     return (
//         <nav>
//         <div className="navbar">
//         <Link to="/home">Homeepage</Link>
//           <div className="dropdown">
//             <button className="dropbtn">
//               Search by Category
//               <i className="fa fa-caret-down"></i>
//             </button>
//             <div className="dropdown-content">
//               <a >Art</a>
//               <a>Books</a>
//               <a>Clothing</a>
//               <a>Electronics</a>
//               <a>Home</a>
//               <a>Miscellaneous</a>
//               <a>Vehicles</a>
//             </div>
//             </div>

//             <div className="dropdown">
//             <button className="dropbtn">
//               Search by price
//               <i className="fa fa-caret-down"></i>
//             </button>
//             <div className="dropdown-content">
//             <input type="text" placeholder="Enter price" />
//             </div>
//             </div>

//             <div className="dropdown">
//             <button className="dropbtn">
//               Search by product name
//               <i className="fa fa-caret-down"></i>
//             </button>
//             <div className="dropdown-content">
//             <input type="text" placeholder="Enter product name"/>
//             </div>
//             </div>

//             <div className="dropdown">
//             <button className="dropbtn">
//               Search by location
//               <i className="fa fa-caret-down"></i>
//             </button>
//             <div className="dropdown-content">
//             <input  type="text" placeholder="Enter location"/>
//             </div>
//             </div>
//               <div className="navbar-right">
//             {user ? (
//               <>
//                 <p>
//                   <Link to="/postanadd">Post an ad</Link>
//                 </p>
//                 <p>
//                   <Logout setUser={setUser} />
//                 </p>
//               </>
//             ) : (
//               <>
//                 <p>
//                   <Link to="/signup">Sign Up</Link>
//                 </p>
//                 <p>
//                   <Link to="/login">Login</Link>
//                 </p>
//               </>
//             )}
//           </div>
//         </div>
//       </nav>
//     )
// }

// export default NavBar