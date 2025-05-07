import { leerPerfil, guardarPerfil } from "./perfilModel.js";

export const obtenerPerfil = (req, res) => {
  try {
    const perfil = leerPerfil();
    res.json(perfil);
  } catch (err) {
    res.status(500).json({ error: "Error al leer perfil" });
  }
};

export const actualizarPerfil = (req, res) => {
  try {
    guardarPerfil(req.body);
    res.json({ mensaje: "Perfil guardado correctamente" });
  } catch (err) {
    res.status(500).json({ error: "Error al guardar perfil" });
  }
};
