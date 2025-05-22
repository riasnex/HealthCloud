import React, { useEffect, useState } from 'react';
import VistaPerfil from './paginas/VistaPerfil';
import VistaPerfilPaciente from './paginas/VistaPerfilPaciente';


export default function App() {
  const [perfil, setPerfil] = useState({});
  const [rol, setRol] = useState(""); // paciente o medico

  {/*useEffect(() => {
    fetch("http://localhost:5000/api/perfil")
      .then((res) => res.json())
      .then((data) => setPerfil(data))
      .catch((err) => console.error("Error al cargar perfil", err));
  }, []); */}

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPerfil((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:5000/api/perfil", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(perfil),
    })
      .then((res) => {
        if (!res.ok) throw new Error();
        alert("Perfil guardado correctamente.");
      })
      .catch(() => alert("Error al guardar"));
  };

  return (
    <div
      className="min-h-screen w-full "
    >
      <div className="min-h-screen bg-[url('/FondoRegistro.png')] bg-cover p-6 md:rounded-lg shadow-lg">
        {rol === "" && (
          <div className="text-center space-x-4 mb-8">
            <p className="text-lg font-semibold text-gray-700 mb-2">Por favor, selecciona tu rol:</p>
            <button
              onClick={() => setRol("medico")}
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transform transition-all duration-200 hover:scale-105"
            >
              Soy médico
            </button>
            <button
              onClick={() => setRol("paciente")}
              className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded transform transition-all duration-200 hover:scale-105"
            >
              Soy paciente
            </button>
          </div>
        )}

        {rol === "medico" && (
          <VistaPerfil
            perfil={perfil}
            onChange={handleChange}
            onSubmit={handleSubmit}
          />
        )}

        {rol === "paciente" && (
          <VistaPerfilPaciente
            perfil={perfil}
            onChange={handleChange}
            onSubmit={handleSubmit}
          />
        )}
      </div>
    </div>
  );
}
