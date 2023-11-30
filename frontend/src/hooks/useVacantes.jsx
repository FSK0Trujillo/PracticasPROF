import { useContext } from "react";
import VacantesContext from "../context/VacantesProvider"

const useVacantes = () => {
    return useContext(VacantesContext)
}

export default useVacantes;