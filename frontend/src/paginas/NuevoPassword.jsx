/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react"
import { useParams, Link } from "react-router-dom"
import Alerta from "../components/Alerta"
import clienteAxios from "../config/axios"

const NuevoPassword = () => {

  const [password, setPassword] = useState("")
  const [repetirPassword, setRepetirPassword] = useState("")
  const [alerta, setAlerta] = useState({})
  const [tokenValido, setTokenValido] = useState(false)
  const [passwordModificado, setPasswordModificado] = useState(false)

  const params = useParams()
  const {token} = params

  useEffect(()=>{
    const comprobarToken = async ()=>{
      try {
        await clienteAxios(`/administradores/olvide-password/${token}`)
        setAlerta({
          msg: "Coloca tu nuevo password"
        })
        setTokenValido(true)
      } catch (error) {
        setAlerta({
          msg: "Hubo un error con el enlace",
          error: true
        })
      }
    }
    comprobarToken()
  },[])

  const handleSubmit = async e => {
    e.preventDefault()

    if(password.length < 6){
      setAlerta({
        msg: "El password debe ser de mínimo 6 caracteres",
        error: true
      })
      return
    }

    if(password !== repetirPassword){
      setAlerta({
        msg: "Los Password no son iguales",
        error: true
      })
      return
    }

    try {
      const url = `/administradores/olvide-password/${token}`
      const {data} = await clienteAxios.post(url, {password})

      setAlerta({
        msg: data.msg
      })
      setPasswordModificado(true)
      setPassword("")
      setRepetirPassword("")
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
              Restablece tu password y no pierdas acceso a {""}
              <span className="text-black"> tus pacientes</span>
          </h1>
      </div>
      <div className="mt-20 md:mt-5 shadow-lg px-5 py-10 rounded-xl bg-white">
        {msg &&<Alerta
          alerta={alerta}
        />
        }
        {tokenValido && (
          <>
            <form
              onSubmit={handleSubmit}
            >
              <div className="my-5">
                  <label className="uppercase text-gray-600 block text-xl font-bold">
                      Nuevo Password
                  </label>
                  <input 
                      type="password"
                      placeholder="Tu nuevo password"
                      className="border w-full p-3 mt-3 bg-gray-50 rounded-xl"
                      value={password}
                      onChange={e => setPassword(e.target.value)}
                  />
              </div>
              <div className="my-5">
                  <label className="uppercase text-gray-600 block text-xl font-bold">
                      Repetir password
                  </label>
                  <input 
                      type="password"
                      placeholder="Repite tu password"
                      className="border w-full p-3 mt-3 bg-gray-50 rounded-xl"
                      value={repetirPassword}
                      onChange={e => setRepetirPassword(e.target.value)}
                  />
              </div>
              <input 
                  type="submit" 
                  value="Guardar nuevo password"
                  className="bg-primary-700 w-full py-3 px-10 rounded-xl text-white uppercase font-bold mt-5 
                  hover:cursor-pointer hover:bg-primary-800 md:w-auto"
              />
            </form>
          </>
        )}
        {passwordModificado && 
          <Link 
          className="block text-center my-5 text-gray-500"
          to="/">Iniciar sesión</Link>
        }
      </div>
    </>
  )
}

export default NuevoPassword