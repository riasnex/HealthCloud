import React, { useState, useEffect } from "react";
import FotoPerfil from "./FotoPerfil";
import FormularioPerfil from "./FormularioPerfil";
import Header from "./Header";
import DocumentosMedicos from "./DocumentosMedicos";

const VistaPerfilPaciente = ({ perfil, onChange, onSubmit }) => {
  const [editable, setEditable] = useState(false);
  const [mostrarPrivado, setMostrarPrivado] = useState(false);
  const [inputPassword, setInputPassword] = useState("");

  useEffect(() => {
    if (perfil.fechaNacimiento) {
      const nacimiento = new Date(perfil.fechaNacimiento);
      const hoy = new Date();
      let edad = hoy.getFullYear() - nacimiento.getFullYear();
      const m = hoy.getMonth() - nacimiento.getMonth();
      if (m < 0 || (m === 0 && hoy.getDate() < nacimiento.getDate())) {
        edad--;
      }
      onChange({ target: { name: "edad", value: edad } });
    }
  }, [perfil.fechaNacimiento]);

  const verificarPassword = () => {
    if (inputPassword === "prueba") {
      setEditable(true);
      setInputPassword("");
    } else {
      alert("Contraseña incorrecta");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-200 to-cyan-100 py-10 px-4 transition-all">
      <Header />

      <div className="text-center mb-6">
        <p className="text-xl font-semibold text-green-700 mb-2">Perfil Paciente</p>
        <FotoPerfil editable={editable} perfil={perfil} onChange={onChange} />
      </div>

      <FormularioPerfil perfil={perfil} onChange={onChange} editable={editable} />

      {mostrarPrivado && (
        <div className="bg-white/70 p-4 rounded-xl shadow-lg mb-6 max-w-3xl mx-auto backdrop-blur-md border border-gray-200">
          <h3 className="text-lg font-bold mb-3 text-gray-800">Información confidencial</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block font-medium">Edad</label>
              <input type="text" name="edad" value={perfil.edad || ""} onChange={onChange} className="border rounded px-3 py-2 w-full" disabled />
            </div>
            <div>
              <label className="block font-medium">Fecha de nacimiento</label>
              <input type="date" name="fechaNacimiento" value={perfil.fechaNacimiento || ""} onChange={onChange} className="border rounded px-3 py-2 w-full" disabled={!editable} />
            </div>
            <div>
              <label className="block font-medium">Tipo de sangre</label>
              <input type="text" name="tipoSangre" value={perfil.tipoSangre || ""} onChange={onChange} className="border rounded px-3 py-2 w-full" disabled={!editable} />
            </div>
            <div>
              <label className="block font-medium">Enfermedades crónicas</label>
              <input type="text" name="enfermedadesCronicas" value={perfil.enfermedadesCronicas || ""} onChange={onChange} className="border rounded px-3 py-2 w-full" disabled={!editable} />
            </div>
            <div className="md:col-span-2">
              <label className="block font-medium">Previsión</label>
              <select name="prevision" value={perfil.prevision || ""} onChange={onChange} className="border rounded px-3 py-2 w-full" disabled={!editable}>
                <option value="">Seleccione una opción</option>
                <option value="Fonasa">Fonasa</option>
                <option value="Isapre">Isapre</option>
                <option value="Ninguna">Ninguna</option>
              </select>
            </div>
          </div>
        </div>
      )}

      <div className="mt-6 flex flex-col md:flex-row flex-wrap gap-4 justify-center items-center">
        {!editable && (
          <>
            <input type="password" placeholder="Contraseña" value={inputPassword} onChange={(e) => setInputPassword(e.target.value)} className="border rounded px-3 py-2" />
            <button onClick={verificarPassword} className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded transform transition-all duration-200 hover:scale-105 hover:shadow-md">
              Validar contraseña
            </button>
          </>
        )}

        <button type="button" onClick={() => setMostrarPrivado((prev) => !prev)} className="bg-indigo-500 hover:bg-indigo-600 text-white font-semibold py-2 px-6 rounded-md transform transition-all duration-200 hover:scale-105 hover:shadow-md">
          {mostrarPrivado ? "Ocultar información" : "Ver más información"}
        </button>

        {editable && (
          <button type="submit" onClick={onSubmit} className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-6 rounded-md transform transition-all duration-200 hover:scale-105 hover:shadow-md">
            Guardar
          </button>
        )}
      </div>
    </div>
  );
};

export default VistaPerfilPaciente;
