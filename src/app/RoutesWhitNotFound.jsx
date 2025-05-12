// COMPONENTS 
import { Route, Routes, Navigate } from "react-router-dom"
import ErrorPage from "../pages/ErrorPage"

function RoutesWhitNotFound({ children }) {
   return (
      <Routes>
         {children}
         <Route path="*" element={<Navigate to={"/Error-Portfolio404"} replace />} />
         <Route path="/Error-Portfolio404" element={<ErrorPage />} />
      </Routes>
   )
}

export default RoutesWhitNotFound