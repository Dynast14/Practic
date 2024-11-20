import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { createProduct } from '../services/api';

const CreateProduct: React.FC = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();

  const onSubmit = async (data: any) => {
    try {
      await createProduct(data);
      alert('Producto creado exitosamente');
      navigate('/products');
    } catch (error) {
      alert('Error al crear el producto. Verifica los datos.');
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="p-4 max-w-lg mx-auto">
      <h2 className="text-2xl font-bold mb-4">Crear Producto</h2>

      <input
        {...register('name', { required: 'El nombre es obligatorio' })}
        type="text"
        placeholder="Nombre del producto"
        className="block w-full mb-2 p-2 border rounded"
      />
      {typeof errors.name?.message === 'string' && <p className="text-red-500">{errors.name.message}</p>}

      <textarea
        {...register('description', { required: 'La descripción es obligatoria' })}
        placeholder="Descripción del producto"
        className="block w-full mb-2 p-2 border rounded"
      />
      {typeof errors.description?.message === 'string' && <p className="text-red-500">{errors.description.message}</p>}

      <input
        {...register('price', { required: 'El precio es obligatorio', valueAsNumber: true })}
        type="number"
        placeholder="Precio"
        className="block w-full mb-2 p-2 border rounded"
      />
      {typeof errors.price?.message === 'string' && <p className="text-red-500">{errors.price.message}</p>}

      <input
        {...register('quantity', { required: 'La cantidad es obligatoria', valueAsNumber: true })}
        type="number"
        placeholder="Cantidad"
        className="block w-full mb-2 p-2 border rounded"
      />
      {typeof errors.quantity?.message === 'string' && <p className="text-red-500">{errors.quantity.message}</p>}

      <input
        {...register('imageUrl', { required: 'La URL de la imagen es obligatoria' })}
        type="text"
        placeholder="URL de la imagen"
        className="block w-full mb-2 p-2 border rounded"
      />
      {typeof errors.imageUrl?.message === 'string' && <p className="text-red-500">{errors.imageUrl.message}</p>}

      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
        Crear Producto
      </button>
    </form>
  );
};

export default CreateProduct;
