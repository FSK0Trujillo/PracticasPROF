import Formulario from "../components/Formulario"
import ListadoVacantes from "../components/ListadoVacantes"
import { useState } from "react"
import useVacantes from "../hooks/useVacantes"
const AdministrarVacantes = () => {

  const {ref} = useVacantes()
  const [mostrarFormulario, setMostrarFormulario] = useState(false)
  return (
    <div className="flex flex-col md:flex-row">
      <button
        type="button"
        className="bg-primary-600 text-white font-bold uppercase mx-10 p-3 rounded-md mb-10 md:hidden"
        onClick={()=> setMostrarFormulario(!mostrarFormulario)}
      >{mostrarFormulario ? "Ocultar Formulario" : "Mostrar Formulario"}
      </button>
      
      <div className={`${mostrarFormulario ? "block" : "hidden"} md:block md:w-1/2 lg:w-2/5`}>
        <Formulario ref={ref}/>
      </div>
      <div className="md:w-1/2 lg:w-3/5">
        <ListadoVacantes/>
      </div>
    </div>
  )
}

export default AdministrarVacantes