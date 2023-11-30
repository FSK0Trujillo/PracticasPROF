/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react"
import clienteAxios from "../config/axios"
import VacanteCiudad from "./VacanteCiudad"
import { useParams } from "react-router-dom"
import usePublic from "../hooks/usePublic"
import PublicNav from "../components/PublicNav"

const VacantesCiudad = () => {

    // const [vacantes, setVacantes] = useState([])
    const params = useParams()
    const {ciudad} = params
    
    const {vacantes} = usePublic()

    const vacantesCiudad = vacantes.filter(vacante => vacante.ciudad === ciudad)
    

  return (
    
    <>
    
      {vacantesCiudad.length 
      ? (
        <>
          <h2 className="font-black text-3xl text-center">Vacantes {ciudad == "clcn" ? "Culiacán": "Ciudad de México"}</h2>

          <p className="text-xl mt-5 mb-10 text-center">
            Conoce las
            <span className="text-primary-600 font-bold"> Vacantes disponibles</span>
                      </p>
                      <PublicNav />
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
                {vacantesCiudad.map(vacante => (
                <VacanteCiudad
                    key={vacante.id}
                    vacante={vacante}
                />
                ))}
            </div>

        </>
      ) 
      : (
        <>
          <h2 className="font-black text-3xl text-center">No hay Vacantes</h2>

          <p className="text-xl mt-5 mb-10 text-center">
            Cuando haya vacantes en tu ciudad, {""}
            <span className="text-primary-600 font-bold">apareceran en este lugar</span>
          </p>
        </>
      )}
    </>
  )
}

export default VacantesCiudad