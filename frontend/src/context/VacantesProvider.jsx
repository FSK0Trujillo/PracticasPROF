/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
// /* eslint-disable react/prop-types */
import { createContext, useState, useEffect, useRef } from "react";
import clienteAxios from "../config/axios";
import useAuth from "../hooks/useAuth";

const VacantesContext = createContext()


export const VacantesProvider = ({children}) => {

    const [vacantes, setVacantes] = useState([])
    const [vacante, setVacante] = useState({})
    const {auth} = useAuth()

    const ref = useRef(null)
    useEffect(()=>{
        const obtenerVacantes = async ()=>{
            try {
                const token = localStorage.getItem("avc_token_")
                if(!token) return

                const config = {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`
                    }
                }
                const {data} = await clienteAxios("/vacantes", config)
                setVacantes(data)
            } catch (error) {
                console.log(error)
            }
        }
        obtenerVacantes()
    },[auth])

    const guardarVacante = async vacante => {

        const token = localStorage.getItem("avc_token_")
        const config = {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`
            }
        }
        if(vacante.id){
            try {
                const {data} = await clienteAxios.put(`/vacantes/${vacante.id}`, vacante, config)

                const vacantesActualizado = vacantes.map( vacanteState => vacanteState.id === 
                data.id ? data : vacanteState)
                setVacantes(vacantesActualizado)
                setVacante({})
            } catch (error) {
                console.log(error)
            }
        }else{
            try {
    
                const {data} = await clienteAxios.post("/vacantes", vacante, config)

                setVacantes([data, ...vacantes])
            } catch (error) {
                console.log(error.response.data.msg)
            }
        }

    }

    const setEdicion = vacante => {

        setVacante(vacante)
        ref.current?.scrollIntoView({behavior: "smooth"})
    }

    const eliminarVacante = async id => {
        const confirmar = confirm("¿Confirmas que deseas eliminar?")
        if(confirmar){
            try {
                const token = localStorage.getItem("avc_token_")
                const config = {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`
                    }
                }

                const {data} = await clienteAxios.delete(`/vacantes/${id}`, config)
                const vacantesActualizado = vacantes.filter(vacantesState => vacantesState.id 
                !== id)

                setVacantes(vacantesActualizado)
            } catch (error) {
                console.log(error)
            }
        }
    }
    return(
        <VacantesContext.Provider
            value={{
                vacantes,
                guardarVacante,
                setEdicion,
                vacante,
                eliminarVacante,
                ref
            }}
        >

            {children}
        </VacantesContext.Provider>
    )
}

export default VacantesContext