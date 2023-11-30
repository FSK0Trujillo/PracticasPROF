import jwt from "jsonwebtoken"// Importando jwt
import Administrador from "../models/Administrador.js"// Importando modelo de Administrador

const checkAuth = async (req, res, next) => {

    // Declarando token y decoded vacios
    let token
    let decoded

    // Si existe una autorización, y además empieza con Bearer, reescribir token y decoded
    if(req.headers.authorization && req.headers.authorization.startsWith("Bearer")){
        try {
            // Reescribiendo token y decoded
            // token continene el token generado por JWT
            token = req.headers.authorization.split(" ")[1]
            // decoded verifica el token, y devuelve un objeto con el id
            // del usuario
            decoded = jwt.verify(token, process.env.JWT_SECRET)
            
        } catch (error) {
            // De haber un error, se detiene la ejecución y se pasa a la siguiente función
            const e = new Error("Token no valido")
            return res.status(403).json({msg: e.message})

        }
    }

    // Si hay un decoded, buscar en la DB por el ID
    if(decoded){
        // Extrayendo datos del usuario por el id (Primary Key)
        const {id, email, nombre} = await Administrador.findByPk(decoded.id)
        
        // Declarando el objeto del administrador
        const administrador = {id, email, nombre}

        // Creando la sesión del usuario administrador
        req.administrador = administrador

        // Se detiene la ejecución de las siguientes lineas y se ejecuta la
        // siguiente función
        return next()
    }
    
    // En caso de no haber token, enviar mensaje de error
    if(!token){
        const error = new Error("Token no valido o inexistente")
        res.status(403).json({msg: error.message})
    }

    // Se ejecuta la siguiente función
    next()
}

export default checkAuth