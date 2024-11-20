import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProductById } from '../services/api';

const ProductoDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<any>(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const product = await getProductById(id || '');
        setProduct(product);
      } catch (error) {
        console.error('Error al cargar el producto:', error);
        alert('No se pudo cargar el producto.');
      }
    };
    fetchProduct();
  }, [id]);

  if (!product) {
    return <p>Cargando producto...</p>;
  }

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">{product.name}</h2>
      <img
        src={product.imageUrl}
        alt={product.name}
        className="w-full h-60 object-cover rounded mb-4"
      />
      <p>{product.description}</p>
      <p className="text-sm text-gray-500">Precio: ${product.price}</p>
      <p className="text-sm text-gray-500">Cantidad: {product.quantity}</p>
    </div>
  );
};

export default ProductoDetails;
