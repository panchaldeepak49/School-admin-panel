import React,{useState,useEffect} from "react";
import { Navigate } from "react-router-dom";


// function PublicRoute({ children }) {

      
//     const token = JSON.parse(localStorage.getItem("token"));
   
//     useEffect(() => {
//       if (token) {
//       window.location.href = "/home";
//     }
//     }, [token]);
 
//    return token ? <Navigate to="/home" /> : children;
//   }

//    export default PublicRoute;



const PublicRoute = ({ children }) => {
  const storedToken = localStorage.getItem("token");

  let token = null;

  // Only parse the token if it's not undefined or null
  if (storedToken) {
    try {
      token = JSON.parse(storedToken);
    } catch (error) {
      console.error("Error parsing token:", error);
    }
  }

  return !token ? children : <Navigate to="/home" />;
};

export default PublicRoute;