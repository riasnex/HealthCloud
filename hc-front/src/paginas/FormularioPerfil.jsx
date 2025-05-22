import React from 'react';

const FormularioPerfil = ({ perfil, onChange, editable, rol }) => {
  return (
    <form className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto mt-6">
      <input
        type="text"
        name="nombre"
        value={perfil.nombre || ""}
        onChange={onChange}
        placeholder="Nombre"
        className="p-2 border rounded"
        disabled={!editable}
      />
      <input
        type="text"
        name="apellido"
        value={perfil.apellido || ""}
        onChange={onChange}
        placeholder="Apellido"
        className="p-2 border rounded"
        disabled={!editable}
      />
      <input
        type="email"
        name="correo"
        value={perfil.correo || ""}
        onChange={onChange}
        placeholder="Correo electrónico"
        className="p-2 border rounded"
        disabled={!editable}
      />
      <input
        type="tel"
        name="telefono"
        value={perfil.telefono || ""}
        onChange={onChange}
        placeholder="Teléfono"
        className="p-2 border rounded"
        disabled={!editable}
      />
      <input
        type="text"
        name="direccion"
        value={perfil.direccion || ""}
        onChange={onChange}
        placeholder="Dirección"
        className="p-2 border rounded"
        disabled={!editable}
      />

      {rol === "medico" && (
        <>
          <input
            type="text"
            name="especialidad"
            value={perfil.especialidad || ""}
            onChange={onChange}
            placeholder="Especialidad médica"
            className="p-2 border rounded"
            disabled={!editable}
          />
          <input
            type="text"
            name="centroAtencion"
            value={perfil.centroAtencion || ""}
            onChange={onChange}
            placeholder="Centro de atención"
            className="p-2 border rounded"
            disabled={!editable}
          />
          <input
            type="text"
            name="licencia"
            value={perfil.licencia || ""}
            onChange={onChange}
            placeholder="Número de licencia"
            className="p-2 border rounded"
            disabled={!editable}
          />
          <input
            type="text"
            name="horarios"
            value={perfil.horarios || ""}
            onChange={onChange}
            placeholder="Horarios de atención"
            className="p-2 border rounded"
            disabled={!editable}
          />
        </>
      )}

      <input
        type="password"
        name="password"
        value={perfil.password || ""}
        onChange={onChange}
        placeholder="Nueva contraseña"
        className="p-2 border rounded"
        disabled={!editable}
      />

      <label className="flex items-center col-span-2 space-x-2 mt-2">
        <input
          type="checkbox"
          name="notificarWeb"
          checked={perfil.notificarWeb || false}
          onChange={(e) =>
            onChange({ target: { name: "notificarWeb", value: e.target.checked } })
          }
          disabled={!editable}
        />
        <span>Notificar en la web</span>
      </label>

      {rol === "medico" && (
        <label className="flex items-center col-span-2 space-x-2">
          <input
            type="checkbox"
            name="disponible"
            checked={perfil.disponible || false}
            onChange={(e) =>
              onChange({ target: { name: "disponible", value: e.target.checked } })
            }
            disabled={!editable}
          />
          <span>Disponible para agendar citas</span>
        </label>
      )}

      <label className="flex items-center col-span-2 space-x-2">
        <input
          type="checkbox"
          name="notificarCorreo"
          checked={perfil.notificarCorreo || false}
          onChange={(e) =>
            onChange({ target: { name: "notificarCorreo", value: e.target.checked } })
          }
          disabled={!editable}
        />
        <span>Notificar por correo</span>
      </label>
    </form>
  );
};

export default FormularioPerfil;
