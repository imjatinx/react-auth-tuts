import React, { useContext } from 'react'
import { Navigate, Outlet } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';

const PrivateRoutes = () => {
  const { isAuthenticated } = useContext(AuthContext)

  // 1. check token is present (DONE)
  // 2. check token is valid (USER + EXPIRY)

  return isAuthenticated() ? <Outlet /> : <Navigate to="/login" />;
}

export default PrivateRoutes