import Registro from "../models/Registro.js"

const obtenerRegistros = async (req, res) => {
    const registros = await Registro.findAll({where: {administrador: req.administrador.id}})

    res.json(registros)
}

const obtenerRegistro = async (req, res) => {

    const {id} = req.params

    const registro = await Registro.findByPk(id)
    res.json(registro)
}

const actualizarRegistro = async (req, res) => {
    const {comentarios, estado, id} = req.body
    try {
        const registro = await Registro.findByPk(id)
        registro.comentarios = comentarios
        registro.estado = estado
        registro.save()

        res.json({msg: "Actualizado correctamente"})
    } catch (error) {
        console.log(error)
    }
}

const eliminarRegistro = async (req, res) => {

    const {id} = req.params

    const registro = await Registro.findByPk(id)
    try {
        await registro.destroy()
        res.json({msg: "Registro eliminado correctamente"})
    } catch (error) {
        console.log(error)
    }
}

export {
    obtenerRegistros,
    obtenerRegistro,
    actualizarRegistro,
    eliminarRegistro
}