import React, { useEffect, useState } from 'react';
import { getProducts } from '../services/api';

const AllProductos: React.FC = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getProducts(0, 10); // Obtén los primeros 10 productos
        setProducts(data.products);
      } catch (error) {
        console.error('Error al cargar productos:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  if (loading) {
    return <p>Cargando productos...</p>;
  }

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Lista de Productos</h2>
      <ul>
        {products.map((product: any) => (
          <li key={product.id} className="border p-4 mb-2 rounded">
            <h3 className="text-lg font-bold">{product.name}</h3>
            <p>{product.description}</p>
            <p className="text-sm text-gray-500">Precio: ${product.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AllProductos;
