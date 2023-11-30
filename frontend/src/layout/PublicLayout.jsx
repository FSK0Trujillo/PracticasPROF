import HeaderPublic from "../components/HeaderPublic"
import FooterPublic from "../components/FooterPublic"
import { Outlet } from "react-router-dom"
const PublicLayout = () => {
  return (
    <>
    <HeaderPublic/>

      <main className="container mx-auto mt-10">
        <Outlet/>
      </main>
    <FooterPublic/>
  </>
  )
}

export default PublicLayout