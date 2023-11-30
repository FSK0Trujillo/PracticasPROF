import generarId from "../helpers/generarId.js"
import Vacante from "../models/Vacante.js"

const agregarVacante = async (req, res) => {
    const vacante = new Vacante(req.body)
    vacante.administrador = req.administrador.id
    vacante.id = generarId()
    try {
        const vacanteAlmacenada = await vacante.save()
        res.json(vacanteAlmacenada)
    } catch (error) {
        console.log(error)
    }
}
const obtenerVacantes = async (req, res) => {
    const vacantes = await Vacante.findAll({where: {administrador: req.administrador.id}})

    res.json(vacantes)
}
const obtenerVacante = async (req, res) => {
    const {id} = req.params
    const vacante = await Vacante.findByPk(id)
    if(!vacante){
        res.status(404).json({msg: "No encontrado"})
    }
    if(vacante.administrador !== req.administrador.id){
        return res.json({msg: "Acción no valida"})
    }
    res.json(vacante)
}
const actualizarVacante = async (req, res) => {
    const {id} = req.params
    const vacante = await Vacante.findByPk(id)

    if(!vacante){
        res.status(404).json({msg: "No encontrado"})

    }
    if(vacante.administrador !== req.administrador.id){
        return res.json({msg: "Acción no valida"})
    }


    // //Actualizar vacante
    vacante.puesto = req.body.puesto || vacante.puesto
    vacante.descripcion = req.body.descripcion || vacante.descripcion
    vacante.cualidades = req.body.cualidades || vacante.cualidades
    vacante.experiencia = req.body.experiencia || vacante.experiencia
    vacante.caracteristicas = req.body.caracteristicas || vacante.caracteristicas
    vacante.datos = req.body.datos || vacante.datos
    vacante.estudios = req.body.estudios || vacante.estudios
    vacante.conocimientos = req.body.conocimientos || vacante.conocimientos
    vacante.disponibles = req.body.disponibles || vacante.disponibles
    vacante.ciudad = req.body.ciudad || vacante.ciudad

    try {
        const vacanteActualizada = await vacante.save()
        res.json(vacanteActualizada)
    } catch (error) {
        console.log(error)
    }
}
const eliminarVacante = async (req, res) => {
    const {id} = req.params
    const vacante = await Vacante.findByPk(id)

    if(!vacante){
        res.status(404).json({msg: "No encontrado"})

    }
    if(vacante.administrador !== req.administrador.id){
        return res.json({msg: "Acción no valida"})
    }
    try {
        await vacante.destroy()
        res.json({msg: "Vacante eliminada"})
    } catch (error) {
        console.log(error)
    }
}

export {
    agregarVacante,
    obtenerVacantes,
    obtenerVacante,
    actualizarVacante,
    eliminarVacante
}