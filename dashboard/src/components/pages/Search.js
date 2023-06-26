// import React from "react";
// import { useState } from "react";

// function GetFilterList({ productsList }) {
//   const [locationFilter, setLocationFilter] = useState([]);
//   const [categoryFilter, setCategoryFilter] = useState([]);
//   const [priceFilter, setPriceFilter] = useState([]);

//   const [nameFilter, setNameFilter] = useState([]);

//   const handlelocationfilter = (event) =>{
//     const location = event.target.value;
//     console.log(location)
    
//     setLocationFilter(
//       productsList.filter((product) => location === product.location)
//     );
//   }
  
//   return (
//     <section>
//     <div className="dropdown">
//             <button className="dropbtn">
//               Search by Category
//               <i className="fa fa-caret-down"></i>
//             </button>
//             <div className="dropdown-content">
//               <a>Art</a>
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
//             <input onSubmit="" type="text" placeholder="Enter price" />
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
//             <input onSubmit={handlelocationfilter} type="text" placeholder="Enter location"/>
//             </div>
//             </div>
//             </section>
//   )
// }



// export default GetFilterList