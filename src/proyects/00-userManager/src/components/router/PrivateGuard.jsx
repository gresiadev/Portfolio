// Components 
import { Outlet, Navigate } from "react-router-dom"

// Hooks 
import { useAppSelector } from "../../hooks/useStore"

function PrivateGuard() {
   const { token } = useAppSelector(store => store.token)

   return token ? <Outlet /> : <Navigate to={"/gresia-dev/projects/UserManager/login"} />
}

export default PrivateGuard