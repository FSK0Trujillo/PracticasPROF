/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react"
import { useParams, Link } from "react-router-dom"
// import axios from "axios"// No se necesita después de importar clienteAxios
import Alerta from "../components/Alerta"
import clienteAxios from "../config/axios"

const ConfirmarCuenta = () => {

  const [cuentaConfirmada, setCuentaConfirmada] = useState(false)
  const [cargando, setCargando] = useState(true)// En caso de que haya muchos usuarios, 
  // para que no se quede cargando
  const [alerta, setAlerta] = useState({})

  const params = useParams()// Para extraer el token 
  const {token} = params

  useEffect(()=>{
    const confirmarCuenta = async()=>{
      try {
        

        const url = `/administradores/confirmar/${token}`
        const {data} = await clienteAxios(url)
        setCuentaConfirmada(true)
        setAlerta({
          msg: data.msg
        })
      } catch (error) {
        setAlerta({
          msg: error.response.data.msg,
          error: true
        })
      }

      setCargando(false)
    }
    confirmarCuenta()
  },[])// El arreglo vacio es para que se ejecute solo una vez

  return (
    <>
        <div>
            <h1 className="text-primary-600 font-black text-6xl">
                Confirma tu cuenta y comienza a administras {""}
                <span className="text-black"> tus pacientes</span>
            </h1>
        </div>
        <div className="mt-20 md:mt-5 shadow-lg px-5 py-10 rounded-xl bg-white">
           {!cargando &&
              <Alerta 
                alerta={alerta}
            />}

            {cuentaConfirmada && (
              <Link 
              className="block text-center my-5 text-gray-500"
              to="/">Iniciar sesión</Link>
            )}
        </div>
    </>
  )
}

export default ConfirmarCuenta