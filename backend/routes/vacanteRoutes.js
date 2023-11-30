import express from "express";
import {
    agregarVacante, 
    obtenerVacantes, 
    obtenerVacante, 
    actualizarVacante, 
    eliminarVacante
} from "../controllers/vacanteControllers.js"
import checkAuth from "../middleware/authMiddleware.js"

const router = express.Router()

router.route("/")
    .post(checkAuth, agregarVacante)
    .get(checkAuth, obtenerVacantes)

router
    .route("/:id")
    .get(checkAuth, obtenerVacante)
    .put(checkAuth, actualizarVacante)
    .delete(checkAuth, eliminarVacante)

export default router