import express from "express";
import cors from "cors";
import rutaproveedor from "./proveedores/proveedores.routes.js";

const app = express();
const PORT = 4100;

// Middlewares
app.use(express.json()); // Para que el servidor entienda JSON en el body
app.use(cors());
// Ruta para los endpoint de proveedores
app.use("/api", rutaproveedor);

app.listen(PORT, (req, res) => {
  console.log(`Server iniciado en : http://localhost:${PORT}`);
});