/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState } from "react"
import { Link } from "react-router-dom"
const VacanteCiudad = ({vacante}) => {

    const {puesto, descripcion, id, ciudad, disponibles, cualidades} = vacante
  return (
    <div className="mx-5 my-5 bg-white border shadow-md px-5 py-5 rounded-xl">
      <p className="text-end font-medium text-gray-400">Disponibles: {""}<span className="font-bold text-primary-600 text-lg">{disponibles}</span></p>

      <h1 className="text-primary-600  text-center mb-5 font-bold text-2xl uppercase">{puesto}</h1>
      
      <p className="font-bold uppercase text-primary-700 my-2">Descripción: {""}
      <span className="font-normal normal-case text-black">{descripcion.substr(0,100)}...</span>
      </p>

      <p className="font-bold uppercase text-primary-700 my-2">Cualidades: {""}
      <span className="font-normal normal-case text-black">{cualidades.substr(0,100)}...</span>
      </p>

      <nav className="flex text-center">
        <Link
            to={`/vacantescat/${ciudad}/${id}`}
            className="w-full py-2 px-10 bg-primary-600 hover:bg-primary-700 text-white uppercase
            font-bold rounded-lg"
        >Más información</Link>
      </nav>
    </div>
  )
}

export default VacanteCiudad