/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
/* eslint-disable no-unused-vars */
import { useState, useEffect, createContext } from "react";
import clienteAxios from "../config/axios"

const AuthContext = createContext()

const AuthProvider = ({children}) => {

    // Creando state cargando y auth
    const [cargando, setCargando] = useState(true)
    const [auth, setAuth] = useState({})

    // Autenticando el usuario
    useEffect(()=>{

        // Función para autenticar el usuario
        const autenticarUsuario = async () =>{
            const token = localStorage.getItem("avc_token_")

            // Si no hay un token, cambiar el state de cargando y detener
            // la ejecución
            if(!token) {
                setCargando(false)
                return
            }

            // Creando configuración de autenticación
            const config = {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`
                }
            }

            // Existe token
            try {

                // Obtener el perfil del usuario
                const {data} = await clienteAxios("/administradores/perfil", config)

                // Agregando los datos del perfil al state de autenticación
                setAuth(data)
            } catch (error) {
                // De haber algún error, mostrarlo en consola
                console.log(error.response.data.msg)
                
                // Vaciar el state auth
                setAuth({})
            }

            setCargando(false)
        }
        autenticarUsuario()// Llamar a la función para autenticar al usuario
    },[])

    const cerrarSesion = () => {
        localStorage.removeItem("avc_token_")

        const confirmar = confirm("¿Confirmas cerrar sesión?")
        if(confirmar){
            setAuth({})
        }
    }

    const actualizarPerfil = async datos => {
        const token = localStorage.getItem("avc_token_")

        // Si no hay un token, cambiar el state de cargando y detener
        // la ejecución
        if(!token) {
            setCargando(false)
            return
        }

        // Creando configuración de autenticación
        const config = {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`
            }
        }

        try {
            const url = `/administradores/perfil/${datos.id}`
            const {data} = await clienteAxios.put(url, datos, config)

            return {
                msg: "Almacenado correctamente"
            }
        } catch (error) {
            return {
                msg: error.response.data.msg,
                error: true
            }
        }
    }

    const guardarPassword = async datos => {
        const token = localStorage.getItem("avc_token_")

        if(!token) {
            setCargando(false)
            return
        }

        const config = {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`
            }
        }

        try {
            const url = "/administradores/actualizar-password"

            const {data} = await clienteAxios.put(url, datos, config)

            return {
                msg: data.msg
            }
        } catch (error) {
            return {
                msg: error.response.data.msg,
                error: true
            }
        }
    }

    return(
        // Hacer disponible auth y setAuth
        <AuthContext.Provider
            value={{
                auth,
                setAuth,
                cargando,
                cerrarSesion,
                actualizarPerfil,
                guardarPassword
            }}
        >
            {/* Declarando AuthContext como elemento padre */}
            {children}
        </AuthContext.Provider>
    )
}

// Exportando AuthProvider 
export {AuthProvider}

// Exportando AuthContext por default
export default AuthContext