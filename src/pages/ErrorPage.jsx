// COMPONENT 
import { NavLink } from "react-router-dom"

function ErrorPage() {
   return (
      <section className="portfolio__errorPage">
         <h1 className="portfolio__errorPage-title">PAGE NOT FOUND</h1>
         <div className="portfolio__errorPage-text-container">
            <p className="portfolio__errorPage-text">
               Lo sentimos, pero la página que estás buscando no existe. Tal vez
               la ruta esté mal escrita o haya sido eliminada.
            </p>
            <NavLink
               to="/gresia-dev"
               className="portfolio__errorPage-link"
            >
               Volver a la página principal
            </NavLink>
         </div>

      </section>
   )
}
export default ErrorPage