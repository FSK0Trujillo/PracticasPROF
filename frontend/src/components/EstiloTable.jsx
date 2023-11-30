/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import useRegistros from "../hooks/useRegistros"
import { useNavigate } from "react-router-dom"
import { useState } from "react"
import { Link } from "react-router-dom"

const EstiloTable = ({registro}) => {

    
    const {registros, setEdicion, setEliminar} = useRegistros()
    const {id,empleado, nombre, puesto_actual, turno, numero_centro, nombre_area, telefono, puesto_deseado, ciudad, cv, fecha_registro, estado} = registro
    const navigate = useNavigate(`/admin/registros/${id}`)


  return (
    // <Link to={`registros/${id}`}>
    <tr>
        <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">{fecha_registro}</td>
        <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">{empleado}</td>
        <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">{nombre}</td>
        <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">{puesto_actual}</td>
        <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">{puesto_deseado}</td>
        <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">{estado}</td>
        <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
          <div className="flex justify-between gap-10">
            <button 
            type="button" 
            className="text-teal-600 hover:text-teal-700"
            onClick={() => setEdicion(registro)}
            >Ver más</button>
            <button type="button" className="text-red-600 hover:text-red-700"
            onClick={() => setEliminar(id)}
            >Eliminar</button>
          </div>
        </td>
    </tr>
  )
}

export default EstiloTable