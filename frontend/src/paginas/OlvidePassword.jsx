import { Link } from "react-router-dom"
import { useState } from "react"
import clienteAxios from "../config/axios"
import Alerta from "../components/Alerta"

const OlvidePassword = () => {
    const [email, setEmail] = useState("")
    const [alerta, setAlerta] = useState({})

    const handleSubmit = async e => {
        e.preventDefault()

        if(email === "" || email.length < 6){
            setAlerta({msg: "El email es oligatorio", error: true})
            return
        }
        
        try {
            const {data} = await clienteAxios.post("/administradores/olvide-password", {email})
            setAlerta({
                msg: data.msg
            })
            setEmail("")

        } catch (error) {
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
                Recupera tu password y sigue administrando {""}
                <span className="text-black"> las vacantes</span>
            </h1>
        </div>
        <div className="mt-20 md:mt-5 shadow-lg px-5 py-10 rounded-xl bg-white">
            {msg && 
            <Alerta
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
                <input 
                    type="submit" 
                    value="Enviar instrucciones"
                    className="bg-primary-700 w-full py-3 px-10 rounded-xl text-white uppercase font-bold mt-5 
                    hover:cursor-pointer hover:bg-primary-800 md:w-auto"
                />
            </form>
            <nav className="mt-10 lg:flex lg:justify-between">
                <Link 
                    className="block text-center my-5 text-gray-500"
                    to="/">¿Ya tienes una cuenta? Inicia sesión</Link>
                 <Link 
                    className="block text-center my-5 text-gray-500"
                    to="/registrar">¿No tienes una cuenta? Registrate</Link>
            </nav>
        </div>
    
    </>
  )
}

export default OlvidePassword