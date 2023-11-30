import express from "express"
import {
    registrar, 
    confirmar, 
    autenticar, 
    olvidePassword, 
    comprobarToken, 
    nuevoPassword,
    perfil,
    actualizarPerfil,
    actualizarPassword
} from "../controllers/administradorControllers.js"
import checkAuth from "../middleware/authMiddleware.js"

const router = express.Router()

// Área pública
router.post("/", registrar)
router.get("/confirmar/:token", confirmar)
router.post("/login", autenticar)
router.post("/olvide-password", olvidePassword)
router.route("/olvide-password/:token").get(comprobarToken).post(nuevoPassword)

// Área privada
router.get("/perfil", checkAuth, perfil)
router.put("/perfil/:id", checkAuth, actualizarPerfil)
router.put("/actualizar-password", checkAuth, actualizarPassword)

export default router