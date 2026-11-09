import { Router } from "express";

import * as proveedorCtr from "./proveedores.controller.js";

const router = Router(); // Uso el metodo de Router() de express para crear las rutas
// La ruta tiene dos parametros: la ruta en si misma
// y el metodo que la resuelve

router.get("/proveedores", proveedorCtr.obtenerUsuarios);
router.get("/proveedores/:id", proveedorCtr.obtenerUsuarioId);
router.post("/proveedores", proveedorCtr.crearUsuario);
router.delete("/proveedores/:id", proveedorCtr.borrarUsuario);
router.put("/proveedores/:id", proveedorCtr.actualizarUsuario);

export default router;
