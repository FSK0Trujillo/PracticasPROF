import { useContext } from "react";
import RegistrosContext from "../context/RegistrosProvider";

const useRegistros = ()=>{
    return useContext(RegistrosContext)
}

export default useRegistros