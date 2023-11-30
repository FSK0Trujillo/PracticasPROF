/* eslint-disable react-refresh/only-export-components */
/* eslint-disable no-unused-vars */
import { useState, useEffect, forwardRef } from "react"
import Alerta from "./Alerta"
import useVacantes from "../hooks/useVacantes"

const Formulario = (props, ref) => {

    const [id, setId] = useState(null)
    const [puesto, setPuesto] = useState("")
    const [descripcion, setDescripcion] = useState("")
    const [cualidades, setCualidades] = useState("")
    const [experiencia, setExperiencia] = useState("")
    const [caracteristicas, setCaracteristicas] = useState("")
    const [datos, setDatos] = useState("")
    const [estudios, setEstudios] = useState("")
    const [conocimientos, setConocimientos] = useState("")
    const [disponibles, setDisponibles] = useState("")
    const [ciudad, setCiudad] = useState("")

    const [alerta, setAlerta] = useState({})

    const {guardarVacante, vacante} = useVacantes()
    
//     // Detectar cuando cambia el paciente
    useEffect(() => {
        if(vacante?.id){
            setId(vacante.id)
            setPuesto(vacante.puesto)
            setDescripcion(vacante.descripcion)
            setCualidades(vacante.cualidades)
            setExperiencia(vacante.experiencia)
            setCaracteristicas(vacante.caracteristicas)
            setDatos(vacante.datos)
            setEstudios(vacante.estudios)
            setConocimientos(vacante.conocimientos)
            setDisponibles(vacante.disponibles)
            setCiudad(vacante.ciudad)
        }
    },[vacante])

    const handleSubmit = e => {
        e.preventDefault()

        if([id, puesto, descripcion, cualidades, experiencia, caracteristicas, datos, estudios, conocimientos, disponibles, ciudad].includes("")){
            setAlerta({msg: "Todos los campos son obligatorios", error: true})
            return
        }
        setAlerta({msg: "Guardado correctamente"})
        guardarVacante({id, puesto, descripcion, cualidades, experiencia, caracteristicas, datos, estudios, conocimientos, disponibles, ciudad})
        setId(null)
        setPuesto("")
        setDescripcion("")
        setCualidades("")
        setExperiencia("")
        setCaracteristicas("")
        setDatos("")
        setEstudios("")
        setConocimientos("")
        setDisponibles("")
        setCiudad("")

        setTimeout(() => {
            setAlerta({})
        }, 3000);
    }
    const {msg} = alerta

  return (
    <>
        <h2 className="font-black text-3xl text-center">Administrador de Vacantes</h2>
        <p className="text-xl mt-5 mb-10 text-center">
        Añade las Vacantes y {""}
        <span className="text-primary-600 font-bold">Administralas</span>
        </p>
        <form
        ref={ref} 
        id="formulario"
        className="bg-white py-10 px-5 mb-10 lg:mb-5 shadow-md rounded-md"
        onSubmit={handleSubmit}>
            {/* Input para el puesto */}
            <div className="mb-5">
                <label 
                    htmlFor="puesto"
                    className="text-gray-700 uppercase font-bold"
                >Puesto</label>
                <input 
                id="puesto"
                type="text"
                placeholder="Nombre del puesto" 
                className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                value={puesto}
                onChange={e => setPuesto(e.target.value)}
                />
            </div>
            {/* Input para la descripción */}
            <div className="mb-5">
                <label 
                    htmlFor="descripcion"
                    className="text-gray-700 uppercase font-bold"
                >Descripción</label>
                <textarea 
                id="descripcion"
                placeholder="Describe el puesto" 
                className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                value={descripcion}
                onChange={e => setDescripcion(e.target.value)}
                />
            </div>

            {/* Input para las cualidades */}
            <div className="mb-5">
                <label 
                    htmlFor="cualidades"
                    className="text-gray-700 uppercase font-bold"
                >Cualidades</label>
                <input 
                id="cualidades"
                type="text"
                placeholder="Cualidades del puesto" 
                className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                value={cualidades}
                onChange={e => setCualidades(e.target.value)}
                />
            </div>

            {/* Input para la experiencia */}
            <div className="mb-5">
                <label 
                    htmlFor="experiencia"
                    className="text-gray-700 uppercase font-bold"
                >Experiencia</label>
                <textarea 
                id="experiencia"
                placeholder="Experiencia deseada" 
                className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                value={experiencia}
                onChange={e => setExperiencia(e.target.value)}
                />
            </div>

            {/* Input para las caracteristicas */}
            <div className="mb-5">
                <label 
                    htmlFor="caracteristicas"
                    className="text-gray-700 uppercase font-bold"
                >Caracteristicas</label>
                <input 
                id="caracteristicas"
                type="text"
                placeholder="Caracteristicas del puesto" 
                className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                value={caracteristicas}
                onChange={e => setCaracteristicas(e.target.value)}
                />
            </div>

            {/* Input para los datos */}
            <div className="mb-5">
                <label 
                    htmlFor="datos"
                    className="text-gray-700 uppercase font-bold"
                >Datos</label>
                <input 
                id="datos"
                type="text"
                placeholder="Datos del puesto" 
                className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                value={datos}
                onChange={e => setDatos(e.target.value)}
                />
            </div>

            {/* Input para los estudios */}
            <div className="mb-5">
                <label 
                    htmlFor="estudios"
                    className="text-gray-700 uppercase font-bold"
                >Estudios</label>
                <textarea 
                id="estudios"
                placeholder="Estudios previos" 
                className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                value={estudios}
                onChange={e => setEstudios(e.target.value)}
                />
            </div>

            {/* Input para los conocimientos */}
            <div className="mb-5">
                <label 
                    htmlFor="conocimientos"
                    className="text-gray-700 uppercase font-bold"
                >Conocimientos</label>
                <input 
                id="conocimientos"
                type="text"
                placeholder="Conocimientos del puesto" 
                className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                value={conocimientos}
                onChange={e => setConocimientos(e.target.value)}
                />
            </div>

            {/* Input para las vacantes disponibles */}
            <div className="mb-5">
                <label 
                    htmlFor="disponibles"
                    className="text-gray-700 uppercase font-bold"
                >disponibles</label>
                <input 
                id="disponibles"
                type="number"
                placeholder="Vacantes disponibles" 
                className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                min={0}
                value={disponibles}
                onChange={e => setDisponibles(e.target.value)}
                />
            </div>

            <div className="mb-5">
                <label 
                    htmlFor="ciudad"
                    className="text-gray-700 uppercase font-bold"
                >Ciudad</label>
                    <select
                        id="ciudad"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        value={ciudad}
                        onChange={e => setCiudad(e.target.value)}
                    >Selecciona tu ciudad
                    <option value="" disabled>Selecciona tu ciudad</option>
                    <option value="clcn">Culiacán</option>
                    <option value="cdmx">Ciudad de México</option>
                    </select>
            </div>


            <input 
                type="submit" 
                className="bg-primary-600 w-full p-3 text-white uppercase font-bold
                hover:bg-primary-700 cursor-pointer transition-colors rounded-lg"
                value={id ? "Guardar cambios" : "Agregar Vacante"}/>
        </form>
        {msg && <Alerta alerta={alerta}/>}
    </>
  )
}

export default forwardRef(Formulario) 