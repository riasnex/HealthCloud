import { useState } from "react";
import { useForm } from "react-hook-form";

export  function PagRegistro() {
  const { register, handleSubmit, formState } = useForm({
  });
  const [tipo, setTipo] = useState("paciente");

  const onSubmit = async (values) => {
    const data = {
      tipo,
      ...(tipo === "paciente" ? values.paciente : values.medico)
    };
    console.log(data);
  };

  return (
    <div className="min-h-screen bg-[url('/FondoRegistro.png')] bg-cover bg-center flex items-center justify-center px-4">
      <div className="absolute top-4 left-4">
        <img src="/LogoHC.png" alt="Logo" className="h-26" />
      </div>
      <div className="relative bg-white w-full max-w-md min-h-[500px] rounded-3xl shadow-lg overflow-hidden">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {/* Toggle */}
        <div className="flex justify-center mt-6 -mb-3 space-x-2 z-10 relative">
          <button
            type="button"
            onClick={() => setTipo("paciente")}
            className={`px-5 py-2 rounded-full font-semibold ${
              tipo === "paciente" ? "bg-red-600 text-white" : "bg-gray-200"
            } transition`}
          >
            Paciente
          </button>
          <button
          type="button"
            onClick={() => setTipo("medico")}
            className={`px-5 py-2 rounded-full font-semibold ${
              tipo === "medico" ? "bg-red-600 text-white" : "bg-gray-200"
            } transition`}
          >
            Médico
          </button>
        </div>

        {/* Slide container */}
        <div className="flex w-[200%] transition-transform duration-500 ease-in-out"
             style={{ transform: tipo === "paciente" ? "translateX(0)" : "translateX(-50%)" }}>
          
          {/* Formulario Paciente */}
          <div className="w-1/2 px-8 py-12 flex flex-col items-center justify-center gap-4">
            <h2 className="text-2xl font-bold text-red-600 mb-4 text-center">Registro Paciente</h2>
            <input
              {...register("paciente.nombre",{required: true })}
              type="text" 
              className="w-8/12 border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Nombre completo"
              />
            <input
              {...register("paciente.rut",{required: true })}
              type="text"
              className="w-8/12 border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Rut"
            />
            <input
              {...register("paciente.email",{required: true })}
              type="email" 
              className="w-8/12 border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" 
              placeholder="Correo electrónico" 
            />
            <input
              {...register("paciente.telefono",{required: true })}
              type="tel" 
              className="w-8/12 border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" 
              placeholder="Teléfono"
            />
            <input
              {...register("paciente.emergencia",{required: true })}
              type="tel"
              className="w-8/12 border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Teléfono de emergencia"
            />
            <input
              {...register("paciente.direccion",{required: true })}
              type="text"
              className="w-8/12 border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Dirección"
            />
            <select
              {...register("paciente.sexo",{required: true })}
              className="w-8/12 border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Seleccione su sexo</option>
              <option value="masculino">Masculino</option>
              <option value="femenino">Femenino</option>
            </select>
            <select
              {...register("paciente.prevision",{required: true })}
              className="w-8/12 border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Previsión de Salud:</option>
              <option value="fonasa">Fonasa</option>
              <option value="isapres">Isapres</option>
            </select>
            <input
              {...register("paciente.password",{required: true })} 
              type="password" 
              className="w-8/12 border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" 
              placeholder="Contraseña" 
              />
              
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                {...register("paciente.terminos",{required: true })}
                className="w-4 h-4 text-red-600 border-gray-300 rounded focus:ring-red-500"
              />
              <label className ="text-black text-sm">
                He leído y acepto los terminos y condiciones.
              </label>
            </div>
            <button 
            type="submit"
            className="bg-red-600 px-20 py-2 rounded-xl text-white"
            >
              Registrarse
              </button>
          </div>

          {/* Formulario Médico */}
          <div className="w-1/2 px-8 py-12 flex flex-col items-center justify-center gap-4">
            <h2 className="text-2xl font-bold text-red-600 mb-4 text-center">Registro Médico</h2>
            <input 
              type="text" 
              {...register("medico.nombre",{required: true })} 
              className="w-8/12 border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Nombre completo" 
            />
            <input
              type="text" 
              {...register("medico.rut",{required: true })} 
              className="w-8/12 border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Rut"
            />
             <input
              {...register("medico.email",{required: true })}
              type="email" 
              className="w-8/12 border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" 
              placeholder="Correo electrónico" 
            />
            <input
              {...register("medico.telefono",{required: true })}
              type="tel" 
              className="w-8/12 border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" 
              placeholder="Teléfono"
            />
            <input
              {...register("medico.direccion",{required: true })}
              type="text"
              className="w-8/12 border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Dirección"
            />
            <select
              {...register("medico.sexo",{required: true })}
              className="w-8/12 border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Seleccione su sexo</option>
              <option value="masculino">Masculino</option>
              <option value="femenino">Femenino</option>
            </select>
            <input
              {...register("medico.especialidad",{required: true })}
              type="text" 
              className="w-8/12 border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Especialidad"
            />
            <input 
              {...register("medico.establecimiento",{required: true })}
              type="text" 
              className="w-8/12 border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Establecimiento de atencion" 
            />
           
            <input
            {...register("medico.password",{required: true })}
            type="password" 
            className="w-8/12 border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Contraseña" 
            />
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                {...register("medico.terminos",{required: true })}
                className="w-4 h-4 text-red-600 border-gray-300 rounded focus:ring-red-500"
              />
              <label className ="text-black text-sm">
                He leído y acepto los terminos y condiciones.
              </label>
            </div>

            <button 
            type="submit"
            className="bg-red-600 px-20 py-2 rounded-xl text-white"
            >
              Registrarse
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
