import React from 'react';
import { Navigate } from 'react-router-dom';
import { useLogin } from '../Contexts/AuthContext';

const PrivateRoute = ({ children }) => {
    const { user } = useLogin();
    return user ? children : <Navigate to="/login" />;
  };

export default PrivateRoute;
