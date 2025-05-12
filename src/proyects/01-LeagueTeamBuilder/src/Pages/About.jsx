import IconList from "../components/layout/IconList"

function About() {
   return (
      <section className="leagueTeam__about-container">
         <section className="leagueTeam__about-section-1">
            <h1 className="leagueTeam__about-title">Sobre esta App</h1>
            <p className="leagueTeam__about-section-1-p">
               League Team Builder es una Single Page Application desarrollada con <strong className="leagueTeam__about-section-1-strong">React</strong> y <strong className="leagueTeam__about-section-1-strong">React Router DOM</strong>, pensada para practicar patrones modernos en aplicaciones escalables.
            </p>
         </section>

         <section className="leagueTeam__about-section-2">
            <h2 className="leagueTeam__about-section-2-title">¿Qué podés hacer?</h2>
            <ul className="leagueTeam__about-section-2-list">
               <li className="leagueTeam__about-section-2-li">
                  <span><IconList /></span>
                  Navegar entre 4 páginas públicas.</li>
               <li className="leagueTeam__about-section-2-li">
                  <span><IconList /></span>
                  Filtrar y explorar campeones de LoL.</li>
               <li className="leagueTeam__about-section-2-li">
                  <span><IconList /></span>
                  Armar un equipo personalizado, sin límites.</li>
               <li className="leagueTeam__about-section-2-li">
                  <span><IconList /></span>
                  Consultar builds y runas sugeridas por campeón.</li>
            </ul>
         </section>

         <section className="leagueTeam__about-section-3">
            <h2 className="leagueTeam__about-section-3-title">Tecnologías y lógica aplicada</h2>
            <ul className="leagueTeam__about-section-3-list">
               <li className="leagueTeam__about-section-3-li">
                  <span><IconList /></span>
                  React Router DOM para navegación entre vistas.</li>
               <li className="leagueTeam__about-section-3-li">
                  <span><IconList /></span>
                  <strong className="leagueTeam__about-section-3-strong ">Context API</strong> para manejo global del estado (campeones, filtros y team).</li>
               <li className="leagueTeam__about-section-3-li">
                  <span><IconList /></span>
                  <strong className="leagueTeam__about-section-3-strong ">Custom Hooks</strong> para controlar el acceso seguro a los contextos.</li>
               <li className="leagueTeam__about-section-3-li">
                  <span><IconList /></span>
                  <strong className="leagueTeam__about-section-3-strong ">useReducer</strong> para manejar la lógica compleja del team (agregar, quitar, aumentar cantidad, limpiar).</li>
               <li className="leagueTeam__about-section-3-li">
                  <span><IconList /></span>
                  Persistencia de datos con localStorage.</li>
            </ul>

            <p>
               Este proyecto forma parte de mi portfolio como desarrollador frontend. El objetivo fue aplicar buenas prácticas en el manejo de estado, composición de componentes y estructura de una App React.
            </p>
         </section>
      </section>
   )
}
export default About