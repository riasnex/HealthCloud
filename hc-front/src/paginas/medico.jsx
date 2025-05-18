import { useForm } from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import { registerSchemamedico } from "../schema/auth.js";

export function RegistroMedico() {
  const { register, handleSubmit, formState: { errors } } = useForm({
      resolver: zodResolver(registerSchemamedico),
  });

  const onSubmit = async (values) => {
    const data = {
      tipo: "medico",
      ...values
    };
    console.log(data);
  };

  return (
    <div className="min-h-screen bg-[url('/FondoRegistro.png')] bg-cover bg-center flex items-center justify-center px-4">
      <div className="absolute top-4 left-4">
        <img src="/LogoHC.png" alt="Logo" className="h-26" />
      </div>
      <div className="relative bg-white w-full max-w-md min-h-[500px] rounded-3xl shadow-lg overflow-hidden">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 px-8 py-12 flex flex-col items-center justify-center gap-4">
          <h2 className="text-2xl font-bold text-red-600 mb-4 text-center">Registro Médico</h2>
          <input {...register("nombre", { required: true })} 
          type="text" 
          className="w-8/12 border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" 
          placeholder="Nombre completo" />
          {errors.nombre && <span className="text-red-500 text-sm">{errors.nombre.message}</span>}
          <input {...register("rut", { required: true })} 
          type="text" 
          className="w-8/12 border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" 
          placeholder="RUT" />
          {errors.rut && <span className="text-red-500 text-sm">{errors.rut.message}</span>}
          <input {...register("email", { required: true })} 
          type="email" 
          className="w-8/12 border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" 
          placeholder="Correo electrónico" />
          {errors.email && <span className="text-red-500 text-sm">{errors.email.message}</span>}
          <input {...register("telefono", { required: true })} 
          type="tel" 
          className="w-8/12 border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" 
          placeholder="Teléfono" />
          {errors.telefono && <span className="text-red-500 text-sm">{errors.telefono.message}</span>}
          <input {...register("direccion", { required: true })} 
          type="text" 
          className="w-8/12 border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" 
          placeholder="Dirección" />
          {errors.direccion && <span className="text-red-500 text-sm">{errors.direccion.message}</span>}
          <select {...register("sexo", { required: true })} 
          className="w-8/12 border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option value="">Seleccione su sexo</option>
            <option value="masculino">Masculino</option>
            <option value="femenino">Femenino</option>
          </select>
          {errors.sexo && <span className="text-red-500 text-sm">{errors.sexo.message}</span>}
          <input {...register("fnacimiento", { required: true })}
          type="date"
          className="w-8/12 border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Fecha de nacimiento" />
          {errors.fnacimiento && <span className="text-red-500 text-sm">{errors.fnacimiento.message}</span>}
          <input {...register("especialidad", { required: true })} 
          type="text" 
          className="w-8/12 border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" 
          placeholder="Especialidad" />
          {errors.especialidad && <span className="text-red-500 text-sm">{errors.especialidad.message}</span>}
          <input {...register("establecimiento", { required: true })} 
          type="text" 
          className="w-8/12 border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" 
          placeholder="Establecimiento de atención" />
          {errors.establecimiento && <span className="text-red-500 text-sm">{errors.establecimiento.message}</span>}
          <input {...register("password", { required: true })} 
          type="password" 
          className="w-8/12 border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" 
          placeholder="Contraseña" />
          {errors.password && <span className="text-red-500 text-sm">{errors.password.message}</span>}
          <div className="flex items-center gap-2">
            <input type="checkbox" {...register("terminos", { required: true })} className="w-4 h-4 text-red-600 border-gray-300 rounded focus:ring-red-500" />
            <label className="text-black text-sm">
              He leído y acepto los <a href="/terminos" className="text-red-600 underline">términos</a> y la <a href="/privacidad" className="text-red-600 underline">política de privacidad</a>.</label>
          </div>
          <button type="submit" className="bg-red-600 px-20 py-2 rounded-xl text-white">Registrarse</button>
        </form>
      </div>
    </div>
  );
}
