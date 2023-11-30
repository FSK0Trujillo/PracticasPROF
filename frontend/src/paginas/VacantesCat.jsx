import PublicNav from "../components/PublicNav"
const VacantesCat = () => {



  return (
    <>
        <h2 className="font-black text-3xl text-center">Vacantes CAT</h2>

        <p className="text-xl mt-5 mb-10 text-center mb-10">
          Selecciona tu ciudad y conoce las {""}
          <span className="text-primary-600 font-bold">vacantes disponibles</span>
          </p>
          <PublicNav />
        <h1 className="text-primary-600 font-black text-3xl mb-3">Propósito</h1>
        <p className="text-black text-xl mb-10">Acompañar a nuestros Clientes creando la mejor experiencia de comunicación que les motive a conservar lealtad, preferencia y voluntad por el grupo.</p>
        <h1 className="text-primary-600 font-black text-3xl mb-3">Visión</h1>
          <p className="text-black text-xl mb-10">Lograr que nuestros clientes nos reconozcan como un punto de contacto atractivo que los acerque a Grupo Coppel y les brinde la mejor experiencia de comunicación, las mejores opciones, siempre el cuidado de su crédito.</p>
    </>
  )
}

export default VacantesCat