import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import AllProductos from './pages/AllProductos';
import CreateProduct from './pages/CreateProduct';
import EditProduct from './pages/EditProduct';
import ProductoDetails from './pages/ProductoDetails';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        {/* Página de inicio */}
        <Route path="/" element={<HomePage />} />

        {/* Autenticación */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />

        {/* Productos */}
        <Route path="/products" element={<AllProductos />} />
        <Route path="/products/new" element={<CreateProduct />} />
        <Route path="/products/edit/:id" element={<EditProduct />} />
        <Route path="/products/:id" element={<ProductoDetails />} />
      </Routes>
    </Router>
  );
};

export default App;
