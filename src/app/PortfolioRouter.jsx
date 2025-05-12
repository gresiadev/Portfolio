// COMPONENTS 
import { Routes, Route, Navigate } from "react-router-dom"
import Portfolio from "../pages/Portfolio";
import ErrorPage from "../pages/ErrorPage";

// ROUTER 
import ProjectsRouter from "./ProjectsRouter";

function PortfolioRouter() {
   return (
      <Routes>
         <Route path="/" element={<Navigate to={"/gresia-dev"} />} />
         <Route path="gresia-dev" element={<Portfolio />} />
         <Route path="gresia-dev/*" element={<ProjectsRouter />} />
         <Route path="*" element={<Navigate to={"/Error-Portfolio404"} />} />
         <Route path="/Error-Portfolio404" element={<ErrorPage />} />
      </Routes>
   )
}


export default PortfolioRouter