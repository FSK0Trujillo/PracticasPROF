/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import { useEffect, useState, createContext} from "react"
import clienteAxios from "../config/axios"

const PublicContext = createContext()

const PublicProvider = ({children}) => {
  
  const [vacantes, setVacantes] = useState([])

  useEffect(()=>{
    const obtenerVacantes = async () => {
      try {
        const {data} = await clienteAxios("/vacantescat")
        setVacantes(data)
      } catch (error) {
        console.log(error)
      }
    }
    obtenerVacantes()
  },[])


  return (
    <PublicContext.Provider
    value={{
      vacantes
    }}
    >
      {children}
    </PublicContext.Provider>
  )
}

export {PublicProvider}

export default PublicContext