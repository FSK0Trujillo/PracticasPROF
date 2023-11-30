import express from "express"
import { obtenerVacantes, obtenerVacante, guardarRegistro } from "../controllers/principalControllers.js"
import cargarArchivo from "../middleware/cargarArchivo.js"
const router = express.Router()

router.get("/", obtenerVacantes)
router.get("/:ciudad/:id", obtenerVacante)
router.post("/:ciudad/:id", cargarArchivo.single("myFile"), guardarRegistro)

export default router