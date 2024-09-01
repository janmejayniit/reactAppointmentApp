import React from "react";
import { Navigate, Outlet } from "react-router-dom";


const PrivateRoute = () => {
    const authed = localStorage.getItem('user_id') 
    return authed ? <Outlet/> : <Navigate to="/login" />
}

export default PrivateRoute;