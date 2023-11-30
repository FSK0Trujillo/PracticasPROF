import useVacantes from "../hooks/useVacantes"
import Vacante from "./Vacante"

const ListadoVacantes = () => {

    const {vacantes} = useVacantes()
  return (
    <>
      {vacantes.length 
      ? (
        <>
          <h2 className="font-black text-3xl text-center">Listado Vacantes</h2>

          <p className="text-xl mt-5 mb-10 text-center">
            Administra las {""}
            <span className="text-primary-600 font-bold"> Vacantes</span>
          </p>
          {vacantes.map(vacante => (
          <Vacante
            key={vacante.id}
            vacante={vacante}
          />
          ))}
        </>
      ) 
      : (
        <>
          <h2 className="font-black text-3xl text-center">No hay vacantes</h2>

          <p className="text-xl mt-5 mb-10 text-center">
            Comienza agregando vacantes {""}
            <span className="text-primary-600 font-bold">y apareceran en este lugar</span>
          </p>
        </>
      )}
    </>
  )
}

export default ListadoVacantes