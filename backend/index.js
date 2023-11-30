import express from "express"
import dotenv from "dotenv"
import db from "./config/db.js"
import administradorRoutes from "./routes/administradorRoutes.js"
import vacanteRoutes from "./routes/vacanteRoutes.js"
import registroRoutes from "./routes/registroRoutes.js"
import principalRoutes from "./routes/principalRoutes.js"
import cors from "cors"
import {fileURLToPath} from "url"
import path from "path"

const app = express()
app.use(express.json())

dotenv.config()

db.authenticate()
    .then(() => {
        console.log("Base de datos conectada")
    })
    .catch(error => {
        console.log(error)
    })



const dominiosPermitidos = [process.env.FRONTEND_URL]
const corsOptions = {
    origin: function(origin, callback){
        if(dominiosPermitidos.indexOf(origin) !== -1){
            //El origen del request está permitido
            callback(null, true)
        }else{
            callback(new Error("No permitido por CORS"))
        }
    }
}

//const __filename = fileURLToPath(import.meta.url)
//const __dirname = path.dirname(__filename)

app.use(cors(corsOptions))
//app.use(cors())
app.use("/api/administradores", administradorRoutes)
app.use("/api/vacantes", vacanteRoutes)
app.use("/api/registros", registroRoutes)
app.use("/api/vacantescat", principalRoutes)

//app.use(express.static("dist"))
const PORT = process.env.PORT || 4000
app.listen(PORT, ()=>{
    console.log(`Servidor funcionando en el puerto ${PORT}`)
})

//app.get("*", (req, res) => {
//    res.sendFile(path.join(__dirname, "./dist", "index.html"))
//})