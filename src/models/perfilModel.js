import fs from "fs";
import path from "path";

const archivo = path.resolve("./backend/perfil.json");

export const leerPerfil = () => {
  if (!fs.existsSync(archivo)) return {};
  const data = fs.readFileSync(archivo, "utf8");
  return data ? JSON.parse(data) : {};
};

export const guardarPerfil = (datos) => {
  fs.writeFileSync(archivo, JSON.stringify(datos, null, 2), "utf8");
};
