import Vacante from "../models/Vacante.js";
import Registro from "../models/Registro.js"
import generarId from "../helpers/generarId.js";

const obtenerVacantes = async (req, res) => {
    try {
        const vacantes = await Vacante.findAll()

        res.json(vacantes)
    } catch (error) {
        console.log(error)
    }
}


const obtenerVacante = async (req, res) => {
    const {id} = req.params
    try {
        const vacante = await Vacante.findByPk(id)

        res.json(vacante)
    } catch (error) {
        console.log(error)
    }
}

const guardarRegistro = async (req, res) => {

    const {path} = req.file
    const {empleado, nombre, puestoActual, turno, numeroCentro, nombreCentro, telefono, puesto_deseado, ciudad, administrador} = req.body
    const registroExiste = await Registro.findOne({where:{empleado, puesto_deseado, administrador}})
    const registro = new Registro()

    if(registroExiste){
        // Generando mensaje de error
        const error = new Error("Tienes un registro no mayor a un mes para esta vacante")

        // Enviando mensaje de error
        return res.status(400).json({msg: error.message})
    }

    try {
        const registro = new Registro()
        registro.empleado = empleado
        registro.nombre = nombre
        registro.puesto_actual = puestoActual
        registro.turno = turno
        registro.numero_centro = numeroCentro
        registro.nombre_area = nombreCentro
        registro.telefono = telefono
        registro.puesto_deseado = puesto_deseado
        registro.ciudad = ciudad
        registro.cv = path
        registro.administrador = administrador
        registro.id = generarId()
        registro.estado = "NUEVO"

        await registro.save()
        
        res.json({msg: "Tus datos han sido registrados"})
    } catch (error) {
        console.log(error)
    }

}


export {
    obtenerVacantes,
    obtenerVacante,
    guardarRegistro
}