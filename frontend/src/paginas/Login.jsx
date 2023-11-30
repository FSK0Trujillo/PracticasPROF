/* eslint-disable no-unused-vars */
import { Link, useNavigate } from "react-router-dom"
import useAuth from "../hooks/useAuth"
import { useState } from "react"
import Alerta from "../components/Alerta"
import clienteAxios from "../config/axios"

const Login = () => {

    // Extrayendo state del formulario
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    // Extrayendo state de alerta
    const [alerta, setAlerta] = useState("")

    // Extrayendo state de auth para la autenticación del usuario
    const {auth, setAuth} = useAuth()

    // Instanciando Navigate para redireccion de página
    const navigate = useNavigate()

    // Creando evento submit para el formulario
    const handleSubmit = async e => {

        // Previniendo la acción por defecto
        e.preventDefault()

        // Si hay campos vacíos
        if([email, password].includes("")){

            // State de alerta con mensaje y error
            setAlerta({
                msg: "Todos los campos son obligatorios",
                error: true
            })
            return// Detener la ejecución
        }
        
        // Si la contraseña es menor a seis caracteres
        if(password.length < 6){

            // State de alerta con mensaje y error
            setAlerta({
                msg: "El password debe tener mínimo 6 caracteres",
                error: true
            })
            return// Detener la ejecución
        }

        // Si ha pasado la prueba...
        try {

            // Destructurando los datos de la petición post de axios
            const {data} = await clienteAxios.post("/administradores/login", {email, password})

            // Agregando el token unico a localStorage
            localStorage.setItem("avc_token_", data.token)

            // Agregando los datos al state de autenticación auth
            setAuth(data)

            // Redireccionando a la página de administrador
            navigate("/admin")
        } catch (error) {
            
            // De haber algún error, mostrar el error en la alerta
            setAlerta({
                msg: error.response.data.msg,
                error: true
            })
        }
    }

    const {msg} = alerta
  return (
    <>
        <div>
            <h1 className="text-primary-600 font-black text-6xl">
                Inicia sesión y administra las {""}
                <span className="text-black"> vacantes</span>
            </h1>
        </div>
        <div className="mt-20 md:mt-5 shadow-lg px-5 py-10 rounded-xl bg-white">
            {msg && <Alerta
                alerta={alerta}
            />}
            <form 
                onSubmit={handleSubmit}
            >
                <div className="my-5">
                    <label className="uppercase text-gray-600 block text-xl font-bold">
                        Email
                    </label>
                    <input 
                        type="email"
                        placeholder="Email de registro"
                        className="border w-full p-3 mt-3 bg-gray-50 rounded-xl"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                </div>
                <div className="my-5">
                    <label className="uppercase text-gray-600 block text-xl font-bold">
                        Password
                    </label>
                    <input 
                        type="password"
                        placeholder="Tu password"
                        className="border w-full p-3 mt-3 bg-gray-50 rounded-xl"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    />
                </div>
                <input 
                    type="submit" 
                    value="Iniciar sesión"
                    className="bg-primary-700 w-full py-3 px-10 rounded-xl text-white uppercase font-bold mt-5 
                    hover:cursor-pointer hover:bg-primary-800-"
                />
            </form>
            <nav className="mt-10 lg:flex lg:justify-between">
                <Link 
                    className="block text-center my-5 text-gray-500"
                    to="/registrar">¿No tienes una cuenta? Registrate</Link>
                <Link 
                    className="block text-center my-5 text-gray-500"
                    to="/olvide-password">Olvide mi password</Link>
            </nav>
        </div>
    </>
  )
}

export default Login