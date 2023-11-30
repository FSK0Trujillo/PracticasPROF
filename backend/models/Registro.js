import Sequelize from "sequelize";// Importando Sequelize para los type del modelo
import db from "../config/db.js";// Importando la DB

const Registro = db.define("registros", {
    id: {
        type: Sequelize.STRING,
        primaryKey: true
    },
    empleado: {
        type: Sequelize.STRING,
        allowNull: false
    },
    nombre: {
        type: Sequelize.STRING,
        allowNull: false
    },
    puesto_actual: {
        type: Sequelize.STRING,
        allowNull: false
    },
    turno: {
        type: Sequelize.STRING,
        allowNull: false
    },
    numero_centro: {
        type: Sequelize.STRING,
        allowNull: false
    },
    nombre_area: {
        type: Sequelize.STRING,
        allowNull: false
    },
    telefono: {
        type: Sequelize.STRING,
        allowNull: false
    },
    puesto_deseado: {
        type: Sequelize.STRING,
        allowNull: false
    },
    ciudad: {
        type: Sequelize.STRING,
        allowNull: false
    },
    cv: {
        type: Sequelize.STRING,
        allowNull: false
    },
    fecha_registro: {
        type: Sequelize.DATE,
        defaultValue: Date.now()
    },
    administrador: {
        type: Sequelize.STRING,
        allowNull: false
    },
    comentarios: {
        type: Sequelize.STRING,
        allowNull: true
    },
    estado: {
        type: Sequelize.STRING,
        allowNull: true
    }
})

export default Registro