import IconList from "../components/layout/IconList"

function About() {
   return (
      <section className="userManager__about-container">
         <article className="userManager__about-article">
            <h1 className="userManager__about-h1">Acerca del proyecto</h1>

            <p>
               Esta aplicación fue desarrollada con <span className="userManager__word-resalt">React</span> y tiene como objetivo simular un sistema básico de gestión de usuarios,
               incorporando buenas prácticas y funcionalidades comunes en aplicaciones web modernas.
            </p>
         </article>

         <article className="userManager__about-article">
            <h2 className="userManager__about-h2">Tecnologías y conceptos aplicados</h2>
            <ul className="userManager__about-ul">
               <li className="userManager__about-li">
                  <span><IconList /></span>
                  React con JSX, componentes funcionales y hooks
               </li>
               <li className="userManager__about-li">
                  <span> <IconList /></span>
                  Routing con React Router DOM (rutas públicas y privadas)
               </li>
               <li className="userManager__about-li"><span><IconList /></span>
                  Autenticación simulada para proteger ciertas rutas
               </li>
               <li className="userManager__about-li">
                  <span><IconList /></span>
                  Redux Toolkit + hooks personalizados para el manejo de estados globales
               </li>
               <li className="userManager__about-li">
                  <span><IconList /></span>
                  Separación entre lógica y presentación de componentes
               </li>
               <li className="userManager__about-li">
                  <span><IconList /></span>
                  Validación de formularios
               </li>
               <li className="userManager__about-li">
                  <span><IconList /></span>Manejo de errores y navegación hacia página de error
               </li>
            </ul>
         </article>

         <article className="userManager__about-article">
            <h2 className="userManager__about-h2">¿Qué se podría mejorar o agregar?</h2>
            <ul className="userManager__about-ul">
               <li className="userManager__about-li">
                  <span><IconList /></span>
                  Persistencia real de datos (conexión a una API o backend)
               </li>
               <li className="userManager__about-li"><span><IconList /></span>
                  Falta responsive. Este proyecto se centró en funcionalidad.
               </li>
               <li className="userManager__about-li">
                  <span><IconList /></span>
                  Pruebas unitarias con Jest y React Testing Library
               </li>
            </ul>

            <p>
               Este proyecto forma parte de mi portfolio como desarrollador <span className="userManager__word-resalt">frontend</span> y busca demostrar dominio de herramientas clave del ecosistema <span className="userManager__word-resalt">React</span> .
            </p>
         </article>
      </section>
   )
}

export default About