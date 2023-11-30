/* eslint-disable no-unused-vars */
import Alerta from "../components/Alerta"
import { useState, useEffect } from "react"
import useRegistros from "../hooks/useRegistros"
import { useNavigate, useParams } from "react-router-dom"
import clienteAxios from "../config/axios"
import useAuth from "../hooks/useAuth"

const EditarRegistro = () => {

    const {registro, registros, setRegistros} = useRegistros()

    const [nombre, setNombre] = useState("")
    const [comentarios, setComentarios] = useState("")
    const [estado, setEstado] = useState("")
    const [datos, setDatos] = useState({})

    const [alerta, setAlerta] = useState({})
    const params = useParams()
    const {auth} = useAuth()
    const navigate = useNavigate()

    useEffect(()=>{
        if(registro.nombre){
            setNombre(registro.nombre)
            setComentarios(registro.comentarios)
            setEstado(registro.estado)
            return
        }
    },[registro])

    const handleSubmit = async e => {
        e.preventDefault()
        if(!registro.nombre){
            navigate("/admin/registros")
        }
        if([nombre, comentarios, estado].includes("")){
            setAlerta({
                msg: "Haz dejado campos vacios",
                error: true
            })
        }
        try {
            const token = localStorage.getItem("avc_token_")
            if(!token) return

            const config = {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`
                }
            }

            registro.comentarios = comentarios
            registro.estado = estado

            const {data} = await clienteAxios.put(`/registros/${registro.id}`, registro ,config)

            const registrosActualizado = registros.map( registroState => registroState.id === 
            registro.id ? registro : registroState)
            setRegistros(registrosActualizado)

            setAlerta({msg: data.msg})
            setTimeout(() => {
                setAlerta({})
                navigate("/admin/registros")
            }, 3000);

        } catch (error) {
            console.log(error)
        }

    }

    const {msg} = alerta

  return (
    <>  
    <h2 className="font-black text-3xl text-center">Registro</h2>
    <p className="text-xl mt-5 mb-10 text-center">
    Agrega comentarios y/o estado al {""}
    <span className="text-primary-600 font-bold">registro</span>
    </p>
    <div className="flex justify-center">
        <div className="flex justify-center flex-col w-2/4 m-5 p-5 rounded-lg border border-gray-600">
                <p className="font-bold uppercase text-primary-700 my-2">Nombre: {""}
                    <span className="font-normal normal-case text-black">{registro.nombre}</span>
                </p>
                <p className="font-bold uppercase text-primary-700 my-2">Empleado: {""}
                    <span className="font-normal normal-case text-black">{registro.empleado}</span>
                </p>
                <p className="font-bold uppercase text-primary-700 my-2">Puesto: {""}
                    <span className="font-normal normal-case text-black">{registro.puesto_actual}</span>
                </p>
                <p className="font-bold uppercase text-primary-700 my-2">Turno: {""}
                    <span className="font-normal normal-case text-black">{registro.turno}</span>
                </p>
                <p className="font-bold uppercase text-primary-700 my-2">Centro: {""}
                    <span className="font-normal normal-case text-black">{registro.numero_centro}</span>
                </p>
                <p className="font-bold uppercase text-primary-700 my-2">Nombre de centro: {""}
                    <span className="font-normal normal-case text-black">{registro.nombre_area}</span>
                </p>
                <p className="font-bold uppercase text-primary-700 my-2">Teléfono: {""}
                    <span className="font-normal normal-case text-black">{registro.telefono}</span>
                </p>
                <p className="font-bold uppercase text-primary-700 my-2">Puesto deseado: {""}
                    <span className="font-normal normal-case text-black">{registro.puesto_deseado}</span>
                </p>
                <p className="font-bold uppercase text-primary-700 my-2">Ciudad: {""}
                    <span className="font-normal normal-case text-black">{registro.ciudad}</span>
                </p>
                <p className="font-bold uppercase text-primary-700 my-2">CV: {""}
                    <span className="font-normal normal-case text-black">{registro.cv}</span>
                </p>
                <p className="font-bold uppercase text-primary-700 my-2">Fecha de registro: {""}
                    <span className="font-normal normal-case text-black">{registro.fecha_registro}</span>
                </p>
        
        <form 
        className="bg-white py-10 px-5 mb-10 lg:mb-5 shadow-md rounded-md border border-gray-600 mt-5"
        onSubmit={handleSubmit}>
            {/* Input para la descripción */}
            <div className="mb-5">
                <label 
                    htmlFor="comentarios"
                    className="text-gray-700 uppercase font-bold"
                >Comentarios</label>
                <textarea 
                id="comentarios"
                placeholder="Describe el puesto" 
                className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                value={comentarios || ""}
                onChange={e => setComentarios(e.target.value
                  )}
                />
            </div>


            <div className="mb-5">
                <label 
                    htmlFor="estado"
                    className="text-gray-700 uppercase font-bold"
                >Estado</label>
                    <select
                        id="estado"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        value={estado || ""}
                        onChange={e => setEstado( e.target.value
                          )}
                    >Estado Registro
                    <option value="NUEVO" disabled>Seleccionca el estado</option>
                    <option value="PENDIENTE">Pendiente por revisar</option>
                    <option value="EN PROCESO">En proceso</option>
                    <option value="FINALIZADO">Finalizado</option>
                    </select>
            </div>


            <input 
                type="submit" 
                className="bg-primary-600 w-full p-3 text-white uppercase font-bold
                hover:bg-primary-700 cursor-pointer transition-colors"
                value="Guardar cambios"/>
        </form>
        {msg && <Alerta alerta={alerta}/>}

        </div>
        </div>
    </>
  )
}

export default EditarRegistro