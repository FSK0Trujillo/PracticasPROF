import { BrowserRouter, Routes, Route} from "react-router-dom"
import AuthLayout from "./layout/AuthLayout"
import Login from "./paginas/Login"
import Registrar from "./paginas/Registrar"
import OlvidePassword from "./paginas/OlvidePassword"
import NuevoPassword from "./paginas/NuevoPassword"
import ConfirmarCuenta from "./paginas/ConfirmarCuenta"

import {AuthProvider} from "./context/AuthProvider"
import {VacantesProvider} from "./context/VacantesProvider"
import {RegistrosProvider} from "./context/RegistrosProvider"
import { PublicProvider } from "./context/PublicProvider"

import RutaProtegida from "./layout/RutaProtegida"
import AdministrarVacantes from "./paginas/AdministrarVacantes"
import EditarPerfil from "./paginas/EditarPerfil"
import CambiarPassword from "./paginas/CambiarPassword"
import AdministrarRegistros from "./paginas/AdministrarRegistros"
import EditarRegistro from "./paginas/EditarRegistro"
import VacantesCat from "./paginas/VacantesCat"
import PublicLayout from "./layout/PublicLayout"
import MostrarVacantes from "./paginas/MostrarVacantes"
import MasInformacion from "./paginas/MasInformacion"
function App() {

  return (
    <BrowserRouter>
      <PublicProvider>
        <AuthProvider>
          <VacantesProvider>
            <RegistrosProvider>
              <Routes>
                {/* Ruta pública */}
                <Route path="/" element={<AuthLayout/>}>
                  <Route index element={<Login/>}/>
                    <Route path="registrar" element={<Registrar/>}/>
                    <Route path="olvide-password" element={<OlvidePassword/>}/>
                    <Route path="olvide-password/:token" element={<NuevoPassword/>}/>
                    <Route path="confirmar/:token" element={<ConfirmarCuenta/>}/>
                </Route>

                {/* Ruta privada */}
                <Route path="/admin" element={<RutaProtegida/>}>
                    <Route index element={<AdministrarVacantes/>}/>
                    <Route path="perfil" element={<EditarPerfil/>}/>
                    <Route path="cambiar-password" element={<CambiarPassword/>}/>
                    <Route path="registros" element={<AdministrarRegistros/>}/>
                    <Route path="registros/:id" element={<EditarRegistro/>}/>
                </Route>

                <Route path="/vacantescat" element={<PublicLayout/>}>
                    <Route index element={<VacantesCat/>}/>
                    <Route path=":ciudad" element={<MostrarVacantes/>}/>
                    <Route path=":ciudad/:id" element={<MasInformacion/>}/>
                </Route>
            </Routes>
            </RegistrosProvider>
          </VacantesProvider>
        </AuthProvider>
      </PublicProvider>
    </BrowserRouter>
  )
}

export default App
