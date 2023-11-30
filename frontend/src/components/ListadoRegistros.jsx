/* eslint-disable no-unused-vars */
import useRegistros from "../hooks/useRegistros"
import EstiloTable from "./EstiloTable"

const ListadoRegistros = () => {

    const {registros, filtro} = useRegistros()

    const registrosFiltro = registros.filter(registro => registro.estado === filtro)
    const registroFiltroOrdenado = registrosFiltro.sort((a,b) => new Date(b.fecha_registro) - new Date(a.fecha_registro))
  return (
    <>
      {registroFiltroOrdenado.length 
      ? (
        <>
          <h2 className="font-black text-3xl text-center">Listado Registros</h2>

          <p className="text-xl mt-5 mb-10 text-center">
            Administra los {""}
            <span className="text-primary-600 font-bold"> Registros</span>
          </p>

          <div className="flex justify-center">
            <table className="table-auto mb-10">
              <thead className="bg-gray-100">
                <tr>
                    <th className="px-6 py-3 border-b border-gray-200  text-left text-sm leading-4 font-medium text-gray-600 uppercase tracking-wider">Fecha Registro</th>
                    <th className="px-6 py-3 border-b border-gray-200  text-left text-sm leading-4 font-medium text-gray-600 uppercase tracking-wider">Empleado</th>
                    <th className="px-6 py-3 border-b border-gray-200  text-left text-sm leading-4 font-medium text-gray-600 uppercase tracking-wider">Nombre</th>
                    <th className="px-6 py-3 border-b border-gray-200  text-left text-sm leading-4 font-medium text-gray-600 uppercase tracking-wider">Puesto actual</th>
                    <th className="px-6 py-3 border-b border-gray-200  text-left text-sm leading-4 font-medium text-gray-600 uppercase tracking-wider">Puesto deseado</th>
                    <th className="px-6 py-3 border-b border-gray-200  text-left text-sm leading-4 font-medium text-gray-600 uppercase tracking-wider justify-between flex grid-rows-1 gap-3">Estado</th>
                    <th className="px-6 py-3 border-b border-gray-200  text-center text-sm leading-4 font-medium text-gray-600 uppercase tracking-wider">Accion</th>
                </tr>
              </thead>
              <tbody>
                {registroFiltroOrdenado.map(registro => (
                <EstiloTable
                    key={registro.id}
                    registro={registro}
                />
                ))}
              </tbody>
            </table>
          </div>
        </>
      ) 
      : (
        <>
          <h2 className="font-black text-3xl text-center">No hay Registros</h2>

          <p className="text-xl mt-5 mb-10 text-center">
            Cuando alguien se haya registrado, sus datos {""}
            <span className="text-primary-600 font-bold">apareceran en este lugar</span>
          </p>
        </>
      )}
    </>
  )
}

export default ListadoRegistros