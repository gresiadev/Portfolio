import { Outlet, Navigate } from "react-router-dom"
import useToken from "../../hooks/useToken"

function PrivateGuard() {
   const { token } = useToken()

   return token ? <Outlet /> : <Navigate to={"/gresia-dev/projects/UserManager/login"}/>
}

export default PrivateGuard