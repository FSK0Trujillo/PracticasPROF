import useRegistros from "../hooks/useRegistros"
const RegistrosNav = () => {

  const {setFiltro} = useRegistros()

  return (
            <div
            className="inline-flex mb-5 mx-5 rounded-md shadow-[0_4px_9px_-4px_#3b71ca] bg-primary-300 transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
            role="group">
              <button
                value="NUEVO"
                type="button"
                className="inline-block rounded-l bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white transition duration-150 ease-in-out hover:bg-primary-800 focus:bg-primary-600 focus:outline-none focus:ring-0 active:bg-primary-700"
                data-te-ripple-init
                data-te-ripple-color="light"
                onClick={(e) => setFiltro(e.target.value)}>
                Nuevos
              </button>
              <button
                value="PENDIENTE"
                type="button"
                className="inline-block bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white transition duration-150 ease-in-out hover:bg-primary-800 focus:bg-primary-600 focus:outline-none focus:ring-0 active:bg-primary-700"
                data-te-ripple-init
                data-te-ripple-color="light"
                onClick={(e) => setFiltro(e.target.value)}>
                Pendientes
              </button>
              <button
                value="EN PROCESO"
                type="button"
                className="inline-block rounded-r bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white transition duration-150 ease-in-out hover:bg-primary-800 focus:bg-primary-600 focus:outline-none focus:ring-0 active:bg-primary-700"
                data-te-ripple-init
                data-te-ripple-color="light"
                onClick={(e) => setFiltro(e.target.value)}>
                En proceso
              </button>
              <button
              value="FINALIZADO"
                type="button"
                className="inline-block rounded-r bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white transition duration-150 ease-in-out hover:bg-primary-800 focus:bg-primary-600 focus:outline-none focus:ring-0 active:bg-primary-700"
                data-te-ripple-init
                data-te-ripple-color="light"
                onClick={(e) => setFiltro(e.target.value)}>
                Finalizados
              </button>
          </div>
  )
}

export default RegistrosNav