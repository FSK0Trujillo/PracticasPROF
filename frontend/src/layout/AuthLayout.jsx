import {Outlet} from "react-router-dom"
import HeaderPublic from "../components/HeaderPublic"
import FooterPublic from "../components/FooterPublic"
const AuthLayout = () => {
  return (
    <>
      <HeaderPublic/>
        <main className="container mx-auto md:grid md:grid-cols-2 mt-12 gap-10 p-5 items-center">
            <Outlet/>
        </main>
      <FooterPublic/>
    </>
  )
}

export default AuthLayout