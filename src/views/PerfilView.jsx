import React, { useState } from 'react';

const PerfilView = ({ perfil, onChange, onSubmit }) => {
  const [editable, setEditable] = useState(false);
  const [mostrarMas, setMostrarMas] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-cyan-200 py-10 px-4 transition-all">
      {/* Encabezado con logo + texto alineado a la izquierda */}
      <div className="flex items-center gap-4 mb-4">
        <div className="w-16 h-16 bg-gray-300 rounded-full"></div>
        <h1 className="text-4xl font-bold text-blue-700">HEALTHCLOUD</h1>
      </div>

      {/* Formulario del perfil */}
      <form
        onSubmit={onSubmit}
        className="max-w-4xl bg-white rounded-lg shadow-md p-8 transition-all"
      >
        <div className="flex items-center gap-6 mb-6">
          {/* Foto de perfil con carga */}
          <div className="flex-shrink-0 flex flex-col items-start gap-2">
            <img
              src={perfil.fotoPreview || perfil.foto || "https://via.placeholder.com/128"}
              alt="Foto de perfil"
              className="w-32 h-32 rounded-full object-cover border border-gray-400 shadow-sm"
            />
            {editable && (
              <input
                type="file"
                accept="image/*"
                onChange={(e) => {
                  const file = e.target.files[0];
                  if (file) {
                    const reader = new FileReader();
                    reader.onloadend = () => {
                      onChange({ target: { name: "foto", value: reader.result } });
                      onChange({ target: { name: "fotoPreview", value: reader.result } });
                    };
                    reader.readAsDataURL(file);
                  }
                }}
                className="text-sm"
              />
            )}
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-gray-800">Resumen del Perfil</h2>
            {perfil.nombre && (
              <p className="text-sm text-gray-600 mt-1">Bienvenido, {perfil.nombre}!</p>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium">Nombre</label>
            <input
              type="text"
              name="nombre"
              value={perfil.nombre || ''}
              onChange={onChange}
              disabled={!editable}
              className="w-full mt-1 border rounded px-3 py-2"
            />
          </div>

          <div>
            <label className="block text-sm font-medium">Apellido</label>
            <input
              type="text"
              name="apellido"
              value={perfil.apellido || ''}
              onChange={onChange}
              disabled={!editable}
              className="w-full mt-1 border rounded px-3 py-2"
            />
          </div>

          <div>
            <label className="block text-sm font-medium">Correo electrónico</label>
            <input
              type="email"
              name="email"
              value={perfil.email || ''}
              onChange={onChange}
              disabled={!editable}
              className="w-full mt-1 border rounded px-3 py-2"
            />
          </div>

          <div>
            <label className="block text-sm font-medium">Teléfono</label>
            <input
              type="tel"
              name="telefono"
              value={perfil.telefono || ''}
              onChange={onChange}
              disabled={!editable}
              className="w-full mt-1 border rounded px-3 py-2"
            />
          </div>

          <div className="md:col-span-2">
            <label className="block text-sm font-medium">Sistema de salud</label>
            <select
              name="sistemaSalud"
              value={perfil.sistemaSalud || ''}
              onChange={onChange}
              disabled={!editable}
              className="w-full mt-1 border rounded px-3 py-2"
            >
              <option value="">Selecciona una opción</option>
              <option value="Fonasa">Fonasa</option>
              <option value="Isapre">Isapre</option>
            </select>
          </div>
        </div>

        <div className="mt-6 flex flex-col md:flex-row gap-4 justify-center">
          {!editable && (
            <button
              type="button"
              onClick={() => setEditable(true)}
              className="bg-gray-500 hover:bg-gray-600 text-white font-semibold py-2 px-6 rounded-md transition-all"
            >
              Configurar perfil
            </button>
          )}

          <button
            type="button"
            onClick={() => setMostrarMas((prev) => !prev)}
            className="bg-indigo-500 hover:bg-indigo-600 text-white font-semibold py-2 px-6 rounded-md transition-all"
          >
            {mostrarMas ? 'Ocultar información' : 'Ver más información'}
          </button>

          {editable && (
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-md transition-all"
            >
              Guardar
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default PerfilView;
