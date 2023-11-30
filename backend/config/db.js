import Sequelize from "sequelize";
import dotenv from "dotenv/config"

// Creando el arreglo de conexión a la DB
const db = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,{
    host: process.env.DB_HOST,
    port: "5432",
    dialect: "postgres",
    define: {
        timestamps: false
    },
    pool:{
        max:5,
        min:0,
        acquire:30000,
        idle:10000
    },
    operatorAliases: false,
    logging: false
    }
)

// Exportando el arreglo
export default db