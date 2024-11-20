import React from 'react';
import { Navigate } from 'react-router-dom';

interface ProtectedRouteProps {
  children: React.ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const token = localStorage.getItem('token'); // Verifica el token de autenticación

  if (!token) {
    return <Navigate to="/login" replace />; // Redirige al login si no está autenticado
  }

  return <>{children}</>;
};

export default ProtectedRoute;
