import React, { useState, useEffect } from "react";
import PerfilView from "../views/PerfilView";

const PerfilPage = () => {
  const [perfil, setPerfil] = useState({});

  useEffect(() => {
    // Cargar perfil desde backend
    fetch("http://localhost:5000/api/perfil")
      .then((res) => res.json())
      .then((data) => setPerfil(data))
      .catch((err) => console.error("Error al cargar perfil", err));
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPerfil((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/api/perfil", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(perfil),
      });

      if (!response.ok) throw new Error("Error al guardar");

      alert("Perfil guardado correctamente.");
    } catch (error) {
      alert("Error al guardar");
    }
  };

  return <PerfilView perfil={perfil} onChange={handleChange} onSubmit={handleSubmit} />;
};

// 🔴 ESTO ES LO QUE TE FALTA PROBABLEMENTE
export default PerfilPage;
