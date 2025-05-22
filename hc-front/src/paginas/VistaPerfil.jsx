import React, { useState } from "react";
import FotoPerfil from "./FotoPerfil";
import FormularioPerfil from "./FormularioPerfil";
import GestorCitas from "./GestorCitas";
import Header from "./Header";

const VistaPerfil = ({ perfil, onChange, onSubmit }) => {
  const [editable, setEditable] = useState(false);
  const [mostrarCitas, setMostrarCitas] = useState(false);
  const [mostrarExtra, setMostrarExtra] = useState(false);
  const [inputPassword, setInputPassword] = useState("");

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
        <p className="text-xl font-semibold text-blue-700 mb-2">Perfil Médico</p>
        <FotoPerfil editable={editable} perfil={perfil} onChange={onChange} />
      </div>

      <FormularioPerfil perfil={perfil} onChange={onChange} editable={editable} />

      {mostrarExtra && (
        <div className="bg-white/80 p-4 rounded shadow mb-6 max-w-3xl mx-auto">
          <h3 className="text-lg font-bold mb-3">Información profesional adicional</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input type="number" placeholder="Años de experiencia" name="aniosExperiencia" value={perfil.aniosExperiencia || ""} onChange={onChange} disabled={!editable} className="p-2 border rounded" />
            <input type="text" placeholder="Especialidades adicionales" name="especialidadesAdicionales" value={perfil.especialidadesAdicionales || ""} onChange={onChange} disabled={!editable} className="p-2 border rounded" />
            <input type="text" placeholder="Certificaciones" name="certificaciones" value={perfil.certificaciones || ""} onChange={onChange} disabled={!editable} className="p-2 border rounded" />
            <input type="text" placeholder="Redes médicas / convenios" name="redesMedicas" value={perfil.redesMedicas || ""} onChange={onChange} disabled={!editable} className="p-2 border rounded" />
            <textarea placeholder="Descripción profesional breve" name="descripcionProfesional" value={perfil.descripcionProfesional || ""} onChange={onChange} disabled={!editable} className="p-2 border rounded col-span-1 md:col-span-2" />
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

        <button type="button" onClick={() => setMostrarExtra((prev) => !prev)} className="bg-indigo-500 hover:bg-indigo-600 text-white font-semibold py-2 px-6 rounded-md transform transition-all duration-200 hover:scale-105 hover:shadow-md">
          {mostrarExtra ? "Ocultar información" : "Ver más información"}
        </button>

        {editable && (
          <button type="submit" onClick={onSubmit} className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-6 rounded-md transform transition-all duration-200 hover:scale-105 hover:shadow-md">
            Guardar
          </button>
        )}
      </div>

      {mostrarCitas && <GestorCitas />}
    </div>
  );
};

export default VistaPerfil;
