import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { register as registerUser } from "../services/api";

interface RegisterFormInputs {
  fullName: string;
  email: string;
  password: string;
  username: string;
}

const RegisterPage: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormInputs>();
  const navigate = useNavigate();

  const onSubmit = async (data: RegisterFormInputs) => {
    console.log("Datos enviados:", data); // Log para revisar qué datos se están enviando
    try {
      await registerUser(data);
      alert("Registro exitoso. Ahora puedes iniciar sesión.");
      navigate("/login");
    } catch (error) {
      console.error("Error en el registro:", error);
      alert("Hubo un error durante el registro. Inténtalo nuevamente.");
    }
  };
  
  return (
    <div className="max-w-md mx-auto mt-10">
      <h2 className="text-2xl font-bold mb-4 text-center">Registro</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {/* Campo: Nombre Completo */}
        <div>
          <label className="block">Nombre Completo</label>
          <input
            {...register("fullName", {
              required: "El nombre completo es requerido",
            })}
            className="w-full p-2 border border-gray-300 rounded"
            placeholder="Ingresa tu nombre completo"
          />
          {typeof errors.fullName?.message === "string" && (
            <p className="text-red-500">{errors.fullName.message}</p>
          )}
        </div>

        {/* Campo: Email */}
        <div>
          <label className="block">Email</label>
          <input
            type="email"
            {...register("email", { required: "El email es requerido" })}
            className="w-full p-2 border border-gray-300 rounded"
            placeholder="Ingresa tu email"
          />
          {typeof errors.email?.message === "string" && (
            <p className="text-red-500">{errors.email.message}</p>
          )}
        </div>

        {/* Campo: Usuario */}
        <div>
          <label className="block">Usuario</label>
          <input
            {...register("username", { required: "El usuario es requerido" })}
            className="w-full p-2 border border-gray-300 rounded"
            placeholder="Ingresa tu nombre de usuario"
          />
          {typeof errors.username?.message === "string" && (
            <p className="text-red-500">{errors.username.message}</p>
          )}
        </div>

        {/* Campo: Contraseña */}
        <div>
          <label className="block">Contraseña</label>
          <input
            type="password"
            {...register("password", {
              required: "La contraseña es requerida",
              minLength: {
                value: 6,
                message: "La contraseña debe tener al menos 6 caracteres",
              },
            })}
            className="w-full p-2 border border-gray-300 rounded"
            placeholder="Ingresa tu contraseña"
          />
          {typeof errors.password?.message === "string" && (
            <p className="text-red-500">{errors.password.message}</p>
          )}
        </div>

        {/* Botón de Registro */}
        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition-all"
        >
          Registrarse
        </button>
      </form>
    </div>
  );
};

export default RegisterPage;
