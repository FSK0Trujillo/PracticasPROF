import Administrador from "../models/Administrador.js"// Importando modelo de Administrador
import generarJWT from "../helpers/generarJWT.js"// Importando función para generar JWT
import generarId from "../helpers/generarId.js"// Importando función para generar ID
import emailRegistro from "../helpers/emailRegistro.js"
import emailOlvidePassword from "../helpers/emailOlvidePassword.js"

const registrar = async (req, res) => {

    // Extraer los datos email y nombre
    const {email, nombre} = req.body
    
    // Validar si el usuario existe en la DB
    const existeUsuario = await Administrador.findOne({where: {email}})

    // Si el usuario existe, generar mensaje de error 
    if (existeUsuario){

        // Generando mensaje de error
        const error = new Error("Usuario ya registrado")

        // Enviando mensaje de error
        return res.status(400).json({msg: error.message})
    }

    // Si el usuario no existe, registrarlo en la DB
    if(!((email.split("@")[0].includes("seleccioncat") || 
        email.split("@")[0].includes("administracioncat"))
        && email.split("@")[1] === "coppel.com")){

        // Generando mensaje de error
        const error = new Error("El usuario no tiene permisos de administración")

        // Enviando mensaje de error
        return res.status(400).json({msg: error.message})
    }


    try {

        // Instanciando Administrador con los datos enviados (email y correo)
        const administrador = new Administrador(req.body)

        // Guardando nuevo administrador
        const administradorGuardado = await administrador.save()

        // Enviando email para registrar
        emailRegistro({
            email,
            nombre,
            token: administradorGuardado.token
        })

        // Enviando mensaje de satisfacción
        res.json({msg: "Usuario registrado correctamente"})
    } catch (error) {
        console.log(error)
    }
}

const perfil = (req,res)=>{

    const { administrador } = req
    res.json(administrador)
}

const confirmar = async (req, res)=>{

    const {token} = req.params
    const usuarioConfirmar = await Administrador.findOne({where: {token}})
    if (!usuarioConfirmar){
        const error = new Error("Token no valido")
        return res.status(404).json({msg: error.message})
    }

    try {
        usuarioConfirmar.token = null
        usuarioConfirmar.confirmado = true
        await usuarioConfirmar.save()
        res.json({msg: "Usuario confirmado correctamente"})
    } catch (error) {
        console.log(error)
    }
}

const autenticar = async (req, res) =>{

    const {email, password} = req.body

    //Comprobar si el usuario existe
    const usuario = await Administrador.findOne({where: {email}})

    if (!usuario){
        const error = new Error("El usuario no existe")
        return res.status(404).json({msg: error.message})
    }
    if (!usuario.confirmado){
        const error = new Error("Tu cuenta no ha sido confirmada")
        return res.status(403).json({msg: error.message})
    }

    //Autenticar usuario
    if (await usuario.comprobarPassword(password)){
        //Autenticar

        // Trabajando desde el frontend para eliminar el boog de inicio de sesión
        // usuario.token = generarJWT(usuario.id)
        // res.json(usuario)
        // ______________________________________________
        res.json({
            id: usuario.id,
            nombre: usuario.nombre,
            email: usuario.email,
            token: generarJWT(usuario.id)
        })
        // ______________________________________________
        // Antes de detectar el boog
        // res.json({token: generarJWT(usuario.id)})
    }else{
        const error = new Error("El password es incorrecto")
        return res.status(403).json({msg: error.message})
    }

}

const olvidePassword = async (req, res)=>{
    const {email} = req.body
    const existeUsuario = await Administrador.findOne({where: {email}})
    if (!existeUsuario){
        const error = new Error("El usuario no existe")
        return res.status(400).json({msg: error.message})
    }

    try {
        existeUsuario.token = generarId()
        await existeUsuario.save()

        // Enviar email con instrucciones
        // _______________________________________
        // emailOlvidePassword({
        //     email, 
        //     nombre: existeUsuario.nombre,
        //     token: existeUsuario.token
        // })
        // _______________________________________

        res.json({msg: "Hemos enviado un email con las instrucciones"})
    } catch (error) {
        console.log(error)
    }
}

const comprobarToken = async (req, res)=>{
    const {token} = req.params
    const tokenValido = await Administrador.findOne({where: {token}})

    if (tokenValido){

        //El usaurio existe, el token es valido
        res.json({msg: "Token valido, el usaurio existe"})
    }else{
        const error = new Error("Token no valido")
        return res.status(400).json({msg: error.message})
    }
}

const nuevoPassword = async (req, res)=>{
    const {token} = req.params
    const {password} = req.body

    const administrador = await Administrador.findOne({where: {token}})
    if(!administrador){
        const error = new Error("Hubo un error")
        return res.status(400).json({msg: error.message})
    }

    try {
        administrador.token = null
        administrador.password = password
        await administrador.save()
        res.json({msg: "Password modificado correctamente"})
    } catch (error) {
        console.log(error)
    }
}

const actualizarPerfil = async (req, res) => {
    const {email} = req.body
    const administrador = await Administrador.findByPk(req.params.id)
    if(!administrador){
        const error = new Error("Hubo un error")
        return res.status(400).json({msg: error.message})
    }

        // Si el usuario no existe, registrarlo en la DB
    if(!((email.split("@")[0].includes("seleccioncat") || 
        email.split("@")[0].includes("administracioncat"))
        && email.split("@")[1] == "coppel.com")){

        // Generando mensaje de error
        const error = new Error("El usuario no tiene permisos de administración")

        // Enviando mensaje de error
        return res.status(400).json({msg: error.message})
    }
    
    if(administrador.email !== email){
        const existeEmail = await Administrador.findOne({where: {email}})
        if(existeEmail){
            const error = new Error("Ese email ya está en uso")
            return res.status(400).json({msg: error.message})
        }
    }
    try {
        administrador.nombre = req.body.nombre
        administrador.email = email

        const administradorActualizado = await administrador.save()
        res.json(administradorActualizado)
    } catch (error) {
        console.log(error)
    }
}

const actualizarPassword = async (req, res) => {
    // Leer los datos
    const {id} = req.administrador
    const {pwd_actual, pwd_nuevo} = req.body
    // Comprobar que el administrador existe
    const administrador = await Administrador.findByPk(id)
    if(!administrador){
        const error = new Error("Hubo un error")
        return res.status(400).json({msg: error.message})
    }
    // Comprobar su password
    if(await administrador.comprobarPassword(pwd_actual)){
        // Almacenar el nuevo password
        administrador.password = pwd_nuevo
        await administrador.save()
        res.json({msg: "Password Almacenado Correctamente"})
    }else{
        const error = new Error("El password actual es Incorrecto")
        return res.status(400).json({msg: error.message})
    }

}

export {
    registrar, 
    perfil,
    confirmar, 
    autenticar, 
    olvidePassword, 
    comprobarToken, 
    nuevoPassword,
    actualizarPerfil,
    actualizarPassword
}