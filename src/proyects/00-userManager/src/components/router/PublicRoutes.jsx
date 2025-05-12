import { Route } from "react-router-dom"

// ROUTES WHIT NOT FOUND PORTFOLIO
import RoutesWhitNotFound from "../../../../../app/RoutesWhitNotFound"

// PAGES 
import Home from "../../pages/Home"
import About from "../../pages/About"
import Login from "../../pages/Login"

function PublicRoutes() {
   return (
      <RoutesWhitNotFound>
         <Route index element={<Home/>}/>
         <Route path="home" element={<Home />} />
         <Route path="about" element={<About />} />
         <Route path="login" element={<Login />} />
      </RoutesWhitNotFound>
   )
}

export default PublicRoutes