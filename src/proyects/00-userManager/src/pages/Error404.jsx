// Components 
import CustomNavLink from "../components/navigation/NavLink"

function Error404() {
   return (
      <section className="userManager__error-page-container">
         <h1 className="userManager__error-page-h1">¡Ups! Algo salió mal</h1>
         <p>La página que estás buscando no existe o hubo un error.</p>
         <CustomNavLink to={'/'}>
            Volver al inicio
         </CustomNavLink>
      </section>
   )
}

export default Error404