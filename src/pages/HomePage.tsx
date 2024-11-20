import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const HomePage: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      navigate('/products'); // Redirige al área protegida si ya está autenticado
    }
  }, [navigate]);

  return (
    <div className="h-screen bg-gradient-to-b from-orange-500 via-pink-500 to-red-500 text-white font-arcade">
      <div className="container mx-auto flex flex-col justify-center items-center h-full">
        <h1 className="text-6xl font-bold mb-4 neon-text text-center">
          ¡Bienvenido a DBP-Market!
        </h1>
        <p className="text-lg text-center mb-8 max-w-2xl">
          ¡Encuentra los mejores productos al mejor precio y dale un toque especial a tus compras!
        </p>
        <div className="flex space-x-4">
          <Link
            to="/login"
            className="bg-yellow-400 hover:bg-yellow-300 text-black px-6 py-3 rounded-xl shadow-lg transition-all transform hover:scale-105"
          >
            Iniciar Sesión
          </Link>
          <Link
            to="/register"
            className="bg-green-400 hover:bg-green-300 text-black px-6 py-3 rounded-xl shadow-lg transition-all transform hover:scale-105"
          >
            Registrarse
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
