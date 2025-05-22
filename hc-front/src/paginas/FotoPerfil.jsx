import React from "react";

const FotoPerfil = ({ perfil, editable, onChange }) => {
  return (
    <div className="flex flex-col items-center mb-6">
      <h2 className="text-xl font-semibold text-gray-800 mb-2">Resumen del Perfil</h2>

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
          className="mt-2 text-sm"
        />
      )}
    </div>
  );
};

export default FotoPerfil;
