import Sequelize from "sequelize";// Importando Sequelize para los type del modelo
import db from "../config/db.js";// Importando la DB
import bcrypt from "bcrypt"
import generarId from "../helpers/generarId.js";

// Importando y exportando la tabla tb_vacantes de la DB de postgres
const Administrador = db.define("administradores",{
    id: {
        type: Sequelize.STRING,
        primaryKey: true,
        defaultValue: generarId()
    },
    email: {
        type: Sequelize.STRING,
        unique: true
    },
    nombre: {
        type: Sequelize.STRING
    },
    password: {
        type: Sequelize.STRING
    },
    token: {
        type: Sequelize.STRING,
        defaultValue: generarId()
    },
    confirmado: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
    }},{
    hooks: {
    beforeCreate: async (user) => {
        // Se ejecuta solo al crear un usuario
        if (user.password) {
         const salt = bcrypt.genSaltSync(10, 'a');
         user.password = bcrypt.hashSync(user.password, salt);
        }
    },
    beforeUpdate: async (user) => {
        // Se ejecuta solo al actualizar un usuario
        if (!user.changed("password")) {
            // Si no está tratando de cambiar la contraseña,
            // se detine la ejecución.
            return
        }
        // Si está tratando de cambiar la contrasaña, 
        // esta se hashea antes de almacenarse
        const salt = bcrypt.genSaltSync(10, 'a');
        user.password = bcrypt.hashSync(user.password, salt);
    }
    }
})

Administrador.prototype.comprobarPassword = async function(passwordFormulario){
    return await bcrypt.compare(passwordFormulario, this.password)
}

export default Administrador