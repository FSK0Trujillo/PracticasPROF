import multer from "multer"// Importando middleware
import dotenv from "dotenv/config"

const cargarArchivo = multer({storage: 
    
    multer.diskStorage({

    // Definiendo el destino del archivo
    destination: function (req, file, cb){
        cb(null, process.env.DOCUMENTS_PATH)
    },
    // Definiendo el nombre
    filename: function (req, file, cb){
        cb(null, Date.now() + "-" + file.originalname)
    }})

})

// Exportando middleware
export default cargarArchivo 