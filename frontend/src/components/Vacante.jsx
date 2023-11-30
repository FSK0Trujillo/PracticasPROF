/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
// /* eslint-disable react/prop-types */
import useVacantes from "../hooks/useVacantes"
const Vacante = ({vacante}) => {

    const { setEdicion, eliminarVacante } = useVacantes()
    const {id, puesto, descripcion, cualidades, experiencia, caracteristicas, datos, estudios, conocimientos, disponibles, ciudad} = vacante


  return (
    <div className="mx-5 my-10 bg-white shadow-md px-5 py-10 rounded-xl">
        <p className="font-bold uppercase text-primary-700 my-2">Puesto: {""}
            <span className="font-normal normal-case text-black">{puesto}</span>
        </p>
        <p className="font-bold uppercase text-primary-700 my-2">Descripción: {""}
            <span className="font-normal normal-case text-black">{descripcion}</span>
        </p>
        <p className="font-bold uppercase text-primary-700 my-2">Cualidades: {""}
            <span className="font-normal normal-case text-black">{cualidades}</span>
        </p>
        <p className="font-bold uppercase text-primary-700 my-2">Experiencia: {""}
            <span className="font-normal normal-case text-black">{experiencia}</span>
        </p>
        <p className="font-bold uppercase text-primary-700 my-2">Caracteristicas: {""}
            <span className="font-normal normal-case text-black">{caracteristicas}</span>
        </p>
        <p className="font-bold uppercase text-primary-700 my-2">Datos: {""}
            <span className="font-normal normal-case text-black">{datos}</span>
        </p>
        <p className="font-bold uppercase text-primary-700 my-2">Estudios: {""}
            <span className="font-normal normal-case text-black">{estudios}</span>
        </p>
        <p className="font-bold uppercase text-primary-700 my-2">Conocimientos: {""}
            <span className="font-normal normal-case text-black">{conocimientos}</span>
        </p>
        <p className="font-bold uppercase text-primary-700 my-2">Disponibles: {""}
            <span className="font-normal normal-case text-black">{disponibles}</span>
        </p>
        <p className="font-bold uppercase text-primary-700 my-2">Ciudad: {""}
            <span className="font-normal normal-case text-black">{ciudad === "clcn" ? "Culiacán": "Ciudad de México"}</span>
        </p>


        <div className="flex justify-between my-5">
            <button
                type="button"
                className="py-2 px-10 bg-primary-600 hover:bg-primary-700 text-white uppercase
                font-bold rounded-lg"
                onClick={() => setEdicion(vacante)}
            >Editar</button>
            <button
                type="button"
                className="py-2 px-10 bg-red-600 hover:bg-red-700 text-white uppercase
                font-bold rounded-lg"
                onClick={()=> eliminarVacante(id)}
            >Eliminar</button>
        </div>
    </div>
  )
}

export default Vacante