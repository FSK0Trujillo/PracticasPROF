import db from "../config/db.js"
import { Sequelize } from "sequelize"

const Vacante = db.define("vacantes",{
    id: {
        type: Sequelize.STRING,
        primaryKey: true,
        allowNull: false
    },
    puesto: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false
    },
    descripcion: {
        type: Sequelize.STRING,
        allowNull: false
    },
    cualidades: {
        type: Sequelize.STRING,
        allowNull: false
    },
    experiencia: {
        type: Sequelize.STRING,
        allowNull: false
    },
    caracteristicas: {
        type: Sequelize.STRING,
        allowNull: false
    },
    datos: {
        type: Sequelize.STRING,
        allowNull: false
    },
    estudios: {
        type: Sequelize.STRING,
        allowNull: false
    },
    conocimientos: {
        type: Sequelize.STRING,
        allowNull: false
    },
    disponibles: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    ciudad: {
        type: Sequelize.STRING,
        allowNull: false
    },
    administrador: {
        type: Sequelize.STRING,
        allowNull: false
    }
})

export default Vacante