/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react"
import { useParams, Link } from "react-router-dom"
import clienteAxios from "../config/axios"
import Alerta from "../components/Alerta"
import usePublic from "../hooks/usePublic"
import { useNavigate } from "react-router-dom"

const MasInformacion = () => {

    const [empleado, setEmpleado] = useState("")
    const [nombre, setNombre] = useState("")
    const [puestoActual, setPuestoActual] = useState("")
    const [turno, setTurno] = useState("")
    const [numeroCentro, setNumeroCentro] = useState("")
    const [nombreCentro, setNombreCentro] = useState(null)
    const [telefono, setTelefono] = useState("")
    const [cv, setCV] = useState(null)

    const {vacantes} = usePublic()

    const [alerta, setAlerta] = useState({})

    const params = useParams()

    const [vacante, setVacante] = useState({})
    const {id, ciudad} = params

    useEffect(() => {
        const obtenerInformacion = async () => {

            try {
                const url = `vacantescat/${ciudad}/${id}`
                const {data} = await clienteAxios(url)
                setVacante(data)
            } catch (error) {
                console.log(error)
            }

            // console.log(vacante.estudios.split(". ").forEach(estudio => {
            //     console.log(estudio)
            // }))
        }
        obtenerInformacion()
    },[])

    const handleSubmit = async e => {
        e.preventDefault()
        const regex = /^[0-9]*$/;
        const onlyNumbers = regex.test(telefono)

        // Validar que haya un archivo CV
        if(!cv){
            setAlerta({msg: "Todos los campos son obligatorios", error: true})
            return
        }

        // Validar que no haya campos vacios
        if([empleado, nombre, puestoActual, turno, nombreCentro, nombreCentro, telefono].includes("")){
            setAlerta({msg: "Todos los campos son obligatorios", error: true})
            return
        }

        // Validar que el teléfono sean solo números y tenga 10 caracteres
        if(!onlyNumbers || Object.values(telefono).length !== 10){
            setAlerta({msg: "Teléfono incorrecto", error: true})
            return
        }

        // Si todo sale bien, hacer la petición para registrar en la base
        try {

            const {administrador, id, puesto, ciudad} = vacante
            
            const url = `vacantescat/${ciudad}/${id}`
            const datosFormulario = new FormData()
            datosFormulario.append("myFile", cv[0])
            datosFormulario.append("empleado", empleado)
            datosFormulario.append("nombre", nombre)
            datosFormulario.append("puestoActual", puestoActual)
            datosFormulario.append("turno", turno)
            datosFormulario.append("numeroCentro", numeroCentro)
            datosFormulario.append("nombreCentro", nombreCentro)
            datosFormulario.append("telefono", telefono)
            datosFormulario.append("puesto_deseado", puesto)
            datosFormulario.append("ciudad", ciudad)
            datosFormulario.append("cv (formato PDF)", cv)
            datosFormulario.append("administrador", administrador)
            const {data} = await clienteAxios.post(url, datosFormulario)

            setAlerta({msg: data.msg})
            

            setTimeout(() => {
                setAlerta({})
            }, 5000);

        } catch (error) {
            setAlerta({msg: error.response.data.msg, error: true})
        }
    }

    const {msg} = alerta
  return (

    <>
    <nav className="flex gap-3 mb-10">
        <Link
            to={`/vacantescat/${ciudad}`}
            className="ps-3 font-bold uppercase text-gray-500"
        >Regresar</Link>
    </nav>
    <h2 className="font-black text-3xl text-center uppercase">{vacante.puesto}</h2>

        <p className="text-xl mt-5 mb-10 text-center">
          {vacante.disponibles==1 ? `${vacante.disponibles} vacante disponible en` : `${vacante.disponibles} vacantes disponibles en`} {""}
          <span className="text-primary-600 font-bold">{vacante.ciudad == "clcn" ? "Culiacán" : "Ciudad de México"}</span>
        </p>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 justify-between justify-items-start mb-10">
            <div className="mx-5 px-5 py-10 bg-white shadow-md rounded-xl w-full"> 
                <h1 className="text-black font-bold text-center text-3xl uppercase mb-5">Información</h1>
                <p className="font-bold uppercase text-primary-700 my-2 mb-5">Descripción: {""}
                    <span className="font-normal normal-case text-black">{vacante.descripcion}</span>
                </p>
                <p className="font-bold uppercase text-primary-700 my-2 mb-5">Cualidades: {""}
                    <span className="font-normal normal-case text-black">{vacante.cualidades}</span>
                </p>
                <p className="font-bold uppercase text-primary-700 my-2 mb-5">Experiencia: {""}
                    <span className="font-normal normal-case text-black">{vacante.experiencia}</span>
                </p>
                <p className="font-bold uppercase text-primary-700 my-2 mb-5">Caracteristicas: {""}
                    <span className="font-normal normal-case text-black">{vacante.caracteristicas}</span>
                </p>
                <p className="font-bold uppercase text-primary-700 my-2 mb-5">Datos: {""}
                    <span className="font-normal normal-case text-black">{vacante.datos}</span>
                </p>
                <p className="font-bold uppercase text-primary-700 my-2 mb-5">Estudios: {""}
                    <span className="font-normal normal-case text-black">{vacante.estudios}</span>
                </p>
                <p className="font-bold uppercase text-primary-700 my-2 mb-5">Conocimientos: {""}
                    <span className="font-normal normal-case text-black">{vacante.conocimientos}</span>
                </p>
            </div>
        {vacante.disponibles !== 0 &&
        <form 
        className="mx-5 bg-white shadow-md px-5 py-10 rounded-xl w-full" 
        encType="multipart/form-data"
        onSubmit={handleSubmit}
        >
        <div className="text-black font-bold text-center text-3xl uppercase mb-5">Formulario</div>
        <div className="mb-5">
            <label 
                htmlFor="empleado"
                className="text-gray-700 uppercase font-bold"
            >Empleado</label>
            <input 
            id="empleado"
            type="text"
            placeholder="Tu número de empleado" 
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={empleado}
            onChange={e => setEmpleado(e.target.value)}
            />
        </div>
        <div className="mb-5">
            <label 
                htmlFor="nombre"
                className="text-gray-700 uppercase font-bold"
            >Nombre</label>
            <input 
            id="nombre"
            type="text"
            placeholder="Tu nombre completo" 
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={nombre}
            onChange={e => setNombre(e.target.value)}
            />
        </div>
        <div className="mb-5">
            <label 
                htmlFor="puestoActual"
                className="text-gray-700 uppercase font-bold"
            >Puesto</label>
            <input 
            id="puestoActual"
            type="text"
            placeholder="Tu puesto actual" 
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={puestoActual}
            onChange={e => setPuestoActual(e.target.value)}
            />
        </div>
        <div className="mb-5">
            <label 
                htmlFor="turno"
                className="text-gray-700 uppercase font-bold"
            >Turno</label>
                <select
                    id="turno"
                    className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                    value={turno}
                    onChange={e => setTurno(e.target.value)}
                >Selecciona tu turno
                <option value="" disabled>Selecciona tu turno</option>
                <option value="matutino">Matutino</option>
                <option value="vespertino">Vespertino</option>
                <option value="mixto">Mixto</option>
                <option value="nocturno">Nocturno</option>
                </select>
            </div>
        <div className="mb-5">
            <label 
                htmlFor="numeroCentro"
                className="text-gray-700 uppercase font-bold"
            >Centro</label>
            <input 
            id="numeroCentro"
            type="text"
            placeholder="Tu número de centro" 
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={numeroCentro}
            onChange={e => setNumeroCentro(e.target.value)}
            />
        </div>
        <div className="mb-5">
            <label 
                htmlFor="telefono"
                className="text-gray-700 uppercase font-bold"
            >Teléfono</label>
            <input 
            id="telefono"
            type="text"
            placeholder="Tu número de telefono a 10 digitos" 
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={telefono}
            onChange={e => setTelefono(e.target.value)}
            />
        </div>
        <div className="mb-5">
            <label htmlFor="MyFile"
            className="text-gray-700 uppercase font-bold"
            >CV (formato PDF)</label>
            <input 
            accept="application/pdf"
            type="file"
            name="myFile"
            className="border-2 w-full mt-2 placeholder-gray-400 rounded-lg"
            onChange={e => setCV(e.target.files)}
            />
        </div>

        <input 
        type="submit" 
        className="px-3 bg-primary-600 w-full p-3 text-white uppercase font-bold
        hover:bg-primary-700 cursor-pointer transition-colors rounded-lg mb-3"
        value="Registrarme"
        />

        {msg && <Alerta alerta={alerta}/>}

        </form>
        }

    </div>
    </>
  )
}

export default MasInformacion