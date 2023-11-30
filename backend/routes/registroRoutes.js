import express from "express"
import checkAuth from "../middleware/authMiddleware.js"
import { obtenerRegistros, obtenerRegistro, actualizarRegistro, eliminarRegistro } from "../controllers/registroControllers.js"
const router = express.Router()

router.get("/", checkAuth, obtenerRegistros)
router.get("/:id", checkAuth, obtenerRegistro)
router.put("/:id", checkAuth, actualizarRegistro)
router.delete("/:id", checkAuth, eliminarRegistro)

export default router