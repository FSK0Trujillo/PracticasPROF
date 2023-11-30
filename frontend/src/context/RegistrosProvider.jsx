/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState, useEffect, createContext } from "react";
import clienteAxios from "../config/axios"
import useAuth from "../hooks/useAuth";
import useVacantes from "../hooks/useVacantes";
import { useNavigate } from "react-router-dom";


const RegistrosContext = createContext()

const RegistrosProvider = ({children}) => {
    const[registros, setRegistros] = useState([])
    const[registro, setRegistro] = useState({})
    const[filtro, setFiltro] = useState("NUEVO")
    const {auth} = useAuth()

    const navigate = useNavigate()
    useEffect(()=>{
        const obtenerRegistros = async ()=>{
            try {
                const token = localStorage.getItem("avc_token_")
                if(!token) return

                const config = {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`
                    }
                }
                const {data} = await clienteAxios("/registros", config)
                setRegistros(data)
            } catch (error) {
                console.log(error)
            }
        }
        obtenerRegistros()
    },[auth])


    const setEdicion = registro => {
        setRegistro(registro)
        navigate(`/admin/registros/${registro.id}`)

    }

    const setEliminar = async id => {
        const confirmar = confirm("¿Deseas eliminar este registro?")
        if(confirmar){
            try {
                const token = localStorage.getItem("avc_token_")
                const config = {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`
                    }
                }
                const url = `/registros/${id}`
                const {data} = await clienteAxios.delete(url, config)
                
                const registrosActualizado = registros.filter(registroState => registroState.id !== id)
                setRegistros(registrosActualizado)

            } catch (error) {
                console.log(error)
            }
        }
    }


    return(
        <RegistrosContext.Provider
            value={{
                registros,
                registro,
                setRegistros,
                setRegistro,
                setEdicion,
                setEliminar,
                setFiltro,
                filtro
            }}
        >
            {children}
        </RegistrosContext.Provider>
    )
}

export {RegistrosProvider}

export default RegistrosContext