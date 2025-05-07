import express from "express";
import cors from "cors";
import { obtenerPerfil, actualizarPerfil } from "./controllers/perfilController.js";



const app = express();
app.use(cors());
app.use(express.json());

app.get("/api/perfil", obtenerPerfil);
app.post("/api/perfil", actualizarPerfil);

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Servidor backend en http://localhost:${PORT}`);
});
