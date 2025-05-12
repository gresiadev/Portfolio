// Components 
import { Routes, Route, Navigate } from "react-router-dom"
import ErrorPage from "../Pages/ErrorPage"

function RoutesWhitNotFound({ children }) {
   return (
      <Routes>
         {children}
         <Route path="*" Component={() => <Navigate to={"/ErrorPage"} />} />
         <Route path="ErrorPage" Component={() => <ErrorPage />} />
      </Routes>
   )
}

export default RoutesWhitNotFound

