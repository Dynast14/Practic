import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getProductById, updateProduct } from "../services/api";
import { useForm } from "react-hook-form";

interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  quantity: number;
  imageUrl: string;
}

const EditPage: React.FC = () => {
  const { productId } = useParams<{ productId: string }>();
  const [loading, setLoading] = useState<boolean>(true);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<Product>();

  useEffect(() => {
    if (!productId) {
      console.error("No se proporcionó un ID de producto");
      navigate("/productos");
      return;
    }

    const fetchProduct = async () => {
      try {
        const data = await getProductById(productId);
        setValue("name", data.name);
        setValue("description", data.description);
        setValue("price", data.price);
        setValue("quantity", data.quantity);
        setValue("imageUrl", data.imageUrl);
      } catch (error) {
        console.error("Error al obtener producto:", error);
        alert("No se pudo cargar el producto");
        navigate("/productos");
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [productId, navigate, setValue]);

  const onSubmit = async (data: Product) => {
    try {
      await updateProduct(productId as string, data);
      alert("Producto actualizado exitosamente");
      navigate(`/productos/${productId}`);
    } catch (error) {
      console.error("Error al actualizar producto:", error);
      alert("Error al actualizar el producto. Verifica los datos.");
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500"></div>
      </div>
    );
  }

  return (
    <div className="max-w-md mx-auto mt-10">
      <h2 className="text-2xl font-bold mb-4">Editar Producto</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label className="block">Nombre</label>
          <input
            {...register("name", { required: "El nombre es requerido" })}
            className="w-full p-2 border border-gray-300 rounded"
          />
          {typeof errors.name?.message === "string" && (
            <p className="text-red-500">{errors.name.message}</p>
          )}
        </div>
        <div>
          <label className="block">Descripción</label>
          <textarea
            {...register("description", {
              required: "La descripción es requerida",
            })}
            className="w-full p-2 border border-gray-300 rounded"
          />
          {typeof errors.description?.message === "string" && (
            <p className="text-red-500">{errors.description.message}</p>
          )}
        </div>
        <div>
          <label className="block">Precio</label>
          <input
            type="number"
            {...register("price", { required: "El precio es requerido" })}
            className="w-full p-2 border border-gray-300 rounded"
          />
          {typeof errors.price?.message === "string" && (
            <p className="text-red-500">{errors.price.message}</p>
          )}
        </div>
        <div>
          <label className="block">Cantidad</label>
          <input
            type="number"
            {...register("quantity", { required: "La cantidad es requerida" })}
            className="w-full p-2 border border-gray-300 rounded"
          />
          {typeof errors.quantity?.message === "string" && (
            <p className="text-red-500">{errors.quantity.message}</p>
          )}
        </div>
        <div>
          <label className="block">URL de la Imagen</label>
          <input
            {...register("imageUrl", {
              required: "La URL de la imagen es requerida",
            })}
            className="w-full p-2 border border-gray-300 rounded"
          />
          {typeof errors.imageUrl?.message === "string" && (
            <p className="text-red-500">{errors.imageUrl.message}</p>
          )}
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded"
        >
          Guardar Cambios
        </button>
      </form>
    </div>
  );
};

export default EditPage;
