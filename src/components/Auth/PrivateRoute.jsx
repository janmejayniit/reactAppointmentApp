import React from "react";
import { Navigate, Outlet } from "react-router-dom";


const PrivateRoute = ({ children }) => {
    const authed = localStorage.getItem('user_id') // isauth() returns true or false based on localStorage
    
    return authed ? children : <Navigate to="/login" />;
  }

export default PrivateRoute;