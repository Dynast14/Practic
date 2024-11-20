import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import { getProductById, updateProduct } from '../services/api';

const EditProduct: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { register, handleSubmit, setValue, formState: { errors } } = useForm();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const product = await getProductById(id || '');
        setValue('name', product.name);
        setValue('description', product.description);
        setValue('price', product.price);
        setValue('quantity', product.quantity);
        setValue('imageUrl', product.imageUrl);
      } catch (error) {
        console.error('Error al cargar el producto:', error);
        alert('No se pudo cargar el producto.');
      }
    };
    fetchProduct();
  }, [id, setValue]);

  const onSubmit = async (data: any) => {
    try {
      await updateProduct(id || '', data);
      alert('Producto actualizado exitosamente');
      navigate('/products');
    } catch (error) {
      alert('Error al actualizar el producto.');
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="p-4 max-w-lg mx-auto">
      <h2 className="text-2xl font-bold mb-4">Editar Producto</h2>

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

      <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded">
        Guardar Cambios
      </button>
    </form>
  );
};

export default EditProduct;
