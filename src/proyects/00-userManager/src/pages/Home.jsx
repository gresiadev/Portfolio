import IconList from "../components/layout/IconList"

function Home() {
   return (<section className="userManager__home-container">
      <article className="userManager__home-article">
         <h1 className="userManager__home-h1">Bienvenido a <span className="userManager__home-title-color">UserManager</span></h1>

         <p>
            Esta aplicación te permite gestionar una lista de usuarios de manera sencilla y rápida.
         </p>
      </article>

      <article className="userManager__home-article">
         <h2 className="userManager__home-h2">¿Qué podés hacer?</h2>
         <ul className="userManager__home-ul">
            <li className="userManager__home-li">
               <span>
                  <IconList />
               </span>
               Consultar una lista de usuarios
            </li>

            <li className="userManager__home-li">
               <span>
                  <IconList />
               </span>
               Simular la creación de un nuevo usuario
            </li>

            <li className="userManager__home-li">
               <span>
                  <IconList />
               </span>
               Simular edición de usuarios existentes
            </li>

            <li className="userManager__home-li">
               <span>
                  <IconList />
               </span>
               Simular eliminación de usuarios
            </li>
         </ul>

         <p>
            Para acceder a estas funcionalidades, primero tenés que iniciar sesión en el login con solo un click.
         </p>

         <p>
            Este sitio es una demo pensada para mostrar cómo funcionaría una gestión básica de usuarios.
         </p>
      </article>
   </section >)
}

export default Home