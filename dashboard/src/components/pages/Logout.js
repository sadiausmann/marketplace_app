import React from "react";
import { useNavigate } from "react-router-dom";

function Logout({setUser}) {
    const navigate = useNavigate();
    
    const handleLogout = () =>{
        fetch("/api/sessions", {
            method:"DELETE",
          })
            .then((res) => res.json())
            .then((res) => {
              if (res.success) {
                setUser(null);
                console.log("Logout successful");
                navigate("/");
              } else {
                console.log("Error logging out");
              }
            });
    }
    return(
        <button onClick={handleLogout}>Logout</button>
    )

    
  };
  
export default Logout;

// function handleLogOut ({ setUser }){
//     fetch('/api/sessions', {
//         method: 'DELETE',
//         headers: { 'Content-Type': 'application/json', 'Clear-Site-Data': '"*"' }
//       })
//         .then(res => res.json())
//         // document.cookie = "user_sid" + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
  
//         const updateUserState = () => {
//         setUser({user: null})
  
//         // .then(res => {
//         //   if (res.success) {
//             // setUser(null); // Update the user state to null after successful logout
//         //   }
//         // }
//         // );
//     }
//   }
//   export { handleLogOut }