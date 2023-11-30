import { Link } from "react-router-dom"

const HeaderPublic = () => {

  return (
    <header className="py-4 bg-primary-600">
        <div className="top-0 container mx-auto flex flex-col lg:flex-row justify-between items-center">
            {/* <h1 className="font-black text-4xl text-white text-center uppercase">Vacantes cat</h1> */}
            <div className="flex flex-col lg:flex-row justify-start items-center">
            <img src="../../logo.jpeg" alt="logo" className="w-2/12 mx-10 rounded-lg"/>
            <h1 className="font-black text-4xl text-white text-center uppercase">Vacantes cat</h1>
            </div>
            <nav className="flex flex-col items-center lg:flex-row gap-4 mt-5 lg:mt-0">
                <Link to="/vacantescat" className="text-white text-sm uppercase font-bold">Vacantes CAT</Link>
                <Link to="/" className="text-white text-sm uppercase font-bold"> Login</Link>
            </nav>
        </div>
    </header>
  )
}

export default HeaderPublic