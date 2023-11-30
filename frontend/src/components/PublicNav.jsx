import { Link } from "react-router-dom"
const PublicNav = () => {
  return (
    <nav className="flex gap-3 justify-center mb-5">
        <Link
            to="/vacantescat/clcn"
              className="font-bold w-1/4 bg-primary-600 rounded-2xl p-5 uppercase text-white text-center"
        >Culiacán</Link>
        <Link
            to="/vacantescat/cdmx"
              className="font-bold w-1/4 bg-primary-600 rounded-2xl p-5 uppercase text-white text-center"
        >Ciudad de México</Link>
    </nav>
  )
}

export default PublicNav