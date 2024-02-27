import React,{useState,useEffect} from "react";
import { Navigate } from "react-router-dom";


function PublicRoute({ children }) {

   const token = JSON.parse(localStorage.getItem("token"));
   
  //  if (token) return <Navigate to="/dashboard" />
  // return children;
    useEffect(() => {
      if (token) {
      window.location.href = "/home";
    }
    }, [token]);
 
   return token ? <Navigate to="/home" /> : children;
  }

   export default PublicRoute;