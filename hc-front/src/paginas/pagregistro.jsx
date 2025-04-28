import { useState } from "react";

export  function PagRegistro() {
  const [tipo, setTipo] = useState("paciente");

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center px-4">
      <div className="relative bg-white w-full max-w-md h-[500px] rounded-3xl shadow-lg overflow-hidden">
        {/* Toggle */}
        <div className="flex justify-center mt-6 space-x-2 z-10 relative">
          <button
            onClick={() => setTipo("paciente")}
            className={`px-5 py-2 rounded-full font-semibold ${
              tipo === "paciente" ? "bg-red-600 text-white" : "bg-gray-200"
            } transition`}
          >
            Paciente
          </button>
          <button
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
            <input type="text" placeholder="Nombre completo" className="w-8/12 border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
            <input type="email" placeholder="Correo electrónico" className="w-8/12 border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
            <input type="password" placeholder="Contraseña" className="w-8/12 border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
            <button className="bg-red-600 px-20 py-2 rounded-xl text-white">Registrarse</button>
          </div>

          {/* Formulario Médico */}
          <div className="w-1/2 px-8 py-12 flex flex-col items-center justify-center gap-4">
            <h2 className="text-2xl font-bold text-red-600 mb-4 text-center">Registro Médico</h2>
            <input type="text" placeholder="Nombre completo" className="w-8/12 border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
            <input type="text" placeholder="Establecimiento de atencion" className="w-8/12 border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
            <input type="email" placeholder="Correo electrónico" className="w-8/12 border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
            <input type="password" placeholder="Contraseña" className="w-8/12 border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
            <button className="bg-red-600 px-20 py-2 rounded-xl text-white">Registrarse</button>
          </div>
        </div>
      </div>
    </div>
  );
}
