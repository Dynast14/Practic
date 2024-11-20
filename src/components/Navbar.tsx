import React from 'react';
import { useNavigate } from 'react-router-dom';

const Navbar: React.FC = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token'); // Elimina el token del almacenamiento local
    navigate('/'); // Redirige al usuario a la página de inicio
  };

  return (
    <nav className="p-4 bg-gray-800 text-white flex justify-between">
      <h1 className="text-lg font-bold">DBP-Market</h1>
      <button onClick={handleLogout} className="bg-red-500 px-4 py-2 rounded">
        Cerrar Sesión
      </button>
    </nav>
  );
};

export default Navbar;
