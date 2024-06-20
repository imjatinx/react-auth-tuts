import React from 'react'
import { Navigate, Outlet, Route } from 'react-router-dom';

const PrivateRoutes = ({component: Component, ...rest}) => {
  const localToken = localStorage.getItem("token");
  const isAuthenticated = localToken;

  // return isAuthenticated ? {children} : <Navigate to="/login" />;
  return <Route {...rest} render={props=>isAuthenticated? <Component {...props}/> : <Navigate to="/login" />}/>;
}

export default PrivateRoutes