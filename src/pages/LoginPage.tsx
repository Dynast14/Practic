import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login } from '../services/api';

const LoginPage: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await login(username, password);
      navigate('/products'); // Redirige a la lista de productos
    } catch (error) {
      setError('Credenciales incorrectas. Intenta de nuevo.');
    }
  };

  return (
    <div className="h-screen flex items-center justify-center bg-gradient-to-b from-purple-500 via-pink-500 to-red-500 text-white">
      <form onSubmit={handleLogin} className="bg-black bg-opacity-70 p-6 rounded-lg shadow-lg max-w-sm w-full">
        <h2 className="text-4xl font-bold mb-6 text-center neon-text">Iniciar Sesión</h2>
        {error && <p className="text-red-500 text-center mb-4">{error}</p>}
        <div className="mb-4">
          <label className="block text-sm font-bold mb-2">Usuario</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Ingresa tu usuario"
            className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white focus:ring-2 focus:ring-yellow-500"
          />
        </div>
        <div className="mb-6">
          <label className="block text-sm font-bold mb-2">Contraseña</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Ingresa tu contraseña"
            className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white focus:ring-2 focus:ring-yellow-500"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-yellow-400 hover:bg-yellow-300 text-black px-4 py-2 rounded-lg font-bold transition-all transform hover:scale-105"
        >
          Entrar
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
